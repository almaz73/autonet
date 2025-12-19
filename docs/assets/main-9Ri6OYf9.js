(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();let I=document.querySelector(".comb__items"),V=document.querySelector(".comb_field"),U=document.querySelector(".comb__selected"),W=document.querySelector(".footer-city-button a"),Z=document.querySelector(".comb_field img"),x=document.querySelector(".mySwiper"),Q=localStorage.getItem("selectedCity");V&&(U.innerHTML=Q||"Россия",document.addEventListener("click",()=>Y(!1)),V.addEventListener("click",e=>te(e)),I.addEventListener("click",e=>ee(e)));function ee(e){let t=e.target.innerText;if(t.length>30)return!1;U.innerHTML=t,W.innerHTML=t,localStorage.setItem("selectedCity",t)}function te(e){Y(I.style.display!=="block"),e.stopPropagation()}function Y(e){I.style.display=e?"block":"none",Z.style.rotate=e?"180deg":"0deg",x&&(x.style.zIndex=e?-1:0)}let oe=document.querySelector("#innerCity"),L=document.querySelector(".form__modal-place--group input"),ne=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],re=["А","Б","Е","К","М","Н","О","С","Т","У"];function K(e){let t="";re.forEach(o=>{let l=ne.filter(r=>r.slice(0,1)===o),n="";l.forEach(r=>{let s=e&&r.toUpperCase().includes(e)?" class='yel'":"";n+=`<li><a href="javascript:void(0)" onclick="setCity('${r}')"><span ${s}>${r}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${o}</div><ul>${n}</ul></div></div>`}),oe.innerHTML=t}L&&L.addEventListener("input",e=>{K(L.value.toUpperCase())});let B=document.querySelector(".button__burger"),_=document.querySelector(".main-nav.menu"),w=document.querySelector(".button__burger"),m=document.querySelector(".main-nav.cities"),H=document.querySelector(".footer-city-button"),C=document.querySelector(".footer-city-button a"),le=document.querySelector(".comb__selected"),N=document.querySelector(".modal-place__close"),X=document.querySelector(".mySwiper"),i,S=document.querySelector(".main-nav.request"),G=document.querySelector("#closer-fon"),F=document.querySelector(".modal-closer.form");X&&(X.style.zIndex=0);function y(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}B&&B.addEventListener("click",()=>{if(i)return i=!1,m.style.transform="translateX(150vw)",!1;i=_.style.transform!=="none",_.style.transform=i?"none":"translateX(150vw)",y(i),i?(w.classList.add("close"),i=!1):w.classList.remove("close")});H&&H.addEventListener("click",()=>{i=m.style.transform!=="none",i&&(m.style.transform="none",m.style.backgroundColor="white"),y(i),K()});N&&N.addEventListener("click",()=>{m.style.transform="translateX(150vw)",y(!1)});C&&(C.innerHTML=localStorage.getItem("selectedCity")||"Россия",window.setCity=function(e){localStorage.setItem("selectedCity",e),m.style.transform="translateX(150vw)",C.innerHTML=e,le.innerHTML=e,y(!1)});let J=document.querySelector("#cookie-accept"),q=document.querySelector("#cookie-banner"),se=localStorage.getItem("isCoockieBannerShow");!se&&q&&q.classList.add("show");J&&J.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),q.classList.remove("show")});function E(e){S&&(S.style.transform="translateX(150vw)"),m&&(m.style.transform="translateX(150vw)"),_&&(_.style.transform="translateX(150vw)"),w&&w.classList.remove("close"),y(!1),closeChat();let t=document.getElementById("ya_map");t&&e&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=E;document.addEventListener("keydown",e=>e.key==="Escape"&&E());window.sendBid=function(e){console.log(">>>> id = ",e),i=S.style.transform!=="none",i&&(S.style.transform="none"),y(i)};G&&G.addEventListener("click",()=>E());F&&F.addEventListener("click",()=>E());const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let j=document.querySelector(".question_block"),b=document.querySelector(".question_panel .contentedit div"),T=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(j.style.display="block"),T.scrollTo(0,1e4)};window.closeChat=function(e){j.style.display="none"};b&&b.addEventListener("keydown",e=>{e.code==="Enter"&&(T.innerHTML+="<b>-Вы </b>"+b.innerHTML+"<br><br>",T.scrollTo({top:1e4,behavior:"smooth"}),ie(b.innerHTML),setTimeout(()=>b.innerHTML=""))});function ie(e){let l=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(l).then(n=>n.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("abdul");e&&(e.innerHTML=ce)});const ce=`
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
`;window.addCompare=function(e){let t=window.currentCars.find(c=>c.id===e),o=$(),l={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},n=document.querySelector("#compareId_"+e),r=n.classList.contains("chosen"),s=o.find(c=>c.id===e);r?(n.classList.remove("chosen"),o=o.filter(c=>c.id!==l.id)):(n.classList.add("chosen"),s||o.push(l)),localStorage.setItem("ComparedCars",JSON.stringify(o)),A(o)};function $(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function A(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=$();if(e?t=t.filter(o=>o.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),A(t),z(t),!t.length){let o=document.querySelector(".compare-clear");o.style.display="none"}};function z(e){let t=e||$();if(A(t),t.forEach(o=>{let l=document.querySelector("#compareId_"+o.id);l&&l.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let o=document.querySelector("#compare-field"),l="",n="",r="",s="",c="",f="",p="",h="",v="",u="",O="",k="",P="",M="",D="",R="";t.forEach(a=>{let g=a.info.split(",");l+=`<td><a href="javascript:deleteCar(${a.id})">Удалить</a></td>`,n+=`<td><a href="${a.href}"><img src="${a.photo}" alt=""></a></td>`,r+=`<td><a href="${a.href}">"${a.name.slice(0,-5)}</a></td>`,s+=`<td>${a.price} руб.</td>`,c+=`<td>${g[0]}</td>`,f+=`<td>${a.name.slice(-5)}</td>`,p+="<td></td>",h+=`<td>${g[1]}</td>`,v+=`<td>${g[4]}</td>`,u+="<td></td>",O+="<td></td>",k+=`<td>${g[3]}</td>`,P+=`<td>${g[2]}</td>`,M+=`<td>${a.address.split(",")[0]}</td>`,D+=`<td>${a.name.split(" ")[0]}</td>`,R+=`<td>${a.name.split(" ")[1]}</td>`}),o.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${l}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${n}            
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
                ${c}
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
                ${k}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${P}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${M}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${D}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${R}
            </tr>`,t.length||(o.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{z();let e=!1,t,o=document.querySelector(".bx_compare");o&&(o.addEventListener("mousedown",l=>{e=!0,t=l.clientX,l.preventDefault()}),o.addEventListener("mousemove",l=>{e&&(o.scrollBy(t-l.clientX,0),t=l.clientX)}),o.addEventListener("mouseup",()=>e=!1))});window.dblCompare=function(){location.href="/personal/list-compared/"};(function(){var e=window,t="___grecaptcha_cfg",o=e[t]=e[t]||{},l="grecaptcha",n=e[l]=e[l]||{};n.ready=n.ready||function(u){(o.fns=o.fns||[]).push(u)},e.__recaptcha_api="https://www.google.com/recaptcha/api2/",(o.render=o.render||[]).push("onload"),(o.clr=o.clr||[]).push("true"),(o["anchor-ms"]=o["anchor-ms"]||[]).push(2e4),(o["execute-ms"]=o["execute-ms"]||[]).push(15e3),e.__google_recaptcha_client=!0;var r=document,s=r.createElement("script");s.type="text/javascript",s.async=!0,s.charset="utf-8";var c=e.navigator,f=r.createElement("meta");f.httpEquiv="origin-trial",f.content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",c&&c.cookieDeprecationLabel?c.cookieDeprecationLabel.getValue().then(function(u){u!=="treatment_1.1"&&u!=="treatment_1.2"&&u!=="control_1.1"&&r.head.prepend(f)}):r.head.prepend(f),s.src="https://www.gstatic.com/recaptcha/releases/jdMmXeCQEkPbnFDy9T04NbgJ/recaptcha__ru.js",s.crossOrigin="anonymous",s.integrity="sha384-cPiSccAbcXq4943v8wyqSDIxNGvgl0FEZ+DUT8jkznJpS79UD24vTb7s/fa2evVV";var p=r.querySelector("script[nonce]"),h=p&&(p.nonce||p.getAttribute("nonce"));h&&s.setAttribute("nonce",h);var v=r.getElementsByTagName("script")[0];v.parentNode.insertBefore(s,v)})();
