import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js"

document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')
    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*', 'city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Оставьте заявку и получите <span class="red">бесплатную замену масла</span><br> в АКПП в подарок!'
    )
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Оставьте заявку и получите <span class="red">бесплатную замену масла в АКПП</span> в подарок!*'
    )

    initCaptcha()

    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')
    apply_bid.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('v3',
            ['name*', 'phone*', 'city*', 'brand', 'model'],
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
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    let params = {
        // form: '/services/zamena-masla/',
        // description: 'ЗХамена масла в подарок',
        type: 7,
        name: name.value,
        phone: phone.value,
        city: city.value,
        brand: brand.value,
        model: model.value
    }
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
    })
}

