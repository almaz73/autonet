import {api_getCountBrands} from "@/js/API-base/apibase.js"

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic) return false
    let brandDatas = [
        {
            url: "/cars/vaz-lada/",
            imgSrc: "/icons/lada.png",
            text: "ВАЗ (LADA)"
        },
        {
            url: "/cars/kia/",
            imgSrc: "/icons/kia.png",
            text: "KIA"
        },
        {
            url: "/cars/hyundai/",
            imgSrc: "/icons/hyundai.png",
            text: "HYUNDAI"
        },
        {
            url: "/cars/renault/",
            imgSrc: "/icons/renault.png",
            text: "RENAULT"
        },
        {
            url: "/cars/chevrolet/",
            imgSrc: "/icons/chevrolet.png",
            text: "CHEVROLET"
        },
        {
            url: "/cars/volkswagen/",
            imgSrc: "/icons/volkswagen.png",
            text: "VOLKSWAGEN"
        },
        {
            url: "/cars/skoda/",
            imgSrc: "/icons/skoda.png",
            text: "SKODA"
        },
        {
            url: "/cars/nissan/",
            imgSrc: "/icons/nissan.png",
            text: "NISSAN"
        },
        {
            url: "/cars/ford/",
            imgSrc: "/icons/ford.png",
            text: "FORD"
        },
        {
            url: "/cars/opel/",
            imgSrc: "/icons/opel.png",
            text: "OPEL"
        },
        {
            url: "/cars/toyota/",
            imgSrc: "/icons/toyota.png",
            text: "TOYOTA"
        },
        {
            url: "/cars/mitsubishi/",
            imgSrc: "/icons/mitsubishi.png",
            text: "MITSUBISHI"
        },
        {
            url: "/cars/mazda/",
            imgSrc: "/icons/mazda.png",
            text: "MAZDA"
        },
        {
            url: "/cars/chery/",
            imgSrc: "/icons/chery.png",
            text: "CHERY"
        },
        {
            url: "/cars/gaz/",
            imgSrc: "/icons/gaz.png",
            text: "ГАЗ"
        },
        {
            url: "/cars/haval/",
            imgSrc: "/icons/haval.png",
            text: "HAVAL"
        },
        {
            url: "/cars/honda/",
            imgSrc: "/icons/honda.png",
            text: "HONDA"
        },
        {
            url: "/cars/datsun/",
            imgSrc: "/icons/datsun.png",
            text: "DATSUN"
        },
        {
            url: "/cars/geely/",
            imgSrc: "/icons/geely.png",
            text: "GEELY"
        },
        {
            url: "/cars/peugeot/",
            imgSrc: "/icons/peugeot.png",
            text: "PEUGEOT"
        },
        {
            url: "/cars/audi/",
            imgSrc: "/icons/audi.png",
            text: "AUDI"
        },
        {
            url: "/cars/bmw/",
            imgSrc: "/icons/bmw.png",
            text: "BMW"
        },
        {
            url: "/cars/bogdan/",
            imgSrc: "/icons/bogdan.png",
            text: "BOGDAN"
        },
        {
            url: "/cars/brilliance/",
            imgSrc: "/icons/brilliance.png",
            text: "BRILLIANCE"
        },
        {
            url: "/cars/byd/",
            imgSrc: "/icons/byd.png",
            text: "BYD"
        },
        {
            url: "/cars/cadillac/",
            imgSrc: "/icons/cadillac.png",
            text: "CADILLAC"
        },
        {
            url: "/cars/achanganudi/",
            imgSrc: "/icons/changan.png",
            text: "CHANGAN"
        },
        {
            url: "/cars/chrysler/",
            imgSrc: "/icons/chrysler.png",
            text: "CHRYSLER"
        },
        {
            url: "/cars/citroen/",
            imgSrc: "/icons/citroen.png",
            text: "CITROEN"
        },
        {
            url: "/cars/daihatsu/",
            imgSrc: "/icons/daihatsu.png",
            text: "DAIHATSU"
        },
        {
            url: "/cars/daewoo/",
            imgSrc: "/icons/daewoo.png",
            text: "DAEWOO"
        },
        {
            url: "/cars/dodge/",
            imgSrc: "/icons/dodge.png",
            text: "DODGE"
        },
        {
            url: "/cars/dongfeng/",
            imgSrc: "/icons/dongfeng.png",
            text: "DONGFENG"
        },
        {
            url: "/cars/fiat/",
            imgSrc: "/icons/fiat.png",
            text: "FIAT"
        },
        {
            url: "/cars/foton/",
            imgSrc: "/icons/foton.png",
            text: "FOTON"
        },
        {
            url: "/cars/great-wall/",
            imgSrc: "/icons/great-wall.png",
            text: "GREAT-WALL"
        },
        {
            url: "/cars/hafei/",
            imgSrc: "/icons/hafei.png",
            text: "HAFEI"
        },
        {
            url: "/cars/haima/",
            imgSrc: "/icons/haima.png",
            text: "HAIMA"
        },
        {
            url: "/cars/hawtai/",
            imgSrc: "/icons/hawtai.png",
            text: "HAWTAI"
        },
        {
            url: "/cars/infiniti/",
            imgSrc: "/icons/infiniti.png",
            text: "INFINITI"
        },
        {
            url: "/cars/iran-khodro/",
            imgSrc: "/icons/iran-khodro.png",
            text: "IRAN-KHODRO"
        },
        {
            url: "/cars/isuzu/",
            imgSrc: "/icons/isuzu.png",
            text: "ISUZU"
        },
        {
            url: "/cars/IVECO/",
            imgSrc: "/icons/IVECO.png",
            text: "IVECO"
        },
        {
            url: "/cars/izh/",
            imgSrc: "/icons/izh.png",
            text: "IZH"
        },
        {
            url: "/cars/jac/",
            imgSrc: "/icons/jac.png",
            text: "JAC"
        },
        {
            url: "/cars/jaguar/",
            imgSrc: "/icons/jaguar.png",
            text: "JAGUAR"
        },
        {
            url: "/cars/jeep/",
            imgSrc: "/icons/jeep.png",
            text: "JEEP"
        },
        {
            url: "/cars/land-rover/",
            imgSrc: "/icons/land-rover.png",
            text: "LAND-ROVER"
        },
        {
            url: "/cars/lexus/",
            imgSrc: "/icons/lexus.png",
            text: "LEXUS"
        },
        {
            url: "/cars/lifan/",
            imgSrc: "/icons/lifan.png",
            text: "LIFAN"
        },
        {
            url: "/cars/LUXGEN/",
            imgSrc: "/icons/LUXGEN.png",
            text: "LUXGEN"
        },
        {
            url: "/cars/mercedes-benz/",
            imgSrc: "/icons/mercedes-benz.png",
            text: "MERCEDES-BENZ"
        },
        {
            url: "/cars/mini/",
            imgSrc: "/icons/mini.png",
            text: "MINI"
        },
        {
            url: "/cars/moskvich/",
            imgSrc: "/icons/moskvich.png",
            text: "MOSKVICH"
        },
        {
            url: "/cars/porsche/",
            imgSrc: "/icons/porsche.png",
            text: "PORSCHE"
        },
        {
            url: "/cars/ravon/",
            imgSrc: "/icons/ravon.png",
            text: "RAVON"
        },
        {
            url: "/cars/rover/",
            imgSrc: "/icons/rover.png",
            text: "ROVER"
        },
        {
            url: "/cars/seat/",
            imgSrc: "/icons/seat.png",
            text: "SEAT"
        },
        {
            url: "/cars/ssangyong/",
            imgSrc: "/icons/ssangyong.png",
            text: "SSANGYONG"
        },
        {
            url: "/cars/subaru/",
            imgSrc: "/icons/subaru.png",
            text: "SUBARU"
        },
        {
            url: "/cars/uaz/",
            imgSrc: "/icons/uaz.png",
            text: "UAZ"
        },
        {
            url: "/cars/volvo/",
            imgSrc: "/icons/volvo.png",
            text: "VOLVO"
        },
        {
            url: "/cars/vortex/",
            imgSrc: "/icons/vortex.png",
            text: "VORTEX"
        },
        {
            url: "/cars/YAMAHA/",
            imgSrc: "/icons/YAMAHA.png",
            text: "YAMAHA"
        },
        {
            url: "/cars/zaz/",
            imgSrc: "/icons/zaz.png",
            text: "ZAZ"
        },
        {
            url: "/cars/zotye/",
            imgSrc: "/icons/zotye.png",
            text: "ZOTYE"
        },
        {
            url: "/cars/СЕАЗ/",
            imgSrc: "/icons/СЕАЗ.png",
            text: "СЕАЗ"
        }
    ]


    function filler(arr) {
        let txt = `<div class='list_brands'>`
        arr.forEach((el => {
            txt += ` <div>
              <a href='${el.url}'>
                  <span class='icon'>
                      <img src='${el.imgSrc}' alt='' class='d-block' loading='lazy'>
                  </span>
                  <span class='text'>${el.text}</span>
                  <span class='total'>${el.total}</span>
              </a>
          </div>`
        }))
        txt += `</div>`
        brands_dynamic.innerHTML = txt
    }

    // filler(brandDatas)

    api_getCountBrands().then(res => {
        let newList = []

        for (let i = 0; i < 20; i++) {
            let brandName = res[i].name.toUpperCase()
            let brand = brandDatas.find(el => el.text === brandName)

            if (!brand) {
                console.log("%c Новый НЕнастроенный бренд = ","background: orange; color: black", "", res[i].name)
                // тоже нужно логировать
            }

            newList.push({
                url: brand ? brand.url : `/cars/${brandName}/`,
                imgSrc: brand ? brand.imgSrc : "/icons/compare_cars.svg",
                text: brandName,
                total: res[i].count
            })
        }

        filler(newList)
    })

})

