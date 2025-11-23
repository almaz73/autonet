// создает визитки, встраивает рекламные и информационные баннеры
let cards = document.querySelector('cards');

let VITE_PROD_URL = import.meta.env.VITE_PROD_URL;

function createNode(item, N) {
  let txt
  if (!isNaN(N)) {
   txt = `<div class='cart' id='galery_${N}'>
                <div class='cart__slide'>                    
                    <img class='photo' alt=''>
                    <div class='cart__blank'>${item.address}</div>
                    <div class='field'>
                        <div class='red'></div>
                    </div>
                    <span class='dark-fon'/>                    
                </div>
                <div class='name'>
                    <br>
                    <a href='${item.href}'> ${item.name}</a>
                </div>
                <div class='cart__price'>
                    <div class='total'>${item.price?item.price+'₽':''} </div>
                    <div class='cart__of'>${item.fromPerMonth?'ot '+item.fromPerMonth+'₽/мес':'' } </div>
                </div>
                <div class='cart__info'>
                    ${item.info}
                </div>
                <div class='cart__box--bottom'>
                <a href='#'>
                    <img class='compare_img' src='${VITE_PROD_URL}/icons/compare_cars.svg' alt=''>
                </a>
                <a href='#'>
                    <img class='penta_img1' src='${VITE_PROD_URL}/icons/penta.svg' alt=''>
                </a>
            </div>
            </div>`;
  }

    /* вкрапливаем другими баннерами*/
    if (N === 'abdul') txt = `<abdul></abdul>`
    if (N === 'swiper_buy') txt = `<div style="min-width: 200px; max-width: 730px"><swiper_buy></swiper_buy></div>`

    cards.innerHTML += txt;
}

function galeryEvents(id, images) {
  const gallery = document.querySelector('#galery_' + id + ' .cart__slide');
  window.current_slide = null;

  if (!gallery) return false;
  const photo = gallery.querySelector('.photo');
  const red = gallery.querySelector('.cart .red');
  let offset1, offset2, i = 0;
  photo.src = VITE_PROD_URL + images[i];
  photo.addEventListener('mousemove', (e) => {
    let i = parseInt(e.layerX * 100 / pieceWidth / 16.5 - 0.1);
    photo.src = VITE_PROD_URL + images[i];
    red.style.left = i * 16.5 + '%';
  });
  gallery.addEventListener('mouseleave', () => {
    photo.src = VITE_PROD_URL + images[0];
    red.style.left = '0%';
  });
  gallery.addEventListener('touchstart', e => offset1 = e.targetTouches[0].pageX - gallery.offsetLeft);
  gallery.addEventListener('touchmove', e => offset2 = e.targetTouches[0].pageX - gallery.offsetLeft);
  gallery.addEventListener('touchend', () => {
    if (offset1 > offset2) i++;
    else i--;
    if (i > 5) i = 5;
    if (i < 0) i = 0;
    photo.src = VITE_PROD_URL + images[i];
    red.style.left = i * 16.5 + '%';
  });
  gallery.addEventListener('click', () => {
    if (document.body.clientWidth < 500) return false;
    gallery.classList.toggle('watch');
    window.current_slide = gallery;
    getWidth();
  });
}

export function fill(cars) {
  cars.forEach((el, i) => {
    createNode(el, i + 1)
    if (i === 2) createNode(null, 'abdul')
    if (i === 0 && (location.pathname==='/cars/' || location.pathname==='/autosite/cars/')) createNode(null, 'swiper_buy')
  }); // прикручиваем html
  cars.forEach((el, i) => galeryEvents(i + 1, el.photos)); // прикрепляем события
}

let type_views = document.querySelector('.type_views');
let pieceWidth;
let getWidth = () => {
  pieceWidth = document.querySelector('cards .cart__slide').clientWidth;
  if (current_slide) pieceWidth = current_slide.clientWidth;
};
document.addEventListener('DOMContentLoaded', () => getWidth());
window.addEventListener('resize', () => current_slide && current_slide.classList.remove('watch'));

setTimeout(()=>{
  let TYPE_VIEW = localStorage.getItem('TYPE_VIEW') || 'dot4'
  let dot = document.querySelector('.'+TYPE_VIEW)
  dot.classList.add('active')
  setTypeView({srcElement:{classList:{value:TYPE_VIEW}}})
})

type_views && type_views.addEventListener('click', (e) => {
  setTypeView(e)
  localStorage.setItem('TYPE_VIEW',e.srcElement.classList.value.slice(0,4))
})
function setTypeView(e) {
  // выбор варианта отображения галерии
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
  if (e.key === 'Escape' && current_slide) {
    current_slide.classList.remove('watch')
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

