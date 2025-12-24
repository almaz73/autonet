const contacts = [
    {
        city: 'Альметьевски',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00',
        map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa48691a6bc05dd67e7bcfb1ad8e429acaff3cf13a292a8f4a69e512dbacb7fda&amp;source=constructor'
    },
    {
        city: 'Казань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    }
]

const dealers = [
    {
        city: 'Казань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Астрахань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Казань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Казань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Казань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Казань',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Альметьевски',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Уфа',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Екатеринбург',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Магнитогорск',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Ижевск',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Самара',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Саратов',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    },
    {
        city: 'Оренбург',
        url: '/photo/contacts/chelna_myra.webp',
        coords: '55.826655, 49.022026',
        address: 'Горьковское шоссе, 55',
        tel: '88005001156',
        days: 'ПН-ВС с 9:00 до 21:00'
    }
]



let punkts
let tyres
let services

punkts = tyres = services = contacts

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


document.addEventListener('DOMContentLoaded', () => {
    let searchField = document.querySelector('#search-field')
    searchField.addEventListener('input', () => {
        let part = searchField.value.toLowerCase()
        let smallDealers = dealers.filter(el => el.city.toLowerCase().includes(part))

        if (smallDealers.length) dealersDiv.innerHTML = fillBlocks(smallDealers, 'withAlphabet')
        else dealersDiv.innerHTML = 'Такой город не найден.'
    })

    let currentCity = document.querySelector('#currentCity')
    currentCity.innerHTML = fillBlocks(contacts)

    let dealersDiv = document.querySelector('#dealers')
    dealersDiv.innerHTML = fillBlocks(dealers, 'withAlphabet')

    let punktsDiv = document.querySelector('#punkts')
    punktsDiv.innerHTML = fillBlocks(punkts)

    let tyresDiv = document.querySelector('#tyres')
    tyresDiv.innerHTML = fillBlocks(tyres)

    let servicesViv = document.querySelector('#services')
    servicesViv.innerHTML = fillBlocks(services)
});

let mapModal = document.querySelector('.map-modal')
let mapModalmap = document.querySelector('.map-modal .map')


if (mapModal) {
    window.openMap = function (val) {
        mapModal.style.display = val ? 'grid' : 'none'
        // mapModalmap.innerHTML =`<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa48691a6bc05dd67e7bcfb1ad8e429acaff3cf13a292a8f4a69e512dbacb7fda&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>`
        mapModalmap.innerHTML = `<iframe src="${val}" width="100%" height="720" frameborder="0"></iframe>`
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mapModal) window.openMap(false)
    })
}