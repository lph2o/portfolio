# Abdourahmane Thiam — Portfolio

An English-first, design-minded portfolio for a Product Engineer & Full-Stack Developer.
Three evidence-based case studies: Hikma, Content Factory and MSDA Lead Engine.

## Features
- Homepage, selected work, individual case studies, About, Contact and a custom 404.
- Responsive navigation, keyboard access, visible focus, semantic landmarks and reduced-motion support.
- Original architecture illustrations — explicitly not product screenshots.
- Typed project, profile and skills data, with private-source and review-scope disclosures.
- Open Graph / Twitter image, favicon, page metadata, sitemap and robots.
- No fabricated outcomes, employers, education or contact information.
- No private code, internal data or unnecessary tracking.
- Lightweight 3D depth, pointer-aware motion and an interactive fox mascot.
- Persistent EN / FR / IT language switcher for the primary portfolio experience.

## Tech stack
Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, Lucide icons.
Manrope and Noto Naskh Arabic are bundled locally through @fontsource-variable/manrope.

## Getting started
Node >=22.9.0.
```bash
npm ci
npm run dev
```
Visit http://localhost:3000. No secrets or external services are required.

## Development and checks
```bash
npm run lint
npm run typecheck
npm test
npm run build
npm start
```
Vitest checks approved content, private-link boundaries and origin handling.
Browser QA is separate from these unit tests; see `docs/VERIFICATION.md`.
To reproduce the full browser checks, install `uv` and Chrome, start the production server, then:
```bash
uv run scripts/browser_qa.py
```
The script uses Python Playwright and the npm dev dependency axe-core. It writes screenshots and a report to ignored `.qa/`.
Set `QA_BASE_URL` to test another origin. Set `QA_BROWSER_CHANNEL=chromium` after installing the bundled browser with `uv run --with playwright playwright install chromium`.


## Deployment
Deploy as a standard Next.js application. For a confirmed public deployment:
1. Set `NEXT_PUBLIC_SITE_URL` to the approved HTTPS origin.
2. Rebuild: origin configuration affects metadata, sitemap and robots.
3. Confirm public contact details and review `docs/CONTENT_REVIEW.md`.
4. Test desktop/mobile, project pages and public links again.

Without a production origin the preview is **noindex**, robots disallows indexing, and the sitemap is empty.
This prevents accidental indexing and avoids inventing a production domain.
`GET /readyz` returns 204 once the application is serving; it needs no secrets or session.
Do not publish development tooling or commit `.env.local`.

## Project structure
```
app/                  routes, metadata and global stylesheet
components/           layout, UI primitives, homepage and project components
data/                 approved profile, projects and skills
lib/                  origin and SEO helpers
tests/                content and origin unit tests
docs/                 content review and launch requirements
```

## Content maintenance
Edit `data/profile.ts`, `data/projects.ts` and `data/skills.ts`.
Email and LinkedIn are intentionally unset until the owner confirms public values.
Changes to contact rendering should only expose confirmed channels.
Do not turn the source audit into unsupported claims about production usage.

## License
No project license has been selected by the owner. Public visibility does not grant a reuse license.
Third-party dependencies retain their own licences. No private-project source or assets are copied here.

## Mascot attribution
The portfolio now uses four original AI-generated felt mascot poses in `public/mascot/`: wave, code, point and phone. They were generated specifically for this portfolio and do not reuse third-party character artwork.
