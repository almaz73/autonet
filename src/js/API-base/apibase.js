const server = 'https://ext.cartat.ru/exchange'

/*** Получение кол-во автомобилей разбитых по бренду. Отсортированно от большего к меньшему ***/
export function api_getCountBrands() {
    let request = server + '/api/Auto/GetCarCount'

    return fetch(request).then(response => {
        if (!response.ok) {
            // Если статус ответа не находится в диапазоне 2xx, генерируется ошибка.
            throw new Error(`HTTP error! status: ${response.status}`);
            // todo нужно бы логировать все клиентские ошибки на сервере
        }
        return response.json();
    }).then(res => {
        return res
    }).catch(error => {
        // Перехватываем ошибки сети и HTTP-ошибки (если мы их "выбросили" выше)
        console.error('Произошла ошибка:', error);
    });
}

/*** Получение автомобилей по заданным фильтрам ***/
export function api_getList(count, params) {
    let request = server + '/api/Auto/GetList?Limit=' + count
    if (params.brandId) request += '&brandId=' + params.brandId
    if (params.modelId) request += '&modelId=' + params.modelId

    return fetch(request).then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        /** убираем крутилку */
        let preload_getList = document.querySelector('#preload_getList')
        if (preload_getList) preload_getList.style.display = 'none'

        return response.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}

/*** Все данные по одной машине ***/
export function api_getFullAutoInfo(guid) {
    let request = server + '/api/Auto/GetFullAutoInfo?guid=' + guid

    return fetch(request).then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        return response.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));


    // todo это временно
    // return new Promise((resolve, reject) => {
    //     let res = JSON.parse('{"сonfiguration":["Антиблокировочнаясистема(ABS)","Аудиосистема","Гидроусилительруля(ГУР)","Кондиционер","Обивкасалонаткань","Обогревзеркал","Подогревстеколзаднее","Подушкиводителя","Подушкипереднегопассажира","Сигнализациясавтозапуском","Тонированныестекла","Фарыгалогеновые","Центральныйзамок","Элприводзеркал","Электростеклоподъёмники","передние"],"gearboxType":"Автоматическая","city":"Стерлитамак","color":"Серебряный","id":"bd190ebf-e117-11e9-80d7-000c2934ace2","brand":"Datsun","model":"mi-DO","yearReleased":2015,"price":"520000,00","milleage":"123763","enginePower":"87","engineCapacity":"1,6","bodyType":"Хетчбэк","engineType":"Бензин","driveType":"Передний","fullAddress":"Стерлитамак, Шаймуратова 12","images":["http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/01-20-10-2025-02-37-27.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/02-20-10-2025-02-37-28.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/03-20-10-2025-02-37-29.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/04-20-10-2025-02-37-30.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/05-20-10-2025-02-37-31.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/06-20-10-2025-02-37-33.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/07-20-10-2025-02-37-33.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/08-20-10-2025-02-37-34.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/09-20-10-2025-02-37-35.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/10-20-10-2025-02-37-36.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/11-20-10-2025-02-37-37.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/121-20-10-2025-02-37-38.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/122-20-10-2025-02-37-39.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/13-20-10-2025-02-37-39.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/14-20-10-2025-02-37-40.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/15-20-10-2025-02-37-41.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/16-20-10-2025-02-37-42.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/17-20-10-2025-02-37-43.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/18-20-10-2025-02-37-44.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/19-20-10-2025-02-37-45.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/20-20-10-2025-02-37-46.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/21-20-10-2025-02-37-47.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/22-20-10-2025-02-37-48.JPG","http://export.cartat.ru/cm/bd190ebf-e117-11e9-80d7-000c2934ace2/23-20-10-2025-02-37-50.JPG"]}')
    //     setTimeout(resolve(res))
    // })


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