import {api_getFullAutoInfo} from "@/js/apibase.js"
import {formatterShowPrice, prepareCars, getUrlParam,} from "@/js/global-func.js";

import {calculator} from "@/js/credit.js"
import "@/js/car_panels.js"


const id = getUrlParam('id');
let autoName = ''

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#share').addEventListener('click', copyUrlToClipboard) // делиться ссылкой
    document.querySelectorAll('.reserving').forEach(el => el.addEventListener('click', reserve))
})

api_getFullAutoInfo(id, res => {
    /** Имя и зарактеристики  b Хлебные крошки */
    {
        if ((!res || !res.brand) && confirm("Данный автомобиль снят с продажи")) window.history.back()

        autoName = document.querySelectorAll('.auto-name')
        autoName[0].innerHTML = autoName[1].innerHTML = autoName[2].innerHTML = res.brand + ' ' + res.model + ', ' + res.yearReleased

        let brandPath = document.querySelector('#auto-brand-path')
        brandPath.innerHTML = `<a href='/cars/?brand=${res.brand}&brandId=${res.brandId || ''}'>Автомобили ${res.brand} с пробегом</a>`

        let autoPrice = document.querySelectorAll('.auto-price')
        autoPrice[0].innerHTML = autoPrice[1].innerHTML = formatterShowPrice(res.price) + ' ₽'

        let autoPriceMonth = document.querySelectorAll('.auto-price-month')
        autoPriceMonth[0].innerHTML = autoPriceMonth[1].innerHTML = 'от ' + parseInt(parseInt(res.price.replace(/ /g, '')) / 90.12) + ' ₽/мес'

        let autoYear = document.querySelectorAll('.auto-year')
        autoYear[0].innerHTML = autoYear[1].innerHTML = autoYear[1].innerHTML = res.yearReleased + ' год'

        let autoMill = document.querySelectorAll('.auto-mill')
        autoMill[0].innerHTML = autoMill[1].innerHTML = formatterShowPrice(res.milleage) + ' км'

        let autoEngine = document.querySelectorAll('.auto-engine')
        autoEngine[0].innerHTML = autoEngine[1].innerHTML = res.engineCapacity + ' л / ' + res.enginePower + ' л.с / ' + res.engineType

        let autoGear = document.querySelectorAll('.auto-gear')
        autoGear[0].innerHTML = autoGear[1].innerHTML = res.gearboxType || ''

        let autoDrive = document.querySelectorAll('.auto-drive')
        autoDrive[0].innerHTML = autoDrive[1].innerHTML = res.driveType || ''

        let autoRule = document.querySelectorAll('.auto-rule')
        autoRule[0].innerHTML = autoRule[1].innerHTML = res.wheelType || ''

        let autoBody = document.querySelectorAll('.auto-body')
        autoBody[0].innerHTML = autoBody[1].innerHTML = res.bodyType || ''

        let autoColor = document.querySelectorAll('.auto-color')
        autoColor[0].innerHTML = autoColor[1].innerHTML = res.color || ''

        let addr = document.querySelector('.main__card-product--top .address')
        addr.innerHTML = res.fullAddress
    }

    /** Фотки */
    {
        let autoSwip = document.querySelector('#auto-swip')
        res.images.forEach(el => {
            autoSwip.innerHTML += `
    <div class="swiper-slide" ondblclick="toBig('big')">
        <img src="${el}" alt="">
    </div>`
        })


        let autoMore = document.querySelector('#auto-more')
        autoMore.innerHTML = `<div class="fotos_black" onclick="showMore()">${res.images.length} фото</div>`

        res.images.forEach((el, index) => {
            autoMore.innerHTML += `<div onClick="showSlide(${index})"><img src="${el}" alt=""></div>`
        })
    }

    /** комплектация*/
    {
        let equipment = document.querySelector('#auto-equipment')
        equipment.innerHTML = []
        res.сonfiguration.forEach(el => equipment.innerHTML += `<li>${el}</li>`)
    }

    /** выбранные  и сраниваемые*/
    {
        let favorite_chosen = document.querySelector('#favorite_chosen')
        if (favorite_chosen) {
            favorite_chosen.innerHTML = `
<a href="javascript:addCompare('${res.id}')" ondblclick="dblCompare('${res.id}')">
        <img id="compareId_${res.id}" src='/icons/compare_cars.svg' alt='' style="width: 23px; margin-right: 18px">
      </a>
      <a href="javascript:addFavorite('${res.id}')">
        <img id="favoriteId_${res.id}" src='/icons/penta.svg' alt='' style="width: 20px">
      </a>`
        }

        window.favorCars = prepareCars([res])
        window.compareCars = [res]

        initFavotite()
        initChosen()
        calculator(res.price) // покажем на слайдере
    }
})


async function copyUrlToClipboard() {
    if (navigator.clipboard) {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
            showShareText()
        } catch (err) {
            console.error('Не удалось скопировать URL: ', err);
        }
    } else {
        const url = window.location.href;
        const tempInput = document.createElement('input');
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy'); // Копируем (устаревший метод)
        document.body.removeChild(tempInput);
        showShareText()
    }
}

function showShareText() {
    document.querySelector('.link #share_text').style.display = 'block'
    setTimeout(() => {
        document.querySelector('.link #share_text').style.display = 'none'
    }, 3000)
}


function reserve() {
    /* бронирование */
    let link = '?name=' + autoName[0].innerHTML + '&id=' + id
    location.href = '/reserve/' + link
}