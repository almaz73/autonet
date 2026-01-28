// export let global_brandsIds= [];

export const eventBus = {
    // Хранилище событий: { 'event_name': [callback1, callback2] }
    events: {},

    // Подписка на событие
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    // Отправка события (вызов всех подписчиков)
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    },

    // Отписка от события
    off(event, callbackToRemove) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                callback => callback !== callbackToRemove
            );
        }
    }
};

export let globalValues = {
    brandsIds: [],
    modelsIds: [],
    gearboxTypes: [],
    engineTypes: [],
    driveTypes: [],
    wheelTypes: [],
    bodyTypes: [],
    bodyColors:[]
}

export function formatterShowPrice(val) {
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
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export function getUrlParam(val) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(val)
}

export function setPriceOrder(statePriceOrder){
    let price_order = document.querySelector('.coin');

    if(statePriceOrder===false) {
        price_order.querySelector('span').title='По возрастанию'
        price_order.querySelector('img').style.transform = 'rotate(180deg)'
    }
    if(statePriceOrder===null) {
        price_order.querySelector('span').title='Не упорядоченно'
        price_order.querySelector('img').style.transform = 'rotate(270deg)';
    }
    if(statePriceOrder===true) {
        price_order.querySelector('span').title='По убыванию'
        price_order.querySelector('img').style.transform = 'rotate(0deg)'
    }
}