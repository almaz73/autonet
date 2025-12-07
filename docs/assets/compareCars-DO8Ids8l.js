window.addCompare=function(e){let t=window.currentCars.find(a=>a.id===e),d=c(),s={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},i=document.querySelector("#compareId_"+e),o=i.classList.contains("chosen"),n=d.find(a=>a.id===e);o?(i.classList.remove("chosen"),d=d.filter(a=>a.id!==s.id)):(i.classList.add("chosen"),n||d.push(s)),localStorage.setItem("ComparedCars",JSON.stringify(d)),p(d)};function c(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function p(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteCar=function(e){let t=c();t=t.filter(d=>d.id!==e),localStorage.setItem("ComparedCars",JSON.stringify(t)),p(t),P(t)};function P(e){let t=e||c();if(p(t),t.forEach(d=>{let s=document.querySelector("#compareId_"+d.id);s&&s.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let d=document.querySelector("#compare-field"),s="",i="",o="",n="",a="",f="",m="",E="",$="",h="",I="",T="",u="",C="",A="",O="";t.forEach(r=>{let l=r.info.split(",");s+=`<td><a href="javascript:deleteCar(${r.id})">Удалить</a></td>`,i+=`<td><a href="${r.href}"><img src="${r.photo}" alt=""></a></td>`,o+=`<td><a href="${r.href}">"${r.name.slice(0,-5)}</a></td>`,n+=`<td>${r.price} руб.</td>`,a+=`<td>${l[0]}</td>`,f+=`<td>${r.name.slice(-5)}</td>`,m+="<td></td>",E+=`<td>${l[1]}</td>`,$+=`<td>${l[4]}</td>`,h+="<td></td>",I+="<td></td>",T+=`<td>${l[3]}</td>`,u+=`<td>${l[2]}</td>`,C+=`<td>${r.address.split(",")[0]}</td>`,A+=`<td>${r.name.split(" ")[0]}</td>`,O+=`<td>${r.name.split(" ")[1]}</td>`}),d.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${s}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${i}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${o}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${n}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${a}
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
               ${E}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${$}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${h}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${I}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${T}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${u}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${C}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${A}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${O}
            </tr>`,t.length||(d.innerHTML='<div style="width: 100%;  height: 300px; display: grid; place-items: center;">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{P()});window.dblCompare=function(){location.href="/personal/list-compared/"};
