import {initCaptcha} from "@/js/captcha.js";
import {form_profitable, vykuo_otcenka} from "@/js/global-constants.js";
import {checkFormFields, formattingPhone } from "@/js/global-func.js";

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')
    let order_buy = document.querySelector('.order_buy')


    apply_bid.addEventListener('click', ()=>{
        openRightPanel()
        right_panel_content.innerHTML = form_profitable
        initCaptcha()
    })
    order_buy.addEventListener('click', ()=>{
        openRightPanel()
        right_panel_content.innerHTML = form_profitable
        initCaptcha()
    })

    let stateForrm1 = document.querySelector('.formBlock.v1')
    stateForrm1.innerHTML = vykuo_otcenka

    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm2.innerHTML = vykuo_otcenka

    initCaptcha()
})

window.applyBid = function () {
    let capcthadiv = document.querySelector('.bid .capctha-div')
    let name = document.querySelector('.bid  [name="name"]')
    let phone = document.querySelector('.bid  [name="phone"]')
    let city = document.querySelector('.bid [name="city"]')
    let brand = document.querySelector('.bid [name="brand"]')
    let model = document.querySelector('.bid [name="model"]')
    let year = document.querySelector('.bid [name="year"]')
    let checkbox = document.querySelector('.bid [type="checkbox" ]')

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

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
    let ver = self.parentNode.parentNode.parentNode.classList[1]
    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let brand = document.querySelector(`.${ver} [name="brand"]`)
    let model = document.querySelector(`.${ver} [name="model"]`)
    let year = document.querySelector(`.${ver} [name="year"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, city, name, phone, checkbox])) return false

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

