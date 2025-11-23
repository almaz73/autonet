let option_div = document.querySelector('.comb__items');
let comb_field = document.querySelector('.comb_field');
let select_div = document.querySelector('.comb__selected');
let cityName = document.querySelector('.footer-city-button a');
let comb_arrow = document.querySelector('.comb_field img');
let mySwiper = document.querySelector('.mySwiper')


let selectedCity = localStorage.getItem('selectedCity');
if (comb_field) {
  select_div.innerHTML = selectedCity || 'Россия';
  document.addEventListener('click', () => openOptions(false));
  comb_field.addEventListener('click', event => openComb(event));
  option_div.addEventListener('click', event => getCity(event));
}

function getCity(e) {
  let val = e.target.innerText;
  if (val.length > 30) return false;
  select_div.innerHTML = val;
  cityName.innerHTML = val
  localStorage.setItem('selectedCity', val);
}

function openComb(e) {
  openOptions(option_div.style.display !== 'block');
  e.stopPropagation();
}

function openOptions(isOpen) {
  option_div.style.display = isOpen ? 'block' : 'none';
  comb_arrow.style.rotate = isOpen ? '180deg' : '0deg';
  if (mySwiper) mySwiper.style.zIndex = isOpen ? -1 : 0
}
