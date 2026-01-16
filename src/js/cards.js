// создает визитки, встраивает рекламные и информационные баннеры
let cards
document.addEventListener('DOMContentLoaded', () => {
    cards = document.querySelector('cards');
})


function createNode(item, N) {
    let txt
    if (!isNaN(N)) {
        txt = `<div class='cart' id='galery_${N}' >
              <div class='cart__slide'>                    
                  <img class='photo' alt=''>
                  <div class='cart__blank'>${item.address}</div>
                  <div class='field'>
                      <div class='red'></div>
                  </div>
                  <span class='dark-fon'/>                    
              </div>
              <a class="big_link" href='${item.href}' title="перейти">
                  <div class='name'>
                      <br>                      
                      ${item.name}
                  </div>
                  <img src="/svg/icon_spines.svg" alt="Шипованная рещина" class="tyres_icon " 
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

function galeryEvents(id, images) {


    const gallery = document.querySelector('#galery_' + id + ' .cart__slide');
    window.current_slide = null;

    if (!gallery) return false;
    const photo = gallery.querySelector('.photo');
    const red = gallery.querySelector('.cart .red');
    let offset1, offset2, i = 0;
    let z_zona = 0 // чтобы менять фотку, если только меняем зону
    photo.src = images[i];
    photo.addEventListener('mousemove', (e) => {
        let z = parseInt(e.layerX * 100 / pieceWidth / 20);
        if (z_zona !== z) {
            photo.src = images[z]; // меняем, если только сменится зона
            z_zona = z
        }
        red.style.left = z * 20 + '%';
    });
    gallery.addEventListener('mouseleave', () => {
        photo.src = images[0];
        red.style.left = '0%';
    });
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
        if (document.body.clientWidth < 500) return false;
        gallery.classList.toggle('watch');
        window.current_slide = gallery;
        getWidth();
    });
}

export function fill(cars, currentCars) {
    window.compareCars = currentCars
    window.favorCars = cars
    cards.innerHTML = ''

    cars.forEach((el, i) => {
        createNode(el, i + 1)
        if (i === 2 && (location.pathname !== '/personal/favorite-cars/')) createNode(null, 'abdul')
        if (i === 0 && (location.pathname === '/cars/' || location.pathname === '/autosite/cars/')) createNode(null, 'swiper_buy')
    }); // прикручиваем html
    cars.forEach((el, i) => galeryEvents(i + 1, el.photos)); // прикрепляем события

    if (!cards.innerHTML && location.pathname.includes('favorite')) cards.innerHTML = '<div class="nodata" style="width: 200%;text-align:center">HЕТ ИЗБРАННЫХ АВТОМОБИЛЕЙ </div>'
}

let type_views = document.querySelector('.type_views');
let pieceWidth= 285;
let getWidth = () => {
    let cart__slide = document.querySelector('cards .cart__slide')
    if (cart__slide) pieceWidth = cart__slide.clientWidth;

    if (window.current_slide) pieceWidth = window.current_slide.clientWidth;
};
document.addEventListener('DOMContentLoaded', () => setTimeout(getWidth, 500));
window.addEventListener('resize', () => window.current_slide && window.current_slide.classList.remove('watch'));

setTimeout(() => {
    let TYPE_VIEW = localStorage.getItem('TYPE_VIEW') || 'dot4'
    let dot = document.querySelector('.' + TYPE_VIEW)
    dot && dot.classList.add('active')
    dot && setTypeView({srcElement: {classList: {value: TYPE_VIEW}}})
})

type_views && type_views.addEventListener('click', (e) => {
    setTypeView(e)
    localStorage.setItem('TYPE_VIEW', e.srcElement.classList.value.slice(0, 4))
})

function setTypeView(e) {
    // выбор варианта отображения галерии
    if (!e || !cards) return false
    cards.classList = [];
    getWidth();
    if (e.srcElement.classList.value === 'dot8') cards.classList.add('cards', 'dot8');
    if (e.srcElement.classList.value === 'dot4') cards.classList.add('cards', 'dot4');
    if (e.srcElement.classList.value === 'dot1') cards.classList.add('cards', 'dot1');

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

let price_order = document.querySelector('.type_views.coin');

if (price_order) price_order.addEventListener('click', () => {
    let more = price_order.querySelector('img').style.rotate !== '180deg';
    price_order.querySelector('img').style.rotate = more ? '180deg' : '0deg';
    console.log('запрос нужен more = ', more);
    // запрос нужен
});

