// export let global_brandsIds= [];
import {sendMessage} from "@/js/sendMessage.js";

export const eventBus = {
    // Хранилище событий: { 'event_name': [callback1, callback2] }
    events: {},

    // Подписка на событие
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    },

    // Отправка события (вызов всех подписчиков)
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    },

    // Отписка от события
    off(event, callbackToRemove) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(
                callback => callback !== callbackToRemove
            );
        }
    }
};

export let globalValues = {
    brandsIds: [],
    modelsIds: [],
    gearboxTypes: [],
    engineTypes: [],
    driveTypes: [],
    wheelTypes: [],
    bodyTypes: [],
    bodyColors: []
}

export function formatterShowPrice(val) {
    return parseInt(val).toLocaleString('ru-RU')
}

export function prepareCars(res) {
    let cars = []
    res && res.forEach(el => {
        let info = formatterShowPrice(el.milleage) + ' км, '
        if (el.engineCapacity) info += el.engineCapacity
        if (el.gearboxType) info += ' ' + el.gearboxType
        if (el.enginePower) info += ' (' + el.enginePower + '&nbsp;л.с)'
        if (el.bodyType) info += ', ' + el.bodyType
        info += ', ' + el.driveType
        if (el.engineType) info += ', ' + el.engineType

        let fromPerMonth = formatterShowPrice(parseInt(parseInt(el.price.replace(/ /g, '')) / 90.12))

        cars.push({
            address: el.fullAddress,
            id: el.id,
            name: el.brand + ' ' + el.model,
            href: '/cars/car.html?id=' + el.id,
            price: formatterShowPrice(el.price),
            fromPerMonth: fromPerMonth,
            info: info,
            photos: el.images,
            yearReleased: el.yearReleased
        })
    })
    return cars
}

export function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export function getUrlParam(val) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(val)
}

export function setPriceOrder(statePriceOrder) {
    let price_order = document.querySelector('.coin');

    if (statePriceOrder === false) {
        price_order.querySelector('span').title = 'По возрастанию'
        price_order.querySelector('img').style.transform = 'rotate(180deg)'
    }
    if (statePriceOrder === null) {
        price_order.querySelector('span').title = 'Не упорядоченно'
        price_order.querySelector('img').style.transform = 'rotate(270deg)';
    }
    if (statePriceOrder === true) {
        price_order.querySelector('span').title = 'По убыванию'
        price_order.querySelector('img').style.transform = 'rotate(0deg)'
    }
}


export const formattingPhone = function (self) {
    let val = self.value

    if (!val) return ''

    let txt = val.replace(/\D/g, ''),
        res = "";

    if (val.length < 2) return txt

    if (["7", "8", "9"].indexOf(txt[0]) > -1) {
        if (txt[0] === "9") txt = "7" + txt;
        const firstSymbols = (txt[0] === "8") ? "8" : "+7";
        res = firstSymbols + " ";
        if (txt.length > 1) res += '(' + txt.substring(1, 4);
        if (txt.length >= 5) res += ') ' + txt.substring(4, 7);
        if (txt.length >= 8) res += '-' + txt.substring(7, 9);
        if (txt.length >= 10) res += '-' + txt.substring(9, 11);
    } else {
        res = txt.substring(0, 11)
    }
    self.value = res
}
window.formattingPhone = formattingPhone

// телефон должен состоять только из цифр
export const simplePhone = function (val) {
    if (!val) return ''
    if (val.slice(0, 2) === '+7') val = val.replaceAll('+7', '8')
    return val.replaceAll(' ', '').replaceAll('+', '').replaceAll('(', '').replaceAll(')', '').replaceAll('-', '')
}

export const emailValidate = function (val) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const err = EMAIL_REGEXP.test(val)
    if (!err && val) return sendMessage('Ошибочный Email ', 'error')
}

export function checkFormFields(arr) {
    let exist = false
    let forAttent = false
    arr.forEach(el => {
        if (el && el.required) {
            el.style.background = !el.value ? 'pink' : ''
            if (!el.value) exist = true

            el.addEventListener('change', filled)

            function filled() {
                el.style.background = ''
                el.removeEventListener('change', filled)
            }
        }
        if (el && el.classList.contains('capctha-div') && !el.classList.contains('checked')) {
            el.style.border = '1px solid red';
            exist = true
        }
        if (el && el.type === 'checkbox') {
            let checked = el.checked
            el.parentNode.style.border = checked ? '' : '1px solid red';
            if (!checked) exist = true
            forAttent = exist
        }

        if (el && el.classList.contains('attent')) el.style.display = forAttent ? 'block' : 'none'
        if (el && el.name === 'email' && el.value) return emailValidate(el.value)
        if (el && el.name === 'phone' && el.value && simplePhone(el.value).length !== 11) sendMessage('Телефон не содержит 11 цифр', 'warning')
    })

    if (exist) sendMessage('Есть незаполненные поля', 'warning')
    return exist
}

