import {formatterShowPrice, checkDeletedCars} from '@/js/global-func.js'

let myComments=''
let storage = getComparedCars()

window.addCompare = function (val) {
    let currentCar = window.compareCars.find(el => el.id === val)

    let storage = getComparedCars()
    let car = currentCar
    if (currentCar.images) car.images = [currentCar.images[0]]

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
    let comparedCars = localStorage.getItem('ComparedCars')
    comparedCars = comparedCars ? JSON.parse(comparedCars) : []

    return comparedCars
}

function showCountButton(storage) {
    let countDiv = document.querySelector('#compareCount')
    if (countDiv && storage.length) {
        countDiv.innerHTML = '<img src="/st/icons/car-icon_b.svg" alt="">' + storage.length
        countDiv.style.display = 'flex'
    } else if (countDiv) countDiv.style.display = 'none'
}

window.deleteAllCar = function () {
    window.deleteCar()
}
window.deleteCar = function (id) {
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

window.openCar = function (href, linkPhoto, isDeleted) {
    if (isDeleted === 'true') linkPhoto = '/st/photo/tmp_auto.webp'
    localStorage.setItem('CAR_SMALL_PHOTO', linkPhoto)
    setTimeout(() => location.href = href, 400)
}

function showChosen() {
    myComments = localStorage.getItem('myComments')
    myComments = myComments ? JSON.parse(myComments) : {}

    let cars =  storage
    showCountButton(cars)

    cars.forEach(el => {
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
        let RULE = ''
        let MARKA = ''
        let MODEL = ''
        let COMMENT = ''

        cars.forEach(el => {
            if (el.images instanceof Array) el.images = el.images[0]
            if (el.address) el.fullAddress = el.address
            if (el.name) {
                el.brand = el.name.split(' ')[0]
                el.model = el.name.split(' ')[1]
            }

            if (el.info) {
                let q = el.info.split(',')
                el.milleage = parseInt(q[0].replace(/\s/g, ''))
                el.engineCapacity = q[1]
                el.bodyType = q[2]
                el.driveType = q[3]
                el.engineType = q[4]
            }

            DELETE += `<td><a href="#" onclick="deleteCar('${el.id}')">Удалить</a></td>`
            if (!el.deleted) PREVIEW_PICTURE += `<td><a onclick="openCar('/cars/car.html?id=${el.id}','${el.images}','${el.deleted}')" href="/cars/car.html?id=${el.id}"><img src="${el.images}" alt=""></a></td>`
            else PREVIEW_PICTURE += `<td> ☹ Автомобиль <br> снят с продажи </td>`
            NAME += `<td><a onclick="openCar('/cars/car.html?id=${el.id}','${el.images}','${el.deleted}')"  href="/cars/car.html?id=${el.id}">${el.brand} ${el.model || ''}</a></td>`
            PRICE += `<td>${formatterShowPrice(el.price)} руб.</td>`
            if (el.milleage) PROBEG += `<td>${formatterShowPrice(el.milleage) || ''} км</td>`
            GOD_VYPUSKA += `<td>${el.yearReleased || ''}</td>`
            TSVET += `<td>${el.color || ''}</td>`
            OBEM_DVIGATELYA += `<td>${(el.engineCapacity / 1000) || ''}</td>`
            TIP_DVIGATELYA += `<td>${el.engineType || ''}</td>`
            MOSHCHNOST_DVIGATELYA += `<td>${el.enginePower || ''} л.с.</td>`

            if (el.gearboxType === 'MT') el.gearboxType = 'Механическая (MT)'
            if (el.gearboxType === 'АT') el.gearboxType = 'Автоматическая (АT)'
            if (el.gearboxType === 'AMT') el.gearboxType = 'Робот (AMT)'
            if (el.gearboxType === 'CVT') el.gearboxType = 'Вариатор (CVT)'

            TIP_KPP += `<td title="777">${el.gearboxType || ''}</td>`
            TIP_PRIVODA += `<td>${el.driveType || ''}</td>`
            TIP_KUZOVA += `<td>${el.bodyType || ''}</td>`
            GOROD += `<td>${el.city || ''}</td>`
            RULE += `<td>${el.wheelType || ''}</td>`
            MARKA += `<td>${el.brand || ''}</td>`
            MODEL += `<td>${el.model || ''}</td>`
            COMMENT += `<td><textarea  title="Запишите себе на заметку" style="border: 1px solid #eee" onchange="commentChanged('${el.id}', this.value)">
${myComments[el.id]?myComments[el.id]:''}</textarea></td>`
        })

        compareDiv.innerHTML = `
              <tr class="DELETE">
                <td style="min-width: 140px"></td>
                ${DELETE}
            </tr>
            <tr class="PREVIEW_PICTURE">
                <td></td>
                ${PREVIEW_PICTURE}            
            </tr>
            <tr class="NAME">
                <td>Название</td>
                ${NAME}
            </tr>
             <tr class="GOD_VYPUSKA">
                <td>Год выпуска</td>
               ${GOD_VYPUSKA}
            </tr>
            <tr class="PRICE">
                <td>Цена</td>                
               ${PRICE}
            </tr>
            <tr class="PROBEG">
                <td>Пробег</td>
                ${PROBEG}
            </tr>
            <tr class="OBEM_DVIGATELYA">
                <td>Объем двигателя</td>
               ${OBEM_DVIGATELYA}
            </tr>
             <tr class="MOSHCHNOST_DVIGATELYA">
                <td>Мощность двигателя</td>
                 ${MOSHCHNOST_DVIGATELYA}
            </tr>
            <tr class="TIP_DVIGATELYA">
                <td>Тип двигателя</td>
                 ${TIP_DVIGATELYA}
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
            <tr class="TSVET">
                <td>Цвет</td>
                ${TSVET}
            </tr>
            <tr class="Руль">
                <td>Руль</td>
                ${RULE}
            </tr>
            <tr class="Руль" title="Свои записи для этого браузера">
                <td>Заметка</td>
                ${COMMENT}
            </tr>
            `
        if (cars.length === 0) {
            compareDiv.innerHTML = '<div class="nodata">НЕТ ВЫБРАННЫХ АВТОМОБИЛЕЙ ДЛЯ СРАВНЕНИЯ</div>'
            sendConfirm()
        }
    }
}

export function initChosen() {
    // Перетаскивание мышкой
    let isDragging = false;
    let startX;
    let tableScroll = document.querySelector('.bx_compare')
    const body = document.body;
    if (tableScroll) {
        tableScroll.addEventListener('mousedown', (e) => {
            if (!e.ctrlKey) return false
            body.style.cursor = 'all-scroll'
            isDragging = true;
            startX = e.clientX;
            e.preventDefault();
        });
        tableScroll.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            tableScroll.scrollBy(startX - e.clientX, 0); // Прокрутка контейнера
            startX = e.clientX;
        });
        tableScroll.addEventListener('mouseup', () => {
            body.style.cursor = 'text'
            isDragging = false
        });
    }


    if (location.pathname === '/personal/list-compared/') checkDeletedCars(storage, showChosen)
    else showChosen()

    showPreloader(false)
}

window.commentChanged = function (id, value) {
    let storageIds = storage && storage.map(el => el.id)
    let myNewComments={}
    myComments[id] = value
    storageIds.forEach(el => {
        if (myComments[el]) myNewComments[el] = myComments[el]
    })
    localStorage.setItem('myComments', JSON.stringify(myNewComments))
}

window.initChosen = initChosen
setTimeout(initChosen)

window.dblCompare = function () {
    location.href = '/personal/list-compared/'
}



