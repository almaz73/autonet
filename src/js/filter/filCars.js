// обработка location.pathname === '/cars/
import {api_getList} from "@/js/apibase.js"
import {hydrate} from "@/js/filter/cards.js"
import {
    getUrlParam,
    prepareCars,
    eventBus,
    setPriceOrder,
    carCountText,
    acceptWithoutPhoto,
    getBrandRus
} from '@/js/global-func.js'
import {setExtention} from "@/js/filter/filter-ctrl-filling.js"
import {showFilterEmpty, hasFilterCity} from "@/js/filter/emptyState.js"

const countPerPage = 20
const combValuesForAfterUpdate = []
let ishandEvent
let extention = false //  Есть ли выбранные элементы в параметрах адреса
let Cache_serv = localStorage.getItem('CACHE_SERV')
Cache_serv = JSON.parse(Cache_serv)

// после сброса фильтра значения из адресной строки не должны снова попадать в комбобоксы
export function clearAddressBarCombValues() {
    combValuesForAfterUpdate.length = 0
}

/* Заполнение фильтр дюнными по адресной строке FROM SERVER */
function FillFilterFromAddressBar(filterParams) {
    // заполнение фильтра по параметрам адресной строки
    // на фильтровой посадочной сегменты пути — это город/кузов/цена, а не бренд и модель
    const landing = window.ssr_landing
    let brand = getUrlParam('brand')
    // сервер уже нормализовал бренд из пути: «vaz-lada» → «ВАЗ (LADA)»
    if (!brand && !landing) brand = window.ssr_brandDbName || getBrandRus(location.pathname.split('/')[3])
    if (brand) {
        filterParams['brand'] = brand
        setCombName('Марка', brand)
    }

    const modelId = getUrlParam('modelId')
    let model = getUrlParam('model')
    if (!model && !landing) model = window.ssr_modelName || location.pathname.split('/')[4] || location.pathname.split('/')[3]
    // посадочная модели фильтрует не по одному разделу, а по всему кластеру («Rio» + «Rio X-Line»)
    if (Array.isArray(window.ssr_models) && window.ssr_models.length) filterParams.models = window.ssr_models
    if (modelId) {
        filterParams['modelId'] = modelId
        if (model && model != 'undefined') setCombName('Модель', model)
        else window.globalCurrentModel_Id = modelId
    } else if (model && model != 'undefined') {
        filterParams.model = model
        setCombName('Модель', model)
    }

    const cityFromAddress = getUrlParam('city') || window.ssr_cityName || (landing && landing.city) || ''
    // город из шапки подставляем, только если страница сама его не задаёт
    const city = cityFromAddress || filterParams.city || ''
    // SSR отрисовал витрину без города — её придётся перезапросить.
    // посадочная сама задаёт набор фильтров: город из шапки в него не подмешиваем
    if (!cityFromAddress && city && !landing) window.__cityFilterApplied = true
    if (city) {
        filterParams.city = city
        setCombName('Город', city)
    }

    // фильтры, которые на посадочной пришли из пути, а не из query
    if (landing) {
        if (landing.bodyType) {
            extention = true
            filterParams.bodyType = landing.bodyType
            setCombName('Тип кузова', landing.bodyType)
        }
        if (landing.gearboxType) {
            extention = true
            filterParams.gearboxType = landing.gearboxType
            setCombName('Тип КПП', landing.gearboxType)
        }
        if (landing.priceFrom) {
            extention = true
            filterParams.priceFrom = landing.priceFrom
            setInputName('priceFrom', landing.priceFrom)
        }
        if (landing.priceTo) {
            extention = true
            filterParams.priceTo = landing.priceTo
            setInputName('priceTo', landing.priceTo)
        }
    }

    const color = getUrlParam('color')
    if (color) {
        filterParams.color = color
        setCombName('Цвет', color)
    }

    const gearboxType = getUrlParam('gearboxType')
    if (gearboxType) {
        extention = true
        filterParams.gearboxType = gearboxType

        let item = Cache_serv['/api/getGearboxTypes']
        let name = item && item.data.find(el => el.name === gearboxType)
        setCombName('Тип КПП', (name ? name.title : gearboxType))
    }

    const engineType = getUrlParam('engineType')
    if (engineType) {
        extention = true
        filterParams.engineType = engineType

        let item = Cache_serv['/api/getEngineTypes']
        let name = item && item.data.find(el => el.title === engineType)
        setCombName('Тип двигателя', (name ? name.title : engineType))
    }

    const bodyType = getUrlParam('bodyType')
    if (bodyType) {
        extention = true
        filterParams.bodyType = bodyType
        let item = Cache_serv['/api/getBodyTypes']
        let name = item && item.data.find(el => el.title === bodyType)
        setCombName('Тип кузова', (name ? name.title : bodyType))
    }

    const wheelType = getUrlParam('wheelType')
    if (wheelType) {
        extention = true
        filterParams.wheelType = wheelType

        let item = Cache_serv['/api/getWheelTypes']
        let name = item && item.data.find(el => el.title === wheelType)
        setCombName('Руль', (name ? name.title : wheelType))
    }

    const driveType = getUrlParam('driveType')
    if (driveType) {
        extention = true
        filterParams.driveType = driveType
        let item = Cache_serv['/api/getDriveTypes']
        let name = item && item.data.find(el => el.title === driveType)
        setCombName('Тип привода', (name ? name.title : wheelType))
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
        // Расширенный фильтр
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

    // страница посадочной лежит последним сегментом: /cars/<city>/<фильтры>/<N>
    const landingPage = landing ? Number(landing.page) || 0 : null
    let offset = landingPage !== null
        ? landingPage * 20
        : (+location.pathname.split('/')[2] || 0) * 20

    if (offset < 0) offset = 0
    filterParams['offset'] = offset
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
            if (el.name === 'Марка' && window.globalCurrentBrandName) el.value = window.globalCurrentBrandName
            if (el.name === 'Модель' && window.globalCurrentModel !== undefined) el.value = window.globalCurrentModel

            // ниже строка удаляет выбранное значение комбобокса
            comb.querySelector('.big-comb__placeholder').innerText = el.value
            comb.querySelector('.big-comb__placeholder').classList.add('bold')

            if (window.clearAllFilter) { // очиситка фильтра
                comb.querySelector('.big-comb__placeholder').innerText = el.name
                comb.querySelector('.big-comb__placeholder').classList.remove('bold')
            }
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

        if (window.clearAllFilter) {// очиситка фильтра
            inp.value = ''
            inp.classList.remove('bold')
        }
    }
}


