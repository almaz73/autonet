import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields , formattingPhone} from "@/js/global-func.js";
import {franshiza, franshiza_about_city, question_boss_form} from "@/js/global-constants.js";

window.formattingPhone = formattingPhone


document.addEventListener('DOMContentLoaded', () => {
    let question_to_boss = document.querySelector('.question_to_boss')
    let count_business_plan = document.querySelector('.count_business_plan')
    let right_panel_content = document.querySelector('#right_panel_content')
    let who_can_become_partner = document.querySelector('.who_can_become_partner')


    question_to_boss && question_to_boss.addEventListener('click', (id) => {
        openRightPanel()
        right_panel_content.innerHTML = question_boss_form
        initCaptcha()
    })
    count_business_plan.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = '<div class="vv1">'+franshiza_about_city+'</div>'
        initCaptcha()
    })
    who_can_become_partner.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = '<div class="vv2">'+franshiza_about_city+'</div>'
        initCaptcha()
    })

    let form1 = document.querySelector('.formBlock.v1')
    form1.innerHTML = franshiza
    initCaptcha()
})

window.callMe = function () {
    let capcthadiv = document.querySelector('.v1 .capctha-div')
    let name = document.querySelector('.v1 [name="name"]')
    let phone = document.querySelector('.v1 [name="phone"]')
    let city = document.querySelector('.v1 [name="city"]')
    let checkbox = document.querySelector('.v1 [type="checkbox" ]')

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
       city: city.value,
    }
    console.log('params',params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

window.checkPlaceCity = function () {
    let capcthadiv = document.querySelector('.pkace .capctha-div')
    let name = document.querySelector('.pkace [name="name"]')
    let phone = document.querySelector('.pkace [name="phone"]')
    let city = document.querySelector('.pkace [name="city"]')
    let checkbox = document.querySelector('.pkace [type="checkbox" ]')


    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        city: city.value,
    }
    console.log('params',params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

window.getQuoite = function (self) {
    let ver = self.parentNode.parentNode.parentNode.parentNode.classList[0]

    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)


    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        phone: phone.value,
    }
    console.log('params',params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

window.questionBoss = function () {
    let capcthadiv = document.querySelector('.boss .capctha-div')
    let name = document.querySelector('.boss [name="name"]')
    let phone = document.querySelector('.boss [name="phone"]')
    let message = document.querySelector('.boss [name="message"]')
    let checkbox = document.querySelector('.boss [type="checkbox" ]')


    if (checkFormFields([capcthadiv, name, phone, message, checkbox])) return false

    let params = {
        name: name.value,
        message: message.value
    }
    console.log('params',params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}
