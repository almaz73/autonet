import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.vv1')
    let stateForrm2 = document.querySelector('.formBlock.vv2')
    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*', 'city*', 'brand', 'model', 'year'],
        'sendBid',
        'Отправить заявку',
        'Оценить <span class="red">автомобиль</span>'
    )
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city*', 'brand', 'model', 'year'],
        'sendBid',
        'Отправить заявку',
        'Оценить <span class="red">автомобиль</span>'
    )

    initCaptcha()


    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')
    let order_buy = document.querySelector('.order_buy')


    order_buy.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('v1',
            ['name*', 'phone*', 'city*', 'brand', 'model', 'year'],
            'sendBid',
            'Отправить заявку',
            'Оценить <span class="red">автомобиль</span>'
        )
        initCaptcha()
    })

    apply_bid.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = constructorForm('v2',
            ['name*', 'phone*', 'city*', 'brand', 'model', 'year'],
            'sendBid',
            'Отправить заявку',
            'Оценить <span class="red">автомобиль</span>'
        )
        initCaptcha()
    })


})

window.sendBid = function (fName) {
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const brand = document.querySelector(`.${fName} [name="brand"]`)
    const model = document.querySelector(`.${fName} [name="model"]`)
    const year = document.querySelector(`.${fName} [name="year"]`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox"]`)
    const button = document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    const params = {
        // form: '/services/vykup/',
        // description: ' Страница продать. Заказывают Оценку авто',
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
            document.querySelector(`.${fName} .formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        }
        showPreloader(false, button)
    })
}

