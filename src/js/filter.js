import {fill} from '@/js/cards.js';
import {api_getList} from "@/js/API-base/apibase.js"
import {prepareCars, declOfNum, globalValues} from '@/js/global-func.js'
import {getModelList} from '@/js/filter-ctrl-filling.js'
import { getUrlParam} from '@/js/global-func.js'
import {run} from '@/js/filCars.js'

export function filter_changed(items, name) {

    console.log('<> <> <> value  = ', items[name].value)

    filterParams[name] = items[name].value

    if (name === 'Марка') {
        let brand = globalValues.brandsIds.find(el=>el.name === items[name].value)

        if (brand) {
            filterParams['brandId'] = brand.id
            filterParams['brand'] = brand.name
            filterParams['modelId'] =''
            filterParams['model'] =''
        }
        getModelList(items[name].value)
    }
    if (name === 'Модель') {
        let model = globalValues.modelsIds.find(el=>el.name === items[name].value)
        if(model) {
            filterParams['modelId'] = model.id
            filterParams['model='] = model.name
        }
    }
    if (name === 'Город') filterParams.city = items[name].value
    if (name === 'Тип кузова') {
        let element = globalValues.gearboxTypes.find(el=>el.title === items[name].value)
        filterParams.gearboxType = element.name
    }
    if (name === 'Тип КПП') {
        let element = globalValues.engineTypes.find(el=>el.title === items[name].value)
        filterParams.engineType = element.name
    }
    if (name === 'Тип двигателя') {
        let element = globalValues.driveTypes.find(el=>el.title === items[name].value)
        filterParams.driveType = element.name
    }



    getVitrina('ishandEvent')
}

let filterParams = {}

/** Запрос сервера и отображения витрины **/
function getVitrina(ishandEvent) {
    let cars_link = document.querySelector('.cars_link')
    let view_buttons = document.querySelector('.view_buttons')

    if (location.pathname === '/') {
        if (cars_link) cars_link.style.display = 'block'
        // localStorage.setItem('TYPE_VIEW', 'dot4')
        localStorage.removeItem('TYPE_VIEW')
    } else {
        if (cars_link) cars_link.style.display = 'none'
        if (view_buttons) view_buttons.style.display = 'block'
        if (!localStorage.getItem('TYPE_VIEW')) localStorage.setItem('TYPE_VIEW', 'dot8')
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        // Пока берем первые семь, а надо бы спецпредложения от организации
        document.querySelector('#vitrina_name').innerHTML = 'Специальные предложения по цене'

        api_getList(7, filterParams).then(res => {
            cars = prepareCars(res.items)
            declOfNum(res.totalCount, ['предложение', 'предложений', 'предложений'])
            document.querySelector('#set_filter span.number').innerHTML = res.totalCount
                + ' ' +declOfNum(res.totalCount, ['предложение', 'предложения', 'предложений'])

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
        document.querySelector('#vitrina_name').innerHTML = '111 Автомобили'
        console.log(' тут карточек нет, либо не сформированы')
    }
}

const id = getUrlParam('id');

if (!id) getVitrina()
window.getVitrina = getVitrina

window.goToCars = function () {
    let link  = `?`
    if (filterParams.brandId) {
        link = '?brand=' + (filterParams['Марка']|| filterParams['brand'])
        link += '&brandId=' + filterParams.brandId
    }
    if (filterParams.modelId) {
        link += '&model=' + filterParams['Модель']
        link += '&modelId=' + filterParams.modelId
    }
    if (filterParams.city) link += '&city=' + filterParams.city
    if (filterParams.gearboxType) link += '&gearboxType=' + filterParams.gearboxType
    if (filterParams.engineType) link += '&engineType=' + filterParams.engineType
    if (filterParams.driveType) link += '&driveType=' + filterParams.driveType

   location.href = '/cars/'+link
}
window.clearFilter = function () {
    location.href = location.pathname
}


