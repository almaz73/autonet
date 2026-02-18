import{d as h,G as u,H as b,I as g,J as p,h as _}from"./main-WwxMF_g9.js";/* empty css                        *//* empty css                */function S(){let s=document.querySelector("comb"),e={Город:g};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",i(e.Город.value);let t=s.dataset.placeholder,a=e[t];if(a){let c=a.map(n=>'<div data-parent="'+t+'">'+n+"</div>");s.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${a.value||t}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${c.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(n){let o="Город",l=n.srcElement.innerText;e[o].value=l,i(e[o].value),document.querySelector(".big-comb__placeholder").innerText=l,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=l,document.querySelector(".big-comb__input").blur()});function i(c){console.log("!!!selectedCity val = ",c);let n=document.querySelector(".big-combo");n&&n.blur(),setTimeout(()=>m(c))}}function m(s){let e="";f(!1);let t;s?t=p.filter(a=>a.city===s):t=p,t.forEach((a,i)=>{let c=`
<div class="request_vac">
            <div class="ttl_a">Откликнуться на вакансию</div>
            <div class="smForm" id="lettleForm">
                <div class="details"><input placeholder="Ваше имя *" required name="fio"></div>
                <div class="details"><input placeholder="Телефон *" required name="phone" oninput="formattingPhone(this)"></div>
                <div class="details"><input placeholder="Эл. почта" name="email"></div>
                <div class="details">
                <span class="fileLabel">
                    <input placeholder="Резюме *" type="file" name="resume">
                    Резюме
<!--                    <span class="filePlace"> Файл выбран </span>-->
                </span>
                </div>
                <div class="details">
                  <textarea placeholder="Дополнительная информация и контактные данные" rows="5" name="text"></textarea>
                </div>
                <div class="details checkbox-line">
                    <label class="cont">
                      <input type="checkbox" id="d${i}">
                    </label>
                    <div class="check text"><label for="d${i}">Отправляя данные, вы даете согласие на обработку
                        персональных <a href="/privacy-policy/" target="_blank">данных</a> в соответствии с политикой&nbsp;конфиденциальности.</label>
                    </div>
                </div>
                <button class="vacansyButton"  onclick="sendResume('fff${i}')"
                        class="uk-button a-button-add a-button-warning ng-scope punch-button">
                    Отправить отклик
                </button>
            </div>
        </div>`;e+=`<div class="vacancy_item fff${i}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${a.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${_(a.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="content">
            ${document.body.offsetWidth>992?c:""}
            <div class="detail">
               ${a.content}
            </div>
           ${document.body.offsetWidth>992?"":c}
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,f(!0)}function f(s){document.querySelectorAll(".vacancy_item").forEach(e=>{const a=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=a+"px",s?e.querySelector(".fst_desc").addEventListener("click",i):e.querySelector(".fst_desc").removeEventListener("click",i);function i(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=a+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function q(){m(),document.querySelectorAll(".vacancy_item").forEach(s=>{s.classList.remove("expanded");const t=s.querySelector(".fst_desc").offsetHeight;s.style.maxHeight=t+"px"})}window.addEventListener("DOMContentLoaded",()=>{S(),m(),window.addEventListener("resize",q);const s=document.querySelector('.generalForm [name="resume"]'),e=document.querySelector("#fN");s.addEventListener("change",function(){this.files&&this.files[0]?e.textContent=this.files[0].name:e.textContent="Загрузить файл"}),window.sendResume=function(t){const a=document.querySelector(`.${t} .capctha-div`),i=document.querySelector(`.${t} [name="fio"]`),c=document.querySelector(`.${t} [name="city"]`),n=document.querySelector(`.${t} [name="phone"]`),o=document.querySelector(`.${t} [name="email"]`),l=document.querySelector(`.${t} [name="text"]`),r=document.querySelector(`.${t} [name="resume"]`),v=document.querySelector(`.${t} [type="checkbox"]`);if(t==="generalForm"){const d=document.querySelector(".modal__error");d.style.display=v.checked?"none":"block"}if(h([a,i,c,n,v]))return!1;if(r&&!r.files[0])return u("Прикрепите файл с резюме","warning");let y={fio:i.value,phone:n.value,email:o&&o.value,city:c&&c.value,aboutYourself:l&&l.value,resume:r&&r.files[0]};b(y).then(d=>{d&&d.ok?u("Ваше сообщение успешно получено!"):u("Сервер не принял","error")})}});
