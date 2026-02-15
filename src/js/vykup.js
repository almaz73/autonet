import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/apibase.js";


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
    console.log('fName', fName)

    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let brand = document.querySelector(`.${fName} [name="brand"]`)
    let model = document.querySelector(`.${fName} [name="model"]`)
    let year = document.querySelector(`.${fName} [name="year"]`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        form: '/services/vykup/',
        description: ' Страница продать. Заказывают Оценку авто',
        record: {
            type: 'grade',
            name: name.value,
            phone: phone.value,
            city: city.value,
            brand: brand.value,
            model: model.value,
            year: year.value
        }
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}

