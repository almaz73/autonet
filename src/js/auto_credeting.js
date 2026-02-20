import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


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
    const forMonth = document.querySelector('#field4')

    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const price = document.querySelector(`.${fName} [name="price"]`)
    const year = document.querySelector(`.${fName} [name="year"]`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)
    const button = document.querySelector(`.${fName} button`)


    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    const params = {
        name: name.value,
        phone: phone.value,
    }
    if (price) params.price = price.innerHTML
    if (year) params.year = year.innerHTML
    if (city) params.city = city.innerHTML
    if (priceCred) params.price = priceCred.innerHTML
    if (credit) params.credit = credit.innerHTML
    if (payment) params.payment = payment.innerHTML
    if (yearCred) params.yearCred = yearCred.innerHTML
    if (forMonth) params.forMonth = forMonth.innerHTML

    params.type = 6
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(()=>sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}

