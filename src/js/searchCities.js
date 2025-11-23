let innerCity = document.querySelector('#innerCity');
let cityInput = document.querySelector('.form__modal-place--group input');

let cities = ['Альметьевск', 'Астрахань', 'Бугульма', 'Буинск',
  'Екатеринбург', 'Казань', 'Магнитогорск', 'Набережные Челны',
  'Нижнекамск', 'Нижний Тагил', 'Оренбург', 'Самара',
  'Саранск', 'Стерлитамак', 'Тольятти', 'Тула', 'Ульяновск', 'Уфа'
];
let letters = ['А', 'Б', 'Е', 'К', 'М', 'Н', 'О', 'С', 'Т', 'У'];

export function fillCities(txt) {
  let inner = '';
  letters.forEach(letter => {
    let towns = cities.filter(el => el.slice(0, 1) === letter);
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


cityInput && cityInput.addEventListener('input', res => {
  fillCities(cityInput.value.toUpperCase());
});


