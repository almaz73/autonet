import { fillCities } from '@/js/searchCities.js';

let burger_menu = document.querySelector('.button__burger');
let panel = document.querySelector('.main-nav.menu');
let buttonBurger = document.querySelector('.button__burger');

let cities = document.querySelector('.main-nav.cities');
let cityButton = document.querySelector('.footer-city-button');
let cityB_contacts = document.querySelector('#city-contacts')
let cityCombName = document.querySelector('.comb__selected');
let cityClose = document.querySelector('.modal-place__close');
let mySwiper = document.querySelector('.mySwiper')
let isOpened;
let request = document.querySelector('.main-nav.request');
let closerFon = document.querySelector('#closer-fon')
let closerButton = document.querySelector('.modal-closer.form')

if (mySwiper) mySwiper.style.zIndex = 0

function hideMainScroll(hide) {
  if (hide) {
    document.body.style.overflow = 'hidden';
    if (document.body.clientWidth > 500) {
      document.body.style.marginRight = '14px';
    }
  } else {
    document.body.style.overflow = 'auto';
    if (document.body.clientWidth > 500) document.body.style.marginRight = '0';
  }
}

burger_menu && burger_menu.addEventListener('click', () => {
  if (isOpened) {
    isOpened = false;
    cities.style.transform = 'translateX(150vw)';
    return false;
  }
  isOpened = panel.style.transform !== 'none';

  panel.style.transform = isOpened ? 'none' : 'translateX(150vw)';
  hideMainScroll(isOpened);
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
  hideMainScroll(isOpened);
  fillCities();
}

cityClose && cityClose.addEventListener('click', () => {
  cities.style.transform = 'translateX(150vw)';
  hideMainScroll(false);
});

cityButton.innerHTML = localStorage.getItem('selectedCity') || 'Россия';
if (cityB_contacts) cityB_contacts.innerHTML = localStorage.getItem('selectedCity') || 'Россия';
window.setCity = function (val) {
  localStorage.setItem('selectedCity', val);
  cities.style.transform = 'translateX(150vw)';
  cityButton.innerHTML = cityB_contacts.innerHTML = cityCombName.innerHTML = val
  hideMainScroll(false);
}

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
  if (request) request.style.transform = 'translateX(150vw)';
  if (cities) cities.style.transform = 'translateX(150vw)';
  if (panel) panel.style.transform = 'translateX(150vw)';
  if (buttonBurger) buttonBurger.classList.remove('close');
  hideMainScroll(false);
  closeChat()

  let ya_map = document.getElementById('ya_map');
  if (ya_map && show) {
    ya_map.style.display = ya_map.style.display === 'block' ? 'none' : 'block';
    if (show !== undefined) ya_map.style.display = show ? 'block' : 'none';
  }
}

window.close_all = close_all_open_panels;
document.addEventListener('keydown', (e) => e.key === 'Escape' && close_all_open_panels());

/**  Панель заявки **/
window.sendBid = function (id) {
  console.log('>>>> id = ',id)
  isOpened = request.style.transform !== 'none';
  if (isOpened) request.style.transform = 'none';
  hideMainScroll(isOpened);
}

closerFon && closerFon.addEventListener('click', () => close_all_open_panels())
closerButton && closerButton.addEventListener('click', () => close_all_open_panels())



function ASC() {
  let request = 'https://ext.cartat.ru/exchange/api/auto/getlist'

  let options = {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    }
  }
  
  console.log('request = ',request)

  fetch(request)
      .then(response => {
        if (!response.ok) {
          // If the response status is not in the 2xx range, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(res => {
        console.log('ХОРОШИЙ ОТВЕТ res = ',res)
      }).catch(error => {
        // Перехватываем ошибки сети и HTTP-ошибки (если мы их "выбросили" выше)
        console.error('Произошла ошибка:', error);
      });

}


function ASC2() {
  let request = 'https://ext.cartat.ru/exchange/api/auto/getlist'

  request = 'api/appeals/list/?filter={}&limit=20&mainFilter=10'

  let options = {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    }
  }

  console.log('222 request = ',request)

  fetch(request)
      .then(response => response.json())
      .then(res => {
        console.log('res = ',res)

        // oredering_buttons.style.display = 'none';
        // oredering_buttons.classList.remove('disabled');
        // localStorage.setItem('meAllOrders', JSON.stringify(OrederList));
        // showOrders();
      });


  //http://localhost:5174/api/workflow/getleadworkflowsbydate/24.12.2025?limit=12&offset=0

}

let BBBB = document.querySelector('#BBBB')
BBBB && BBBB.addEventListener('click', ()=>ASC())

let BBBB2 = document.querySelector('#BBBB2')
BBBB2 && BBBB2.addEventListener('click', ()=>ASC2())