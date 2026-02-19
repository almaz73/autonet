import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js"

/***** выезжающая правая маленькая панель *****/
let right_panel_content = document.querySelector('#right_panel_content')
let select_show_date = document.querySelectorAll('.select_show_date')
let profitable = document.querySelectorAll('.profitable')
let addr = document.querySelector('.main__card-product--top .address')


select_show_date && select_show_date.forEach((el, ind) => {
    el.addEventListener('click', () => {
        openRightPanel()

        right_panel_content.innerHTML = constructorForm('vv' + ind,
            ['name*', 'phone*', 'email'],
            'sendBid',
            'Отправить заявку',
            'Записаться  на <span class="red">осмотр</span> автомобиля '
        )

        let address = document.querySelector(' .form__group')
        let h3 = document.querySelector(' h3')
        const newElement = document.createElement('br');
        h3.after(`Адрес: ${addr.innerHTML} `, newElement)
        address.before(newElement)
        initCaptcha()
    })
})

profitable && profitable.forEach((el, ind) => {
    el.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('vv' + ind,
            ['name*', 'phone*', 'city', 'brand', 'model', 'year'],
            'sendBid',
            'Отправить заявку',
            'Заявка на <span class="red">выкуп</span>'
        )
        initCaptcha()
    })
})


window.lookAuto = function () {
    let capcthadiv = document.querySelector('.look-auto .capctha-div')
    let name = document.querySelector('.look-auto [name="name"]')
    let year = document.querySelector('.look-auto [name="year"]')
    let email = document.querySelector('.look-auto [name="email"]')
    let checkbox = document.querySelector('.look-auto [type="checkbox" ]')


    if (checkFormFields([capcthadiv, name, year, email, checkbox])) return false

    let params = {
        type: 14,
        name: name.value,
        email: email.value,
        year: year.value
    }

    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.look-auto .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
    })
}

window.applyBid = function () {
    let capcthadiv = document.querySelector('.bid .capctha-div')
    let name = document.querySelector('.bid  [name="name"]')
    let phone = document.querySelector('.bid  [name="phone"]')
    let city = document.querySelector('.bid [name="city"]')
    let brand = document.querySelector('.bid [name="brand"]')
    let model = document.querySelector('.bid [name="model"]')
    let year = document.querySelector('.bid [name="year"]')
    let checkbox = document.querySelector('.bid [type="checkbox" ]')

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    let params = {
        type: 3,
        name: name.value,
        phone: phone.value,
        city: city.value,
        brand: brand.value,
        model: model.value,
        year: year.value
    }
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.bid .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
    })
}