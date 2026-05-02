const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '../..');
const requiredFields = [
  'id',
  'title',
  'category',
  'projectType',
  'stack',
  'qaFocus',
  'backendFocus',
  'devopsFocus',
  'telegramFocus',
  'artifacts'
];

const readProjects = (fileName) => JSON.parse(fs.readFileSync(path.join(root, 'data', fileName), 'utf8'));

test.describe('QA projects data', () => {
  test('RU and EN project JSON files are valid arrays', () => {
    const ru = readProjects('projects.qa.ru.json');
    const en = readProjects('projects.qa.en.json');

    expect(Array.isArray(ru)).toBe(true);
    expect(Array.isArray(en)).toBe(true);
    expect(ru.length).toBeGreaterThan(0);
    expect(en.length).toBeGreaterThan(0);
  });

  test('each project has required fields used by the site', () => {
    for (const locale of ['projects.qa.ru.json', 'projects.qa.en.json']) {
      const projects = readProjects(locale);

      for (const project of projects) {
        for (const field of requiredFields) {
          expect(project, `${locale}: ${project.id || 'missing id'} should include ${field}`).toHaveProperty(field);
        }

        expect(project.id).toMatch(/^[a-z0-9-]+$/);
        expect(project.title.trim().length).toBeGreaterThan(0);
        expect(project.qaFocus.trim().length).toBeGreaterThan(0);
        expect(Array.isArray(project.artifacts)).toBe(true);
        expect(project.artifacts).toEqual(expect.arrayContaining(['Checklist', 'Test cases', 'Bug reports', 'Traceability matrix']));
      }
    }
  });

  test('RU and EN project arrays have compatible structure', () => {
    const ru = readProjects('projects.qa.ru.json');
    const en = readProjects('projects.qa.en.json');

    expect(en.map((project) => project.id)).toEqual(ru.map((project) => project.id));
    expect(en.length).toBe(ru.length);

    for (const [index, ruProject] of ru.entries()) {
      const enProject = en[index];
      expect(Object.keys(enProject).sort()).toEqual(Object.keys(ruProject).sort());
      expect(enProject.artifacts).toEqual(ruProject.artifacts);
    }
  });
});
