import {filter_changed, filter_changed_text} from '@/js/filter/filter.js';
import {items, setExtention} from '@/js/filter/filter-ctrl-filling.js'

document.addEventListener('DOMContentLoaded', () => {

    window.big_comb_select = function (val) {
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

    window.input_chamged = function (type, val) {
        filter_changed_text(type, val)
    }


    /* Сюда же добавим управление видом фильтров */
    let advanced = document.querySelector('.frame-filter__controls-advanced')
    let filterAdvanced = document.querySelector('.filter-fields')
    let carVitrina= document.querySelector('#car-vitrina')
    let datelist1 = document.querySelector('#list1')
    let datelist2 = document.querySelector('#list2')

    carVitrina && carVitrina.addEventListener('mousemove', () => {
        if (datelist1) datelist1.style.left = '-1000px'
        if (datelist2) datelist2.style.left = '-1000px'
    })

    advanced && advanced.addEventListener('click', () => {
        if (advanced.classList.length === 1) {
            advanced.classList.add("active")
            filterAdvanced.classList.add("active")
            setExtention(true)
        } else {
            advanced.classList.remove("active")
            filterAdvanced.classList.remove("active")
        }
        let deleter = document.querySelector('#deleter')
        if (deleter) deleter.style.left = '-1000px'
    })

// Переключение на шины
    let f_auto = document.querySelector('.f_auto')
    let f_tire = document.querySelector('.f_tire')
    if (f_auto && f_tire) {
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
})