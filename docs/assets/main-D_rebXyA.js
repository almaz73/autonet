(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();let S=document.querySelector(".comb__items"),R=document.querySelector(".comb_field"),F=document.querySelector(".comb__selected"),X=document.querySelector(".footer-city-button a"),J=document.querySelector(".comb_field img"),D=document.querySelector(".mySwiper"),j=localStorage.getItem("selectedCity");R&&(F.innerHTML=j||"Россия",document.addEventListener("click",()=>G(!1)),R.addEventListener("click",e=>Z(e)),S.addEventListener("click",e=>z(e)));function z(e){let t=e.target.innerText;if(t.length>30)return!1;F.innerHTML=t,X.innerHTML=t,localStorage.setItem("selectedCity",t)}function Z(e){G(S.style.display!=="block"),e.stopPropagation()}function G(e){S.style.display=e?"block":"none",J.style.rotate=e?"180deg":"0deg",D&&(D.style.zIndex=e?-1:0)}let Q=document.querySelector("#innerCity"),b=document.querySelector(".form__modal-place--group input"),ee=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],te=["А","Б","Е","К","М","Н","О","С","Т","У"];function K(e){let t="";te.forEach(l=>{let r=ee.filter(n=>n.slice(0,1)===l),o="";r.forEach(n=>{let s=e&&n.toUpperCase().includes(e)?" class='yel'":"";o+=`<li><a href="javascript:void(0)" onclick="setCity('${n}')"><span ${s}>${n}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${l}</div><ul>${o}</ul></div></div>`}),Q.innerHTML=t}b&&b.addEventListener("input",e=>{K(b.value.toUpperCase())});let H=document.querySelector(".button__burger"),p=document.querySelector(".main-nav.menu"),h=document.querySelector(".button__burger"),u=document.querySelector(".main-nav.cities"),x=document.querySelector(".footer-city-button"),g=document.querySelector(".footer-city-button a"),oe=document.querySelector(".comb__selected"),V=document.querySelector(".modal-place__close"),B=document.querySelector(".mySwiper"),c;B&&(B.style.zIndex=0);function y(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}H&&H.addEventListener("click",()=>{if(c)return c=!1,u.style.transform="translateX(150vw)",!1;c=p.style.transform!=="none",p.style.transform=c?"none":"translateX(150vw)",y(c),c?(h.classList.add("close"),c=!1):h.classList.remove("close")});x&&x.addEventListener("click",()=>{c=u.style.transform!=="none",c&&(u.style.transform="none",u.style.backgroundColor="white"),y(c),K()});V&&V.addEventListener("click",()=>{u.style.transform="translateX(150vw)",y(!1)});g&&(g.innerHTML=localStorage.getItem("selectedCity")||"Россия",window.setCity=function(e){localStorage.setItem("selectedCity",e),u.style.transform="translateX(150vw)",g.innerHTML=e,oe.innerHTML=e,y(!1)});let N=document.querySelector("#cookie-accept"),_=document.querySelector("#cookie-banner"),ne=localStorage.getItem("isCoockieBannerShow");!ne&&_&&_.classList.add("show");N&&N.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),_.classList.remove("show")});function U(e){u&&(u.style.transform="translateX(150vw)"),p&&(p.style.transform="translateX(150vw)"),h&&h.classList.remove("close"),y(!1),closeChat();let t=document.getElementById("ya_map");t&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=U;document.addEventListener("keydown",e=>{e.key==="Escape"&&U(!1)});const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let Y=document.querySelector(".question_block"),f=document.querySelector(".question_panel .contentedit div"),v=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(Y.style.display="block"),v.scrollTo(0,1e4)};window.closeChat=function(e){Y.style.display="none"};f&&f.addEventListener("keydown",e=>{e.code==="Enter"&&(v.innerHTML+="<b>-Вы </b>"+f.innerHTML+"<br><br>",v.scrollTo({top:1e4,behavior:"smooth"}),le(f.innerHTML),setTimeout(()=>f.innerHTML=""))});function le(e){let r=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(r).then(o=>o.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("abdul");e&&(e.innerHTML=re)});const re=`
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
`;window.addCompare=function(e){let t=window.currentCars.find(a=>a.id===e),l=L(),r={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},o=document.querySelector("#compareId_"+e),n=o.classList.contains("chosen"),s=l.find(a=>a.id===e);n?(o.classList.remove("chosen"),l=l.filter(a=>a.id!==r.id)):(o.classList.add("chosen"),s||l.push(r)),localStorage.setItem("ComparedCars",JSON.stringify(l)),E(l)};function L(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function E(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteCar=function(e){let t=L();t=t.filter(l=>l.id!==e),localStorage.setItem("ComparedCars",JSON.stringify(t)),E(t),W(t)};function W(e){let t=e||L();if(E(t),!t.length)return!1;if(t.forEach(l=>{let r=document.querySelector("#compareId_"+l.id);r&&r.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let l=document.querySelector("#compare-field"),r="",o="",n="",s="",a="",w="",C="",T="",I="",$="",q="",P="",O="",k="",M="",A="";t.forEach(i=>{let m=i.info.split(",");r+=`<td><a href="javascript:deleteCar(${i.id})">Удалить</a></td>`,o+=`<td><a href="${i.href}"><img src="${i.photo}" alt=""></a></td>`,n+=`<td><a href="${i.href}">"${i.name.slice(0,-5)}</a></td>`,s+=`<td>${i.price} руб.</td>`,a+=`<td>${m[0]}</td>`,w+=`<td>${i.name.slice(-5)}</td>`,C+="<td></td>",T+=`<td>${m[1]}</td>`,I+=`<td>${m[4]}</td>`,$+="<td></td>",q+="<td></td>",P+=`<td>${m[3]}</td>`,O+=`<td>${m[2]}</td>`,k+=`<td>${i.address.split(",")[0]}</td>`,M+=`<td>${i.name.split(" ")[0]}</td>`,A+=`<td>${i.name.split(" ")[1]}</td>`}),l.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${r}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${o}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${n}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${s}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${a}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${w}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${C}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${T}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${I}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${$}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${q}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${P}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${O}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${k}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${M}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${A}
            </tr>`,t.length||(l.innerHTML='<div style="width: 100%;  height: 300px; display: grid; place-items: center;">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{W()});window.dblCompare=function(){location.href="/personal/list-compared/"};
