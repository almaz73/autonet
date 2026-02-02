import{i as q}from"./main-CPRaK-1U.js";import{i as P}from"./swiper-starter-Bjhk_3sq.js";import{c as I,d as z}from"./apibase-BsWjPdUp.js";import{f as R,a as n,d as N,s as B,m as T,g as F,p as W}from"./global-func-N5CIBr1s.js";import{i as D}from"./favoriteCars-B6JjzAIO.js";import{i as U}from"./compareCars-CblBpAn-.js";/* empty css                          */window.formattingPhone=R;const X=document.querySelector(".slider__ui.slider1"),j=document.querySelector(".slider__ui.slider1 .slider__ui-range"),O=document.querySelector(".slider__ui.slider1 .slider__ui-handle"),Y=document.querySelector(".slider__ui.slider2"),G=document.querySelector(".slider__ui.slider2 .slider__ui-range"),J=document.querySelector(".slider__ui.slider2 .slider__ui-handle"),k=document.querySelector("#field1"),w=document.querySelector("#field2"),u=document.querySelector("#field3"),E=document.querySelector("#field4");C(X,j,O,"first");C(Y,G,J,"second");function C(e,t,o,c){let d=!1,p,f;o.addEventListener("mousedown",a=>{d=!0,p=a.clientX,f=o.offsetLeft,o.style.cursor="grabbing"}),document.addEventListener("mousemove",a=>{d&&v(a,c)}),document.addEventListener("mouseup",()=>{d=!1,o.style.cursor="grab"}),e.addEventListener("click",a=>v(a));function v(a,g){let r=f+(a.clientX-p);if(isNaN(r))return!1;r<0&&(r=0),r>e.offsetWidth&&(r=e.offsetWidth);let i=e.offsetWidth;g==="second"?(r<i/8&&(r=0,m(1)),r>=i/8&&r<i/8*3&&(r=i/4,m(2)),r>=i/8*3&&r<i/8*5&&(r=i/2,m(3)),r>=i/8*5&&r<i/8*7&&(r=i/4*3,m(4)),r>=i/8*7&&(r=i,m(5))):Q(r/e.offsetWidth),t.style.width=r+"px",o.style.left=r-10+"px"}}let s=0,b=5,l=0,L=0;function K(e){s=parseInt(e),l=s/2,k.innerHTML=n(s/2)+" ₽",w.innerHTML=n(l)+" ₽",L=l/60*1.149,u.innerHTML="от "+n(L)+" ₽/мес"}function Q(e){l=s/10+(s-s/10)*e,w.innerHTML=n(l)+" ₽",k.innerHTML=n(s-l)+" ₽",m()}function m(e){e||(e=b),E.innerHTML=e+N(e,[" год"," года"," лет"]),e===1&&(u.innerHTML="от "+n(l/12*1.03056)+" ₽/мес"),e===2&&(u.innerHTML="от "+n(l/24*1.05936)+" ₽/мес"),e===3&&(u.innerHTML="от "+n(l/36*1.089)+" ₽/мес"),e===4&&(u.innerHTML="от "+n(l/48*1.1184)+" ₽/мес"),e===5&&(u.innerHTML="от "+n(l/60*1.149)+" ₽/мес"),b=e}let y=document.querySelector(".main_cred-col.name input"),h=document.querySelector(".main_cred-col.tel input");function V(){y.value="",h.value=""}function Z(){let e=!1;y.value?y.style.background="#f2f2f7":(y.style.background="pink",e=!0),h.value?h.style.background="#f2f2f7":(h.style.background="pink",e=!0),document.getElementById("personal_ag").checked?(document.querySelector(".main_cred-col.sender").style.background="initial",document.querySelector(".attent").style.display="none"):(document.querySelector(".attent").style.display="block",document.querySelector(".main_cred-col.sender").style.background="pink",e=!0);let t=document.querySelector(".capctha-div");return t.classList.contains("checked")?t.style.border="":(t.style.border="1px solid red",e=!0),e}document.querySelector(".bid").addEventListener("click",e=>{if(Z())return!1;let t={formName:"spesialCredit",price:s,credit:l,forMonth:L,year:E.innerHTML,fio:y.value,tel:B(h.value)};I(t).then(o=>{o&&o.ok?T("Запрос успешно отправлен"):T("Ошибка при отправки запроса","error"),V()})});let A=document.querySelector("#right_panel_content"),M=document.querySelectorAll(".select_show_date"),S=document.querySelectorAll(".profitable"),ee=document.querySelector(".main__card-product--top .address"),te=`<div>
    <div class="div" style="margin-top: -73px;">
        <h2>Записаться <br> на <span style="color: var(--color-red)">осмотр</span> автомобиля</h2>

        <div class="address">Адрес: ${ee.innerHTML}</div>
        <br>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Как ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Год выпуска">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Е-mail">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`,re=`<div>
    <div class="div" style="margin-top: -120px;">
        <h2>Заявка на <span style="color: var(--color-red)">выкуп</span></h2>
    </div>

    <div class="div promo-form">
        <div class="formBlock">
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Ваше имя *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Телефон *">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Город">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Марка">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Модель">
                </div>
            </div>
            
            <div class="form__modal--group">
                <div class="form__group">
                    <input size="25" placeholder="Год выпуска">
                </div>
            </div>

            <div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>

            <button class="page__btn page__btn--current">
                <span> Отправить заявку </span>
            </button>

            <div class="modal__personal">
                <input type="checkbox">
                <label> Нажав кнопку «Отправить заявку» я даю согласие на обработку
                    <a href="/privacy-policy/" target="_blank">персональных данных</a>
                </label>
            </div>
        </div>
    </div>

</div>`;M&&M.forEach(e=>{e.addEventListener("click",()=>{openRightPanel(),A.innerHTML=te,q()})});S&&S.forEach(e=>{e.addEventListener("click",()=>{openRightPanel(),A.innerHTML=re,q()})});const $=F("id");let _="";document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#share").addEventListener("click",oe),document.querySelectorAll(".reserving").forEach(e=>e.addEventListener("click",ie))});z($).then(e=>{{(!e||!e.brand)&&confirm("Данный автомобиль снят с продажи")&&window.history.back(),_=document.querySelectorAll(".auto-name"),_[0].innerHTML=_[1].innerHTML=_[2].innerHTML=e.brand+" "+e.model+", "+e.yearReleased;let t=document.querySelector("#auto-brand-path");t.innerHTML=`<a href='/cars/?brand=${e.brand}&brandId=${e.brandId||""}'>Автомобили ${e.brand} с пробегом</a>`;let o=document.querySelectorAll(".auto-price");o[0].innerHTML=o[1].innerHTML=n(e.price)+" ₽";let c=document.querySelectorAll(".auto-price-month");c[0].innerHTML=c[1].innerHTML="от "+parseInt(parseInt(e.price.replace(/ /g,""))/90.12)+" ₽/мес";let d=document.querySelectorAll(".auto-year");d[0].innerHTML=d[1].innerHTML=d[1].innerHTML=e.yearReleased+" год";let p=document.querySelectorAll(".auto-mill");p[0].innerHTML=p[1].innerHTML=n(e.milleage)+" км";let f=document.querySelectorAll(".auto-engine");f[0].innerHTML=f[1].innerHTML=e.engineCapacity+" л / "+e.enginePower+" л.с / "+e.engineType;let v=document.querySelectorAll(".auto-gear");v[0].innerHTML=v[1].innerHTML=e.gearboxType||"";let a=document.querySelectorAll(".auto-drive");a[0].innerHTML=a[1].innerHTML=e.driveType||"";let g=document.querySelectorAll(".auto-rule");g[0].innerHTML=g[1].innerHTML=e.wheelType||"";let r=document.querySelectorAll(".auto-body");r[0].innerHTML=r[1].innerHTML=e.bodyType||"";let i=document.querySelectorAll(".auto-color");i[0].innerHTML=i[1].innerHTML=e.color||"";let x=document.querySelector(".main__card-product--top .address");x.innerHTML=e.fullAddress}{let t=document.querySelector("#auto-swip");e.images.forEach(c=>{t.innerHTML+=`
    <div class="swiper-slide">
        <img src="${c}" alt="">
    </div>`}),setTimeout(()=>P(),3e3);let o=document.querySelector("#auto-more");o.innerHTML=`<div class="fotos_black" onclick="showMore()">${e.images.length} фото</div>`,e.images.forEach((c,d)=>{o.innerHTML+=`<div onClick="showSlide(${d})"><img src="${c}" alt=""></div>`})}{let t=document.querySelector("#auto-equipment");t.innerHTML=[],e.сonfiguration.forEach(o=>t.innerHTML+=`<li>${o}</li>`)}{let t=document.querySelector("#favorite_chosen");t&&(t.innerHTML=`<a href="javascript:addCompare('${e.id}')" ondblclick="dblCompare('${e.id}')">
        <img id="compareId_${e.id}" src='/icons/compare_cars.svg' alt=''>
      </a>
      <a href="javascript:addFavorite('${e.id}')">
        <img id="favoriteId_${e.id}" src='/icons/penta.svg' alt=''>
      </a>`),window.favorCars=W([e]),window.compareCars=[e],D(),U(),K(e.price)}});async function oe(){if(navigator.clipboard){const e=window.location.href;try{await navigator.clipboard.writeText(e),H()}catch(t){console.error("Не удалось скопировать URL: ",t)}}else{const e=window.location.href,t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),H()}}function H(){document.querySelector(".link #share_text").style.display="block",setTimeout(()=>{document.querySelector(".link #share_text").style.display="none"},3e3)}function ie(){let e="?name="+_[0].innerHTML+"&id="+$;location.href="/reserve/"+e}
