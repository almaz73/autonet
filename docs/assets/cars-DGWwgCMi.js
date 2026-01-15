import"./main-zwmTiN8O.js";/* empty css              */import"./brands-icons-CnP8OsvD.js";import"./filter-controls-DJ3KQCal.js";/* empty css                          */import"./swiper_buy-DuPzPkpo.js";import"./swiper-starter-CO_6yeV6.js";import"./apibase-CWZdDwnH.js";const e=`<div  class="filter-white">
<div class="filter-white-back filter-fields">
        <div class="frame-filter__item">
            <comb data-placeholder='Марка' />
            <label>Марка</label>
        </div>
        <div class="frame-filter__item">
            <comb data-placeholder='Модель' />
            <label>Модель</label>
        </div>
        <div class="frame-filter__item">
            <comb data-placeholder='Город' />
            <label>Город</label>
        </div>

        <div style="flex-grow: 1">
            <div class="big-combo control-flex">
                <span style="width: 60px">Год от:</span>
                <input class="big-comb__input" style="width: 40px" value="1997" onclick="this.select()">
            </div>
        </div>

        <div class="no_advanced">
            <div class="big-combo control-flex">
                <span style="width: 60px">Год до:</span>
                <input class="big-comb__input" style="width: 40px" value="2025" onclick="this.select()">
            </div>
        </div>

        <div class="frame-filter__item no_advanced">
            <comb data-placeholder='Цвет'/>
        </div>

        <div>
            <div class="big-combo control-flex">
                <span style="width: 80px">Цена от: </span>
                <input class="big-comb__input" style="width: 70px" value="6882400" onclick="this.select()">
            </div>
        </div>

        <div class="no_advanced">
            <div class="big-combo control-flex">
                <span style="width: 80px">Цена до: </span>
                <input class="big-comb__input" style="width: 70px" value="6882400" onclick="this.select()">
            </div>
        </div>

        <div class="no_advanced">
            <div class="big-combo control-flex">
                <span style="width: 85px">Пробег до: </span>
                <input class="big-comb__input" style="width: 70px" onclick="this.select()">
            </div>
        </div>

        <div class="frame-filter__item no_advanced">
            <comb data-placeholder='Тип кузова'/>
        </div>



        <div class="frame-filter__item no_advanced">
            <comb data-placeholder='Тип КПП'/>
        </div>

        <div class="frame-filter__item no_advanced">
            <comb data-placeholder='Тип двигателя'/>
        </div>

        <div class="no_advanced">
            <div class="big-combo control-flex">
                <span style="width: 160px">Объем двигателя до: </span>
                <input class="big-comb__input" style="width: 60px" value="" onclick="this.select()">
            </div>
        </div>

        <div class="no_advanced">
            <div class="big-combo control-flex">
                <span style="width: 187px">Мощность двигателя до: </span>
                <input class="big-comb__input" style="width: 60px" value="" onclick="this.select()">
            </div>
        </div>

        <div class="frame-filter__item no_advanced">
            <comb data-placeholder='Тип привода'/>
        </div>

        <div class="frame-filter__item no_advanced">
            <comb data-placeholder='Руль'/>
        </div>
    </div>

    <div class="frame-filter__controls">
        <button class="frame-filter__controls-advanced">
            <span class="frame-filter__controls-advanced-icon"></span>
            <span class="frame-filter__controls-advanced-text">Расширенный фильтр</span>
        </button>

        <a href="javascript:void(0);" class="frame-filter__controls-reset">Сбросить</a>

        <button class="frame-filter__submit" type="submit" id="set_filter" name="set_filter" value="Показать">
            Показать&nbsp;<span class="number">12</span>&nbsp;предложений
        </button>
    </div>
</div>`,t=`<div class="car_vitrina">
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
                цена
                <img src="/src/svg/arrow-down.svg" alt="arrow" loading="lazy" width='10' height='18'>
            </span>
        </span>
    </div><cards class='cards dot4' data-col='dot4'></cards>`,s=new URLSearchParams(window.location.search),i=s.get("brand");s.get("id");const a=s.has("id");a||(document.querySelector("#filter_cars").innerHTML=e);a||(document.querySelector("#car-vitrina").innerHTML=t);i&&!a&&(document.querySelector("#path").innerHTML=i.toUpperCase(),document.querySelector("#vitrina_name").innerHTML=i.toUpperCase()+" с пробегом — выбрать и купить в Автосеть.рф");console.log("hasId",a);a&&console.log("66445",121212);console.log("document.querySelector(#car-vitrina = ",document.querySelector("#car-vitrina"));
