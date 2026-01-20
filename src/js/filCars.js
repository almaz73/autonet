// обработка location.pathname === '/cars/
import {api_getList} from "@/js/API-base/apibase.js"
import {declOfNum, prepareCars} from '@/js/global-func.js'

// import {items} from "@/js/filter-ctrl-filling.js";

function FillOldFilter(filterParams) {
    const urlParams = new URLSearchParams(window.location.search);
    const brandId = urlParams.get('brandId')
    const brand = urlParams.get('brand')
    if (brandId) {
        filterParams['brandId'] = brandId
        filterParams['brand'] = brand
        setTimeout(()=>{
            let comb = document.querySelector('[data-placeholder="Марка"]')
            if (comb) {
                comb.querySelector('.big-comb__placeholder').innerText = brand
                comb.querySelector('.big-comb__placeholder').classList.add('bold')
            }
        }, 2000)
    }

    const modelId = urlParams.get('modelId')
    const model = urlParams.get('model')
    if (modelId) {
        filterParams['modelId'] = modelId
        filterParams['model'] = model

        setTimeout(()=> {
            let comb = document.querySelector('[data-placeholder="Модель"]')
            if (comb) {
                comb.querySelector('.big-comb__placeholder').innerText = model
                comb.querySelector('.big-comb__placeholder').classList.add('bold')
            }
        }, 2000)
    }
}


export function run(cars, ishandEvent, filterParams, fill) {
    FillOldFilter(filterParams)

    console.log('###### filterParams', filterParams)


    api_getList(12, filterParams).then(res => {
        // по кнопке Показать
        cars = prepareCars(res.items)
        fill(cars, res.items, res.totalCount)

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
