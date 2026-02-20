// обработка location.pathname === '/cars/
import {api_getList} from "@/js/apibase.js"
import {getUrlParam, prepareCars, eventBus, setPriceOrder, carCountText} from '@/js/global-func.js'
import {setExtention} from "@/js/filter/filter-ctrl-filling.js"

const countPerPage = 20
const combValuesForAfterUpdate = []
let ishandEvent
let extention = false //  Есть ли выбранные элементы в параметрах аждреса
let Cache_serv = localStorage.getItem('CACHE_SERV')
Cache_serv = JSON.parse(Cache_serv)

/* Заполнение фильтер данныеми по адресной строке */
function FillFilterFromAddressBar(filterParams) {
    // заполнение фильтра по параметрам адресной строки
    const brandId = getUrlParam('brandId')
    const brand = getUrlParam('brand')
    if (brandId) {
        filterParams['brandId'] = brandId
        filterParams['brand'] = brand
        setCombName('Марка', brand)
    }

    const modelId = getUrlParam('modelId')
    const model = getUrlParam('model')
    if (modelId) {
        filterParams['modelId'] = modelId
        filterParams['model'] = model
        setCombName('Модель', model)
    }

    const city = getUrlParam('city')
    if (city) {
        filterParams.city = city
        setCombName('Город', city)
    }

    const colorId = getUrlParam('colorId')
    const color = getUrlParam('color')
    if (colorId) {
        filterParams.colorId = colorId
        setCombName('Цвет', color)
    }

    const gearboxType = getUrlParam('gearboxType')
    if (gearboxType) {
        extention = true
        filterParams.gearboxType = gearboxType

        let item = Cache_serv['/api/Auto/GetGearboxTypes']
        let name = item && item.data.find(el => el.name === gearboxType)
        setCombName('Тип КПП', (name ? name.title : gearboxType))
    }

    const engineType = getUrlParam('engineType')
    if (engineType) {
        extention = true
        filterParams.engineType = engineType

        let item = Cache_serv['/api/Auto/GetEngineTypes']
        let name = item && item.data.find(el => el.name === engineType)
        setCombName('Тип двигателя', (name ? name.title : engineType))
    }

    const bodyType = getUrlParam('bodyType')
    if (bodyType) {
        extention = true
        filterParams.bodyType = bodyType
        let item = Cache_serv['/api/Auto/getBodyTypes']
        let name = item && item.data.find(el => el.name === bodyType)
        setCombName('Тип кузова', (name ? name.title : bodyType))
    }

    const wheelType = getUrlParam('wheelType')
    if (wheelType) {
        extention = true
        filterParams.wheelType = wheelType

        let item = Cache_serv['/api/Auto/getWheelTypes']
        let name = item && item.data.find(el => el.name === wheelType)
        setCombName('Руль', (name ? name.title : wheelType))
    }

    const driveType = getUrlParam('driveType')
    if (driveType) {
        extention = true
        filterParams.driveType = driveType
        let item = Cache_serv['/api/Auto/getDriveTypes']
        let name = item && item.data.find(el => el.name === driveType)
        setCombName('Тип привода',  (name ? name.title : wheelType))
    }


    const yearReleasedFrom = getUrlParam('yearReleasedFrom')
    if (yearReleasedFrom) {
        filterParams.yearReleasedFrom = yearReleasedFrom
        setInputName('yearReleasedFrom', yearReleasedFrom)
    }

    const yearReleasedTo = getUrlParam('yearReleasedTo')
    if (yearReleasedTo) {
        extention = true
        filterParams.yearReleasedTo = yearReleasedTo
        setInputName('yearReleasedTo', yearReleasedTo)
    }

    const priceTo = getUrlParam('priceTo')
    if (priceTo) {
        filterParams.priceTo = priceTo
        setInputName('priceTo', priceTo)
    }

    const milleageFrom = getUrlParam('milleageFrom')
    if (milleageFrom) {
        extention = true
        filterParams.milleageFrom = milleageFrom
        setInputName('milleageFrom', milleageFrom)
    }

    const milleageTo = getUrlParam('milleageTo')
    if (milleageTo) {
        extention = true
        filterParams.milleageTo = milleageTo
        setInputName('milleageTo', milleageTo)
    }

    const engineCapacity = getUrlParam('engineCapacity')
    if (engineCapacity) {
        extention = true
        filterParams.engineCapacity = engineCapacity
        setInputName('engineCapacity', engineCapacity)
    }

    const priceFrom = getUrlParam('priceFrom')
    if (priceFrom) {
        extention = true
        filterParams.priceFrom = priceFrom
        setInputName('priceFrom', priceFrom)
    }

    if (extention) {
        // Раширенный фильтр
        let advanced = document.querySelector('.frame-filter__controls-advanced')
        let filterAdvanced = document.querySelector('.filter-fields')
        advanced && advanced.classList.add("active")
        filterAdvanced && filterAdvanced.classList.add("active")
    }

    const priceOrder = getUrlParam('priceOrder')
    if (priceOrder) {
        filterParams['priceOrder'] = getUrlParam('priceOrder') === 'true'
        setPriceOrder(filterParams['priceOrder'])
    }

    filterParams['offset'] = getUrlParam('page')
    setExtention(extention)
}

