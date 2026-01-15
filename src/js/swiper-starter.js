let swiper
let fotos = document.querySelector('.alone .fotos')
let fotos_black = document.querySelector('.fotos_black')
let big = document.querySelector('.big')
let swiperSection = document.querySelector('.swiper.mySwiper')


document.addEventListener('DOMContentLoaded', () => {
    if (!location.pathname.includes('car.html')) setTimeout(()=>initSwipper(), 3000)
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
    swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        loop: true,
        autoHeight: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
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
                // Если один раз нажали на прокрутку - автопрокрутку выключаем
                this.el.addEventListener('click', () => {
                    this.autoplay.stop();
                    isUsed = true
                })
                this.el.addEventListener('mouseenter', () => this.autoplay.stop())
                this.el.addEventListener('mouseleave', () => !isUsed && this.autoplay.start())
            }
        }
    })
}

window.showSlide = function (val) {
    swiper.slideTo(val);
}

window.showMore = function (){
    fotos.style.height = 'inherit';
    if (fotos_black) fotos_black.style.display = 'none'
}

window.toBig = function (val) {
    if (val) big.classList.add('big_viewer')
    else {
        big.classList.remove('big_viewer')
        setTimeout(() => swiperSection.classList.remove('rotated'))
    }

    if (window.innerWidth > 1000) setTimeout(() => swiperSection.classList.remove('rotated'))
    else swiperSection.classList.add('rotated')
}