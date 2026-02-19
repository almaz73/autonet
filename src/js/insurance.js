import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, initSubField} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*', 'city*', 'osago', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Заявка на <span class="red">страхование </span>'
    )

    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city*', 'osago', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Заявка на <span class="red">страхование </span>'
    )

    initSubField() // оживляем комбобокса
    initCaptcha()
})


window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let osago = document.querySelector(`.${fName} [name="osago"]`)
    let brand = document.querySelector(`.${fName} [name="brand"]`)
    let model = document.querySelector(`.${fName} [name="model"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        // form: '/services/insurance/',
        // description: 'Автострахование, ОСАГО или КАСКО',
        type: 17,
        name: name.value,
        phone: phone.value,
        city: city.value,
        osago: osago.value,
        brand: brand.value,
        model: model.value,
    }
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
    })
}



