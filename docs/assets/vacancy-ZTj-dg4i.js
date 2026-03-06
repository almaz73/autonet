import{d as h,I as b,J as g,K as p,h as _}from"./main-DKsDwffa.js";/* empty css                        *//* empty css                */function S(){let i=document.querySelector("comb"),e={Город:g};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",a(e.Город.value);let t=i.dataset.placeholder,s=e[t];if(s){let n=s.map(o=>'<div data-parent="'+t+'">'+o+"</div>");i.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${s.value||t}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${n.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(o){let l="Город",c=o.srcElement.innerText;e[l].value=c,a(e[l].value),document.querySelector(".big-comb__placeholder").innerText=c,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=c,document.querySelector(".big-comb__input").blur()});function a(n){let o=document.querySelector(".big-combo");o&&o.blur(),setTimeout(()=>u(n))}}function u(i){let e="";f(!1);let t;i?t=p.filter(s=>s.city===i):t=p,t.forEach((s,a)=>{let n=`
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
                <img src="/red_arrow.svg" loading='lazy' alt=''>
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
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,f(!0)}function f(i){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc"),s=t&&t.offsetHeight;e.style.maxHeight=s+"px",i?e.querySelector(".fst_desc").addEventListener("click",a):e.querySelector(".fst_desc").removeEventListener("click",a);function a(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=s+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function q(){u(),document.querySelectorAll(".vacancy_item").forEach(i=>{i.classList.remove("expanded");const t=i.querySelector(".fst_desc").offsetHeight;i.style.maxHeight=t+"px"})}window.addEventListener("DOMContentLoaded",()=>{S(),u(),window.addEventListener("resize",q);function i(){console.log(0),document.querySelectorAll('[name="resume"]').forEach(t=>{t.addEventListener("change",function(){const s=this.closest(".details").querySelector(".filePlace");this.files&&this.files[0]&&s&&(s.textContent=this.files[0].name,t.parentNode.parentNode.style.border="",t.parentNode.style.border="")})})}setTimeout(i,500),window.sendResume=function(e){const t=document.querySelector(`.${e} .capctha-div`),s=document.querySelector(`.${e} [name="fio"]`),a=document.querySelector(`.${e} [name="city"]`),n=document.querySelector(`.${e} [name="phone"]`),o=document.querySelector(`.${e} [name="email"]`),l=document.querySelector(`.${e} [name="text"]`),c=document.querySelector(`.${e} [name="resume"]`),m=document.querySelector(`.${e} [type="checkbox"]`),y=document.querySelector(`.${e} [name="agree"]`),v=document.querySelector(`.${e} button`);if(e==="generalForm"){const d=document.querySelector(".modal__error");d.style.display=m.checked?"none":"block"}if(c&&!c.files[0]&&(e==="generalForm"?c.parentNode.parentNode.style.border="1px solid red":c.parentNode.style.border="1px solid red"),h([t,s,a,n,m]))return!1;if(c&&!c.files[0])return sendMessage("Прикрепите файл с резюме","warning");let r={fio:s.value,phone:n.value,resume:c&&c.files[0],agree:y.checked};a&&a.value&&(r.city=a.value),l&&l.value&&(r.aboutYourself=l.value),o&&o.value&&(r.email=o.value),showPreloader(!0,v),b(r).then(d=>{d&&(setTimeout(()=>sendMessage("Ваша заявка успешно отправлена"),500),document.querySelector(`.${e}`).innerHTML="<br>Спасибо! Ваша заявка успешно отправлена, в ближайшее время мы выйдем с Вами на связь.<br><br><br>"),showPreloader(!1,v)})}});
