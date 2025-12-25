/* Получение кол-во автомобилей разбитых по бренду. Отсортированно от большего к меньшему */
export function api_getCountBrands() {
    let request = 'https://ext.cartat.ru/exchange/api/Auto/GetCarCount'

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


