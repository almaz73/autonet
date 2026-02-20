import {initCaptcha} from "@/js/captcha.js";
import {constructorForm, checkFormFields} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";

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
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox"]`)
    const button = document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    const params = {
        // form: '/services/shinnyy-сentr/',
        // description: 'Шинный центр. Подарок по диагностике колес, если сюда пишут',
        type: 5,
        name: name.value,
        phone: phone.value,
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}
