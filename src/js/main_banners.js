import {api_get_mainBanners} from "@/js/apibase.js";
import {initSwipper} from "@/js/swiper-starter.js";

function fillSwiper(val) {
    const main_swiper = document.querySelector('#main_swiper')
    main_swiper.innerHTML = `
<section class='mainPage swiper mySwiper'>
  <div class='swiper-wrapper'>
    ${val}
  </div>
  <div class='swiper-button-next'></div>
  <div class='swiper-button-prev'></div>
  <div class='swiper-pagination'></div>
</section>`}


api_get_mainBanners(res => {
    let banners = ''
    res && res.forEach((el, ind) => {
        let styles = el.styles
        let description =  el.description && el.description.split('\n').map(word => `<div>${word}</div>`).join('')
        let conditions = `<div class="inscription" style="${styles || ''}">${description||''}</div>`
        if (ind === 0) {
            banners += `
    <div class='swiper-slide'>${conditions}
      <a href='/promo/${el.code}/'> 
        <img class='img_lg' src='/pub_promo/${el.photo585}?v=1' alt='${el.name}' fetchpriority='high'>
        <img class='img_md' src='/pub_promo/${el.photo1200}?v=1' alt='${el.name}' fetchpriority='high'>
        <img class='img_sm' src='/pub_promo/${el.photo278}?v=1' alt='${el.name}' fetchpriority='high'>
      </a>
    </div>`} else {
            banners += `
    <div class='swiper-slide'>${conditions}
      <a href='/promo/${el.code}/'>
        <img class='img_lg' src='/pub_promo/${el.photo585}?v=1' alt='${el.name}' loading='lazy'>
        <img class='img_md' src='/pub_promo/${el.photo1200}?v=1' alt='${el.name}' loading='lazy'>
        <img class='img_sm' src='/pub_promo/${el.photo278}?v=1' alt='${el.name}' loading='lazy'>
      </a>
    </div>`}
    })


    fillSwiper(banners)
    setTimeout(initSwipper)
})

//// только для главной страницы
document.addEventListener('DOMContentLoaded', () => {
    let triggerFirstPage = localStorage.getItem('triggerFirstPage')
    triggerFirstPage = triggerFirstPage === 'true'

    let div = document.querySelector('#vitrina_name')
    let divTrigger = document.querySelector('#vitrina_name_choose')

    if (divTrigger) divTrigger.style.display = 'block'
    if (triggerFirstPage) {
        div.innerHTML = 'Свежие поступления авто с пробегом'
        divTrigger.querySelector('span').innerHTML = 'Спец.предложения'
        window.getLatestCars(triggerFirstPage)
    } else {
        div.innerHTML = 'Специальные предложения по цене'
        divTrigger.querySelector('span').innerHTML = 'Свежие поступления'
        window.getLatestCars(triggerFirstPage)
        document.querySelector('.page__link.page').style.display = 'none'
    }

    divTrigger && divTrigger.addEventListener('click', () => {
        triggerFirstPage = !triggerFirstPage
        localStorage.setItem('triggerFirstPage', JSON.stringify(triggerFirstPage))
    })

    document.querySelector('.pager').style.display = 'none'
})