import{i as H}from"./main-DDG4M_xQ.js";import{i as $}from"./swiper-starter-Bjhk_3sq.js";import{c as L,d as I}from"./apibase-BsWjPdUp.js";import{f as B,a as u,d as F,c as S,s as R,m as y,g as N,p as W}from"./global-func-2OSMyxPn.js";import{i as D}from"./favoriteCars-B6JjzAIO.js";import{i as U}from"./compareCars-CO-5H6Pg.js";/* empty css                          */window.formattingPhone=B;const X=document.querySelector(".slider__ui.slider1"),j=document.querySelector(".slider__ui.slider1 .slider__ui-range"),O=document.querySelector(".slider__ui.slider1 .slider__ui-handle"),Y=document.querySelector(".slider__ui.slider2"),G=document.querySelector(".slider__ui.slider2 .slider__ui-range"),z=document.querySelector(".slider__ui.slider2 .slider__ui-handle"),w=document.querySelector("#field1"),k=document.querySelector("#field2"),f=document.querySelector("#field3"),E=document.querySelector("#field4");C(X,j,O,"first");C(Y,G,z,"second");function C(e,t,r,n){let i=!1,d,l;r.addEventListener("mousedown",c=>{i=!0,d=c.clientX,l=r.offsetLeft,r.style.cursor="grabbing"}),document.addEventListener("mousemove",c=>{i&&p(c,n)}),document.addEventListener("mouseup",()=>{i=!1,r.style.cursor="grab"}),e.addEventListener("click",c=>p(c));function p(c,h){let o=l+(c.clientX-d);if(isNaN(o))return!1;o<0&&(o=0),o>e.offsetWidth&&(o=e.offsetWidth);let a=e.offsetWidth;h==="second"?(o<a/8&&(o=0,v(1)),o>=a/8&&o<a/8*3&&(o=a/4,v(2)),o>=a/8*3&&o<a/8*5&&(o=a/2,v(3)),o>=a/8*5&&o<a/8*7&&(o=a/4*3,v(4)),o>=a/8*7&&(o=a,v(5))):K(o/e.offsetWidth),t.style.width=o+"px",r.style.left=o-10+"px"}}let m=0,T=5,s=0,g=0;function J(e){m=parseInt(e),s=m/2,w.innerHTML=u(m/2)+" ₽",k.innerHTML=u(s)+" ₽",g=s/60*1.149,f.innerHTML="от "+u(g)+" ₽/мес"}function K(e){s=m/10+(m-m/10)*e,k.innerHTML=u(s)+" ₽",w.innerHTML=u(m-s)+" ₽",v()}function v(e){e||(e=T),E.innerHTML=e+F(e,[" год"," года"," лет"]),e===1&&(f.innerHTML="от "+u(s/12*1.03056)+" ₽/мес"),e===2&&(f.innerHTML="от "+u(s/24*1.05936)+" ₽/мес"),e===3&&(f.innerHTML="от "+u(s/36*1.089)+" ₽/мес"),e===4&&(f.innerHTML="от "+u(s/48*1.1184)+" ₽/мес"),e===5&&(f.innerHTML="от "+u(s/60*1.149)+" ₽/мес"),T=e}document.querySelector(".bid").addEventListener("click",e=>{let t=document.querySelector(".main_cred-col.name input"),r=document.querySelector(".main_cred-col.tel input"),n=document.querySelector(".capctha-div.n3"),i=document.getElementById("n3"),d=document.querySelector(".attent.n3");if(S([t,r,n,i,d]))return!1;let l={formName:"spesialCredit",price:m,credit:s,forMonth:g,year:E.innerHTML,fio:t.value,tel:R(r.value)};console.log(l),L(l).then(c=>{c&&c.ok?y("Запрос успешно отправлен"):y("Ошибка при отправки запроса","error"),p()});function p(){t.value="",r.value=""}});let A=document.querySelector("#right_panel_content"),q=document.querySelectorAll(".select_show_date"),M=document.querySelectorAll(".profitable"),Q=document.querySelector(".main__card-product--top .address"),V=`<div>
    <div class="div" style="margin-top: -73px;">
        <h2>Записаться <br> на <span style="color: var(--color-red)">осмотр</span> автомобиля</h2>
        <div class="address">Адрес: ${Q.innerHTML}</div>
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
              <div class="capctha-div n1"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="applyBid()"> 
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

</div>`,Z=`<div>
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
              <div class="capctha-div n2"></div>
            </div>

            <button class="page__btn page__btn--current" onclick="applyBid2()">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox" id="n2">
                <label for="n2"> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`;q&&q.forEach(e=>{e.addEventListener("click",()=>{openRightPanel(),A.innerHTML=V,H()})});M&&M.forEach(e=>{e.addEventListener("click",()=>{openRightPanel(),A.innerHTML=Z,H()})});window.applyBid=function(){let e=document.querySelector(".capctha-div.n1"),t=document.querySelector('[name="name"]'),r=document.querySelector('[name="year"]'),n=document.querySelector('[name="email"]'),i=document.querySelector("#n1");if(S([e,t,r,n,i]))return!1;let d={name:t.value,email:n.value,year:r.value};L(d).then(l=>{l&&l.ok?y("Заявка оптарвлена"):y("Сервер не принял","error")})};window.applyBid2=function(){let e=document.querySelector(".capctha-div.n2"),t=document.querySelector('[name="name"]'),r=document.querySelector('[name="phone"]');document.querySelector('[name="city"]'),document.querySelector('[name="brand"]'),document.querySelector('[name="model"]');let n=document.querySelector('[name="year"]'),i=document.querySelector("#n2");if(S([e,t,r,i]))return!1;let d={name:t.value,year:n.value};console.log("params",d),L(d).then(l=>{l&&l.ok?y("Заявка оптарвлена"):y("Сервер не принял","error")})};const x=N("id");let _="";document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#share").addEventListener("click",ee),document.querySelectorAll(".reserving").forEach(e=>e.addEventListener("click",te))});I(x).then(e=>{{(!e||!e.brand)&&confirm("Данный автомобиль снят с продажи")&&window.history.back(),_=document.querySelectorAll(".auto-name"),_[0].innerHTML=_[1].innerHTML=_[2].innerHTML=e.brand+" "+e.model+", "+e.yearReleased;let t=document.querySelector("#auto-brand-path");t.innerHTML=`<a href='/cars/?brand=${e.brand}&brandId=${e.brandId||""}'>Автомобили ${e.brand} с пробегом</a>`;let r=document.querySelectorAll(".auto-price");r[0].innerHTML=r[1].innerHTML=u(e.price)+" ₽";let n=document.querySelectorAll(".auto-price-month");n[0].innerHTML=n[1].innerHTML="от "+parseInt(parseInt(e.price.replace(/ /g,""))/90.12)+" ₽/мес";let i=document.querySelectorAll(".auto-year");i[0].innerHTML=i[1].innerHTML=i[1].innerHTML=e.yearReleased+" год";let d=document.querySelectorAll(".auto-mill");d[0].innerHTML=d[1].innerHTML=u(e.milleage)+" км";let l=document.querySelectorAll(".auto-engine");l[0].innerHTML=l[1].innerHTML=e.engineCapacity+" л / "+e.enginePower+" л.с / "+e.engineType;let p=document.querySelectorAll(".auto-gear");p[0].innerHTML=p[1].innerHTML=e.gearboxType||"";let c=document.querySelectorAll(".auto-drive");c[0].innerHTML=c[1].innerHTML=e.driveType||"";let h=document.querySelectorAll(".auto-rule");h[0].innerHTML=h[1].innerHTML=e.wheelType||"";let o=document.querySelectorAll(".auto-body");o[0].innerHTML=o[1].innerHTML=e.bodyType||"";let a=document.querySelectorAll(".auto-color");a[0].innerHTML=a[1].innerHTML=e.color||"";let P=document.querySelector(".main__card-product--top .address");P.innerHTML=e.fullAddress}{let t=document.querySelector("#auto-swip");e.images.forEach(n=>{t.innerHTML+=`
    <div class="swiper-slide">
        <img src="${n}" alt="">
    </div>`}),setTimeout(()=>$(),3e3);let r=document.querySelector("#auto-more");r.innerHTML=`<div class="fotos_black" onclick="showMore()">${e.images.length} фото</div>`,e.images.forEach((n,i)=>{r.innerHTML+=`<div onClick="showSlide(${i})"><img src="${n}" alt=""></div>`})}{let t=document.querySelector("#auto-equipment");t.innerHTML=[],e.сonfiguration.forEach(r=>t.innerHTML+=`<li>${r}</li>`)}{let t=document.querySelector("#favorite_chosen");t&&(t.innerHTML=`<a href="javascript:addCompare('${e.id}')" ondblclick="dblCompare('${e.id}')">
        <img id="compareId_${e.id}" src='/icons/compare_cars.svg' alt=''>
      </a>
      <a href="javascript:addFavorite('${e.id}')">
        <img id="favoriteId_${e.id}" src='/icons/penta.svg' alt=''>
      </a>`),window.favorCars=W([e]),window.compareCars=[e],D(),U(),J(e.price)}});async function ee(){if(navigator.clipboard){const e=window.location.href;try{await navigator.clipboard.writeText(e),b()}catch(t){console.error("Не удалось скопировать URL: ",t)}}else{const e=window.location.href,t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),b()}}function b(){document.querySelector(".link #share_text").style.display="block",setTimeout(()=>{document.querySelector(".link #share_text").style.display="none"},3e3)}function te(){let e="?name="+_[0].innerHTML+"&id="+x;location.href="/reserve/"+e}
