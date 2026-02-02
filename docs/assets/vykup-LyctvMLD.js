import{i as d}from"./main-CPRaK-1U.js";/* empty css                     *//* empty css                *//* empty css                   *//* empty css                          */import"./swiper-starter-Bjhk_3sq.js";document.addEventListener("DOMContentLoaded",()=>{let i=document.querySelector("#right_panel_content"),e=document.querySelector(".apply_bid"),r=document.querySelector(".order_buy"),o=`<div>
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

</div>`;e.addEventListener("click",()=>{openRightPanel(),i.innerHTML=o,d()}),r.addEventListener("click",()=>{openRightPanel(),i.innerHTML=o,d()})});
