import {loadDealers} from '@/js/dealer-data.js'
import {loadCities, resolveSelectedCity} from '@/js/cities.js'

const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

// в адресах из CMS встречается <br> — разрешаем только его, остальное экранируем
const formatMultiline = (value) => escapeHtml(value).replace(/&lt;br\s*\/?&gt;/gi, '<br>')

window.addEventListener('DOMContentLoaded', async () => {
    let cityButton = document.querySelector('.footer-city-button');
    let select_div = document.querySelector('.comb__selected');
    let cities = document.querySelector('.main-nav.cities');
    let addr_foot = document.querySelector('#addr_foot')
    let mapModal = document.querySelector('.map-modal')
    let mapModalmap = document.querySelector('.map-modal .map')
    let photoModal = document.querySelector('.photo-modal')
    let photoModalPic = document.querySelector('.photo-modal .pic')

    let allDealers = []
    try {
        allDealers = await loadDealers()
    } catch (error) {
        console.error(error)
    }

    // в футере показываем только адреса выбранного города — без карт
    function setAddress(cityName) {
        if (!addr_foot) return
        const list = allDealers.filter(el => el.city === cityName)
        addr_foot.innerHTML = list
            .map(el => `<div class="address">${formatMultiline(el.address)}</div>`)
            .join('')
    }

    // город мог исчезнуть из базы — тогда показываем «Россию», а не пустой город
    let savedCity = localStorage.getItem('selectedCity') || 'Россия'
    try {
        savedCity = resolveSelectedCity(await loadCities())
    } catch (error) {
        console.error(error)
    }
    if (cityButton) cityButton.innerHTML = savedCity
    if (select_div) select_div.innerHTML = savedCity
    setAddress(savedCity)

    const cityBContacts = document.querySelector('#city-contacts')
    if (cityBContacts && savedCity !== 'Россия') cityBContacts.innerHTML = savedCity

    window.setCity = function (cityName) {
        setAddress(cityName)
        localStorage.setItem('selectedCity', cityName);
        if (cities) cities.style.transform = 'translateX(150vw)';
        if (select_div) select_div.innerHTML = cityName
        if (cityButton) cityButton.innerHTML = cityName
        if (cityBContacts) cityBContacts.innerHTML = cityName
        document.dispatchEvent(new CustomEvent('selectedCityChanged', {detail: {city: cityName}}))
    }

    if (mapModal) {
        window.openMap = function (val) {
            mapModal.style.display = val ? 'grid' : 'none'
            mapModalmap.innerHTML = val
                ? `<iframe src="${val}" width="100%" height="720"></iframe>`
                : ''
        }
    }

    if (photoModal) {
        window.openPhoto = function (val) {
            photoModal.style.display = val ? 'grid' : 'none'
            if (photoModalPic) photoModalPic.innerHTML = `<img alt="" src ="${val}">`
        }
    }

    if (mapModal || photoModal) {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                window.openMap && window.openMap(false)
                window.openPhoto && window.openPhoto(false)
            }
        })
    }
})
