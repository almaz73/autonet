import { test, expect } from '@playwright/test';
import { basename } from 'path';

test('has title', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.goto('/');
  await expect(page).toHaveTitle(
    'Автомобили с пробегом (бу) в автосалонах Казани и других городов России - Автосеть.РФ'
  );
});

// test('get started link', async ({ page }) => {
//   await page.goto('/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole('heading', { name: 'Installation' }),
//   ).toBeVisible();
// });
