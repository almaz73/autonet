import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*', 'city*'],
        'sendBid',
        'Перезвоните мне',
        'Оставьте заявку на <span class="red">техосмотр</span> автомобиля'
    )
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city*'],
        'sendBid',
        'Перезвоните мне',
        'Оставьте заявку на <span class="red">техосмотр</span> автомобиля'
    )

    initCaptcha()
})


window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        // form: '/services/tehnicheskiy-osmotr/',
        // description: 'Техосмотр. ',
        type: 4,
        name: name.value,
        phone: phone.value,
        city: city.value
    }
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
    })
}

