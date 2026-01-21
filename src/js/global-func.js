export let global_brandsIds= [];
export let global_modelsIds= [];

export function formatterShowPrice(val){
    return parseInt(val).toLocaleString('ru-RU')
}

export function prepareCars(res) {
    let cars = []
    res && res.forEach(el => {
        let info = formatterShowPrice(el.milleage) + ' км, '
        if (el.engineCapacity) info += el.engineCapacity
        if (el.gearboxType) info += ' ' + el.gearboxType
        if (el.enginePower) info += ' (' + el.enginePower + '&nbsp;л.с)'
        if (el.bodyType) info += ', ' + el.bodyType
        info += ', ' + el.driveType
        if (el.engineType) info += ', ' + el.engineType

        let fromPerMonth = formatterShowPrice(parseInt(parseInt(el.price.replace(/ /g, '')) / 90.12))

        cars.push({
            address: el.fullAddress,
            id: el.id,
            name: el.brand + ' ' + el.model,
            href: '/cars/car.html?id=' + el.id,
            price: formatterShowPrice(el.price),
            fromPerMonth: fromPerMonth,
            info: info,
            photos: el.images,
            yearReleased: el.yearReleased
        })
    })
    return cars
}

export function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2]; // Массив для определения падежей
    // Определяем индекс слова из массива titles
    // Применяем 'cases[number % 10]' для чисел до 20
    // Для 11-19 (где number % 10 = 1, 2, 3, 4) используется 'cases[1]', "минуты"
    // В случае с 1, 21, 31 будет 'cases[1]' (ошибка, исправлено ниже)
    // Корректнее: 1 -> 1, 2 -> 2, 3 -> 3, 4 -> 4, 5-20 -> 0
    const caseIndex = (number % 100 > 4 && number % 100 < 20) ? 2 : cases[number % 10];
    return titles[caseIndex];
}

export function getUrlParam(val) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(val)
}
