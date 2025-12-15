import { test, expect } from '@playwright/test';

test('Главная страница', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Топ 20 марок по продаже' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Наши услуги' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Адреса дилерских центров Автосеть.РФ' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Где лучше покупать б/у автомобили?' }),
  ).toBeVisible();

  // await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');
  await page.locator('.button__burger').click();
  await page.getByRole('link', { name: 'Купить' }).nth(1).click();
  await expect(page.locator('body')).toContainText('Купить');
  await expect(
    page.getByRole('button', { name: 'Расширенный фильтр' }),
  ).toBeVisible();
  await page.locator('.button__burger').click();
  await page.getByRole('link', { name: 'Продать' }).nth(1).click();
  await expect(page.locator('body')).toContainText(
    'Осмотр автомобиля совершенно бесплатно!',
  );
});
