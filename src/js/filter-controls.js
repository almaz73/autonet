import {filter_changed} from '@/js/filter.js';
import '@/js/favoriteCars.js'

let items = {}; // некоторые поля нужно запросить с обюновляемой базы
items['Марка'] = ['Все', 'AUDI', 'BMV', 'Brilliance', 'BYD', 'Cadilac'] // todo нужно запросить с сервера
items['Марка'].value=''; // тут будут выбранные значения
items['Модель'] = ['Все', '3 серия', '5 серия', 'X1', 'X3', 'X5'] // todo нужно запросить с сервера после изменения марки

items['Производитель'] = ['Amtel', 'Bfgoodrich', 'Cordiant', 'Formula', 'Gislaved', 'Hankook', 'Kormoran', 'Kumho', 'Nokian'];
items['Ширина профиля'] = ['Все', '155', '185', '195', '205', '215', '225'];
items['Высота профиля'] = ['Все', '45', '55', '60', '65', '70']
items['Диаметр'] = ['Все', '13', '14', '15', '16', '17']
items['Сезон'] = ['Все', 'Зима Шип', 'Лето']
items['Город'] = ['Все', 'Альметьевск', 'Казань', 'Набережные Челны', 'Нижнекамск', 'Стерлитамак']
items['Тип кузова'] = ['Все', 'Автобус', 'Внедорожник', 'Кроссовер', 'Купе', 'Лифтбек', 'Минивэн', 'Пикап', 'Седан', 'Универсал', 'Фургон', 'Хетчбэк']
items['Цвет'] = ['Все', 'Бежевый', 'Белый', 'Голубой', 'Желтый', 'Зелёный', 'Золотой', 'Коричневый', 'Красный', 'Оранжевый', 'Серебряный', 'Серый', 'Синий', 'Фиолетовый', 'Чёрный']
items['Тип КПП'] = ['Все', 'Автоматическая', 'Вариатор', 'Механическая', 'Робот']
items['Тип двигателя'] = ['Все', 'Бензиновый', 'Гибридный', 'Дизельный', 'Электро']
items['Тип привода'] = ['Все', 'Задний', 'Передний', 'Полный']
items['Руль'] = ['Все', 'Левый']
items['Диски'] = ['Все', 'Отсутствуют']

// после загрузки сайта, заполняем все комбы
window.addEventListener('load', () => {
  let combs = document.querySelectorAll('comb');

  //заполняем исходя из настроек
  combs.forEach(comb => {
    let comb_name = comb.dataset.placeholder
    let the_Items = items[comb_name];
    if(the_Items) {
      let items_list = the_Items.map(item =>  '<div data-parent="'+comb_name+'">'+item+'</div>')

      comb.innerHTML = `<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${the_Items.value || comb_name}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items' onclick='big_comb_select(event)'>
            ${items_list.join('')}
        </div>
    </div>`
    }

    let bigCombo = comb.querySelector('.big-combo')
    let bigCombItems = comb.querySelector('.big_comb__items')
    let bigCombInput = comb.querySelector('.big-comb__input')
    let bigCombPlaceholder = comb.querySelector('.big-comb__placeholder')
    let comb_field_img = comb.querySelector('.big-combo img')
    bigCombo && bigCombo.addEventListener('focus', () => {
      bigCombItems.style.display = 'block'
      bigCombInput.style.display = 'inline'
      bigCombPlaceholder.style.display = 'none'
      comb_field_img.style.rotate = '180deg'
      bigCombInput.focus()
      bigCombInput.select()
    })

    if (bigCombInput) {
      bigCombInput.addEventListener('blur', () => blur())
      bigCombInput.addEventListener('click', () => blur())
      bigCombInput.addEventListener('keydown', (e) => e.key === 'Escape' && blur())
    }

    function blur() {
      bigCombItems.style.display = 'none'
      bigCombInput.style.display = 'none'
      bigCombPlaceholder.style.display = ''
      comb_field_img.style.rotate='0deg'
    }
  })
});




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
    f_tire_buttons.style.display = 'none'
    f_auto_buttons.style.display = 'flex'
    tireSizeInfo.style.display = 'none'
  })
  f_tire.addEventListener('click', () => {
    f_tire.classList.add("active")
    f_auto.classList.remove("active")
    f_auto_buttons.style.display = 'none'
    f_tire_buttons.style.display = 'flex'
    tireSizeInfo.style.display = 'flex'
  })
}
