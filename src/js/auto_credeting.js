import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city', 'price'],
        'sendBid',
        'Отправить заявку',
        'Заявка на <span class="red">автокредит </span>')
    initCaptcha()

    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')
    apply_bid.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('ff1',
            ['name*', 'phone*', 'city', 'price'],
            'sendBid',
            'Отправить заявку',
            'Заявка на <span class="red">автокредит </span>')
        initCaptcha()
    })
})


window.sendBid = function (fName) {
    const priceCred = document.querySelector('#field0')
    const credit = document.querySelector('#field1')
    const payment = document.querySelector('#field2')
    const yearCred = document.querySelector('#field3')
    const perMont = document.querySelector('#field4')

    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let price = document.querySelector(`.${fName} [name="price"]`)
    let year = document.querySelector(`.${fName} [name="year"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        name: name.value,
        phone: phone.value,
    }
    if (price) params.price = price.innerHTML
    if (year) params.year = year.innerHTML
    if (city) params.city = city.innerHTML

    if (priceCred) params.priceCred = priceCred.innerHTML
    if (credit) params.credit = credit.innerHTML
    if (payment) params.payment = payment.innerHTML
    if (yearCred) params.yearCred = yearCred.innerHTML
    if (perMont) params.perMont = perMont.innerHTML

    console.log('params', params)
    let newParams = {
        form: '/services/crediting/',
        description: 'Автокредитование. Ждут обратного звонка, хотят узнать сколько будет автокредит, тут есть два варианта запроса',
        record: params
    }

    api_postCallToSell(newParams).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}

