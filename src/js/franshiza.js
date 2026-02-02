import {initCaptcha} from "@/js/captcha.js";

console.log('franshiza.js ----')

document.addEventListener('DOMContentLoaded', () => {
    let question_to_boss = document.querySelector('.question_to_boss')
    let count_business_plan = document.querySelector('.count_business_plan')
    let right_panel_content = document.querySelector('#right_panel_content')
    let who_can_become_partner = document.querySelector('.who_can_become_partner')

    let question_boss_form= `<div class="promo-detail-call__wrap">
    <div class="div">
        <h3>Задать <span style="color: var(--color-red)">вопрос</span></h3>

        <p>Просто оставьте свои контактные данные и мы сами вам перезвоним!</p>
    </div>


    <div class="div promo-form">
        <form action="/" name="popup_form" enctype="multipart/form-data" method="POST" class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Имя *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input placeholder="Ваш телефон *">
                </div>
            </div>
           <div class="form__modal--group">
                <div class="form__group">
                    <input placeholder="Сообщение *">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current">
                <span> Отправить</span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </form>
    </div>

</div>`
    let count_busines_for = `<div class="promo-detail-call__wrap">
    <div class="div">
        <h3><span style="color: var(--color-red)">Получите расчет</span> прибыли автосалона АВТОСЕТЬ.РФ в своем городе </h3>
    </div>


    <div class="div promo-form">
        <form action="/" name="popup_form" enctype="multipart/form-data" method="POST" class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Имя *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input placeholder="Ваш телефон *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input placeholder="Город">
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
        </form>
    </div>

</div>`

    question_to_boss && question_to_boss.addEventListener('click', (id) => {
        openRightPanel()
        right_panel_content.innerHTML = question_boss_form
        initCaptcha()
    })
    count_business_plan.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = count_busines_for
        initCaptcha()
    })
    who_can_become_partner.addEventListener('click', () => {
        openRightPanel()
        right_panel_content.innerHTML = count_busines_for
        initCaptcha()
    })
})

