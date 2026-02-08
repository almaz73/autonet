import {api_PostCallToWork} from "@/js/API-base/apibase.js";
import {message} from "@/js/message.js";

window.addEventListener('DOMContentLoaded', () => {
    let comb = document.querySelector('comb');

    // нужно все города поучать откуда-то централизованно
    let items = {'Город': ['Все', 'Альметьевск', 'Казань', 'Набережные Челны', 'Нижнекамск', 'Стерлитамак']}

    items['Город'].value = localStorage.getItem('selectedCity')
    selectedCity(items['Город'].value)


    //заполняем исходя из настроек


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


    /** высота узлов **/

    document.querySelectorAll('.vacancy_item').forEach(block => {
        // Сохраняем исходную высоту для анимации
        const firstLine = block.querySelector('.fst_desc');
        const content = block.querySelector('.content');
        const detail = block.querySelector('.detail');


        // Вычисляем высоту первой строки
        const firstLineHeight = firstLine.offsetHeight;
        const detailHeight = content ? content.offsetHeight : 0;

        console.log('detailHeight = ', detailHeight)
        block.style.maxHeight = firstLineHeight + 'px';
        block.addEventListener('click', function () {
            toSmall()

            const form = document.querySelector('.request_vac');
            if (document.body.offsetWidth > 992) detail.before(form)
            else detail.after(form)


            const detailHeight = content ? content.offsetHeight : 0;

            console.log('document.body.offsetWidth = ', document.body.offsetWidth)

            this.classList.toggle('expanded');
            this.style.maxHeight = (firstLineHeight + detailHeight) + 'px';
        });
    });

    function toSmall() {
        document.querySelectorAll('.vacancy_item').forEach(block => {
            block.classList.remove('expanded');
            const firstLine = block.querySelector('.fst_desc');
            const firstLineHeight = firstLine.offsetHeight;
            block.style.maxHeight = firstLineHeight + 'px';
        });
    }

    window.addEventListener('resize', toSmall);


    const resume = document.querySelector(`#generalForm [name="resume"]`)
    const placeForFileName = document.querySelector(`#fN`)
    resume.addEventListener('change', function (res) {
        if (this.files && this.files[0]) placeForFileName.textContent = this.files[0].name;
        else placeForFileName.textContent = 'Загрузить файл';
    });


    function check(fio, phone) {
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
        return err
    }

    // нажатие кнопок отправки
    window.sendResume = function (formId) {
        const fio = document.querySelector(`#${formId} [name="fio"]`)
        const city = document.querySelector(`#${formId} [name="city"]`)
        const phone = document.querySelector(`#${formId} [name="phone"]`)
        const email = document.querySelector(`#${formId} [name="email"]`)
        const text = document.querySelector(`#${formId} [name="text"]`)
        const resume = document.querySelector(`#${formId} [name="resume"]`)

        if (check(fio, phone)) return false
        if (formId === 'generalForm') {
            const personal_agree_vacancy = document.getElementById('personal_agree_vacancy')
            const modal__error = document.querySelector('.modal__error')
            modal__error.style.display = personal_agree_vacancy.checked ? 'none' : 'block'
            if (!personal_agree_vacancy.checked) return false
        }

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



