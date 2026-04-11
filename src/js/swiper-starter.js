let swiper
let fotos = document.querySelector('.alone .fotos')
let fotos_black = document.querySelector('.fotos_black')
let big = document.querySelector('.big')
let swiperSection = document.querySelector('.swiper.mySwiper')
let isCarPage = location.pathname.includes('car.html')
const isMainPage = location.pathname === '/'


document.addEventListener('DOMContentLoaded', () => {
    if (isMainPage) initSwipper()

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fotos) {
            fotos.style.height = '76px';
            if (fotos_black) fotos_black.style.display = 'grid'
            setTimeout(() => swiperSection.classList.remove('rotated'))
            window.toBig()
        }
        if (e.key === 'ArrowRight') swiper.slideNext()
        if (e.key === 'ArrowLeft') swiper.slidePrev()
    });

})

export function initSwipper() {
    if (swiper) return false
    let params = {
        spaceBetween: 30,
        loop: true,
        // utoplay: isCarPage ? "" : {delay: 5000, disableOnInteraction: false},
        utoplay: {delay: 5000, disableOnInteraction: false},
        pauseOnMouseEnter: true, // Пауза при наведении мыши
        waitForTransition: true, // Ждать завершения анимации
        disableOnInteraction: true, // Продолжить автоплей после свайпа
        autoHeight: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        on: {
            init() {
                if (!isCarPage) this.autoplay.start()
            }
        }
    }


    function ewcursiveWaitswiper() {
        swiper = new Swiper('.mySwiper', params)
        if (!swiper) setTimeout(ewcursiveWaitswiper, 730)
        else window.showSlide(0)
    }

    ewcursiveWaitswiper()
}


window.showSlide = val => swiper.slideTo(val + 1)

window.showMore = function () {
    if (fotos.style.height === 'inherit') fotos.style.height = '73px'
    else fotos.style.height = 'inherit';
    if (fotos_black) fotos_black.style.display = 'none'
}

window.toBig = function (val) {
    if (val) big.classList.add('big_viewer')
    else {
        big.classList.remove('big_viewer')
    }
}