import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, formattingPhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js";

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*','city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Заявка на ремонт <span class="red">двигателя</span>'
    )

    stateForrm2.innerHTML = constructorForm('st2',
        ['name*','phone*','city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Заявка на ремонт <span class="red">двигателя</span>'
    )
    initCaptcha()

    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')
    apply_bid.addEventListener('click', ()=>{
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('v3',
            ['name*','phone*','city*', 'brand', 'model'],
            'sendBid',
            'Отправить заявку',
            'Запишитесь на ремонт')
        initCaptcha()
    })
})


window.sendBid = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let brand = document.querySelector(`.${fName} [name="brand"]`)
    let model = document.querySelector(`.${fName} [name="model"]`)
    let year = document.querySelector(`.${fName} [name="year"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        name: name.value,
        phone: phone.value,
        city: city.value,
        brand: brand.value,
        model: model.value,
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}

