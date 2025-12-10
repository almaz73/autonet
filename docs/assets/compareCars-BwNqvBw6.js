window.addCompare=function(e){let t=window.currentCars.find(a=>a.id===e),d=c(),r={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},l=document.querySelector("#compareId_"+e),n=l.classList.contains("chosen"),i=d.find(a=>a.id===e);n?(l.classList.remove("chosen"),d=d.filter(a=>a.id!==r.id)):(l.classList.add("chosen"),i||d.push(r)),localStorage.setItem("ComparedCars",JSON.stringify(d)),f(d)};function c(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function f(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=c();if(e?t=t.filter(d=>d.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),f(t),P(t),!t.length){let d=document.querySelector(".compare-clear");d.style.display="none"}};function P(e){let t=e||c();if(f(t),t.forEach(d=>{let r=document.querySelector("#compareId_"+d.id);r&&r.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let d=document.querySelector("#compare-field"),r="",l="",n="",i="",a="",m="",p="",u="",E="",$="",h="",C="",I="",T="",A="",O="";t.forEach(s=>{let o=s.info.split(",");r+=`<td><a href="javascript:deleteCar(${s.id})">Удалить</a></td>`,l+=`<td><a href="${s.href}"><img src="${s.photo}" alt=""></a></td>`,n+=`<td><a href="${s.href}">"${s.name.slice(0,-5)}</a></td>`,i+=`<td>${s.price} руб.</td>`,a+=`<td>${o[0]}</td>`,m+=`<td>${s.name.slice(-5)}</td>`,p+="<td></td>",u+=`<td>${o[1]}</td>`,E+=`<td>${o[4]}</td>`,$+="<td></td>",h+="<td></td>",C+=`<td>${o[3]}</td>`,I+=`<td>${o[2]}</td>`,T+=`<td>${s.address.split(",")[0]}</td>`,A+=`<td>${s.name.split(" ")[0]}</td>`,O+=`<td>${s.name.split(" ")[1]}</td>`}),d.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${r}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${l}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${n}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${i}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${a}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${m}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${p}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${u}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${E}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${$}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${h}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${C}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${I}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${T}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${A}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${O}
            </tr>`,t.length||(d.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{P();let e=!1,t,d=document.querySelector(".bx_compare");d&&(d.addEventListener("mousedown",r=>{e=!0,t=r.clientX,r.preventDefault()}),d.addEventListener("mousemove",r=>{e&&(d.scrollBy(t-r.clientX,0),t=r.clientX)}),d.addEventListener("mouseup",()=>e=!1))});window.dblCompare=function(){location.href="/personal/list-compared/"};
