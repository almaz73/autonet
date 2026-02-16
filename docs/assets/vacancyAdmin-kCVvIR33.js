import{G as L,H as v,h as w,F as y}from"./main-YQ6_D0J1.js";/* empty css                        *//* empty css                */function q(){let i=document.querySelector("comb"),e={Город:L};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",a(e.Город.value);let c=i.dataset.placeholder,t=e[c];if(t){let s=t.map(l=>'<div data-parent="'+c+'">'+l+"</div>");i.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${t.value||c}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${s.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(l){let r="Город",n=l.srcElement.innerText;e[r].value=n,a(e[r].value),document.querySelector(".big-comb__placeholder").innerText=n,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=n,document.querySelector(".big-comb__input").blur()});function a(s){let l=document.querySelector(".big-combo");l&&l.blur(),setTimeout(()=>f(s))}}function f(i){let e="";g(!1);let c=[];i?c=v.filter(t=>t.city===i):c=v,c.forEach((t,a)=>{e+=`<div class="vacancy_item fff${a}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${t.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${w(t.salary)} ₽</span>
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
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,g(!0)}function g(i){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px",i?e.querySelector(".fst_desc").addEventListener("click",a):e.querySelector(".fst_desc").removeEventListener("click",a);function a(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=t+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function x(){f(),document.querySelectorAll(".vacancy_item").forEach(i=>{i.classList.remove("expanded");const c=i.querySelector(".fst_desc").offsetHeight;i.style.maxHeight=c+"px"})}window.addEventListener("DOMContentLoaded",()=>{q(),f();const i=document.querySelector('[name="vacancyNamw"]'),e=document.querySelector(".big-comb__placeholder"),c=document.querySelector('[name="salary"]'),t=document.querySelector('[name="text0"]');document.querySelector('[name="text1"]'),document.querySelector('[name="text2"]'),document.querySelector('[name="text3"]');const a=document.querySelector("#addBt");window.addEventListener("resize",x);function s(n,d,u){let o=!1;return n.value?n.style.border="":(n.style.border="1px solid red",y("Не заполнено поле Вакансия","warning"),o=!0),d.value?d.style.border="":(d.style.border="1px solid red",y("Не заполнено поле Зарплата","warning"),o=!0),t.value?t.parentNode.style.border="":(u.parentNode.style.border="1px solid red",y("Не заполнено поле Условия","warning"),o=!0),o}window.saveVacancy=function(){if(s(i,c,t))return!1;let n={vacancyNamw:i.value,city:e.innerHTML,salary:c.value,text0:t.value};console.log("params",n)};let l=document.querySelector(".editor");a.addEventListener("click",()=>{r()});function r(n,d){l.classList.toggle("edit"),n&&l.classList.add("edit");let u=document.querySelector("#placeCity"),o={id:0};if(n&&(o=v.find(p=>p.id===n)),o.id){var m=document.createElement("html");m.innerHTML=o.content,window.DDD=m.innerHTML,m.querySelectorAll("ul").forEach((b,H)=>{let _=b.querySelectorAll("li"),h="";_.forEach((S,E)=>{h+=`${S.innerHTML}
`}),console.log(" В разработке  ")}),i.value=o.vacancyName,c.value=o.salary}u.innerHTML=n?o.city:document.querySelector(".big-comb__placeholder").innerHTML,a.scrollIntoView({behavior:"smooth",block:"start"})}window.edit=function(n){r(n)},window.copy=function(n){r(n)},window.deleteVacancy=function(n){confirm("Вы действительно хотите удалить выбранную выбранную?")?console.log("Элемент удален"):console.log("Удаление отменено")}});
