import {test, expect} from '@playwright/test';

const testPath = 'http://localhost:4173/' // НУЖНО ЗАПУСКАТЬ ЛОКАЛЬНЫЙ 4173
// const testPath = 'http://xn--80aej9alefdt2f.xn--p1ai/'

test('Форма Заказать звонок', async ({page}) => {
    await page.goto(testPath);
    await page.locator('.header__buttons').getByText('Заказать звонок').click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оценить автомобиль (1)', async ({page}) => {
    await page.goto(testPath+'services/vykup/');
    const loc = '.wrap.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')
    await page.locator(loc).getByRole('textbox', { name: 'Год выпуска' }).fill('2026')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оценить автомобиль (2)', async ({page}) => {
    await page.goto(testPath+'services/vykup/');
    const loc = '.wrap.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')
    await page.locator(loc).getByRole('textbox', { name: 'Год выпуска' }).fill('2026')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оценить автомобиль (3)', async ({page}) => {
    await page.goto(testPath+'services/vykup/');

    await page.locator('div').filter({ hasText: 'Порядок выкупа автомобиля 01' }).getByRole('button').click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Модель' }).fill('Калина')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Год выпуска' }).fill('2026')
    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оценить автомобиль (4)', async ({page}) => {
    await page.goto(testPath+'services/vykup/');

    await page.locator('div').filter({ hasText: 'Осмотр автомобиля совершенно бесплатно! Самостоятельная продажа Общаться с десят' }).getByRole('button').click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Модель' }).fill('Калина')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Год выпуска' }).fill('2026')
    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оставьте заявку на подбор автомобиля (!)', async ({page}) => {
    await page.goto(testPath+'services/autopodbor/');
    const loc = '.formBlock.v1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'E-mail' }).fill('el@el.el')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оставьте заявку на подбор автомобиля (2)', async ({page}) => {
    await page.goto(testPath+'services/autopodbor/');
    const loc = '.formBlock.v2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'E-mail' }).fill('el@el.el')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Оставьте заявку на подбор автомобиля (3)', async ({page}) => {
    await page.goto(testPath+'services/autopodbor/');
    const loc = '.formBlock.v2'

    await page.getByRole('button', { name: 'Оставить заявку' }).click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'E-Mail' }).fill('Казань')
    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма акции Закажите обратный звонок', async ({page}) => {
    await page.goto(testPath+'promo/644223/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.getByRole('textbox', { name: 'Год выпуска' }).fill('2026')
    await page.getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});


