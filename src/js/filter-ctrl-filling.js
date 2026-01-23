import {
    api_getBodyTypes,
    api_GetBrandList,
    api_getCities,
    api_getDriveTypes,
    api_getEngineTypes,
    api_getGearboxTypes,
    api_GetModelList, api_getWheelTypes,
} from "@/js/API-base/apibase.js"
import {getUrlParam, globalValues} from '@/js/global-func.js'


// В зависимости от состояния фильтра загружаем кобобоксы
let extention = false
export let setExtention = function (val) {
    extention = val
    getDatas()
}


export let items = {}; // некоторые поля нужно запросить с обюновляемой базы
items['Марка'] = [] //
items['Марка'].value = ''; // тут будут выбранные значения
items['Модель'] = ['е выбрана марка '] //
items['Город'] = [] //
items['Тип кузова'] = [] //
items['Цвет'] = ['Все', 'Бежевый', 'Белый', 'Голубой', 'Желтый', 'Зелёный', 'Золотой', 'Коричневый', 'Красный', 'Оранжевый', 'Серебряный', 'Серый', 'Синий', 'Фиолетовый', 'Чёрный']
items['Тип КПП'] = []
items['Тип двигателя'] = [] // 'Все', 'Бензиновый', 'Гибридный', 'Дизельный', 'Электро'
items['Тип привода'] = []// ['Все', 'Задний', 'Передний', 'Полный']
items['Руль'] = [] //

items['Диски'] = ['Все', 'Отсутствуют']
items['Производитель'] = ['Amtel', 'Bfgoodrich', 'Cordiant', 'Formula', 'Gislaved', 'Hankook', 'Kormoran', 'Kumho', 'Nokian'];
items['Ширина профиля'] = ['Все', '155', '185', '195', '205', '215', '225'];
items['Высота профиля'] = ['Все', '45', '55', '60', '65', '70']
items['Диаметр'] = ['Все', '13', '14', '15', '16', '17']
items['Сезон'] = ['Все', 'Зима Шип', 'Лето']

///////////////////////////

function fillFields() {
    let combs = document.querySelectorAll('comb');
    combs.forEach(comb => {
        let comb_name = comb.dataset.placeholder
        let the_Items = items[comb_name];
        if (the_Items) {
            let items_list = the_Items.map(item => '<div data-parent="' + comb_name + '">' + item + '</div>')

            comb.innerHTML = `<div class='big-combo' tabindex='1' title="${the_Items.value || comb_name}">
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

        if (!['Марка', 'Тип кузова', 'Тип КПП', 'Тип двигателя', 'Тип привода', 'Руль', 'Модель', 'Город'].includes(bigCombPlaceholder.innerText)) {
            bigCombPlaceholder.classList.add('bold')
        }
    })
}

///////////////////////////

export function getModelList(brandName) {
    let brand = globalValues.brandsIds.find(el => el.name.toUpperCase() === brandName.toUpperCase())

    brand && api_GetModelList(brand.id).then(res => {
        items['Модель'] = res.map(el => el.name)
        globalValues.modelsIds.push(...res)
        fillFields()
    })

    if (!brand) {
        items['Модель'] = ['Неизвестный бренд']
        fillFields()
    }
}


function getDatas() {
    Promise.all([
        new Promise(resolve => {
            api_GetBrandList().then(res => {
                items['Марка'] = res.map(el => el.name)
                globalValues.brandsIds.push(...res)

                const brand = getUrlParam('brand')
                if (brand) getModelList(brand)

                resolve()
            })
        }),
        new Promise(resolve => {
            api_getCities().then(res => {
                items['Город'] = res
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getGearboxTypes().then(res => {
                items['Тип КПП'] = res.map(el => el.title)
                globalValues.gearboxTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getEngineTypes().then(res => {
                items['Тип двигателя'] = res.map(el => el.title)
                globalValues.engineTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getDriveTypes().then(res => {
                items['Тип привода'] = res.map(el => el.title)
                globalValues.driveTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getWheelTypes().then(res => {
                items['Руль'] = res.map(el => el.title)
                globalValues.wheelTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getBodyTypes().then(res => {
                items['Тип кузова'] = res.map(el => el.title)
                globalValues.bodyTypes.push(...res)
                resolve()
            })
        }),


    ]).then(responses => {
        fillFields() // вот это должно сработать  в конце
    }).catch(error => {
        console.error('Произошла ошибка:', error);
    });
}
