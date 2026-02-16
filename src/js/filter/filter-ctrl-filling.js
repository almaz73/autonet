import {
    api_getBodyTypes,
    api_GetBrandList,
    api_getCities,
    api_getDriveTypes,
    api_getEngineTypes,
    api_getGearboxTypes,
    api_GetModelList,
    api_getWheelTypes,
    api_getColorList,

} from "@/js/apibase.js"
import {getUrlParam, globalValues} from '@/js/global-func.js'
import {eventBus} from '@/js/global-func.js'


// В зависимости от состояния фильтра загружаем кобобоксы
let extention = false
export let setExtention = function (val) {
    extention = val
    getDatas()
}


export const items = {}; // некоторые поля нужно запросить с обюновляемой базы
let items_memory = {}
items['Марка'] = [] //
items['Марка'].value = ''; // тут будут выбранные значения
items['Модель'] = ['Не выбрана марка '] //
items['Город'] = [] //
items['Тип кузова'] = [] //
items['Цвет'] = [] //
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

function fillFields(onlyModels) {
    let combs = document.querySelectorAll('comb');
    combs.forEach(comb => {
        if (onlyModels && comb.dataset.placeholder !== 'Модель') return false
        let comb_name = comb.dataset.placeholder
        let the_Items = items[comb_name];
        if (the_Items) {
            let items_list = createFiledsForList(the_Items, comb_name)
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
            bigCombInput.addEventListener('input', val => {
                let tx = val.target.value
                if (!items_memory['Марка']) items_memory = JSON.parse(JSON.stringify(items))
                items[comb_name] = items_memory[comb_name].filter(el => el.includes(val.target.value))
                if (tx) bigCombItems.innerHTML = createFiledsForList(items[comb_name], comb_name).join('')
                else bigCombItems.innerHTML = createFiledsForList(items_memory[comb_name], comb_name).join('')
            })
        }

        function createFiledsForList(list, comb_name) {
            return list.map(item => '<div data-parent="' + comb_name + '">' + item + '</div>')
        }

        function blur() {
            if (bigCombItems) bigCombItems.style.display = 'none'
            if (bigCombInput) bigCombInput.style.display = 'none'
            if (comb_field_img) comb_field_img.style.rotate = '0deg'
            if (bigCombPlaceholder) bigCombPlaceholder.style.display = ''
        }

        if (![
            'Марка',
            'Тип кузова',
            'Тип КПП',
            'Тип двигателя',
            'Тип привода',
            'Руль',
            'Модель',
            'Город',
            'Цвет',
            'Производитель',
            'Ширина профиля',
            'Высота профиля',
            'Диаметр',
            'Сезон',
            'Диски',
        ].includes(bigCombPlaceholder.innerText)) {
            bigCombPlaceholder.classList.add('bold')
        }
    })
    eventBus.emit('dataUpdated', {});
}

///////////////////////////

export function getModelList(brandName) {
    let brand = globalValues.brandsIds.find(el => el.name.toUpperCase() === brandName.toUpperCase())

    brand && api_GetModelList(brand.id, res => {
        items['Модель'] = res.map(el => el.name)
        items_memory = {}
        globalValues.modelsIds.push(...res)
        fillFields('onlyModel')
    })

    if (!brand) items['Модель'] = ['Неизвестный бренд']
}


function getDatas() {
    Promise.all([
        new Promise(resolve => {
            api_GetBrandList(res => {
                items['Марка'] = res.map(el => el.name)
                globalValues.brandsIds.push(...res)

                const brand = getUrlParam('brand')
                if (brand) getModelList(brand)

                resolve()
            })
        }),
        new Promise(resolve => {
            api_getCities(res => {
                if (!res.includes('Все')) res.unshift('Все')
                items['Город'] = res
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getGearboxTypes(res => {
                items['Тип КПП'] = res.map(el => el.title)
                globalValues.gearboxTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getEngineTypes(res => {
                items['Тип двигателя'] = res.map(el => el.title)
                globalValues.engineTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getDriveTypes(res => {
                items['Тип привода'] = res.map(el => el.title)
                globalValues.driveTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getWheelTypes(res => {
                items['Руль'] = res.map(el => el.title)
                globalValues.wheelTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getBodyTypes(res => {
                items['Тип кузова'] = res.map(el => el.title)
                globalValues.bodyTypes.push(...res)
                resolve()
            })
        }), extention && new Promise(resolve => {
            api_getColorList(res => {
                items['Цвет'] = res.map(el => el.name)
                globalValues.bodyColors.push(...res)
                resolve()
            })
        }),


    ]).then(responses => {
        fillFields() // вот это должно сработать  в конце
    }).catch(error => {
        console.error('Произошла ошибка:', error);
    });
}
