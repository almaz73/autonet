import {initCaptcha} from "@/js/captcha.js";
import {constructorForm, checkFormFields} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js"

document.addEventListener('DOMContentLoaded', () => {
    let question_to_boss = document.querySelector('.question_to_boss')
    let quete = document.querySelector('.count_business_plan')
    let right_panel_content = document.querySelector('#right_panel_content')
    let who_can_become_partner = document.querySelector('.who_can_become_partner')

    question_to_boss && question_to_boss.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('boss',
            ['name*', 'phone*', 'message*'],
            'questionFranshiza',
            'Отправить',
            'Задать <span class="red">вопрос</span>')
        initCaptcha()
    })

    let legenda = '<span class="red"> Получите расчет</span> прибыли автосалона АВТОСЕТЬ.РФ в своем городе '
    let form = constructorForm(
        'quet',
        ['name*', 'phone*', 'city*'],
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

    form1.innerHTML = constructorForm(
        'state1',
        ['name*', 'phone*', 'city*'],
        'getQuoite',
        null,
        legenda)
    initCaptcha()
})

window.getQuoite = function (fName) {
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox"]`)
    const button = document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    const params = {
        // description: 'Страница Партнерам. Вероятные будущие владельцы франшизы в новом городе ',
        type: 15,
        name: name.value,
        phone: phone.value,
        city: city.value
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}

window.questionFranshiza = function (fName) {
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const message = document.querySelector(`.${fName} [name="message"]`)
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox"]`)
    const button = document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    const params = {
        // form: '/franshiza/',
        // description: 'Вопрос генеральному директору',
        type: 10,
        name: name.value,
        message: message.value,
        phone: phone.value,
        city: city.value
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}
