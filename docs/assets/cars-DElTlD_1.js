import"./main-CgQf-gKC.js";/* empty css              */import"./brands-icons-DlO5lgAv.js";import{g as d}from"./global-func-By-vpF4u.js";import"./filter-controls-DFUuoo5w.js";/* empty css                          */import"./swiper_buy-CDu4HQCt.js";import"./swiper-starter-DAQO3WFk.js";import"./favoriteCars-UyRy5S1X.js";import"./compareCars-DjUyrNbL.js";const r=`<div  class="filter-white">
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
<div id="deleter" title="Очистить">x</div>`,p=`<div class="car_vitrina">
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
    </div><cards class='cards dot4' data-col='dot4'></cards>`;let s=d("brand");const o=d("id");o||(document.querySelector("#filter_cars").innerHTML=r);o||(document.querySelector("#car-vitrina").innerHTML=p);s&&!o&&(s.includes("/")&&(s=s.split("/")[0]),document.querySelector("#path").innerHTML=s.toUpperCase());o&&console.log("66445",121212);let n=document.querySelector("#deleter"),l=null,i=null;window.onCard=function(e){let a=e.querySelector("input");l=null,i=null;let t=e.getBoundingClientRect();a&&e.querySelector("input").value&&(l=a.onchange.toString().slice(42,-16),n.style.left=t.x+"px",n.style.top=t.y+window.scrollY+"px");let c=e.querySelector(".big-comb__selected");c&&c.querySelector("span").classList.contains("bold")&&(n.style.left=t.x+"px",n.style.top=t.y+window.scrollY+"px",i=c.parentElement),e.querySelector("input")&&e.querySelector("input").focus()};document.querySelector("#deleter").addEventListener("click",()=>{l&&(input_chamged(l,""),m(l)),i&&(i.querySelector(".big-comb__placeholder").innerText="",i.title==="Марка"&&(document.querySelector('[data-placeholder="Модель"] .big-comb__placeholder').innerText=""),v(i.title))});function m(e){let a=document.querySelector(`[onchange="input_chamged('${e}', this.value)"]`);a&&(a.value="");let t=document.querySelector(`[data-placeholder="${e}"]`);t&&(t.querySelector(".big-comb__placeholder").innerText="")}function v(e){comb_cleaned(e)}
