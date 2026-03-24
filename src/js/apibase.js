
import {withCache} from "@/js/apibase_cache.js"
import {server} from "@/js/global-constants.js";


export function api_postEmail(params) {
    let request = '/api/postEmail'

    // собираем текст для письма
    let letter = ''
    if (params.fio || params.name) letter += 'Имя: ' + (params.fio || params.name) + '\n'
    if (params.phone) letter += 'Телефон: ' + params.phone + '\n'
    if (params.city) letter += 'Город: ' + params.city + '\n'
    if (params.email) letter += 'Email: ' + params.email + '\n'
    if (params.aboutYourself) letter += 'О себе: ' + params.aboutYourself + '\n'
    if (params.credit) letter += 'Сумма кредита: ' + params.credit.replaceAll('&nbsp;',' ') + '\n'
    if (params.payment) letter += 'Первый платеж: ' + params.payment.replaceAll('&nbsp;',' ') + '\n'
    if (params.yearCred) letter += 'Год кредита: ' + params.yearCred  + '\n'
    if (params.forMonth) letter += 'Платеж в месяц: ' + params.forMonth.replaceAll('&nbsp;',' ') + '\n'
    if (params.price) letter += 'Стоимость автомобиля: ' + params.price.replaceAll('&nbsp;', ' ') + '\n'
    if (params.text) letter += 'Текст: ' + params.text + '\n'
    if (params.selection) letter += 'Выбор сервиса: ' + params.selection + '\n'
    if (params.brand) letter += 'Марка: ' + params.brand + '\n'
    if (params.model) letter += 'Модель: ' + params.model + '\n'
    if (params.year) letter += 'Год: ' + params.year + '\n'
    if (params.osago) letter += 'Автострахование: ' + params.osago + '\n'
    if (params.agree) letter += 'Согласие на рекламу: ДА'

    return fetch(server + request, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({type: params.type || 10, text: letter})
    })
        .then(res => res.json())
        .then(res => {
            showPreloader(false)
            return res
        })
        .catch(() => sendMessage('Сервер не принял письмо!', 'error'));
}


export function api_postEmailWithAttachement(params) {
    // - Отправка файла резюме
    let request = '/api/postEmailWithAttachement'

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
    if (params.agree) letter += 'Согласие на рекламу: ДА'


    formData.append('text', letter);
    formData.append('file', params.resume);

    return fetch(server + request, {
        method: 'POST',
        body: formData //   body:  JSON.stringify(param)
    })
        .then(res => res.json())
        .then(res => {
            showPreloader(false)
            return res})
        .catch(() => sendMessage('Сервер отказал!', 'error'));
}


////////////////////// ниже используем КЭШ //////////////////////////

/*** Получение автомобилей по заданным фильтрам ***/
export function api_getList(params, callback) {
    let request = '/api/getList?limit=' + params.limit
    // if (params.brandId) request += '&brandId=' + params.brandId
    if (params.brand) request += '&brand=' + params.brand
    if (params.modelId) request += '&modelId=' + params.modelId
    if (params.offset) request += '&offset=' + params.offset
    if (params.priceOrder !== null && params.priceOrder !== undefined) request += '&priceOrder=' + params.priceOrder
    if (params.city && params.city !== 'Все') request += '&city=' + params.city
    if (params.gearboxType) request += '&gearboxType=' + params.gearboxType
    if (params.engineType) request += '&engineType=' + params.engineType
    if (params.driveType) request += '&driveType=' + params.driveType
    if (params.wheelType) request += '&wheelType=' + params.wheelType
    if (params.bodyType) request += '&bodyType=' + params.bodyType
    if (params.color) request += '&color=' + params.color

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
    let request = '/api/getSpecials?city=' + city
    return withCache(request, callback, 60) // ЗВ 10 минут авто не подменят
}

/*** Все данные по одной машине ***/
export function api_getFullAutoInfo(guid, callback) {
    let request = '/api/getFullAutoInfo?guid=' + guid
    return withCache(request, callback, 10) // ЗВ 10 минут авто не подменят
}

/*** Получение кол-во автомобилей разбитых по бренду. Отсортировано от большего к меньшему ***/
export function api_GetCarCount(callback) {
    let request = '/api/getCarCount'
    return withCache(request, callback, 5) // тут 5 минут только кешируем
}

/** Получение брендов автомобилей (поменяли) */
// export function api_GetBrandList(callback) {
//     let request = '/api/getBrandList'
//     return withCache(request, callback, 60) // дальше уже кеширование на час, редко обновляются
// }

/** Получение моделей автомобилей по бренду */
export function api_GetModelList(brandId, callback) {
    let request = '/api/getModelList?brandId=' + brandId
    return withCache(request, callback, 60)
}

export function api_getCities(callback) {
    let request = '/api/getCities'
    return withCache(request, callback, 60)
}

export function api_getGearboxTypes(callback) {
    let request = '/api/getGearboxTypes'
    return withCache(request, callback, 60)
}

export function api_getEngineTypes(callback) {
    let request = '/api/getEngineTypes'
    return withCache(request, callback, 60)
}

export function api_getDriveTypes(callback) {
    let request = '/api/getDriveTypes'
    return withCache(request, callback, 60)
}

export function api_getWheelTypes(callback) {
    let request = '/api/getWheelTypes'
    return withCache(request, callback, 60)
}

export function api_getBodyTypes(callback) {
    let request = '/api/getBodyTypes'
    return withCache(request, callback, 60)
}

export function api_getYearGap(callback) {
    let request = '/api/getYearGap'
    return withCache(request, callback, 60)
}

export function api_getColorList(callback) {
    let request = '/api/getColorList'
    return withCache(request, callback, 60)
}

