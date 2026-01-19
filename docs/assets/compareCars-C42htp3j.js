let S=[];function n(r){return parseInt(r).toLocaleString("ru-RU")}function L(r){let e=[];return r&&r.forEach(t=>{let d=n(t.milleage)+" км, ";t.engineCapacity&&(d+=t.engineCapacity),t.gearboxType&&(d+=" "+t.gearboxType),t.enginePower&&(d+=" ("+t.enginePower+"&nbsp;л.с)"),t.bodyType&&(d+=", "+t.bodyType),d+=", "+t.driveType,t.engineType&&(d+=", "+t.engineType);let s=n(parseInt(parseInt(t.price.replace(/ /g,""))/90.12));e.push({address:t.fullAddress,id:t.id,name:t.brand+" "+t.model,href:"/cars/car.html?id="+t.id,price:n(t.price),fromPerMonth:s,info:d,photos:t.images})}),e}window.addCompare=function(r){let e=window.compareCars.find(i=>i.id===r),t=l(),d=e;d.images=e.images[0];let s=document.querySelector("#compareId_"+r),o=s.classList.contains("chosen"),c=t.find(i=>i.id===r);o?(s.classList.remove("chosen"),t=t.filter(i=>i.id!==d.id)):(s.classList.add("chosen"),c||t.push(d)),localStorage.setItem("ComparedCars",JSON.stringify(t)),p(t)};function l(){let r=localStorage.getItem("ComparedCars");return r?r=JSON.parse(r):r=[],r}function p(r){let e=document.querySelector("#compareCount");e&&r.length?(e.innerHTML='<img src="/icons/car-icon_b.svg">'+r.length,e.style.display="flex"):e&&(e.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(r){let e=l();if(r?e=e.filter(t=>t.id!==r):e=[],localStorage.setItem("ComparedCars",JSON.stringify(e)),p(e),P(e),!e.length){let t=document.querySelector(".compare-clear");t&&(t.style.display="none")}};function P(r){let e=r||l();if(p(e),e.forEach(t=>{let d=document.querySelector("#compareId_"+t.id);d&&d.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let t=document.querySelector("#compare-field"),d="",s="",o="",c="",i="",f="",m="",u="",g="",T="",y="",E="",$="",h="",C="",I="";e.forEach(a=>{d+=`<td><a href="javascript:deleteCar('${a.id}')">Удалить</a></td>`,s+=`<td><a href="${a.href}"><img src="${a.images}" alt=""></a></td>`,o+=`<td><a href="/cars/car.html?id=${a.id}">"${a.brand} ${a.model}</a></td>`,c+=`<td>${n(a.price)} руб.</td>`,a.milleage&&(i+=`<td>${n(a.milleage)||""} км</td>`),f+=`<td>${a.yearReleased||""}</td>`,m+=`<td>${a.color||""}</td>`,u+=`<td>${a.engineCapacity||""}</td>`,g+=`<td>${a.engineType||""}</td>`,T+=`<td>${a.enginePower||""}</td>`,y+=`<td>${a.gearboxType||""}</td>`,E+=`<td>${a.driveType||""}</td>`,$+=`<td>${a.bodyType||""}</td>`,h+=`<td>${a.fullAddress||""}</td>`,C+=`<td>${a.brand||""}</td>`,I+=`<td>${a.model||""}</td>`}),t.innerHTML=`
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
                ${o}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${c}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${i}
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
            </tr>`,e.length||(t.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>')}}function A(){let r=!1,e,t=document.querySelector(".bx_compare");t&&(t.addEventListener("mousedown",s=>{r=!0,e=s.clientX,s.preventDefault()}),t.addEventListener("mousemove",s=>{r&&(t.scrollBy(e-s.clientX,0),e=s.clientX)}),t.addEventListener("mouseup",()=>r=!1)),P();let d=document.querySelector("#preload_getList");d&&(d.style.display="none")}window.dblCompare=function(){location.href="/personal/list-compared/"};location.href.includes("list-compared")&&A();export{n as f,S as g,A as i,L as p};
