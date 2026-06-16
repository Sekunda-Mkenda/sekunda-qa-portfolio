import { test, expect } from '@playwright/test';

test('portfolio homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: "Hi, I’m Sekunda Mkenda", level: 1 })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', {
      name: 'Quality Assurance Analyst',
      level: 2,
    })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'QA Focus', level: 3 })
  ).toBeVisible();
});

test('main navigation links are visible', async ({ page }) => {
  await page.goto('/');

  const nav = page.locator('.nav-links');

  await expect(nav.getByRole('link', { name: 'About' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Skills' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Projects' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'QA Lab' })).toBeVisible();
  await expect(nav.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('test runner panel opens successfully', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: '⚙ Test Runner' }).click();

  await expect(
    page.getByRole('heading', { name: 'QA Test Runner', level: 3 })
  ).toBeVisible();

  await expect(page.getByRole('link', { name: 'Run Tests' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View Report' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'View Repository' })).toBeVisible();
});