import"./main-B9KM3vdP.js";/* empty css              */import"./brands-icons-CsDSAbP9.js";import{g as h}from"./global-func-By-vpF4u.js";import{a as _}from"./favoriteCars-hjtfHE--.js";import"./filter-controls-FwvPCEzk.js";/* empty css                          */import"./swiper_buy-CDu4HQCt.js";import"./swiper-starter-DAQO3WFk.js";import"./compareCars-DjUyrNbL.js";const y=`<div  class="filter-white">
<div class="filter-white-back filter-fields">
        <div class="frame-filter__item"
             onmouseenter="onCard(this)">
            <comb data-placeholder='Марка' />
            <label>Марка</label>
        </div>
        <div class="frame-filter__item" onmouseenter="onCard(this)">
            <comb data-placeholder='Модель' />
            <label>Модель</label>
        </div>
        <div class="frame-filter__item" onmouseenter="onCard(this)">
            <comb data-placeholder='Город' />
            <label>Город</label>
        </div>

        <div style="flex-grow: 1">
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 60px">Год от:</span>
                <input class="big-comb__input" style="width: 40px" 
                onchange="input_chamged('yearReleasedFrom', this.value)">
            </div>
        </div> 

        <div class="no_advanced">
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 60px">Год до:</span>
                <input class="big-comb__input" style="width: 40px" 
                onchange="input_chamged('yearReleasedTo', this.value)" onclick="this.select()">
            </div>
        </div>

<!--        <div class="frame-filter__item no_advanced" onmouseenter="onCard(this)">-->
<!--            <comb data-placeholder='Цвет'/>-->
<!--        </div>-->

        <div class="no_advanced">
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 80px">Цена от: </span>
                 <input class="big-comb__input" style="width: 60px" 
                onchange="input_chamged('priceFrom', this.value)" onclick="this.select()">                
            </div>
        </div>

        <div>
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 80px">Цена до: </span>                 
                <input class="big-comb__input" style="width: 60px" 
                onchange="input_chamged('priceTo', this.value)">
            </div>
        </div>

        <div class="no_advanced">
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 85px">Пробег от: </span>
                 <input class="big-comb__input" style="width: 70px" 
                onchange="input_chamged('milleageFrom', this.value)" onclick="this.select()">      
            </div>
        </div>
        
        <div class="no_advanced">
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 85px">Пробег до: </span>
                 <input class="big-comb__input" style="width: 70px" 
                onchange="input_chamged('milleageTo', this.value)" onclick="this.select()">                    
            </div>
        </div>

        <div class="frame-filter__item no_advanced" onmouseenter="onCard(this)">
            <comb data-placeholder='Тип кузова'/>
        </div>



        <div class="frame-filter__item no_advanced" onmouseenter="onCard(this)">
            <comb data-placeholder='Тип КПП'/>
        </div>

        <div class="frame-filter__item no_advanced" onmouseenter="onCard(this)">
            <comb data-placeholder='Тип двигателя'/>
        </div>

<!--        <div class="no_advanced">-->
<!--            <div class="big-combo control-flex" onmouseenter="onCard(this)">-->
<!--                <span style="width: 160px">Объем двигателя до: </span>-->
<!--                <input class="big-comb__input" style="width: 60px" value="" onclick="this.select()">-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="no_advanced">-->
<!--            <div class="big-combo control-flex" onmouseenter="onCard(this)">-->
<!--                <span style="width: 187px">Мощность двигателя до: </span>-->
<!--                <input class="big-comb__input" style="width: 60px" value="" onclick="this.select()">-->
<!--            </div>-->
<!--        </div>-->

        <div class="frame-filter__item no_advanced" onmouseenter="onCard(this)">
            <comb data-placeholder='Тип привода'/>
        </div>

        <div class="frame-filter__item no_advanced" onmouseenter="onCard(this)">
            <comb data-placeholder='Руль'/>
        </div>
    </div>

    <div class="frame-filter__controls">
        <button class="frame-filter__controls-advanced">
            <span class="frame-filter__controls-advanced-icon"></span>
            <span class="frame-filter__controls-advanced-text">Расширенный фильтр</span>
        </button>

        <a href="javascript:void(0)" onclick="clearFilter()" class="frame-filter__controls-reset">Сбросить</a>

        <button class="frame-filter__submit" id="set_filter" onclick="goToCars()">
            Найдено&nbsp;<span class="number"></span>
        </button>
    </div>
</div>

<div  class="date-list" id="list1"></div>
<div  class="date-list" id="list2"></div>

<div id="deleter" title="Очистить">x</div>`,g=`<div class="car_vitrina">
        <h2 id="vitrina_name">Автомобили</h2>

        <a href="/cars#vitrina_name" class="page__link cars_link" style="display: none">
            <img src="/src/svg/red_arrow.svg" loading='lazy' alt=''>
            <span>Все предложения</span>
        </a>

        <span class="view_buttons" style="display: none">
             <span class='type_views'>
                <div class='dot8'>
                    <img src='/svg/dot8.svg' alt="">
                </div>
                <div class='dot4'>
                    <img src='/svg/dot4.svg' alt="">
                </div>
                <div class='dot1'>
                    <img src='/svg/dot1.svg' alt="">
                </div>
            </span>

            <span class='coin'>
                цена&nbsp;
                <img src="/src/svg/arrow-down.svg" alt="arrow" loading="lazy" width='10' height='18'>
            </span>
        </span>
    </div><cards class='cards dot4' data-col='dot4'></cards>`;let c=h("brand");const u=h("id");u||(document.querySelector("#filter_cars").innerHTML=y);u||(document.querySelector("#car-vitrina").innerHTML=g);c&&!u&&(c.includes("/")&&(c=c.split("/")[0]),document.querySelector("#path").innerHTML=c.toUpperCase());u&&console.log("66445",121212);let m=document.querySelector("#deleter"),p=null,o=null,d=[];_().then(t=>d=t);window.onCard=function(t){let e=t.querySelector("input"),i=document.querySelector("#list1"),a=document.querySelector("#list2");p=null,o=null;let n=t.getBoundingClientRect();e&&t.querySelector("input").value&&(p=e.onchange&&e.onchange.toString().slice(42,-16),m.style.left=n.x+"px",m.style.top=n.y+window.scrollY+"px");let v=t.querySelector(".big-comb__selected");if(v&&v.querySelector("span").classList.contains("bold")&&(m.style.left=n.x+"px",m.style.top=n.y+window.scrollY+"px",o=v.parentElement),t.querySelector("span").innerHTML&&["Год от:"].includes(t.querySelector("span").innerHTML)){if(!i.innerHTML){for(let s=+d.from;s<+d.to;s++)i.innerHTML+=`<a>${s}</a>`;i.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r=>{e.value=r.target.innerText,input_chamged("yearReleasedFrom",r.target.innerText),i.style.left="-1000px"})})}i.style.left=n.x+"px",i.style.top=45+n.y+window.scrollY+"px",a.style.left="-1000px"}else if(t.querySelector("span").innerHTML&&["Год до:"].includes(t.querySelector("span").innerHTML)){if(!a.innerHTML){for(let s=+d.from;s<+d.to;s++)a.innerHTML+=`<a>${s}</a>`;a.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r=>{e.value=r.target.innerText,input_chamged("yearReleasedTo",r.target.innerText),a.style.left="-1000px"})})}a.style.left=n.x+"px",a.style.top=45+n.y+window.scrollY+"px",i.style.left="-1000px"}else i.style.left="-1000px",a.style.left="-1000px";t.querySelector("input")&&t.querySelector("input").focus()};document.querySelector("#deleter").addEventListener("click",()=>{p&&(input_chamged(p,""),b(p)),o&&(o.querySelector(".big-comb__placeholder").innerText="",o.title==="Марка"&&(document.querySelector('[data-placeholder="Модель"] .big-comb__placeholder').innerText=""),x(o.title))});function b(t){let e=document.querySelector(`[onchange="input_chamged('${t}', this.value)"]`);e&&(e.value="");let i=document.querySelector(`[data-placeholder="${t}"]`);i&&(i.querySelector(".big-comb__placeholder").innerText="")}function x(t){let e=location.search.split("&");t==="Марка"&&(e[l(e,"brand=")]="?",e[l(e,"brandId=")]="",e[l(e,"model=")]="",e[l(e,"modelId=")]=""),t==="Модель"&&(e[l(e,"model=")]="",e[l(e,"modelId=")]=""),t==="Тип двигателя"&&(e[l(e,"engineType=")]=""),t==="Город"&&(e[l(e,"city=")]=""),t==="Тип КПП"&&(e[l(e,"gearboxType=")]=""),t==="Тип привода"&&(e[l(e,"driveType=")]=""),t==="Руль"&&(e[l(e,"wheelType=")]=""),t==="Тип кузова"&&(e[l(e,"bodyType=")]=""),location.href=location.origin+"/cars/"+e.join("&")}function l(t,e){return t.findIndex(i=>i.includes(e))}
