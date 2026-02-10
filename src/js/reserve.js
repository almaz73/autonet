import {emailValidate, simplePhone, getUrlParam} from "@/js/global-func.js"
import {api_postCallToSell} from "@/js/API-base/apibase.js";
import {sendMessage} from "@/js/sendMessage.js";

window.emailValidate = emailValidate

document.addEventListener('DOMContentLoaded', () => {
    const fio = document.querySelector('[placeholder="Имя"]')
    const tel = document.querySelector('[placeholder="Телефон"]')
    const email = document.querySelector('[placeholder="E-mail"]')
    const button = document.querySelector('button.but_red')
    const personal_agree = document.querySelector('#personal_agree')
    const capcthadiv = document.querySelector(`.capctha-div`)
    const modal__error = document.querySelector('.modal__error')
    const id = getUrlParam('id');
    const name = getUrlParam('name');
    const h3_place = document.querySelector('#h3-place')
    h3_place.innerHTML = `Вы бронируете автомобиль: <a href="/cars/car.html?id=${id}" target="_blank">${name}</a>`

    button.addEventListener('click', save)

    function check() {
        let err = false
        if (!fio.value) {
            err = true;
            fio.style.background = 'pink'
        } else fio.style.background = ''

        if (!tel.value || simplePhone(tel.value).length > 1 && simplePhone(tel.value).length < 11) {
            tel.style.background = 'pink'
            sendMessage('Телефон не правильный, \nожидается 11 символов', 'warning')
            err = true
        } else tel.style.background = ''

        if (!capcthadiv.classList.contains('checked')) {
            capcthadiv.style.border = '1px solid red';
            err = true
        }

        if (!email.value) {
            err = true;
            email.style.background = 'pink'
        } else email.style.background = ''

        if (!personal_agree.checked) {
            err = true;
            modal__error.style.display = 'block'
        } else modal__error.style.display = 'none'

        if (emailValidate(email.value)) {
            err = true
        }

        return err
    }

    function save() {
        if (check()) return false

        let parans = {
            name: fio.value,
            phone: tel.value,
            email: email.value,
            id: id
        }
        api_postCallToSell(parans).then(res => {
            if (res && res.ok) {
                sendMessage('Бронирование успешно отправлено')
                button.disabled = true
                button.style.opacity = .5
            } else {
                sendMessage('Ошибка при отправки запроса', 'warning')
                button.disabled = true
                button.style.opacity = .5
            }
        })
    }
})

