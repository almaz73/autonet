import {getUrlParam} from "@/js/global-func.js";
import {api_getYearGap} from "@/js/API-base/apibase.js";

const whiteFilter = `<div  class="filter-white">
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

<div id="deleter" title="Очистить">x</div>`
const carVitrina = `<div class="car_vitrina">
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
    </div><cards class='cards dot4' data-col='dot4'></cards>`


let brandName = getUrlParam('brand');
const hasId = getUrlParam('id');

if (!hasId) document.querySelector('#filter_cars').innerHTML = whiteFilter
if (!hasId) document.querySelector('#car-vitrina').innerHTML = carVitrina

if (brandName && !hasId) {
    if (brandName.includes('/')) brandName = brandName.split('/')[0]
    document.querySelector('#path').innerHTML = brandName.toUpperCase()
    // document.querySelector('#vitrina_name').innerHTML = brandName.toUpperCase() + ' с пробегом — выбрать и купить в Автосеть.рф'
}

if (hasId) {
    // document.querySelector('#alone').innerHTML = alone

    console.log('66445', 121212)

}

let deleter = document.querySelector('#deleter')
let currentInput = null
let currentComb = null
let yearGap = []
api_getYearGap().then(res => yearGap = res)

window.onCard = function (val) {
    let inp = val.querySelector('input')
    let datelist1 = document.querySelector('#list1')
    let datelist2 = document.querySelector('#list2')

    currentInput = null
    currentComb = null
    let xy = val.getBoundingClientRect()
    if (inp) {
        let value = val.querySelector('input').value
        if (value) {
            currentInput = inp.onchange && inp.onchange.toString().slice(42, -16)
            deleter.style.left = xy.x + 'px'
            deleter.style.top = (xy.y + window.scrollY) + 'px'
        }
    }
    let select = val.querySelector('.big-comb__selected')

    if (select && select.querySelector('span').classList.contains('bold')) {
        deleter.style.left = xy.x + 'px'
        deleter.style.top = (xy.y + window.scrollY) + 'px'
        currentComb = select.parentElement
    }


    // Если  поля годов, показываем панели
    if (val.querySelector('span').innerHTML && ['Год от:'].includes(val.querySelector('span').innerHTML)) {
        if (!datelist1.innerHTML) {
            for (let i = +yearGap.from; i < +yearGap.to; i++) {
                datelist1.innerHTML += `<a>${i}</a>`
            }
            let yearsList = datelist1.querySelectorAll('a')
            yearsList.forEach(el => {
                el.addEventListener('click', val => {
                    inp.value = val.target.innerText
                    input_chamged('yearReleasedFrom', val.target.innerText)
                    datelist1.style.left = '-1000px'
                })
            })
        }
        datelist1.style.left = xy.x + 'px'
        datelist1.style.top = (45 + xy.y + window.scrollY) + 'px'
        datelist2.style.left = '-1000px'

    } else if (val.querySelector('span').innerHTML && ['Год до:'].includes(val.querySelector('span').innerHTML)) {
        if (!datelist2.innerHTML) {
            for (let i = +yearGap.from; i < +yearGap.to; i++) {
                datelist2.innerHTML += `<a>${i}</a>`
            }
            let yearsList = datelist2.querySelectorAll('a')
            yearsList.forEach(el => {
                el.addEventListener('click', val => {
                    inp.value = val.target.innerText
                    input_chamged('yearReleasedTo', val.target.innerText)
                    datelist2.style.left = '-1000px'
                })
            })
        }

        datelist2.style.left = xy.x + 'px'
        datelist2.style.top = (45 + xy.y + window.scrollY) + 'px'
        datelist1.style.left = '-1000px'
    } else {
        datelist1.style.left = '-1000px'
        datelist2.style.left = '-1000px'
    }

    if (val.querySelector('input')) val.querySelector('input').focus()
}
document.querySelector('#deleter').addEventListener('click', () => {
    if (currentInput) {
        input_chamged(currentInput, '')
        cleanImpField(currentInput)
    }
    if (currentComb) {
        currentComb.querySelector('.big-comb__placeholder').innerText = ''
        if (currentComb.title === 'Марка') {
            document.querySelector('[data-placeholder="Модель"] .big-comb__placeholder').innerText = ''
        }
        cleanCombField(currentComb.title)
    }
})

function cleanImpField(name) {
    let inp = document.querySelector(`[onchange="input_chamged('${name}', this.value)"]`)
    if (inp) inp.value = ''
    let comb = document.querySelector(`[data-placeholder="${name}"]`)
    if (comb) comb.querySelector('.big-comb__placeholder').innerText = ''
}

function cleanCombField(name) {
    let parts = location.search.split('&')
    // тут лучше нужно отредактировать адреснуя стрку и нужно перезагрущить

    if (name === 'Марка') {
        parts[getPartByName(parts, 'brand=')] = '?'
        parts[getPartByName(parts, 'brandId=')] = ''
        parts[getPartByName(parts, 'model=')] = ''
        parts[getPartByName(parts, 'modelId=')] = ''
    }
    if (name === 'Модель') {
        parts[getPartByName(parts, 'model=')] = ''
        parts[getPartByName(parts, 'modelId=')] = ''
    }
    if (name === 'Тип двигателя') parts[getPartByName(parts, 'engineType=')] = ''
    if (name === 'Город') parts[getPartByName(parts, 'city=')] = ''
    if (name === 'Тип КПП') parts[getPartByName(parts, 'gearboxType=')] = ''
    if (name === 'Тип привода') parts[getPartByName(parts, 'driveType=')] = ''
    if (name === 'Руль') parts[getPartByName(parts, 'wheelType=')] = ''
    if (name === 'Тип кузова') parts[getPartByName(parts, 'bodyType=')] = ''

    location.href = location.origin + '/cars/' + parts.join('&')
}

function getPartByName(parts, name) {
    return parts.findIndex(el => el.includes(name))
}

