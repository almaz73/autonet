import{j as l,k as o,t as u,s as v}from"./main-ClrmKEgs.js";function c(s,t){let r="";t&&s.sort((e,i)=>e.city>i.city?1:-1);let n="";return s.forEach(e=>{let i=e.city.slice(0,1);t&&i!==n&&(r+=`<div class="letter">${i}</div>`,n=i),r+=`
        <div class="contact_p"  style="background: url(${e.url})">
            <div class="contact__flex">
                <div class="city">${e.city}</div>
                <div class="address">
                    <a href="javascript:openMap('${e.map}')">
                        ${e.address}
                    </a>
                </div>
                <div class="phone">
                    <a href="tel:${e.tel}">${e.tel}</a>
                </div>
                
                <div  class="navi">
                    <button onclick="openPhoto('${e.url}')">Фото</button>
                    <button onclick="openMap('${e.map}')">Карта</button>
                </div>

                <div class="subname">
                    Режим работы
                </div>
                <div>
                    ${e.days}                    
                </div>
            </div>
        </div>`}),r}document.querySelector("#currentCity");document.addEventListener("DOMContentLoaded",()=>{let s=document.querySelector("#search-field");s&&s.addEventListener("input",()=>{let i=s.value.toLowerCase(),a=l.filter(d=>d.city.toLowerCase().includes(i));a.length?t.innerHTML=c(a,"withAlphabet"):t.innerHTML="Такой город не найден."});let t=document.querySelector("#dealers");t&&(t.innerHTML=c(l,"withAlphabet"));let r=document.querySelector("#punkts");r&&(r.innerHTML=c(o));let n=document.querySelector("#tyres");n&&(n.innerHTML=c(u));let e=document.querySelector("#services");e&&(e.innerHTML=c(v))});
