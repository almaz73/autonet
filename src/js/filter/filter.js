import {fill} from '@/js/filter/cards.js';
import {api_getSpecials, api_getList} from "@/js/apibase.js"
import {prepareCars, declOfNum, globalValues, setPriceOrder, toDisable, carCountText} from '@/js/global-func.js'
import {fillCars} from '@/js/filter/filCars.js'
import {getModelList, setExtention} from '@/js/filter/filter-ctrl-filling.js'
import { getUrlParam} from '@/js/global-func.js'
import {tyresForList} from "@/js/global-constants.js";

export function filter_changed(items, name) {
    if (name === 'Марка') {
        let brand = globalValues.brandsIds.find(el=>el.name === items[name].value)

        if (brand) {
            filterParams['brandId'] = brand.id
            filterParams['brand'] = brand.name
            filterParams['modelId'] =''
            filterParams['model'] =''
            setTimeout(()=>document.querySelector('[data-placeholder="Модель"] .big-comb__placeholder').innerText = '', 2000)
        }
        getModelList(items[name].value)
    }
    if (name === 'Модель') {
        let model = globalValues.modelsIds.find(el=>el.name === items[name].value)
        if(model) {
            filterParams['modelId'] = model.id
            filterParams['model'] = model.name
        }
    }
    if (name === 'Город') filterParams.city = items[name].value
    if (name === 'Тип КПП') {
        let element = globalValues.gearboxTypes.find(el=>el.title === items[name].value)
        filterParams.gearboxType = element.name
    }
    if (name === 'Тип двигателя') {
        let element = globalValues.engineTypes.find(el=>el.title === items[name].value)
        filterParams.engineType = element.name
    }
    if (name === 'Тип привода') {
        let element = globalValues.driveTypes.find(el=>el.title === items[name].value)
        filterParams.driveType = element.name
    }
    if (name === 'Руль') {
        let element = globalValues.wheelTypes.find(el=>el.title === items[name].value)
        filterParams.wheelType = element.name
    }
    if (name === 'Тип кузова') {
        let element = globalValues.bodyTypes.find(el=>el.title === items[name].value)
        filterParams.bodyType = element.name
    }
    if (name === 'Цвет') {
        let element = globalValues.bodyColors.find(el=> el.name === items[name].value)
        filterParams.colorId = element.id
        filterParams.color = element.name
    }


    getVitrina('ishandEvent')
}

export function filter_changed_text(type, val) {
    filterParams[type] = val
    getVitrina('ishandEvent')
}

let filterParams = {}

/** Запрос сервера и отображения витрины **/
function getVitrina(ishandEvent) {
    let cars_link = document.querySelector('.cars_link')

    if (location.pathname === '/') {
        if (cars_link) cars_link.style.display = 'block'
        // localStorage.setItem('TYPE_VIEW', 'dot4')
        localStorage.removeItem('TYPE_VIEW')
    } else {
        if (cars_link) cars_link.style.display = 'none'
        if (!localStorage.getItem('TYPE_VIEW')) localStorage.setItem('TYPE_VIEW', 'dot8')
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        // Пока берем первые семь, а надо бы спецпредложения от организации
        document.querySelector('#vitrina_name').innerHTML = 'Специальные предложения по цене'
        if (!ishandEvent) setExtention(false)

        let bt = document.querySelector('#set_filter')
        toDisable(bt, true)

        filterParams.limit = 0
        api_getList(filterParams, res => {
            toDisable(bt, false) // раздизаблим кнопку
            declOfNum(res.totalCount, ['предложение', 'предложений', 'предложений'])
            carCountText(res.totalCount)
        })

        let currentCity = localStorage.getItem('selectedCity') || ''
        api_getSpecials(currentCity, res => {
            cars = prepareCars(res)
            if (!ishandEvent) fill(cars, res)
        })

    } else if (location.pathname === '/tyres/') {
        document.querySelector('#vitrina_name').innerHTML = 'Каталог шин'
        cars = tyresForList
        setTimeout(()=>fill(cars))
    } else if (location.pathname === '/cars/') {
        fillCars(cars, ishandEvent, filterParams, fill)
    } else if (location.pathname === '/personal/favorite-cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Избранные автомобили'

        cars = localStorage.getItem('FavoriteCars')
        cars = cars ? JSON.parse(cars) : []
        setTimeout(()=>fill(cars, cars))
    } else {
        document.querySelector('#vitrina_name').innerHTML = 'Автомобили'
        console.log(' тут карточек нет, либо не сформированы')
    }
}

const id = getUrlParam('id');

if (!id) getVitrina()
window.getVitrina = getVitrina

window.goToCars = function () {
    let link  = `?`
    if (filterParams.brandId) {
        link = '?brand=' + (filterParams['Марка'] || filterParams['brand'])
        link += '&brandId=' + filterParams.brandId
    }
    if (filterParams.modelId) {
        link += '&model=' + (filterParams['Модель'] || filterParams['model'])
        link += '&modelId=' + filterParams.modelId
    }
    if (filterParams.city) link += '&city=' + filterParams.city
    if (filterParams.gearboxType) link += '&gearboxType=' + filterParams.gearboxType
    if (filterParams.engineType) link += '&engineType=' + filterParams.engineType
    if (filterParams.driveType) link += '&driveType=' + filterParams.driveType
    if (filterParams.wheelType) link += '&wheelType=' + filterParams.wheelType
    if (filterParams.bodyType) link += '&bodyType=' + filterParams.bodyType
    if (filterParams.colorId) {
        link += '&colorId=' + filterParams.colorId
        link += '&color=' + filterParams.color
    }
    if (filterParams.yearReleasedFrom) link += '&yearReleasedFrom=' + filterParams.yearReleasedFrom
    if (filterParams.yearReleasedTo) link += '&yearReleasedTo=' + filterParams.yearReleasedTo    
    if (filterParams.priceTo) link += '&priceTo=' + filterParams.priceTo
    if (filterParams.priceFrom) link += '&priceFrom=' + filterParams.priceFrom
    if (filterParams.milleageFrom) link += '&milleageFrom=' + filterParams.milleageFrom
    if (filterParams.milleageTo) link += '&milleageTo=' + filterParams.milleageTo
    if (filterParams.engineCapacity) link += '&engineCapacity=' + filterParams.engineCapacity
    if (filterParams.priceOrder!==null && filterParams.priceOrder!==undefined) link += '&priceOrder=' + filterParams.priceOrder

   location.href = '/cars/'+link
}
window.clearFilter = function () {
    location.href = location.pathname
}

document.addEventListener('DOMContentLoaded', () => {
    let statePriceOrder = null
    let price_order = document.querySelector('.coin');
    price_order && price_order.addEventListener('click', () => {
        if (statePriceOrder === false) statePriceOrder = true
        else if (statePriceOrder === null) statePriceOrder = false
        else if (statePriceOrder === true) statePriceOrder = null
        setPriceOrder(statePriceOrder)
        filter_changed_text('priceOrder', statePriceOrder)
    });
})
