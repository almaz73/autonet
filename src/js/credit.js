import {declOfNum, formatterShowPrice, checkFormFields} from '@/js/global-func.js'
import {api_postEmail} from "@/js/apibase.js";


const slider0 = document.querySelector('.slider__ui.slider0');
const sliderRange0 = document.querySelector('.slider__ui.slider0 .slider__ui-range');
const sliderHandle0 = document.querySelector('.slider__ui.slider0 .slider__ui-handle');
/** slide1 **/
const slider1 = document.querySelector('.slider__ui.slider1');
const sliderRange1 = document.querySelector('.slider__ui.slider1 .slider__ui-range');
const sliderHandle1 = document.querySelector('.slider__ui.slider1 .slider__ui-handle');
/** slide2 **/
const slider2 = document.querySelector('.slider__ui.slider2');
const sliderRange2 = document.querySelector('.slider__ui.slider2 .slider__ui-range');
const sliderHandle2 = document.querySelector('.slider__ui.slider2 .slider__ui-handle');
/** fields **/
const field0 = document.querySelector('#field0')
const field1 = document.querySelector('#field1')
const field2 = document.querySelector('#field2')
const field3 = document.querySelector('#field3')
const field4 = document.querySelector('#field4')

const bid_for_car = document.querySelector('.bid')

// одну функцию для оживления дважды используем
slider_mover(slider0, sliderRange0, sliderHandle0, 'zero')
slider_mover(slider1, sliderRange1, sliderHandle1, 'first')
slider_mover(slider2, sliderRange2, sliderHandle2, 'second')

function slider_mover(slider, sliderRange, sliderHandle, type) {
    if (!slider) return false
    let isDragging = false;
    let startX; // Начальная позиция курсора
    let startLeft; // Начальная позиция элемента

    sliderHandle.addEventListener('mousedown', dragStart);
    sliderHandle.addEventListener('touchstart', dragStart);

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);

    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);

    function dragStart(e) {
        isDragging = true;
        startX = e.clientX;
        startLeft = sliderHandle.offsetLeft;
        sliderHandle.style.cursor = 'grabbing';
        if (e.type === 'touchstart') startX = e.touches[0].clientX;
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();


        if (e.type === 'touchmove') e.clientX = parseInt(e.touches[0].clientX)

        if (isDragging) setPoint(e, type)
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        sliderHandle.style.cursor = 'grab';
    }

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

        sliderRange.style.width = newLeft + 'px'
        sliderHandle.style.left = (newLeft - 10) + 'px';
    }
}

let price = 2000000
let year = 5
let credit = 0
let forMonth = 0
if (field0) {
    field0.innerHTML = formatterShowPrice(price) + ' ₽'
    sliderRange0.style.width = slider0.offsetWidth + 'px'
    sliderHandle0.style.left = (slider0.offsetWidth - 10) + 'px';
    calculator(2000000)
}

export function calculator(val) {
    price = parseInt(val)
    credit = price / 2
    field1.innerHTML = formatterShowPrice(price / 2) + ' ₽'
    field2.innerHTML = formatterShowPrice(credit) + ' ₽'
    forMonth = credit / 60 * 1.149
    field3.innerHTML = 'от ' + formatterShowPrice(forMonth) + ' ₽/мес'
}


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


bid_for_car && bid_for_car.addEventListener('click', () => {
    const input_name = document.querySelector('.main_cred-col.name input')
    const input_tel = document.querySelector('.main_cred-col.tel input')
    const captcha = document.querySelector('.capctha-div.n3')
    const button = document.querySelector('.main_cred-col button')
    const checkbox = document.getElementById('n3')
    const attent = document.querySelector('.attent.n3')

    if (checkFormFields([input_name, input_tel, captcha, checkbox, attent])) return false

    const params = {
        // formName: 'spesialCredit',
        type: 6,
        price: price,
        credit: credit,
        forMonth: forMonth,
        year: field4.innerHTML,
        fio: input_name.value,
        phone: input_tel.value,
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.fileds`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
            clearFields()
        }
        showPreloader(false, button)
    })

    function clearFields() {
        input_name.value = ''
        input_tel.value = ''
    }

})

