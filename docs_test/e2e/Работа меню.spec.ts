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

test('Стриница "Продать"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Продать'}).first().click();
    await expect(page).toHaveTitle('Автомобили с пробегом (бу) в автосалонах Казани и других городов России - Автосеть.РФ');
});

test('Стриница "Каталог шин"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Каталог шин'}).first().click();
    await expect(page).toHaveTitle('Купить автомобильные шины и диски в Казани. Каталог летних и зимних автошин  - Автосеть.РФ');
});

test('Стриница "Статьи"', async ({page}) => {
    await page.goto(testPath);
    page.locator('nav a', {hasText: 'Статьи'}).first().click();
    await expect(page).toHaveTitle('Новости и статьи');
});

test('Стриница "О компании"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'О компании'}).first().click();
    await expect(page).toHaveTitle('О компании - Автосеть.РФ');
});

test('Стриница "Партнерам"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Партнерам'}).first().click();
    await expect(page).toHaveTitle('Партнерам - Автосеть.РФ');
});

test('Стриница "Арендодателям"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Арендодателям'}).first().click();
    await expect(page).toHaveTitle('Арендодателям - Автосеть.РФ');
});

test('Стриница "Вакансии"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Вакансии'}).first().click();
    await expect(page).toHaveTitle('Вакансии - Автосеть.РФ');
});

test('Стриница "Контакты"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Контакты'}).first().click();
    await expect(page).toHaveTitle('Контакты - Автосеть.РФ');
});

test('Стриница "Политика конфиденциальности"', async ({page}) => {
    await page.goto(testPath);
    page.locator('footer a', {hasText: 'Политика конфиденциальности'}).first().click();
    await expect(page).toHaveTitle('Политика конфиденциальности - Автосеть.РФ');
});

test('Стриница "Автоподбор"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Автоподбор'}).click();
    await expect(page).toHaveTitle('Цены на услугу автоподбора в Казани и других городах России - Автосеть.РФ');
});

test('Стриница "Акции"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Акции'}).click();
    await expect(page).toHaveTitle('Акции и спецпредложения - Автосеть.РФ');
});

test('Стриница "Услуги"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Услуги'}).click();
    await expect(page).toHaveTitle('Услуги компании - Автосеть.РФ');
});

test('Стриница "Автокредитование"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Автокредитование'}).click();
    await expect(page).toHaveTitle('Купить авто с пробегом (БУ) в кредит в автосалонах Казани и других городов России - Автосеть.РФ');
});

test('Стриница "Страхование"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Страхование'}).click();
    await expect(page).toHaveTitle('Страхование автомобиля - ОСАГО, КАСКО. Автострахование в Казани и других городах России - Автосеть.РФ');
});


test('Стриница "Шинный центр"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Шинный центр'}).click();
    await expect(page).toHaveTitle('Цены на шиномонтаж в шинном центре. Ремонт автомобильных шин, дошиповка, правка дисков. Хранение автошин -\n' +
        '        Автосеть.РФ');
});

test('Стриница "Техосмотр"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Техосмотр'}).click();
    await expect(page).toHaveTitle('Цены на техосмотр легкового авто в Казани и других городах России - Автосеть.РФ');
});

test('Стриница "Сервисное обслуживание"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Сервисное обслуживание'}).click();
    await expect(page).toHaveTitle('Запись в автосервис. Цены на ремонт и сервисное обслуживание автомобилей. Диагностика авто в Казани и других\n' +
        '    городах России - Автосеть.РФ');
});

test('Стриница "Ремонт двигателя"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Ремонт двигателя'}).click();
    await expect(page).toHaveTitle('Цены на ремонт и техническое обслуживание двигателя автомобиля. Замена ремня ГРМ. Ремонт ГБЦ в Казани и\n' +
        '        других городах России - Автосеть.РФ');
});

test('Стриница "Ремонт АКПП"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Ремонт АКПП'}).click();
    await expect(page).toHaveTitle('Цены на ремонт и замену АКПП автомобиля. Обслуживание и ремонт вариаторов в Казани и других городах России - Автосеть.РФ');
});

test('Стриница "Замена масла"', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.button__burger').click();
    await page.locator('.main-nav__wrapper a', {hasText: 'Замена масла'}).click();
    await expect(page).toHaveTitle('Цены на замену масла в АКПП, МКПП, двигателе и ГУР в автосервисах Казани и других городов России - Автосеть.РФ');
});