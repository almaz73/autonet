import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');

  await expect(
    page.getByRole('link', { name: 'Купить' }).first(),
  ).toBeVisible();


  await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/cars/');
  await expect(
    page.getByRole('link', { name: 'Купить' }).first(),
  ).toBeVisible();

  
  await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/services/vykup/');
  await expect(
    page.getByRole('link', { name: 'Купить' }).first(),
  ).toBeVisible();

  
  await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/tyres/');
  await expect(
    page.getByRole('link', { name: 'Купить' }).first(),
  ).toBeVisible();

  
  await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/services/autopodbor/');
  await expect(
    page.getByRole('link', { name: 'Купить' }).first(),
  ).toBeVisible();

});
