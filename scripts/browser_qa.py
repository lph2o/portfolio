# /// script
# dependencies = ["playwright"]
# ///
import asyncio, json, os
from pathlib import Path
from playwright.async_api import async_playwright

ROUTES = ["/", "/projects", "/projects/hikma", "/projects/content-factory", "/projects/msda", "/about", "/contact"]
ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / ".qa"
OUTPUT.mkdir(exist_ok=True)
BASE = os.environ.get("QA_BASE_URL", "http://127.0.0.1:3000")
CHANNEL = os.environ.get("QA_BROWSER_CHANNEL", "chrome")

async def main():
    results, failures, errors = [], [], []
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel=CHANNEL, headless=True, args=["--force-device-scale-factor=2"])
        for width, height in [(1440, 1000), (768, 1024), (390, 844), (320, 740)]:
            context = await browser.new_context(viewport={"width": width, "height": height}, device_scale_factor=2, reduced_motion="reduce")
            page = await context.new_page()
            page.on("pageerror", lambda err: errors.append(str(err)))
            for route in ROUTES:
                response = await page.goto(BASE + route, wait_until="networkidle")
                await page.evaluate("document.fonts.ready")
                metrics = await page.evaluate("""() => ({
                  scroll: document.documentElement.scrollWidth,
                  viewport: innerWidth,
                  h1: document.querySelectorAll("h1").length,
                  main: document.querySelectorAll("main").length,
                  title: document.title,
                  loadedFont: document.fonts.check('15px "Manrope Variable"'),
                  invalidLinks: [...document.querySelectorAll("a")].filter(a => !a.getAttribute("href") || a.getAttribute("href")==="#").length
                })""")
                if response.status != 200 or metrics["scroll"] > width + 1 or metrics["h1"] != 1 or metrics["main"] != 1 or metrics["invalidLinks"]:
                    failures.append({"width": width, "route": route, "status": response.status, "metrics": metrics})
                await page.add_script_tag(path=str(ROOT / "node_modules/axe-core/axe.min.js"))
                axe = await page.evaluate("""async () => {
                  const result = await axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] } });
                  return { violations: result.violations.map(v => ({id:v.id, impact:v.impact, description:v.description, nodes:v.nodes.map(n=>({target:n.target, summary:n.failureSummary}))})), passes:result.passes.length, incomplete:result.incomplete.length };
                }""")
                if axe["violations"]:
                    failures.append({"width": width, "route": route, "axe": axe["violations"]})
                results.append({"width": width, "route": route, "status": response.status, "metrics": metrics, "accessibility": axe})
                if route == "/" and width in (1440, 390):
                    await page.screenshot(path=str(OUTPUT / f"portfolio-{width}.png"), full_page=True)
            await page.goto(BASE + "/")
            if width <= 560:
                toggle = page.get_by_role("button", name="Open navigation")
                await toggle.click()
                assert await page.get_by_role("button", name="Close navigation").get_attribute("aria-expanded") == "true"
                await page.get_by_role("navigation", name="Mobile navigation").get_by_role("link", name="Work", exact=True).click()
                await page.wait_for_url("**/projects")
                assert await page.get_by_role("button", name="Open navigation").get_attribute("aria-expanded") == "false"
                results.append({"width": width, "interaction": "Mobile navigation open, route change, collapse", "passed": True})
            else:
                await page.get_by_role("navigation", name="Main navigation").get_by_role("link", name="Work", exact=True).click()
                await page.wait_for_url("**/projects")
                results.append({"width": width, "interaction": "Desktop route navigation", "passed": True})
            await page.goto(BASE + "/")
            await page.keyboard.press("Tab")
            focused = await page.evaluate("document.activeElement.textContent")
            assert focused == "Skip to content", focused
            await page.keyboard.press("Enter")
            await page.wait_for_timeout(100)
            assert await page.evaluate("document.activeElement.id") == "main"
            results.append({"width": width, "interaction": "Keyboard skip link", "passed": True})
            missing = await page.goto(BASE + "/projects/nonexistent-project", wait_until="networkidle")
            assert missing.status == 404
            results.append({"width": width, "interaction": "Unknown project returns real 404", "passed": True})
            await context.close()
        context = await browser.new_context(viewport={"width": 1440, "height": 1000})
        page = await context.new_page()
        discovered = {}
        for route in ROUTES:
            await page.goto(BASE + route, wait_until="networkidle")
            links = await page.eval_on_selector_all("a[href]", """nodes => nodes.map(a => a.getAttribute("href")).filter(h => h.startsWith("/") || h.startsWith("#"))""")
            for href in links:
                url = route + href if href.startswith("#") else href
                discovered[url] = True
        for path in sorted(discovered):
            route, _, fragment = path.partition("#")
            response = await page.goto(BASE + route, wait_until="networkidle")
            if response.status != 200:
                failures.append({"internal_link": path, "status": response.status})
            if fragment and await page.locator(f'[id="{fragment}"]').count() == 0:
                failures.append({"internal_link": path, "missing_anchor": fragment})
        results.append({"internal_links_checked": len(discovered)})
        await page.goto(BASE + "/projects/hikma")
        await page.screenshot(path=str(OUTPUT / "portfolio-case-study.png"), full_page=True)
        await browser.close()
    report = {"results": results, "failures": failures, "page_errors": errors, "note": "Automated accessibility checks are not a complete WCAG audit."}
    (OUTPUT / "browser-qa.json").write_text(json.dumps(report, indent=2))
    print(json.dumps({"route_viewport_checks": 28, "internal_links_checked": len(discovered), "failures": failures, "page_errors": errors}))
    if failures or errors:
        raise SystemExit(1)

asyncio.run(main())