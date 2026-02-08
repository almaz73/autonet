import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, formattingPhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js";

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*','city', 'price',  'year',],
        'sendBid',
        'Отправить заявку',
        ' ТУТ НУЖНО СВОЮ ФОРМУ С КАЛБКУЛЯТОРМ ДЕЛАТЬ'
    )
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*','phone*','city', 'price',  'year',],
        'sendBid',
        'Отправить заявку',
        'Заявка на <span class="red">автокредит </span>'
    )

    initCaptcha()

    // let right_panel_content = document.querySelector('#right_panel_content')
    // let apply_bid = document.querySelector('.apply_bid')
    // apply_bid.addEventListener('click', ()=>{
    //     openRightPanel()
    //     right_panel_content.innerHTML = form_profitable
    //     right_panel_content.querySelector('[name="year"]').style.display='none'
    //     initCaptcha()
    // })
})


window.sendBid = function (fName) {
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
        city: city.value,
        price: price.value,
        year: year.value,
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}

