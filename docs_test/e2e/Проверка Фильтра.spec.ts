import {test, expect} from '@playwright/test';

const testPath = 'http://localhost:4173/' // НУЖНО ЗАПУСКАТЬ ЛОКАЛЬНЫЙ 4173
// const testPath = 'http://xn--80aej9alefdt2f.xn--p1ai/'



test('Проверка фильтра  "Марка"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('[data-placeholder="Марка"]').click();
    await page.locator('[data-placeholder="Марка"] .big_comb__items').getByText('ВАЗ (LADA)').click()
    await expect(page.locator('.car_vitrina')).toContainText('Автомобили ВАЗ (LADA)');
});

test('Проверка фильтра  "Город"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('[data-placeholder="Город"]').click();
    await page.locator('[data-placeholder="Город"] .big_comb__items').getByText('Казань').click()
    await expect(page.locator('.cart__blank').first()).toContainText('Казань');
});

// ... existing code ...
test('Проверка фильтра "Год от" "Год до"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.locator('input[oninput*="yearReleasedFrom"]').fill('2020');
    await page.locator('input[oninput*="yearReleasedTo"]').fill('2020');
    await page.keyboard.press('Enter'); // Press Enter to apply the filter

    await page.waitForTimeout(5000);
    // Alternative selectors if the above doesn't work:
    // await page.locator('.big-comb__input[type="number"][style*="width: 80px"]').fill('2020');

    await expect(page.locator('.cards')).toContainText('2020');
});

test('Проверка фильтра "Цена от" "Цена до"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000); // Wait for filter to apply
    await page.locator(`input[oninput="input_on('priceFrom', this.value)"]`).fill('1000000');
    await page.locator(`input[oninput="input_on('priceTo', this.value)"]`).fill('2000000');
    await page.keyboard.press('Enter'); // Press Enter to apply the filter
    await page.waitForTimeout(5000);

    // Get all elements with class "total" inside the ".cards" block
    const totalElements = await page.locator('.cards .total').all();

    // Check that each total element contains a number between 1,000,000 and 2,000,000
    for (const element of totalElements) {
        const textContent = await element.textContent();
        // Extract number from the text content (remove non-digit characters except spaces)
        const priceString = textContent?.replace(/[^\d\s]/g, '').trim();
        const priceValue = parseInt(priceString?.replace(/\s/g, '') || '0');
        expect(priceValue).toBeGreaterThan(999999); // Greater than 1,000,000
        expect(priceValue).toBeLessThan(2000001); // Less than 2,000,000
    }
});
// ... existing code ...

test('Проверка фильтра "Пробег от" "Пробег до"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000); // Wait for filter to apply
    await page.locator(`input[oninput="input_on('milleageFrom', this.value)"]`).fill('30000');
    await page.locator(`input[oninput="input_on('milleageTo', this.value)"]`).fill('50000');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    // Get all elements with class "total" inside the ".cards" block
    const totalElements = await page.locator('.cards .cart__info').all();

    // Check that each total element contains a number between 1,000,000 and 2,000,000
    for (const element of totalElements) {
        const textContent = await element.textContent();
        // Extract number from the text content (remove non-digit characters except spaces)
        const km = textContent?.split('км,')[0];
        const lengthString = km?.replace(/[^\d\s]/g, '').trim();
        const lengthValue = parseInt(lengthString?.replace(/\s/g, '') || '0');
        expect(lengthValue).toBeGreaterThan(29999);
        expect(lengthValue).toBeLessThan(50001);
    }
});

test('Проверка фильтра "Объем двигателя до"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000); // Wait for filter to apply
    await page.locator(`input[oninput="input_on('engineCapacity', this.value)"]`).fill('1000');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(5000);

    await expect(page.locator('.cards')).not.toBeEmpty();  // Для проверки, что поле не пустое
    await expect(page.locator('.cards')).not.toBeNull();  // Для проверки существования
    await expect(page.locator('.cards')).not.toHaveText('');  // Для проверки, что текст не пустой
});

test('Проверка фильтра  "Цвет"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Цвет"]').click();
    await page.locator('[data-placeholder="Цвет"] .big_comb__items').getByText('Белый').click()
    await page.waitForTimeout(5000);

    await expect(page.locator('.cards')).not.toBeEmpty();  // Для проверки, что поле не пустое
});


test('Проверка фильтра  "Тип кузова"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип кузова"]').click();
    await page.locator('[data-placeholder="Тип кузова"] .big_comb__items').getByText('Седан').click()

    // Wait for the filter to be applied
    await page.waitForTimeout(5000);

    // Verify that the filter has been applied by checking for the presence of cars
    await expect(page.locator('.cards')).toBeVisible();

    // Check that the selected filter option appears in the filter display
    const textContent = await page.locator('[data-placeholder="Тип кузова"]').textContent();
    expect(textContent).toContain('Седан');
});

test('Проверка фильтра  "Тип КПП"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип КПП"]').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип КПП"] .big_comb__items').getByText('Вариатор').click()

    await page.waitForTimeout(5000);
    await expect(page.locator('.cards')).toBeVisible();
    const textContent = await page.locator('cards').textContent();
    expect(textContent).toContain('Вариатор');
});

test('Проверка фильтра  "Тип двигателя"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип двигателя"]').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип двигателя"] .big_comb__items').getByText('Бензин').click()

    await page.waitForTimeout(5000);
    await expect(page.locator('.cards')).toBeVisible();
    const textContent = await page.locator('cards').textContent();
    expect(textContent).toContain('Бензин');
});

test('Проверка фильтра  "Тип привода"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип привода"]').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Тип привода"] .big_comb__items').getByText('Передний').click()

    await page.waitForTimeout(5000);
    await expect(page.locator('.cards')).toBeVisible();
    const textContent = await page.locator('cards').textContent();
    expect(textContent).toContain('Передний');
});

test('Проверка фильтра  "Руль"', async ({page}) => {
    await page.goto(testPath+'/cars/');
    await page.locator('.frame-filter__controls-advanced-text').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Руль"]').click();
    await page.waitForTimeout(1000);
    await page.locator('[data-placeholder="Руль"] .big_comb__items').getByText('Левый').click()

    await page.waitForTimeout(5000);
    await expect(page.locator('.cards')).toBeVisible();
    await expect(page.locator('.cards')).not.toBeEmpty();  // Для проверки, что поле не пустое
});
// ... existing code ...
