import {test, expect} from '@playwright/test';

const testPath = 'http://localhost:4173/' // НУЖНО ЗАПУСКАТЬ ЛОКАЛЬНЫЙ 4173
// const testPath = 'http://xn--80aej9alefdt2f.xn--p1ai/'

test('Проверка работоспособности кнопки "ДОМОЙ" (икнока логотипа)', async ({page}) => {
    await page.goto(testPath);
    page.locator('.header__logo a').click()
    expect(page).toHaveTitle('Автомобили с пробегом (бу) в автосалонах Казани и других городов России - Автосеть.РФ')
});
test('Проверка работоспособности кнопки "Купить"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Купить'}).first().click()
    expect(page).toHaveTitle('Каталог автомобилей с пробегом (БУ). Купить авто из наличия в автосалонах ' +
        'Казани и всей России - Автосеть.РФ - Автосеть.РФ')
});

test('Проверка перехода на страницу "Продать"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Продать'}).first().click();
    await expect(page).toHaveTitle('Автомобили с пробегом (бу) в автосалонах Казани и других городов России - Автосеть.РФ');
});

test('Проверка перехода на страницу "Каталог шин"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Каталог шин'}).first().click();
    await expect(page).toHaveTitle('Купить автомобильные шины и диски в Казани. Каталог летних и зимних автошин  - Автосеть.РФ');
});

test('Проверка перехода на страницу "Статьи"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Статьи'}).first().click();
    await expect(page).toHaveTitle('Новости и статьи');
});

test('Проверка перехода на страницу "О компании"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'О компании'}).first().click();
    await expect(page).toHaveTitle('О компании - Автосеть.РФ');
});

test('Проверка перехода на страницу "Партнерам"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Партнерам'}).first().click();
    await expect(page).toHaveTitle('Партнерам - Автосеть.РФ');
});

test('Проверка перехода на страницу "Арендодателям"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Арендодателям'}).first().click();
    await expect(page).toHaveTitle('Арендодателям - Автосеть.РФ');
});

test('Проверка перехода на страницу "Вакансии"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Вакансии'}).first().click();
    await expect(page).toHaveTitle('Вакансии - Автосеть.РФ');
});