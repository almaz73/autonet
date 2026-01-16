function c(r){return parseInt(r).toLocaleString("ru-RU")}function S(r){let e=[];return r&&r.forEach(t=>{let d=t.milleage+" км, ";t.engineCapacity&&(d+=t.engineCapacity),t.gearboxType&&(d+=" "+t.gearboxType),t.enginePower&&(d+=" ("+t.enginePower+"&nbsp;л.с)"),t.bodyType&&(d+=", "+t.bodyType),d+=", "+t.driveType,t.engineType&&(d+=", "+t.engineType);let i=c(parseInt(parseInt(t.price.replace(/ /g,""))/90.12));e.push({address:t.fullAddress,id:t.id,name:t.brand+" "+t.model,href:"/cars/car.html?id="+t.id,price:c(t.price),fromPerMonth:i,info:d,photos:t.images})}),e}window.addCompare=function(r){let e=window.compareCars.find(s=>s.id===r),t=l(),d=e;d.images=e.images[0];let i=document.querySelector("#compareId_"+r),n=i.classList.contains("chosen"),o=t.find(s=>s.id===r);n?(i.classList.remove("chosen"),t=t.filter(s=>s.id!==d.id)):(i.classList.add("chosen"),o||t.push(d)),localStorage.setItem("ComparedCars",JSON.stringify(t)),p(t)};function l(){let r=localStorage.getItem("ComparedCars");return r?r=JSON.parse(r):r=[],r}function p(r){let e=document.querySelector("#compareCount");e&&r.length?(e.innerHTML='<img src="/icons/car-icon_b.svg">'+r.length,e.style.display="flex"):e&&(e.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(r){let e=l();if(r?e=e.filter(t=>t.id!==r):e=[],localStorage.setItem("ComparedCars",JSON.stringify(e)),p(e),P(e),!e.length){let t=document.querySelector(".compare-clear");t&&(t.style.display="none")}};function P(r){let e=r||l();if(p(e),e.forEach(t=>{let d=document.querySelector("#compareId_"+t.id);d&&d.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let t=document.querySelector("#compare-field"),d="",i="",n="",o="",s="",f="",m="",u="",g="",T="",y="",E="",$="",h="",C="",I="";e.forEach(a=>{d+=`<td><a href="javascript:deleteCar('${a.id}')">Удалить</a></td>`,i+=`<td><a href="${a.href}"><img src="${a.images}" alt=""></a></td>`,n+=`<td><a href="/cars/car.html?id=${a.id}">"${a.brand} ${a.model}</a></td>`,o+=`<td>${c(a.price)} руб.</td>`,a.milleage&&(s+=`<td>${c(a.milleage)||""} км</td>`),f+=`<td>${a.yearReleased||""}</td>`,m+=`<td>${a.color||""}</td>`,u+=`<td>${a.engineCapacity||""}</td>`,g+=`<td>${a.engineType||""}</td>`,T+=`<td>${a.enginePower||""}</td>`,y+=`<td>${a.gearboxType||""}</td>`,E+=`<td>${a.driveType||""}</td>`,$+=`<td>${a.bodyType||""}</td>`,h+=`<td>${a.fullAddress||""}</td>`,C+=`<td>${a.brand||""}</td>`,I+=`<td>${a.model||""}</td>`}),t.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${d}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${i}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${n}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${o}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${s}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${f}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${m}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${u}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${g}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${T}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${y}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${E}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${$}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${h}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${C}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${I}
            </tr>`,e.length||(t.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function A(){let r=!1,e,t=document.querySelector(".bx_compare");t&&(t.addEventListener("mousedown",i=>{r=!0,e=i.clientX,i.preventDefault()}),t.addEventListener("mousemove",i=>{r&&(t.scrollBy(e-i.clientX,0),e=i.clientX)}),t.addEventListener("mouseup",()=>r=!1)),P();let d=document.querySelector("#preload_getList");d&&(d.style.display="none")}window.dblCompare=function(){location.href="/personal/list-compared/"};location.href.includes("list-compared")&&A();export{c as f,A as i,S as p};
