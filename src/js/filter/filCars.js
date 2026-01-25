// обработка location.pathname === '/cars/
import {api_getList} from "@/js/API-base/apibase.js"
import {declOfNum, getUrlParam, prepareCars, eventBus} from '@/js/global-func.js'
import {setExtention} from "@/js/filter/filter-ctrl-filling.js"

const countPerPage = 20
const combValuesForAfterUpdate = []
let ishandEvent
let extention = false //  Есть ли выбранные элементы в параметрах аждреса

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

    const gearboxType = getUrlParam('gearboxType')
    if (gearboxType) {
        extention = true
        filterParams.gearboxType = gearboxType
        setCombName('Тип КПП', gearboxType)
    }

    const engineType = getUrlParam('engineType')
    if (engineType) {
        extention = true
        filterParams.engineType = engineType
        setCombName('Тип двигателя', engineType)
    }

    const bodyType = getUrlParam('bodyType')
    if (bodyType) {
        extention = true
        filterParams.bodyType = bodyType
        setCombName('Тип кузова', bodyType)
    }

    const wheelType = getUrlParam('wheelType')
    if (wheelType) {
        extention = true
        filterParams.wheelType = wheelType
        setCombName('Руль', wheelType)
    }

    const driveType = getUrlParam('driveType')
    if (driveType) {
        extention = true
        filterParams.driveType = driveType
        setCombName('Тип привода', driveType)
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


    const priceFrom = getUrlParam('priceFrom')
    if (priceFrom) {
        extention = true
        filterParams.priceFrom= priceFrom
        setInputName('priceFrom', priceFrom)
    }

    if(extention) {
        // Раширенный фильтр
        let advanced = document.querySelector('.frame-filter__controls-advanced')
        let filterAdvanced = document.querySelector('.filter-fields')
        advanced.classList.add("active")
        filterAdvanced.classList.add("active")
    }

    filterParams['offset'] = getUrlParam('page')
    setExtention(extention)
}

function setCombName(name, value) {
    if (ishandEvent) return false
    combValuesForAfterUpdate.push({name, value})
}

eventBus.on('dataUpdated', handleData);
function handleData() {
    combValuesForAfterUpdate.forEach(el=>{
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


    api_getList(countPerPage, filterParams).then(res => {
        // по кнопке Показать
        cars = prepareCars(res.items)
        let totalPages = Math.ceil(res.totalCount/countPerPage)
        fill(cars, res.items, totalPages)

        document.querySelector('#set_filter span.number').innerHTML = res.totalCount
            + ' ' +declOfNum(res.totalCount, ['предложение', 'предложения', 'предложений'])
        if (ishandEvent || filterParams['brandId']) {
            document.getElementById('set_filter').scrollIntoView({behavior: 'smooth', block: 'start'}); // прокрутка
            document.getElementById('brands_dynamic').style.display = 'none'
            document.querySelector('.filter-white').style.marginBottom = 0
            document.querySelector('#vitrina_name').innerHTML = 'Автомобили ' + (filterParams.brand || '')  +' '+ (filterParams.model || '')
        }
    })
}
