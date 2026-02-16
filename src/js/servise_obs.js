import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, initSubField, simplePhone} from "@/js/global-func.js";
import {api_postCallToSell} from "@/js/apibase.js";


document.addEventListener('DOMContentLoaded', () => {
    let stateForrm1 = document.querySelector('.formBlock.v1')

    stateForrm1.innerHTML = constructorForm('st1',
        ['name*', 'phone*', 'city*', 'select'],
        'send_obsl',
        'Отправить заявку',
        'Оставьте заявку на <span class="red">техосмотр</span> автомобиля'
    )


    let stateForrm2 = document.querySelector('.formBlock.v2')
    stateForrm2.innerHTML = constructorForm('st2',
        ['name*', 'phone*', 'city*', 'select'],
        'send_obsl',
        'Отправить заявку',
        'Оставьте заявку на <span class="red">техосмотр</span> автомобиля'
    )

    initCaptcha()
    initSubField()

    let apply_bid = document.querySelector('.apply_bid')
    apply_bid.addEventListener('click', () => {
        openRightPanel()

        right_panel_content.innerHTML = constructorForm('v3',
            ['name*', 'phone*', 'city*', 'select'],
            'send_obsl',
            'Отправить заявку',
            'Оставьте заявку на <span class="red">техосмотр</span> автомобиля'
        )
        initCaptcha()
        initSubField()
    })

})

window.send_obsl = function (fName) {
    let capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    let checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)
    let name = document.querySelector(`.${fName} [name="name"]`)
    let phone = document.querySelector(`.${fName} [name="phone"]`)
    let city = document.querySelector(`.${fName} [name="city"]`)
    let brand = document.querySelector(`.${fName} [name="brand"]`)
    let model = document.querySelector(`.${fName} [name="model"]`)
    let year = document.querySelector(`.${fName} [name="year"]`)
    let select = document.querySelector(`.${fName} [name="select"]`)


    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        form: '/services/servisnoe-obsluzhivanie/',
        // description: 'Сервисное обслуживание, техосмотр по перечню услуг',
        text: JSON.stringify({
            name: name.value,
            phone: phone.value,
            city: city.value,
            select: select.value
        })
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) sendMessage('Заявка оптарвлена')
        else sendMessage('Сервер не принял', 'error')
    })
}

