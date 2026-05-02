# resume-qa

QA-портфолио Анатолия Кобелева: Junior QA / Manual QA + basic automation. Репозиторий показывает QA-мышление, тестовую документацию, проектные кейсы и небольшой Playwright smoke-pack для статического сайта.

## Навигация по портфолио

- [Developer Portfolio](https://v1nsky.github.io/resume-dev/) — backend, DevOps, Telegram bots, client projects.
- [QA Portfolio](https://v1nsky.github.io/resume-qa/) — manual QA, QA artifacts, Playwright smoke tests, GitHub Actions.
- [LeadHunter Landing](https://v1nsky.github.io/leadhunter-landing/) — Telegram Mini App / lead generation product case.

## Что внутри

- QA project cards на основе подготовленных данных.
- Jira-style bug reports.
- Checklists.
- Test cases.
- Traceability matrix.
- RU/EN контент.
- Отдельная читаемая страница артефактов: `rem.html`.
- Playwright smoke tests для основных страниц и ссылок.
- GitHub Actions CI для запуска проверок.

## QA-артефакты

Артефакты лежат в `docs/qa/` и доступны с сайта через стилизованную страницу, чтобы рекрутеры не попадали сразу в raw Markdown/CSV.

Основные типы:

- баг-репорты в Jira-формате;
- чек-листы по проектам;
- таблицы тест-кейсов;
- traceability matrix;
- компактные project case studies.

## QA Automation

Автотесты находятся в `tests/` и позиционируются как базовые навыки автоматизации для Manual QA, а не как коммерческий Automation QA опыт.

Проверяется:

- открытие `index.html` и `rem.html`;
- видимость hero/summary, QA Artifacts и Featured QA projects;
- RU/EN toggle;
- отсутствие raw `.md`/`.csv` в primary artifact CTA;
- мобильный viewport;
- валидность и совместимость `data/projects.qa.ru.json` и `data/projects.qa.en.json`.

## Локальный запуск и тесты

```bash
npm install
npm run test
npm run test:ui
npm run test:data
```

При первом запуске Playwright может потребовать Chromium:

```bash
npx playwright install chromium
```

## Структура

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

## Важно

Это QA-портфолио и демонстрация практических навыков на подготовленных проектных материалах. Оно не заявляет фейковый коммерческий опыт, сертификаты или работу в компании.

## English Summary

This repository is a QA portfolio for Junior QA / Manual QA + basic automation. It includes QA project cards, bug reports, checklists, test cases, a traceability matrix, RU/EN content, Playwright smoke tests, and GitHub Actions CI.

## Контакты

- Telegram: [@vqns7](https://t.me/vqns7)
- GitHub: [V1nSky](https://github.com/V1nSky)
- Email: [tola0708607@gmail.com](mailto:tola0708607@gmail.com)
