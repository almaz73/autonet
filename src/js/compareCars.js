import {formatterShowPrice} from '@/js/global-func.js'

window.addCompare = function (val) {
    let currentCar = window.compareCars.find(el => el.id === val)

    let storage = getComparedCars()
    let car = currentCar
    car.images = currentCar.images[0]

    let compareButton = document.querySelector("#compareId_" + val)
    let isChosen = compareButton.classList.contains('chosen')
    let isExist = storage.find(el => el.id === val)

    if (!isChosen) {
        compareButton.classList.add('chosen')
        if (!isExist) storage.push(car)
    } else {
        compareButton.classList.remove('chosen')
        storage = storage.filter(el => el.id !== car.id)
    }

    localStorage.setItem('ComparedCars', JSON.stringify(storage))
    showCountButton(storage)
}

function getComparedCars() {
    let storage = localStorage.getItem('ComparedCars')
    if (storage) storage = JSON.parse(storage)
    else storage = []

    return storage
}

function showCountButton(storage) {
    let countDiv = document.querySelector('#compareCount')
    if (countDiv && storage.length) {
        countDiv.innerHTML = '<img src="/icons/car-icon_b.svg">' + storage.length
        countDiv.style.display = 'flex'
    } else if (countDiv) countDiv.style.display = 'none'
}

window.deleteAllCar = function () {
    window.deleteCar()
}
window.deleteCar = function (id) {
    let storage = getComparedCars()
    if (id) storage = storage.filter(el => el.id !== id)
    else storage = []

    localStorage.setItem('ComparedCars', JSON.stringify(storage))
    showCountButton(storage)
    showChosen(storage)

    if (!storage.length) {
        let clearButton = document.querySelector('.compare-clear')
        if (clearButton) clearButton.style.display = 'none'
    }
}

function showChosen(storage_) {
    let storage = storage_ || getComparedCars()
    showCountButton(storage)

    storage.forEach(el => {
        let compareButton = document.querySelector("#compareId_" + el.id)
        if (compareButton) compareButton.classList.add('chosen')
    })

    if (location.pathname === '/personal/list-compared/') {
        let compareDiv = document.querySelector('#compare-field')
        let DELETE = ''
        let PREVIEW_PICTURE = ''
        let NAME = ''
        let PRICE = ''
        let PROBEG = ''
        let GOD_VYPUSKA = ''
        let TSVET = ''
        let OBEM_DVIGATELYA = ''
        let TIP_DVIGATELYA = ''
        let MOSHCHNOST_DVIGATELYA = ''
        let TIP_KPP = ''
        let TIP_PRIVODA = ''
        let TIP_KUZOVA = ''
        let GOROD = ''
        let MARKA = ''
        let MODEL = ''

        storage.forEach(el => {
            DELETE += `<td><a href="javascript:deleteCar('${el.id}')">Удалить</a></td>`
            PREVIEW_PICTURE += `<td><a href="${el.href}"><img src="${el.images}" alt=""></a></td>`
            NAME += `<td><a href="${el.href}">"${el.brand} ${el.model}</a></td>`
            PRICE += `<td>${formatterShowPrice(el.price)} руб.</td>`
            if (el.milleage) PROBEG += `<td>${formatterShowPrice(el.milleage) || ''} км</td>`
            GOD_VYPUSKA += `<td>${el.yearReleased || ''}</td>`
            TSVET += `<td>${el.color || ''}</td>`
            OBEM_DVIGATELYA += `<td>${el.engineCapacity || ''}</td>`
            TIP_DVIGATELYA += `<td>${el.engineType || ''}</td>`
            MOSHCHNOST_DVIGATELYA += `<td>${el.enginePower || ''}</td>`
            TIP_KPP += `<td>${el.gearboxType || ''}</td>`
            TIP_PRIVODA += `<td>${el.driveType || ''}</td>`
            TIP_KUZOVA += `<td>${el.bodyType || ''}</td>`
            GOROD += `<td>${el.fullAddress || ''}</td>`
            MARKA += `<td>${el.brand || ''}</td>`
            MODEL += `<td>${el.model || ''}</td>`
        })

        compareDiv.innerHTML = `
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${DELETE}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td>Картинка для анонса</td>
                ${PREVIEW_PICTURE}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${NAME}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${PRICE}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${PROBEG}
            </tr>
            <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${GOD_VYPUSKA}
            </tr>
            <tr class="TSVET">
                <td>Цвет</td>
                ${TSVET}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${OBEM_DVIGATELYA}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${TIP_DVIGATELYA}
            </tr>
            <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${MOSHCHNOST_DVIGATELYA}
            </tr>
            <tr class="TIP_KPP">
                <td>Тип КПП</td>
               ${TIP_KPP}
            </tr>
            <tr class="TIP_PRIVODA">
                <td>Тип привода</td>
                ${TIP_PRIVODA}
            </tr>
            <tr class="TIP_KUZOVA">
                <td>Тип кузова</td>
                 ${TIP_KUZOVA}
            </tr>
            <tr class="GOROD">
                <td>Город</td>
                ${GOROD}
            </tr>
            <tr class="MARKA">
                <td>Марка</td>
                ${MARKA}
            </tr>
            <tr class="MODEL">
                <td>Модель</td>
                ${MODEL}
            </tr>`
        if (!storage.length) compareDiv.innerHTML = '<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>'
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Перетаскивание мышкой
    let isDragging = false;
    let startX;
    let tableScroll = document.querySelector('.bx_compare')
    if (tableScroll) {
        tableScroll.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            e.preventDefault();
        });
        tableScroll.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            tableScroll.scrollBy(startX - e.clientX, 0); // Прокрутка контейнера
            startX = e.clientX;
        });
        tableScroll.addEventListener('mouseup', () => isDragging = false);
    }

    if (location.pathname === '/personal/list-compared/') showChosen()
    else setTimeout(showChosen, 2000);

})

window.dblCompare = function () {
    location.href = '/personal/list-compared/'
}
