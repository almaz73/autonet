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
    brandSlug,
    getUrlParam
} from '@/js/global-func.js'
import {fillCars} from '@/js/filter/filCars.js'
import {getModelList, setExtention} from '@/js/filter/filter-ctrl-filling.js'
import {loadCities, resolveSelectedCity} from '@/js/cities.js'
import {showFilterEmpty, hasFilterCity} from '@/js/filter/emptyState.js'
import {tyresForList} from "@/js/global-constants.js";
import {preparePagerSPA} from '@/js/pagination.js'

export function filter_changed(items, name) {
    if (name === 'Марка') {
        let brand = globalValues.brandsIds.find(el => el.name === items[name].value)

        window.globalCurrentBrandName = brand.name
        window.globalCurrentModel = ''
        // прошлая посадочная модели/города больше не действует
        window.ssr_modelSlug = ''
        window.ssr_modelName = ''
        window.ssr_citySlug = ''
        window.ssr_cityName = ''
        if (brand) {
            filterParams['brand'] = brand.name
            filterParams['modelId'] = ''
            filterParams['model'] = ''
            filterParams['models'] = []
        }
        getModelList(items[name].value)

        // При смене марки обновляем хлебные крошки
        let pathElem = document.querySelector('#path')
        if (pathElem) pathElem.innerHTML = brand.name
    }
    if (name === 'Модель') {
        let model = globalValues.modelsIds.find(el => el.name === items[name].value)
        if (model) {
            filterParams['modelId'] = model.id
            filterParams['model'] = model.name
            // выбрана конкретная модель — кластер прошлой посадочной больше не нужен
            filterParams['models'] = []
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
let priceOrderState = null // null — без сортировки, false — по возрастанию, true — по убыванию

/** Запрос сервера и отображения витрины **/
function getVitrina(ishandEvent) {
    let cars_link = document.querySelector('.cars_link')

    if (location.pathname === '/') {
        if (cars_link) cars_link.style.display = 'block'
        localStorage.removeItem('TYPE_VIEW')
        // сбрасываем и cookie: SSR /cars рисует сетку по ней, после главной должен быть dot8
        document.cookie = 'TYPE_VIEW=; path=/; max-age=0'
    } else {
        if (cars_link) cars_link.style.display = 'none'
        if (!localStorage.getItem('TYPE_VIEW')) localStorage.setItem('TYPE_VIEW', 'dot8')
    }

// в зависимости от страницы, запрашиваем нужные данные
    let cars
    if (location.pathname === '/') {
        if (!ishandEvent) setExtention(false)

        let bt = document.querySelector('#set_filter')
        showPreloader(true, bt)

        filterParams.limit = 20
        api_getList(filterParams, res => {
            showPreloader(false, bt)
            declOfNum(res.totalCount, ['предложение', 'предложений', 'предложений'])
            carCountText(res.totalCount)
            showFilterEmpty(
                document.querySelector('.filter__wrapper'),
                res.totalCount === 0 && hasFilterCity(filterParams.city)
            )
        })

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

// выбранный пользователем город подставляем в фильтр, если он не задан адресом
async function getSelectedCity() {
    try {
        const cities = await loadCities()
        const city = resolveSelectedCity(cities)
        return city && city !== 'Россия' ? city : ''
    } catch (error) {
        console.error(error)
        return ''
    }
}

async function bootFilter() {
    const city = await getSelectedCity()
    const cityInAddress = getUrlParam('city') || window.ssr_cityName
    if (city && !cityInAddress) filterParams.city = city
    getVitrina()
}

function setCityComb(city) {
    const placeholder = document.querySelector('.comb[data-placeholder="Город"] .big-comb__placeholder')
    if (!placeholder) return
    placeholder.innerText = city || 'Город'
    placeholder.classList.toggle('bold', Boolean(city))
}

// после каждой перерисовки комбобоксов показываем город, который реально в фильтре
eventBus.on('dataUpdated', () => setCityComb(filterParams.city))

document.addEventListener('selectedCityChanged', (event) => {
    const city = event.detail && event.detail.city
    // посадочные, которые сами задают город, не переопределяем
    const cityInAddress = getUrlParam('city') || window.ssr_cityName
    if (!cityInAddress) {
        filterParams.city = city && city !== 'Россия' ? city : ''
        setCityComb(filterParams.city)
        getVitrina('ishandEvent')
    }
    // витрина главной тоже показывает авто выбранного города
    if (location.pathname === '/') {
        window.getLatestCars(localStorage.getItem('triggerFirstPage') === 'true')
    }
})

// первичное заполнение комбобоксов и счётчика при загрузке страницы:
// без этого фильтр не раскрывается до нажатия «Расширенный фильтр»
bootFilter()


window.goToCars = function () {
    const params = new URLSearchParams()
    // модель отправляем id в query: сервер сам решит, тянуть ли её в путь посадочной.
    // в путь модель попадает только если id не нашёлся в разделах
    let modelId = filterParams.modelId
    if (!modelId && filterParams.model) {
        const model = globalValues.modelsIds.find(el => el.name === filterParams.model)
        if (model) modelId = model.id
    }
    if (modelId) params.set('modelId', modelId)
    // «Все» — отсутствие фильтра по городу, а не город
    if (filterParams.city && filterParams.city !== 'Все') params.set('city', filterParams.city)
    if (filterParams.gearboxType) params.set('gearboxType', filterParams.gearboxType)
    if (filterParams.engineType) params.set('engineType', filterParams.engineType)
    if (filterParams.driveType) params.set('driveType', filterParams.driveType)
    if (filterParams.wheelType) params.set('wheelType', filterParams.wheelType)
    if (filterParams.bodyType) params.set('bodyType', filterParams.bodyType)
    if (filterParams.color) params.set('color', filterParams.color)
    if (filterParams.yearReleasedFrom) params.set('yearReleasedFrom', filterParams.yearReleasedFrom)
    if (filterParams.yearReleasedTo) params.set('yearReleasedTo', filterParams.yearReleasedTo)
    if (filterParams.priceTo) params.set('priceTo', filterParams.priceTo)
    if (filterParams.priceFrom) params.set('priceFrom', filterParams.priceFrom)
    if (filterParams.milleageFrom) params.set('milleageFrom', filterParams.milleageFrom)
    if (filterParams.milleageTo) params.set('milleageTo', filterParams.milleageTo)
    if (filterParams.engineCapacity) params.set('engineCapacity', filterParams.engineCapacity)
    if (filterParams.priceOrder !== null && filterParams.priceOrder !== undefined) params.set('priceOrder', filterParams.priceOrder)

    const brand = filterParams.brand || filterParams['Марка']
    let path = brand ? '/' + brandSlug(brand) : ''
    if (path && filterParams.model && !modelId) path += '/' + brandSlug(filterParams.model)
    const query = params.toString()
    location.href = '/cars' + path + (query ? '?' + query : '') + '#vitrina_name'
}
window.clearFilter = function () {
    window.clearAllFilter = true
    filterParams = {limit: 20, offset: 0}
    priceOrderState = null
    setPriceOrder(null)
    getVitrina()
    eventBus.emit('dataUpdated', {});
    const vitrinaName = document.querySelector('#vitrina_name')
    const path = document.querySelector('#path')
    if (vitrinaName) vitrinaName.innerHTML = 'Все автомобили'
    if (path) path.innerHTML = ``

    setTimeout(() => {
        if (window.totalPages) preparePagerSPA(filterParams, Math.ceil(window.totalPages / 20))
        window.clearAllFilter = false
    }, 3000)
}

let totalPages = 0
let memoryMoreCars= []
let memoryMoreRes= []
window.goToMore = async function () { // добавление еще авто в список, без перезагрузки страницы
    let startPage = parseInt(location.search.split('=')[1])
    if (isNaN(startPage) || startPage < 0) startPage = 0
    if (startPage < totalPages) {
        startPage++
        const city = await getSelectedCity()
        // без перезагрузки добавляем внизу
        api_getLatestCarArrivials(startPage, city, res => {
            if (!res || !Array.isArray(res.items)) return // база ещё не обновлена, сервер вернул null
            totalPages = res.totalPages
            res = cleanCarsWithoutPhoto(res.items)
            let cars = prepareCars(res)

            memoryMoreCars.push(...cars)
            memoryMoreRes.push(...res)

            fill(memoryMoreCars, memoryMoreRes)
        })
    }
}

window.getLatestCars = async function (triggerFirstPage, more) {
    let startPage = parseInt(location.search.split('=')[1])

    if (isNaN(startPage) || startPage < 0) startPage = 0

    const city = await getSelectedCity()

    if (triggerFirstPage) {
        api_getLatestCarArrivials(startPage, city, res => {
            if (!res || !Array.isArray(res.items)) return // база ещё не обновлена, сервер вернул null
            totalPages = res.totalPages
            res = cleanCarsWithoutPhoto(res.items)
            let cars = prepareCars(res)
            memoryMoreCars = cars
            memoryMoreRes = res
            fill(cars, res)
        })
    } else {
        api_getSpecials(city, res => { // возвращаем Спец предложения по цене
            if (!Array.isArray(res)) return // база ещё не обновлена, сервер вернул null
            res = cleanCarsWithoutPhoto(res)
            let cars = prepareCars(res)
            fill(cars, res)
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // страница могла открыться с сортировкой в адресе — продолжаем цикл с неё
    const priceOrderFromUrl = getUrlParam('priceOrder')
    if (priceOrderFromUrl !== null && priceOrderFromUrl !== '') {
        priceOrderState = priceOrderFromUrl === 'true'
    }

    const price_order = document.querySelector('.coin');
    price_order && price_order.addEventListener('click', () => {
        if (priceOrderState === false) priceOrderState = true
        else if (priceOrderState === null) priceOrderState = false
        else priceOrderState = null
        setPriceOrder(priceOrderState)
        filter_changed_text('priceOrder', priceOrderState)
    });
})
