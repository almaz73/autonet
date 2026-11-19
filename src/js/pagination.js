import {brandSlug, getUrlParam} from "@/js/global-func.js"
/** Очень тонко настроенная работает Пагинации*/

function getLink0() {
    let link = location.href
    if (location.href.includes('&page')) link = location.href.slice(0, location.href.lastIndexOf('&page'))
    return link + (link.includes('?') ? '' : '?')
}

function getLink(pages) {
    return pages ? `/cars/${pages}` : '/cars'
}
function getLinkSPA(pages) {
    // пока бренд не выбран, фильтровая посадочная остаётся в адресе
    const landing = window.ssr_landing
    if (landing && landing.path && !window.ssr_brandSlug) {
        return landing.path + (pages ? '/' + pages : '')
    }
    const brand = window.ssr_brandSlug ? '/' + window.ssr_brandSlug : ''
    const model = window.ssr_modelSlug ? '/' + window.ssr_modelSlug : ''
    const city = window.ssr_citySlug ? '/' + window.ssr_citySlug : ''
    return `/cars${pages ? '/' + pages : ''}${brand}${model}${city}`
}

export function preparePager0 (pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    let currentPage = +getUrlParam('page') || 1;
    const delta = currentPage > 3 ? currentPage - 3 : 0

    if (delta > 0) pagerText += `<a href=${getLink0()}> 1</a> <span> | </span> ... <span> | </span>`

    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${getLink0()}&page=${N}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${getLink0()}&page=${pages}>${pages}</a> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${getLink0()}&page=${pages} class=${pages !== currentPage ? "" : "active"}>${pages}</a> `
    pager.innerHTML = pagerText
}

export function preparePager(pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    // на фильтровой посадочной номер страницы — последний сегмент пути: /cars/<city>/<body>/<N>
    const landing = window.ssr_landing
    const landingBase = landing && landing.path ? landing.path : ''
    let currentPage
    let link
    if (landingBase) {
        currentPage = (Number(landing.page) || 0) + 1
        link = (n) => landingBase + (n ? '/' + n : '')
    } else {
        const second = location.pathname.split('/')[2] || ''
        const isPageSegment = /^\d+$/.test(second)
        currentPage = isPageSegment ? +second + 1 : 1
        // после бренда в пути могут идти модель и город — сохраняем их в ссылках пейджера
        const rest = location.pathname.split('/').slice(isPageSegment ? 3 : 2).filter(Boolean)
        const tail = rest.map(part => '/' + part).join('') + location.search
        link = (n) => getLink(n) + tail
    }

    const delta = currentPage > 3 ? currentPage - 3 : 0

    if (delta > 0) pagerText += `<a href=${link(0)}> 1</a> <span> | </span> ... <span> | </span>`
    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${link(N - 1)}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${link(pages - 1)}>${pages}</a> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${link(pages - 1)} class=${pages !== currentPage ? "" : "active"}>${pages}</a>`
    pager.innerHTML = pagerText
}


export function preparePagerSPA(params, pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    let currentPage = 0

    const delta = currentPage > 3 ? currentPage - 3 : 0
    let tail = ''

    const brandSlugValue = params.brand ? brandSlug(params.brand) : ''
    // сменили бренд — модель и город прошлой посадочной больше не действуют
    if (brandSlugValue && window.ssr_brandSearch && brandSlugValue !== brandSlug(window.ssr_brandSearch)) {
        window.ssr_modelSlug = ''
        window.ssr_modelName = ''
        window.ssr_citySlug = ''
        window.ssr_cityName = ''
    }
    window.ssr_brandSlug = brandSlugValue
    // на фильтровой посадочной часть фильтров уже выражена путём — в query их не дублируем.
    // если пользователь изменил эти фильтры, посадочная больше не описывает выборку:
    // весь набор уходит в query, а пейджер — на /cars
    let landing = window.ssr_landing && !window.ssr_brandSlug ? window.ssr_landing : null
    if (landing) {
        const same = (a, b) => String(a || '') === String(b || '')
        const matches = same(params.city, landing.city)
            && same(params.bodyType, landing.bodyType)
            && same(params.gearboxType, landing.gearboxType)
            && same(params.priceFrom, landing.priceFrom)
            && same(params.priceTo, landing.priceTo)
        if (!matches) {
            window.ssr_landing = null
            window.ssr_citySlug = ''
            window.ssr_cityName = ''
            landing = null
        }
    }
    const inPath = (key) => Boolean(landing && landing[key])
    if (params.modelId) tail += '&modelId=' + params.modelId
    if (params.offset) tail += '&offset=' + params.offset
    if (params.priceOrder !== null && params.priceOrder !== undefined) tail += '&priceOrder=' + params.priceOrder
    if (params.city && params.city !== 'Все' && params.city !== window.ssr_cityName) tail += '&city=' + params.city
    if (params.gearboxType && !inPath('gearboxType')) tail += '&gearboxType=' + params.gearboxType
    if (params.engineType) tail += '&engineType=' + params.engineType
    if (params.driveType) tail += '&driveType=' + params.driveType
    if (params.wheelType) tail += '&wheelType=' + params.wheelType
    if (params.bodyType && !inPath('bodyType')) tail += '&bodyType=' + params.bodyType
    if (params.color) tail += '&color=' + params.color
    if (params.yearReleasedFrom) tail += '&yearReleasedFrom=' + params.yearReleasedFrom
    if (params.yearReleasedTo) tail += '&yearReleasedTo=' + params.yearReleasedTo
    if (params.priceTo && !inPath('priceTo')) tail += '&priceTo=' + params.priceTo
    if (params.priceFrom && !inPath('priceFrom')) tail += '&priceFrom=' + params.priceFrom
    if (params.milleageFrom) tail += '&milleageFrom=' + params.milleageFrom
    if (params.milleageTo) tail += '&milleageTo=' + params.milleageTo
    if (params.engineCapacity) tail += '&engineCapacity=' + params.engineCapacity


    if (!tail.includes('?')) {
        let place = tail.indexOf('&')
        if (place > -1) tail = tail.slice(0, place) + "?" + tail.slice(place + 1)
    }

    if (delta > 0 && pages > 5) pagerText += `<a href=${getLinkSPA(0) + tail}> 1</a> <span> | </span> ... <span> | </span>`
    else if (delta > 0 && pages < 5) pagerText += `<a href=${getLinkSPA(0) + tail}> 1</a> <span> | </span>`
    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${getLinkSPA(N - 1) + tail}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${getLinkSPA(pages - 1) + tail}>${pages}</a> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${getLinkSPA(pages - 1) + tail} class=${pages !== currentPage ? "" : "active"}>${pages}</a>`
    setTimeout(() => document.querySelector('#pager').innerHTML = '' + pagerText, 2000)
}




