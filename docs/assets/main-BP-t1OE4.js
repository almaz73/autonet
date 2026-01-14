(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();let I=document.querySelector(".comb__items"),B=document.querySelector(".comb_field"),Y=document.querySelector(".comb__selected"),W=document.querySelector(".footer-city-button"),H=document.querySelector("#city-contacts"),Q=document.querySelector(".comb_field img"),V=document.querySelector(".mySwiper"),ee=localStorage.getItem("selectedCity");B&&(Y.innerHTML=ee||"Россия",document.addEventListener("click",()=>K(!1)),B.addEventListener("click",e=>ne(e)),I.addEventListener("click",e=>te(e)));function te(e){let t=e.target.innerText;if(t.length>30)return!1;Y.innerHTML=W.innerHTML=t,H&&(H.innerHTML=t),localStorage.setItem("selectedCity",t),window.setCityContacts&&window.setCityContacts(t)}function ne(e){K(I.style.display!=="block"),e.stopPropagation()}function K(e){I.style.display=e?"block":"none",Q.style.rotate=e?"180deg":"0deg",V&&(V.style.zIndex=e?-1:0)}let oe=document.querySelector("#innerCity"),E=document.querySelector(".form__modal-place--group input"),re=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],ie=["А","Б","Е","К","М","Н","О","С","Т","У"];function j(e){let t="";ie.forEach(n=>{let i=re.filter(r=>r.slice(0,1)===n),o="";i.forEach(r=>{let l=e&&r.toUpperCase().includes(e)?" class='yel'":"";o+=`<li><a href="javascript:void(0)" onclick="setCity('${r}')"><span ${l}>${r}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${n}</div><ul>${o}</ul></div></div>`}),oe.innerHTML=t}E&&E.addEventListener("input",e=>{j(E.value.toUpperCase())});let x=document.querySelector(".button__burger"),w=document.querySelector(".main-nav.menu"),_=document.querySelector(".button__burger"),m=document.querySelector(".main-nav.cities"),b=document.querySelector(".footer-city-button"),y=document.querySelector("#city-contacts"),se=document.querySelector(".comb__selected"),X=document.querySelector(".modal-place__close"),N=document.querySelector(".mySwiper"),d,S=document.querySelector(".main-nav.request"),G=document.querySelector("#closer-fon"),F=document.querySelector(".modal-closer.form");N&&(N.style.zIndex=0);x&&x.addEventListener("click",()=>{if(d)return d=!1,m.style.transform="translateX(150vw)",!1;d=w.style.transform!=="none",w.style.transform=d?"none":"translateX(150vw)",d?(_.classList.add("close"),d=!1):_.classList.remove("close")});b&&b.addEventListener("click",()=>z());y&&y.addEventListener("click",()=>z());function z(){d=m.style.transform!=="none",d&&(m.style.transform="none",m.style.backgroundColor="white"),j()}X&&X.addEventListener("click",()=>{m.style.transform="translateX(150vw)"});b.innerHTML=localStorage.getItem("selectedCity")||"Россия";y&&(y.innerHTML=localStorage.getItem("selectedCity")||"Россия");window.setCity=function(e){localStorage.setItem("selectedCity",e),m.style.transform="translateX(150vw)",se.innerHTML=b.innerHTML=e,y&&(y.innerHTML=e),window.setCityContacts&&window.setCityContacts(e)};let J=document.querySelector("#cookie-accept"),C=document.querySelector("#cookie-banner"),le=localStorage.getItem("isCoockieBannerShow");!le&&C&&C.classList.add("show");J&&J.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),C.classList.remove("show")});function L(e){S&&(S.style.transform="translateX(150vw)"),m&&(m.style.transform="translateX(150vw)"),w&&(w.style.transform="translateX(150vw)"),_&&_.classList.remove("close"),closeChat()}window.close_all=L;document.addEventListener("keydown",e=>e.key==="Escape"&&L());window.sendBid=function(e){console.log(">>>> id = ",e),d=S.style.transform!=="none",d&&(S.style.transform="none")};G&&G.addEventListener("click",()=>L());F&&F.addEventListener("click",()=>L());const a=document.getElementById("mainPhoto");a&&a.addEventListener("click",function(){if(window.innerWidth<900)return!1;a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen()});let Z=document.querySelector(".question_block"),v=document.querySelector(".question_panel .contentedit div"),T=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(Z.style.display="block"),T.scrollTo(0,1e4)};window.closeChat=function(e){Z.style.display="none"};v&&v.addEventListener("keydown",e=>{e.code==="Enter"&&(T.innerHTML+="<b>-Вы </b>"+v.innerHTML+"<br><br>",T.scrollTo({top:1e4,behavior:"smooth"}),ce(v.innerHTML),setTimeout(()=>v.innerHTML=""))});function ce(e){let i=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(i).then(o=>o.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{window.reloadAbdul()});window.reloadAbdul=function(){let e=document.querySelector("abdul");e&&(e.innerHTML=ae)};const ae=`
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
`;function U(e){return parseInt(e).toLocaleString("ru-RU")}window.addCompare=function(e){let t=window.compareCars.find(c=>c.id===e),n=$(),i=t;i.images=t.images[0];let o=document.querySelector("#compareId_"+e),r=o.classList.contains("chosen"),l=n.find(c=>c.id===e);r?(o.classList.remove("chosen"),n=n.filter(c=>c.id!==i.id)):(o.classList.add("chosen"),l||n.push(i)),localStorage.setItem("ComparedCars",JSON.stringify(n)),A(n)};function $(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function A(e){let t=document.querySelector("#compareCount");t&&e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t&&(t.style.display="none")}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=$();if(e?t=t.filter(n=>n.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),A(t),q(t),!t.length){let n=document.querySelector(".compare-clear");n&&(n.style.display="none")}};function q(e){let t=e||$();if(A(t),t.forEach(n=>{let i=document.querySelector("#compareId_"+n.id);i&&i.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let n=document.querySelector("#compare-field"),i="",o="",r="",l="",c="",f="",p="",g="",h="",u="",O="",P="",M="",k="",D="",R="";t.forEach(s=>{i+=`<td><a href="javascript:deleteCar('${s.id}')">Удалить</a></td>`,o+=`<td><a href="${s.href}"><img src="${s.images}" alt=""></a></td>`,r+=`<td><a href="${s.href}">"${s.brand} ${s.model}</a></td>`,l+=`<td>${U(s.price)} руб.</td>`,s.milleage&&(c+=`<td>${U(s.milleage)||""} км</td>`),f+=`<td>${s.yearReleased||""}</td>`,p+=`<td>${s.color||""}</td>`,g+=`<td>${s.engineCapacity||""}</td>`,h+=`<td>${s.engineType||""}</td>`,u+=`<td>${s.enginePower||""}</td>`,O+=`<td>${s.gearboxType||""}</td>`,P+=`<td>${s.driveType||""}</td>`,M+=`<td>${s.bodyType||""}</td>`,k+=`<td>${s.fullAddress||""}</td>`,D+=`<td>${s.brand||""}</td>`,R+=`<td>${s.model||""}</td>`}),n.innerHTML=`
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${i}
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
               ${l}
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
               ${g}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${h}
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
                ${P}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${M}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${k}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${D}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${R}
            </tr>`,t.length||(n.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{let e=!1,t,n=document.querySelector(".bx_compare");n&&(n.addEventListener("mousedown",i=>{e=!0,t=i.clientX,i.preventDefault()}),n.addEventListener("mousemove",i=>{e&&(n.scrollBy(t-i.clientX,0),t=i.clientX)}),n.addEventListener("mouseup",()=>e=!1)),location.pathname==="/personal/list-compared/"?q():setTimeout(q,2e3)});window.dblCompare=function(){location.href="/personal/list-compared/"};(function(){var e=window,t="___grecaptcha_cfg",n=e[t]=e[t]||{},i="grecaptcha",o=e[i]=e[i]||{};o.ready=o.ready||function(u){(n.fns=n.fns||[]).push(u)},e.__recaptcha_api="https://www.google.com/recaptcha/api2/",(n.render=n.render||[]).push("onload"),(n.clr=n.clr||[]).push("true"),(n["anchor-ms"]=n["anchor-ms"]||[]).push(2e4),(n["execute-ms"]=n["execute-ms"]||[]).push(15e3),e.__google_recaptcha_client=!0;var r=document,l=r.createElement("script");l.type="text/javascript",l.async=!0,l.charset="utf-8";var c=e.navigator,f=r.createElement("meta");f.httpEquiv="origin-trial",f.content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",c&&c.cookieDeprecationLabel?c.cookieDeprecationLabel.getValue().then(function(u){u!=="treatment_1.1"&&u!=="treatment_1.2"&&u!=="control_1.1"&&r.head.prepend(f)}):r.head.prepend(f),l.src="https://www.gstatic.com/recaptcha/releases/jdMmXeCQEkPbnFDy9T04NbgJ/recaptcha__ru.js",l.crossOrigin="anonymous",l.integrity="sha384-cPiSccAbcXq4943v8wyqSDIxNGvgl0FEZ+DUT8jkznJpS79UD24vTb7s/fa2evVV";var p=r.querySelector("script[nonce]"),g=p&&(p.nonce||p.getAttribute("nonce"));g&&l.setAttribute("nonce",g);var h=r.getElementsByTagName("script")[0];h.parentNode.insertBefore(l,h)})();export{U as f};
