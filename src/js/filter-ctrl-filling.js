import {api_GetBrandList, api_GetModelList} from "@/js/API-base/apibase.js"
import {getUrlParam, global_brandsIds, global_modelsIds} from '@/js/global-func.js'


export let items = {}; // некоторые поля нужно запросить с обюновляемой базы
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


///////////////////////////

function fillFields() {
    let combs = document.querySelectorAll('comb');
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
            if (bigCombPlaceholder) bigCombPlaceholder.style.display = 'none'
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
            if (bigCombItems) bigCombItems.style.display = 'none'
            if (bigCombInput) bigCombInput.style.display = 'none'
            if (comb_field_img) comb_field_img.style.rotate = '0deg'
            if (bigCombPlaceholder) bigCombPlaceholder.style.display = ''
        }
    })
}

///////////////////////////


api_GetBrandList().then(res=>{
    items['Марка'] = res.map(el=>el.name)
    global_brandsIds.push(...res)

    const brand = getUrlParam('brand')
    if (brand) getModelList(brand)

    fillFields()
})


export function getModelList(brandName) {
    let brand = global_brandsIds.find(el=>el.name.toUpperCase()===brandName.toUpperCase())

    brand && api_GetModelList(brand.id).then(res=>{
        items['Модель'] = res.map(el=>el.name)
        global_modelsIds.push(...res)
        fillFields()
    })

    if(!brand) {
        items['Модель'] = ['Неизвестный бренд']
        fillFields()
    }
}

