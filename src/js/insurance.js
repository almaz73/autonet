import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, initSubField} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*','city*', 'osago',  'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Заявка на <span class="red">страхование </span>'
    )

    stateForrm2.innerHTML = constructorForm('st2',
        ['name*','phone*','city*', 'osago',  'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Заявка на <span class="red">страхование </span>'
    )

    initSubField() // оживляем комбобокса
    initCaptcha()
})

window.sendInsurance = function (self) {
    let ver = self.parentNode.parentNode.parentNode.classList[1]
    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let brand = document.querySelector(`.${ver} [name="brand"]`)
    let model = document.querySelector(`.${ver} [name="model"]`)
    let osago = document.querySelector(`.${ver} [name="osago"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        name: name.value,
        phone: phone.value,
        osago: osago.value
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

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
        name: name.value,
        phone: phone.value,
        city: city.value,
        osago: osago.value,
        brand: brand.value,
        model: model.value,
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}



