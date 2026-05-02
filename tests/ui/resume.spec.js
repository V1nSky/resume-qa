const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '../..');
const pageUrl = (fileName) => pathToFileURL(path.join(root, fileName)).href;

test.describe('resume-qa static smoke checks', () => {
  test('index page opens and shows the main QA summary', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    await expect(page).toHaveTitle(/Junior QA Engineer/);
    await expect(page.getByRole('heading', { name: 'Кобелев Анатолий' })).toBeVisible();
    await expect(page.getByText('Junior QA Engineer').first()).toBeVisible();
    await expect(page.getByText('Обо мне как QA')).toBeVisible();
  });

  test('language toggle switches visible content', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    await page.getByRole('button', { name: 'EN' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-lang', 'en');
    await expect(page.getByText('QA Summary')).toBeVisible();
    await expect(page.getByText('Contact me')).toBeVisible();

    await page.getByRole('button', { name: 'RU' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-lang', 'ru');
    await expect(page.getByText('Обо мне как QA')).toBeVisible();
  });

  test('portfolio sections and artifact hub links are visible', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    await expect(page.getByText('QA-артефакты')).toBeVisible();
    await expect(page.getByText('Featured QA projects').first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Все артефакты/ })).toHaveAttribute('href', 'rem.html');
    await expect(page.getByRole('link', { name: /Смотреть таблицу/ }).first()).toHaveAttribute('href', 'rem.html#test-cases');
  });

  test('primary artifact CTAs do not open raw Markdown or CSV files', async ({ page }) => {
    await page.goto(pageUrl('index.html'));

    const primaryLinks = await page.locator('a.artifact-link').evaluateAll((links) =>
      links.map((link) => ({
        text: link.textContent.trim(),
        href: link.getAttribute('href')
      }))
    );

    const rawPrimaryLinks = primaryLinks.filter(({ text, href }) => {
      const isRawFile = /\.(md|csv)$/i.test(href || '');
      const explicitlyRaw = /raw|download/i.test(text);
      return isRawFile && !explicitlyRaw;
    });

    expect(rawPrimaryLinks).toEqual([]);
  });

  test('artifact hub opens with readable sections', async ({ page }) => {
    await page.goto(pageUrl('rem.html'));

    await expect(page.getByRole('heading', { name: 'QA-артефакты' })).toBeVisible();
    await expect(page.locator('#bug-reports')).toBeVisible();
    await expect(page.locator('#checklists')).toBeVisible();
    await expect(page.locator('#test-cases')).toBeVisible();
    await expect(page.locator('#traceability')).toBeVisible();
    await expect(page.locator('#profiles')).toBeVisible();
  });

  test('mobile viewport keeps main content readable', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(pageUrl('index.html'));

    await expect(page.getByRole('heading', { name: 'Кобелев Анатолий' })).toBeVisible();
    await expect(page.getByText('QA & Product Thinking').first()).toBeVisible();
    await expect(page.getByText('QA-артефакты')).toBeVisible();

    await page.goto(pageUrl('rem.html'));
    await expect(page.getByRole('heading', { name: 'QA-артефакты' })).toBeVisible();
    await expect(page.locator('#test-cases table')).toBeVisible();
  });
});
