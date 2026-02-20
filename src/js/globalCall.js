import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


let globalcall = document.querySelector('.global-call')
let right_panel_content = document.querySelector('#right_panel_content')
globalcall.addEventListener('click', () => { // авезжпеь панель
    openRightPanel()
    right_panel_content.innerHTML = constructorForm('globC',
        ['name*', 'phone*'],
        'sendBid',
        'Отправить заявку',
        'Заказать звонок'
    )
    initCaptcha()
})

/** Для кнопки с меню Обратный звонок и для Отдельного авто */
window.sendBid = function (fName) {
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const email = document.querySelector(`.${fName} [name="email"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const brand = document.querySelector(`.${fName} [name="brand"]`)
    const model = document.querySelector(`.${fName} [name="model"]`)
    const year = document.querySelector(`.${fName} [name="year"]`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox"]`)
    const button = document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    const params = {
        type: 1,
        name: name.value,
        phone: phone.value,
        email: email && email.value,
        city: city && city.value,
        brand: brand && brand.value,
        model: model && model.value,
        year: year && year.value,

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


initCaptcha()

/** для промо-акций */
window.sendBidPromo = function () {
    const capcthadiv = document.querySelector(`.capctha-div`)
    const name = document.querySelector(`[name="name"]`)
    const year = document.querySelector(`[name="year"]`)
    const checkbox = document.querySelector(`[type="checkbox"]`)
    const button = document.querySelector(`button`)

    if (checkFormFields([capcthadiv, name, checkbox])) return false

    const params = {
        type: 16,
        name: name.value,
        year: year.value,
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}