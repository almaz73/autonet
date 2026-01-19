/** Очень тонко  настроенная работает Пагинации*/
let currentPage = 1

export function preparePager(pages) {
    const pager = document.querySelector('#pager')
    if (!pager) return false
    const urlParams = new URLSearchParams(window.location.search);
    let brand = urlParams.get('brand')
    let pagerText = ''

    currentPage = +urlParams.get('page') || 1;
    const delta = currentPage > 3 ? currentPage - 3 : 0
    brand = brand ? brand + '/?' : ''

    if (delta > 0) pagerText += `<a href=${location.href.slice(0, location.href.lastIndexOf('&page'))}> 1</a> <span> | </span> ... <span> | </span>`

    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href=${location.href.slice(0, location.href.lastIndexOf('&page'))}&page=${N}>${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href=${location.href.slice(0, location.href.lastIndexOf('&page'))}&page=${pages}>${pages}</a><span> | </span> `
    if (pages !== currentPage && window.screen.width > 500) pagerText += `<a href="javascript:nextPage('${currentPage}')"> След.</a>`
    pager.innerHTML = pagerText
}

window.nextPage = (currentPage) => {
    let newPage = (`&page=` + (+currentPage + 1))
    if (location.href.includes('&page=')) location.href = location.href.slice(0, location.href.lastIndexOf('&page')) + newPage
    else location.href = location.href + newPage
}


