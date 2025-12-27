(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();let $=document.querySelector(".comb__items"),H=document.querySelector(".comb_field"),K=document.querySelector(".comb__selected"),Q=document.querySelector(".footer-city-button"),x=document.querySelector("#city-contacts"),ee=document.querySelector(".comb_field img"),V=document.querySelector(".mySwiper"),te=localStorage.getItem("selectedCity");H&&(K.innerHTML=te||"Россия",document.addEventListener("click",()=>j(!1)),H.addEventListener("click",e=>oe(e)),$.addEventListener("click",e=>ne(e)));function ne(e){let t=e.target.innerText;if(t.length>30)return!1;K.innerHTML=Q.innerHTML=t,x&&(x.innerHTML=t),localStorage.setItem("selectedCity",t),window.setCityContacts&&window.setCityContacts(t)}function oe(e){j($.style.display!=="block"),e.stopPropagation()}function j(e){$.style.display=e?"block":"none",ee.style.rotate=e?"180deg":"0deg",V&&(V.style.zIndex=e?-1:0)}let re=document.querySelector("#innerCity"),C=document.querySelector(".form__modal-place--group input"),le=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],ie=["А","Б","Е","К","М","Н","О","С","Т","У"];function z(e){let t="";ie.forEach(n=>{let l=le.filter(r=>r.slice(0,1)===n),o="";l.forEach(r=>{let s=e&&r.toUpperCase().includes(e)?" class='yel'":"";o+=`<li><a href="javascript:void(0)" onclick="setCity('${r}')"><span ${s}>${r}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${n}</div><ul>${o}</ul></div></div>`}),re.innerHTML=t}C&&C.addEventListener("input",e=>{z(C.value.toUpperCase())});let X=document.querySelector(".button__burger"),w=document.querySelector(".main-nav.menu"),_=document.querySelector(".button__burger"),m=document.querySelector(".main-nav.cities"),S=document.querySelector(".footer-city-button"),p=document.querySelector("#city-contacts"),se=document.querySelector(".comb__selected"),N=document.querySelector(".modal-place__close"),G=document.querySelector(".mySwiper"),c,L=document.querySelector(".main-nav.request"),F=document.querySelector("#closer-fon"),J=document.querySelector(".modal-closer.form");G&&(G.style.zIndex=0);function g(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}X&&X.addEventListener("click",()=>{if(c)return c=!1,m.style.transform="translateX(150vw)",!1;c=w.style.transform!=="none",w.style.transform=c?"none":"translateX(150vw)",g(c),c?(_.classList.add("close"),c=!1):_.classList.remove("close")});S&&S.addEventListener("click",()=>W());p&&p.addEventListener("click",()=>W());function W(){c=m.style.transform!=="none",c&&(m.style.transform="none",m.style.backgroundColor="white"),g(c),z()}N&&N.addEventListener("click",()=>{m.style.transform="translateX(150vw)",g(!1)});S.innerHTML=localStorage.getItem("selectedCity")||"Россия";p&&(p.innerHTML=localStorage.getItem("selectedCity")||"Россия");window.setCity=function(e){localStorage.setItem("selectedCity",e),m.style.transform="translateX(150vw)",se.innerHTML=S.innerHTML=e,p&&(p.innerHTML=e),g(!1),window.setCityContacts&&window.setCityContacts(e)};let U=document.querySelector("#cookie-accept"),T=document.querySelector("#cookie-banner"),ce=localStorage.getItem("isCoockieBannerShow");!ce&&T&&T.classList.add("show");U&&U.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),T.classList.remove("show")});function E(e){L&&(L.style.transform="translateX(150vw)"),m&&(m.style.transform="translateX(150vw)"),w&&(w.style.transform="translateX(150vw)"),_&&_.classList.remove("close"),g(!1),closeChat();let t=document.getElementById("ya_map");t&&e&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=E;document.addEventListener("keydown",e=>e.key==="Escape"&&E());window.sendBid=function(e){console.log(">>>> id = ",e),c=L.style.transform!=="none",c&&(L.style.transform="none"),g(c)};F&&F.addEventListener("click",()=>E());J&&J.addEventListener("click",()=>E());const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let Z=document.querySelector(".question_block"),b=document.querySelector(".question_panel .contentedit div"),q=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(Z.style.display="block"),q.scrollTo(0,1e4)};window.closeChat=function(e){Z.style.display="none"};b&&b.addEventListener("keydown",e=>{e.code==="Enter"&&(q.innerHTML+="<b>-Вы </b>"+b.innerHTML+"<br><br>",q.scrollTo({top:1e4,behavior:"smooth"}),ae(b.innerHTML),setTimeout(()=>b.innerHTML=""))});function ae(e){let l=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(l).then(o=>o.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{window.reloadAbdul()});window.reloadAbdul=function(){let e=document.querySelector("abdul");e&&(e.innerHTML=de)};const de=`
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
`;function Y(e){return parseInt(e).toLocaleString("ru-RU")}window.addCompare=function(e){let t=window.compareCars.find(a=>a.id===e),n=A(),l=t;l.images=t.images[0];let o=document.querySelector("#compareId_"+e),r=o.classList.contains("chosen"),s=n.find(a=>a.id===e);r?(o.classList.remove("chosen"),n=n.filter(a=>a.id!==l.id)):(o.classList.add("chosen"),s||n.push(l)),localStorage.setItem("ComparedCars",JSON.stringify(n)),k(n)};function A(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function k(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=A();if(e?t=t.filter(n=>n.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),k(t),I(t),!t.length){let n=document.querySelector(".compare-clear");n.style.display="none"}};function I(e){let t=e||A();if(k(t),t.forEach(n=>{let l=document.querySelector("#compareId_"+n.id);l&&l.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let n=document.querySelector("#compare-field"),l="",o="",r="",s="",a="",f="",y="",h="",v="",u="",O="",M="",P="",R="",D="",B="";t.forEach(i=>{l+=`<td><a href="javascript:deleteCar('${i.id}')">Удалить</a></td>`,o+=`<td><a href="${i.href}"><img src="${i.images}" alt=""></a></td>`,r+=`<td><a href="${i.href}">"${i.brand} ${i.model}</a></td>`,s+=`<td>${Y(i.price)} руб.</td>`,i.milleage&&(a+=`<td>${Y(i.milleage)||""} км</td>`),f+=`<td>${i.yearReleased||""}</td>`,y+=`<td>${i.color||""}</td>`,h+=`<td>${i.engineCapacity||""}</td>`,v+=`<td>${i.engineType||""}</td>`,u+=`<td>${i.enginePower||""}</td>`,O+=`<td>${i.gearboxType||""}</td>`,M+=`<td>${i.driveType||""}</td>`,P+=`<td>${i.bodyType||""}</td>`,R+=`<td>${i.fullAddress||""}</td>`,D+=`<td>${i.brand||""}</td>`,B+=`<td>${i.model||""}</td>`}),n.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${l}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${o}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${r}
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
               ${f}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${y}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${h}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${v}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${u}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${O}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${M}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${P}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${R}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${D}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${B}
            </tr>`,t.length||(n.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{let e=!1,t,n=document.querySelector(".bx_compare");n&&(n.addEventListener("mousedown",l=>{e=!0,t=l.clientX,l.preventDefault()}),n.addEventListener("mousemove",l=>{e&&(n.scrollBy(t-l.clientX,0),t=l.clientX)}),n.addEventListener("mouseup",()=>e=!1)),location.pathname==="/personal/list-compared/"?I():setTimeout(I,2e3)});window.dblCompare=function(){location.href="/personal/list-compared/"};(function(){var e=window,t="___grecaptcha_cfg",n=e[t]=e[t]||{},l="grecaptcha",o=e[l]=e[l]||{};o.ready=o.ready||function(u){(n.fns=n.fns||[]).push(u)},e.__recaptcha_api="https://www.google.com/recaptcha/api2/",(n.render=n.render||[]).push("onload"),(n.clr=n.clr||[]).push("true"),(n["anchor-ms"]=n["anchor-ms"]||[]).push(2e4),(n["execute-ms"]=n["execute-ms"]||[]).push(15e3),e.__google_recaptcha_client=!0;var r=document,s=r.createElement("script");s.type="text/javascript",s.async=!0,s.charset="utf-8";var a=e.navigator,f=r.createElement("meta");f.httpEquiv="origin-trial",f.content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",a&&a.cookieDeprecationLabel?a.cookieDeprecationLabel.getValue().then(function(u){u!=="treatment_1.1"&&u!=="treatment_1.2"&&u!=="control_1.1"&&r.head.prepend(f)}):r.head.prepend(f),s.src="https://www.gstatic.com/recaptcha/releases/jdMmXeCQEkPbnFDy9T04NbgJ/recaptcha__ru.js",s.crossOrigin="anonymous",s.integrity="sha384-cPiSccAbcXq4943v8wyqSDIxNGvgl0FEZ+DUT8jkznJpS79UD24vTb7s/fa2evVV";var y=r.querySelector("script[nonce]"),h=y&&(y.nonce||y.getAttribute("nonce"));h&&s.setAttribute("nonce",h);var v=r.getElementsByTagName("script")[0];v.parentNode.insertBefore(s,v)})();export{Y as f};
