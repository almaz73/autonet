import"./main-d0NEtNi6.js";/* empty css                        */import"./brands-icons-BZQ0auQz.js";import{g as h}from"./global-func-CQ2z1Jlp.js";import{a as y}from"./favoriteCars-CNw86nbL.js";import"./filter-controls-DRY6IMNG.js";/* empty css                          */import"./swiper_buy-CDu4HQCt.js";import"./swiper-starter-DZVLhqYS.js";import"./compareCars-AM8JY-af.js";const _=`<div  class="filter-white">
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
                <input class="big-comb__input" type="number" style="width: 80px" 
                onchange="input_chamged('yearReleasedFrom', this.value)">
            </div>
        </div> 

        <div class="no_advanced">
            <div class="big-combo control-flex" onmouseenter="onCard(this)">
                <span style="width: 60px">Год до:</span>
                <input class="big-comb__input" type="number" style="width: 80px" 
                onchange="input_chamged('yearReleasedTo', this.value)" onclick="this.select()">
            </div>
        </div>
        
        <div class="frame-filter__item no_advanced"  onmouseenter="onCard(this)">
            <comb data-placeholder='Цвет' />
            <label>Цвет</label>
        </div> 

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

        <div class="no_advanced">
           <div class="big-combo control-flex" onmouseenter="onCard(this)">
            <span style="width: 160px">Объем двигателя до: </span>
             <input class="big-comb__input" style="width: 60px" 
            onchange="input_chamged('engineCapacity', this.value)" onclick="this.select()">      
          </div>
        </div>

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

<div id="deleter" title="Очистить">x</div>`,b=`<div class="car_vitrina">
        <h2 id="vitrina_name">Автомобили</h2>

        <span class="view_buttons">
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
                <span>цена <img src="/svg/arrow-down.svg" alt="" loading="lazy"
                 width='10' style="transform: rotate(-90deg)"></span>
            </span>
        </span>
    </div><cards class='cards dot4' data-col='dot4'></cards>`;let c=h("brand");const m=h("id");m||(document.querySelector("#filter_cars").innerHTML=_);m||(document.querySelector("#car-vitrina").innerHTML=b);c&&!m&&(c.includes("/")&&(c=c.split("/")[0]),document.querySelector("#path").innerHTML=c.toUpperCase());m&&console.log("66445",121212);let u=document.querySelector("#deleter"),p=null,o=null,d=[];y().then(t=>d=t);window.onCard=function(t){let e=t.querySelector("input"),l=document.querySelector("#list1"),n=document.querySelector("#list2");p=null,o=null;let a=t.getBoundingClientRect();e&&t.querySelector("input").value&&(p=e.onchange&&e.onchange.toString().slice(42,-16),u.style.left=a.x+"px",u.style.top=a.y+window.scrollY+"px");let v=t.querySelector(".big-comb__selected");if(v&&v.querySelector("span").classList.contains("bold")&&(u.style.left=a.x+"px",u.style.top=a.y+window.scrollY+"px",o=v.parentElement),t.querySelector("span")&&t.querySelector("span").innerHTML&&["Год от:"].includes(t.querySelector("span").innerHTML)){if(!l.innerHTML){for(let s=+d.from;s<+d.to;s++)l.innerHTML+=`<a>${s}</a>`;l.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r=>{e.value=r.target.innerText,input_chamged("yearReleasedFrom",r.target.innerText),l.style.left="-1000px"})})}l.style.left=a.x+"px",l.style.top=45+a.y+window.scrollY+"px",n.style.left="-1000px"}else if(t.querySelector("span")&&t.querySelector("span").innerHTML&&["Год до:"].includes(t.querySelector("span").innerHTML)){if(!n.innerHTML){for(let s=+d.from;s<+d.to;s++)n.innerHTML+=`<a>${s}</a>`;n.querySelectorAll("a").forEach(s=>{s.addEventListener("click",r=>{e.value=r.target.innerText,input_chamged("yearReleasedTo",r.target.innerText),n.style.left="-1000px"})})}n.style.left=a.x+"px",n.style.top=45+a.y+window.scrollY+"px",l.style.left="-1000px"}else l.style.left="-1000px",n.style.left="-1000px";t.querySelector("input")&&t.querySelector("input").focus()};document.querySelector("#deleter").addEventListener("click",()=>{p&&(input_chamged(p,""),g(p)),o&&(o.querySelector(".big-comb__placeholder").innerText="",o.title==="Марка"&&(document.querySelector('[data-placeholder="Модель"] .big-comb__placeholder').innerText=""),x(o.title))});function g(t){let e=document.querySelector(`[onchange="input_chamged('${t}', this.value)"]`);e&&(e.value="");let l=document.querySelector(`[data-placeholder="${t}"]`);l&&(l.querySelector(".big-comb__placeholder").innerText="")}function x(t){let e=location.search.split("&");t==="Марка"&&(e[i(e,"brand=")]="?",e[i(e,"brandId=")]="",e[i(e,"model=")]="",e[i(e,"modelId=")]=""),t==="Модель"&&(e[i(e,"model=")]="",e[i(e,"modelId=")]=""),t==="Тип двигателя"&&(e[i(e,"engineType=")]=""),t==="Город"&&(e[i(e,"city=")]=""),t==="Тип КПП"&&(e[i(e,"gearboxType=")]=""),t==="Тип привода"&&(e[i(e,"driveType=")]=""),t==="Руль"&&(e[i(e,"wheelType=")]=""),t==="Тип кузова"&&(e[i(e,"bodyType=")]=""),t==="Цвет"&&(e[i(e,"color=")]="",e[i(e,"colorId=")]=""),location.href=location.origin+"/cars/"+e.join("&")}function i(t,e){return t.findIndex(l=>l.includes(e))}
