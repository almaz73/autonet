const server = 'https://ext.cartat.ru/exchange'
/* Получение кол-во автомобилей разбитых по бренду. Отсортированно от большего к меньшему */
export function api_getCountBrands() {
    let request = server+'/api/Auto/GetCarCount'

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

export function api_getList(){
    let request = server+'/api/Auto/GetList?Limit=7'

    return fetch(request).then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        return response.json();
    }).then(res => res).catch(error => console.error('Произошла ошибка:', error));
}