/* Работа с sub_field **/
export function initSubField() {
    let with_sub_field = document.querySelectorAll('.with_sub_field')

    with_sub_field.forEach(item => {
        let select = item.querySelector('.with_sub_field .select')
        select.querySelectorAll('.field').forEach(el => {
            el.addEventListener('click', res => newSelect(res.target.innerHTML))
        })

        function newSelect(value) {
            select.querySelectorAll('.field').forEach(el => {
                el && el.classList.contains('active') && el.classList.remove('active')
            })
            select.querySelectorAll('.field').forEach(el => {
                el && el.innerHTML === value && el.classList.add('active')
            })
            item.querySelector('input').value = value
        }

        item.addEventListener('click', () => {
            let state = select.style.display !== 'block'
            select.style.display = state ? 'block' : 'none'
        })

    })


}

/** Констпуктор полей форм*/
export function constructorForm(fName, fields, methodNAme, buttonText, legenda) {
    buttonText = buttonText || 'Отправить заявку'
    legenda = legenda || `_ _ _ _ _ _ `

    let random = parseInt(Math.random() * 1000)
    let html = `<div class="wrap ${fName}"><h3>${legenda}</h3><div><div class="formBlock">`
    let titles = {
        'name': 'Имя',
        "name*": 'Ваше имя *',
        'year': 'Год выпуска',
        'year*': 'Год выпуска *',
        'city': 'Город',
        'city*': 'Город *',
        'price': 'Цена',
        'brand': 'Марка',
        'brand*': 'Марка *',
        'model': 'Модель',
        'model*': 'Модель *',
        'phone': 'Телефон',
        'phone*': 'Ваш телефон *',
        'message': 'Сообщение',
        'message*': 'Сообщение *',
        'email': 'E-mail',
        'email*': 'E-mail *',
        'osago': 'ОСАГО',
        'select': 'Выберите услугу',

    }


    fields.forEach(el => {
        let required = el.includes('*')
        let field = required ? el.slice(0, -1) : el
        if (el === 'osago') {
            html += `<div class="form__modal--group" style="position: relative">
                            <div class="form__group with_sub_field">
                                <input name="osago"  value="ОСАГО">
                                <div class="select">
                                    <div class="field">КАСКО</div>
                                    <div class="field active">ОСАГО</div>
                                </div>
                            </div>
                        </div>`
        } else if (el === 'select') {
            html += `<div class="form__modal--group">                
                <div class="form__group with_sub_field">
                    <input name="select"  placeholder="Выберите услугу">
                    <div class="select">
                        <div class="field">Диагностика</div>
                        <div class="field ">Техническое обслуживание</div>
                        <div class="field">Ремонт двинателя</div>
                        <div class="field">Ремонт трансмиссии</div>
                        <div class="field">Ремонт подвески</div>
                        <div class="field">Ремонт рулевого управления</div>
                        <div class="field">Ремонт тормозной системы</div>
                    </div>
                </div>
            </div>`
        } else {
            html += `<div class="form__modal--group">
                <div class="form__group">
                  <input name="${field}" ${required ? 'required' : ''} autocomplete="off" placeholder="${titles[el]}" 
${field === 'phone' ? 'oninput="formattingPhone(this)"' : ''}>
                </div>
            </div>`
        }
    })

    html += `
<div class="form__modal--group">
              <div class="capctha-div"></div>
            </div>
            <button class="page__btn page__btn--current" onclick="${methodNAme}('${fName}')">
                <span> ${buttonText} </span>
            </button>
            <div class="modal__personal">
                <input type="checkbox" id="dd${random}">
                <label for="dd${random}" style="cursor: pointer">
                    Нажав кнопку «Отправить заявку» я даю согласие
                    на обработку
                    персональных <a href="/privacy-policy/" target="_blank">данных</a>
                </label>
            </div></div></div></div>`
    return html
}

/**  Глобальный дизаблинг кнопок, во время обращения к серверу **/
/* не всегда кнопки сами сообщают чтоон нажат (фильтре) дизаблить надо их тоже */
export function toDisable(button, state) {
    if (!button) return false
    button.style.opacity = state ? .5 : 1
    button.disabled = state
}

export function carCountText(totalCount) {
    let field = document.querySelector('#set_filter span.number')
    if (field) field.innerHTML = totalCount
        + ' ' + declOfNum(totalCount, ['предложение', 'предложения', 'предложений'])
}