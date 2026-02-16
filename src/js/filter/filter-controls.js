import {filter_changed, filter_changed_text} from '@/js/filter/filter.js';
import {items, setExtention} from '@/js/filter/filter-ctrl-filling.js'
import {api_getYearGap} from "@/js/apibase.js";

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

    let timer1 = null
    window.input_on = function (type, val) {
        if (timer1) clearTimeout(timer1)
        timer1 = setTimeout(() => input_chamged(type, val), 1000)
    }


    /* Сюда же добавим управление видом фильтров */
    let advanced = document.querySelector('.frame-filter__controls-advanced')
    let filterAdvanced = document.querySelector('.filter-fields')
    let carVitrina= document.querySelector('#car-vitrina')
    let datelist1 = document.querySelector('#list1')
    let datelist2 = document.querySelector('#list2')

    let yearGap = []
    api_getYearGap(res => yearGap = res)

    window.onCard_0 = function (val) {
        // console.log('val', val)
        let inp = val.querySelector('input')
        let datelist1 = document.querySelector('#list1_1')
        let datelist2 = document.querySelector('#list2_2')
        let xy = val.getBoundingClientRect()
        let qqq = document.body.offsetWidth > 1200 ? 140 : 40

        // Если  поля годов, показываем панели
        if (val.querySelector('span') &&
            val.querySelector('span').innerHTML &&
            ['Год от:'].includes(val.querySelector('span').innerHTML)) {
            if (!datelist1.innerHTML) {
                for (let i = +yearGap.from; i < +yearGap.to; i++) {
                    datelist1.innerHTML += `<a>${i}</a>`
                }
                let yearsList = datelist1.querySelectorAll('a')
                yearsList.forEach(el => {
                    el.addEventListener('click', val => {
                        inp.value = val.target.innerText
                        input_chamged('yearReleasedFrom', val.target.innerText)
                        datelist1.style.left = '-1000px'
                    })
                })
            }
            datelist1.style.left = (xy.x - qqq) + 'px'
            datelist1.style.top = (xy.y + window.scrollY - 473) + 'px'
            datelist2.style.left = '-1000px'
        } else if (val.querySelector('span') &&
            val.querySelector('span').innerHTML &&
            ['Год до:'].includes(val.querySelector('span').innerHTML)) {
            if (!datelist2.innerHTML) {
                for (let i = +yearGap.from; i < +yearGap.to; i++) {
                    datelist2.innerHTML += `<a>${i}</a>`
                }
                let yearsList = datelist2.querySelectorAll('a')
                yearsList.forEach(el => {
                    el.addEventListener('click', val => {
                        inp.value = val.target.innerText
                        input_chamged('yearReleasedTo', val.target.innerText)
                        datelist2.style.left = '-1000px'
                    })
                })
            }

            datelist2.style.left = (xy.x - qqq) + 'px'
            datelist2.style.top = (xy.y + window.scrollY - 473) + 'px'
            datelist1.style.left = '-1000px'
        } else {
            datelist1.style.left = '-1000px'
            datelist2.style.left = '-1000px'
        }

        if (val.querySelector('input')) val.querySelector('input').focus()

        setTimeout(() => {
            datelist1.style.left = '-1000px'
            datelist2.style.left = '-1000px'
        }, 5000)

    }


    carVitrina && carVitrina.addEventListener('mousemove', () => {
        if (datelist1) datelist1.style.left = '-1000px'
        if (datelist2) datelist2.style.left = '-1000px'
    })

    advanced && advanced.addEventListener('click', () => {
        if (advanced.classList.length === 1) {
            advanced && advanced.classList.add("active")
            filterAdvanced && filterAdvanced.classList.add("active")
            setExtention(true)
        } else {
            advanced.classList.remove("active")
            filterAdvanced && filterAdvanced.classList.remove("active")
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
            f_auto && f_auto.classList.add("active")
            f_tire && f_tire.classList.remove("active")
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