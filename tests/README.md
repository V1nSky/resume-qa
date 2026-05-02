# QA Automation Smoke Tests

This is a small demo pack for the `resume-qa` static portfolio. It shows basic QA automation skills without positioning the owner as a full automation QA engineer.

## What Is Tested

- `index.html` opens and shows the main Junior QA summary.
- RU/EN language toggle changes visible content.
- QA Artifacts and Featured QA projects sections are present.
- `rem.html` artifact hub opens and shows readable artifact sections.
- Primary artifact CTAs do not point to raw Markdown or CSV files.
- Mobile viewport keeps main content visible.
- `data/projects.qa.ru.json` and `data/projects.qa.en.json` are valid and structurally compatible.

## How To Install

```bash
npm install
npx playwright install chromium
```

For CI or a fresh Linux runner:

```bash
npx playwright install --with-deps chromium
```

## How To Run

```bash
npm run test
npm run test:ui
npm run test:data
```

## Portfolio Positioning

These tests demonstrate Junior QA / Manual QA + basic automation skills:

- Playwright UI smoke checks for a static website.
- Basic regression checks for language switching and artifact navigation.
- Data validation for JSON used by the portfolio.
- GitHub Actions readiness for repeatable checks.

They are intentionally compact and do not claim commercial automation QA experience.
