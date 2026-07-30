// обработка location.pathname === '/cars/
import {api_getList} from "@/js/apibase.js"
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

const countPerPage = 20
const combValuesForAfterUpdate = []
let ishandEvent
let extention = false //  Есть ли выбранные элементы в параметрах адреса
let Cache_serv = localStorage.getItem('CACHE_SERV')
Cache_serv = JSON.parse(Cache_serv)

/* Заполнение фильтр дюнными по адресной строке FROM SERVER */
function FillFilterFromAddressBar(filterParams) {
    // заполнение фильтра по параметрам адресной строки
    let brand = getUrlParam('brand')
    if (!brand) brand = getBrandRus(location.pathname.split('/')[3])
    if (brand) {
        filterParams['brand'] = brand
        setCombName('Марка', brand)
    }

    const modelId = getUrlParam('modelId')
    let model = getUrlParam('model')
    if (!model) model = location.pathname.split('/')[4]
    if (modelId) {
        filterParams['modelId'] = modelId
        if (model && model != 'undefined') setCombName('Модель', model)
        else window.globalCurrentModel_Id = modelId
    }

    const city = getUrlParam('city')
    if (city) {
        filterParams.city = city
        setCombName('Город', city)
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

    let offset = +location.pathname.split('/')[2] * 20 || 0

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
    ishandEvent = ishandEvent_
    if (!ishandEvent) FillFilterFromAddressBar(filterParams)

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
        setTimeout(() => fill(cars, res.items, totalPages))
        showPreloader(false, bt)
        carCountText(res.totalCount)
        if (ishandEvent || filterParams['brand']) {
            let fw = document.querySelector('.filter-white')
            let vn = document.querySelector('#vitrina_name')
            document.getElementById('brands_dynamic').style.display = 'none'
            if (fw) fw.style.marginBottom = 0
            if (vn) vn.innerHTML = 'Автомобили ' + (filterParams.brand || '')
                + ' ' + (filterParams.model || '')
                + ' ' + (filterParams.city ? `(город ${filterParams.city})` : ``)
        }
    })
    return totalCount
}

