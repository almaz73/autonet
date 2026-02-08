import{E as f,m as r,F as h,f as b}from"./main-DF3ZcoVK.js";/* empty css                        */function g(){let a=document.querySelector("comb"),e={Город:["Все","Альметьевск","Казань","Набережные Челны","Нижнекамск","Стерлитамак"]};e.Город.value=localStorage.getItem("selectedCity"),n(e.Город.value);let s=a.dataset.placeholder,t=e[s];if(t){let i=t.map(l=>'<div data-parent="'+s+'">'+l+"</div>");a.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${t.value||s}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${i.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(l){let o="Город",c=l.srcElement.innerText;e[o].value=c,n(e[o].value),document.querySelector(".big-comb__placeholder").innerText=c,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=c,document.querySelector(".big-comb__input").blur()});function n(i){console.log("!!!selectedCity val = ",i)}}function p(){let a="";v(!1),h.forEach((e,s)=>{let t=`
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
        </div>`;a+=`<div class="vacancy_item fff${s}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${e.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${b(e.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="content">
            ${document.body.offsetWidth>992?t:""}
            <div class="detail">
               ${e.content}
            </div>
           ${document.body.offsetWidth>992?"":t}
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=a,v(!0)}function v(a){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px",a?e.querySelector(".fst_desc").addEventListener("click",n):e.querySelector(".fst_desc").removeEventListener("click",n);function n(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=t+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function _(){p(),document.querySelectorAll(".vacancy_item").forEach(a=>{a.classList.remove("expanded");const s=a.querySelector(".fst_desc").offsetHeight;a.style.maxHeight=s+"px"})}window.addEventListener("DOMContentLoaded",()=>{g(),p(),window.addEventListener("resize",_);const a=document.querySelector('.generalForm [name="resume"]'),e=document.querySelector("#fN");a.addEventListener("change",function(t){this.files&&this.files[0]?e.textContent=this.files[0].name:e.textContent="Загрузить файл"});function s(t,n,i){let l=!1;return t.value?t.style.border="":(t.style.border="1px solid red",r("Не заполнено поле ФИО","warning"),l=!0),n.value?n.style.border="":(n.style.border="1px solid red",r("Не заполнен Телефон","warning"),l=!0),i.checked?i.parentNode.style.border="":(i.parentNode.style.border="1px solid red",r("Вы должны дать согласие на обработку персональных данных","warning"),l=!0),l}window.sendResume=function(t){const n=document.querySelector(`.${t} [name="fio"]`),i=document.querySelector(`.${t} [name="city"]`),l=document.querySelector(`.${t} [name="phone"]`),o=document.querySelector(`.${t} [name="email"]`),c=document.querySelector(`.${t} [name="text"]`),u=document.querySelector(' [name="resume"]'),m=document.querySelector(`.${t} [type="checkbox"]`);if(t==="generalForm"){const d=document.querySelector(".modal__error");d.style.display=m.checked?"none":"block"}if(s(n,l,m))return!1;let y={fullName:n.value,phone:l.value,email:o&&o.value,city:i&&i.value,aboutYourself:c&&c.value,resume:u&&u.files[0]};f(y).then(d=>{d&&d.ok?r("Ваше сообщение успешно получено!"):r("Сервер не принял","error")})}});
