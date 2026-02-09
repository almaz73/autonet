import{F as cities,G as vacanciesList,f as formatterShowPrice,m as message}from"./main-BsHeSP0w.js";/* empty css                        *//* empty css                */function initChangeCity(){let e=document.querySelector("comb"),t={Город:cities};t.Город.value=localStorage.getItem("selectedCity"),t.Город.value="Казань",n(t.Город.value);let a=e.dataset.placeholder,i=t[a];if(i){let l=i.map(c=>'<div data-parent="'+a+'">'+c+"</div>");e.innerHTML=`<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${i.value||a}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${l.join("")}
        </div>
    </div>`}document.querySelector(".big_comb__items").addEventListener("click",function(c){let s="Город",o=c.srcElement.innerText;t[s].value=o,n(t[s].value),document.querySelector(".big-comb__placeholder").innerText=o,document.querySelector(".big-comb__placeholder").classList.add("bold"),document.querySelector(".big-comb__input").value=o,document.querySelector(".big-comb__input").blur()});function n(l){let c=document.querySelector(".big-combo");c&&c.blur(),setTimeout(()=>initVacancies(l))}}function initVacancies(e){let t="";initListeners(!1);let a=[];e?a=vacanciesList.filter(i=>i.city===e):a=vacanciesList,a.forEach((i,n)=>{t+=`<div class="vacancy_item fff${n}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${i.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${formatterShowPrice(i.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="admin-edit" style="float: right">
            <button onclick="edit (${i.id})">Редактировать</button>
            <button onclick="copy (${i.id})">Копировать</button>
            <button onclick="deleteVacancy (${i.id})">Удалить</button>
        </div>
            
        <div class="content">
            <div class="detail">
               ${i.content}
            </div>
        </div>
    </div>`}),document.querySelector("#vacancyPlace").innerHTML=t,initListeners(!0)}function initListeners(e){document.querySelectorAll(".vacancy_item").forEach(t=>{const i=t.querySelector(".fst_desc").offsetHeight;t.style.maxHeight=i+"px",e?t.querySelector(".fst_desc").addEventListener("click",n):t.querySelector(".fst_desc").removeEventListener("click",n);function n(){t.classList.contains("expanded")?(t.classList.remove("expanded"),t.style.maxHeight=i+"px"):(t.classList.add("expanded"),t.style.maxHeight="inherit")}})}function toSmall(){initVacancies(),document.querySelectorAll(".vacancy_item").forEach(e=>{e.classList.remove("expanded");const a=e.querySelector(".fst_desc").offsetHeight;e.style.maxHeight=a+"px"})}window.addEventListener("DOMContentLoaded",()=>{initChangeCity(),initVacancies();const vacancyNamw=document.querySelector('[name="vacancyNamw"]'),city=document.querySelector(".big-comb__placeholder"),salary=document.querySelector('[name="salary"]'),text0=document.querySelector('[name="text0"]');document.querySelector('[name="text1"]'),document.querySelector('[name="text2"]'),document.querySelector('[name="text3"]');const addBt=document.querySelector("#addBt");window.addEventListener("resize",toSmall);function check(e,t,a){let i=!1;return e.value?e.style.border="":(e.style.border="1px solid red",message("Не заполнено поле Вакансия","warning"),i=!0),t.value?t.style.border="":(t.style.border="1px solid red",message("Не заполнено поле Зарплата","warning"),i=!0),text0.value?text0.parentNode.style.border="":(a.parentNode.style.border="1px solid red",message("Не заполнено поле Условия","warning"),i=!0),i}window.saveVacancy=function(){if(check(vacancyNamw,salary,text0))return!1;let e={vacancyNamw:vacancyNamw.value,city:city.innerHTML,salary:salary.value,text0:text0.value};console.log("params",e)};let editor=document.querySelector(".editor");addBt.addEventListener("click",()=>{openEdit()});function openEdit(id,isCopy){editor.classList.toggle("edit"),id&&editor.classList.add("edit");let placeCity=document.querySelector("#placeCity"),vacancy={id:0};if(id&&(vacancy=vacanciesList.find(e=>e.id===id)),vacancy.id){var htmlEl=document.createElement("html");htmlEl.innerHTML=vacancy.content,window.DDD=htmlEl.innerHTML;let ul=htmlEl.querySelectorAll("ul");ul.forEach((item,ind)=>{let li=item.querySelectorAll("li"),alltx="";li.forEach((e,t)=>{alltx+=`${e.innerHTML}
`}),eval("text"+ind).value=alltx}),vacancyNamw.value=vacancy.vacancyName,salary.value=vacancy.salary}placeCity.innerHTML=id?vacancy.city:document.querySelector(".big-comb__placeholder").innerHTML,addBt.scrollIntoView({behavior:"smooth",block:"start"})}window.edit=function(e){openEdit(e)},window.copy=function(e){openEdit(e)},window.deleteVacancy=function(e){confirm("Вы действительно хотите удалить выбранную выбранную?")?console.log("Элемент удален"):console.log("Удаление отменено")}});
