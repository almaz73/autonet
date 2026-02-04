import {initCaptcha} from "@/js/captcha.js";
import {vykuo_otcenka} from "@/js/global-constants.js";
import {checkFormFields, formattingPhone } from "@/js/global-func.js";

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')

    stateForrm1.innerHTML = vykuo_otcenka
    stateForrm1.querySelector('[name="year"]').parentNode.style.display='none'
    stateForrm1.querySelector('.title').innerHTML = `Запишитесь на <span style="color:red">бесплатную диагностику</span> АКПП`

    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm2.innerHTML = vykuo_otcenka
    stateForrm2.querySelector('[name="year"]').parentNode.style.display='none'
    stateForrm1.querySelector('.title').innerHTML = `Запишитесь на <span style="color:red">бесплатную диагностику</span> АКПП`


    initCaptcha()
})

window.applyBid = function () {
    console.log('555??? ')
    let capcthadiv = document.querySelector('.bid .capctha-div')
    let name = document.querySelector('.bid  [name="name"]')
    let phone = document.querySelector('.bid  [name="phone"]')
    let city = document.querySelector('.bid [name="city"]')
    let brand = document.querySelector('.bid [name="brand"]')
    let model = document.querySelector('.bid [name="model"]')
    let year = document.querySelector('.bid [name="year"]')
    let checkbox = document.querySelector('.bid [type="checkbox" ]')

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        year: year.value,
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

window.sendBid = function (self) {
    console.log('sendBid')
    let ver = self.parentNode.parentNode.parentNode.classList[1]
    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let brand = document.querySelector(`.${ver} [name="brand"]`)
    let model = document.querySelector(`.${ver} [name="model"]`)
    let year = document.querySelector(`.${ver} [name="year"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        name: name.value,
        year: year.value,
        phone: phone.value
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

