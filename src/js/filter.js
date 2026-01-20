import {fill} from '@/js/cards.js';
import {api_getList} from "@/js/API-base/apibase.js"
import {global_brandsIds, prepareCars} from '@/js/global-func.js'
import {getModelList} from '@/js/filter-ctrl-filling.js'
import {global_modelsIds} from '@/js/global-func.js'
import {run} from '@/js/filCars.js'

export function filter_changed(items, name) {
    console.log('<> <> <> value  = ', items[name].value)
    filterParams[name] = items[name].value

    if (name === 'Марка') {
        let brand = global_brandsIds.find(el=>el.name === items[name].value)

        if (brand) {
            filterParams['brandId'] = brand.id
            filterParams['brand='] = brand.name
        }
        getModelList(items[name].value)
    }
    if (name === 'Модель') {
        let model = global_modelsIds.find(el=>el.name === items[name].value)
        if(model) filterParams['modelId'] = model.id
    }

    getVitrina('ishandEvent')
}

let filterParams = {}

/** Запрос сервера и отображения витрины **/
function getVitrina(ishandEvent) {
    let cars_link = document.querySelector('.cars_link')
    let view_buttons = document.querySelector('.view_buttons')

    if (location.pathname === '/') {
        if(cars_link) cars_link.style.display = 'block'
        localStorage.setItem('TYPE_VIEW', 'dot4')
    } else {
        if(cars_link) cars_link.style.display = 'none'
        if(view_buttons) view_buttons.style.display = 'block'
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        // Пока берем первые семь, а надо бы спецпредложения от организации
        document.querySelector('#vitrina_name').innerHTML = 'Специальные предложения по цене'

        api_getList(7, filterParams).then(res => {
            cars = prepareCars(res.items)
            document.querySelector('#set_filter span.number').innerHTML = res.totalCount

            if (!ishandEvent) fill(cars, res.items)
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
        setTimeout(()=>fill(cars))
    } else if (location.pathname === '/cars/') {
        run(cars, ishandEvent, filterParams, fill)
    } else if (location.pathname === '/personal/favorite-cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Избранные автомобили'

        cars = localStorage.getItem('FavoriteCars')
        cars = cars ? JSON.parse(cars) : []
        setTimeout(()=>fill(cars))
    } else {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили'
        console.log(' тут карточек нет, либо не сформированы')
    }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

if (!id) getVitrina()
window.getVitrina = getVitrina

window.goToCars = function () {
    console.log('? ???? ?????? filterParams',filterParams)
    let link  = `?`
    if (filterParams.brandId) {
        link = '?brand=' + filterParams['Марка']
        link += '&brandId=' + filterParams.brandId
    }
    if (filterParams.modelId) link += '&modelId=' + filterParams.modelId
   location.href = '/cars/'+link
}
window.clearFilter = function () {
    location.href = location.pathname

    // if (location.pathname !== '/') location.href = location.pathname
    // else {
    //     console.log(items)
    //     Object.keys(items).forEach(el=>{
    //         items[el].value = ''
    //     })
    // }
}


