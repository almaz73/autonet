// обработка location.pathname === '/cars/
import {api_getList} from "@/js/API-base/apibase.js"
import {prepareCars} from '@/js/global-func.js'

// import {items} from "@/js/filter-ctrl-filling.js";

function FillOldFilter(filterParams) {
    const urlParams = new URLSearchParams(window.location.search);
    const brandId = urlParams.get('brandId')
    const brand = urlParams.get('brand')
    if (brandId) {
        filterParams['brandId'] = brandId
        filterParams['brand'] = brand

        // items['Марка'].value = brand
    }

    const modelId = urlParams.get('modelId')
    if (modelId) filterParams['modelId'] = modelId
}


export function run(cars, ishandEvent, filterParams, fill) {
    FillOldFilter(filterParams)

    console.log('###### filterParams', filterParams)


    api_getList(12, filterParams).then(res => {
        console.log('555 res=', res.items)

        // по кнопке Показать
        cars = prepareCars(res.items)
        fill(cars, res.items, res.totalCount)

        document.querySelector('#set_filter span.number').innerHTML = res.totalCount
        if (ishandEvent || filterParams['brandId']) {
            document.getElementById('set_filter').scrollIntoView({behavior: 'smooth', block: 'start'}); // прокрутка
            document.getElementById('brands_dynamic').style.display = 'none'
            document.querySelector('.filter-white').style.marginBottom = 0
            document.querySelector('#vitrina_name').innerHTML = 'Автомобили ' + filterParams.brand
        }
    })
}