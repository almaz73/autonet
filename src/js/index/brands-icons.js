import {api_getCountBrands} from "@/js/API-base/apibase.js"

document.addEventListener('DOMContentLoaded', () => {
    let brands_dynamic = document.querySelector('#brands_dynamic')
    if (!brands_dynamic) return false
    let brandDatas = [
        {
            url: "/cars/vaz-lada/",
            imgSrc: "/icons/lada.png",
            text: "ВАЗ (LADA)",
            total: ''
        },
        {
            url: "/cars/kia/",
            imgSrc: "/icons/kia.png",
            text: "KIA",
            total: ''
        },
        {
            url: "/cars/hyundai/",
            imgSrc: "/icons/hyundai.png",
            text: "HYUNDAI",
            total: ''
        },
        {
            url: "/cars/renault/",
            imgSrc: "/icons/renault.png",
            text: "RENAULT",
            total: ''
        },
        {
            url: "/cars/chevrolet/",
            imgSrc: "/icons/chevrolet.png",
            text: "CHEVROLET",
            total: ''
        },
        {
            url: "/cars/volkswagen/",
            imgSrc: "/icons/volkswagen.png",
            text: "VOLKSWAGEN",
            total: ''
        },
        {
            url: "/cars/skoda/",
            imgSrc: "/icons/skoda.png",
            text: "SKODA",
            total: ''
        },
        {
            url: "/cars/nissan/",
            imgSrc: "/icons/nissan.png",
            text: "NISSAN",
            total: ''
        },
        {
            url: "/cars/ford/",
            imgSrc: "/icons/ford.png",
            text: "FORD",
            total: ''
        },
        {
            url: "/cars/opel/",
            imgSrc: "/icons/opel.png",
            text: "OPEL",
            total: ''
        },
        {
            url: "/cars/toyota/",
            imgSrc: "/icons/toyota.png",
            text: "TOYOTA",
            total: ''
        },
        {
            url: "/cars/mitsubishi/",
            imgSrc: "/icons/mitsubishi.png",
            text: "MITSUBISHI",
            total: ''
        },
        {
            url: "/cars/mazda/",
            imgSrc: "/icons/mazda.png",
            text: "MAZDA",
            total: ''
        },
        {
            url: "/cars/chery/",
            imgSrc: "/icons/chery.png",
            text: "CHERY",
            total: ''
        },
        {
            url: "/cars/gaz/",
            imgSrc: "/icons/gaz.png",
            text: "ГАЗ",
            total: ''
        },
        {
            url: "/cars/haval/",
            imgSrc: "/icons/haval.png",
            text: "HAVAL",
            total: ''
        },
        {
            url: "/cars/honda/",
            imgSrc: "/icons/honda.png",
            text: "HONDA",
            total: ''
        },
        {
            url: "/cars/datsun/",
            imgSrc: "/icons/datsun.png",
            text: "DATSUN",
            total: ''
        },
        {
            url: "/cars/geely/",
            imgSrc: "/icons/geely.png",
            text: "GEELY",
            total: ''
        },
        {
            url: "/cars/peugeot/",
            imgSrc: "/icons/peugeot.png",
            text: "PEUGEOT",
            total: ''
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

            if (!brand) console.log('res[i].name = ', res[i].name)

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

