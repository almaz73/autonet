import{d as h,I as b,J as g,K as f,j as _}from"./main-BrdAdoy4.js";/* empty css                        *//* empty css                */function x(){let c=document.querySelector("comb"),e={Город:g};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",a(e.Город.value);let t=c.dataset.placeholder,s=e[t];if(s){let n=s.map(l=>'<div data-parent="'+t+'">'+l+"</div>");c.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${s.value||t}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${n.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(l){let o="Город",i=l.srcElement.innerText;e[o].value=i,a(e[o].value),document.querySelector(".big-comb__placeholder").innerText=i,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=i,document.querySelector(".big-comb__input").blur()});function a(n){let l=document.querySelector(".big-combo");l&&l.blur(),setTimeout(()=>u(n))}}function u(c){let e="";y(!1);let t;c?t=f.filter(s=>s.city===c):t=f,t.forEach((s,a)=>{let n=`
<div class="request_vac">
            <div class="ttl_a">Откликнуться на вакансию</div>
            <div class="smForm fff${a}">
                <div class="details"><input placeholder="Ваше имя *" required name="fio"></div>
                <div class="details"><input placeholder="Телефон *" required name="phone" oninput="formattingPhone(this)"></div>
                <div class="details"><input placeholder="E-mail" name="email"></div>
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
                <div class='details checkbox-line'>
                    <label class="cont">
                      <input type="checkbox" name="agree"  id="ds${a}">
                    </label>
                    <div class="check text"><label for="ds${a}">
                      Согласие на рекламную <a href="/privacy-policy/agreement.html" target="_blank">коммуникацию</a>
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
                <span>${s.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${_(s.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/st/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="content">
            ${document.body.offsetWidth>992?n:""}
            <div class="detail">
               ${s.content}
            </div>
           ${document.body.offsetWidth>992?"":n}
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,y(!0)}function y(c){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc"),s=t&&t.offsetHeight;e.style.maxHeight=s+"px",c?e.querySelector(".fst_desc").addEventListener("click",a):e.querySelector(".fst_desc").removeEventListener("click",a);function a(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=s+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function S(){u(),document.querySelectorAll(".vacancy_item").forEach(c=>{c.classList.remove("expanded");const t=c.querySelector(".fst_desc").offsetHeight;c.style.maxHeight=t+"px"})}window.addEventListener("DOMContentLoaded",()=>{x(),u(),window.addEventListener("resize",S);function c(){console.log(0),document.querySelectorAll('[name="resume"]').forEach(t=>{t.addEventListener("change",function(){const s=this.closest(".details").querySelector(".filePlace");this.files&&this.files[0]&&s&&(s.textContent=this.files[0].name,t.parentNode.parentNode.style.border="",t.parentNode.style.border="")})})}setTimeout(c,500),window.sendResume=function(e){const t=document.querySelector(`.${e} .capctha-div`),s=document.querySelector(`.${e} [name="fio"]`),a=document.querySelector(`.${e} [name="city"]`),n=document.querySelector(`.${e} [name="phone"]`),l=document.querySelector(`.${e} [name="email"]`),o=document.querySelector(`.${e} [name="text"]`),i=document.querySelector(`.${e} [name="resume"]`),m=document.querySelector(`.${e} [type="checkbox"]`),v=document.querySelector(`.${e} [name="agree"]`),p=document.querySelector(`.${e} button`);if(e==="generalForm"){const r=document.querySelector(".modal__error");r.style.display=m.checked?"none":"block"}if(i&&!i.files[0]&&(e==="generalForm"?i.parentNode.parentNode.style.border="1px solid red":i.parentNode.style.border="1px solid red"),h([t,s,a,n,m,v]))return!1;if(i&&!i.files[0])return sendMessage("Прикрепите файл с резюме","warning");let d={fio:s.value,phone:n.value,resume:i&&i.files[0],agree:v.checked};a&&a.value&&(d.city=a.value),o&&o.value&&(d.aboutYourself=o.value),l&&l.value&&(d.email=l.value),showPreloader(!0,p),b(d).then(r=>{if(showPreloader(!1,p),r.error)return sendMessage("Ошибка "+r.error,"error");r&&(setTimeout(()=>sendMessage("Ваше резюме успешно отправлена"),500),document.querySelector(`.${e}`).innerHTML="<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>")})}});
