(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=i(s);fetch(s.href,r)}})();let v=document.querySelector(".comb__items"),L=document.querySelector(".comb_field"),I=document.querySelector(".comb__selected"),$=document.querySelector(".footer-city-button"),E=document.querySelector("#city-contacts"),P=document.querySelector(".comb_field img"),T=document.querySelector(".mySwiper"),F=localStorage.getItem("selectedCity");L&&(I.innerHTML=F||"Россия",document.addEventListener("click",()=>A(!1)),L.addEventListener("click",e=>U(e)),v.addEventListener("click",e=>O(e)));function O(e){let t=e.target.innerText;if(t.length>30)return!1;I.innerHTML=$.innerHTML=t,E&&(E.innerHTML=t),localStorage.setItem("selectedCity",t),window.setCityContacts&&window.setCityContacts(t)}function U(e){A(v.style.display!=="block"),e.stopPropagation()}function A(e){v&&(v.style.display=e?"block":"none"),P&&(P.style.rotate=e?"180deg":"0deg"),T&&(T.style.zIndex=e?-1:0)}let N=document.querySelector("#innerCity"),y=document.querySelector(".form__modal-place--group input"),j=["Альметьевск","Астрахань","Бугульма","Буинск","Екатеринбург","Казань","Магнитогорск","Набережные Челны","Нижнекамск","Нижний Тагил","Оренбург","Самара","Саранск","Стерлитамак","Тольятти","Тула","Ульяновск","Уфа"],V=["А","Б","Е","К","М","Н","О","С","Т","У"];function D(e){let t="";V.forEach(i=>{let o=j.filter(r=>r.slice(0,1)===i),s="";o.forEach(r=>{let c=e&&r.toUpperCase().includes(e)?" class='yel'":"";s+=`<li><a href="javascript:void(0)" onclick="setCity('${r}')"><span ${c}>${r}</span></a></li>`}),t+=`<div class="modal-place__box">
<div><div class="letter">${i}</div><ul>${s}</ul></div></div>`}),N.innerHTML=t}y&&y.addEventListener("input",e=>{D(y.value.toUpperCase())});let x=document.querySelector(".button__burger"),m=document.querySelector(".main-nav.menu"),f=document.querySelector(".button__burger"),n=document.querySelector(".main-nav.cities"),_=document.querySelector(".footer-city-button"),d=document.querySelector("#city-contacts"),G=document.querySelector(".comb__selected"),C=document.querySelector(".modal-place__close"),X=document.querySelector(".mySwiper"),l,g=document.querySelector(".main-nav.rightpanel"),M=document.querySelector("#closer-fon"),z=document.querySelector(".modal-closer.form");X&&(X.style.zIndex=0);x&&x.addEventListener("click",()=>{if(l)return l=!1,n.style.transform="translateX(150vw)",!1;l=m.style.transform!=="none",m.style.transform=l?"none":"translateX(150vw)",l?(f.classList.add("close"),l=!1):f.classList.remove("close")});_&&_.addEventListener("click",()=>H());d&&d.addEventListener("click",()=>H());function H(){l=n.style.transform!=="none",l&&(n.style.transform="none",n.style.backgroundColor="white"),D()}C&&C.addEventListener("click",()=>{n.style.transform="translateX(150vw)"});_.innerHTML=localStorage.getItem("selectedCity")||"Россия";d&&(d.innerHTML=localStorage.getItem("selectedCity")||"Россия");window.setCity=function(e){localStorage.setItem("selectedCity",e),n.style.transform="translateX(150vw)",G.innerHTML=_.innerHTML=e,d&&(d.innerHTML=e),window.setCityContacts&&window.setCityContacts(e)};let B=document.querySelector("#cookie-accept"),k=document.querySelector("#cookie-banner"),J=localStorage.getItem("isCoockieBannerShow");!J&&k&&k.classList.add("show");B&&B.addEventListener("click",()=>{localStorage.setItem("isCoockieBannerShow",new Date().toISOString()),k.classList.remove("show")});function h(e){g&&(g.style.transform="translateX(150vw)"),n&&(n.style.transform="translateX(150vw)"),m&&(m.style.transform="translateX(150vw)"),f&&f.classList.remove("close"),closeChat()}window.close_all=h;document.addEventListener("keydown",e=>e.key==="Escape"&&h());window.openRightPanel=function(){l=g.style.transform!=="none",l&&(g.style.transform="none")};M&&M.addEventListener("click",()=>h());z&&z.addEventListener("click",()=>h());const a=document.getElementById("mainPhoto");a&&a.addEventListener("click",function(){if(window.innerWidth<900)return!1;a.requestFullscreen?a.requestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.msRequestFullscreen&&a.msRequestFullscreen()});let q=document.querySelector(".question_block"),u=document.querySelector(".question_panel .contentedit div"),w=document.querySelector(".question_panel .history");window.openChat=function(e,t){if(e.stopPropagation(),t==="no")return e.stopPropagation();(!t||window.innerWidth>500)&&(q.style.display="block"),w.scrollTo(0,1e4)};window.closeChat=function(e){q&&(q.style.display="none")};u&&u.addEventListener("keydown",e=>{e.code==="Enter"&&(w.innerHTML+="<b>-Вы </b>"+u.innerHTML+"<br><br>",w.scrollTo({top:1e4,behavior:"smooth"}),Q(u.innerHTML),setTimeout(()=>u.innerHTML=""))});function Q(e){let o=`https://api.telegram.org/bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw/sendMessage?chat_id=-5064627941&parse_mode=HTML&text=${e}`;fetch(o).then(s=>s.json()).then(()=>{console.log("сообщение доставлено = ")})}document.addEventListener("DOMContentLoaded",()=>{window.reloadAbdul()});window.reloadAbdul=function(){let e=document.querySelector("abdul");e&&(e.innerHTML=W)};const W=`
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
`;function S(e,t){let i="green";t==="warning"&&(i="orangered"),t==="error"&&(i="red");let o=document.createElement("div");o.innerText=e,o.classList.add("message-span"),o.style.backgroundColor=i,document.body.appendChild(o),setTimeout(()=>o.classList.add("show"),100),setTimeout(()=>{o.style.opacity="0",o.classList.remove("show")},3e3)}const oe={events:{},on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)},emit(e,t){this.events[e]&&this.events[e].forEach(i=>i(t))},off(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(i=>i!==t))}};let se={brandsIds:[],modelsIds:[],gearboxTypes:[],engineTypes:[],driveTypes:[],wheelTypes:[],bodyTypes:[],bodyColors:[]};function b(e){return parseInt(e).toLocaleString("ru-RU")}function re(e){let t=[];return e&&e.forEach(i=>{let o=b(i.milleage)+" км, ";i.engineCapacity&&(o+=i.engineCapacity),i.gearboxType&&(o+=" "+i.gearboxType),i.enginePower&&(o+=" ("+i.enginePower+"&nbsp;л.с)"),i.bodyType&&(o+=", "+i.bodyType),o+=", "+i.driveType,i.engineType&&(o+=", "+i.engineType);let s=b(parseInt(parseInt(i.price.replace(/ /g,""))/90.12));t.push({address:i.fullAddress,id:i.id,name:i.brand+" "+i.model,href:"/cars/car.html?id="+i.id,price:b(i.price),fromPerMonth:s,info:o,photos:i.images,yearReleased:i.yearReleased})}),t}function ae(e,t){const i=[2,0,1,1,1,2];return t[e%100>4&&e%100<20?2:i[e%10<5?e%10:5]]}function le(e){return new URLSearchParams(window.location.search).get(e)}function ne(e){let t=document.querySelector(".coin");e===!1&&(t.querySelector("span").title="По возрастанию",t.querySelector("img").style.transform="rotate(180deg)"),e===null&&(t.querySelector("span").title="Не упорядоченно",t.querySelector("img").style.transform="rotate(270deg)"),e===!0&&(t.querySelector("span").title="По убыванию",t.querySelector("img").style.transform="rotate(0deg)")}const de=function(e){let t=e.value;if(!t)return"";let i=t.replace(/\D/g,""),o="";if(t.length<2)return i;["7","8","9"].indexOf(i[0])>-1?(i[0]=="9"&&(i="7"+i),o=(i[0]=="8"?"8":"+7")+" ",i.length>1&&(o+="("+i.substring(1,4)),i.length>=5&&(o+=") "+i.substring(4,7)),i.length>=8&&(o+="-"+i.substring(7,9)),i.length>=10&&(o+="-"+i.substring(9,11))):o=i.substring(0,11),e.value=o},K=function(e){return e?(e.slice(0,2)=="+7"&&(e=e.replaceAll("+7","8")),e.replaceAll(" ","").replaceAll("+","").replaceAll("(","").replaceAll(")","").replaceAll("-","")):""},Y=function(e){if(!/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(e)&&e)return S("Ошибочный Email ","error")};function Z(e){let t=!1,i=!1;return e.forEach(o=>{if(o&&o.required){let s=function(){o.style.background="",o.removeEventListener("change",s)};o.style.background=o.value?"":"pink",o.value||(t=!0),o.addEventListener("change",s)}if(o&&o.classList.contains("capctha-div")&&!o.classList.contains("checked")&&(o.style.border="1px solid red",t=!0),o&&o.type==="checkbox"){let s=o.checked;o.parentNode.style.border=s?"":"1px solid red",s||(t=!0),i=t}if(o&&o.classList.contains("attent")&&(o.style.display=i?"block":"none"),o&&o.name==="email"&&o.value)return Y(o.value);o&&o.name==="phone"&&o.value&&K(o.value).length!==11&&S("Телефон не содержит 11 цифр","warning")}),t&&S("Есть незаполненные поля","warning"),t}function ce(){document.querySelectorAll(".with_sub_field").forEach(t=>{let i=t.querySelector(".with_sub_field .select");i.querySelectorAll(".field").forEach(s=>{s.addEventListener("click",r=>o(r.target.innerHTML))});function o(s){i.querySelectorAll(".field").forEach(r=>{r&&r.classList.contains("active")&&r.classList.remove("active")}),i.querySelectorAll(".field").forEach(r=>{r&&r.innerHTML===s&&r.classList.add("active")}),t.querySelector("input").value=s}t.addEventListener("click",()=>{let s=i.style.display!=="block";i.style.display=s?"block":"none"})})}document.addEventListener("DOMContentLoaded",()=>{R()});function R(){document.querySelectorAll(".capctha-div").forEach((t,i)=>{let o="_"+i,s=t;s&&(s.innerHTML=`<p class="instructions ${o}">
          Подтвердите, что вы не робот<br>
          Сдвиньте квадрат в белую область</p>
        <p class="result">✅<span>Спасибо !</span></p>
        <div class="target-area ${o}"></div>
        <div class="puzzle-piece ${o}">⇦ ⇨</div>`,new ee(o,s))})}class ee{constructor(t,i){this.parent=i,this.puzzlePiece=document.querySelector(`.puzzle-piece.${t}`),this.targetArea=document.querySelector(`.target-area.${t}`),this.instructions=document.querySelector(`.instructions.${t}`),this.isDragging=!1,this.initialX=0,this.currentX=0,this.offsetX=0,this.targetX=parseInt(Math.random()*73)+5,this.parent&&this.init()}init(){this.setupEventListeners(),this.updatePosition()}setupEventListeners(){this.puzzlePiece.addEventListener("mousedown",this.startDragging.bind(this)),document.addEventListener("mousemove",this.drag.bind(this)),document.addEventListener("mouseup",this.stopDragging.bind(this)),this.puzzlePiece.addEventListener("touchstart",this.startDraggingTouch.bind(this)),document.addEventListener("touchmove",this.dragTouch.bind(this)),document.addEventListener("touchend",this.stopDragging.bind(this))}startDragging(t){this.instructions.style.left="-10000px",this.targetArea.style.left=this.targetX+"%",this.isDragging=!0,this.initialX=t.clientX-this.offsetX,this.puzzlePiece.style.cursor="grabbing",t.preventDefault()}startDraggingTouch(t){this.isDragging=!0;const i=t.touches[0];this.initialX=i.clientX-this.offsetX,t.preventDefault()}drag(t){this.isDragging&&(t.preventDefault(),this.currentX=t.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.currentX<0&&(this.currentX=0),this.updatePosition())}dragTouch(t){if(!this.isDragging)return;const i=t.touches[0];this.currentX=i.clientX-this.initialX,this.currentX<0&&(this.currentX=0),this.updatePosition(),t.preventDefault()}stopDragging(){this.isDragging=!1,this.puzzlePiece.style.cursor="move",this.verify()}updatePosition(){this.puzzlePiece.style.transform=`translateX(${this.currentX}px)`,this.offsetX=this.currentX}verify(){const t=this.parent.getBoundingClientRect(),i=this.puzzlePiece.getBoundingClientRect();document.querySelector(".result");const o=(i.left-t.left)/t.width*100;Math.abs(this.targetX-o)<1&&(this.parent.style.border="",this.parent.classList.add("checked"))}}const te=`
<div class="div form333">
        <h2>Заказать звонок</h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input name="name" required placeholder="Ваее имя *">
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
    </div>`;let ue=`
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

</div>`;const pe=`
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

</div>`,ve=`
<div class="div form333">
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
    </div>`,me=`
<div class="title form333" style="text-align: left;">
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

        </div>`,fe=`
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
`,_e=`
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
    </div>`,ge=`<div class="promo-detail-call__wrap">
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

</div>`,he=`
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

</div>`,ye=`
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
                </div>`,be=`
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
`,ke=`
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
`;let ie=document.querySelector(".global-call"),p=document.querySelector("#right_panel_content");ie.addEventListener("click",()=>{openRightPanel(),p.innerHTML=te,R()});window.glob_call=function(){let e=p.querySelector(".capctha-div"),t=p.querySelector('[name="name"]'),i=p.querySelector('[name="phone"]'),o=p.querySelector('[type="checkbox" ]');if(Z([e,t,i,o]))return!1;let s={name:t.value,phone:i.value};console.log("params",s)};export{ue as a,b,Z as c,ae as d,pe as e,de as f,le as g,me as h,R as i,ve as j,se as k,oe as l,S as m,ne as n,ge as o,re as p,he as q,_e as r,K as s,ye as t,ce as u,fe as v,ke as w,be as x,Y as y};
