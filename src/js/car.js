import {api_getFullAutoInfo} from "@/js/API-base/apibase.js"
import {formatterShowPrice} from "@/js/global-func.js";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

api_getFullAutoInfo(id).then(res => {
  console.log('res = ', res)

  /** Хлебные крошки */
  {

  }

  /** Имя и зарактеристики */
  {
    let autoName = document.querySelectorAll('.auto-name')
    autoName[0].innerHTML = autoName[1].innerHTML = autoName[2].innerHTML = res.brand + ' ' + res.model + ', ' + res.yearReleased

    let autoPrice = document.querySelectorAll('.auto-price')
    autoPrice[0].innerHTML = autoPrice[1].innerHTML = formatterShowPrice(res.price) + ' ₽'

    let autoPriceMonth = document.querySelectorAll('.auto-price-month')
    // autoPriceMonth[0].innerHTML = autoPriceMonth[1].innerHTML = 'от ' + parseInt(parseInt(res.price.replace(/ /g, '')) / 90.12) + ' ₽/мес'

    let autoYear = document.querySelectorAll('.auto-year')
    autoYear[0].innerHTML = autoYear[1].innerHTML = autoYear[1].innerHTML = res.yearReleased + ' год'

    let autoMill = document.querySelectorAll('.auto-mill')
    autoMill[0].innerHTML = autoMill[1].innerHTML = formatterShowPrice(res.milleage) + ' км'

    let autoEngine = document.querySelectorAll('.auto-engine')
    autoEngine[0].innerHTML = autoEngine[1].innerHTML = res.engineCapacity + ' л / ' + res.enginePower + ' люс / ' + res.engineType

    let autoGear = document.querySelectorAll('.auto-gear')
    autoGear[0].innerHTML = autoGear[1].innerHTML = res.gearboxType || ''

    let autoDrive = document.querySelectorAll('.auto-drive')
    autoDrive[0].innerHTML = autoDrive[1].innerHTML = res.driveType || ''

    let autoRule = document.querySelectorAll('.auto-rule')
    autoRule[0].innerHTML = autoRule[1].innerHTML = res.rule || ''

    let autoBody = document.querySelectorAll('.auto-body')
    autoBody[0].innerHTML = autoBody[1].innerHTML = res.bodyType || ''

    let autoColor = document.querySelectorAll('.auto-color')
    autoColor[0].innerHTML = autoColor[1].innerHTML = res.color || ''
  }

  /** Фотки */
  let autoSwip =  document.querySelector('#auto-swip')
  res.images.forEach(el=>{
    autoSwip.innerHTML += `
    <div class="swiper-slide">
        <img src="${el}" alt="">
    </div>`
  })

  let autoMore = document.querySelector('#auto-more')
  autoMore.innerHTML = `<div class="fotos_black" onclick="showMore()">${res.images.length} фото</div>`

  res.images.forEach((el, index)=>{
  autoMore.innerHTML += `<div onClick="showSlide(${index+1})"><img src="${el}" alt=""></div>`
  })
})