import {initCaptcha} from "@/js/captcha.js";
import {message} from "@/js/message.js";
import {checkFormFields, formattingPhone} from "@/js/global-func.js"
import {api_postCallToSell} from "@/js/API-base/apibase.js";
import {form_profitable, form_date_show} from "@/js/global-constants.js"

/***** выезжающая правая маленькая панель *****/
let right_panel_content = document.querySelector('#right_panel_content')
let select_show_date = document.querySelectorAll('.select_show_date')
let profitable = document.querySelectorAll('.profitable')
let addr = document.querySelector('.main__card-product--top .address')




select_show_date && select_show_date.forEach(el => {
    el.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = form_date_show

        let address = document.querySelector('.look-auto [ class="address"]')
        address.innerHTML=`Адрес: ${addr.innerHTML}`
        initCaptcha()
    })
})

profitable && profitable.forEach(el => {
    el.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = form_profitable
        initCaptcha()
    })
})



window.lookAuto = function () {
    let capcthadiv = document.querySelector('.look-auto .capctha-div')
    let name = document.querySelector('.look-auto [name="name"]')
    let year = document.querySelector('.look-auto [name="year"]')
    let email = document.querySelector('.look-auto [name="email"]')
    let checkbox = document.querySelector('.look-auto [type="checkbox" ]')


    if (checkFormFields([capcthadiv, name, year, email, checkbox])) return false

    let params = {
        name: name.value,
        email: email.value,
        year: year.value,
    }
    console.log('params',params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

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