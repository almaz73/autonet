(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();let B=document.querySelector(".comb__items"),x=document.querySelector(".comb_field"),j=document.querySelector(".comb__selected"),ee=document.querySelector(".footer-city-button"),te=document.querySelector("#city-contacts"),ne=document.querySelector(".comb_field img"),H=document.querySelector(".mySwiper"),oe=localStorage.getItem("selectedCity");x&&(j.innerHTML=oe||"Россия",document.addEventListener("click",()=>K(!1)),x.addEventListener("click",e=>le(e)),B.addEventListener("click",e=>re(e)));function re(e){let t=e.target.innerText;if(t.length>30)return!1;j.innerHTML=ee.innerHTML=te.innerHTML=t,localStorage.setItem("selectedCity",t)}function le(e){K(B.style.display!=="block"),e.stopPropagation()}function K(e){B.style.display=e?"block":"none",ne.style.rotate=e?"180deg":"0deg",H&&(H.style.zIndex=e?-1:0)}let ce=document.querySelector("#innerCity"),C=document.querySelector(".form__modal-place--group input"),ie=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],se=["А","Б","Е","К","М","Н","О","С","Т","У"];function z(e){let t="";se.forEach(n=>{let l=ie.filter(r=>r.slice(0,1)===n),o="";l.forEach(r=>{let c=e&&r.toUpperCase().includes(e)?" class='yel'":"";o+=`<li><a href="javascript:void(0)" onclick="setCity('${r}')"><span ${c}>${r}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${n}</div><ul>${o}</ul></div></div>`}),ce.innerHTML=t}C&&C.addEventListener("input",e=>{z(C.value.toUpperCase())});let V=document.querySelector(".button__burger"),S=document.querySelector(".main-nav.menu"),w=document.querySelector(".button__burger"),m=document.querySelector(".main-nav.cities"),L=document.querySelector(".footer-city-button"),_=document.querySelector("#city-contacts"),ae=document.querySelector(".comb__selected"),X=document.querySelector(".modal-place__close"),N=document.querySelector(".mySwiper"),i,E=document.querySelector(".main-nav.request"),F=document.querySelector("#closer-fon"),G=document.querySelector(".modal-closer.form");N&&(N.style.zIndex=0);function y(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}V&&V.addEventListener("click",()=>{if(i)return i=!1,m.style.transform="translateX(150vw)",!1;i=S.style.transform!=="none",S.style.transform=i?"none":"translateX(150vw)",y(i),i?(w.classList.add("close"),i=!1):w.classList.remove("close")});L&&L.addEventListener("click",()=>W());_&&_.addEventListener("click",()=>W());function W(){i=m.style.transform!=="none",i&&(m.style.transform="none",m.style.backgroundColor="white"),y(i),z()}X&&X.addEventListener("click",()=>{m.style.transform="translateX(150vw)",y(!1)});L.innerHTML=localStorage.getItem("selectedCity")||"Россия";_&&(_.innerHTML=localStorage.getItem("selectedCity")||"Россия");window.setCity=function(e){localStorage.setItem("selectedCity",e),m.style.transform="translateX(150vw)",L.innerHTML=_.innerHTML=ae.innerHTML=e,y(!1)};let J=document.querySelector("#cookie-accept"),T=document.querySelector("#cookie-banner"),de=localStorage.getItem("isCoockieBannerShow");!de&&T&&T.classList.add("show");J&&J.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),T.classList.remove("show")});function q(e){E&&(E.style.transform="translateX(150vw)"),m&&(m.style.transform="translateX(150vw)"),S&&(S.style.transform="translateX(150vw)"),w&&w.classList.remove("close"),y(!1),closeChat();let t=document.getElementById("ya_map");t&&e&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=q;document.addEventListener("keydown",e=>e.key==="Escape"&&q());window.sendBid=function(e){console.log(">>>> id = ",e),i=E.style.transform!=="none",i&&(E.style.transform="none"),y(i)};F&&F.addEventListener("click",()=>q());G&&G.addEventListener("click",()=>q());function ue(){let e="https://ext.cartat.ru/exchange/api/auto/getlist";console.log("request = ",e),fetch(e).then(t=>{if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return t.json()}).then(t=>{console.log("ХОРОШИЙ ОТВЕТ res = ",t)}).catch(t=>{console.error("Произошла ошибка:",t)})}function me(){let e="https://ext.cartat.ru/exchange/api/auto/getlist";e="api/appeals/list/?filter={}&limit=20&mainFilter=10",console.log("222 request = ",e),fetch(e).then(t=>t.json()).then(t=>{console.log("res = ",t)})}let U=document.querySelector("#BBBB");U&&U.addEventListener("click",()=>ue());let Y=document.querySelector("#BBBB2");Y&&Y.addEventListener("click",()=>me());const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let Z=document.querySelector(".question_block"),b=document.querySelector(".question_panel .contentedit div"),I=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(Z.style.display="block"),I.scrollTo(0,1e4)};window.closeChat=function(e){Z.style.display="none"};b&&b.addEventListener("keydown",e=>{e.code==="Enter"&&(I.innerHTML+="<b>-Вы </b>"+b.innerHTML+"<br><br>",I.scrollTo({top:1e4,behavior:"smooth"}),fe(b.innerHTML),setTimeout(()=>b.innerHTML=""))});function fe(e){let l=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(l).then(o=>o.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("abdul");e&&(e.innerHTML=pe)});const pe=`
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
`;window.addCompare=function(e){let t=window.currentCars.find(s=>s.id===e),n=$(),l={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},o=document.querySelector("#compareId_"+e),r=o.classList.contains("chosen"),c=n.find(s=>s.id===e);r?(o.classList.remove("chosen"),n=n.filter(s=>s.id!==l.id)):(o.classList.add("chosen"),c||n.push(l)),localStorage.setItem("ComparedCars",JSON.stringify(n)),k(n)};function $(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function k(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=$();if(e?t=t.filter(n=>n.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),k(t),Q(t),!t.length){let n=document.querySelector(".compare-clear");n.style.display="none"}};function Q(e){let t=e||$();if(k(t),t.forEach(n=>{let l=document.querySelector("#compareId_"+n.id);l&&l.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let n=document.querySelector("#compare-field"),l="",o="",r="",c="",s="",f="",p="",h="",g="",u="",A="",O="",M="",P="",D="",R="";t.forEach(a=>{let v=a.info.split(",");l+=`<td><a href="javascript:deleteCar(${a.id})">Удалить</a></td>`,o+=`<td><a href="${a.href}"><img src="${a.photo}" alt=""></a></td>`,r+=`<td><a href="${a.href}">"${a.name.slice(0,-5)}</a></td>`,c+=`<td>${a.price} руб.</td>`,s+=`<td>${v[0]}</td>`,f+=`<td>${a.name.slice(-5)}</td>`,p+="<td></td>",h+=`<td>${v[1]}</td>`,g+=`<td>${v[4]}</td>`,u+="<td></td>",A+="<td></td>",O+=`<td>${v[3]}</td>`,M+=`<td>${v[2]}</td>`,P+=`<td>${a.address.split(",")[0]}</td>`,D+=`<td>${a.name.split(" ")[0]}</td>`,R+=`<td>${a.name.split(" ")[1]}</td>`}),n.innerHTML=`
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
               ${c}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${s}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${f}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${p}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${h}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${g}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${u}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${A}
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
                ${P}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${D}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${R}
            </tr>`,t.length||(n.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{Q();let e=!1,t,n=document.querySelector(".bx_compare");n&&(n.addEventListener("mousedown",l=>{e=!0,t=l.clientX,l.preventDefault()}),n.addEventListener("mousemove",l=>{e&&(n.scrollBy(t-l.clientX,0),t=l.clientX)}),n.addEventListener("mouseup",()=>e=!1))});window.dblCompare=function(){location.href="/personal/list-compared/"};(function(){var e=window,t="___grecaptcha_cfg",n=e[t]=e[t]||{},l="grecaptcha",o=e[l]=e[l]||{};o.ready=o.ready||function(u){(n.fns=n.fns||[]).push(u)},e.__recaptcha_api="https://www.google.com/recaptcha/api2/",(n.render=n.render||[]).push("onload"),(n.clr=n.clr||[]).push("true"),(n["anchor-ms"]=n["anchor-ms"]||[]).push(2e4),(n["execute-ms"]=n["execute-ms"]||[]).push(15e3),e.__google_recaptcha_client=!0;var r=document,c=r.createElement("script");c.type="text/javascript",c.async=!0,c.charset="utf-8";var s=e.navigator,f=r.createElement("meta");f.httpEquiv="origin-trial",f.content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",s&&s.cookieDeprecationLabel?s.cookieDeprecationLabel.getValue().then(function(u){u!=="treatment_1.1"&&u!=="treatment_1.2"&&u!=="control_1.1"&&r.head.prepend(f)}):r.head.prepend(f),c.src="https://www.gstatic.com/recaptcha/releases/jdMmXeCQEkPbnFDy9T04NbgJ/recaptcha__ru.js",c.crossOrigin="anonymous",c.integrity="sha384-cPiSccAbcXq4943v8wyqSDIxNGvgl0FEZ+DUT8jkznJpS79UD24vTb7s/fa2evVV";var p=r.querySelector("script[nonce]"),h=p&&(p.nonce||p.getAttribute("nonce"));h&&c.setAttribute("nonce",h);var g=r.getElementsByTagName("script")[0];g.parentNode.insertBefore(c,g)})();
