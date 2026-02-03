import{i as a}from"./main-DDG4M_xQ.js";/* empty css                *//* empty css                */console.log("franshiza.js ----");document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".question_to_boss"),l=document.querySelector(".count_business_plan"),o=document.querySelector("#right_panel_content"),r=document.querySelector(".who_can_become_partner"),s=`<div class="promo-detail-call__wrap">
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

</div>`,i=`<div class="promo-detail-call__wrap">
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

</div>`;e&&e.addEventListener("click",t=>{openRightPanel(),o.innerHTML=s,a()}),l.addEventListener("click",()=>{openRightPanel(),o.innerHTML=i,a()}),r.addEventListener("click",()=>{openRightPanel(),o.innerHTML=i,a()})});