function setCombName(name, value) {
    if (ishandEvent) return false
    combValuesForAfterUpdate.push({name, value})
}

eventBus.on('dataUpdated', handleData); // событие загрузки всех комбобоксов из сервера
function handleData() {
    combValuesForAfterUpdate.forEach(el => {
        let comb = document.querySelector(`[data-placeholder="${el.name}"]`)
        if (comb && comb.querySelector('.big-comb__placeholder')) {
            comb.querySelector('.big-comb__placeholder').innerText = el.value
            comb.querySelector('.big-comb__placeholder').classList.add('bold')
        }
    })
    // eventBus.off('dataUpdated', handleData);
}

function setInputName(name, value) {
    if (ishandEvent) return false
    let inp = document.querySelector(`[onchange="input_chamged('${name}', this.value)"]`)
    if (inp) {
        inp.value = value
        inp.classList.add('bold')
    }
}


export function fillCars(cars, ishandEvent_, filterParams, fill) {
    ishandEvent = ishandEvent_
    if (!ishandEvent) FillFilterFromAddressBar(filterParams)

    let bt = document.querySelector('#set_filter')
    showPreloader(true, bt)

    filterParams.limit = countPerPage
    api_getList(filterParams, res => {
        // по кнопке Показать
        cars = prepareCars(res.items)
        let totalPages = Math.ceil(res.totalCount / countPerPage)
        setTimeout(() => fill(cars, res.items, totalPages))
        showPreloader(false, bt)
        carCountText(res.totalCount)
        if (ishandEvent || filterParams['brandId']) {
            gotoShowCars()
            let fw = document.querySelector('.filter-white')
            let vn = document.querySelector('#vitrina_name')
            document.getElementById('brands_dynamic').style.display = 'none'
            if (fw) fw.style.marginBottom = 0
            if (vn) vn.innerHTML = 'Автомобили ' + (filterParams.brand || '')
                + ' ' + (filterParams.model || '')
                + ' ' + (filterParams.city ? `(город ${filterParams.city})` : ``)
        }
    })
}

function gotoShowCars() {
    setTimeout(() => document.querySelector('#filter_cars').removeEventListener('mouseleave', go), 3000)
    document.querySelector('#filter_cars').addEventListener('mouseleave', go)
    function go() {
        document.getElementById('set_filter').scrollIntoView({behavior: 'smooth', block: 'start'}); // прокрутка
        document.querySelector('#filter_cars').removeEventListener('mouseleave', go)
    }
}
