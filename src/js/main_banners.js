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
        if (ind === 0) {
            banners += `
    <div class='swiper-slide'>
      <a href='/promo/${el.code}'> 
        <img class='img_lg' src='/pub_promo/${el.photo585}?v=1' alt='${el.name}' fetchpriority='high'>
        <img class='img_md' src='/pub_promo/${el.photo1200}?v=1' alt='${el.name}' fetchpriority='high'>
        <img class='img_sm' src='/pub_promo/${el.photo278}?v=1' alt='${el.name}' fetchpriority='high'>
      </a>
    </div>`} else {
            banners += `
    <div class='swiper-slide'>
      <a href='/promo/${el.code}'>
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
const VITRINA_TITLES = {
    specials: 'Специальные предложения по цене',
    latest: 'Свежие поступления авто с пробегом'
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = Array.from(document.querySelectorAll('.vitrina_tab'))
    if (!tabs.length) return

    let isLatest = localStorage.getItem('triggerFirstPage') === 'true'

    renderTab(isLatest)
    window.getLatestCars(isLatest)

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectTab(tab.dataset.tab === 'latest'))

        // клавиатурная навигация, ожидаемая от tablist
        tab.addEventListener('keydown', (event) => {
            const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
            let nextIndex = null
            if (step) nextIndex = (index + step + tabs.length) % tabs.length
            if (event.key === 'Home') nextIndex = 0
            if (event.key === 'End') nextIndex = tabs.length - 1
            if (nextIndex === null) return

            event.preventDefault()
            tabs[nextIndex].focus()
            selectTab(tabs[nextIndex].dataset.tab === 'latest')
        })
    })

    const pager = document.querySelector('.pager')
    if (pager) pager.style.display = 'none'

    function selectTab(latest) {
        if (latest === isLatest) return
        isLatest = latest
        // витрина запоминается между заходами и используется при смене города
        localStorage.setItem('triggerFirstPage', JSON.stringify(latest))
        renderTab(latest)
        window.getLatestCars(latest)
    }

    function renderTab(latest) {
        const activeTab = latest ? 'latest' : 'specials'

        tabs.forEach(tab => {
            const active = tab.dataset.tab === activeTab
            tab.classList.toggle('active', active)
            tab.setAttribute('aria-selected', active ? 'true' : 'false')
            tab.tabIndex = active ? 0 : -1
        })

        const title = document.querySelector('#vitrina_name')
        if (title) title.textContent = VITRINA_TITLES[activeTab]

        const cards = document.querySelector('#main_vitrina_cards')
        if (cards) cards.setAttribute('aria-labelledby', 'vitrina_tab_' + activeTab)

        // «Показать еще» листает только свежие поступления
        const more = document.querySelector('.page__link.page')
        if (more) more.style.display = latest ? '' : 'none'
    }
})