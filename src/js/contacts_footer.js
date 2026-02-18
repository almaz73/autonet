import {dealers} from '@/js/global-constants.js'

window.addEventListener('DOMContentLoaded', () => {
    let cityButton = document.querySelector('.footer-city-button');
    let select_div = document.querySelector('.comb__selected');
    let cities = document.querySelector('.main-nav.cities');
    let cityB_contacts = document.querySelector('#city-contacts')
    let addr_foot = document.querySelector('#addr_foot')
    let mapModal = document.querySelector('.map-modal')
    let mapModalmap = document.querySelector('.map-modal .map')
    let photoModal = document.querySelector('.photo-modal')
    let photoModalPic = document.querySelector('.photo-modal .pic')

    cityButton.innerHTML = localStorage.getItem('selectedCity') || 'Россия';
    if (cityB_contacts) cityB_contacts.innerHTML = cityButton.innerHTML || 'Россия';
    setAddress(cityButton.innerHTML)

    function setAddress(cityName) {
        let obj = dealers.filter(el => el.city === cityName)
        addr_foot.innerHTML = ''
        obj && obj.forEach(el => {
            addr_foot.innerHTML += `
            <div class="address">
                <a href="javascript:openMap('${el.map}')">
                ${el.address}
                </a>
            </div>`
        })
        getVitrina()
    }

    window.setCity = function (cityName) {
        setAddress(cityName)
        localStorage.setItem('selectedCity', cityName);
        cities.style.transform = 'translateX(150vw)';
        select_div.innerHTML = cityButton.innerHTML = cityName
        if (cityB_contacts) cityB_contacts.innerHTML = cityName
    }


    if (mapModal) {
        window.openMap = function (val) {
            mapModal.style.display = val ? 'grid' : 'none'
            mapModalmap.innerHTML = `<iframe src="${val}" width="100%" height="720" frameborder="0"></iframe>`
        }

        window.openPhoto = function (val) {
            if (photoModal) photoModal.style.display = val ? 'grid' : 'none'
            if (photoModalPic) photoModalPic.innerHTML = `<img src ="${val}">`
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mapModal) {
                window.openMap(false)
                window.openPhoto(false)
            }
        })
    }
})