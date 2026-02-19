
import {withCache} from "@/js/apibase_cache.js"

const server = 'https://ext.cartat.ru/exchange'

export function api_postEmail(params) {
    let request = '/api/Email/PostEmail'

    // собираем текст для письма
    let letter = ''
    if (params.fio || params.name) letter += 'Имя: ' + (params.fio || params.name) + '\n'
    if (params.phone) letter += 'Телефон: ' + params.phone + '\n'
    if (params.city) letter += 'Город: ' + params.city + '\n'
    if (params.email) letter += 'Email: ' + params.email + '\n'
    if (params.aboutYourself) letter += 'О себе: ' + params.aboutYourself + '\n'
    if (params.credit) letter += 'Сумма кредита: ' + params.credit + '\n'
    if (params.payment) letter += 'Первый платеж: ' + params.payment + '\n'
    if (params.yearCred) letter += 'Годов кредита: ' + params.yearCred + '\n'
    if (params.forMonth) letter += 'Платеж в месяц: ' + params.forMonth + '\n'
    if (params.price) letter += 'Стоиомрсть автомобиля: ' + params.price + '\n'
    if (params.text) letter += 'Текст: ' + params.text + '\n'
    if (params.selection) letter += 'Выбор сервиса: ' + params.selection + '\n'
    if (params.brand) letter += 'Марка: ' + params.brand + '\n'
    if (params.model) letter += 'Модель: ' + params.model + '\n'
    if (params.year) letter += 'Год: ' + params.year + '\n'
    if (params.osago) letter += 'Автострахование: ' + params.osago + '\n'

    return fetch(server + request, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({type: params.type || 10, text: letter})
    })
        .then(res => res.json())
        .then(res => res)
        .catch(() => sendMessage('Сервер не принял письмо!', 'error'));
}


export function api_PostEmailWithAttachement(params) {
    // - Отправка файла резюме
    let request = '/api/Email/PostEmailWithAttachement'

    // 2. Создаем FormData и добавляем файл
    const formData = new FormData();

    formData.append('type', 11);

    // собираем текст для письма
    let letter = ''
    if (params.fio || params.name) letter += 'Имя: ' + (params.fio || params.name) + '\n'
    if (params.phone) letter += 'Телефон: ' + params.phone + '\n'
    if (params.city) letter += 'Город: ' + params.city + '\n'
    if (params.email) letter += 'Email: ' + params.email + '\n'
    if (params.aboutYourself) letter += 'О себе: ' + params.aboutYourself + '\n'


    formData.append('text', letter);
    formData.append('resume', params.resume);

    return fetch(server + request, {
        method: 'POST',
        body: formData //   body:  JSON.stringify(param)
    })
        .then(res => res.json())
        .then(res => res)
        .catch(() => sendMessage('Сервер отказал!', 'error'));
}


////////////////////// ниже используем КЭШ //////////////////////////

/*** Получение автомобилей по заданным фильтрам ***/
export function api_getList(params, callback) {
    let request = '/api/Auto/GetList?Limit=' + params.limit
    if (params.brandId) request += '&brandId=' + params.brandId
    if (params.modelId) request += '&modelId=' + params.modelId
    if (params.offset) request += '&offset=' + params.offset
    if (params.priceOrder !== null && params.priceOrder !== undefined) request += '&priceOrder=' + params.priceOrder
    if (params.city && params.city !== 'Все') request += '&city=' + params.city
    if (params.gearboxType) request += '&gearboxType=' + params.gearboxType
    if (params.engineType) request += '&engineType=' + params.engineType
    if (params.driveType) request += '&driveType=' + params.driveType
    if (params.wheelType) request += '&wheelType=' + params.wheelType
    if (params.bodyType) request += '&bodyType=' + params.bodyType
    if (params.colorId) request += '&colorId=' + params.colorId

    if (params.yearReleasedFrom) request += '&yearReleasedFrom=' + params.yearReleasedFrom
    if (params.yearReleasedTo) request += '&yearReleasedTo=' + params.yearReleasedTo
    if (params.priceTo) request += '&priceTo=' + params.priceTo
    if (params.priceFrom) request += '&priceFrom=' + params.priceFrom
    if (params.milleageFrom) request += '&milleageFrom=' + params.milleageFrom
    if (params.milleageTo) request += '&milleageTo=' + params.milleageTo
    if (params.engineCapacity) request += '&engineCapacity=' + params.engineCapacity

    return withCache(request, callback, null) // ЗВ 10 минут авто не подменят
}

export function api_getSpecials(city, callback) {
    let request = '/api/Auto/GetSpecials?city=' + city
    return withCache(request, callback, 60) // ЗВ 10 минут авто не подменят
}

/*** Все данные по одной машине ***/
export function api_getFullAutoInfo(guid, callback) {
    let request = '/api/Auto/GetFullAutoInfo?guid=' + guid
    return withCache(request, callback, 10) // ЗВ 10 минут авто не подменят
}

/*** Получение кол-во автомобилей разбитых по бренду. Отсортированно от большего к меньшему ***/
export function api_GetCarCount(callback) {
    let request = '/api/Auto/GetCarCount'
    return withCache(request, callback, 5) // тут 5 минут только кешируем
}

/** Получение брендов автомобилей */
export function api_GetBrandList(callback) {
    let request = '/api/auto/getBrandList'
    return withCache(request, callback, 60) // дальше уже кешироание на час, редко обновляются
}

/** Поолучение моделей автомобилей по бренду */
export function api_GetModelList(brandId, callback) {
    let request = '/api/auto/getModelList?brandId=' + brandId
    return withCache(request, callback, 60)
}

export function api_getCities(callback) {
    let request = '/api/Auto/GetCities'
    return withCache(request, callback, 60)
}

export function api_getGearboxTypes(callback) {
    let request = '/api/Auto/GetGearboxTypes'
    return withCache(request, callback, 60)
}

export function api_getEngineTypes(callback) {
    let request = '/api/Auto/GetEngineTypes'
    return withCache(request, callback, 60)
}

export function api_getDriveTypes(callback) {
    let request = '/api/Auto/getDriveTypes'
    return withCache(request, callback, 60)
}

export function api_getWheelTypes(callback) {
    let request = '/api/Auto/getWheelTypes'
    return withCache(request, callback, 60)
}

export function api_getBodyTypes(callback) {
    let request = '/api/Auto/getBodyTypes'
    return withCache(request, callback, 60)
}

export function api_getYearGap(callback) {
    let request = '/api/Auto/GetYearGap'
    return withCache(request, callback, 60)
}

export function api_getColorList(callback) {
    let request = '/api/Auto/GetColorList'
    return withCache(request, callback, 60)
}

