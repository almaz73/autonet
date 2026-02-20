import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*', 'city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Запишитесь на <span class="red">бесплатную диагностику</span> АКПП'
    )


    let stateForrm2 = document.querySelector('.formBlock.v2')

    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city*', 'brand', 'model'],
        'sendBid',
        'Отправить заявку',
        'Запишитесь на <span class="red">бесплатную диагностику</span> АКПП'
    )

    initCaptcha()
})

window.sendBid = function (fName) {
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const brand = document.querySelector(`.${fName} [name="brand"]`)
    const model = document.querySelector(`.${fName} [name="model"]`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)
    const button =  document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, city, phone, checkbox])) return false

    const params = {
        // form: '/services/remont-akpp/',
        // description: 'АКПП ',
        type: 12,
        name: name.value,
        phone: phone.value,
        city: city.value,
        brand: brand.value,
        model: model.value
    }
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

