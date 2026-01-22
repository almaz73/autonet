// обработка location.pathname === '/cars/
import {api_getList} from "@/js/API-base/apibase.js"
import {declOfNum, getUrlParam, prepareCars} from '@/js/global-func.js'

const countPerPage = 20

function FillFilterFromAddressBar(filterParams) {
    const brandId = getUrlParam('brandId')
    const brand = getUrlParam('brand')
    const city = getUrlParam('city')
    const gearboxType = getUrlParam('gearboxType')
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
    if (city) {
        filterParams.city = city
        setCombName('Город', city)
    }
    if (gearboxType) filterParams.gearboxType = gearboxType

    const yearReleasedFrom = getUrlParam('yearReleasedFrom')
    if (yearReleasedFrom) {
        filterParams.yearReleasedFrom = yearReleasedFrom
        setInputName('yearReleasedFrom', yearReleasedFrom)
    }

    filterParams['offset'] = getUrlParam('page')
}

function setCombName(name, value) {
    setTimeout(()=>{
        console.log(name)
        let comb = document.querySelector(`[data-placeholder="${name}"]`)
        if (comb) {
            comb.querySelector('.big-comb__placeholder').innerText = value
            comb.querySelector('.big-comb__placeholder').classList.add('bold')
        }
    }, 2000)
}

function setInputName(name, value) {
    setTimeout(()=>{
        console.log(name)
        let inp = document.querySelector(`[onchange="input_chamged('${name}', this.value)"]`)
        if (inp) {
            inp.value = value
            inp.classList.add('bold')
        }
    }, 2000)
}

export function run(cars, ishandEvent, filterParams, fill) {
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
            document.querySelector('#vitrina_name').innerHTML = 'Автомобили ' + (filterParams.brand || '')
        }
    })
}