export async function fillCars(cars, ishandEvent_, filterParams, fill) {
    // 'reset' — сброс фильтра: адресную строку не читаем, но и как обычный пересчёт не оформляем
    const isReset = ishandEvent_ === 'reset'
    ishandEvent = isReset ? undefined : ishandEvent_
    if (!ishandEvent && !isReset) FillFilterFromAddressBar(filterParams)

    // Первая загрузка /cars: разметка уже отрисована сервером, не перерисовываем её.
    // Исключение — город из шапки: серверная витрина без него, нужен свежий запрос.
    if (!ishandEvent && window.__carsSSR && !window.__carsHydrated && !window.__cityFilterApplied) {
        window.__carsHydrated = true
        const ssrItems = acceptWithoutPhoto(window.__carsSSR.items || [])
        const ssrCars = prepareCars(ssrItems)
        const totalPages = Math.ceil((window.__carsSSR.totalCount || 0) / countPerPage)

        hydrate(ssrCars, ssrItems, totalPages)
        carCountText(window.__carsSSR.totalCount || 0)

        if (filterParams['brand']) {
            const fw = document.querySelector('.filter-white')
            const brands = document.getElementById('brands_dynamic')
            if (brands) brands.style.display = 'none'
            if (fw) fw.style.marginBottom = 0
            // H1 сервер уже отрисовал под посадочную (модель, город) — не затираем
        }
        return window.__carsSSR.totalCount || 0
    }

    let totalCount = 0
    let bt = document.querySelector('#set_filter')
    showPreloader(true, bt)

    filterParams.limit = countPerPage

    if (window.clearAllFilter) filterParams = {limit: 20}
    if (filterParams.offset && ishandEvent) filterParams.offset = 0

    await api_getList(filterParams, res => {
        res.totalCount = res.totalCount || 0
        totalCount = res.totalCount
        res.items = acceptWithoutPhoto(res.items)
        // по кнопке Показать
        cars = prepareCars(res.items)
        let totalPages = Math.ceil(res.totalCount / countPerPage)
        setTimeout(() => {
            fill(cars, res.items, totalPages)
            showFilterEmpty(
                document.querySelector('cards'),
                res.totalCount === 0 && hasFilterCity(filterParams.city),
                true
            )
        })
        showPreloader(false, bt)
        carCountText(res.totalCount)
        if (ishandEvent || filterParams['brand'] || filterParams.city) {
            let fw = document.querySelector('.filter-white')
            let vn = document.querySelector('#vitrina_name')
            let brands = document.getElementById('brands_dynamic')
            if (brands) brands.style.display = 'none'
            if (fw) fw.style.marginBottom = 0
            if ((filterParams.brand || filterParams.model) && vn && !window.ssr_modelSlug) {
                vn.innerHTML = 'Автомобили ' + (filterParams.brand || '')
                    + ' ' + (filterParams.model || '')
                    + ' ' + (filterParams.city ? `(город ${filterParams.city})` : ``)
            }
        }
    })
    return totalCount
}

