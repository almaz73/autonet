import {initCaptcha} from "@/js/captcha.js";
import {message} from "@/js/message.js";
import {checkFormFields} from "@/js/global-func.js"
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
                    <input size="25" placeholder="Ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Телефон *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Город">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Марка">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Модель">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Год выпуска">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label> Нажав кнопку «Отправить заявку» я даю согласие на обработку
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
        else message('Проблема сервера', 'error')
    })
}