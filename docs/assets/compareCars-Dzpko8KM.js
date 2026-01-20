let O=[],S=[];function i(e){return parseInt(e).toLocaleString("ru-RU")}function _(e){let r=[];return e&&e.forEach(t=>{let d=i(t.milleage)+" км, ";t.engineCapacity&&(d+=t.engineCapacity),t.gearboxType&&(d+=" "+t.gearboxType),t.enginePower&&(d+=" ("+t.enginePower+"&nbsp;л.с)"),t.bodyType&&(d+=", "+t.bodyType),d+=", "+t.driveType,t.engineType&&(d+=", "+t.engineType);let s=i(parseInt(parseInt(t.price.replace(/ /g,""))/90.12));r.push({address:t.fullAddress,id:t.id,name:t.brand+" "+t.model,href:"/cars/car.html?id="+t.id,price:i(t.price),fromPerMonth:s,info:d,photos:t.images})}),r}function L(e,r){const t=[2,0,1,1,1,2],d=e%100>4&&e%100<20?2:t[e%10];return r[d]}window.addCompare=function(e){let r=window.compareCars.find(o=>o.id===e),t=l(),d=r;d.images=r.images[0];let s=document.querySelector("#compareId_"+e),n=s.classList.contains("chosen"),c=t.find(o=>o.id===e);n?(s.classList.remove("chosen"),t=t.filter(o=>o.id!==d.id)):(s.classList.add("chosen"),c||t.push(d)),localStorage.setItem("ComparedCars",JSON.stringify(t)),p(t)};function l(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function p(e){let r=document.querySelector("#compareCount");r&&e.length?(r.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,r.style.display="flex"):r&&(r.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let r=l();if(e?r=r.filter(t=>t.id!==e):r=[],localStorage.setItem("ComparedCars",JSON.stringify(r)),p(r),P(r),!r.length){let t=document.querySelector(".compare-clear");t&&(t.style.display="none")}};function P(e){let r=e||l();if(p(r),r.forEach(t=>{let d=document.querySelector("#compareId_"+t.id);d&&d.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let t=document.querySelector("#compare-field"),d="",s="",n="",c="",o="",f="",m="",u="",g="",T="",y="",E="",$="",h="",I="",C="";r.forEach(a=>{d+=`<td><a href="javascript:deleteCar('${a.id}')">Удалить</a></td>`,s+=`<td><a href="${a.href}"><img src="${a.images}" alt=""></a></td>`,n+=`<td><a href="/cars/car.html?id=${a.id}">"${a.brand} ${a.model}</a></td>`,c+=`<td>${i(a.price)} руб.</td>`,a.milleage&&(o+=`<td>${i(a.milleage)||""} км</td>`),f+=`<td>${a.yearReleased||""}</td>`,m+=`<td>${a.color||""}</td>`,u+=`<td>${a.engineCapacity||""}</td>`,g+=`<td>${a.engineType||""}</td>`,T+=`<td>${a.enginePower||""}</td>`,y+=`<td>${a.gearboxType||""}</td>`,E+=`<td>${a.driveType||""}</td>`,$+=`<td>${a.bodyType||""}</td>`,h+=`<td>${a.fullAddress||""}</td>`,I+=`<td>${a.brand||""}</td>`,C+=`<td>${a.model||""}</td>`}),t.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${d}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${s}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${n}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${c}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${o}
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
                ${I}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${C}
            </tr>`,r.length||(t.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function A(){let e=!1,r,t=document.querySelector(".bx_compare");t&&(t.addEventListener("mousedown",s=>{e=!0,r=s.clientX,s.preventDefault()}),t.addEventListener("mousemove",s=>{e&&(t.scrollBy(r-s.clientX,0),r=s.clientX)}),t.addEventListener("mouseup",()=>e=!1)),P();let d=document.querySelector("#preload_getList");d&&(d.style.display="none")}window.dblCompare=function(){location.href="/personal/list-compared/"};location.href.includes("list-compared")&&A();export{S as a,L as d,i as f,O as g,A as i,_ as p};
