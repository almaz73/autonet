
/** Очень тонко  настроенная работает Пагинации*/
let currentPage = 1
export function preparePager(pages) {
    const pager = document.querySelector('#pager')
    if(!pager) return false
    const urlParams = new URLSearchParams(window.location.search);
    let brand = urlParams.get('brand')
    let pagerText = ''

    currentPage = +urlParams.get('page') || 1;
    if (brand) brand = `?brand=${brand.slice(0, -1)}/`
    if (brand && brand.includes('/')) {
        brand = brand.split('/')[0]
        currentPage = +location.search.split('/')[1].split('=')[1]
        currentPage = currentPage||1
    }
    const  delta = currentPage>3?currentPage-3:0
    brand = brand ? brand + '/?' : ''

    if (delta > 0) pagerText += `<a href="/cars/${brand}"> 1</a> <span> | </span> ... <span> | </span>`

    for (let N = 1 + delta; N < pages; N++) {
        if (N - delta > 5) break
        pagerText += `<a ${currentPage === N ? 'class="active"' : ''} href="/cars/${brand}?page=${N}">${N}</a><span> | </span>`
    }
    if (pages > 5) pagerText += ` ... <span> | </span>  <a href="${brand}?page=${pages}">${pages}</a><span> | </span> `
    if (pages !== currentPage && window.screen.width>500) pagerText += `<a href="javascript:nextPage('${brand}')"> След.</a>`
    pager.innerHTML = pagerText
}

window.nextPage = (brand)=>{
    if (window.location.search.includes('/')) location.href = `/cars/${brand}page=` + (currentPage + 1)
    else location.href = `/cars/${brand}?page=` + (currentPage + 1)
}


