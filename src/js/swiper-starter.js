let swiper
let fotos = document.querySelector('.alone .fotos')
let fotos_black = document.querySelector('.fotos_black')
let big = document.querySelector('.big')
let swiperSection = document.querySelector('.swiper.mySwiper')


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
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
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fotos) {
            fotos.style.height = '76px';
            fotos_black.style.display = 'grid'
            setTimeout(() => swiperSection.classList.remove('rotated'))
            toBig()
        }
        if (e.key === 'ArrowRight') swiper.slideNext()
        if (e.key === 'ArrowLeft') swiper.slidePrev()

        console.log('swiper = ', swiper)
    });

    console.log('swiper = ', swiper)
})

function showSlide(val) {
    swiper.slideTo(val);
}

function showAll() {
    fotos.style.height = 'inherit';
    fotos_black.style.display = 'none'
}

function toBig(val) {
    if (val) big.classList.add('big_viewer')
    else {
        setTimeout(() => swiperSection.classList.remove('rotated'))
        big.classList.remove('big_viewer')
    }

    if (window.innerWidth > 1000) setTimeout(() => swiperSection.classList.remove('rotated'))
    else swiperSection.classList.add('rotated')
}