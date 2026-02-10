import {api_PostCallToWork} from "@/js/API-base/apibase.js";
import {sendMessage} from "@/js/sendMessage.js";
import {cities, vacanciesList} from "@/js/global-constants.js"
import {formatterShowPrice} from "@/js/global-func.js";

function initChangeCity() {
    let comb = document.querySelector('comb');
    let items = {'Город': cities}

    items['Город'].value = localStorage.getItem('selectedCity')

    items['Город'].value = 'Казань' // todo для тестирования временно всегда при открытии Казань

    selectedCity(items['Город'].value)

    let comb_name = comb.dataset.placeholder
    let the_Items = items[comb_name];

    if (the_Items) {
        let items_list = the_Items.map(item => '<div data-parent="' + comb_name + '">' + item + '</div>')
        comb.innerHTML = `<div class='big-combo' tabindex='1'>
        <span class='big-comb__selected'>
          <span class='big-comb__placeholder'>${the_Items.value || comb_name}</span>
          <input class='big-comb__input' type="text">
        </span>
        <img src='/svg/arrow-down.svg' alt='arrow' loading='lazy' width='10' height='18'>            
        <div class='big_comb__items'>
            ${items_list.join('')}
        </div>
    </div>`
    }

    document.querySelector('.big_comb__items').addEventListener('click', function vacancyCitySelected(val) {
        let combName = 'Город'
        let value = val.srcElement.innerText

        items[combName].value = value
        selectedCity(items[combName].value)

        document.querySelector('.big-comb__placeholder').innerText = value
        document.querySelector('.big-comb__placeholder').classList.add('bold')
        document.querySelector('.big-comb__input').value = value
        document.querySelector('.big-comb__input').blur()

        // высветить нужную вакансию
    })

    function selectedCity(city) {
        let bigCombo = document.querySelector('.big-combo')
        bigCombo && bigCombo.blur()
        setTimeout(() => initVacancies(city))
    }
}

function initVacancies(city) {
    let html = ''
    initListeners(false)
    let newDatas = []
    if (!city) newDatas = vacanciesList
    else newDatas = vacanciesList.filter(el => el.city === city)

    newDatas.forEach((item, ind) => {

        html += `<div class="vacancy_item fff${ind}">
        <div class="fst_desc">
            <div class="ttl">
                <span>${item.vacancyName}</span>
            </div>
            <div class="zp">
                от <span>${formatterShowPrice(item.salary)} ₽</span>
            </div>
            <span class="show_detail">
                <img src="/red_arrow.svg" loading='lazy' alt=''>
                Подробнее
            </span>
        </div>
        <div class="admin-edit" style="float: right">
            <button onclick="edit (${item.id})">Редактировать</button>
            <button onclick="copy (${item.id})">Копировать</button>
            <button onclick="deleteVacancy (${item.id})">Удалить</button>
        </div>
            
        <div class="content">
            <div class="detail">
               ${item.content}
            </div>
        </div>
    </div>`

    })
    document.querySelector('#vacancyPlace').innerHTML = html
    initListeners(true) // слушатели  снова добавляем
}

function initListeners(state) {
    document.querySelectorAll('.vacancy_item').forEach(block => {
        // Сохраняем исходную высоту для анимации
        const firstLine = block.querySelector('.fst_desc');
        const firstLineHeight = firstLine.offsetHeight;

        block.style.maxHeight = firstLineHeight + 'px';
        if (state) block.querySelector('.fst_desc').addEventListener('click', openVacancy);
        else block.querySelector('.fst_desc').removeEventListener('click', openVacancy);

        function openVacancy() {
            if (block.classList.contains('expanded')) {
                block.classList.remove('expanded');
                block.style.maxHeight = firstLineHeight + 'px';
            } else {
                block.classList.add('expanded');
                block.style.maxHeight = 'inherit'
            }
        }
    });
}

function toSmall() {
    initVacancies()
    document.querySelectorAll('.vacancy_item').forEach(block => {
        block.classList.remove('expanded');
        const firstLine = block.querySelector('.fst_desc');
        const firstLineHeight = firstLine.offsetHeight;
        block.style.maxHeight = firstLineHeight + 'px';
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initChangeCity()
    initVacancies()

    const vacancyNamw = document.querySelector(`[name="vacancyNamw"]`)
    const city = document.querySelector(`.big-comb__placeholder`)
    const salary = document.querySelector(`[name="salary"]`)
    const text0 = document.querySelector(`[name="text0"]`)
    const text1 = document.querySelector(`[name="text1"]`)
    const text2 = document.querySelector(`[name="text2"]`)
    const text3 = document.querySelector(`[name="text3"]`)
    const addBt = document.querySelector('#addBt')

    window.addEventListener('resize', toSmall);

    function check(vacancyName, salary, text) {
        let err = false
        if (!vacancyName.value) {
            vacancyName.style.border = '1px solid red'
            sendMessage('Не заполнено поле Вакансия', 'warning')
            err = true
        } else vacancyName.style.border = ''
        if (!salary.value) {
            salary.style.border = '1px solid red'
            sendMessage('Не заполнено поле Зарплата', 'warning')
            err = true
        } else salary.style.border = ''
        if (!text0.value) {
            text.parentNode.style.border = '1px solid red'
            sendMessage('Не заполнено поле Условия', 'warning')
            err = true
        } else text0.parentNode.style.border = ''
        return err
    }

    // нажатие кнопок отправки
    window.saveVacancy = function () {


        if (check(vacancyNamw, salary, text0)) return false

        let params = {
            vacancyNamw: vacancyNamw.value,
            city: city.innerHTML,
            salary: salary.value,
            text0: text0.value,
        }
        console.log('params', params)


    }


    /*** Работа с админкой ***/

    let editor = document.querySelector('.editor')

    addBt.addEventListener('click', () => {
        openEdit()
    })

    function openEdit(id, isCopy) {
        editor.classList.toggle('edit')
        if (id) editor.classList.add('edit')
        let placeCity = document.querySelector('#placeCity')
        let vacancy = {id: 0}

        if (id) vacancy = vacanciesList.find(el => el.id === id)


        if (vacancy.id) {
            var htmlEl = document.createElement('html');
            htmlEl.innerHTML = vacancy.content
            window.DDD = htmlEl.innerHTML
            let ul = htmlEl.querySelectorAll('ul')

            ul.forEach((item, ind) => {
                let li = item.querySelectorAll('li')
                let alltx = ''
                li.forEach((pp, ind) => {
                    alltx+=`${pp.innerHTML}\n`
                })
                eval('text'+ind).value = alltx
            })


            vacancyNamw.value = vacancy.vacancyName
            salary.value = vacancy.salary
        }
        placeCity.innerHTML = id ? vacancy.city : document.querySelector(`.big-comb__placeholder`).innerHTML
        addBt.scrollIntoView({behavior: 'smooth', block: 'start'}); // прокрутка
    }

    window.edit = function (id) {
        openEdit(id)
    }
    window.copy = function (id) {
        openEdit(id, 'copy')
    }
    window.deleteVacancy = function (id) {
        if (confirm("Вы действительно хотите удалить выбранную выбранную?")) {
            console.log("Элемент удален");
        } else {
            console.log("Удаление отменено");
        }
    }

})

