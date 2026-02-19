import{d as y,G as u,H as h,I as b,J as p,h as g}from"./main-BeN3p0xK.js";/* empty css                        *//* empty css                */function _(){let i=document.querySelector("comb"),e={Город:b};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",s(e.Город.value);let a=i.dataset.placeholder,t=e[a];if(t){let n=t.map(l=>'<div data-parent="'+a+'">'+l+"</div>");i.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${t.value||a}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${n.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(l){let o="Город",c=l.srcElement.innerText;e[o].value=c,s(e[o].value),document.querySelector(".big-comb__placeholder").innerText=c,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=c,document.querySelector(".big-comb__input").blur()});function s(n){let l=document.querySelector(".big-combo");l&&l.blur(),setTimeout(()=>m(n))}}function m(i){let e="";f(!1);let a;i?a=p.filter(t=>t.city===i):a=p,a.forEach((t,s)=>{let n=`
<div class="request_vac">
            <div class="ttl_a">Откликнуться на вакансию</div>
            <div class="smForm" id="lettleForm">
                <div class="details"><input placeholder="Ваше имя *" required name="fio"></div>
                <div class="details"><input placeholder="Телефон *" required name="phone" oninput="formattingPhone(this)"></div>
                <div class="details"><input placeholder="Эл. почта" name="email"></div>
                <div class="details">
                <span class="fileLabel">
                    <input placeholder="Резюме *" type="file" name="resume" accept=".doc, .docx, .odt, .pdf, .rtf, .tex, .wpd">
                    Резюме
                    <span class="filePlace"> Выберите файйл </span>
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
        </div>`;e+=`<div class="vacancy_item fff${s}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${t.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${g(t.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="content">
            ${document.body.offsetWidth>992?n:""}
            <div class="detail">
               ${t.content}
            </div>
           ${document.body.offsetWidth>992?"":n}
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,f(!0)}function f(i){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px",i?e.querySelector(".fst_desc").addEventListener("click",s):e.querySelector(".fst_desc").removeEventListener("click",s);function s(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=t+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function x(){m(),document.querySelectorAll(".vacancy_item").forEach(i=>{i.classList.remove("expanded");const a=i.querySelector(".fst_desc").offsetHeight;i.style.maxHeight=a+"px"})}window.addEventListener("DOMContentLoaded",()=>{_(),m(),window.addEventListener("resize",x);function i(){console.log(0),document.querySelectorAll('[name="resume"]').forEach(a=>{a.addEventListener("change",function(){const t=this.closest(".details").querySelector(".filePlace");this.files&&this.files[0]&&t&&(t.textContent=this.files[0].name,a.parentNode.parentNode.style.border="",a.parentNode.style.border="")})})}setTimeout(i,500),window.sendResume=function(e){const a=document.querySelector(`.${e} .capctha-div`),t=document.querySelector(`.${e} [name="fio"]`),s=document.querySelector(`.${e} [name="city"]`),n=document.querySelector(`.${e} [name="phone"]`),l=document.querySelector(`.${e} [name="email"]`),o=document.querySelector(`.${e} [name="text"]`),c=document.querySelector(`.${e} [name="resume"]`),v=document.querySelector(`.${e} [type="checkbox"]`);if(e==="generalForm"){const d=document.querySelector(".modal__error");d.style.display=v.checked?"none":"block"}if(c&&!c.files[0]&&(e==="generalForm"?c.parentNode.parentNode.style.border="1px solid red":c.parentNode.style.border="1px solid red"),y([a,t,s,n,v]))return!1;if(c&&!c.files[0])return u("Прикрепите файл с резюме","warning");let r={fio:t.value,phone:n.value,resume:c&&c.files[0]};s&&s.value&&(r.city=s.value),o&&o.value&&(r.aboutYourself=o.value),l&&l.value&&(r.email=l.value),h(r).then(d=>{d&&d.ok?u("Ваше сообщение успешно получено!"):u("Сервер вакансию не принял","error")})}});
