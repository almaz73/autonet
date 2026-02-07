import {initCaptcha} from "@/js/captcha.js";
import {constructorForm, checkFormFields, formattingPhone, simplePhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js";

window.formattingPhone = formattingPhone
document.addEventListener('DOMContentLoaded', () => {

    let stateForrm1 = document.querySelector('.formBlock.v1')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*'],
        'sendBid',
        'Перезвоните мне',
        'Записаться на шиномонтаж. Диагностика колес <span class="red">бесплатно</span>'
    )
    initCaptcha()
})


window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    let params = {
        name: name.value,
        phone: simplePhone(phone.value),
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}
