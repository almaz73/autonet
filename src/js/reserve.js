import {emailValidate, getUrlParam, checkFormFields} from "@/js/global-func.js"
import {api_postEmail} from "@/js/apibase.js";

window.emailValidate = emailValidate

document.addEventListener('DOMContentLoaded', () => {
    const fio = document.querySelector('[name="name"]')
    const phone = document.querySelector('[name="phone"]')
    const email = document.querySelector('[name="email"]')
    const button = document.querySelector('button.but_red')
    const checkbox = document.querySelector(`[type="checkbox" ]`)
    const capcthadiv = document.querySelector(`.capctha-div`)
    const id = getUrlParam('id');
    const name = getUrlParam('name');
    const h3_place = document.querySelector('#h3-place')
    h3_place.innerHTML = `Вы бронируете автомобиль: <a href="/cars/car.html?id=${id}" target="_blank">${name}</a>`

    button.addEventListener('click', save)


    function save() {
        if (checkFormFields([capcthadiv, fio, phone, email, checkbox])) return false

        let parans = {
            type: 2,
            name: fio.value,
            phone: phone.value,
            email: email.value,
            id: id
        }
        api_postEmail(parans).then(res => {
            setTimeout(()=>sendMessage('Ваша заявка успешно отправлена'), 500);
            document.querySelector(`.formBlock`).innerHTML =
                '<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>'
        })
    }
})

