// создает визитки, встраивает рекламные и информационные баннеры
import {preparePager} from '@/js/pagination.js'


let cards = document.querySelector('cards');

function createNode(item, N) {
    let txt
    if (!isNaN(N)) {
        txt = `<div class='cart' id='galery_${N}' >
              <div class='cart__slide'>
                  <span class='dark-fon'></span>
                  <div class="fast_show">Быстрый просмотр</div>
                  <img class='photo' alt=''>
                  <div class='cart__blank'>${item.address}</div>
                  <div class='field'>
                      <div class='red'></div>
                  </div>
              </div>
              <a class="big_link" 
                 href="javascript:openCar('${item.href}','${item.photos[0]}')" 
                 data-href="${item.href}"
                 title="Перейти">
                  <div class='name'>
                      <br>                      
                      ${item.name}, ${item.yearReleased}
                  </div>
                  <img src="/svg/icon_spines.svg" alt="Шипованная резина" class="tyres_icon " 
                       style="display: ${item.type === 'tyres' ? 'block' : 'none'}; 
                       opacity: ${item.type === 'tyres' && item.winter ? 1 : 0}">
                       
                  <div class='cart__price'>
                      <div class='total'>${item.price ? item.price + ' ₽' : ''} </div>
                      <div class='cart__of'>${item.fromPerMonth ? 'ot ' + item.fromPerMonth + '  ₽/мес' : ''}</div>
                  </div>
                  <div class='cart__info'>
                      ${item.info}
                  </div>
                  <div class='cart__box--bottom' style="display: ${item.type === 'tyres' ? 'none' : ''}">
                      <a href="javascript:addCompare('${item.id}')" ondblclick="dblCompare('${item.id}')">
                          <img id="compareId_${item.id}" src='/icons/compare_cars.svg' alt=''>
                      </a>
                      <a href="javascript:addFavorite('${item.id}')">
                          <img id="favoriteId_${item.id}" src='/icons/penta.svg' alt=''>
                      </a>
                  </div>
              </a>
          </div>`;
    }

    /* вкрапливаем другими баннерами*/

    if (N === 'abdul') {
        txt = `<abdul></abdul>`
        setTimeout(window.reloadAbdul)
    }
    if (N === 'swiper_buy') {
        txt = `<div style="min-width: 200px; max-width: 730px"><swiper_buy></swiper_buy></div>`
        setTimeout(window.reloadLittleSwiper)
    }

    cards.innerHTML += txt;
}

