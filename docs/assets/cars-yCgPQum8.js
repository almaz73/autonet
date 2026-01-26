import"./main-C7DrVz2v.js";/* empty css              */import"./brands-icons-DBXqsPkk.js";import{g as v}from"./global-func-By-vpF4u.js";import{a as _}from"./favoriteCars-dKcrZPai.js";import"./filter-controls-BBPVxD5x.js";/* empty css                          */import"./swiper_buy-CDu4HQCt.js";import"./swiper-starter-DAQO3WFk.js";import"./compareCars-DjUyrNbL.js";const g=`<div  class="filter-white">
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

<div id="date-list">
  <a>1990</a> <a>1999</a> 
</div>

<div id="deleter" title="Очистить">x</div>`,b=`<div class="car_vitrina">
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
    </div><cards class='cards dot4' data-col='dot4'></cards>`;let c=v("brand");const m=v("id");m||(document.querySelector("#filter_cars").innerHTML=g);m||(document.querySelector("#car-vitrina").innerHTML=b);c&&!m&&(c.includes("/")&&(c=c.split("/")[0]),document.querySelector("#path").innerHTML=c.toUpperCase());m&&console.log("66445",121212);let d=document.querySelector("#deleter"),r=null,o=null,p=[];window.onCard=function(t){let e=t.querySelector("input"),a=document.querySelector("#date-list");r=null,o=null;let n=t.getBoundingClientRect();e&&t.querySelector("input").value&&(r=e.onchange&&e.onchange.toString().slice(42,-16),d.style.left=n.x+"px",d.style.top=n.y+window.scrollY+"px");let u=t.querySelector(".big-comb__selected");u&&u.querySelector("span").classList.contains("bold")&&(d.style.left=n.x+"px",d.style.top=n.y+window.scrollY+"px",o=u.parentElement),t.querySelector("span").innerHTML&&["Год от:","Год до:"].includes(t.querySelector("span").innerHTML)?(a.style.left=n.x+"px",a.style.top=45+n.y+window.scrollY+"px",a.querySelectorAll("a").forEach(s=>{s.addEventListener("click",l=>{e.value=l.target.innerText;let f=e.onchange&&e.onchange.toString().slice(42,-16);input_chamged(f,l.target.innerText),a.style.left="-1000px"})}),console.log("9 9 9 yearGap = ",p),p.length||_().then(s=>{p=s,console.log(" 000000 yearGap",p);for(let l=+s.from;l<+s.to;l++)console.log(l),a.innerHTML+=`<a>${l}</a>`})):a.style.left="-1000px",t.querySelector("input")&&t.querySelector("input").focus()};document.querySelector("#deleter").addEventListener("click",()=>{r&&(input_chamged(r,""),y(r)),o&&(o.querySelector(".big-comb__placeholder").innerText="",o.title==="Марка"&&(document.querySelector('[data-placeholder="Модель"] .big-comb__placeholder').innerText=""),x(o.title))});function y(t){let e=document.querySelector(`[onchange="input_chamged('${t}', this.value)"]`);e&&(e.value="");let a=document.querySelector(`[data-placeholder="${t}"]`);a&&(a.querySelector(".big-comb__placeholder").innerText="")}function x(t){let e=location.search.split("&");t==="Марка"&&(e[i(e,"brand=")]="?",e[i(e,"brandId=")]="",e[i(e,"model=")]="",e[i(e,"modelId=")]=""),t==="Модель"&&(e[i(e,"model=")]="",e[i(e,"modelId=")]=""),t==="Тип двигателя"&&(e[i(e,"engineType=")]=""),t==="Город"&&(e[i(e,"city=")]=""),t==="Тип КПП"&&(e[i(e,"gearboxType=")]=""),t==="Тип привода"&&(e[i(e,"driveType=")]=""),t==="Руль"&&(e[i(e,"wheelType=")]=""),t==="Тип кузова"&&(e[i(e,"bodyType=")]=""),location.href=location.origin+"/cars/"+e.join("&")}function i(t,e){return t.findIndex(a=>a.includes(e))}
