import {api_PostCallToWork} from "@/js/API-base/apibase.js";
import {message} from "@/js/message.js";
import {datas} from "@/js/global-constants.js"
import {formatterShowPrice} from "@/js/global-func.js";

function initChangeCity() {
    let comb = document.querySelector('comb');
    let items = {'Город': ['Все', 'Альметьевск', 'Казань', 'Набережные Челны', 'Нижнекамск', 'Стерлитамак']}

    items['Город'].value = localStorage.getItem('selectedCity')
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

    function selectedCity(val) {
        console.log('!!!selectedCity val = ', val)
    }
}

function initVacancies() {
    let html = ''
    initListeners(false)
    datas.forEach((item, ind) => {
        let formVacancy = `
<div class="request_vac">
            <div class="ttl_a">Откликнуться на вакансию</div>
            <div class="smForm" id="lettleForm">
                <div class="details"><input placeholder="Ваше имя" name="fio"></div>
                <div class="details"><input placeholder="Телефон" name="phone" oninput="formattingPhone(this)"></div>
                <div class="details"><input placeholder="Эл. почта" name="email"></div>
                <div class="details">
                <span class="fileLabel">
                    <input placeholder="Резюме" type="file" name="resume">
                    Резюме
                </span>
                </div>
                <div class="details">
                  <textarea placeholder="Дополнительная информация и контактные данные" rows="5" name="text"></textarea>
                </div>
                <div class="details checkbox-line">
                    <label class="cont">
                      <input type="checkbox" id="d${ind}">
                    </label>
                    <div class="check text"><label for="d${ind}">Отправляя данные, вы даете согласие на обработку
                        персональных <a href="/privacy-policy/" target="_blank">данных</a> в соответствии с политикой&nbsp;конфиденциальности.</label>
                    </div>
                </div>
                <button class="vacansyButton"  onclick="sendResume('fff${ind}')"
                        class="uk-button a-button-add a-button-warning ng-scope punch-button">
                    Отправить отклик
                </button>
            </div>
        </div>`

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
        <div class="content">
            ${document.body.offsetWidth > 992 ? formVacancy : ''}
            <div class="detail">
               ${item.content}
            </div>
           ${document.body.offsetWidth > 992 ? '' : formVacancy}
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

    window.addEventListener('resize', toSmall);

    const resume = document.querySelector(`.generalForm [name="resume"]`)
    const placeForFileName = document.querySelector(`#fN`)
    resume.addEventListener('change', function (res) {
        if (this.files && this.files[0]) placeForFileName.textContent = this.files[0].name;
        else placeForFileName.textContent = 'Загрузить файл';
    });

    function check(fio, phone, checkbox) {
        let err = false
        if (!fio.value) {
            fio.style.border = '1px solid red'
            message('Не заполнено поле ФИО', 'warning')
            err = true
        } else fio.style.border = ''
        if (!phone.value) {
            phone.style.border = '1px solid red'
            message('Не заполнен Телефон', 'warning')
            err = true
        } else phone.style.border = ''
        if (!checkbox.checked) {
            checkbox.parentNode.style.border = '1px solid red'
            message('Вы должны дать согласие на обработку персональных данных', 'warning')
            err = true
        } else checkbox.parentNode.style.border = ''
        return err
    }

    // нажатие кнопок отправки
    window.sendResume = function (formId) {
        const fio = document.querySelector(`.${formId} [name="fio"]`)
        const city = document.querySelector(`.${formId} [name="city"]`)
        const phone = document.querySelector(`.${formId} [name="phone"]`)
        const email = document.querySelector(`.${formId} [name="email"]`)
        const text = document.querySelector(`.${formId} [name="text"]`)
        const resume = document.querySelector(` [name="resume"]`)
        const checkbox = document.querySelector(`.${formId} [type="checkbox"]`)

        if (formId === 'generalForm') {
            const modal__error = document.querySelector('.modal__error')
            modal__error.style.display = checkbox.checked ? 'none' : 'block'
        }

        if (check(fio, phone, checkbox)) return false

        let params = {
            fullName: fio.value,
            phone: phone.value,
            email: email && email.value,
            city: city && city.value,
            aboutYourself: text && text.value,
            resume: resume && resume.files[0],
        }

        api_PostCallToWork(params).then(res => {
            if (res && res.ok) message('Ваше сообщение успешно получено!')
            else message('Сервер не принял', 'error')
        })

    }
})



