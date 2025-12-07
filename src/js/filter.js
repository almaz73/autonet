import {fill} from '@/js/cards.js';
import '@/js/compareCars.js';


export function filter_changed(items, name) {
    console.log('items = ', items)
    console.log('name = ', name)
    console.log('items[name].value = ', items[name].value)


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
        let name = document.querySelector('#vitrina_name')
        if (location.pathname === '/') name.innerHTML = 'Специальные предложения по цене'
        else name.innerHTML = 'Автомобили'
        name.style.fontSize = '1.5rem'
        cars = [
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 200,
                name: 'ВАЗ (LADA) 2106, 2002',
                href: '/autosite/cars/2106/651138/',
                price: '123 091',
                fromPerMonth: '1 100',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 201,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/2106/651138/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 202,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 203,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 204,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 205,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
        ]
    } else if (location.pathname === '/tyres/' || location.pathname === '/autosite/tyres/') {
        document.querySelector('#vitrina_name').innerHTML = 'Каталог шин'
        cars = [
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 210,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
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
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
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
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
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
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
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
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
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
    } else if (location.pathname === '/cars/' || location.pathname === '/autosite/cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили'
        cars = [
            {
                address: 'Альметьевск , Герцена 1Б',
                id:3333,
                name: 'ВАЗ (LADA) 2106, 2002',
                href: '/autosite/cars/2106/651138/',
                price: '123 091',
                fromPerMonth: '1 100',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:3331,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/2106/651138/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:400,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:401,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:402,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:403,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:404,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:405,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:406,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:407,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id:408,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
        ]
    } else {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили ВАЗ (LADA) с пробегом'
        cars = [
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 100,
                name: 'ВАЗ (LADA) 2106, 2002',
                href: '/autosite/cars/2106/651138/',
                price: '123 091',
                fromPerMonth: '1 100',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/101-29-10-2025-11-25-13.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 101,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/2106/651138/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 102,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 103,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 104,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 105,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 106,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 107,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 108,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 109,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 110,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 111,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 112,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 113,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 114,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/1/p1.jpg',
                    '/photo-offers/1/p2.jpg',
                    '/photo-offers/1/p3.jpg',
                    '/photo-offers/1/p4.jpg',
                    '/photo-offers/1/p5.jpg',
                    '/photo-offers/1/p6.jpg']
            },
            {
                address: 'Набережные Челны, Мусы Джалиля 15',
                id: 115,
                name: 'Volkswagen Polo, 2014',
                href: '/cars/polo/649868/',
                price: '784 238',
                fromPerMonth: '8 700',
                info: '133&nbsp;055 км, 1.6 MT (85 л.с), седан, передний, бензин',
                photos: ['/photo-offers/2/p1.jpg',
                    '/photo-offers/2/p2.jpg',
                    '/photo-offers/2/p3.jpg',
                    '/photo-offers/2/p4.jpg',
                    '/photo-offers/2/p5.jpg',
                    '/photo-offers/2/p6.jpg']
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 116,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
                price: '21 091',
                // fromPerMonth: '1 100',
                info: '',
                photos: ['/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'
                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 117,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
                price: '15 000',
                // fromPerMonth: '1 100',
                info: '',
                photos: ['/photo-tyres/1/NK0_03b04be8_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00002.jpg',
                    '/photo-tyres/1/NK0_351bedd2_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00003.jpg',
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'
                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
                id: 118,
                name: 'Viatti Brina Nordico 225/45 R17 Зима шип ',
                href: '/autosite/cars/2106/651138/',
                price: '21 091',
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

        ]
    }

    fill(cars)
}

getVitrina()


