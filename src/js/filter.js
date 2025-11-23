import {fill} from '@/js/cards.js';


export function filter_changed(items, name) {
    console.log('items = ', items)
    console.log('name = ', name)
    console.log('items[name].value = ', items[name].value)


}


/** Запрос сервера и отображения витрины **/
function getVitrina() {
    if (location.pathname === '/' || location.pathname === '/autosite/') {
        // Если это первая страница, скрываем сортировку по цене
        let coin = document.querySelector('.type_views.coin')
        if (coin) coin.style.display = 'none'
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/' || location.pathname === '/autosite/') {
        let name = document.querySelector('#vitrina_name')
        name.innerHTML = 'Специальные предложения по цене'
        name.style.fontSize = '1.5rem'
        cars = [
            {
                address: 'Альметьевск , Герцена 1Б',
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
                    '/photo-tyres/1/NK0_ff8cd2b6_00004.jpg'
                ]
            },
            {
                address: 'Альметьевск , Герцена 1Б',
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


