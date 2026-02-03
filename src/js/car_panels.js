import {initCaptcha} from "@/js/captcha.js";
import {message} from "@/js/message.js";
import {checkFormFields, formattingPhone} from "@/js/global-func.js"
import {api_postCallToSell} from "@/js/API-base/apibase.js";

/***** выезжающая правая маленькая панель *****/
let right_panel_content = document.querySelector('#right_panel_content')
let select_show_date = document.querySelectorAll('.select_show_date')
let profitable = document.querySelectorAll('.profitable')
let addr = document.querySelector('.main__card-product--top .address')


let form_date_show = `<div>
    <div class="div" style="margin-top: -73px;">
        <h2>Записаться <br> на <span style="color: var(--color-red)">осмотр</span> автомобиля</h2>
        <div class="address">Адрес: ${addr.innerHTML}</div>
        <br>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Как ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="year" placeholder="Год выпуска">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="email" placeholder="Е-mail">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div n1"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="applyBid()"> 
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="n1">
                <label for="n1"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`
let form_profitable = `<div>
    <div class="div" style="margin-top: -120px;">
        <h2>Заявка на <span style="color: var(--color-red)">выкуп</span></h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="city" placeholder="Город">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="bramd" placeholder="Марка">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="model" placeholder="Модель">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="year" placeholder="Год выпуска">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div n2"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="applyBid2()">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="n2">
                <label for="n2"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`
select_show_date && select_show_date.forEach(el => {
    el.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = form_date_show
        initCaptcha()
    })
})

profitable && profitable.forEach(el => {
    el.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = form_profitable
        initCaptcha()
    })
})



window.applyBid = function () {
    let capcthadiv = document.querySelector('.capctha-div.n1')
    let name = document.querySelector('[name="name"]')
    let year = document.querySelector('[name="year"]')
    let email = document.querySelector('[name="email"]')
    let checkbox = document.querySelector('#n1')

    if (checkFormFields([capcthadiv, name, year, email, checkbox])) return false

    let params = {
        name: name.value,
        email: email.value,
        year: year.value,
    }
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}

window.applyBid2 = function () {
    let capcthadiv = document.querySelector('.capctha-div.n2')
    let name = document.querySelector('[name="name"]')
    let phone = document.querySelector('[name="phone"]')
    let city = document.querySelector('[name="city"]')
    let brand = document.querySelector('[name="brand"]')
    let model = document.querySelector('[name="model"]')
    let year = document.querySelector('[name="year"]')
    let checkbox = document.querySelector('#n2')

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    let params = {
        name: name.value,
        year: year.value,
    }
    console.log('params', params)
    api_postCallToSell(params).then(res => {
        if (res && res.ok) message('Заявка оптарвлена')
        else message('Сервер не принял', 'error')
    })
}