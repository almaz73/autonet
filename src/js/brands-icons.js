import {api_GetCarCount} from "@/js/apibase.js"
import {brandSlug, eventBus, getUrlParam, globalValues} from "@/js/global-func.js"

const hasBrand = getUrlParam('brand');

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic || hasBrand) return false

    let brandDatas = [
        {
            url: "/cars/vaz-lada",
            imgSrc: "/st/icons/lada.png",
            text: "ВАЗ (LADA)",
        },
        {
            url: "/cars/kia",
            imgSrc: "/st/icons/kia.png",
            text: "KIA",
        },
        {
            url: "/cars/hyundai",
            imgSrc: "/st/icons/hyundai.png",
            text: "HYUNDAI"
        },
        {
            url: "/cars/renault",
            imgSrc: "/st/icons/renault.png",
            text: "RENAULT",
        },
        {
            url: "/cars/chevrolet",
            imgSrc: "/st/icons/chevrolet.png",
            text: "CHEVROLET",
        },
        {
            url: "/cars/volkswagen",
            imgSrc: "/st/icons/volkswagen.png",
            text: "VOLKSWAGEN",
        },
        {
            url: "/cars/skoda",
            imgSrc: "/st/icons/skoda.png",
            text: "SKODA",
        },
        {
            url: "/cars/nissan",
            imgSrc: "/st/icons/nissan.png",
            text: "NISSAN",
        },
        {
            url: "/cars/ford",
            imgSrc: "/st/icons/ford.png",
            text: "FORD",
        },
        {
            url: "/cars/opel",
            imgSrc: "/st/icons/opel.png",
            text: "OPEL",
        },
        {
            url: "/cars/toyota",
            imgSrc: "/st/icons/toyota.png",
            text: "TOYOTA",
        },
        {
            url: "/cars/mitsubishi",
            imgSrc: "/st/icons/mitsubishi.png",
            text: "MITSUBISHI",
        },
        {
            url: "/cars/mazda",
            imgSrc: "/st/icons/mazda.png",
            text: "MAZDA",
        },
        {
            url: "/cars/chery",
            imgSrc: "/st/icons/chery.png",
            text: "CHERY",
        },
        {
            url: "/cars/gaz",
            imgSrc: "/st/icons/gaz.png",
            text: "ГАЗ",
        },
        {
            url: "/cars/haval",
            imgSrc: "/st/icons/haval.png",
            text: "HAVAL",
        },
        {
            url: "/cars/honda",
            imgSrc: "/st/icons/honda.png",
            text: "HONDA",
        },
        {
            url: "/cars/datsun",
            imgSrc: "/st/icons/datsun.png",
            text: "DATSUN",
        },
        {
            url: "/cars/geely",
            imgSrc: "/st/icons/geely.png",
            text: "GEELY",
        },
        {
            url: "/cars/peugeot",
            imgSrc: "/st/icons/peugeot.png",
            text: "PEUGEOT",
        },
        {
            url: "/cars/audi",
            imgSrc: "/st/icons/audi.png",
            text: "AUDI",
        },
        {
            url: "/cars/bmw",
            imgSrc: "/st/icons/bmw.png",
            text: "BMW",
        },
        // {
        //     url: "/cars/bogdan",
        //     imgSrc: "/st/icons/bogdan.png",
        //     text: "BOGDAN",
        //     brandId:
        // },
        // {
        //     url: "/cars/brilliance",
        //     imgSrc: "/st/icons/brilliance.png",
        //     text: "BRILLIANCE",
        //     brandId:
        // },
        // {
        //     url: "/cars/byd",
        //     imgSrc: "/st/icons/byd.png",
        //     text: "BYD",
        //     brandId:
        // },
        // {
        //     url: "/cars/cadillac",
        //     imgSrc: "/st/icons/cadillac.png",
        //     text: "CADILLAC",
        //     brandId:
        // },
        {
            url: "/cars/achanganudi",
            imgSrc: "/st/icons/changan.png",
            text: "CHANGAN",
        },
        // {
        //     url: "/cars/chrysler",
        //     imgSrc: "/st/icons/chrysler.png",
        //     text: "CHRYSLER",
        //     brandId:
        // },
        {
            url: "/cars/citroen",
            imgSrc: "/st/icons/citroen.png",
            text: "CITROEN",
        },
        {
            url: "/cars/daihatsu",
            imgSrc: "/st/icons/daihatsu.png",
            text: "DAIHATSU",
        },
        {
            url: "/cars/daewoo",
            imgSrc: "/st/icons/daewoo.png",
            text: "DAEWOO",
        },
        // {
        //     url: "/cars/dodge",
        //     imgSrc: "/st/icons/dodge.png",
        //     text: "DODGE",
        //     brandId:
        // },
        // {
        //     url: "/cars/dongfeng",
        //     imgSrc: "/st/icons/dongfeng.png",
        //     text: "DONGFENG",
        //     brandId:
        // },
        {
            url: "/cars/fiat",
            imgSrc: "/st/icons/fiat.png",
            text: "FIAT",
        },
        // {
        //     url: "/cars/foton",
        //     imgSrc: "/st/icons/foton.png",
        //     text: "FOTON",
        //     brandId:
        // },
        // {
        //     url: "/cars/great-wall",
        //     imgSrc: "/st/icons/great-wall.png",
        //     text: "GREAT-WALL",
        //     brandId:
        // },
        // {
        //     url: "/cars/hafei",
        //     imgSrc: "/st/icons/hafei.png",
        //     text: "HAFEI",
        //     brandId:
        // },
        // {
        //     url: "/cars/haima",
        //     imgSrc: "/st/icons/haima.png",
        //     text: "HAIMA",
        //     brandId:
        // },
        // {
        //     url: "/cars/hawtai",
        //     imgSrc: "/st/icons/hawtai.png",
        //     text: "HAWTAI",
        //     brandId:
        // },
        {
            url: "/cars/infiniti",
            imgSrc: "/st/icons/infiniti.png",
            text: "INFINITI",
        },
        // {
        //     url: "/cars/iran-khodro",
        //     imgSrc: "/st/icons/iran-khodro.png",
        //     text: "IRAN-KHODRO",
        //     brandId:
        // },
        // {
        //     url: "/cars/isuzu",
        //     imgSrc: "/st/icons/isuzu.png",
        //     text: "ISUZU",
        //     brandId:
        // },
        // {
        //     url: "/cars/IVECO",
        //     imgSrc: "/st/icons/IVECO.png",
        //     text: "IVECO",
        //     brandId:
        // },
        // {
        //     url: "/cars/izh",
        //     imgSrc: "/st/icons/izh.png",
        //     text: "IZH",
        //     brandId:
        // },
        {
            url: "/cars/jac",
            imgSrc: "/st/icons/jac.png",
            text: "JAC",
        },
        // {
        //     url: "/cars/jaguar",
        //     imgSrc: "/st/icons/jaguar.png",
        //     text: "JAGUAR",
        //     brandId:
        // },
        // {
        //     url: "/cars/jeep",
        //     imgSrc: "/st/icons/jeep.png",
        //     text: "JEEP",
        //     brandId:
        // },
        // {
        //     url: "/cars/land-rover",
        //     imgSrc: "/st/icons/land-rover.png",
        //     text: "LAND-ROVER",
        //     brandId:
        // },
        {
            url: "/cars/lexus",
            imgSrc: "/st/icons/lexus.png",
            text: "LEXUS",
        },
        {
            url: "/cars/lifan",
            imgSrc: "/st/icons/lifan.png",
            text: "LIFAN",
        },
        // {
        //     url: "/cars/LUXGEN",
        //     imgSrc: "/st/icons/LUXGEN.png",
        //     text: "LUXGEN",
        //     brandId:
        // },
        {
            url: "/cars/mercedes-benz",
            imgSrc: "/st/icons/mercedes-benz.png",
            text: "MERCEDES-BENZ",
        },
        // {
        //     url: "/cars/mini",
        //     imgSrc: "/st/icons/mini.png",
        //     text: "MINI",
        //     brandId:
        // },
        // {
        //     url: "/cars/moskvich",
        //     imgSrc: "/st/icons/moskvich.png",
        //     text: "MOSKVICH",
        //     brandId:
        // },
        // {
        //     url: "/cars/porsche",
        //     imgSrc: "/st/icons/porsche.png",
        //     text: "PORSCHE",
        //     brandId:
        // },
        // {
        //     url: "/cars/ravon",
        //     imgSrc: "/st/icons/ravon.png",
        //     text: "RAVON",
        //     brandId:
        // },
        // {
        //     url: "/cars/rover",
        //     imgSrc: "/st/icons/rover.png",
        //     text: "ROVER",
        //     brandId:
        // },
        // {
        //     url: "/cars/seat",
        //     imgSrc: "/st/icons/seat.png",
        //     text: "SEAT",
        //     brandId:
        // },
        {
            url: "/cars/ssangyong",
            imgSrc: "/st/icons/ssangyong.png",
            text: "SSANGYONG",
        },
        {
            url: "/cars/subaru",
            imgSrc: "/st/icons/subaru.png",
            text: "SUBARU",
        },
        // {
        //     url: "/cars/uaz",
        //     imgSrc: "/st/icons/uaz.png",
        //     text: "UAZ",
        //     brandId:
        // },
        {
            url: "/cars/volvo",
            imgSrc: "/st/icons/volvo.png",
            text: "VOLVO",
        },
        // {
        //     url: "/cars/vortex",
        //     imgSrc: "/st/icons/vortex.png",
        //     text: "VORTEX",
        //     brandId:
        // },
        // {
        //     url: "/cars/YAMAHA",
        //     imgSrc: "/st/icons/YAMAHA.png",
        //     text: "YAMAHA",
        //     brandId:
        // },
        // {
        //     url: "/cars/zaz",
        //     imgSrc: "/st/icons/zaz.png",
        //     text: "ZAZ",
        //     brandId:
        // },
        {
            url: "/cars/zotye",
            imgSrc: "/st/icons/zotye.png",
            text: "ZOTYE",
        },
        // {
        //     url: "/cars/СЕАЗ",
        //     imgSrc: "/st/icons/СЕАЗ.png",
        //     text: "СЕАЗ",
        //     brandId:
        // }
        {
            url: "/cars/jetta",
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
            } else {
                url = '/cars/' + brandSlug(brandName)
            }

            newList.push({
                url: brand ? url : `/cars/${brandSlug(brandName)}`,
                imgSrc: brand ? brand.imgSrc : "/st/icons/compare_cars.svg",
                text: brandName,
                total: res[i] && res[i].count
            })
        }

        filler(newList)
    }

})

