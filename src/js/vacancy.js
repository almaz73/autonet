import {api_PostEmailWithAttachement} from "@/js/apibase.js";
import {sendMessage} from "@/js/sendMessage.js";
import {cities, vacanciesList} from "@/js/global-constants.js"
import {checkFormFields, formatterShowPrice} from "@/js/global-func.js";

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
    let newDatas
    if (!city) newDatas = vacanciesList
    else newDatas = vacanciesList.filter(el => el.city === city)

    newDatas.forEach((item, ind) => {
        let formVacancy = `
<div class="request_vac">
            <div class="ttl_a">Откликнуться на вакансию</div>
            <div class="smForm" id="lettleForm">
                <div class="details"><input placeholder="Ваше имя *" required name="fio"></div>
                <div class="details"><input placeholder="Телефон *" required name="phone" oninput="formattingPhone(this)"></div>
                <div class="details"><input placeholder="Эл. почта" name="email"></div>
                <div class="details">
                <span class="fileLabel">
                    <input placeholder="Резюме *" type="file" name="resume" accept=".doc, .docx, .odt, .pdf, .rtf, .tex, .wpd">
                    Резюме
                    <span class="filePlace"> Выберите файйл </span>
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

    // Функция для добавления слушателей
    function addFileInputListeners() {
        console.log(0)
        const resumes = document.querySelectorAll(`[name="resume"]`);
        resumes.forEach((resume) => {
            resume.addEventListener('change', function () {
                const filePlace = this.closest('.details').querySelector('.filePlace');
                if (this.files && this.files[0] && filePlace) {
                    filePlace.textContent = this.files[0].name;
                    resume.parentNode.parentNode.style.border = ''
                    resume.parentNode.style.border = ''
                }
            });
        });
    }

    setTimeout(addFileInputListeners, 500)

    // нажатие кнопок отправки
    window.sendResume = function (formId) {
        const capcthadiv = document.querySelector(`.${formId} .capctha-div`)
        const fio = document.querySelector(`.${formId} [name="fio"]`)
        const city = document.querySelector(`.${formId} [name="city"]`)
        const phone = document.querySelector(`.${formId} [name="phone"]`)
        const email = document.querySelector(`.${formId} [name="email"]`)
        const text = document.querySelector(`.${formId} [name="text"]`)
        const resume = document.querySelector(`.${formId} [name="resume"]`)
        const checkbox = document.querySelector(`.${formId} [type="checkbox"]`)

        if (formId === 'generalForm') {
            const modal__error = document.querySelector('.modal__error')
            modal__error.style.display = checkbox.checked ? 'none' : 'block'
        }

        if (resume && !resume.files[0]) {
            if (formId === 'generalForm') resume.parentNode.parentNode.style.border = '1px solid red'
            else resume.parentNode.style.border = '1px solid red'
        }
        if (checkFormFields([capcthadiv, fio, city, phone, checkbox])) return false
        if (resume && !resume.files[0]) return sendMessage('Прикрепите файл с резюме', 'warning')

        let params = {
            fio: fio.value,
            phone: phone.value,
            resume: resume && resume.files[0]
        }
        if (city && city.value) params.city = city.value
        if (text && text.value) params.aboutYourself = text.value
        if (email && email.value) params.email = email.value

        api_PostEmailWithAttachement(params).then(res => {
            if (res && res.ok) sendMessage('Ваше сообщение успешно получено!')
            else sendMessage('Сервер вакансию не принял', 'error')
        })

    }
})



