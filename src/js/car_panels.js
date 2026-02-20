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
    const capcthadiv = document.querySelector('.look-auto .capctha-div')
    const name = document.querySelector('.look-auto [name="name"]')
    const year = document.querySelector('.look-auto [name="year"]')
    const email = document.querySelector('.look-auto [name="email"]')
    const checkbox = document.querySelector('.look-auto [type="checkbox"]')
    const button = document.querySelector('.look-auto button')


    if (checkFormFields([capcthadiv, name, year, email, checkbox])) return false

    const params = {
        type: 14,
        name: name.value,
        email: email && email.value,
        year: year.value
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.look-auto .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}

window.applyBid = function () {
    const capcthadiv = document.querySelector('.bid .capctha-div')
    const name = document.querySelector('.bid  [name="name"]')
    const phone = document.querySelector('.bid  [name="phone"]')
    const city = document.querySelector('.bid [name="city"]')
    const brand = document.querySelector('.bid [name="brand"]')
    const model = document.querySelector('.bid [name="model"]')
    const year = document.querySelector('.bid [name="year"]')
    const checkbox = document.querySelector('.bid [type="checkbox"]')
    const button = document.querySelector('.bid button')

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    const params = {
        type: 3,
        name: name.value,
        phone: phone.value,
        city: city.value,
        brand: brand.value,
        model: model.value,
        year: year.value
    }
    showPreloader(true, button)
    api_postEmail(params).then(res => {
        if (res) {
            setTimeout(() => sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.bid .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}