function preloadImages(urls) {
    // фсе фотки заранее подгружаю
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

function galeryEvents(id, images) {
    const gallery = document.querySelector('#galery_' + id + ' .cart__slide');
    const fastShowBt = gallery.querySelector('.fast_show')
    const dark_fon = gallery.querySelector('.dark-fon')

    window.current_slide = null;

    if (!gallery) return false;
    const photo = gallery.querySelector('.photo');
    const red = gallery.querySelector('.cart .red');
    let offset1, offset2, i = 0;
    let z_zona = 0 // чтобы менять фотку, если только меняем зону

    photo.src = images[0];
    photo.onerror = () => photo.src = '/photo/tmp_auto.webp '

    preloadImages([images[1], images[2], images[3], images[4]]);
    function mouseMoved(e) {
        let z = parseInt(e.layerX * 99.9 / pieceWidth / 20);
        if (z_zona !== z) {
            getWidth()
            photo.style.opacity = 0; // мигаем
            setTimeout(() => {
                photo.style.opacity = 1;
                photo.src = '/photo/tmp_auto.webp '
                photo.src = images[z];// Новая картинка
            }, 73);
            photo.onerror = () => photo.src = '/photo/tmp_auto.webp '
            z_zona = z
        }
        red.style.left = z * 20 + '%';
    }

    photo.addEventListener('mousemove', mouseMoved);
    gallery.addEventListener('touchstart', e => offset1 = e.targetTouches[0].pageX - gallery.offsetLeft);
    gallery.addEventListener('touchmove', e => offset2 = e.targetTouches[0].pageX - gallery.offsetLeft);
    gallery.addEventListener('touchend', () => {
        if (offset1 > offset2) i++;
        else i--;
        if (i > 4) i = 4;
        if (i < 0) i = 0;
        photo.src = images[i];
        red.style.left = i * 20 + '%';
    });
    gallery.addEventListener('click', () => {
        window.openCar(document.querySelector('#galery_' + id + ' .big_link').dataset.href, images && images[0])
    });

    fastShowBt.addEventListener('click', e => {
        e.stopPropagation()
        if (document.body.clientWidth < 500) return false;
        gallery.classList.toggle('watch');
        window.current_slide = gallery;
        getWidth();
    })

    dark_fon.addEventListener('click', e => {
        e.stopPropagation()
        gallery.classList.remove('watch')
    })
}

window.openCar = function (href, linkPhoto) {
    localStorage.setItem('CAR_SMALLL_PHOTO', linkPhoto)
    setTimeout(() => location.href = href)
}

export function fill(cars, currentCars, totalPages) {
    cards = document.querySelector('cards');

    window.compareCars = currentCars
    window.favorCars = cars
    if (!cards) return false
    cards.innerHTML = ''

    cars.forEach((el, i) => {
        createNode(el, i + 1)
        if (i === 2 && (location.pathname !== '/personal/favorite-cars/')) createNode(null, 'abdul')
        if (i === 0 && (location.pathname === '/cars/' || location.pathname === '/autosite/cars/')) createNode(null, 'swiper_buy')
    }); // прикручиваем html

    if (!cars.length) {
        cards.innerHTML += `<abdul></abdul>`
        setTimeout(window.reloadAbdul)
    }


    if (location.pathname !== '/' && location.pathname !== '/personal/favorite-cars/') {
        cards.innerHTML += `<div class="pager">Страницы: <span id="pager"></span></div>`
    }

    preparePager(totalPages)
    initChosen()
    initFavotite()

    cars.forEach((el, i) => galeryEvents(i + 1, el.photos)); // прикрепляем события
    type_views = document.querySelector('.type_views');
    type_views && type_views.addEventListener('click', (e) => {
        setTypeView(e)
        localStorage.setItem('TYPE_VIEW', e.srcElement.classList.value.slice(0, 4))
    })
}

let type_views;
let pieceWidth = 285;
let getWidth = () => {
    let cart__slide = document.querySelector('cards .cart__slide')
    if (cart__slide) pieceWidth = cart__slide.clientWidth;

    if (window.current_slide) pieceWidth = window.current_slide.clientWidth;
};
// document.addEventListener('DOMContentLoaded', () => setTimeout(getWidth, 500));
window.addEventListener('resize', () => window.current_slide && window.current_slide.classList.remove('watch'));

setTimeout(() => {
    let TYPE_VIEW = localStorage.getItem('TYPE_VIEW') || 'dot4'
    let dot = document.querySelector('.' + TYPE_VIEW)
    dot && dot.classList.add('active')
    dot && setTypeView({srcElement: {classList: {value: TYPE_VIEW}}})
})


function setTypeView(e) {
    // выбор варианта отображения галерии
    if (!e || !cards) return false
    cards.classList = [];
    getWidth();
    if (e.srcElement.classList.value.includes('dot8')) cards.classList.add('cards', 'dot8');
    if (e.srcElement.classList.value.includes('dot4')) cards.classList.add('cards', 'dot4');
    if (e.srcElement.classList.value.includes('dot1')) cards.classList.add('cards', 'dot1');

    if (e.srcElement.classList.add) {
        for (let childrenKey in type_views.children) type_views.children[childrenKey].classList && type_views.children[childrenKey].classList.remove('active');
        e.srcElement.classList.add('active');
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.current_slide) {
        window.current_slide.classList.remove('watch')
        getWidth();
    }
});

