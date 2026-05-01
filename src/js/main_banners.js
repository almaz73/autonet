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
    res.forEach((el, ind) => {
        if (ind === 0) {
            banners += `
    <div class='swiper-slide'>
      <a href='/promo/${el.code}/'>
        <img class='img_lg' src='/pub_promo/${el.photo585}' alt='${el.name}' fetchpriority='high'>
        <img class='img_md' src='/pub_promo/${el.photo1200}' alt='${el.name}' fetchpriority='high'>
        <img class='img_sm' src='/pub_promo/${el.photo278}' alt='${el.name}' fetchpriority='high'>
      </a>
    </div>`} else {
            banners += `
    <div class='swiper-slide'>
      <a href='/promo/${el.code}/'>
        <img class='img_lg' src='/pub_promo/${el.photo585}' alt='${el.name}' loading='lazy'>
        <img class='img_md' src='/pub_promo/${el.photo1200}' alt='${el.name}' loading='lazy'>
        <img class='img_sm' src='/pub_promo/${el.photo278}' alt='${el.name}' loading='lazy'>
      </a>
    </div>`}
    })


    fillSwiper(banners)
    setTimeout(initSwipper)
})
