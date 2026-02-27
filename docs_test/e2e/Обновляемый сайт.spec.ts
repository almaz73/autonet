// import { test, expect } from '@playwright/test';
//
// test.describe('Общий тест', () => {
//   test('Наличие верхней менюшки на всех страницах', async ({ page }) => {
//     await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');
//     await page.getByRole('link', { name: 'Купить' }).first().click();
//     await expect(
//       page.getByRole('link', { name: 'КУпить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Купить' }).nth(1).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Продать' }).nth(1).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Каталог шин' }).nth(1).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Автоподбор' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Акции' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Контакты' }).first().click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Партнерам' }).first().click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'О компании' }).first().click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Новости' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Вакансии' }).first().click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Услуги' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page
//       .getByRole('link', { name: 'Автокредитование', exact: true })
//       .click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Страхование', exact: true }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Шинный центр', exact: true }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Техосмотр' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Сервисное обслуживание' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Ремонт двигателя' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Ремонт АКПП' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Замена масла' }).click();
//     await expect(
//       page.getByRole('link', { name: 'Купить' }).first(),
//     ).toBeVisible();
//     await expect(page.locator('body')).toContainText('Заказать звонок');
//   });
//
//   test('Наличие нижней менюшки на всех страницах', async ({ page }) => {
//     await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');
//     await page.getByRole('link', { name: 'Купить' }).first().click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     // await expect(page.getByRole('link', { name: 'Каталог шин' }).first()).toBeVisible();
//     // await expect(page.locator('body')).toContainText('Заказать звонок');
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Купить' }).nth(1).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Продать' }).nth(1).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Каталог шин' }).nth(1).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Автоподбор' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Акции' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Контакты' }).first().click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Партнерам' }).first().click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'О компании' }).first().click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Новости' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Вакансии' }).first().click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Услуги' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page
//       .getByRole('link', { name: 'Автокредитование', exact: true })
//       .click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Страхование', exact: true }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Шинный центр', exact: true }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Техосмотр' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Сервисное обслуживание' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Ремонт двигателя' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Ремонт АКПП' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//     await page.locator('.button__burger').click();
//     await page.getByRole('link', { name: 'Замена масла' }).click();
//     await expect(
//       page.getByRole('contentinfo').getByRole('link', { name: 'О компании' }),
//     ).toBeVisible();
//     await expect(page.getByRole('contentinfo')).toContainText(
//       'Политика конфиденциальности',
//     );
//   });
// });
//
// test.describe('Проверка контролов', () => {
//   test('Работа с локалсторажем (выбор города) ', async ({ page }) => {
//     await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');
//
//     await page.evaluate(() => localStorage.clear()); // чистим
//     await page.getByRole('img', { name: 'arrow' }).first().click(); // менчем ород черехз верхнюю меню
//     await page.getByText('Казань').first().click();
//     await expect(page.locator('body')).toContainText('Казань'); // проверяем сменилось ли в верхнем комбобоксе
//     await expect(page.getByRole('contentinfo')).toContainText('Казань'); // и сменился ли город в футере
//     await page.getByRole('contentinfo').getByText('Казань').click(); // открываем панель выбора города через футер
//     await page.getByRole('textbox', { name: 'Название города' }).click(); // выбираем поле набора теста
//     await page
//       .getByRole('textbox', { name: 'Название города' })
//       .fill('Бугульма'); // набираем название города
//
//     const textColor = await page.evaluate(() => {
//       // Выполняем JS в браузере
//       // Находим элемент, цвет текста которого хотим получить
//       const element = document.querySelector('.yel'); // находим поле с классном yel
//       if (element)
//         return window.getComputedStyle(element).getPropertyValue('color'); // достаем цвет элемента
//     });
//
//     await expect(textColor).toBe('rgb(255, 0, 0)'); // цвет
//     await page.getByRole('link', { name: 'Бугульма' }).click(); // выбираем город
//     const cityName = await page.evaluate(() =>
//       localStorage.getItem('selectedCity'),
//     );
//     await expect(cityName).toBe('Бугульма'); // проверяем в локалстороже
//     await page.evaluate(() => localStorage.clear()); // чистим
//   });
//
//   test('Работа комбобокса в фильтре', async ({ page }) => {
//     await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');
//     await page.getByRole('img', { name: 'arrow' }).nth(1).click();
//     await page.getByRole('img', { name: 'arrow' }).nth(1).click();
//     await page.getByText('Все').nth(1).click();
//     await expect(
//       page.locator('span').filter({ hasText: /^Все$/ }),
//     ).toBeVisible();
//     await expect(page.getByRole('main')).toContainText('Все');
//   });
//
//   test('На весь экран элементы', async ({ page }) => {
//     await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/');
//     await page.locator('#mainPhoto').click();
//     await page.goto('http://xn--80aej9alefdt2f.xn--p1ai/about-the-company/');
//     await page.locator('#mainPhoto').click();
//     await page.goto(
//       'http://xn--80aej9alefdt2f.xn--p1ai/services/shinnyy-%D1%81entr/',
//     );
//     await page.locator('#mainPhoto').click();
//   });
// });
