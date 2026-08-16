import {fill} from '@/js/filter/cards.js';
import {api_getSpecials, api_getList, api_getLatestCarArrivials} from "@/js/apibase.js"
import {
    prepareCars,
    declOfNum,
    globalValues,
    setPriceOrder,
    carCountText,
    cleanCarsWithoutPhoto,
    eventBus,
    getBrandLat
} from '@/js/global-func.js'
import {fillCars} from '@/js/filter/filCars.js'
import {getModelList, setExtention} from '@/js/filter/filter-ctrl-filling.js'
import {tyresForList} from "@/js/global-constants.js";
import {preparePagerSPA} from '@/js/pagination.js'

export function filter_changed(items, name) {
    if (name === 'Марка') {
        let brand = globalValues.brandsIds.find(el => el.name === items[name].value)

        window.globalCurrentBrandName = brand.name
        window.globalCurrentModel = ''
        if (brand) {
            filterParams['brand'] = brand.name
            filterParams['modelId'] = ''
            filterParams['model'] = ''
        }
        getModelList(items[name].value)

        // При смене марки обновляем хлебные крошки
        document.querySelector('#path').innerHTML = brand.name
    }
    if (name === 'Модель') {
        let model = globalValues.modelsIds.find(el => el.name === items[name].value)
        if (model) {
            filterParams['modelId'] = model.id
            filterParams['model'] = model.name
        }
        window.globalCurrentModel = model.name
    }
    if (name === 'Город') filterParams.city = items[name].value
    if (name === 'Тип КПП') {
        let element = globalValues.gearboxTypes.find(el => el.title === items[name].value)
        filterParams.gearboxType = element.title
    }
    if (name === 'Тип двигателя') {
        let element = globalValues.engineTypes.find(el => el.title === items[name].value)
        filterParams.engineType = element.title
    }
    if (name === 'Тип привода') {
        let element = globalValues.driveTypes.find(el => el.title === items[name].value)
        filterParams.driveType = element.title
    }
    if (name === 'Руль') {
        let element = globalValues.wheelTypes.find(el => el.title === items[name].value)
        filterParams.wheelType = element.title
    }
    if (name === 'Тип кузова') {
        let element = globalValues.bodyTypes.find(el => el.title === items[name].value)
        filterParams.bodyType = element.title
    }
    if (name === 'Цвет') {
        let element = globalValues.bodyColors.find(el => el.title === items[name].value)
        filterParams.color = element.title
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
        localStorage.removeItem('TYPE_VIEW')
    } else {
        if (cars_link) cars_link.style.display = 'none'
        if (!localStorage.getItem('TYPE_VIEW')) localStorage.setItem('TYPE_VIEW', 'dot8')
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        // Пока берем первые семь, а надо бы спецпредложения от организации
        document.querySelector('#vitrina_name').innerHTML = 'Свежие поступления авто с пробегом' // Новые поступления
        if (!ishandEvent) setExtention(false)

        let bt = document.querySelector('#set_filter')
        showPreloader(true, bt)


        filterParams.limit = 20
        api_getList(filterParams, res => {
            showPreloader(false, bt)
            declOfNum(res.totalCount, ['предложение', 'предложений', 'предложений'])
            carCountText(res.totalCount)
        })

        // let currentCity = localStorage.getItem('selectedCity') || ''

        if (Object.keys(filterParams).length < 2) window.getLatestCars(cars)

    } else if (location.pathname === '/tyres/') {
        document.querySelector('#vitrina_name').innerHTML = 'Каталог шин'
        cars = tyresForList
        setTimeout(() => fill(cars))
    } else if (location.pathname.includes('/cars') || location.pathname.includes('/cars/')) {
        fillCars(cars, ishandEvent, filterParams, fill).then(totalPages => {
            window.totalPages = totalPages

            if (ishandEvent) {
                window.isSPAquestion = true
                if (window.totalPages) preparePagerSPA(filterParams, Math.ceil(window.totalPages / 20))
            }
        })


    } else if (location.pathname === '/personal/favorite-cars/') {
        document.querySelector('#vitrina_name').innerHTML = 'Избранные автомобили'

        cars = localStorage.getItem('FavoriteCars')
        cars = cars ? JSON.parse(cars) : []
    }
    // else {
    // document.querySelector('#vitrina_name').innerHTML = 'Автомобили'
    // console.log(' тут карточек нет, либо не сформированы')
    // }
}

window.getVitrina = getVitrina


window.goToCars = function () {
    let link = ``
    if (filterParams.brand) link = '0/' + getBrandLat(filterParams['Марка'] || filterParams['brand'])
    if (filterParams.modelId) link += '?modelId=' + filterParams.modelId

    if (filterParams.city) link += '&city=' + filterParams.city
    if (filterParams.gearboxType) link += '&gearboxType=' + filterParams.gearboxType
    if (filterParams.engineType) link += '&engineType=' + filterParams.engineType
    if (filterParams.driveType) link += '&driveType=' + filterParams.driveType
    if (filterParams.wheelType) link += '&wheelType=' + filterParams.wheelType
    if (filterParams.bodyType) link += '&bodyType=' + filterParams.bodyType
    if (filterParams.color) link += '&color=' + filterParams.color
    if (filterParams.yearReleasedFrom) link += '&yearReleasedFrom=' + filterParams.yearReleasedFrom
    if (filterParams.yearReleasedTo) link += '&yearReleasedTo=' + filterParams.yearReleasedTo
    if (filterParams.priceTo) link += '&priceTo=' + filterParams.priceTo
    if (filterParams.priceFrom) link += '&priceFrom=' + filterParams.priceFrom
    if (filterParams.milleageFrom) link += '&milleageFrom=' + filterParams.milleageFrom
    if (filterParams.milleageTo) link += '&milleageTo=' + filterParams.milleageTo
    if (filterParams.engineCapacity) link += '&engineCapacity=' + filterParams.engineCapacity
    if (filterParams.priceOrder !== null && filterParams.priceOrder !== undefined) link += '&priceOrder=' + filterParams.priceOrder

    if (!link.includes('?')) {
        let place = link.indexOf('&')
        if (place > -1) link = link.slice(0, place) + "?" + link.slice(place + 1)
    }

    link = link.replaceAll(' ', '')
   location.href = '/cars' + (link?`/${link}`:'')
}
window.clearFilter = function () {
    window.clearAllFilter = true
    getVitrina()
    eventBus.emit('dataUpdated', {});
    document.querySelector('#vitrina_name').innerHTML = 'Все автомобили'
    document.querySelector('#path').innerHTML = ``
    filterParams = {limit: 20, offset: 0}

    setTimeout(() => {
        if (window.totalPages) preparePagerSPA(filterParams, Math.ceil(window.totalPages / 20))
        window.clearAllFilter = false
    }, 3000)
}

let countLatest = 0
let countNewCars = 0
window.getLatestCars = function (cars) {
    //api_getSpecials(currentCity, res => {
    api_getLatestCarArrivials(++countLatest, res => {
        res = cleanCarsWithoutPhoto(res)
        cars = prepareCars(res)
        if (countNewCars < res.length) countNewCars = res.length
        else document.querySelector('#more').innerHTML = 'Всего было добавлено сегодня: ' + countNewCars
        fill(cars, res)
    })
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
