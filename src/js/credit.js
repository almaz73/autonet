import {declOfNum, formatterShowPrice, checkFormFields} from '@/js/global-func.js'
import {api_postCallToSell} from "@/js/API-base/apibase.js";
import {message} from "@/js/message.js"


const slider0 = document.querySelector('.slider__ui.slider0');
const sliderКange0 = document.querySelector('.slider__ui.slider0 .slider__ui-range');
const sliderHandle0 = document.querySelector('.slider__ui.slider0 .slider__ui-handle');
/** slide1 **/
const slider1 = document.querySelector('.slider__ui.slider1');
const sliderКange1 = document.querySelector('.slider__ui.slider1 .slider__ui-range');
const sliderHandle1 = document.querySelector('.slider__ui.slider1 .slider__ui-handle');
/** slide2 **/
const slider2 = document.querySelector('.slider__ui.slider2');
const sliderКange2 = document.querySelector('.slider__ui.slider2 .slider__ui-range');
const sliderHandle2 = document.querySelector('.slider__ui.slider2 .slider__ui-handle');
/** fields **/
const field0 = document.querySelector('#field0')
const field1 = document.querySelector('#field1')
const field2 = document.querySelector('#field2')
const field3 = document.querySelector('#field3')
const field4 = document.querySelector('#field4')

const bid_for_car = document.querySelector('.bid')

// одну функцию для оживления дважды используем
slider_mover(slider0, sliderКange0, sliderHandle0, 'zero')
slider_mover(slider1, sliderКange1, sliderHandle1, 'first')
slider_mover(slider2, sliderКange2, sliderHandle2, 'second')

function slider_mover(slider, sliderКange, sliderHandle, type) {
    if (!slider) return false
    let isDragging = false;
    let startX; // Начальная позиция курсора
    let startLeft; // Начальная позиция элемента

    sliderHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startLeft = sliderHandle.offsetLeft;
        sliderHandle.style.cursor = 'grabbing';
    });
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            setPoint(e, type)
        }
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        sliderHandle.style.cursor = 'grab';
    });
    slider.addEventListener('click', (e) => setPoint(e))

    function setPoint(e, type) {
        let newLeft = startLeft + (e.clientX - startX);
        if (isNaN(newLeft)) return false

        if (newLeft < 0) newLeft = 0
        if (newLeft > slider.offsetWidth) newLeft = slider.offsetWidth

        let w = slider.offsetWidth
        if (type === 'second') {
            if (newLeft < w / 8) {
                newLeft = 0
                changeYear(1)
            }
            if (newLeft >= w / 8 && newLeft < w / 8 * 3) {
                newLeft = w / 4
                changeYear(2)
            }
            if (newLeft >= w / 8 * 3 && newLeft < w / 8 * 5) {
                newLeft = w / 2
                changeYear(3)
            }
            if (newLeft >= w / 8 * 5 && newLeft < w / 8 * 7) {
                newLeft = w / 4 * 3
                changeYear(4)
            }
            if (newLeft >= w / 8 * 7) {
                newLeft = w
                changeYear(5)
            }
        } else if (type === 'zero') {
            changeStart(newLeft / slider.offsetWidth)
        } else changePrice(newLeft / slider.offsetWidth)

        sliderКange.style.width = newLeft + 'px'
        sliderHandle.style.left = (newLeft - 10) + 'px';
    }
}

let price = 1500000
let year = 5
let credit = 0
let forMonth = 0
if (field0) field0.innerHTML = formatterShowPrice(price) + ' ₽'

export function calculator(val) {
    price = parseInt(val)
    credit = price / 2
    field1.innerHTML = formatterShowPrice(price / 2) + ' ₽'
    field2.innerHTML = formatterShowPrice(credit) + ' ₽'
    forMonth = credit / 60 * 1.149
    field3.innerHTML = 'от ' + formatterShowPrice(forMonth) + ' ₽/мес'
}
calculator(price)

function changePrice(val) {
    credit = (price / 10) + (price - price / 10) * val
    field2.innerHTML = formatterShowPrice(credit) + ' ₽'
    field1.innerHTML = formatterShowPrice(price - credit) + ' ₽'

    changeYear()
}
function changeStart(val) {
    credit = (price / 10) + (price - price / 10) * val
    field0.innerHTML = formatterShowPrice(credit) + ' ₽'
    changePrice(val)
}

function changeYear(val) {
    if (!val) val = year
    field4.innerHTML = val + declOfNum(val, [' год', ' года', ' лет'])
    if (val === 1) field3.innerHTML = 'от ' + formatterShowPrice(credit / 12 * 1.03056) + ' ₽/мес'
    if (val === 2) field3.innerHTML = 'от ' + formatterShowPrice(credit / 24 * 1.05936) + ' ₽/мес'
    if (val === 3) field3.innerHTML = 'от ' + formatterShowPrice(credit / 36 * 1.089) + ' ₽/мес'
    if (val === 4) field3.innerHTML = 'от ' + formatterShowPrice(credit / 48 * 1.1184) + ' ₽/мес'
    if (val === 5) field3.innerHTML = 'от ' + formatterShowPrice(credit / 60 * 1.149) + ' ₽/мес'
    year = val
}




bid_for_car && bid_for_car.addEventListener('click', res => {
    let input_name = document.querySelector('.main_cred-col.name input')
    let input_tel = document.querySelector('.main_cred-col.tel input')
    let captcha = document.querySelector('.capctha-div.n3')
    let checkbox = document.getElementById('n3')
    let attent = document.querySelector('.attent.n3')

    if (checkFormFields([input_name, input_tel, captcha, checkbox, attent]))return false

    let params = {
        formName: 'spesialCredit',
        price: price,
        credit: credit,
        forMonth: forMonth,
        year: field4.innerHTML,
        fio: input_name.value,
        tel: input_tel.value,
    }

    console.log(params)

    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Запрос успешно отправлен')
        else message('Ошибка при отправки запроса', 'error')
        clearFields()
    })

    function clearFields() {
        input_name.value = ''
        input_tel.value = ''
    }

})

