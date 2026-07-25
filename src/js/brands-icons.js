import {api_GetCarCount} from "@/js/apibase.js"
import {eventBus, getUrlParam, globalValues, getBrandLat} from "@/js/global-func.js"

const hasBrand = getUrlParam('brand');

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic || hasBrand) return false

    let brandDatas = [
        {
            url: "/cars/0/vaz-lada",
            imgSrc: "/st/icons/lada.png",
            text: "ВАЗ (LADA)",
        },
        {
            url: "/cars/0/kia",
            imgSrc: "/st/icons/kia.png",
            text: "KIA",
        },
        {
            url: "/cars/0/hyundai",
            imgSrc: "/st/icons/hyundai.png",
            text: "HYUNDAI"
        },
        {
            url: "/cars/0/renault",
            imgSrc: "/st/icons/renault.png",
            text: "RENAULT",
        },
        {
            url: "/cars/0/chevrolet",
            imgSrc: "/st/icons/chevrolet.png",
            text: "CHEVROLET",
        },
        {
            url: "/cars/0/volkswagen",
            imgSrc: "/st/icons/volkswagen.png",
            text: "VOLKSWAGEN",
        },
        {
            url: "/cars/0/skoda",
            imgSrc: "/st/icons/skoda.png",
            text: "SKODA",
        },
        {
            url: "/cars/0/nissan",
            imgSrc: "/st/icons/nissan.png",
            text: "NISSAN",
        },
        {
            url: "/cars/0/ford",
            imgSrc: "/st/icons/ford.png",
            text: "FORD",
        },
        {
            url: "/cars/0/opel",
            imgSrc: "/st/icons/opel.png",
            text: "OPEL",
        },
        {
            url: "/cars/0/toyota",
            imgSrc: "/st/icons/toyota.png",
            text: "TOYOTA",
        },
        {
            url: "/cars/0/mitsubishi",
            imgSrc: "/st/icons/mitsubishi.png",
            text: "MITSUBISHI",
        },
        {
            url: "/cars/0/mazda",
            imgSrc: "/st/icons/mazda.png",
            text: "MAZDA",
        },
        {
            url: "/cars/0/chery",
            imgSrc: "/st/icons/chery.png",
            text: "CHERY",
        },
        {
            url: "/cars/0/gaz",
            imgSrc: "/st/icons/gaz.png",
            text: "ГАЗ",
        },
        {
            url: "/cars/0/haval",
            imgSrc: "/st/icons/haval.png",
            text: "HAVAL",
        },
        {
            url: "/cars/0/honda",
            imgSrc: "/st/icons/honda.png",
            text: "HONDA",
        },
        {
            url: "/cars/0/datsun",
            imgSrc: "/st/icons/datsun.png",
            text: "DATSUN",
        },
        {
            url: "/cars/0/geely",
            imgSrc: "/st/icons/geely.png",
            text: "GEELY",
        },
        {
            url: "/cars/0/peugeot",
            imgSrc: "/st/icons/peugeot.png",
            text: "PEUGEOT",
        },
        {
            url: "/cars/0/audi",
            imgSrc: "/st/icons/audi.png",
            text: "AUDI",
        },
        {
            url: "/cars/0/bmw",
            imgSrc: "/st/icons/bmw.png",
            text: "BMW",
        },
        // {
        //     url: "/cars/0/bogdan",
        //     imgSrc: "/st/icons/bogdan.png",
        //     text: "BOGDAN",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/brilliance",
        //     imgSrc: "/st/icons/brilliance.png",
        //     text: "BRILLIANCE",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/byd",
        //     imgSrc: "/st/icons/byd.png",
        //     text: "BYD",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/cadillac",
        //     imgSrc: "/st/icons/cadillac.png",
        //     text: "CADILLAC",
        //     brandId:
        // },
        {
            url: "/cars/0/achanganudi",
            imgSrc: "/st/icons/changan.png",
            text: "CHANGAN",
        },
        // {
        //     url: "/cars/0/chrysler",
        //     imgSrc: "/st/icons/chrysler.png",
        //     text: "CHRYSLER",
        //     brandId:
        // },
        {
            url: "/cars/0/citroen",
            imgSrc: "/st/icons/citroen.png",
            text: "CITROEN",
        },
        {
            url: "/cars/0/daihatsu",
            imgSrc: "/st/icons/daihatsu.png",
            text: "DAIHATSU",
        },
        {
            url: "/cars/0/daewoo",
            imgSrc: "/st/icons/daewoo.png",
            text: "DAEWOO",
        },
        // {
        //     url: "/cars/0/dodge",
        //     imgSrc: "/st/icons/dodge.png",
        //     text: "DODGE",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/dongfeng",
        //     imgSrc: "/st/icons/dongfeng.png",
        //     text: "DONGFENG",
        //     brandId:
        // },
        {
            url: "/cars/0/fiat",
            imgSrc: "/st/icons/fiat.png",
            text: "FIAT",
        },
        // {
        //     url: "/cars/0/foton",
        //     imgSrc: "/st/icons/foton.png",
        //     text: "FOTON",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/great-wall",
        //     imgSrc: "/st/icons/great-wall.png",
        //     text: "GREAT-WALL",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/hafei",
        //     imgSrc: "/st/icons/hafei.png",
        //     text: "HAFEI",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/haima",
        //     imgSrc: "/st/icons/haima.png",
        //     text: "HAIMA",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/hawtai",
        //     imgSrc: "/st/icons/hawtai.png",
        //     text: "HAWTAI",
        //     brandId:
        // },
        {
            url: "/cars/0/infiniti",
            imgSrc: "/st/icons/infiniti.png",
            text: "INFINITI",
        },
        // {
        //     url: "/cars/0/iran-khodro",
        //     imgSrc: "/st/icons/iran-khodro.png",
        //     text: "IRAN-KHODRO",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/isuzu",
        //     imgSrc: "/st/icons/isuzu.png",
        //     text: "ISUZU",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/IVECO",
        //     imgSrc: "/st/icons/IVECO.png",
        //     text: "IVECO",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/izh",
        //     imgSrc: "/st/icons/izh.png",
        //     text: "IZH",
        //     brandId:
        // },
        {
            url: "/cars/0/jac",
            imgSrc: "/st/icons/jac.png",
            text: "JAC",
        },
        // {
        //     url: "/cars/0/jaguar",
        //     imgSrc: "/st/icons/jaguar.png",
        //     text: "JAGUAR",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/jeep",
        //     imgSrc: "/st/icons/jeep.png",
        //     text: "JEEP",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/land-rover",
        //     imgSrc: "/st/icons/land-rover.png",
        //     text: "LAND-ROVER",
        //     brandId:
        // },
        {
            url: "/cars/0/lexus",
            imgSrc: "/st/icons/lexus.png",
            text: "LEXUS",
        },
        {
            url: "/cars/0/lifan",
            imgSrc: "/st/icons/lifan.png",
            text: "LIFAN",
        },
        // {
        //     url: "/cars/0/LUXGEN",
        //     imgSrc: "/st/icons/LUXGEN.png",
        //     text: "LUXGEN",
        //     brandId:
        // },
        {
            url: "/cars/0/mercedes-benz",
            imgSrc: "/st/icons/mercedes-benz.png",
            text: "MERCEDES-BENZ",
        },
        // {
        //     url: "/cars/0/mini",
        //     imgSrc: "/st/icons/mini.png",
        //     text: "MINI",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/moskvich",
        //     imgSrc: "/st/icons/moskvich.png",
        //     text: "MOSKVICH",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/porsche",
        //     imgSrc: "/st/icons/porsche.png",
        //     text: "PORSCHE",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/ravon",
        //     imgSrc: "/st/icons/ravon.png",
        //     text: "RAVON",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/rover",
        //     imgSrc: "/st/icons/rover.png",
        //     text: "ROVER",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/seat",
        //     imgSrc: "/st/icons/seat.png",
        //     text: "SEAT",
        //     brandId:
        // },
        {
            url: "/cars/0/ssangyong",
            imgSrc: "/st/icons/ssangyong.png",
            text: "SSANGYONG",
        },
        {
            url: "/cars/0/subaru",
            imgSrc: "/st/icons/subaru.png",
            text: "SUBARU",
        },
        // {
        //     url: "/cars/0/uaz",
        //     imgSrc: "/st/icons/uaz.png",
        //     text: "UAZ",
        //     brandId:
        // },
        {
            url: "/cars/0/volvo",
            imgSrc: "/st/icons/volvo.png",
            text: "VOLVO",
        },
        // {
        //     url: "/cars/0/vortex",
        //     imgSrc: "/st/icons/vortex.png",
        //     text: "VORTEX",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/YAMAHA",
        //     imgSrc: "/st/icons/YAMAHA.png",
        //     text: "YAMAHA",
        //     brandId:
        // },
        // {
        //     url: "/cars/0/zaz",
        //     imgSrc: "/st/icons/zaz.png",
        //     text: "ZAZ",
        //     brandId:
        // },
        {
            url: "/cars/0/zotye",
            imgSrc: "/st/icons/zotye.png",
            text: "ZOTYE",
        },
        // {
        //     url: "/cars/0/СЕАЗ",
        //     imgSrc: "/st/icons/СЕАЗ.png",
        //     text: "СЕАЗ",
        //     brandId:
        // }
        {
            url: "/cars/0/jetta",
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
                url = '/cars/0/' + getBrandLat(brandName)
            }

            newList.push({
                url: brand ? url : `/cars/0/${getBrandLat(brandName)}/`,
                imgSrc: brand ? brand.imgSrc : "/st/icons/compare_cars.svg",
                text: brandName,
                total: res[i] && res[i].count
            })
        }

        filler(newList)
    }

})

