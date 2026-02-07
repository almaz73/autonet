import {initCaptcha} from "@/js/captcha.js";
import {constructorForm, checkFormFields, formattingPhone, simplePhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js"

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let question_to_boss = document.querySelector('.question_to_boss')
    let quete = document.querySelector('.count_business_plan')
    let right_panel_content = document.querySelector('#right_panel_content')
    let who_can_become_partner = document.querySelector('.who_can_become_partner')

    question_to_boss && question_to_boss.addEventListener('click', (id) => {
        openRightPanel()
        let form = constructorForm('boss',
            ['name*','phone*','message*'],
            'questionBoss',
            'Отправить',
            'Задать <span class="red">опрос</span>')
        right_panel_content.innerHTML = form
        initCaptcha()
    })

    let legenda = '<span class="red"> Получите расчет</span> прибыли автосалона АВТОСЕТЬ.РФ в своем городе '
    let form = constructorForm(
        'quet',
        [ 'name*','phone*','city*'],
        'getQuoite',
        null,
        legenda)
    quete.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = form
        initCaptcha()
    })
    who_can_become_partner.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = form
        initCaptcha()
    })

    let form1 = document.querySelector('.formBlock.v1')

    let formstate = constructorForm(
        'state1',
        [ 'name*','phone*','city*'],
        'getQuoite',
        null,
        legenda)
    form1.innerHTML = formstate
    initCaptcha()
})

window.checkPlaceCity = function () {
    let name = document.querySelector('.pkace [name="name"]')
    let phone = document.querySelector('.pkace [name="phone"]')
    let city = document.querySelector('.pkace [name="city"]')
    let capcthadiv = document.querySelector('.pkace .capctha-div')
    let checkbox = document.querySelector('.pkace [type="checkbox" ]')


    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        city: city.value,
        phone: simplePhone(phone.value)
    }
    console.log('params',params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}

window.getQuoite = function (fName) {
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        phone: simplePhone(phone.value),
        city: city.value,
    }
    console.log('params',params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}

window.questionBoss = function (fName) {
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let message = document.querySelector(`.${fName} [name="message"]`)
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, message, checkbox])) return false

    let params = {
        name: name.value,
        message: message.value,
        phone: simplePhone(phone.value)
    }
    console.log('params',params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}
