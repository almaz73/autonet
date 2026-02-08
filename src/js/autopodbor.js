import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_mail} from "@/js/API-base/apibase.js";



document.addEventListener('DOMContentLoaded', () => {
    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')

    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*','email'],
        'sendBid',
        'Отправить заявку',
        'Оставьте заявку на <span class="red">подбор</span> автомобиля'
    )
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*','phone*','email'],
        'sendBid',
        'Отправить заявку',
        'Оставьте заявку на <span class="red">подбор</span> автомобиля'
    )

    initCaptcha()

    apply_bid.addEventListener('click', () => { // авезжпеь панель
        openRightPanel()
        right_panel_content.innerHTML =  constructorForm('v4',
            ['name*','phone*','email'],
            'sendBid',
            'Отправить заявку',
            'Заявка на <span class="red">автоподбор</span>')
        initCaptcha()
    })
})


window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let email = document.querySelector(`.${fName} [name="email"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, email, checkbox])) return false

    let params = {
        type:'podbor',
        name: name.value,
        phone: phone.value,
        email: email.value
    }
    console.log('params', params)
    api_mail(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}
