window.addCompare = function (val) {
    let currentCar = window.currentCars.find(el => el.id === val)

    let storage = getComparedCars()
    let car = {
        id: currentCar.id,
        address: currentCar.address,
        name: currentCar.name,
        price: currentCar.price,
        info: currentCar.info,
        href: currentCar.href,
        photo: currentCar.photos[0],
    }

    let compareButton = document.querySelector("#compareId_" + val)
    let isChoden = compareButton.classList.contains('chosen')
    let isExist = storage.find(el => el.id === val)

    if (!isChoden) {
        compareButton.classList.add('chosen')
        if (!isExist) storage.push(car)
    } else {
        compareButton.classList.remove('chosen')
        storage = storage.filter(el => el.id !== car.id)
    }

    localStorage.setItem('ComparedCars', JSON.stringify(storage))
    showCountBurron(storage)
}

function getComparedCars() {
    let storage = localStorage.getItem('ComparedCars')
    if (storage) storage = JSON.parse(storage)
    else storage = []

    return storage
}

function showCountBurron(storage) {
    let countDiv = document.querySelector('#compareCount')
    if (storage.length) {
        countDiv.innerHTML = '<img src="/icons/car-icon_b.svg">' + storage.length
        countDiv.style.display = 'flex'
    } else countDiv.style.display = 'none'
}

window.deleteCar = function (id) {
    let storage = getComparedCars()
    storage = storage.filter(el => el.id !== id)
    localStorage.setItem('ComparedCars', JSON.stringify(storage))
    showCountBurron(storage)
    showChosen(storage)
}

function showChosen(storage_) {
    let storage = storage_ || getComparedCars()
    showCountBurron(storage)

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
            let info = el.info.split(',')

            DELETE += `<td><a href="javascript:deleteCar(${el.id})">Удалить</a></td>`
            PREVIEW_PICTURE += `<td><a href="${el.href}"><img src="${el.photo}" alt=""></a></td>`
            NAME += `<td><a href="${el.href}">"${el.name.slice(0, -5)}</a></td>`
            PRICE += `<td>${el.price} руб.</td>`
            PROBEG += `<td>${info[0]}</td>`
            GOD_VYPUSKA += `<td>${el.name.slice(-5)}</td>`
            TSVET += `<td></td>`
            OBEM_DVIGATELYA += `<td>${info[1]}</td>`
            TIP_DVIGATELYA += `<td>${info[4]}</td>`
            MOSHCHNOST_DVIGATELYA += `<td></td>`
            TIP_KPP += `<td></td>`
            TIP_PRIVODA += `<td>${info[3]}</td>`
            TIP_KUZOVA += `<td>${info[2]}</td>`
            GOROD += `<td>${el.address.split(',')[0]}</td>`
            MARKA += `<td>${el.name.split(' ')[0]}</td>`
            MODEL += `<td>${el.name.split(' ')[1]}</td>`
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
        if (!storage.length) compareDiv.innerHTML = '<div class="nodata">НЕТ ВЫБРАННЫХ ПОЗИЦИЙ ДЛЯ СРАВНЕНИЯ</div>'
    }
}


document.addEventListener('DOMContentLoaded', () => {
    showChosen();

    // Перетаскивание мышкой
    let isDragging = false;
    let startX;
    let tableScroll=document.querySelector('.bx_compare')
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
})

window.dblCompare = function () {
    location.href = '/personal/list-compared/'
}
