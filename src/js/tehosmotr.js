import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*','city*'],
        'sendBid',
        'Перезвоните мне',
        'Оставьте заявку на <span class="red">техосмотр</span> автомобиля'
    )
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*','phone*','city*'],
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
        name: name.value,
        phone: phone.value,
        city: city.value,
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}

