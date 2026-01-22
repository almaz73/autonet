import {filter_changed, filter_changed_text} from '@/js/filter.js';
import {items} from '@/js/filter-ctrl-filling.js'


window.big_comb_select = function(val) {
  let combName = val.srcElement.dataset.parent
  let value = val.srcElement.innerText
  let parent = val.srcElement.parentElement.parentElement

  items[combName].value = value
  parent.querySelector('.big-comb__placeholder').innerText = value
  parent.querySelector('.big-comb__placeholder').classList.add('bold')
  parent.querySelector('.big-comb__input').value = value
  parent.querySelector('.big-comb__input').blur()
  filter_changed(items, combName)
};

window.input_chamged = function(type, val) {
  filter_changed_text(type, val)
}

/* Реагирование текстовых кнопок*/



/* Сюда же добавим управление видом фильтров */
let advanced = document.querySelector('.frame-filter__controls-advanced')
let filterAdvanced = document.querySelector('.filter-fields')


advanced && advanced.addEventListener('click', () => {
  if (advanced.classList.length === 1) {
    advanced.classList.add("active")
    filterAdvanced.classList.add("active")
  } else {
    advanced.classList.remove("active")
    filterAdvanced.classList.remove("active")
  }
})

// Переключение на шины
let f_auto = document.querySelector('.f_auto')
let f_tire = document.querySelector('.f_tire')
if(f_auto && f_tire) {
  let f_auto_buttons = document.querySelector('.f_auto_buttons')
  let f_tire_buttons = document.querySelector('.f_tire_buttons')
  let tireSizeInfo = document.querySelector('.filter__controls-info')


  f_auto.addEventListener('click', () => {
    f_auto.classList.add("active")
    f_tire.classList.remove("active")
    if (f_tire_buttons) f_tire_buttons.style.display = 'none'
    if (f_auto_buttons) f_auto_buttons.style.display = 'flex'
    if (tireSizeInfo) tireSizeInfo.style.display = 'none'
  })
  f_tire.addEventListener('click', () => {
    f_tire.classList.add("active")
    f_auto.classList.remove("active")
    if (f_auto_buttons) f_auto_buttons.style.display = 'none'
    if (f_tire_buttons) f_tire_buttons.style.display = 'flex'
    if (tireSizeInfo) tireSizeInfo.style.display = 'flex'
  })
}
