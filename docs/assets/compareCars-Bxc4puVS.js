import{h as y}from"./main-DzZIxVIP.js";window.addCompare=function(r){let t=window.compareCars.find(l=>l.id===r),e=n(),a=t;t.images&&(a.images=t.images[0]);let s=document.querySelector("#compareId_"+r),o=s.classList.contains("chosen"),i=e.find(l=>l.id===r);o?(s.classList.remove("chosen"),e=e.filter(l=>l.id!==a.id)):(s.classList.add("chosen"),i||e.push(a)),localStorage.setItem("ComparedCars",JSON.stringify(e)),c(e)};function n(){let r=localStorage.getItem("ComparedCars");return r?r=JSON.parse(r):r=[],r}function c(r){let t=document.querySelector("#compareCount");t&&r.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+r.length,t.style.display="flex"):t&&(t.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(r){let t=n();if(r?t=t.filter(e=>e.id!==r):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),c(t),A(t),!t.length){let e=document.querySelector(".compare-clear");e&&(e.style.display="none")}};function A(r){let t=r||n();if(c(t),t.forEach(e=>{let a=document.querySelector("#compareId_"+e.id);a&&a.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let e=document.querySelector("#compare-field"),a="",s="",o="",i="",l="",m="",f="",p="",u="",E="",$="",g="",T="",C="",h="",I="";t.forEach(d=>{a+=`<td><a href="javascript:deleteCar('${d.id}')">Удалить</a></td>`,s+=`<td><a href="/cars/car.html?id=${d.id}"><img src="${d.images}" alt=""></a></td>`,o+=`<td><a href="/cars/car.html?id=${d.id}">"${d.brand} ${d.model}</a></td>`,i+=`<td>${y(d.price)} руб.</td>`,d.milleage&&(l+=`<td>${y(d.milleage)||""} км</td>`),m+=`<td>${d.yearReleased||""}</td>`,f+=`<td>${d.color||""}</td>`,p+=`<td>${d.engineCapacity||""}</td>`,u+=`<td>${d.engineType||""}</td>`,E+=`<td>${d.enginePower||""}</td>`,$+=`<td>${d.gearboxType||""}</td>`,g+=`<td>${d.driveType||""}</td>`,T+=`<td>${d.bodyType||""}</td>`,C+=`<td>${d.fullAddress||""}</td>`,h+=`<td>${d.brand||""}</td>`,I+=`<td>${d.model||""}</td>`}),e.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${a}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${s}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${o}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${i}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${l}
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
                ${h}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${I}
            </tr>`,t.length||(e.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function P(){let r=!1,t,e=document.querySelector(".bx_compare");e&&(e.addEventListener("mousedown",s=>{r=!0,t=s.clientX,s.preventDefault()}),e.addEventListener("mousemove",s=>{r&&(e.scrollBy(t-s.clientX,0),t=s.clientX)}),e.addEventListener("mouseup",()=>r=!1)),A();let a=document.querySelector("#preload_getList");a&&(a.style.display="none")}window.dblCompare=function(){location.href="/personal/list-compared/"};location.href.includes("list-compared")&&P();export{P as i};
