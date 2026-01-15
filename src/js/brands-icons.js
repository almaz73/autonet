import {api_getCountBrands} from "@/js/API-base/apibase.js"

const urlParams = new URLSearchParams(window.location.search);
const hasBrand = urlParams.has('brand');

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic || hasBrand) return false

    let brandDatas = [
        {
            url: "/cars/?brand=vaz-lada",
            imgSrc: "/icons/lada.png",
            text: "ВАЗ (LADA)"
        },
        {
            url: "/cars/?brand=kia",
            imgSrc: "/icons/kia.png",
            text: "KIA"
        },
        {
            url: "/cars/?brand=hyundai",
            imgSrc: "/icons/hyundai.png",
            text: "HYUNDAI"
        },
        {
            url: "/cars/?brand=renault",
            imgSrc: "/icons/renault.png",
            text: "RENAULT"
        },
        {
            url: "/cars/?brand=chevrolet",
            imgSrc: "/icons/chevrolet.png",
            text: "CHEVROLET"
        },
        {
            url: "/cars/?brand=volkswagen",
            imgSrc: "/icons/volkswagen.png",
            text: "VOLKSWAGEN"
        },
        {
            url: "/cars/?brand=skoda",
            imgSrc: "/icons/skoda.png",
            text: "SKODA"
        },
        {
            url: "/cars/?brand=nissan",
            imgSrc: "/icons/nissan.png",
            text: "NISSAN"
        },
        {
            url: "/cars/?brand=ford",
            imgSrc: "/icons/ford.png",
            text: "FORD"
        },
        {
            url: "/cars/?brand=opel",
            imgSrc: "/icons/opel.png",
            text: "OPEL"
        },
        {
            url: "/cars/?brand=toyota",
            imgSrc: "/icons/toyota.png",
            text: "TOYOTA"
        },
        {
            url: "/cars/?brand=mitsubishi",
            imgSrc: "/icons/mitsubishi.png",
            text: "MITSUBISHI"
        },
        {
            url: "/cars/?brand=mazda",
            imgSrc: "/icons/mazda.png",
            text: "MAZDA"
        },
        {
            url: "/cars/?brand=chery",
            imgSrc: "/icons/chery.png",
            text: "CHERY"
        },
        {
            url: "/cars/?brand=gaz",
            imgSrc: "/icons/gaz.png",
            text: "ГАЗ"
        },
        {
            url: "/cars/?brand=haval",
            imgSrc: "/icons/haval.png",
            text: "HAVAL"
        },
        {
            url: "/cars/?brand=honda",
            imgSrc: "/icons/honda.png",
            text: "HONDA"
        },
        {
            url: "/cars/?brand=datsun",
            imgSrc: "/icons/datsun.png",
            text: "DATSUN"
        },
        {
            url: "/cars/?brand=geely",
            imgSrc: "/icons/geely.png",
            text: "GEELY"
        },
        {
            url: "/cars/?brand=peugeot",
            imgSrc: "/icons/peugeot.png",
            text: "PEUGEOT"
        },
        {
            url: "/cars/?brand=audi",
            imgSrc: "/icons/audi.png",
            text: "AUDI"
        },
        {
            url: "/cars/?brand=bmw",
            imgSrc: "/icons/bmw.png",
            text: "BMW"
        },
        {
            url: "/cars/?brand=bogdan",
            imgSrc: "/icons/bogdan.png",
            text: "BOGDAN"
        },
        {
            url: "/cars/?brand=brilliance",
            imgSrc: "/icons/brilliance.png",
            text: "BRILLIANCE"
        },
        {
            url: "/cars/?brand=byd",
            imgSrc: "/icons/byd.png",
            text: "BYD"
        },
        {
            url: "/cars/?brand=cadillac",
            imgSrc: "/icons/cadillac.png",
            text: "CADILLAC"
        },
        {
            url: "/cars/?brand=achanganudi",
            imgSrc: "/icons/changan.png",
            text: "CHANGAN"
        },
        {
            url: "/cars/?brand=chrysler",
            imgSrc: "/icons/chrysler.png",
            text: "CHRYSLER"
        },
        {
            url: "/cars/?brand=citroen",
            imgSrc: "/icons/citroen.png",
            text: "CITROEN"
        },
        {
            url: "/cars/?brand=daihatsu",
            imgSrc: "/icons/daihatsu.png",
            text: "DAIHATSU"
        },
        {
            url: "/cars/?brand=daewoo",
            imgSrc: "/icons/daewoo.png",
            text: "DAEWOO"
        },
        {
            url: "/cars/?brand=dodge",
            imgSrc: "/icons/dodge.png",
            text: "DODGE"
        },
        {
            url: "/cars/?brand=dongfeng",
            imgSrc: "/icons/dongfeng.png",
            text: "DONGFENG"
        },
        {
            url: "/cars/?brand=fiat",
            imgSrc: "/icons/fiat.png",
            text: "FIAT"
        },
        {
            url: "/cars/?brand=foton",
            imgSrc: "/icons/foton.png",
            text: "FOTON"
        },
        {
            url: "/cars/?brand=great-wall",
            imgSrc: "/icons/great-wall.png",
            text: "GREAT-WALL"
        },
        {
            url: "/cars/?brand=hafei",
            imgSrc: "/icons/hafei.png",
            text: "HAFEI"
        },
        {
            url: "/cars/?brand=haima",
            imgSrc: "/icons/haima.png",
            text: "HAIMA"
        },
        {
            url: "/cars/?brand=hawtai",
            imgSrc: "/icons/hawtai.png",
            text: "HAWTAI"
        },
        {
            url: "/cars/?brand=infiniti",
            imgSrc: "/icons/infiniti.png",
            text: "INFINITI"
        },
        {
            url: "/cars/?brand=iran-khodro",
            imgSrc: "/icons/iran-khodro.png",
            text: "IRAN-KHODRO"
        },
        {
            url: "/cars/?brand=isuzu",
            imgSrc: "/icons/isuzu.png",
            text: "ISUZU"
        },
        {
            url: "/cars/?brand=IVECO",
            imgSrc: "/icons/IVECO.png",
            text: "IVECO"
        },
        {
            url: "/cars/?brand=izh",
            imgSrc: "/icons/izh.png",
            text: "IZH"
        },
        {
            url: "/cars/?brand=jac",
            imgSrc: "/icons/jac.png",
            text: "JAC"
        },
        {
            url: "/cars/?brand=jaguar",
            imgSrc: "/icons/jaguar.png",
            text: "JAGUAR"
        },
        {
            url: "/cars/?brand=jeep",
            imgSrc: "/icons/jeep.png",
            text: "JEEP"
        },
        {
            url: "/cars/?brand=land-rover",
            imgSrc: "/icons/land-rover.png",
            text: "LAND-ROVER"
        },
        {
            url: "/cars/?brand=lexus",
            imgSrc: "/icons/lexus.png",
            text: "LEXUS"
        },
        {
            url: "/cars/?brand=lifan",
            imgSrc: "/icons/lifan.png",
            text: "LIFAN"
        },
        {
            url: "/cars/?brand=LUXGEN",
            imgSrc: "/icons/LUXGEN.png",
            text: "LUXGEN"
        },
        {
            url: "/cars/?brand=mercedes-benz",
            imgSrc: "/icons/mercedes-benz.png",
            text: "MERCEDES-BENZ"
        },
        {
            url: "/cars/?brand=mini",
            imgSrc: "/icons/mini.png",
            text: "MINI"
        },
        {
            url: "/cars/?brand=moskvich",
            imgSrc: "/icons/moskvich.png",
            text: "MOSKVICH"
        },
        {
            url: "/cars/?brand=porsche",
            imgSrc: "/icons/porsche.png",
            text: "PORSCHE"
        },
        {
            url: "/cars/?brand=ravon",
            imgSrc: "/icons/ravon.png",
            text: "RAVON"
        },
        {
            url: "/cars/?brand=rover",
            imgSrc: "/icons/rover.png",
            text: "ROVER"
        },
        {
            url: "/cars/?brand=seat",
            imgSrc: "/icons/seat.png",
            text: "SEAT"
        },
        {
            url: "/cars/?brand=ssangyong",
            imgSrc: "/icons/ssangyong.png",
            text: "SSANGYONG"
        },
        {
            url: "/cars/?brand=subaru",
            imgSrc: "/icons/subaru.png",
            text: "SUBARU"
        },
        {
            url: "/cars/?brand=uaz",
            imgSrc: "/icons/uaz.png",
            text: "UAZ"
        },
        {
            url: "/cars/?brand=volvo",
            imgSrc: "/icons/volvo.png",
            text: "VOLVO"
        },
        {
            url: "/cars/?brand=vortex",
            imgSrc: "/icons/vortex.png",
            text: "VORTEX"
        },
        {
            url: "/cars/?brand=YAMAHA",
            imgSrc: "/icons/YAMAHA.png",
            text: "YAMAHA"
        },
        {
            url: "/cars/?brand=zaz",
            imgSrc: "/icons/zaz.png",
            text: "ZAZ"
        },
        {
            url: "/cars/?brand=zotye",
            imgSrc: "/icons/zotye.png",
            text: "ZOTYE"
        },
        {
            url: "/cars/?brand=СЕАЗ",
            imgSrc: "/icons/СЕАЗ.png",
            text: "СЕАЗ"
        }
    ]


    function filler(arr) {
        let txt = `<div class='list_brands'>`
        arr.forEach((el => {
            txt += ` <div>
              <a href='${el.url}/'>
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

