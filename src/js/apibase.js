import {sendMessage} from "@/js/sendMessage.js";
import {withCache} from "@/js/apibase_cache.js"

const server = 'https://ext.cartat.ru/exchange'

export function api_postEmail(params) {
    let request = '/api/Feedback/postEmail'

    return fetch(server + request, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({body: params})
    })
        .then(res => res.json())
        .then(res => res)
        .catch(error => sendMessage('Сервер отказал!', 'error'));

    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}


export function api_PostEmailWithAttachement(params) {
    // - Отправка файла резюме
    let request = '/api/Email/PostEmailWithAttachement'

    // 2. Создаем FormData и добавляем файл
    const formData = new FormData();
    formData.append('resume', params.resume);
    formData.append('fullName', params.fullName);
    formData.append('phone', params.phone);
    formData.append('city', params.city);
    formData.append('email', params.email);
    formData.append('aboutYourself', params.aboutYourself);

    let param = {
        type: 11,
        text: JSON.stringify(formData)
    }

    return fetch(server + request, {
        method: 'POST',
        body: param
    })
        .then(res => res.json())
        .then(res => res)
        .catch(error => sendMessage('Сервер отказал!', 'error'));
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

