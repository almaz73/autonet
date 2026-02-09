import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, simplePhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js";


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

/** Для кнопки с меню Обратный звонок */
window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    let params = {
        name: name.value,
        phone: phone.value,
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}




initCaptcha()

/** для промо-акций */
window.sendBidPromo = function (fName) {
    let capcthadiv = document.querySelector(`.capctha-div`)
    let name = document.querySelector(`[name="name"]`)
    let year = document.querySelector(`[name="year"]`)
    let checkbox = document.querySelector(`[type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, checkbox])) return false

    let params = {
        name: name.value,
        yearReleased: year.value,
    }
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}