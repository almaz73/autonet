import"./main-9YYWY_M_.js";const n=[{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"}],l=[{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Астрахань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Екатеринбург",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Ижевск",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Саратов",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"},{city:"Оренбург",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"88005001156",days:"ПН-ВС с 9:00 до 21:00"}];let i,y,p;i=y=p=n;function c(r,a){let e="";a&&r.sort((t,s)=>t.city>s.city?1:-1);let o="";return r.forEach(t=>{let s=t.city.slice(0,1);a&&s!==o&&(e+=`<div class="letter">${s}</div>`,o=s),e+=`
        <div class="contact_p"  style="background: url(${t.url})">
            <div class="contact__flex">
                <div class="city">${t.city}</div>
                <div class="address">
                    <a href="javascript:void(0);" data-point="${t.coords}">
                        ${t.address}
                    </a>
                </div>
                <div class="phone">
                    <a href="tel:${t.tel}">${t.tel}</a>
                </div>

                <div class="subname">
                    Режим работы
                </div>
                <div>
                    ${t.days}                    
                </div>
            </div>
        </div>`}),e}document.addEventListener("DOMContentLoaded",()=>{let r=document.querySelector("#search-field");r.addEventListener("input",()=>{let u=r.value.toLowerCase(),d=l.filter(h=>h.city.toLowerCase().includes(u));d.length?e.innerHTML=c(d,"withAlphabet"):e.innerHTML="Не найдено."});let a=document.querySelector("#currentCity");a.innerHTML=c(n);let e=document.querySelector("#dealers");e.innerHTML=c(l,"withAlphabet");let o=document.querySelector("#punkts");o.innerHTML=c(i);let t=document.querySelector("#tyres");t.innerHTML=c(y);let s=document.querySelector("#services");s.innerHTML=c(p)});
