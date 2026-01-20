import {api_GetCarCount} from "@/js/API-base/apibase.js"

const urlParams = new URLSearchParams(window.location.search);
const hasBrand = urlParams.has('brand');

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic || hasBrand) return false

    let brandDatas = [
        {
            url: "/cars/?brand=vaz-lada",
            imgSrc: "/icons/lada.png",
            text: "ВАЗ (LADA)",
            brandId: "6f596f12-696c-4baa-be75-6533d4d84caa"
        },
        {
            url: "/cars/?brand=kia",
            imgSrc: "/icons/kia.png",
            text: "KIA",
            brandId:"8d24f2f3-6b6a-4ddb-b8e9-d47214bcedba"
        },
        {
            url: "/cars/?brand=hyundai",
            imgSrc: "/icons/hyundai.png",
            text: "HYUNDAI",
            brandId:"f8bc75a4-7382-491d-a79a-7b252bf43e07"
        },
        {
            url: "/cars/?brand=renault",
            imgSrc: "/icons/renault.png",
            text: "RENAULT",
            brandId:"7d952b26-6929-4e09-87d5-e4ab9fc76105"
        },
        {
            url: "/cars/?brand=chevrolet",
            imgSrc: "/icons/chevrolet.png",
            text: "CHEVROLET",
            brandId:"d2a38a7d-0488-45e1-9122-9bb9f867937e"
        },
        {
            url: "/cars/?brand=volkswagen",
            imgSrc: "/icons/volkswagen.png",
            text: "VOLKSWAGEN",
            brandId:"d2a38a7d-0488-45e1-9122-9bb9f867937e"
        },
        {
            url: "/cars/?brand=skoda",
            imgSrc: "/icons/skoda.png",
            text: "SKODA",
            brandId:"daa876ff-4ad9-4723-873c-f2630fa23e45"
        },
        {
            url: "/cars/?brand=nissan",
            imgSrc: "/icons/nissan.png",
            text: "NISSAN",
            brandId: "b0196288-c7f3-4c46-8896-c0d2fe91da39"
        },
        {
            url: "/cars/?brand=ford",
            imgSrc: "/icons/ford.png",
            text: "FORD",
            brandId:"156720ac-c10f-4616-ad4a-dfd8aa3e8e1f"
        },
        {
            url: "/cars/?brand=opel",
            imgSrc: "/icons/opel.png",
            text: "OPEL",
            brandId:"f2658436-3b49-4e1e-ace1-eb8d5e7c11f3"
        },
        {
            url: "/cars/?brand=toyota",
            imgSrc: "/icons/toyota.png",
            text: "TOYOTA",
            brandId:"f31a03d3-90de-42b7-9a09-836abfb63963"
        },
        {
            url: "/cars/?brand=mitsubishi",
            imgSrc: "/icons/mitsubishi.png",
            text: "MITSUBISHI",
            brandId:"5565bc9a-6a0b-488d-b3e5-74db3b189c3a"
        },
        {
            url: "/cars/?brand=mazda",
            imgSrc: "/icons/mazda.png",
            text: "MAZDA",
            brandId:"650e3240-36a4-4eab-a35d-694c073604fe"
        },
        {
            url: "/cars/?brand=chery",
            imgSrc: "/icons/chery.png",
            text: "CHERY",
            brandId:"efb07c20-92c6-4d44-ac1c-56c34d9c179a"
        },
        {
            url: "/cars/?brand=gaz",
            imgSrc: "/icons/gaz.png",
            text: "ГАЗ",
            brandId:"c3f40e76-c222-4779-a4d1-6eae7ab9599f"
        },
        {
            url: "/cars/?brand=haval",
            imgSrc: "/icons/haval.png",
            text: "HAVAL",
            brandId:"b9b34249-535b-4edf-b787-12d62265de4c"
        },
        {
            url: "/cars/?brand=honda",
            imgSrc: "/icons/honda.png",
            text: "HONDA",
            brandId:"81835cf2-2b91-4749-b10e-6a7066125f56"
        },
        {
            url: "/cars/?brand=datsun",
            imgSrc: "/icons/datsun.png",
            text: "DATSUN",
            brandId:"7e374600-39c4-4485-b104-bf0a05ac4636"
        },
        {
            url: "/cars/?brand=geely",
            imgSrc: "/icons/geely.png",
            text: "GEELY",
            brandId:"7166fe8c-da6a-4792-b0fc-61c0962d9144"
        },
        {
            url: "/cars/?brand=peugeot",
            imgSrc: "/icons/peugeot.png",
            text: "PEUGEOT",
            brandId:"cf84ff18-24af-46ed-ae8b-e995edcde885"
        },
        {
            url: "/cars/?brand=audi",
            imgSrc: "/icons/audi.png",
            text: "AUDI",
            brandId:"34a42940-33f9-43a6-a981-612b4f3ffa48"
        },
        {
            url: "/cars/?brand=bmw",
            imgSrc: "/icons/bmw.png",
            text: "BMW",
            brandId:"af7cabf0-e806-45c7-a2b2-36c932c47571"
        },
        // {
        //     url: "/cars/?brand=bogdan",
        //     imgSrc: "/icons/bogdan.png",
        //     text: "BOGDAN",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=brilliance",
        //     imgSrc: "/icons/brilliance.png",
        //     text: "BRILLIANCE",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=byd",
        //     imgSrc: "/icons/byd.png",
        //     text: "BYD",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=cadillac",
        //     imgSrc: "/icons/cadillac.png",
        //     text: "CADILLAC",
        //     brandId:
        // },
        {
            url: "/cars/?brand=achanganudi",
            imgSrc: "/icons/changan.png",
            text: "CHANGAN",
            brandId:"7362aadc-2c2e-4514-94b3-a9e5fdd805e2"
        },
        // {
        //     url: "/cars/?brand=chrysler",
        //     imgSrc: "/icons/chrysler.png",
        //     text: "CHRYSLER",
        //     brandId:
        // },
        {
            url: "/cars/?brand=citroen",
            imgSrc: "/icons/citroen.png",
            text: "CITROEN",
            brandId:"73a787f4-3e28-4cf2-b725-b7014cceeb1b"
        },
        {
            url: "/cars/?brand=daihatsu",
            imgSrc: "/icons/daihatsu.png",
            text: "DAIHATSU",
            brandId:"47bb384d-8397-4d08-8f9c-0919428336b2"
        },
        {
            url: "/cars/?brand=daewoo",
            imgSrc: "/icons/daewoo.png",
            text: "DAEWOO",
            brandId:"b9df912e-0b97-44d9-a357-851afbb70835"
        },
        // {
        //     url: "/cars/?brand=dodge",
        //     imgSrc: "/icons/dodge.png",
        //     text: "DODGE",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=dongfeng",
        //     imgSrc: "/icons/dongfeng.png",
        //     text: "DONGFENG",
        //     brandId:
        // },
        {
            url: "/cars/?brand=fiat",
            imgSrc: "/icons/fiat.png",
            text: "FIAT",
            brandId:"f84eeb49-91a8-4ab2-a83f-fee79ae38a17"
        },
        // {
        //     url: "/cars/?brand=foton",
        //     imgSrc: "/icons/foton.png",
        //     text: "FOTON",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=great-wall",
        //     imgSrc: "/icons/great-wall.png",
        //     text: "GREAT-WALL",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=hafei",
        //     imgSrc: "/icons/hafei.png",
        //     text: "HAFEI",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=haima",
        //     imgSrc: "/icons/haima.png",
        //     text: "HAIMA",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=hawtai",
        //     imgSrc: "/icons/hawtai.png",
        //     text: "HAWTAI",
        //     brandId:
        // },
        {
            url: "/cars/?brand=infiniti",
            imgSrc: "/icons/infiniti.png",
            text: "INFINITI",
            brandId:"2625b924-428c-4607-9183-5bd8e59fd96a"
        },
        // {
        //     url: "/cars/?brand=iran-khodro",
        //     imgSrc: "/icons/iran-khodro.png",
        //     text: "IRAN-KHODRO",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=isuzu",
        //     imgSrc: "/icons/isuzu.png",
        //     text: "ISUZU",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=IVECO",
        //     imgSrc: "/icons/IVECO.png",
        //     text: "IVECO",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=izh",
        //     imgSrc: "/icons/izh.png",
        //     text: "IZH",
        //     brandId:
        // },
        {
            url: "/cars/?brand=jac",
            imgSrc: "/icons/jac.png",
            text: "JAC",
            brandId:"9a2a779c-cb4a-4047-adb3-2165195612ec"
        },
        // {
        //     url: "/cars/?brand=jaguar",
        //     imgSrc: "/icons/jaguar.png",
        //     text: "JAGUAR",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=jeep",
        //     imgSrc: "/icons/jeep.png",
        //     text: "JEEP",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=land-rover",
        //     imgSrc: "/icons/land-rover.png",
        //     text: "LAND-ROVER",
        //     brandId:
        // },
        {
            url: "/cars/?brand=lexus",
            imgSrc: "/icons/lexus.png",
            text: "LEXUS",
            brandId:"d8d58097-45f6-40cb-b5f2-656091dd9c81"
        },
        {
            url: "/cars/?brand=lifan",
            imgSrc: "/icons/lifan.png",
            text: "LIFAN",
            brandId:"1aba6565-678c-40aa-a183-33c8354087e3"
        },
        // {
        //     url: "/cars/?brand=LUXGEN",
        //     imgSrc: "/icons/LUXGEN.png",
        //     text: "LUXGEN",
        //     brandId:
        // },
        {
            url: "/cars/?brand=mercedes-benz",
            imgSrc: "/icons/mercedes-benz.png",
            text: "MERCEDES-BENZ",
            brandId:"1ff59909-faed-4514-a036-7bc9e022f7dd"
        },
        // {
        //     url: "/cars/?brand=mini",
        //     imgSrc: "/icons/mini.png",
        //     text: "MINI",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=moskvich",
        //     imgSrc: "/icons/moskvich.png",
        //     text: "MOSKVICH",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=porsche",
        //     imgSrc: "/icons/porsche.png",
        //     text: "PORSCHE",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=ravon",
        //     imgSrc: "/icons/ravon.png",
        //     text: "RAVON",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=rover",
        //     imgSrc: "/icons/rover.png",
        //     text: "ROVER",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=seat",
        //     imgSrc: "/icons/seat.png",
        //     text: "SEAT",
        //     brandId:
        // },
        {
            url: "/cars/?brand=ssangyong",
            imgSrc: "/icons/ssangyong.png",
            text: "SSANGYONG",
            brandId:"9f37bb0b-0cab-41f2-bdc8-796737447ed3"
        },
        {
            url: "/cars/?brand=subaru",
            imgSrc: "/icons/subaru.png",
            text: "SUBARU",
            brandId:"7d59e4bb-0bb1-4b58-8189-abe0025b0fa0"
        },
        // {
        //     url: "/cars/?brand=uaz",
        //     imgSrc: "/icons/uaz.png",
        //     text: "UAZ",
        //     brandId:
        // },
        {
            url: "/cars/?brand=volvo",
            imgSrc: "/icons/volvo.png",
            text: "VOLVO",
            brandId:"35b38470-baee-413f-91cd-702b118a2939"
        },
        // {
        //     url: "/cars/?brand=vortex",
        //     imgSrc: "/icons/vortex.png",
        //     text: "VORTEX",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=YAMAHA",
        //     imgSrc: "/icons/YAMAHA.png",
        //     text: "YAMAHA",
        //     brandId:
        // },
        // {
        //     url: "/cars/?brand=zaz",
        //     imgSrc: "/icons/zaz.png",
        //     text: "ZAZ",
        //     brandId:
        // },
        {
            url: "/cars/?brand=zotye",
            imgSrc: "/icons/zotye.png",
            text: "ZOTYE",
            brandId:"a79857f4-3503-483a-bf19-cc35dc1c1de2"
        },
        // {
        //     url: "/cars/?brand=СЕАЗ",
        //     imgSrc: "/icons/СЕАЗ.png",
        //     text: "СЕАЗ",
        //     brandId:
        // }
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

    api_GetCarCount().then(res => {
        let newList = []

        for (let i = 0; i < 20; i++) {
            let brandName = res[i].name.toUpperCase()
            let brand = brandDatas.find(el => el.text === brandName)

            let url = '/cars/?brand='+brandName+'&brandId='+brand.brandId

            if (!brand) {
                console.log("%c Новый НЕнастроенный бренд = ","background: orange; color: black", "", res[i].name)
                // тоже нужно логировать
            }

            newList.push({
                url: brand ? url : `/cars/${brandName}/`,
                imgSrc: brand ? brand.imgSrc : "/icons/compare_cars.svg",
                text: brandName,
                total: res[i].count
            })
        }

        filler(newList)
    })

})

