/* случайно вытаскивает 4 банера для раздела промо-акции */

import {api_get_activeBanners} from "@/js/apibase.js";
import {initSwipper} from "@/js/swiper-starter.js";

let links = ''
let promos = []

function set4rondomBaner() {
    for (let i = 0; i < 4; i++) {
        const num = Math.floor(Math.random() * promos.length);
        const el = promos[num];
        links += (el)
        promos.splice(num, 1);
    }

    let div = document.querySelector('.promo-photos')
    if (div) div.innerHTML = links
}

function showBigBannerval(el) {
    let bigBanner = ` <a href='/promo/${el.code}/'>
            <img src='/pub_promo/${el.id + '_h_m'}.webp' alt='${el.name}' class='big'>
            <img src='/pub_promo/${el.id + '_v_b'}.webp' alt='${el.name}' class='small'>
        </a>`
    if (document.querySelector('.container.promo-banner')) {
        document.querySelector('.container.promo-banner').innerHTML = bigBanner
    }
}

let littleBanners = ` <section class="swiper mySwiper buy_swiper" style="z-index: 1">
    <div class="swiper-wrapper">`
let isAllBanners = isNaN(parseInt(location.pathname.split('/promo/')[1]))
//
api_get_activeBanners(res => {
    let listPromo = []
    let count = 0
    if (res && isAllBanners) {
        showBigBannerval(res.splice(0, 1)[0])
    }
    res.forEach((el, ind) => {
        let orientattion = '' // ver/hor
        count++
        if (count < 5) orientattion = 'ver'
        if (count === 5 || count === 6) orientattion = 'hor'
        if (count > 5) count = 0
        if (orientattion === 'ver') {
            listPromo += `<a href='/promo/${el.code}/' class='ver'> <img style="max-width: 275px;"
src='/pub_promo/${el.id + '_v_l'}.webp' loading='lazy' alt='${el.name}'></a>`
        } else {
            listPromo += `<a href='/promo/${el.code}/' class='hor'> <img
src='/pub_promo/${el.id + '_h_l'}.webp' loading='lazy' alt='${el.name}'></a>`
        }
        promos.push(`<a href='/promo/${el.code}/' class='ver'> <img style="max-width: 275px;"
src='/pub_promo/${el.id + '_v_l'}.webp' loading='lazy' alt='${el.name}'></a>`)
        littleBanners += ` <div class="swiper-slide">
            <a href='/promo/${el.code}/'> 
            <img class="buy_lg" src="/pub_promo/${el.id + '_h_l'}.webp" alt="${el.name}">
            <img class="buy_mg" src="/pub_promo/${el.id + '_v_l'}.webp" alt="${el.name}">
            </a>
        </div>`
    })

    littleBanners += `</div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
</section>`

    if (isAllBanners && document.querySelector('.container.promo-photos')) {
        document.querySelector('.container.promo-photos').innerHTML = listPromo
    } else {
        set4rondomBaner()
    }
})

/** для страницк cars*/
window.reloadLittleSwiper = function (){
    let swiper_buy = document.querySelector('swiper_buy')
    if(!swiper_buy) return false
    if(swiper_buy)swiper_buy.innerHTML = littleBanners
    initSwipper()
}