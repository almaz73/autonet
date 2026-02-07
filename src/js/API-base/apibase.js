import {message} from "@/js/message.js";

const server = 'https://ext.cartat.ru/exchange'

export function api_postCallToSell(params) {
    let request = server + '/api/Feedback/PostCallToSell'
       /* /api/Email/PostCallToSell   - Отправка заявки на оценку автомобиля
          /api/Email/PostCallToBuy    - Отправка заявки на подбор автомобиля
          /api/Email/PostCallToFranchise - Отправка заявки на франшизу
          /api/Email/PostCallToWork - Отправка резюме

          {
              "city": "string",
              "brand": "string",
              "model": "string",
              "yearReleased": "string",
              "fullName": "string",
              "phone": "string"
            }
        */



    return fetch(request, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({body: params})
    })
        .then(res => res.json())
        .then(res => res)
        .catch(error => message('Сервер отказал!', 'error'));

    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

/*** Получение кол-во автомобилей разбитых по бренду. Отсортированно от большего к меньшему ***/
export function api_GetCarCount() {
    let request = server + '/api/Auto/GetCarCount'

    return fetch(request).then(res => {
        if (!res.ok) {
            // Если статус ответа не находится в диапазоне 2xx, генерируется ошибка.
            throw new Error(`HTTP error! status: ${res.status}`);
            // todo нужно бы логировать все клиентские ошибки на сервере
        }
        return res.json();
    }).then(res => {
        return res
    }).catch(error => {
        // Перехватываем ошибки сети и HTTP-ошибки (если мы их "выбросили" выше)
        console.error('Произошла ошибка:', error);
    });
}

/*** Получение автомобилей по заданным фильтрам ***/
export function api_getList(limit, params) {
    console.log('params', params)
    let request = server + '/api/Auto/GetList?Limit=' + limit
    if (params.brandId) request += '&brandId=' + params.brandId
    if (params.modelId) request += '&modelId=' + params.modelId
    if (params.offset) request += '&offset=' + params.offset
    if (params.priceOrder !== null && params.priceOrder !== undefined) request += '&priceOrder=' + params.priceOrder
    if (params.city) request += '&city=' + params.city
    if (params.gearboxType) request += '&gearboxType=' + params.gearboxType
    if (params.engineType) request += '&engineType=' + params.engineType
    if (params.driveType) request += '&driveType=' + params.driveType
    if (params.wheelType) request += '&wheelType=' + params.wheelType
    if (params.bodyType) request += '&bodyType=' + params.bodyType
    if (params.colorId) request += '&colorId=' + params.colorId

    if (params.yearReleasedFrom) request += '&yearReleasedFrom=' + params.yearReleasedFrom
    if (params.yearReleasedTo) request += '&yearReleasedTo=' + params.yearReleasedTo
    if (params.priceTo) request += '&priceTo=' + params.priceTo
    if (params.milleageFrom) request += '&milleageFrom=' + params.milleageFrom
    if (params.milleageTo) request += '&milleageTo=' + params.milleageTo
    if (params.engineCapacity) request += '&engineCapacity=' + params.engineCapacity


    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)

        /** убираем крутилку */
        let preload_getList = document.querySelector('#preload_getList')
        if (preload_getList) preload_getList.style.display = 'none'

        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

/*** Все данные по одной машине ***/
export function api_getFullAutoInfo(guid) {
    let request = server + '/api/Auto/GetFullAutoInfo?guid=' + guid

    return fetch(request).then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        return response.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

/** Получение брендов автомобилей */
export function api_GetBrandList() {
    let request = server + '/api/auto/getBrandList'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

/** Поолучение моделей автомобилей по бренду */
export function api_GetModelList(brandId) {
    let request = server + '/api/auto/getModelList?brandId=' + brandId
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getCities() {
    let request = server + '/api/Auto/GetCities'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getGearboxTypes() {
    let request = server + '/api/Auto/GetGearboxTypes'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getEngineTypes() {
    let request = server + '/api/Auto/GetEngineTypes'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getDriveTypes() {
    let request = server + '/api/Auto/getDriveTypes'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getWheelTypes() {
    let request = server + '/api/Auto/getWheelTypes'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getBodyTypes() {
    let request = server + '/api/Auto/getBodyTypes'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getYearGap() {
    let request = server + '/api/Auto/GetYearGap'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

export function api_getColorList() {
    let request = server + '/api/Auto/GetColorList'
    return fetch(request).then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

