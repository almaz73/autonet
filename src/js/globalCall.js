import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


let globalcall = document.querySelector('.global-call')
let right_panel_content = document.querySelector('#right_panel_content')
globalcall.addEventListener('click', () => { // авезжпеь панель
    openRightPanel()
    right_panel_content.innerHTML = constructorForm('globC',
        ['name*', 'phone*'],
        'sendBid',
        'Отправить заявку',
        'Заказать звонок'
    )
    initCaptcha()
})

/** Для кнопки с меню Обратный звонок и для Отдельного авто */
window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let email = document.querySelector(`.${fName} [name="email"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    let params = {
        type: 1,
        text: JSON.stringify({
            name: name.value,
            phone: phone.value,
        })
    }
    if (email && email.value) params.email = email.value

    console.log('params', params)
    api_postEmail(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}


initCaptcha()

/** для промо-акций */
window.sendBidPromo = function () {
    let capcthadiv = document.querySelector(`.capctha-div`)
    let name = document.querySelector(`[name="name"]`)
    let year = document.querySelector(`[name="year"]`)
    let checkbox = document.querySelector(`[type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, checkbox])) return false

    let params = {
        type: 16,
        text: JSON.stringify({
            name: name.value,
            yearReleased: year.value,
        })
    }
    api_postEmail(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}