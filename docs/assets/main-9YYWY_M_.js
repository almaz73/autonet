(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=o(n);fetch(n.href,l)}})();let w=document.querySelector(".comb__items"),H=document.querySelector(".comb_field"),U=document.querySelector(".comb__selected"),z=document.querySelector(".footer-city-button a"),Z=document.querySelector(".comb_field img"),B=document.querySelector(".mySwiper"),Q=localStorage.getItem("selectedCity");H&&(U.innerHTML=Q||"Россия",document.addEventListener("click",()=>Y(!1)),H.addEventListener("click",e=>te(e)),w.addEventListener("click",e=>ee(e)));function ee(e){let t=e.target.innerText;if(t.length>30)return!1;U.innerHTML=t,z.innerHTML=t,localStorage.setItem("selectedCity",t)}function te(e){Y(w.style.display!=="block"),e.stopPropagation()}function Y(e){w.style.display=e?"block":"none",Z.style.rotate=e?"180deg":"0deg",B&&(B.style.zIndex=e?-1:0)}let oe=document.querySelector("#innerCity"),g=document.querySelector(".form__modal-place--group input"),ne=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],le=["А","Б","Е","К","М","Н","О","С","Т","У"];function W(e){let t="";le.forEach(o=>{let r=ne.filter(l=>l.slice(0,1)===o),n="";r.forEach(l=>{let c=e&&l.toUpperCase().includes(e)?" class='yel'":"";n+=`<li><a href="javascript:void(0)" onclick="setCity('${l}')"><span ${c}>${l}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${o}</div><ul>${n}</ul></div></div>`}),oe.innerHTML=t}g&&g.addEventListener("input",e=>{W(g.value.toUpperCase())});let x=document.querySelector(".button__burger"),p=document.querySelector(".main-nav.menu"),v=document.querySelector(".button__burger"),u=document.querySelector(".main-nav.cities"),V=document.querySelector(".footer-city-button"),_=document.querySelector(".footer-city-button a"),re=document.querySelector(".comb__selected"),F=document.querySelector(".modal-place__close"),N=document.querySelector(".mySwiper"),s,h=document.querySelector(".main-nav.request"),G=document.querySelector("#closer-fon"),X=document.querySelector(".modal-closer.form");N&&(N.style.zIndex=0);function m(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}x&&x.addEventListener("click",()=>{if(s)return s=!1,u.style.transform="translateX(150vw)",!1;s=p.style.transform!=="none",p.style.transform=s?"none":"translateX(150vw)",m(s),s?(v.classList.add("close"),s=!1):v.classList.remove("close")});V&&V.addEventListener("click",()=>{s=u.style.transform!=="none",s&&(u.style.transform="none",u.style.backgroundColor="white"),m(s),W()});F&&F.addEventListener("click",()=>{u.style.transform="translateX(150vw)",m(!1)});_&&(_.innerHTML=localStorage.getItem("selectedCity")||"Россия",window.setCity=function(e){localStorage.setItem("selectedCity",e),u.style.transform="translateX(150vw)",_.innerHTML=e,re.innerHTML=e,m(!1)});let K=document.querySelector("#cookie-accept"),S=document.querySelector("#cookie-banner"),se=localStorage.getItem("isCoockieBannerShow");!se&&S&&S.classList.add("show");K&&K.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),S.classList.remove("show")});function b(e){h&&(h.style.transform="translateX(150vw)"),u&&(u.style.transform="translateX(150vw)"),p&&(p.style.transform="translateX(150vw)"),v&&v.classList.remove("close"),m(!1),closeChat();let t=document.getElementById("ya_map");t&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=b;document.addEventListener("keydown",e=>e.key==="Escape"&&b());window.sendBid=function(e){console.log(">>>> id = ",e),s=h.style.transform!=="none",s&&(h.style.transform="none"),m(s)};G&&G.addEventListener("click",()=>b());X&&X.addEventListener("click",()=>b());const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let J=document.querySelector(".question_block"),y=document.querySelector(".question_panel .contentedit div"),L=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(J.style.display="block"),L.scrollTo(0,1e4)};window.closeChat=function(e){J.style.display="none"};y&&y.addEventListener("keydown",e=>{e.code==="Enter"&&(L.innerHTML+="<b>-Вы </b>"+y.innerHTML+"<br><br>",L.scrollTo({top:1e4,behavior:"smooth"}),ie(y.innerHTML),setTimeout(()=>y.innerHTML=""))});function ie(e){let r=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(r).then(n=>n.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("abdul");e&&(e.innerHTML=ce)});const ce=`
<div class="abdul abdulLightHor">
        <div class="abdul__block">
            <div class="bulba"></div>
            <div class="abdul__box">
                <div class="abdul__box--name">
                    Руслан Абдулнасыров
                </div>
                <div class="abdul__box--post">
                    Собственник компании АВТОСЕТЬ.РФ
                </div>
                <div class="abdul__box--info">
                <b style="opacity: 0; margin: -4px">А</b>«Я гарантирую качество» 
                
                Пожелания по работе принимаются в 
                <div style="display: inline-flex;direction: initial;float: right">
                    <a href="http://vk.me/avtoset_rf" target="_blank">
                            <span class="icon">
                              <img src="/src/svg/vk_2.svg" alt="" style="width: 16px">
                            </span>
                        <span class="text"> ВКонтакте</span>
                    </a>
                </div>
                </div>
            </div>
        </div>
</div>
`;window.addCompare=function(e){let t=window.currentCars.find(a=>a.id===e),o=E(),r={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},n=document.querySelector("#compareId_"+e),l=n.classList.contains("chosen"),c=o.find(a=>a.id===e);l?(n.classList.remove("chosen"),o=o.filter(a=>a.id!==r.id)):(n.classList.add("chosen"),c||o.push(r)),localStorage.setItem("ComparedCars",JSON.stringify(o)),C(o)};function E(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function C(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=E();if(e?t=t.filter(o=>o.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),C(t),j(t),!t.length){let o=document.querySelector(".compare-clear");o.style.display="none"}};function j(e){let t=e||E();if(C(t),t.forEach(o=>{let r=document.querySelector("#compareId_"+o.id);r&&r.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let o=document.querySelector("#compare-field"),r="",n="",l="",c="",a="",q="",T="",I="",$="",P="",k="",O="",M="",A="",D="",R="";t.forEach(i=>{let f=i.info.split(",");r+=`<td><a href="javascript:deleteCar(${i.id})">Удалить</a></td>`,n+=`<td><a href="${i.href}"><img src="${i.photo}" alt=""></a></td>`,l+=`<td><a href="${i.href}">"${i.name.slice(0,-5)}</a></td>`,c+=`<td>${i.price} руб.</td>`,a+=`<td>${f[0]}</td>`,q+=`<td>${i.name.slice(-5)}</td>`,T+="<td></td>",I+=`<td>${f[1]}</td>`,$+=`<td>${f[4]}</td>`,P+="<td></td>",k+="<td></td>",O+=`<td>${f[3]}</td>`,M+=`<td>${f[2]}</td>`,A+=`<td>${i.address.split(",")[0]}</td>`,D+=`<td>${i.name.split(" ")[0]}</td>`,R+=`<td>${i.name.split(" ")[1]}</td>`}),o.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${r}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${n}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${l}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${c}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${a}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${q}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${T}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${I}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${$}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${P}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${k}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${O}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${M}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${A}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${D}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${R}
            </tr>`,t.length||(o.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{j();let e=!1,t,o=document.querySelector(".bx_compare");o&&(o.addEventListener("mousedown",r=>{e=!0,t=r.clientX,r.preventDefault()}),o.addEventListener("mousemove",r=>{e&&(o.scrollBy(t-r.clientX,0),t=r.clientX)}),o.addEventListener("mouseup",()=>e=!1))});window.dblCompare=function(){location.href="/personal/list-compared/"};
