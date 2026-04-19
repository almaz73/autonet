import {server} from "@/js/global-constants.js";


/*** Получение кол-во автомобилей разбитых по бренду. Отсортировано от большего к меньшему ***/
export function api_getPromo(callback) {
    let request = '/api/promo'
    return fetch(server + request).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_savePromo(newRow, callback) {
    let request = '/api/promo/' + newRow.id
    return fetch(server + request, {
        method: 'PUT', // Метод запроса
        headers: {
            'Content-Type': 'application/json;charset=utf-8' // Указываем формат данных
        },
        body: JSON.stringify(newRow) // Преобразуем объект в строку
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_createPromo(newRow, callback) {
    let request = '/api/promo'
    return fetch(server + request, {
        method: 'POST', // Метод запроса
        headers: {
            'Content-Type': 'application/json' // Указываем формат данных
        },
        body: JSON.stringify(newRow) // Преобразуем объект в строку
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_deletePromo(id, callback) {
    let request = '/api/promo/' + id

    return fetch(server + request, {
        method: 'DELETE', // Метод запроса
        headers: {
            'Content-Type': 'application/json;charset=utf-8' // Указываем формат данных
        },
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}