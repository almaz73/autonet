import{d as f,G as y,H as h,I as v,h as b}from"./main-Cz0YbF_F.js";/* empty css                        *//* empty css                */function g(){let i=document.querySelector("comb"),e={Город:h};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",a(e.Город.value);let s=i.dataset.placeholder,t=e[s];if(t){let n=t.map(l=>'<div data-parent="'+s+'">'+l+"</div>");i.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${t.value||s}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${n.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(l){let o="Город",c=l.srcElement.innerText;e[o].value=c,a(e[o].value),document.querySelector(".big-comb__placeholder").innerText=c,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=c,document.querySelector(".big-comb__input").blur()});function a(n){let l=document.querySelector(".big-combo");l&&l.blur(),setTimeout(()=>u(n))}}function u(i){let e="";p(!1);let s;i?s=v.filter(t=>t.city===i):s=v,s.forEach((t,a)=>{let n=`
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
                      <input type="checkbox" id="d${a}">
                    </label>
                    <div class="check text"><label for="d${a}">Отправляя данные, вы даете согласие на обработку
                        персональных <a href="/privacy-policy/" target="_blank">данных</a> в соответствии с политикой&nbsp;конфиденциальности.</label>
                    </div>
                </div>
                <button class="vacansyButton"  onclick="sendResume('fff${a}')"
                        class="uk-button a-button-add a-button-warning ng-scope punch-button">
                    Отправить отклик
                </button>
            </div>
        </div>`;e+=`<div class="vacancy_item fff${a}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${t.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${b(t.salary)} ₽</span>
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
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,p(!0)}function p(i){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px",i?e.querySelector(".fst_desc").addEventListener("click",a):e.querySelector(".fst_desc").removeEventListener("click",a);function a(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=t+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function _(){u(),document.querySelectorAll(".vacancy_item").forEach(i=>{i.classList.remove("expanded");const s=i.querySelector(".fst_desc").offsetHeight;i.style.maxHeight=s+"px"})}window.addEventListener("DOMContentLoaded",()=>{g(),u(),window.addEventListener("resize",_);function i(){console.log(0),document.querySelectorAll('[name="resume"]').forEach(s=>{s.addEventListener("change",function(){const t=this.closest(".details").querySelector(".filePlace");this.files&&this.files[0]&&t&&(t.textContent=this.files[0].name,s.parentNode.parentNode.style.border="",s.parentNode.style.border="")})})}setTimeout(i,500),window.sendResume=function(e){const s=document.querySelector(`.${e} .capctha-div`),t=document.querySelector(`.${e} [name="fio"]`),a=document.querySelector(`.${e} [name="city"]`),n=document.querySelector(`.${e} [name="phone"]`),l=document.querySelector(`.${e} [name="email"]`),o=document.querySelector(`.${e} [name="text"]`),c=document.querySelector(`.${e} [name="resume"]`),m=document.querySelector(`.${e} [type="checkbox"]`);if(e==="generalForm"){const d=document.querySelector(".modal__error");d.style.display=m.checked?"none":"block"}if(c&&!c.files[0]&&(e==="generalForm"?c.parentNode.parentNode.style.border="1px solid red":c.parentNode.style.border="1px solid red"),f([s,t,a,n,m]))return!1;if(c&&!c.files[0])return sendMessage("Прикрепите файл с резюме","warning");let r={fio:t.value,phone:n.value,resume:c&&c.files[0]};a&&a.value&&(r.city=a.value),o&&o.value&&(r.aboutYourself=o.value),l&&l.value&&(r.email=l.value),y(r).then(d=>{d&&d.ok?sendMessage("Ваше сообщение успешно получено!"):sendMessage("Сервер вакансию не принял","error")})}});
