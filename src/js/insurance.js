import {initCaptcha} from "@/js/captcha.js";
import {insurance_form} from "@/js/global-constants.js";
import {checkFormFields, formattingPhone, initSubField} from "@/js/global-func.js";

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    stateForrm1.innerHTML = insurance_form

    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm2.innerHTML = insurance_form

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



