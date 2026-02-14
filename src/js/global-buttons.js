import { fillCities } from '@/js/searchCities.js';

let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav.menu');
let buttonBurger = document.querySelector('.button__burger');

let cities = document.querySelector('.main-nav.cities');
let cityButton = document.querySelector('.footer-city-button');
let cityB_contacts = document.querySelector('#city-contacts')

let cityClose = document.querySelector('.modal-place__close');
let mySwiper = document.querySelector('.mySwiper')
let isOpened;
/* мелкаькая выезжающая панель для разных форм */
let rightpanel = document.querySelector('.main-nav.rightpanel');
let closerFon = document.querySelector('#closer-fon')
let closerButton = document.querySelector('.modal-closer.form')
/***/

if (mySwiper) mySwiper.style.zIndex = 0

burger_menu && burger_menu.addEventListener('click', () => {
  if (isOpened) {
    isOpened = false;
    cities.style.transform = 'translateX(150vw)';
    return false;
  }
  isOpened = panel.style.transform !== 'none';

  panel.style.transform = isOpened ? 'none' : 'translateX(150vw)';
  if (isOpened) {
    buttonBurger.classList.add('close');
    isOpened = false;
  } else buttonBurger.classList.remove('close');
});

cityButton && cityButton.addEventListener('click', () => openSideBar());
cityB_contacts && cityB_contacts.addEventListener('click', () => openSideBar());

function openSideBar() {
  isOpened = cities.style.transform !== 'none';
  if (isOpened) {
    cities.style.transform = 'none';
    cities.style.backgroundColor = 'white';
  }
  fillCities();
}

cityClose && cityClose.addEventListener('click', () => {
  cities.style.transform = 'translateX(150vw)';
});


/* работа с cookie-banner */
let cookieAccept = document.querySelector('#cookie-accept');
let cookieBanner = document.querySelector('#cookie-banner');
let isCoockieBannerShow = localStorage.getItem('isCoockieBannerShow');
if (!isCoockieBannerShow && cookieBanner) cookieBanner.classList.add('show');
cookieAccept && cookieAccept.addEventListener('click', () => {
  localStorage.setItem('isCoockieBannerShow', new Date().toISOString());
  cookieBanner.classList.remove('show');
});


function close_all_open_panels(show) {
  if (rightpanel) rightpanel.style.transform = 'translateX(150vw)';
  if (cities) cities.style.transform = 'translateX(150vw)';
  if (panel) panel.style.transform = 'translateX(150vw)';
  if (buttonBurger) buttonBurger.classList.remove('close');
}

window.close_all = close_all_open_panels;
document.addEventListener('keydown', (e) => e.key === 'Escape' && close_all_open_panels());

window.openRightPanel = function () {
  isOpened = rightpanel.style.transform !== 'none';
  if (isOpened) rightpanel.style.transform = 'none';
}

closerFon && closerFon.addEventListener('click', () => close_all_open_panels())
closerButton && closerButton.addEventListener('click', () => close_all_open_panels())

