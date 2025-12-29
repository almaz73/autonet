import {fill} from '@/js/cards.js';
import {api_getList} from "@/js/API-base/apibase.js"
import {formatterShowPrice} from "@/js/global-func.js";

export function filter_changed(items, name) {
    console.log('items = ', items)
    console.log('name = ', name)
    console.log('items[name].value = ', items[name].value)


}


function prepareCars(res) {
    let cars = []
    res.forEach(el => {
        let info = el.milleage + ' км, '
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
            href: '/cars/2106/651138/', // todo нужно придумать путь
            price: formatterShowPrice(el.price),
            fromPerMonth: fromPerMonth,
            info: info,
            photos: el.images
        })
    })
    return cars
}

/** Запрос сервера и отображения витрины **/
function getVitrina() {
    let cars_link = document.querySelector('.cars_link')
    let view_buttons = document.querySelector('.view_buttons')

    if (location.pathname === '/') {
        cars_link.style.display = 'block'
        localStorage.setItem('TYPE_VIEW', 'dot4')
    } else {
        cars_link.style.display = 'none'
        view_buttons.style.display = 'block'
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        document.querySelector('#vitrina_name').innerHTML = 'Специальные предложения по цене'

        api_getList(7).then(res => {
            cars = prepareCars(res)
            fill(cars, res)
        })

    } else if (location.pathname === '/tyres/') {
        document.querySelector('#vitrina_name').innerHTML = 'Каталог шин'
        cars = [
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 210,
                type: 'tyres',
                winter: true,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/cars/2106/651138/',
                price: '15 000',
                // fromPerMonth: '1 100',
                info: '',
                photos: ['/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'

                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 211,
                type: 'tyres',
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/cars/2106/651138/',
                price: '21 091',
                // fromPerMonth: '1 100',
                info: '',
                photos: [
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'
                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 212,
                type: 'tyres',
                winter: true,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/cars/2106/651138/',
                price: '15 000',
                // fromPerMonth: '1 100',
                info: '',
                photos: [
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'
                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 213,
                type: 'tyres',
                winter: true,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/cars/2106/651138/',
                price: '21 091',
                // fromPerMonth: '1 100',
                info: '',
                photos: [
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                    '/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'
                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 214,
                type: 'tyres',
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/cars/2106/651138/',
                price: '15 000',
                // fromPerMonth: '1 100',
                info: '',
                photos: [
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg',
                    '/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                ]
            },
        ]
    } else if (location.pathname === '/cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили'
        api_getList(12).then(res => {
            cars = prepareCars(res)
            fill(cars, res)
        })
    } else if (location.pathname === '/personal/favorite-cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Избранные автомобили'

        cars = localStorage.getItem('FavoriteCars')
        cars = cars ? JSON.parse(cars) : []
        fill(cars)
    } else {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили ВАЗ (LADA) с пробегом'
        alert(' тут не ожидалсь фотки авто')
    }
}

getVitrina()
window.getVitrina = getVitrina


