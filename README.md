# resume-qa · QA Portfolio

![Static Site](https://img.shields.io/badge/site-static_HTML-0f172a?style=flat-square)
![QA Artifacts](https://img.shields.io/badge/QA-artifacts-2563eb?style=flat-square)
![Playwright](https://img.shields.io/badge/tests-Playwright-16a34a?style=flat-square)
![RU/EN](https://img.shields.io/badge/content-RU%20%2F%20EN-7c3aed?style=flat-square)

QA-портфолио Анатолия Кобелева: Junior QA / Manual QA + basic automation. Репозиторий показывает QA-мышление, тестовую документацию, проектные кейсы и небольшой Playwright smoke-pack для статического сайта.

**Live:** [v1nsky.github.io/resume-qa](https://v1nsky.github.io/resume-qa/)

**Быстрая навигация:** [Portfolio Links](#portfolio-links) · [Что внутри](#что-внутри) · [QA Automation](#qa-automation) · [Локальный запуск](#локальный-запуск) · [Contacts](#contacts)

---

## Portfolio Links

| Page | Focus |
|---|---|
| [Developer Portfolio](https://v1nsky.github.io/resume-dev/) | Backend, DevOps, Telegram bots, client projects |
| [QA Portfolio](https://v1nsky.github.io/resume-qa/) | Manual QA, QA artifacts, Playwright smoke tests, GitHub Actions |
| [LeadHunter Landing](https://v1nsky.github.io/leadhunter-landing/) | Telegram Mini App / lead generation product case |

## Что внутри

- QA project cards на основе подготовленных данных.
- Jira-style bug reports, checklists, test cases, traceability matrix.
- Compact project case studies.
- RU/EN контент.
- Читаемый artifact hub: `rem.html`.
- Playwright UI smoke tests и JSON/data validation.
- GitHub Actions workflow для повторяемого запуска проверок.

## QA Artifacts

Артефакты лежат в `docs/qa/`, но на сайте открываются через стилизованную страницу, чтобы рекрутеры и клиенты не попадали сразу в raw Markdown/CSV.

| Artifact | Purpose |
|---|---|
| Bug reports | Jira-style examples: steps, actual/expected, severity, priority |
| Checklists | Compact coverage by project and feature area |
| Test cases | Functional and negative scenarios in CSV |
| Traceability matrix | Requirements, risks, artifacts, priorities |
| Case studies | Short QA view of portfolio projects |

## QA Automation

Автотесты находятся в `tests/` и позиционируются как базовые навыки автоматизации для Manual QA. Это не claim коммерческого Automation QA опыта.

Что проверяется:

- `index.html` и `rem.html` открываются корректно;
- hero/summary, QA Artifacts и Featured QA projects видимы;
- RU/EN toggle переключает контент;
- primary artifact CTA не ведут на raw `.md` / `.csv`;
- мобильный viewport сохраняет основной контент видимым;
- `data/projects.qa.ru.json` и `data/projects.qa.en.json` валидны и структурно совместимы.

## Tech Stack

| Area | Tools |
|---|---|
| Site | Static HTML, Tailwind CDN |
| QA docs | Markdown, CSV, JSON |
| UI smoke tests | Playwright |
| Data checks | Playwright Test + Node.js |
| CI | GitHub Actions |

## Локальный запуск

```bash
npm install
npm run test
npm run test:ui
npm run test:data
```

Если Chromium еще не установлен:

```bash
npx playwright install chromium
```

## Repository Structure

```text
index.html                     # главная страница QA-портфолио
rem.html                       # читаемый hub для QA-артефактов
data/                          # JSON с QA project cards
docs/qa/                       # bug reports, checklists, test cases, traceability
docs/profiles/                 # QA / Backend / DevOps / Telegram / Combined профили
tests/ui/resume.spec.js        # Playwright UI smoke tests
tests/data/projects.spec.js    # JSON/data validation
.github/workflows/             # GitHub Actions workflow
```

## Screenshots / Preview

Скриншоты пока не добавлены. Сейчас основной preview — live-страница: [QA Portfolio](https://v1nsky.github.io/resume-qa/).

## Notes

Это QA-портфолио и демонстрация практических навыков на подготовленных проектных материалах. README и сайт не заявляют фейковый коммерческий опыт, сертификаты или работу в компании.

## English Summary

This repository is a QA portfolio for Junior QA / Manual QA + basic automation. It includes QA project cards, Jira-style bug reports, checklists, test cases, a traceability matrix, RU/EN content, Playwright smoke tests, and GitHub Actions CI.

## Contacts

| Channel | Link |
|---|---|
| Telegram | [@vqns7](https://t.me/vqns7) |
| GitHub | [V1nSky](https://github.com/V1nSky) |
| Email | [tola0708607@gmail.com](mailto:tola0708607@gmail.com) |
