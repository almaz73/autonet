import {initCaptcha} from "@/js/captcha.js";

document.addEventListener('DOMContentLoaded', () => {
    let right_panel_content = document.querySelector('#right_panel_content')
    let apply_bid = document.querySelector('.apply_bid')

    let form_podbor = `<div>
    <div class="div">
        <h2>Заявка на <span style="color: var(--color-red)">автоподбор</span></h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Телефон *">
                </div>
            </div>
                  
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="E-mail">
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

    apply_bid.addEventListener('click', ()=>{
        openRightPanel()
        right_panel_content.innerHTML = form_podbor
        initCaptcha()
    })
})

