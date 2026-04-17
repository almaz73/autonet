import {api_GetCarCount} from "@/js/apibase.js"
import {eventBus, getUrlParam, globalValues} from "@/js/global-func.js"

const hasBrand = getUrlParam('brand');

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic || hasBrand) return false

    let brandDatas = [
        {
            url: "/cars/?brand=vaz-lada",
            imgSrc: "/st/icons/lada.png",
            text: "ВАЗ (LADA)",
        },
        {
            url: "/cars/?brand=kia",
            imgSrc: "/st/icons/kia.png",
            text: "KIA",
        },
        {
            url: "/cars/?brand=hyundai",
            imgSrc: "/st/icons/hyundai.png",
            text: "HYUNDAI"
        },
        {
            url: "/cars/?brand=renault",
            imgSrc: "/st/icons/renault.png",
            text: "RENAULT",
        },
        {
            url: "/cars/?brand=chevrolet",
            imgSrc: "/st/icons/chevrolet.png",
            text: "CHEVROLET",
        },
        {
            url: "/cars/?brand=volkswagen",
            imgSrc: "/st/icons/volkswagen.png",
            text: "VOLKSWAGEN",
        },
        {
            url: "/cars/?brand=skoda",
            imgSrc: "/st/icons/skoda.png",
            text: "SKODA",
        },
        {
            url: "/cars/?brand=nissan",
            imgSrc: "/st/icons/nissan.png",
            text: "NISSAN",
        },
        {
            url: "/cars/?brand=ford",
            imgSrc: "/st/icons/ford.png",
            text: "FORD",
        },
        {
            url: "/cars/?brand=opel",
            imgSrc: "/st/icons/opel.png",
            text: "OPEL",
        },
        {
            url: "/cars/?brand=toyota",
            imgSrc: "/st/icons/toyota.png",
            text: "TOYOTA",
        },
        {
            url: "/cars/?brand=mitsubishi",
            imgSrc: "/st/icons/mitsubishi.png",
            text: "MITSUBISHI",
        },
        {
            url: "/cars/?brand=mazda",
            imgSrc: "/st/icons/mazda.png",
            text: "MAZDA",
        },
        {
            url: "/cars/?brand=chery",
            imgSrc: "/st/icons/chery.png",
            text: "CHERY",
        },
        {
            url: "/cars/?brand=gaz",
            imgSrc: "/st/icons/gaz.png",
            text: "ГАЗ",
        },
        {
            url: "/cars/?brand=haval",
            imgSrc: "/st/icons/haval.png",
            text: "HAVAL",
        },
        {
            url: "/cars/?brand=honda",
            imgSrc: "/st/icons/honda.png",
            text: "HONDA",
        },
        {
            url: "/cars/?brand=datsun",
            imgSrc: "/st/icons/datsun.png",
            text: "DATSUN",
        },
        {
            url: "/cars/?brand=geely",
            imgSrc: "/st/icons/geely.png",
            text: "GEELY",
        },
        {
            url: "/cars/?brand=peugeot",
            imgSrc: "/st/icons/peugeot.png",
            text: "PEUGEOT",
        },
        {
            url: "/cars/?brand=audi",
            imgSrc: "/st/icons/audi.png",
            text: "AUDI",
        },
        {
            url: "/cars/?brand=bmw",
            imgSrc: "/st/icons/bmw.png",
            text: "BMW",
        },
        // {
        //     url: "/cars/?brand=bogdan",
        //     imgSrc: "/st/icons/bogdan.png",
        //     text: "BOGDAN",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=brilliance",
        //     imgSrc: "/st/icons/brilliance.png",
        //     text: "BRILLIANCE",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=byd",
        //     imgSrc: "/st/icons/byd.png",
        //     text: "BYD",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=cadillac",
        //     imgSrc: "/st/icons/cadillac.png",
        //     text: "CADILLAC",
        //     brandId:
        // },
        {
            url: "/cars/?brand=achanganudi",
            imgSrc: "/st/icons/changan.png",
            text: "CHANGAN",
        },
        // {
        //     url: "/cars/?brand=chrysler",
        //     imgSrc: "/st/icons/chrysler.png",
        //     text: "CHRYSLER",
        //     brandId:
        // },
        {
            url: "/cars/?brand=citroen",
            imgSrc: "/st/icons/citroen.png",
            text: "CITROEN",
        },
        {
            url: "/cars/?brand=daihatsu",
            imgSrc: "/st/icons/daihatsu.png",
            text: "DAIHATSU",
        },
        {
            url: "/cars/?brand=daewoo",
            imgSrc: "/st/icons/daewoo.png",
            text: "DAEWOO",
        },
        // {
        //     url: "/cars/?brand=dodge",
        //     imgSrc: "/st/icons/dodge.png",
        //     text: "DODGE",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=dongfeng",
        //     imgSrc: "/st/icons/dongfeng.png",
        //     text: "DONGFENG",
        //     brandId:
        // },
        {
            url: "/cars/?brand=fiat",
            imgSrc: "/st/icons/fiat.png",
            text: "FIAT",
        },
        // {
        //     url: "/cars/?brand=foton",
        //     imgSrc: "/st/icons/foton.png",
        //     text: "FOTON",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=great-wall",
        //     imgSrc: "/st/icons/great-wall.png",
        //     text: "GREAT-WALL",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=hafei",
        //     imgSrc: "/st/icons/hafei.png",
        //     text: "HAFEI",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=haima",
        //     imgSrc: "/st/icons/haima.png",
        //     text: "HAIMA",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=hawtai",
        //     imgSrc: "/st/icons/hawtai.png",
        //     text: "HAWTAI",
        //     brandId:
        // },
        {
            url: "/cars/?brand=infiniti",
            imgSrc: "/st/icons/infiniti.png",
            text: "INFINITI",
        },
        // {
        //     url: "/cars/?brand=iran-khodro",
        //     imgSrc: "/st/icons/iran-khodro.png",
        //     text: "IRAN-KHODRO",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=isuzu",
        //     imgSrc: "/st/icons/isuzu.png",
        //     text: "ISUZU",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=IVECO",
        //     imgSrc: "/st/icons/IVECO.png",
        //     text: "IVECO",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=izh",
        //     imgSrc: "/st/icons/izh.png",
        //     text: "IZH",
        //     brandId:
        // },
        {
            url: "/cars/?brand=jac",
            imgSrc: "/st/icons/jac.png",
            text: "JAC",
        },
        // {
        //     url: "/cars/?brand=jaguar",
        //     imgSrc: "/st/icons/jaguar.png",
        //     text: "JAGUAR",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=jeep",
        //     imgSrc: "/st/icons/jeep.png",
        //     text: "JEEP",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=land-rover",
        //     imgSrc: "/st/icons/land-rover.png",
        //     text: "LAND-ROVER",
        //     brandId:
        // },
        {
            url: "/cars/?brand=lexus",
            imgSrc: "/st/icons/lexus.png",
            text: "LEXUS",
        },
        {
            url: "/cars/?brand=lifan",
            imgSrc: "/st/icons/lifan.png",
            text: "LIFAN",
        },
        // {
        //     url: "/cars/?brand=LUXGEN",
        //     imgSrc: "/st/icons/LUXGEN.png",
        //     text: "LUXGEN",
        //     brandId:
        // },
        {
            url: "/cars/?brand=mercedes-benz",
            imgSrc: "/st/icons/mercedes-benz.png",
            text: "MERCEDES-BENZ",
        },
        // {
        //     url: "/cars/?brand=mini",
        //     imgSrc: "/st/icons/mini.png",
        //     text: "MINI",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=moskvich",
        //     imgSrc: "/st/icons/moskvich.png",
        //     text: "MOSKVICH",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=porsche",
        //     imgSrc: "/st/icons/porsche.png",
        //     text: "PORSCHE",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=ravon",
        //     imgSrc: "/st/icons/ravon.png",
        //     text: "RAVON",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=rover",
        //     imgSrc: "/st/icons/rover.png",
        //     text: "ROVER",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=seat",
        //     imgSrc: "/st/icons/seat.png",
        //     text: "SEAT",
        //     brandId:
        // },
        {
            url: "/cars/?brand=ssangyong",
            imgSrc: "/st/icons/ssangyong.png",
            text: "SSANGYONG",
        },
        {
            url: "/cars/?brand=subaru",
            imgSrc: "/st/icons/subaru.png",
            text: "SUBARU",
        },
        // {
        //     url: "/cars/?brand=uaz",
        //     imgSrc: "/st/icons/uaz.png",
        //     text: "UAZ",
        //     brandId:
        // },
        {
            url: "/cars/?brand=volvo",
            imgSrc: "/st/icons/volvo.png",
            text: "VOLVO",
        },
        // {
        //     url: "/cars/?brand=vortex",
        //     imgSrc: "/st/icons/vortex.png",
        //     text: "VORTEX",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=YAMAHA",
        //     imgSrc: "/st/icons/YAMAHA.png",
        //     text: "YAMAHA",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=zaz",
        //     imgSrc: "/st/icons/zaz.png",
        //     text: "ZAZ",
        //     brandId:
        // },
        {
            url: "/cars/?brand=zotye",
            imgSrc: "/st/icons/zotye.png",
            text: "ZOTYE",
        },
        // {
        //     url: "/cars/?brand=СЕАЗ",
        //     imgSrc: "/st/icons/СЕАЗ.png",
        //     text: "СЕАЗ",
        //     brandId:
        // }
        {
            url: "/cars/?brand=jetta",
            imgSrc: "/st/icons/jetta.png",
            text: "JETTA",
        },
    ]


    function filler(arr) {
        let txt = `<div class='list_brands'>`
        arr.forEach((el, ind) => {
            if (ind > 19) return false
            txt += ` <div>
              <a href='${el.url}'>
                  <span class='icon'>
                      <img src='${el.imgSrc}' alt='' class='d-block' loading='lazy'>
                  </span>
                  <span class='text'>${el.text}</span>
                  <span class='total'>${el.total}</span>
              </a>
          </div>`
        })
        txt += `</div>`
        brands_dynamic.innerHTML = txt
    }

    eventBus.on('dataUpdated', filBrands); // событие загрузки всех комбобоксов из сервера
    function filBrands() {
        let res = globalValues.brandsIds

        let newList = []

        for (let i = 0; i < res.length; i++) {
            let brandName = res[i] && res[i].name.toUpperCase()
            let brand = brandDatas.find(el => el.text === brandName)
            let url

            if (!brand) {
                // console.log("%c Новый бренд = ","background: orange; color: black", "", res[i] && res[i].name)
                // тоже нужно логировать
            } else  url = '/cars/?brand='+brandName

            newList.push({
                url: brand ? url : `/cars/${brandName}/`,
                imgSrc: brand ? brand.imgSrc : "/st/icons/compare_cars.svg",
                text: brandName,
                total: res[i] && res[i].count
            })
        }

        filler(newList)
    }

})

