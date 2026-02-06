import {dealers, punkts, tyres, services} from "@/js/global-constants.js"



function fillBlocks(arr, withAlphabet) {
    let txt = ''
    if (withAlphabet) arr.sort((a, b) => a.city > b.city ? 1 : -1)
    let oldLetter = ''
    arr.forEach(el => {
        let firstLetter = el.city.slice(0, 1)
        if (withAlphabet && firstLetter !== oldLetter) {
            txt += `<div class="letter">${firstLetter}</div>`
            oldLetter = firstLetter
        }
        txt += `
        <div class="contact_p"  style="background: url(${el.url})">
            <div class="contact__flex">
                <div class="city">${el.city}</div>
                <div class="address">
                    <a href="javascript:openMap('${el.map}')">
                        ${el.address}
                    </a>
                </div>
                <div class="phone">
                    <a href="tel:${el.tel}">${el.tel}</a>
                </div>
                
                <div  class="navi">
                    <button onclick="openPhoto('${el.url}')">Фото</button>
                    <button onclick="openMap('${el.map}')">Карта</button>
                </div>

                <div class="subname">
                    Режим работы
                </div>
                <div>
                    ${el.days}                    
                </div>
            </div>
        </div>`
    })
    return txt

}

const currentCity = document.querySelector('#currentCity')

document.addEventListener('DOMContentLoaded', () => {
    let searchField = document.querySelector('#search-field')
    searchField && searchField.addEventListener('input', () => {
        let part = searchField.value.toLowerCase()
        let smallDealers = dealers.filter(el => el.city.toLowerCase().includes(part))

        if (smallDealers.length) dealersDiv.innerHTML = fillBlocks(smallDealers, 'withAlphabet')
        else dealersDiv.innerHTML = 'Такой город не найден.'
    })


    let dealersDiv = document.querySelector('#dealers')
    if (dealersDiv) dealersDiv.innerHTML = fillBlocks(dealers, 'withAlphabet')

    let punktsDiv = document.querySelector('#punkts')
    if (punktsDiv) punktsDiv.innerHTML = fillBlocks(punkts)

    let tyresDiv = document.querySelector('#tyres')
    if (tyresDiv) tyresDiv.innerHTML = fillBlocks(tyres)

    let servicesViv = document.querySelector('#services')
    if (servicesViv) servicesViv.innerHTML = fillBlocks(services)
});
