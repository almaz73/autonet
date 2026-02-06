(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();let v=document.querySelector(".comb__items"),P=document.querySelector(".comb_field"),F=document.querySelector(".comb__selected"),G=document.querySelector(".footer-city-button"),T=document.querySelector("#city-contacts"),M=document.querySelector(".comb_field img"),C=document.querySelector(".mySwiper"),J=localStorage.getItem("selectedCity");P&&(F.innerHTML=J||"Россия",document.addEventListener("click",()=>O(!1)),P.addEventListener("click",e=>Q(e)),v.addEventListener("click",e=>N(e)));function N(e){let t=e.target.innerText;if(t.length>30)return!1;F.innerHTML=G.innerHTML=t,T&&(T.innerHTML=t),localStorage.setItem("selectedCity",t),window.setCity&&window.setCity(t)}function Q(e){O(v.style.display!=="block"),e.stopPropagation()}function O(e){v&&(v.style.display=e?"block":"none"),M&&(M.style.rotate=e?"180deg":"0deg"),C&&(C.style.zIndex=e?-1:0)}let W=document.querySelector("#innerCity"),y=document.querySelector(".form__modal-place--group input"),K=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],Y=["А","Б","Е","К","М","Н","О","С","Т","У"];function j(e){let t="";Y.forEach(a=>{let o=K.filter(s=>s.slice(0,1)===a),r="";o.forEach(s=>{let n=e&&s.toUpperCase().includes(e)?" class='yel'":"";r+=`<li><a href="javascript:void(0)" onclick="setCity('${s}')"><span ${n}>${s}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${a}</div><ul>${r}</ul></div></div>`}),W.innerHTML=t}y&&y.addEventListener("input",e=>{j(y.value.toUpperCase())});let X=document.querySelector(".button__burger"),f=document.querySelector(".main-nav.menu"),h=document.querySelector(".button__burger"),l=document.querySelector(".main-nav.cities"),B=document.querySelector(".footer-city-button"),H=document.querySelector("#city-contacts"),z=document.querySelector(".modal-place__close"),D=document.querySelector(".mySwiper"),i,b=document.querySelector(".main-nav.rightpanel"),I=document.querySelector("#closer-fon"),$=document.querySelector(".modal-closer.form");D&&(D.style.zIndex=0);X&&X.addEventListener("click",()=>{if(i)return i=!1,l.style.transform="translateX(150vw)",!1;i=f.style.transform!=="none",f.style.transform=i?"none":"translateX(150vw)",i?(h.classList.add("close"),i=!1):h.classList.remove("close")});B&&B.addEventListener("click",()=>U());H&&H.addEventListener("click",()=>U());function U(){i=l.style.transform!=="none",i&&(l.style.transform="none",l.style.backgroundColor="white"),j()}z&&z.addEventListener("click",()=>{l.style.transform="translateX(150vw)"});let R=document.querySelector("#cookie-accept"),w=document.querySelector("#cookie-banner"),Z=localStorage.getItem("isCoockieBannerShow");!Z&&w&&w.classList.add("show");R&&R.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),w.classList.remove("show")});function _(e){b&&(b.style.transform="translateX(150vw)"),l&&(l.style.transform="translateX(150vw)"),f&&(f.style.transform="translateX(150vw)"),h&&h.classList.remove("close"),closeChat()}window.close_all=_;document.addEventListener("keydown",e=>e.key==="Escape"&&_());window.openRightPanel=function(){i=b.style.transform!=="none",i&&(b.style.transform="none")};I&&I.addEventListener("click",()=>_());$&&$.addEventListener("click",()=>_());const d=document.getElementById("mainPhoto");d&&d.addEventListener("click",function(){if(window.innerWidth<900)return!1;d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen?d.webkitRequestFullscreen():d.msRequestFullscreen&&d.msRequestFullscreen()});let k=document.querySelector(".question_block"),p=document.querySelector(".question_panel .contentedit div"),q=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(k.style.display="block"),q.scrollTo(0,1e4)};window.closeChat=function(e){k&&(k.style.display="none")};p&&p.addEventListener("keydown",e=>{e.code==="Enter"&&(q.innerHTML+="<b>-Вы </b>"+p.innerHTML+"<br><br>",q.scrollTo({top:1e4,behavior:"smooth"}),ee(p.innerHTML),setTimeout(()=>p.innerHTML=""))});function ee(e){let o=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(o).then(r=>r.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{window.reloadAbdul()});window.reloadAbdul=function(){let e=document.querySelector("abdul");e&&(e.innerHTML=te)};const te=`
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
`;function S(e,t){let a="green";t==="warning"&&(a="orangered"),t==="error"&&(a="red");let o=document.createElement("div");o.innerText=e,o.classList.add("message-span"),o.style.backgroundColor=a,document.body.appendChild(o),setTimeout(()=>o.classList.add("show"),100),setTimeout(()=>{o.style.opacity="0",o.classList.remove("show")},3e3)}const ne={events:{},on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)},emit(e,t){this.events[e]&&this.events[e].forEach(a=>a(t))},off(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(a=>a!==t))}};let le={brandsIds:[],modelsIds:[],gearboxTypes:[],engineTypes:[],driveTypes:[],wheelTypes:[],bodyTypes:[],bodyColors:[]};function g(e){return parseInt(e).toLocaleString("ru-RU")}function pe(e){let t=[];return e&&e.forEach(a=>{let o=g(a.milleage)+" км, ";a.engineCapacity&&(o+=a.engineCapacity),a.gearboxType&&(o+=" "+a.gearboxType),a.enginePower&&(o+=" ("+a.enginePower+"&nbsp;л.с)"),a.bodyType&&(o+=", "+a.bodyType),o+=", "+a.driveType,a.engineType&&(o+=", "+a.engineType);let r=g(parseInt(parseInt(a.price.replace(/ /g,""))/90.12));t.push({address:a.fullAddress,id:a.id,name:a.brand+" "+a.model,href:"/cars/car.html?id="+a.id,price:g(a.price),fromPerMonth:r,info:o,photos:a.images,yearReleased:a.yearReleased})}),t}function ue(e,t){const a=[2,0,1,1,1,2];return t[e%100>4&&e%100<20?2:a[e%10<5?e%10:5]]}function me(e){return new URLSearchParams(window.location.search).get(e)}function ve(e){let t=document.querySelector(".coin");e===!1&&(t.querySelector("span").title="По возрастанию",t.querySelector("img").style.transform="rotate(180deg)"),e===null&&(t.querySelector("span").title="Не упорядоченно",t.querySelector("img").style.transform="rotate(270deg)"),e===!0&&(t.querySelector("span").title="По убыванию",t.querySelector("img").style.transform="rotate(0deg)")}const fe=function(e){let t=e.value;if(!t)return"";let a=t.replace(/\D/g,""),o="";if(t.length<2)return a;["7","8","9"].indexOf(a[0])>-1?(a[0]=="9"&&(a="7"+a),o=(a[0]=="8"?"8":"+7")+" ",a.length>1&&(o+="("+a.substring(1,4)),a.length>=5&&(o+=") "+a.substring(4,7)),a.length>=8&&(o+="-"+a.substring(7,9)),a.length>=10&&(o+="-"+a.substring(9,11))):o=a.substring(0,11),e.value=o},ae=function(e){return e?(e.slice(0,2)=="+7"&&(e=e.replaceAll("+7","8")),e.replaceAll(" ","").replaceAll("+","").replaceAll("(","").replaceAll(")","").replaceAll("-","")):""},oe=function(e){if(!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(e)&&e)return S("Ошибочный Email ","error")};function re(e){let t=!1,a=!1;return e.forEach(o=>{if(o&&o.required){let r=function(){o.style.background="",o.removeEventListener("change",r)};o.style.background=o.value?"":"pink",o.value||(t=!0),o.addEventListener("change",r)}if(o&&o.classList.contains("capctha-div")&&!o.classList.contains("checked")&&(o.style.border="1px solid red",t=!0),o&&o.type==="checkbox"){let r=o.checked;o.parentNode.style.border=r?"":"1px solid red",r||(t=!0),a=t}if(o&&o.classList.contains("attent")&&(o.style.display=a?"block":"none"),o&&o.name==="email"&&o.value)return oe(o.value);o&&o.name==="phone"&&o.value&&ae(o.value).length!==11&&S("Телефон не содержит 11 цифр","warning")}),t&&S("Есть незаполненные поля","warning"),t}function he(){document.querySelectorAll(".with_sub_field").forEach(t=>{let a=t.querySelector(".with_sub_field .select");a.querySelectorAll(".field").forEach(r=>{r.addEventListener("click",s=>o(s.target.innerHTML))});function o(r){a.querySelectorAll(".field").forEach(s=>{s&&s.classList.contains("active")&&s.classList.remove("active")}),a.querySelectorAll(".field").forEach(s=>{s&&s.innerHTML===r&&s.classList.add("active")}),t.querySelector("input").value=r}t.addEventListener("click",()=>{let r=a.style.display!=="block";a.style.display=r?"block":"none"})})}document.addEventListener("DOMContentLoaded",()=>{V()});function V(){document.querySelectorAll(".capctha-div").forEach((t,a)=>{let o="_"+a,r=t;r&&(r.innerHTML=`<p class="instructions ${o}">
          Подтвердите, что вы не робот<br>
          Сдвиньте квадрат в белую область</p>
        <p class="result">✅<span>Спасибо !</span></p>
        <div class="target-area ${o}"></div>
        <div class="puzzle-piece ${o}">⇦ ⇨</div>`,new se(o,r))})}class se{constructor(t,a){this.parent=a,this.puzzlePiece=document.querySelector(`.puzzle-piece.${t}`),this.targetArea=document.querySelector(`.target-area.${t}`),this.instructions=document.querySelector(`.instructions.${t}`),this.isDragging=!1,this.initialX=0,this.currentX=0,this.offsetX=0,this.targetX=parseInt(Math.random()*73)+5,this.parent&&this.init()}init(){this.setupEventListeners(),this.updatePosition()}setupEventListeners(){this.puzzlePiece.addEventListener("mousedown",this.startDragging.bind(this)),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("mouseup",this.stopDragging.bind(this)),this.puzzlePiece.addEventListener("touchstart",this.startDraggingTouch.bind(this)),document.addEventListener("touchmove",this.dragTouch.bind(this)),document.addEventListener("touchend",this.stopDragging.bind(this))}startDragging(t){this.instructions.style.left="-10000px",this.targetArea.style.left=this.targetX+"%",this.isDragging=!0,this.initialX=t.clientX-this.offsetX,this.puzzlePiece.style.cursor="grabbing",t.preventDefault()}startDraggingTouch(t){this.isDragging=!0;const a=t.touches[0];this.initialX=a.clientX-this.offsetX,t.preventDefault()}drag(t){this.isDragging&&(t.preventDefault(),this.currentX=t.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.currentX<0&&(this.currentX=0),this.updatePosition())}dragTouch(t){if(!this.isDragging)return;const a=t.touches[0];this.currentX=a.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.updatePosition(),t.preventDefault()}stopDragging(){this.isDragging=!1,this.puzzlePiece.style.cursor="move",this.verify()}updatePosition(){this.puzzlePiece.style.transform=`translateX(${this.currentX}px)`,this.offsetX=this.currentX}verify(){const t=this.parent.getBoundingClientRect(),a=this.puzzlePiece.getBoundingClientRect();document.querySelector(".result");const o=(a.left-t.left)/t.width*100;Math.abs(this.targetX-o)<1&&(this.parent.style.border="",this.parent.classList.add("checked"))}}const ce=[{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"54.912580,52.320238",address:"ул. Герцена, 1б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Aef6e8fca746164e348adf860145722f5a890983a47408dc685ab04b8076a0f7b&amp;source=constructor"},{city:"Альметьевски",url:"/photo/contacts/chelna_myra.webp",coords:"54.912580,52.320238",address:"ул. Советская, 182/1",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Aa48691a6bc05dd67e7bcfb1ad8e429acaff3cf13a292a8f4a69e512dbacb7fda&amp;source=constructor"},{city:"Астрахань",url:"/photo/contacts/chelna_myra.webp",coords:"46.288304, 47.971339",address:"ул. Адмирала Нахимова, 76",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A4e8033de51901c5bd7b5a457e33850072459acff83441bcc859c3b297b337a01&amp;source=constructor"},{city:"Буинск",url:"/photo/contacts/chelna_myra.webp",coords:"54.952455, 48.286585",address:"ул. Ефремова, 2а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac38e150dd8e42257ca0c6d684e1265b29fe99ae6c77dc11c29773e5e85c015d4&amp;source=constructor"},{city:"Екатеринбург",url:"/photo/contacts/chelna_myra.webp",coords:"56.789579, 60.607625",address:"ул. 8 марта, 205А",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7d97dc8bafe4d372c2b3d4cf1cb634f3835520141a7310296d2f363580c2075f&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.823581, 49.159553",address:"пр. Ямашева, 115а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A0740fee9f6396ff8f4aa3048c10c417b7f2be4ce61e41f46d69a4627f97951c7&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.826655, 49.022026",address:"Горьковское шоссе, 55",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af4c7baecf06e4154b6bbd13632c95edc600e2482b332190b262776928450e25f&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.803967, 49.208709",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A169e10ae037f14065a213eecd07e24f9a9d53659f4170e2d3c90d579d7b544bd&amp;source=constructor"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"53.367384, 59.063538",address:"Шоссе Космонавтов 59А",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5034cda35a547f1137730dd647fb151bce1c2d0ab1202a8241bcf7eebda0ceda&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.734962, 52.421602",address:"пр. Хасана Туфана, 3",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af388f618621b0c96a1f876db4250b86a7d605a4dd2620aa26e0c9e68a27cc8fa&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.674714, 52.281223",address:"пр. Мусы Джалиля, 15",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A1f2ed0dd2ffe0c767cc59e635f514c05fb40bf75730bef48fd3c5ca1bedc9ff5&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.613672, 51.779136",address:"ул. Южная, 5г",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A07be9d83adb6c7f5a6f64ec6589361c02dffcaf76a77c2d1f3bc90495bdad97c&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.614353, 51.969439",address:"ул. Промзона,10/22",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A35da28743b493552af8ed2fb472dcfc555d07bff1d302851e5caf07330deab72&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.631989,51.828178",address:"ул. Спортивная, 4а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5ca83ddacf20c9ebed72ec201052cfb4ed286b32f8c00f7d7c4da38b89af08dd&amp;source=constructor"},{city:"Нижний Тагил",url:"/photo/contacts/chelna_myra.webp",coords:"57.946923, 59.916489",address:"ул. Краснознаменная, 134",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6f60d8f689946cf10bc949fb4319b3edb1ee1218a7ec8c9f3d3b00d0c7dcafb7&amp;source=constructor"},{city:"Нижний Тагил",url:"/photo/contacts/chelna_myra.webp",coords:"57.879827, 59.932685",address:"Черноисточинское ш, 68с2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Abfdeb70911627e4f5364dc9f99d07b51c2126f962b56eccbc5f36dc0dfdef20a&amp;source=constructor"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"53.141011, 50.181024",address:"Южное шоссе, 10а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac49f6a300c736bd719acb3376728ee628dc7d9d371781ac444e51fb63a37fa82&amp;source=constructor"},{city:"Серов",url:"/photo/contacts/chelna_myra.webp",coords:"59.586669, 60.570884",address:"ул. Каквинская, 29",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A9a5736f0d49c86e9d3d38d16cd609e413a2b2838b483e64f9d9d336f044c89c8&amp;source=constructor"},{city:"Стерлитамак",url:"/photo/contacts/chelna_myra.webp",coords:"53.639303,55.911492",address:"ул. Шаймуратова, 12",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6d26f637308738722b92d9f7211e78b4410c02bcb4ed096449da348add2097b4&amp;source=constructor"},{city:"Тверь",url:"/photo/contacts/chelna_myra.webp",coords:"56.823085, 35.874940",address:"ул. Оснабрюксая, 39,<br> пом. 111Б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A2d25b65df6c8d0b7cf749b5e83c7168ee79f3f3ff2a62d7defed0609f1b4aee0&amp;source=constructor"},{city:"Тольятти",url:"/photo/contacts/chelna_myra.webp",coords:"53.570484, 49.469034",address:"Обводное ш., 71",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5ab93efaa670c0a4ecc603f0a719e58bd389221aa688a384893cba9d5657b4f4&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.741061, 55.987866",address:"пр. Октября, 4/1, ТЦ Мир, <br> 3 уровень",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ae6fc36ea5faa5164e18586cc2c35b1d09f1401830b27c11438377d20143a9303&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.773538, 56.065914",address:"ул. Маршала Жукова, 16",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ae77ab1daaa8f743e51e23372676cf7785ea83ffeaf29df86d7cec91039b41deb&amp;source=constructor"}],be=[{city:"Ижевск",url:"/photo/contacts/chelna_myra.webp",coords:"56.886263, 53.309622",address:"ул. Автозаводская, 5а/3<br> (Рулевой)",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7a0aa8d3c0916b54b822ec3ef1b00b9a27b44491cd4c8d77c59098b1bcffa211&amp;source=constructor"},{city:"Йошкар-Ола",url:"/photo/contacts/chelna_myra.webp",coords:"56.643243, 47.927752",address:'Сернурский тракт, 23<br> (здание "Гарант Авто")',tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A53fc65c2944e3744e91206e42120ad5319866b9bffb8f276fda6762447aab99c&amp;source=constructor"},{city:"Киров",url:"/photo/contacts/chelna_myra.webp",coords:"58.61728733640516, 49.629800881945016",address:"ул. Лепсе, 25/4",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7889c8a92ec01c9122a48ddcaec1a8ac753bd68146338a1c4deed34d90f9aeab&amp;source=constructor"},{city:"Магнитогорск",url:"/photo/contacts/chelna_myra.webp",coords:"53.430389, 58.973231",address:"ул. Герцена 6, <br>БЦ АльфаЦентр , офис 103",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A5a56a953780b0e40fbf31ddf65b7633b6e20bbdb0bed23e6fb4c1f3993229fdf&amp;source=constructor"},{city:"Нижний Новгород",url:"/photo/contacts/chelna_myra.webp",coords:"56.311626, 44.070441",address:'ул.Родионова, 167 <br>("Тайм Сервис")',tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A4ce9ad24bc1a339b419f7b5069aeb4503efc432c074ce7a41b2683995b08826d&amp;source=constructor"},{city:"Пенза",url:"/photo/contacts/chelna_myra.webp",coords:"53.18924053714283, 45.0405558150391",address:"ул. Измайлова, 26",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A32cbf070a2316cbc09c1d3d0d8399b6f3e035b51070bad0e7c3041e6d8845213&amp;source=constructor"},{city:"Пермь",url:"/photo/contacts/chelna_myra.webp",coords:"57.989155, 56.207758",address:"ул.Стахановская, 54а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8267dbdd95bb5fc764758e7ff0b66cf403880143d4dade949af88e5bcc1fa334&amp;source=constructor"},{city:"Самара",url:"/photo/contacts/chelna_myra.webp",coords:"53.21473485688437, 50.18689756337296",address:"ул. Авроры, 156в",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8c201bb0fff1372a85f28f25de2c77cc80ea1d7272516bce6abd368c91324f6e&amp;source=constructor"},{city:"Чебоксары",url:"/photo/contacts/chelna_myra.webp",coords:"56.115825, 47.270554",address:"пр. Мира, 54б (Автомания)",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A68e72e069da58fd0337460e493c87575afafd93789bd40d35e1b5a606e335d3b&amp;source=constructor"},{city:"Челябинск",url:"/photo/contacts/chelna_myra.webp",coords:"55.154239, 61.303793",address:"БЦ Спиридонов, <br>ул. Ленина 21в , офис 1052",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A711b921703be62b7b6bb60f4a3a08775c26e9862880855f1d0f16835be8a4003&amp;source=constructor"}],_e=[{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.823581, 49.159553",address:"пр. Ямашева, 115а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A6986b3ac4ba556c34180924eebb64192ba4696b58dab9b1e9fd7f5e34560aaa5&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"55.803967, 49.208709",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Abcb084f68946abe81affde230c329b47e53ab28d9d6c28a5ff039f8454f9d8b8&amp;source=constructor"}],ye=[{city:"Альметьевск",url:"/photo/contacts/chelna_myra.webp",coords:"54.903324, 52.324269",address:"ул. Герцена, 1б",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ad3a953bdeec5c742d7c5ad9a6e976789cccf67c719c5fb7841e40199048de33a&amp;source=constructor"},{city:"Казань",url:"/photo/contacts/chelna_myra.webp",coords:"54.903324, 52.324269",address:"пр. Победы, 212к2",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ac830f4cc623c4400e1c1b19b83f5edb3e4fa15d40a10d6885a4eb121c287eaa6&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.734962, 52.421602",address:"пр. Хасана Туфана, 3",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Ab30605670e79544549f3861c9d7fde3f5f302058711dd433dcdbc73d83863a48&amp;source=constructor"},{city:"Набережные Челны",url:"/photo/contacts/chelna_myra.webp",coords:"55.674714, 52.281223",address:"пр. Мусы Джалиля, 15",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A459a0443c44b3d9771b776391ae96d4b6aa8c35aad7db04db13030bd2f4537e0&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.614353, 51.969439",address:"ул. Промзона,10/22",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3Af7472f97221ff01d1cf41cc2c93557af5d73b5297d3b7a9fd50e40d50cf3f857&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.631989,51.828178",address:"ул. Спортивная, 4а",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A9778e202e4bfa133570d5b0a62f34e827e97f7e934cee1738b3ca0326469efb8&amp;source=constructor"},{city:"Нижнекамск",url:"/photo/contacts/chelna_myra.webp",coords:"55.613672, 51.779136",address:"ул. Южная, 5г",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A8e2039178922dc29b2ef2a87fa30d1e15d2a8ef5c67388cb3741dc608c9e3e4d&amp;source=constructor"},{city:"Уфа",url:"/photo/contacts/chelna_myra.webp",coords:"54.773538, 56.065914",address:"ул. Маршала Жукова, 16",tel:"8–800–500–11–56",days:"ПН-ВС с 9:00 до 21:00",map:"https://yandex.ru/map-widget/v1/?um=constructor%3A7281c97a9571a78d8adcf25c3ec6bab5c14cfcd042ccab43cc1078dd2cf40504&amp;source=constructor"}],de=`
<div class="div ">
        <h2>Заказать звонок</h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder=" Ваш телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
                  
            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="glob_call()">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="v3">
                <label for="v3"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>`;let ge=`
<div class="bid">
    <div class="div" style="margin-top: -120px;">
        <h2>Заявка на <span style="color: var(--color-red)">выкуп</span></h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="city" placeholder="Город">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="bramd" placeholder="Марка">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="model" placeholder="Модель">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="year" placeholder="Год выпуска">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="applyBid()">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="id_">
                <label for="id_"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`;const we=`
<div class="look-auto">
    <div class="div" style="margin-top: -73px;">
        <h2>Записаться <br> на <span style="color: var(--color-red)">осмотр</span> автомобиля</h2>
        <div class="address"></div>
        <br>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Как ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="year" placeholder="Год выпуска">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="email" placeholder="Е-mail">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="lookAuto()"> 
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="n1">
                <label for="n1"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`,ke=`
<div class="div ">
        <h2>Заявка на <span style="color: var(--color-red)">автоподбор</span></h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
                  
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="email" placeholder="E-mail">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="podbor_bid_f(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="v3">
                <label for="v3"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>`,qe=`
<div class="title " style="text-align: left;">
            Оставьте заявку на <strong>подбор</strong> автомобиля
        </div>
        <div>
            <div class="block S  form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>

            <div class="block S  form__modal--group">
                <div class="form__group">
                  <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>

            <div class="block S  form__modal--group">
                <div class="form__group form__group--label">
                    <input name="email" placeholder="E-mail">
                </div>
            </div>
          
            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>
            <div class="form__modal--button">
                <button class="page__btn page__btn--current f-9" onclick="podbor_bid_f(this)">
                  <span>Отправить заявку</span>
                </button>
            </div>
            <div class="modal__personal">
                <input type="checkbox" id="dd1">
                <label for="dd1">
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>

        </div>`,Se=`
    <div class="wrap">
        <div class="title">
          Оценить <strong style="color: var(--color-red)">автомобиль</strong>
        </div>
        <div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Ваше имя *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                   <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="city" required placeholder="Город *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="brand"  placeholder="Марка">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="model"  placeholder="Модель">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="year"  placeholder="Год выпуска">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="sendBid(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label>
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>

        </div>
    </div>
`,xe=`
 <div class="wrap">
        <div>
            <div class="title">
                <strong style="color: #e5393b">
                    Получите расчет</strong> прибыли автосалона АВТОСЕТЬ.РФ в своем городе
            </div>

            <div class=" form__modal--group">
                <div class="form__group ">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>

            <div class="form__modal--group">
                <div class="form__group">
                  <input name="phone" required placeholder="Ваш телефон *" oninput="formattingPhone(this)">
                </div>
            </div>

            <div class="block S  form__modal--group">
                <div class="form__group">
                  <input name="city" required placeholder="Город *">
                </div>
            </div>

            <div class="block S  form__modal--group">
                <div class="capctha-div"></div>
            </div>
            <div>
                <button class="page__btn page__btn--current" onclick="callMe(this)">
                    Перезвоните мне
                </button>
            </div>
            <div class="modal__personal">
                <input type="checkbox" id="dd2">
                <label for="dd2">
                    Нажав кнопку «Отправить» я даю согласие
                    на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>

        <div class="formBottom" style="color:#555">
            <p>или позвоните по номеру</p>
            <a href="tel:88005001156">8-800-500-11-56</a>
        </div>
    </div>`,Le=`<div class="promo-detail-call__wrap">
    <div class="div">
        <h3><span style="color: var(--color-red)"> Получите расчет</span> прибыли автосалона АВТОСЕТЬ.РФ в своем городе </h3>
    </div>


    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder="Ваш телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="city" required placeholder="Город *">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="getQuoite(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="dd4">
                <label for="dd4"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </form>
    </div>

</div>`,Ae=`
<div class="promo-detail-call__wrap boss">
    <div class="div">
        <h3>Задать <span style="color: var(--color-red)">вопрос</span></h3>

        <p>Просто оставьте свои контактные данные и мы сами вам перезвоним!</p>
    </div>


    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input placeholder="Имя *" name="name" required>
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder=" Ваш телефо *" oninput="formattingPhone(this)">
                </div>
            </div>
           <div class="form__modal--group">
                <div class="form__group">
                    <input name="message" required placeholder="Сообщение *">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="questionBoss()">
                <span> Отправить</span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="dd5">
                <label for="dd5"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`,Ee=`
<div class="wrap">
                    <div class="title">
                        Заявка  на <strong style="color: var(--color-red)">страхование</strong>
                    </div>
                    <div>
                        <div class="form__modal--group">
                            <div class="form__group">
                                <input name="name" required placeholder="Имя *">
                            </div>
                        </div>
                        <div class="form__modal--group">
                            <div class="form__group">
                                <input name="phone" required placeholder="Ваш телефон *" oninput="formattingPhone(this)">
                            </div>
                        </div>
                        <div class="form__modal--group">
                            <div class="form__group">
                                <input name="city" required placeholder="Город *">
                            </div>
                        </div>
                        <div class="form__modal--group" style="position: relative">
                            <div class="form__group with_sub_field">
                                <input name="osago"  value="ОСАГО">

                                <div class="select">
                                    <div class="field">КАСКО</div>
                                    <div class="field active">ОСАГО</div>
                                </div>
                            </div>
                        </div>
                        <div class="form__modal--group">
                            <div class="form__group">
                                <input name="brand"  placeholder="Марка">
                            </div>
                        </div>
                        <div class="form__modal--group">
                            <div class="form__group">
                                <input name="model"  placeholder="Модель">
                            </div>
                        </div>

                        <div class="form__modal--group">
                            <div class="capctha-div"></div>
                        </div>

                        <button class="page__btn page__btn--current" onclick="sendInsurance(this)">
                            <span> Отправить заявку </span>
                        </button>

                        <div class="modal__personal">
                            <input type="checkbox">
                            <label>
                                Нажав кнопку «Отправить заявку» я даю согласие
                                на обработку
                                <a href="/privacy-policy/" target="_blank">персональных данных</a>
                            </label>
                        </div>

                    </div>
                </div>`,Pe=`
    <div class="wrap">
        <div class="title">
          Оставьте заявку на <span style="color:red">техосмотр</span> автомобиля
        </div>
        <div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                   <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="city" required placeholder="Город *">
                </div>
            </div>        
            <div class="form__modal--group">                
                <div class="form__group with_sub_field">
                    <input name="select"  placeholder="Выберите услугу">

                    <div class="select">
                        <div class="field">Диагностика</div>
                        <div class="field ">Техническое обслуживание</div>
                        <div class="field">Ремонт двинателя</div>
                        <div class="field">Ремонт трансмиссии</div>
                        <div class="field">Ремонт подвески</div>
                        <div class="field">Ремонт рулевого управления</div>
                        <div class="field">Ремонт тормозной системы</div>
                    </div>
                </div>
            </div>


            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="send_obsl(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label>
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>

        </div>
    </div>
`,Te=`
    <div class="wrap">
        <div class="title">
          Заявка на <strong style="color: var(--color-red)">автокредит</strong>
        </div>
        <div>
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Ваше имя *">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                   <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="city" placeholder="Город">
                </div>
            </div>
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="price"  placeholder="Цена">
                </div>
            </div>          
            <div class="form__modal--group">
                <div class="form__group">
                  <input name="year"  placeholder="Год выпуска">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="sendBid(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label>
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>

        </div>
    </div>
`,Me=`
    <div class="div" >
        <h2>Оставьте заявку на  <span style="color: var(--color-red)">техосмотр</span> автомобиля</h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="phone" required placeholder="Телефон *" oninput="formattingPhone(this)">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input  name="city"  required placeholder="Город *">
                </div>
            </div>
            
            <div class="form__modal--group">                
                <div class="form__group with_sub_field">
                    <input name="select"  placeholder="Выберите услугу">

                    <div class="select">
                        <div class="field">Диагностика</div>
                        <div class="field ">Техническое обслуживание</div>
                        <div class="field">Ремонт двинателя</div>
                        <div class="field">Ремонт трансмиссии</div>
                        <div class="field">Ремонт подвески</div>
                        <div class="field">Ремонт рулевого управления</div>
                        <div class="field">Ремонт тормозной системы</div>
                    </div>
                </div>
            </div>
            
          
            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="send_obsl(this)">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="id_">
                <label for="id_"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>
`;let ie=document.querySelector(".global-call"),u=document.querySelector("#right_panel_content");ie.addEventListener("click",()=>{openRightPanel(),u.innerHTML=de,V()});window.glob_call=function(){let e=u.querySelector(".capctha-div"),t=u.querySelector('[name="name"]'),a=u.querySelector('[name="phone"]'),o=u.querySelector('[type="checkbox" ]');if(re([e,t,a,o]))return!1;let r={name:t.value,phone:a.value};console.log("params",r)};window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".footer-city-button"),t=document.querySelector(".comb__selected"),a=document.querySelector(".main-nav.cities"),o=document.querySelector("#city-contacts"),r=document.querySelector("#addr_foot"),s=document.querySelector(".map-modal"),n=document.querySelector(".map-modal .map"),x=document.querySelector(".photo-modal"),L=document.querySelector(".photo-modal .pic");e.innerHTML=localStorage.getItem("selectedCity")||"Россия",o&&(o.innerHTML=e.innerHTML||"Россия"),A(e.innerHTML);function A(c){let E=ce.filter(m=>m.city===c);r.innerHTML="",E&&E.forEach(m=>{r.innerHTML+=`
            <div class="address">
                <a href="javascript:openMap('${m.map}')">
                ${m.address}
                </a>
            </div>`})}window.setCity=function(c){A(c),localStorage.setItem("selectedCity",c),a.style.transform="translateX(150vw)",t.innerHTML=e.innerHTML=c,o&&(o.innerHTML=c)},s&&(window.openMap=function(c){s.style.display=c?"grid":"none",n.innerHTML=`<iframe src="${c}" width="100%" height="720" frameborder="0"></iframe>`},window.openPhoto=function(c){x&&(x.style.display=c?"grid":"none"),L&&(L.innerHTML=`<img src ="${c}">`)},document.addEventListener("keydown",c=>{c.key==="Escape"&&s&&(window.openMap(!1),window.openPhoto(!1))}))});export{Te as A,Pe as B,Me as C,oe as D,ge as a,g as b,re as c,ue as d,we as e,fe as f,me as g,qe as h,V as i,ke as j,ce as k,be as l,S as m,ye as n,le as o,pe as p,ne as q,ve as r,ae as s,_e as t,Ae as u,Se as v,Le as w,xe as x,Ee as y,he as z};
