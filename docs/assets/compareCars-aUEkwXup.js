import{f as y}from"./global-func-BLfbnEIy.js";window.addCompare=function(r){let t=window.compareCars.find(o=>o.id===r),e=n(),s=t;s.images=t.images[0];let a=document.querySelector("#compareId_"+r),l=a.classList.contains("chosen"),i=e.find(o=>o.id===r);l?(a.classList.remove("chosen"),e=e.filter(o=>o.id!==s.id)):(a.classList.add("chosen"),i||e.push(s)),localStorage.setItem("ComparedCars",JSON.stringify(e)),c(e)};function n(){let r=localStorage.getItem("ComparedCars");return r?r=JSON.parse(r):r=[],r}function c(r){let t=document.querySelector("#compareCount");t&&r.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+r.length,t.style.display="flex"):t&&(t.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(r){let t=n();if(r?t=t.filter(e=>e.id!==r):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),c(t),A(t),!t.length){let e=document.querySelector(".compare-clear");e&&(e.style.display="none")}};function A(r){let t=r||n();if(c(t),t.forEach(e=>{let s=document.querySelector("#compareId_"+e.id);s&&s.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let e=document.querySelector("#compare-field"),s="",a="",l="",i="",o="",m="",f="",p="",u="",E="",$="",g="",T="",C="",I="",h="";t.forEach(d=>{s+=`<td><a href="javascript:deleteCar('${d.id}')">Удалить</a></td>`,a+=`<td><a href="${d.href}"><img src="${d.images}" alt=""></a></td>`,l+=`<td><a href="/cars/car.html?id=${d.id}">"${d.brand} ${d.model}</a></td>`,i+=`<td>${y(d.price)} руб.</td>`,d.milleage&&(o+=`<td>${y(d.milleage)||""} км</td>`),m+=`<td>${d.yearReleased||""}</td>`,f+=`<td>${d.color||""}</td>`,p+=`<td>${d.engineCapacity||""}</td>`,u+=`<td>${d.engineType||""}</td>`,E+=`<td>${d.enginePower||""}</td>`,$+=`<td>${d.gearboxType||""}</td>`,g+=`<td>${d.driveType||""}</td>`,T+=`<td>${d.bodyType||""}</td>`,C+=`<td>${d.fullAddress||""}</td>`,I+=`<td>${d.brand||""}</td>`,h+=`<td>${d.model||""}</td>`}),e.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${s}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${a}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${l}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${i}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${o}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${m}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${f}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${p}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${u}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${E}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${$}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${g}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${T}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${C}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${I}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${h}
            </tr>`,t.length||(e.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function P(){let r=!1,t,e=document.querySelector(".bx_compare");e&&(e.addEventListener("mousedown",a=>{r=!0,t=a.clientX,a.preventDefault()}),e.addEventListener("mousemove",a=>{r&&(e.scrollBy(t-a.clientX,0),t=a.clientX)}),e.addEventListener("mouseup",()=>r=!1)),A();let s=document.querySelector("#preload_getList");s&&(s.style.display="none")}window.dblCompare=function(){location.href="/personal/list-compared/"};location.href.includes("list-compared")&&P();export{P as i};
