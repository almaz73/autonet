let swiper
let fotos = document.querySelector('.alone .fotos')
let fotos_black = document.querySelector('.fotos_black')
let big = document.querySelector('.big')
let swiperSection = document.querySelector('.swiper.mySwiper')
let isCarPage = location.pathname.includes('car.html')
const isMainPage  = location.pathname === '/'


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
        utoplay: isCarPage ? "" : {delay: 5000, disableOnInteraction: false},
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
                let isUsed = false
                if (!isCarPage) this.autoplay.start()
                // Если один раз нажали на прокрутку - автопрокрутку выключаем
                this.el.addEventListener('click', () => {
                    this.autoplay.stop();
                    isUsed = true
                })
                this.el.addEventListener('mouseenter', () => this.autoplay.stop())
                this.el.addEventListener('mouseleave', () => !isUsed && !isCarPage && this.autoplay.start())
            }
        }
    }


    setTimeout(() => {
        swiper = new Swiper('.mySwiper', params)
        if (!swiper) setTimeout(() => {
            swiper = new Swiper('.mySwiper', params)
            if (!swiper) setTimeout(() => {
                swiper = new Swiper('.mySwiper', params)
            }, 730)
        }, 730)
    })

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
        setTimeout(() => swiperSection.classList.remove('rotated'))
    }

    if (window.innerWidth > 1000) setTimeout(() => swiperSection.classList.remove('rotated'))
    else {
        console.log('uuuuu')
        // swiperSection.classList.add('rotated')
    }
}