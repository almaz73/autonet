(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();let S=document.querySelector(".comb__items"),D=document.querySelector(".comb_field"),F=document.querySelector(".comb__selected"),W=document.querySelector(".footer-city-button a"),J=document.querySelector(".comb_field img"),R=document.querySelector(".mySwiper"),j=localStorage.getItem("selectedCity");D&&(F.innerHTML=j||"Россия",document.addEventListener("click",()=>G(!1)),D.addEventListener("click",e=>Z(e)),S.addEventListener("click",e=>z(e)));function z(e){let t=e.target.innerText;if(t.length>30)return!1;F.innerHTML=t,W.innerHTML=t,localStorage.setItem("selectedCity",t)}function Z(e){G(S.style.display!=="block"),e.stopPropagation()}function G(e){S.style.display=e?"block":"none",J.style.rotate=e?"180deg":"0deg",R&&(R.style.zIndex=e?-1:0)}let Q=document.querySelector("#innerCity"),h=document.querySelector(".form__modal-place--group input"),ee=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],te=["А","Б","Е","К","М","Н","О","С","Т","У"];function X(e){let t="";te.forEach(n=>{let r=ee.filter(l=>l.slice(0,1)===n),o="";r.forEach(l=>{let i=e&&l.toUpperCase().includes(e)?" class='yel'":"";o+=`<li><a href="javascript:void(0)" onclick="setCity('${l}')"><span ${i}>${l}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${n}</div><ul>${o}</ul></div></div>`}),Q.innerHTML=t}h&&h.addEventListener("input",e=>{X(h.value.toUpperCase())});let H=document.querySelector(".button__burger"),p=document.querySelector(".main-nav.menu"),b=document.querySelector(".button__burger"),u=document.querySelector(".main-nav.cities"),x=document.querySelector(".footer-city-button"),v=document.querySelector(".footer-city-button a"),oe=document.querySelector(".comb__selected"),V=document.querySelector(".modal-place__close"),B=document.querySelector(".mySwiper"),d;B&&(B.style.zIndex=0);function y(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}H&&H.addEventListener("click",()=>{if(d)return d=!1,u.style.transform="translateX(150vw)",!1;d=p.style.transform!=="none",p.style.transform=d?"none":"translateX(150vw)",y(d),d?(b.classList.add("close"),d=!1):b.classList.remove("close")});x&&x.addEventListener("click",()=>{d=u.style.transform!=="none",d&&(u.style.transform="none",u.style.backgroundColor="white"),y(d),X()});V&&V.addEventListener("click",()=>{u.style.transform="translateX(150vw)",y(!1)});v&&(v.innerHTML=localStorage.getItem("selectedCity")||"Россия",window.setCity=function(e){localStorage.setItem("selectedCity",e),u.style.transform="translateX(150vw)",v.innerHTML=e,oe.innerHTML=e,y(!1)});let N=document.querySelector("#cookie-accept"),g=document.querySelector("#cookie-banner"),ne=localStorage.getItem("isCoockieBannerShow");!ne&&g&&g.classList.add("show");N&&N.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),g.classList.remove("show")});function K(e){u&&(u.style.transform="translateX(150vw)"),p&&(p.style.transform="translateX(150vw)"),b&&b.classList.remove("close"),y(!1),closeChat();let t=document.getElementById("ya_map");t&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=K;document.addEventListener("keydown",e=>{e.key==="Escape"&&K(!1)});const c=document.getElementById("mainPhoto");c&&c.addEventListener("click",function(){if(window.innerWidth<900)return!1;c.requestFullscreen?c.requestFullscreen():c.mozRequestFullScreen?c.mozRequestFullScreen():c.webkitRequestFullscreen?c.webkitRequestFullscreen():c.msRequestFullscreen&&c.msRequestFullscreen()});let U=document.querySelector(".question_block"),f=document.querySelector(".question_panel .contentedit div"),_=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(U.style.display="block"),_.scrollTo(0,1e4)};window.closeChat=function(e){U.style.display="none"};f&&f.addEventListener("keydown",e=>{e.code==="Enter"&&(_.innerHTML+="<b>-Вы </b>"+f.innerHTML+"<br><br>",_.scrollTo({top:1e4,behavior:"smooth"}),le(f.innerHTML),setTimeout(()=>f.innerHTML=""))});function le(e){let r=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(r).then(o=>o.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("abdul");e&&(e.innerHTML=re)});const re=`
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
`;window.addCompare=function(e){let t=window.currentCars.find(a=>a.id===e),n=L(),r={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},o=document.querySelector("#compareId_"+e),l=o.classList.contains("chosen"),i=n.find(a=>a.id===e);l?(o.classList.remove("chosen"),n=n.filter(a=>a.id!==r.id)):(o.classList.add("chosen"),i||n.push(r)),localStorage.setItem("ComparedCars",JSON.stringify(n)),E(n)};function L(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function E(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteCar=function(e){let t=L();t=t.filter(n=>n.id!==e),localStorage.setItem("ComparedCars",JSON.stringify(t)),E(t),Y(t)};function Y(e){let t=e||L();if(E(t),t.forEach(n=>{let r=document.querySelector("#compareId_"+n.id);r&&r.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let n=document.querySelector("#compare-field"),r="",o="",l="",i="",a="",w="",C="",T="",I="",$="",q="",P="",O="",k="",M="",A="";t.forEach(s=>{let m=s.info.split(",");r+=`<td><a href="javascript:deleteCar(${s.id})">Удалить</a></td>`,o+=`<td><a href="${s.href}"><img src="${s.photo}" alt=""></a></td>`,l+=`<td><a href="${s.href}">"${s.name.slice(0,-5)}</a></td>`,i+=`<td>${s.price} руб.</td>`,a+=`<td>${m[0]}</td>`,w+=`<td>${s.name.slice(-5)}</td>`,C+="<td></td>",T+=`<td>${m[1]}</td>`,I+=`<td>${m[4]}</td>`,$+="<td></td>",q+="<td></td>",P+=`<td>${m[3]}</td>`,O+=`<td>${m[2]}</td>`,k+=`<td>${s.address.split(",")[0]}</td>`,M+=`<td>${s.name.split(" ")[0]}</td>`,A+=`<td>${s.name.split(" ")[1]}</td>`}),n.innerHTML=`
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
                ${l}
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
            </tr>`,t.length||(n.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{Y();let e=!1,t,n=document.querySelector(".bx_compare");n&&(n.addEventListener("mousedown",r=>{e=!0,t=r.clientX,r.preventDefault()}),n.addEventListener("mousemove",r=>{e&&(n.scrollBy(t-r.clientX,0),t=r.clientX)}),n.addEventListener("mouseup",()=>e=!1))});window.dblCompare=function(){location.href="/personal/list-compared/"};
