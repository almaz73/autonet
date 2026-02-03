import {formattingPhone} from "@/js/global-func.js"

export let form_profitable = `<div class="bid">
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
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="applyBid()">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="id_">
                <label for="id_"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`

export const form_date_show = `
<div class="look-auto">
    <div class="div" style="margin-top: -73px;">
        <h2>Записаться <br> на <span style="color: var(--color-red)">осмотр</span> автомобиля</h2>
        <div class="address"></div>
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
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="lookAuto()"> 
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

export const podbor_bid = `
<div class="div form333">
        <h2>Заявка на <span style="color: var(--color-red)">автоподбор</span></h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
                  
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="email" placeholder="E-mail">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="podbor_bid_f(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="v3">
                <label for="v3"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>`

export const podbor_bid_1_2 = `
<div class="title form333" style="text-align: left;">
            Оставьте заявку на <strong>подбор</strong> автомобиля
        </div>
        <div>
            <div class="block S  form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>

            <div class="block S  form__modal--group">
                <div class="form__group">
                  <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>

            <div class="block S  form__modal--group">
                <div class="form__group form__group--label">
                    <input name="email" placeholder="E-mail">
                </div>
            </div>
          
            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>
            <div class="form__modal--button">
                <button class="page__btn page__btn--current f-9" onclick="podbor_bid_f(this)">
                  <span>Отправить заявку</span>
                </button>
            </div>
            <div class="modal__personal">
                <input type="checkbox" id="dd1">
                <label for="dd1">
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>

        </div>`