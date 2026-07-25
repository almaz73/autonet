import {getBrandLat} from "@/js/global-func.js"
/** Очень тонко настроенная работает Пагинации*/
let currentPage = 1

function getLink(pages) {
    return `/cars/${pages}${window.ssr_brandSearch?'/'+getBrandLat(window.ssr_brandSearch):''}`
}

export function preparePager(pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    currentPage = +location.href.split('/')[4]+1 || 0;

    const delta = currentPage > 3 ? currentPage - 3 : 0

    if (delta > 0) pagerText += `<a href=${getLink(0)}> 1</a> <span> | </span> ... <span> | </span>`
    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${getLink(N-1)}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${getLink(pages-1)}>${pages}</a><span> | </span> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${getLink(0)} class=${pages !== currentPage ? "" : "active"}>${pages}</a><span> | </span> `
    if (pages && pages > 5 && pages !== currentPage && window.screen.width > 500) pagerText += `<a href="javascript:nextPage('${currentPage}')"> След.</a>`
    pager.innerHTML = pagerText
}

window.nextPage = (currentPage) => {
    if(currentPage) location.href = location.origin+getLink(currentPage)
}


