(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();let $=document.querySelector(".comb__items"),H=document.querySelector(".comb_field"),U=document.querySelector(".comb__selected"),Z=document.querySelector(".footer-city-button"),Q=document.querySelector("#city-contacts"),ee=document.querySelector(".comb_field img"),x=document.querySelector(".mySwiper"),te=localStorage.getItem("selectedCity");H&&(U.innerHTML=te||"Россия",document.addEventListener("click",()=>Y(!1)),H.addEventListener("click",e=>oe(e)),$.addEventListener("click",e=>ne(e)));function ne(e){let t=e.target.innerText;if(t.length>30)return!1;U.innerHTML=Z.innerHTML=Q.innerHTML=t,localStorage.setItem("selectedCity",t)}function oe(e){Y($.style.display!=="block"),e.stopPropagation()}function Y(e){$.style.display=e?"block":"none",ee.style.rotate=e?"180deg":"0deg",x&&(x.style.zIndex=e?-1:0)}let re=document.querySelector("#innerCity"),q=document.querySelector(".form__modal-place--group input"),le=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],se=["А","Б","Е","К","М","Н","О","С","Т","У"];function j(e){let t="";se.forEach(n=>{let l=le.filter(r=>r.slice(0,1)===n),o="";l.forEach(r=>{let s=e&&r.toUpperCase().includes(e)?" class='yel'":"";o+=`<li><a href="javascript:void(0)" onclick="setCity('${r}')"><span ${s}>${r}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${n}</div><ul>${o}</ul></div></div>`}),re.innerHTML=t}q&&q.addEventListener("input",e=>{j(q.value.toUpperCase())});let V=document.querySelector(".button__burger"),S=document.querySelector(".main-nav.menu"),w=document.querySelector(".button__burger"),m=document.querySelector(".main-nav.cities"),L=document.querySelector(".footer-city-button"),_=document.querySelector("#city-contacts"),ce=document.querySelector(".comb__selected"),X=document.querySelector(".modal-place__close"),N=document.querySelector(".mySwiper"),c,E=document.querySelector(".main-nav.request"),G=document.querySelector("#closer-fon"),F=document.querySelector(".modal-closer.form");N&&(N.style.zIndex=0);function y(e){e?(document.body.style.overflow="hidden",document.body.clientWidth>500&&(document.body.style.marginRight="14px")):(document.body.style.overflow="auto",document.body.clientWidth>500&&(document.body.style.marginRight="0"))}V&&V.addEventListener("click",()=>{if(c)return c=!1,m.style.transform="translateX(150vw)",!1;c=S.style.transform!=="none",S.style.transform=c?"none":"translateX(150vw)",y(c),c?(w.classList.add("close"),c=!1):w.classList.remove("close")});L&&L.addEventListener("click",()=>K());_&&_.addEventListener("click",()=>K());function K(){c=m.style.transform!=="none",c&&(m.style.transform="none",m.style.backgroundColor="white"),y(c),j()}X&&X.addEventListener("click",()=>{m.style.transform="translateX(150vw)",y(!1)});L.innerHTML=localStorage.getItem("selectedCity")||"Россия";_&&(_.innerHTML=localStorage.getItem("selectedCity")||"Россия");window.setCity=function(e){localStorage.setItem("selectedCity",e),m.style.transform="translateX(150vw)",L.innerHTML=_.innerHTML=ce.innerHTML=e,y(!1)};let J=document.querySelector("#cookie-accept"),T=document.querySelector("#cookie-banner"),ie=localStorage.getItem("isCoockieBannerShow");!ie&&T&&T.classList.add("show");J&&J.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),T.classList.remove("show")});function C(e){E&&(E.style.transform="translateX(150vw)"),m&&(m.style.transform="translateX(150vw)"),S&&(S.style.transform="translateX(150vw)"),w&&w.classList.remove("close"),y(!1),closeChat();let t=document.getElementById("ya_map");t&&e&&(t.style.display=t.style.display==="block"?"none":"block",e!==void 0&&(t.style.display=e?"block":"none"))}window.close_all=C;document.addEventListener("keydown",e=>e.key==="Escape"&&C());window.sendBid=function(e){console.log(">>>> id = ",e),c=E.style.transform!=="none",c&&(E.style.transform="none"),y(c)};G&&G.addEventListener("click",()=>C());F&&F.addEventListener("click",()=>C());function ae(){let e="https://ext.cartat.ru/exchange/api/auto/getlist",t={method:"get",mode:"cors",headers:{"Content-Type":"application/json"}};console.log("request = ",e),fetch(e,t).then(n=>n.json()).then(n=>{console.log("res = ",n)})}let de=document.querySelector("#BBBB");de.addEventListener("click",()=>ae());const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let z=document.querySelector(".question_block"),b=document.querySelector(".question_panel .contentedit div"),I=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(z.style.display="block"),I.scrollTo(0,1e4)};window.closeChat=function(e){z.style.display="none"};b&&b.addEventListener("keydown",e=>{e.code==="Enter"&&(I.innerHTML+="<b>-Вы </b>"+b.innerHTML+"<br><br>",I.scrollTo({top:1e4,behavior:"smooth"}),ue(b.innerHTML),setTimeout(()=>b.innerHTML=""))});function ue(e){let l=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(l).then(o=>o.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("abdul");e&&(e.innerHTML=me)});const me=`
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
`;window.addCompare=function(e){let t=window.currentCars.find(i=>i.id===e),n=k(),l={id:t.id,address:t.address,name:t.name,price:t.price,info:t.info,href:t.href,photo:t.photos[0]},o=document.querySelector("#compareId_"+e),r=o.classList.contains("chosen"),s=n.find(i=>i.id===e);r?(o.classList.remove("chosen"),n=n.filter(i=>i.id!==l.id)):(o.classList.add("chosen"),s||n.push(l)),localStorage.setItem("ComparedCars",JSON.stringify(n)),A(n)};function k(){let e=localStorage.getItem("ComparedCars");return e?e=JSON.parse(e):e=[],e}function A(e){let t=document.querySelector("#compareCount");e.length?(t.innerHTML='<img src="/icons/car-icon_b.svg">'+e.length,t.style.display="flex"):t.style.display="none"}window.deleteAllCar=function(){window.deleteCar()};window.deleteCar=function(e){let t=k();if(e?t=t.filter(n=>n.id!==e):t=[],localStorage.setItem("ComparedCars",JSON.stringify(t)),A(t),W(t),!t.length){let n=document.querySelector(".compare-clear");n.style.display="none"}};function W(e){let t=e||k();if(A(t),t.forEach(n=>{let l=document.querySelector("#compareId_"+n.id);l&&l.classList.add("chosen")}),location.pathname==="/personal/list-compared/"){let n=document.querySelector("#compare-field"),l="",o="",r="",s="",i="",f="",p="",h="",g="",u="",O="",M="",B="",P="",D="",R="";t.forEach(a=>{let v=a.info.split(",");l+=`<td><a href="javascript:deleteCar(${a.id})">Удалить</a></td>`,o+=`<td><a href="${a.href}"><img src="${a.photo}" alt=""></a></td>`,r+=`<td><a href="${a.href}">"${a.name.slice(0,-5)}</a></td>`,s+=`<td>${a.price} руб.</td>`,i+=`<td>${v[0]}</td>`,f+=`<td>${a.name.slice(-5)}</td>`,p+="<td></td>",h+=`<td>${v[1]}</td>`,g+=`<td>${v[4]}</td>`,u+="<td></td>",O+="<td></td>",M+=`<td>${v[3]}</td>`,B+=`<td>${v[2]}</td>`,P+=`<td>${a.address.split(",")[0]}</td>`,D+=`<td>${a.name.split(" ")[0]}</td>`,R+=`<td>${a.name.split(" ")[1]}</td>`}),n.innerHTML=`
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
                ${i}
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
               ${O}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${M}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${B}
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
            </tr>`,t.length||(n.innerHTML='<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>')}}document.addEventListener("DOMContentLoaded",()=>{W();let e=!1,t,n=document.querySelector(".bx_compare");n&&(n.addEventListener("mousedown",l=>{e=!0,t=l.clientX,l.preventDefault()}),n.addEventListener("mousemove",l=>{e&&(n.scrollBy(t-l.clientX,0),t=l.clientX)}),n.addEventListener("mouseup",()=>e=!1))});window.dblCompare=function(){location.href="/personal/list-compared/"};(function(){var e=window,t="___grecaptcha_cfg",n=e[t]=e[t]||{},l="grecaptcha",o=e[l]=e[l]||{};o.ready=o.ready||function(u){(n.fns=n.fns||[]).push(u)},e.__recaptcha_api="https://www.google.com/recaptcha/api2/",(n.render=n.render||[]).push("onload"),(n.clr=n.clr||[]).push("true"),(n["anchor-ms"]=n["anchor-ms"]||[]).push(2e4),(n["execute-ms"]=n["execute-ms"]||[]).push(15e3),e.__google_recaptcha_client=!0;var r=document,s=r.createElement("script");s.type="text/javascript",s.async=!0,s.charset="utf-8";var i=e.navigator,f=r.createElement("meta");f.httpEquiv="origin-trial",f.content="A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",i&&i.cookieDeprecationLabel?i.cookieDeprecationLabel.getValue().then(function(u){u!=="treatment_1.1"&&u!=="treatment_1.2"&&u!=="control_1.1"&&r.head.prepend(f)}):r.head.prepend(f),s.src="https://www.gstatic.com/recaptcha/releases/jdMmXeCQEkPbnFDy9T04NbgJ/recaptcha__ru.js",s.crossOrigin="anonymous",s.integrity="sha384-cPiSccAbcXq4943v8wyqSDIxNGvgl0FEZ+DUT8jkznJpS79UD24vTb7s/fa2evVV";var p=r.querySelector("script[nonce]"),h=p&&(p.nonce||p.getAttribute("nonce"));h&&s.setAttribute("nonce",h);var g=r.getElementsByTagName("script")[0];g.parentNode.insertBefore(s,g)})();
