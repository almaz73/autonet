import{I as S,J as y,h as L}from"./main-DWFtbTbq.js";/* empty css                        *//* empty css                */function w(){let i=document.querySelector("comb"),e={Город:S};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",o(e.Город.value);let c=i.dataset.placeholder,t=e[c];if(t){let s=t.map(l=>'<div data-parent="'+c+'">'+l+"</div>");i.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${t.value||c}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${s.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(l){let r="Город",n=l.srcElement.innerText;e[r].value=n,o(e[r].value),document.querySelector(".big-comb__placeholder").innerText=n,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=n,document.querySelector(".big-comb__input").blur()});function o(s){let l=document.querySelector(".big-combo");l&&l.blur(),setTimeout(()=>v(s))}}function v(i){let e="";p(!1);let c;i?c=y.filter(t=>t.city===i):c=y,c.forEach((t,o)=>{e+=`<div class="vacancy_item fff${o}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${t.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${L(t.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="admin-edit" style="float: right">
            <button onclick="edit (${t.id})">Редактировать</button>
            <button onclick="copy (${t.id})">Копировать</button>
            <button onclick="deleteVacancy (${t.id})">Удалить</button>
        </div>
            
        <div class="content">
            <div class="detail">
               ${t.content}
            </div>
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,p(!0)}function p(i){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px",i?e.querySelector(".fst_desc").addEventListener("click",o):e.querySelector(".fst_desc").removeEventListener("click",o);function o(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=t+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function q(){v(),document.querySelectorAll(".vacancy_item").forEach(i=>{i.classList.remove("expanded");const c=i.querySelector(".fst_desc").offsetHeight;i.style.maxHeight=c+"px"})}window.addEventListener("DOMContentLoaded",()=>{w(),v();const i=document.querySelector('[name="vacancyNamw"]'),e=document.querySelector(".big-comb__placeholder"),c=document.querySelector('[name="salary"]'),t=document.querySelector('[name="text0"]');document.querySelector('[name="text1"]'),document.querySelector('[name="text2"]'),document.querySelector('[name="text3"]');const o=document.querySelector("#addBt");window.addEventListener("resize",q);function s(n,d,u){let a=!1;return n.value?n.style.border="":(n.style.border="1px solid red",sendMessage("Не заполнено поле Вакансия","warning"),a=!0),d.value?d.style.border="":(d.style.border="1px solid red",sendMessage("Не заполнено поле Зарплата","warning"),a=!0),t.value?t.parentNode.style.border="":(u.parentNode.style.border="1px solid red",sendMessage("Не заполнено поле Условия","warning"),a=!0),a}window.saveVacancy=function(){if(s(i,c,t))return!1;let n={vacancyNamw:i.value,city:e.innerHTML,salary:c.value,text0:t.value};console.log("params",n)};let l=document.querySelector(".editor");o.addEventListener("click",()=>{r()});function r(n,d){l.classList.toggle("edit"),n&&l.classList.add("edit");let u=document.querySelector("#placeCity"),a={id:0};if(n&&(a=y.find(f=>f.id===n)),a.id){var m=document.createElement("html");m.innerHTML=a.content,window.DDD=m.innerHTML,m.querySelectorAll("ul").forEach((g,x)=>{let b=g.querySelectorAll("li"),_="";b.forEach((h,H)=>{_+=`${h.innerHTML}
`}),console.log(" В разработке  ")}),i.value=a.vacancyName,c.value=a.salary}u.innerHTML=n?a.city:document.querySelector(".big-comb__placeholder").innerHTML,o.scrollIntoView({behavior:"smooth",block:"start"})}window.edit=function(n){r(n)},window.copy=function(n){r(n)},window.deleteVacancy=function(n){confirm("Вы действительно хотите удалить выбранную выбранную?")?console.log("Элемент удален"):console.log("Удаление отменено")}});
