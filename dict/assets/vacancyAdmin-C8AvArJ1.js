import{J as h,K as y,j as S}from"./main-BrdAdoy4.js";/* empty css                        *//* empty css                */function L(){let i=document.querySelector("comb"),e={Город:h};e.Город.value=localStorage.getItem("selectedCity"),e.Город.value="Казань",l(e.Город.value);let c=i.dataset.placeholder,t=e[c];if(t){let s=t.map(a=>'<div data-parent="'+c+'">'+a+"</div>");i.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${t.value||c}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${s.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(a){let r="Город",n=a.srcElement.innerText;e[r].value=n,l(e[r].value),document.querySelector(".big-comb__placeholder").innerText=n,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=n,document.querySelector(".big-comb__input").blur()});function l(s){let a=document.querySelector(".big-combo");a&&a.blur(),setTimeout(()=>v(s))}}function v(i){let e="";f(!1);let c;i?c=y.filter(t=>t.city===i):c=y,c.forEach((t,l)=>{e+=`<div class="vacancy_item fff${l}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${t.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${S(t.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/st/red_arrow.svg" loading='lazy' alt=''>
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
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=e,f(!0)}function f(i){document.querySelectorAll(".vacancy_item").forEach(e=>{const t=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=t+"px",i?e.querySelector(".fst_desc").addEventListener("click",l):e.querySelector(".fst_desc").removeEventListener("click",l);function l(){e.classList.contains("expanded")?(e.classList.remove("expanded"),e.style.maxHeight=t+"px"):(e.classList.add("expanded"),e.style.maxHeight="inherit")}})}function w(){v(),document.querySelectorAll(".vacancy_item").forEach(i=>{i.classList.remove("expanded");const c=i.querySelector(".fst_desc").offsetHeight;i.style.maxHeight=c+"px"})}window.addEventListener("DOMContentLoaded",()=>{L(),v();const i=document.querySelector('[name="vacancyNamw"]'),e=document.querySelector(".big-comb__placeholder"),c=document.querySelector('[name="salary"]'),t=document.querySelector('[name="text0"]');document.querySelector('[name="text1"]'),document.querySelector('[name="text2"]'),document.querySelector('[name="text3"]');const l=document.querySelector("#addBt");window.addEventListener("resize",w);function s(n,u,m){let o=!1;return n.value?n.style.border="":(n.style.border="1px solid red",sendMessage("Не заполнено поле Вакансия","warning"),o=!0),u.value?u.style.border="":(u.style.border="1px solid red",sendMessage("Не заполнено поле Зарплата","warning"),o=!0),t.value?t.parentNode.style.border="":(m.parentNode.style.border="1px solid red",sendMessage("Не заполнено поле Условия","warning"),o=!0),o}window.saveVacancy=function(){if(s(i,c,t))return!1;let n={vacancyNamw:i.value,city:e.innerHTML,salary:c.value,text0:t.value};console.log("params",n)};let a=document.querySelector(".editor");l.addEventListener("click",()=>{r()});function r(n,u){a.classList.toggle("edit"),n&&a.classList.add("edit");let m=document.querySelector("#placeCity"),o={id:0};if(n&&(o=y.find(d=>d.id===n)),o.id){const d=document.createElement("html");d.innerHTML=o.content,window.DDD=d.innerHTML,d.querySelectorAll("ul").forEach((p,x)=>{let g=p.querySelectorAll("li"),b="";g.forEach((_,H)=>{b+=`${_.innerHTML}
`}),console.log(" В разработке  ")}),i.value=o.vacancyName,c.value=o.salary}m.innerHTML=n?o.city:document.querySelector(".big-comb__placeholder").innerHTML,l.scrollIntoView({behavior:"smooth",block:"start"})}window.edit=function(n){r(n)},window.copy=function(n){r(n)},window.deleteVacancy=function(n){confirm("Вы действительно хотите удалить выбранную выбранную?")?console.log("Элемент удален"):console.log("Удаление отменено")}});
