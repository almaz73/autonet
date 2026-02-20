import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, constructorForm, initSubField} from "@/js/global-func.js";
import {api_postEmail} from "@/js/apibase.js";


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
    const capcthadiv = document.querySelector(`.${fName} .capctha-div`)
    const checkbox = document.querySelector(`.${fName} [type="checkbox" ]`)
    const name = document.querySelector(`.${fName} [name="name"]`)
    const phone = document.querySelector(`.${fName} [name="phone"]`)
    const city = document.querySelector(`.${fName} [name="city"]`)
    const selection = document.querySelector(`.${fName} [name="selection"]`)
    const button =  document.querySelector(`.${fName} button`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    const params = {
        // form: '/services/servisnoe-obsluzhivanie/',
        // description: 'Сервисное обслуживание, техосмотр по перечню услуг',
        type: 13,
        name: name.value,
        phone: phone.value,
        city: city.value,
        selection: selection.value
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

