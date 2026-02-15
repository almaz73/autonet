import {initCaptcha} from "@/js/captcha.js";
import {constructorForm, checkFormFields} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/apibase.js";

document.addEventListener('DOMContentLoaded', () => {

    let stateForrm1 = document.querySelector('.formBlock.v1')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*'],
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
        form: '/services/shinnyy-сentr/',
        description: 'Шинный центр. Подарок по диагностике колес, если сюда пишут',
        record: {
            name: name.value,
            phone: phone.value,
        }
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}
