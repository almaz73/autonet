import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, formattingPhone, simplePhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/API-base/apibase.js";

window.formattingPhone = formattingPhone

document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*','phone*','city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Запишитесь на <span class="red">бесплатную диагностику</span> АКПП'
    )


    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm2.innerHTML = constructorForm('st2',
        ['name*','phone*','city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Запишитесь на <span class="red">бесплатную диагностику</span> АКПП'
    )

    initCaptcha()
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
        phone: simplePhone(phone.value),
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

