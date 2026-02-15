import{H as h,G as r,I as b,J as p,h as g}from"./main-dcPIS3_i.js";/* empty css                        *//* empty css                */function _(){let n=document.querySelector("comb"),t={Город:b};t.Город.value=localStorage.getItem("selectedCity"),t.Город.value="Казань",s(t.Город.value);let l=n.dataset.placeholder,e=t[l];if(e){let a=e.map(i=>'<div data-parent="'+l+'">'+i+"</div>");n.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${e.value||l}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${a.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(i){let o="Город",c=i.srcElement.innerText;t[o].value=c,s(t[o].value),document.querySelector(".big-comb__placeholder").innerText=c,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=c,document.querySelector(".big-comb__input").blur()});function s(a){console.log("!!!selectedCity val = ",a);let i=document.querySelector(".big-combo");i&&i.blur(),setTimeout(()=>u(a))}}function u(n){console.log(4444);let t="";y(!1);let l;n?l=p.filter(e=>e.city===n):l=p,l.forEach((e,s)=>{let a=`
<div class="request_vac">
            <div class="ttl_a">Откликнуться на вакансию</div>
            <div class="smForm" id="lettleForm">
                <div class="details"><input placeholder="Ваше имя" name="fio"></div>
                <div class="details"><input placeholder="Телефон" name="phone" oninput="formattingPhone(this)"></div>
                <div class="details"><input placeholder="Эл. почта" name="email"></div>
                <div class="details">
                <span class="fileLabel">
                    <input placeholder="Резюме" type="file" name="resume">
                    Резюме
                </span>
                </div>
                <div class="details">
                  <textarea placeholder="Дополнительная информация и контактные данные" rows="5" name="text"></textarea>
                </div>
                <div class="details checkbox-line">
                    <label class="cont">
                      <input type="checkbox" id="d${s}">
                    </label>
                    <div class="check text"><label for="d${s}">Отправляя данные, вы даете согласие на обработку
                        персональных <a href="/privacy-policy/" target="_blank">данных</a> в соответствии с политикой&nbsp;конфиденциальности.</label>
                    </div>
                </div>
                <button class="vacansyButton"  onclick="sendResume('fff${s}')"
                        class="uk-button a-button-add a-button-warning ng-scope punch-button">
                    Отправить отклик
                </button>
            </div>
        </div>`;t+=`<div class="vacancy_item fff${s}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${e.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${g(e.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="content">
            ${document.body.offsetWidth>992?a:""}
            <div class="detail">
               ${e.content}
            </div>
           ${document.body.offsetWidth>992?"":a}
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=t,y(!0)}function y(n){document.querySelectorAll(".vacancy_item").forEach(t=>{const e=t.querySelector(".fst_desc").offsetHeight;t.style.maxHeight=e+"px",n?t.querySelector(".fst_desc").addEventListener("click",s):t.querySelector(".fst_desc").removeEventListener("click",s);function s(){t.classList.contains("expanded")?(t.classList.remove("expanded"),t.style.maxHeight=e+"px"):(t.classList.add("expanded"),t.style.maxHeight="inherit")}})}function x(){u(),document.querySelectorAll(".vacancy_item").forEach(n=>{n.classList.remove("expanded");const l=n.querySelector(".fst_desc").offsetHeight;n.style.maxHeight=l+"px"})}window.addEventListener("DOMContentLoaded",()=>{_(),u(),window.addEventListener("resize",x);const n=document.querySelector('.generalForm [name="resume"]'),t=document.querySelector("#fN");n.addEventListener("change",function(){this.files&&this.files[0]?t.textContent=this.files[0].name:t.textContent="Загрузить файл"});function l(e,s,a){let i=!1;return e.value?e.style.border="":(e.style.border="1px solid red",r("Не заполнено поле ФИО","warning"),i=!0),s.value?s.style.border="":(s.style.border="1px solid red",r("Не заполнен Телефон","warning"),i=!0),a.checked?a.parentNode.style.border="":(a.parentNode.style.border="1px solid red",r("Вы должны дать согласие на обработку персональных данных","warning"),i=!0),i}window.sendResume=function(e){const s=document.querySelector(`.${e} [name="fio"]`),a=document.querySelector(`.${e} [name="city"]`),i=document.querySelector(`.${e} [name="phone"]`),o=document.querySelector(`.${e} [name="email"]`),c=document.querySelector(`.${e} [name="text"]`),m=document.querySelector(`.${e} [name="resume"]`),v=document.querySelector(`.${e} [type="checkbox"]`);if(e==="generalForm"){const d=document.querySelector(".modal__error");d.style.display=v.checked?"none":"block"}if(l(s,i,v))return!1;let f={fullName:s.value,phone:i.value,email:o&&o.value,city:a&&a.value,aboutYourself:c&&c.value,resume:m&&m.files[0]};h(f).then(d=>{d&&d.ok?r("Ваше сообщение успешно получено!"):r("Сервер не принял","error")})}});
