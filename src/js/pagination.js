import {getBrandLat} from "@/js/global-func.js"
/** Очень тонко настроенная работает Пагинации*/

function getLink(pages) {
    return `/cars/${pages}${window.ssr_brandSearch ? '/' + getBrandLat(window.ssr_brandSearch) : ''}`
}

export function preparePager(pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    let currentPage = +location.pathname.split('/')[2]+1 || 0

    const delta = currentPage > 3 ? currentPage - 3 : 0
    let tail =  location.search

    if (delta > 0 && pages > 5) pagerText += `<a href=${getLink(0) + tail}> 1</a> <span> | </span> ... <span> | </span>`
    else if(delta > 0 && pages < 5) pagerText += `<a href=${getLink(0) + tail}> 1</a> <span> | </span>`
    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${getLink(N - 1) + tail}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${getLink(pages-1) + tail}>${pages}</a><span> | </span> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${getLink(pages) + tail} class=${pages !== currentPage ? "" : "active"}>${pages}</a><span> | </span> `
    // if (pages && pages > 5 && pages !== currentPage && window.screen.width > 500) pagerText += `<a href="javascript:nextPage('${currentPage}')"> След.</a>`
    pager.innerHTML = pagerText
}

export function preparePagerSPA(params, pages) {
    console.log('% SPA %%%%%%%%%%%params = ',params)

    
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    let currentPage = 0

    const delta = currentPage > 3 ? currentPage - 3 : 0
    let tail = ''

    if (params.brand) window.ssr_brandSearch = params.brand
    if (params.modelId) tail += '&modelId=' + params.modelId
    if (params.offset) tail += '&offset=' + params.offset
    if (params.priceOrder !== null && params.priceOrder !== undefined) tail += '&priceOrder=' + params.priceOrder
    if (params.city) tail += '&city=' + params.city
    if (params.gearboxType) tail += '&gearboxType=' + params.gearboxType
    if (params.engineType) tail += '&engineType=' + params.engineType
    if (params.driveType) tail += '&driveType=' + params.driveType
    if (params.wheelType) tail += '&wheelType=' + params.wheelType
    if (params.bodyType) tail += '&bodyType=' + params.bodyType
    if (params.color) tail += '&color=' + params.color

    if (params.yearReleasedFrom) tail += '&yearReleasedFrom=' + params.yearReleasedFrom
    if (params.yearReleasedTo) tail += '&yearReleasedTo=' + params.yearReleasedTo
    if (params.priceTo) tail += '&priceTo=' + params.priceTo
    if (params.priceFrom) tail += '&priceFrom=' + params.priceFrom
    if (params.milleageFrom) tail += '&milleageFrom=' + params.milleageFrom
    if (params.milleageTo) tail += '&milleageTo=' + params.milleageTo
    if (params.engineCapacity) tail += '&engineCapacity=' + params.engineCapacity



    console.log('111 tail = ',tail)

    if (delta > 0 && pages > 5) pagerText += `<a href=${getLink(0) + tail}> 1</a> <span> | </span> ... <span> | </span>`
    else if(delta > 0 && pages < 5) pagerText += `<a href=${getLink(0) + tail}> 1</a> <span> | </span>`
    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${getLink(N - 1) + tail}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${getLink(pages-1) + tail}>${pages}</a><span> | </span> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${getLink(pages-1) + tail} class=${pages !== currentPage ? "" : "active"}>${pages}</a><span> | </span> `
    if (pages && pages > 5 && pages !== currentPage && window.screen.width > 500) pagerText += `<a href="javascript:nextPage('${currentPage}')"> След.</a>`
    
    console.log('pagerText = ',pagerText)

    console.log('pager = ',pager)

   setTimeout(()=> document.querySelector('#pager').innerHTML = ''+pagerText, 2000)
    
    
    console.log('pager.innerHTML = ',pager.innerHTML)
}

window.nextPage = (currentPage, tail) => {
    if (currentPage) location.href = location.origin + getLink(currentPage) + tail
}


