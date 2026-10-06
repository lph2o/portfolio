# Delivery verification — 3 October 2026

## Scope
This is verification of **this portfolio**, not of the three private applications it describes.
The private applications' audit limitations remain in the case studies.
No private source, database, admin captures or private assets were copied.

## Checks executed
| Check | Result |
| --- | --- |
| `npm run lint` | Passed |
| `npm run typecheck` | Passed — strict TypeScript |
| `npm test` | Passed — 10 tests across 2 suites |
| `npm run build` | Passed — production Next.js build |
| Production server readiness | HTTP 204 at `/readyz` |
| 7 content routes × 4 viewport widths | 28 successful page / layout checks |
| Viewport widths | 1440, 768, 390, 320 CSS pixels |
| Horizontal overflow | None detected on the tested routes |
| Browser JavaScript errors | None detected |
| Internal links and anchors | 30 checked |
| Desktop and mobile navigation | Passed |
| Keyboard skip-to-content | Passed at all 4 widths |
| Unknown project URL | Returns actual HTTP 404 at all 4 widths |
| axe WCAG 2 / 2.1 A and AA tagged checks | 0 detected violations across the 28 page / viewport combinations |
| `npm audit --omit=dev` | 0 reported vulnerabilities at verification time |

Initial axe checks found contrast issues in secondary diagram labels and small section numbers.
Those colours were darkened and the complete browser suite was rerun successfully.
Noto Naskh Arabic was bundled to avoid relying on an unavailable system font.
Body copy sizes were increased after reviewing the actual screenshots.

## Dependency caveat
Full `npm audit` reports **5 high-severity findings**, all in the development lint dependency chain:
`eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`.

Underlying advisory: [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm),
stack-exhaustion denial of service from deeply nested brace patterns.
The npm registry's latest braces was 3.0.3 when checked; the advisory covers that version.
No unsupported override or force downgrade was applied.
These findings are **not fixed** and should be monitored; the affected chain is not in the production dependency audit.

ESLint 9.39.5 is deprecated. An ESLint 10 trial failed because the installed React lint plugin used an incompatible rule API, so the working version was retained. Update it with compatible plugins, not by ignoring lint failures.

## Reproducibility
Install dependencies with `npm ci`, run the checks above, then start the production server with `npm start`.
With `uv` and Chrome installed, run:
```bash
uv run scripts/browser_qa.py
```
`.qa/` contains the report and real portfolio screenshots and is excluded from git.
No browser credentials or platform token are needed to run that script.
For a different origin, set `QA_BASE_URL`.

## What this does not establish
- Automated accessibility checks are not a full manual WCAG audit or certification.
- No Safari / Firefox, assistive-technology session or physical-device testing was performed.
- No Lighthouse score is claimed; Lighthouse was not run.
- No authenticated behaviour of the three private products was validated here.
- No full secret-history audit of those products is implied by this work.

## Preview versus release
The portfolio preview runs as a production Next.js server in the bot's VM, backed by an enabled persistent service.
It is not a deployment to the owner's public production domain.
Without the confirmed production origin, it remains noindex, has no production canonical, and emits an empty sitemap.
The social-image metadata uses localhost only as an explicit preview fallback; configure `NEXT_PUBLIC_SITE_URL` and rebuild for release.

## Before release
Confirm public email, exact public LinkedIn URL and production origin.
Review role labels and case-study wording with the owner.
Choose a project licence if desired; none was selected automatically.
Resolve or knowingly manage the documented dev-tooling advisories.