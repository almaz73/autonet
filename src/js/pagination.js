import {getUrlParam} from "@/js/global-func.js"
/** Очень тонко  настроенная работает Пагинации*/
let currentPage = 1

function getLink() {
    let link = location.href
    if (location.href.includes('&page')) link = location.href.slice(0, location.href.lastIndexOf('&page'))
    return link + (link.includes('?') ? '' : '?')
}

export function preparePager(pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    let pagerText = ''

    currentPage = +getUrlParam('page') || 1;
    const delta = currentPage > 3 ? currentPage - 3 : 0

    if (delta > 0) pagerText += `<a href=${getLink()}> 1</a> <span> | </span> ... <span> | </span>`

    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${getLink()}&page=${N}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${getLink()}&page=${pages}>${pages}</a><span> | </span> `
    else if (pages === '1') pagerText += `<a class="active">1</a>`
    else pagerText += ` <a href=${getLink()}&page=${pages} class=${pages !== currentPage ? "" : "active"}>${pages}</a><span> | </span> `
    if (pages && pages !== currentPage && window.screen.width > 500) pagerText += `<a href="javascript:nextPage('${currentPage}')"> След.</a>`
    pager.innerHTML = pagerText
}

window.nextPage = (currentPage) => {
    let newPage = (`&page=` + (+currentPage + 1))
    if (location.href.includes('&page=')) location.href = getLink() + newPage
    else location.href = location.href + newPage
}


