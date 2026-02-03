import {initCaptcha} from "@/js/captcha.js";
import {podbor_bid_1_2, podbor_bid} from "@/js/global-constants.js";
import {checkFormFields} from "@/js/global-func.js";
import {formattingPhone} from "@/js/global-func.js"

window.formattingPhone = formattingPhone


document.addEventListener('DOMContentLoaded', () => {
    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')

    let form1 = document.querySelector('.formBlock .v1')
    form1.innerHTML = podbor_bid_1_2

    let form2 = document.querySelector('.formBlock .v2')
    form2.innerHTML = podbor_bid_1_2
    initCaptcha()

    let form3 = `<div class="v5 v3">${podbor_bid}</div>`
    apply_bid.addEventListener('click', () => { // авезжпеь панель
        openRightPanel()
        right_panel_content.innerHTML = form3
        initCaptcha()
    })
})

window.podbor_bid_f = function (self) {
    let ver = self.parentNode.parentNode.parentNode.classList[1]

    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let email = document.querySelector(`.${ver} [name="email"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, email, checkbox])) return false

    let params = {
        name: name.value,
        email: email.value,
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}