test('Форма Получите расчет прибыли', async ({page}) => {
    await page.goto(testPath+'franshiza/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.formBlock.fix.v1'


    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Проверь, есть ли места в твоем городе', async ({page}) => {
    await page.goto(testPath+'franshiza/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.formBlock.place'


    await page.locator(loc).getByRole('textbox', { name: 'Имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByText('Нажав кнопку «Отправить» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить', exact: true }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Задать вопрос', async ({page}) => {
    await page.goto(testPath+'franshiza/');

    await page.getByRole('button', { name: 'Задать вопрос' }).click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Сообщение *' }).fill('ляляля')
    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма модал Получите расчет прибыли ', async ({page}) => {
    await page.goto(testPath+'franshiza/');



    await page.getByRole('button', { name: 'Рассчитать бизнес-план' }).click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Вакансия', async ({page}) => {
    await page.goto(testPath+'work-in-autosite/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()
    const loc = '.smFormGen.generalForm'

    await page.locator(loc).getByRole('textbox', { name: 'Имя и фамилия *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Расскажите нам о себе' }).fill('ляляля')
    await page.locator(loc).getByText('Нажав кнопку «Отправить данные» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить данные', exact: true }).click()

    const captcha = page.locator(loc).getByText('Загрузка файла * Выберите файйл');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Вакансия у первого предложения', async ({page}) => {
    await page.goto(testPath+'work-in-autosite/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.locator('div').filter({ hasText: 'Кредитный специалист от 70 000' }).nth(1).click()
    const loc = '.vacancy_item.fff0'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'E-mail' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Дополнительная информация и контактные данные' }).fill('ляляля')
    await page.locator(loc).getByText('Отправляя данные, вы даете согласие на обработку персональных данных в соответст').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить отклик' }).click()

    const captcha = page.locator(loc).locator('.fileLabel');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Рассчитать автокредит', async ({page}) => {
    await page.goto(testPath+'services/crediting/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.wrap.aut_cred'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Заявка на автокредит ', async ({page}) => {
    await page.goto(testPath+'services/crediting/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.wrap.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Цена' }).fill('Казань')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});


test('Форма Заявка на страховани(1)', async ({page}) => {
    await page.goto(testPath+'services/insurance/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.wrap.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')

    await page.locator(loc).locator('.form__group.with_sub_field').first().click()
    await page.locator(loc).getByText('КАСКО').click()

    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('Ваз')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Заявка на страховани(2) ', async ({page}) => {
    await page.goto(testPath+'services/insurance/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.wrap.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')

    await page.locator(loc).locator('.form__group.with_sub_field').first().click()
    await page.locator(loc).getByText('КАСКО').click()

    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('Ваз')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')
    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Шинный центр', async ({page}) => {
    await page.goto(testPath+'services/shinnyy-сentr/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Перезвоните мне' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Техосмотр(1)', async ({page}) => {
    await page.goto(testPath+'services/tehnicheskiy-osmotr/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Перезвоните мне' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Техосмотр(2)', async ({page}) => {
    await page.goto(testPath+'services/tehnicheskiy-osmotr/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Перезвоните мне' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Сервисное обслуживание(1)', async ({page}) => {
    await page.goto(testPath+'services/servisnoe-obsluzhivanie/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).locator('.form__group.with_sub_field').first().click()
    await page.locator(loc).getByText('Диагностика').click()

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Сервисное обслуживание(2)', async ({page}) => {
    await page.goto(testPath+'services/servisnoe-obsluzhivanie/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).locator('.form__group.with_sub_field').first().click()
    await page.locator(loc).getByText('Диагностика').click()

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Сервисное обслуживание(3)', async ({page}) => {
    await page.goto(testPath+'services/servisnoe-obsluzhivanie/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.getByRole('main').filter({ hasText: 'Почему АВТОСЕТЬ.РФ? от 1 до 3' }).getByRole('button').click()
    await expect(page.locator('.modal-closer')).toBeVisible();
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Ремонт двигателей(1)', async ({page}) => {
    await page.goto(testPath+'services/remont-dvigatel/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Ремонт двигателей(2)', async ({page}) => {
    await page.goto(testPath+'services/remont-dvigatel/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Ремонт двигателей(3)', async ({page}) => {
    await page.goto(testPath+'services/remont-dvigatel/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.getByRole('link', { name: 'Отправить заявку' }).click()
    await expect(page.locator('.modal-closer')).toBeVisible();

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});


test('Форма Запишитесь на диагностику АКПП(1)', async ({page}) => {
    await page.goto(testPath+'services/remont-akpp/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Запишитесь на диагностику АКПП(2)', async ({page}) => {
    await page.goto(testPath+'services/remont-akpp/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Запишитесь на диагностику АКПП(3)', async ({page}) => {
    await page.goto(testPath+'services/remont-akpp/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.getByRole('link', { name: 'Отправить заявку' }).click()
    await expect(page.locator('.modal-closer')).toBeVisible();

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});


test('Форма Замена масла(1)', async ({page}) => {
    await page.goto(testPath+'services/zamena-masla/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st1'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});

test('Форма Замена масла(2)', async ({page}) => {
    await page.goto(testPath+'services/zamena-masla/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    const loc = '.st2'

    await page.locator(loc).getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator(loc).getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator(loc).getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator(loc).getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator(loc).getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator(loc).getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator(loc).getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator(loc).locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});


test('Форма Замена масла(3)', async ({page}) => {
    await page.goto(testPath+'services/zamena-masla/');
    await page.getByRole('button', { name: 'Прекрасно' }).click()

    await page.getByRole('link', { name: 'Отправить заявку' }).click()
    await expect(page.locator('.modal-closer')).toBeVisible();

    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваше имя *' }).fill('TEST')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Ваш телефон *' }).fill('+79999999999')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Город *' }).fill('Казань')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Марка' }).fill('ВАЗ')
    await page.locator('#right_panel_content').getByRole('textbox', { name: 'Модель' }).fill('Калина')

    await page.locator('#right_panel_content').getByText('Нажав кнопку «Отправить заявку» я даю согласие на обработку персональных данных').click()
    await page.locator('#right_panel_content').getByRole('button', { name: 'Отправить заявку' }).click()

    const captcha = page.locator('#right_panel_content').locator('.capctha-div');
    await expect(captcha).toHaveCSS('border', '1px solid rgb(255, 0, 0)');
});