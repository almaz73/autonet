import {loadCities} from "@/js/cities.js"

let innerCity = document.querySelector('#innerCity');
let cityInput = document.querySelector('.form__modal-place--group input');

let cityList = null

export async function fillCities(txt = '') {
  if (!innerCity) return
  if (!cityList) {
    try {
      cityList = await loadCities()
    } catch (error) {
      console.error(error)
      cityList = []
    }
  }

  const letters = [...new Set(cityList.map(city => city.slice(0, 1)))]
    .sort((a, b) => a.localeCompare(b, 'ru'))

  let inner = '';
  letters.forEach(letter => {
    let towns = cityList.filter(el => el.slice(0, 1) === letter);
    let innerTowns = ``;

    towns.forEach(el => {
      let yel = txt && el.toUpperCase().includes(txt) ? ' class=\'yel\'' : '';
      innerTowns += `<li><a href="javascript:void(0)" onclick="setCity('${el}')"><span ${yel}>${el}</span></a></li>`;
    });
    inner += `<div class="modal-place__box">
<div><div class="letter">${letter}</div><ul>${innerTowns}</ul></div></div>`;
  });

  innerCity.innerHTML = inner;
}


cityInput && cityInput.addEventListener('input', () => {
  fillCities(cityInput.value.toUpperCase());
});
