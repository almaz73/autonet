let counter = 0
let messages = []

function layoutMessages() {
    let top = 10
    messages.forEach((el) => {
        el.style.top = top + 'px'
        top += el.offsetHeight + 10
    })
}

// высота тоста меняется после подстановки веб-шрифта — пересчитываем позиции
if (document.fonts && document.fonts.ready) document.fonts.ready.then(layoutMessages)

window.sendMessage = function (text, type) {

    let notification = document.createElement('div');
    notification.innerText = text;
    notification.classList.add('message-span')
    if (type === 'warning') notification.classList.add('message-span--warning')
    if (type === 'error') notification.classList.add('message-span--error')
    notification.id = counter
    document.body.appendChild(notification);
    messages.push(notification)
    layoutMessages()

    notification.addEventListener("click", () => {
        notification.classList.remove('show')
        notification.style.top = '1600px'
        reorder(notification.id)
    })
    notification.addEventListener("mouseover", () => {
        notification.stopped = true
    })
    setTimeout(() => {
        notification.classList.add('show')
        layoutMessages()
    }, 100)
    counter++
    //  Убираем уведомление через 10 секунд
    setTimeout(() => {
        if (!notification.stopped) {
            notification.style.top = '1600px'
            notification.classList.remove('show')
            reorder(notification.id)
        }
    }, 10000);
}

function reorder(id) {
    messages = messages.filter(el => String(el.id) !== String(id))
    counter--
    messages.forEach((el, ind) => {
        el.id = ind
    })
    layoutMessages()
}

window.sendConfirm = function (text) {
    let confirm = document.createElement('div');
    let ok = document.createElement('div');
    confirm.innerText = text || 'Нет данных.';
    confirm.classList.add('message-span')
    confirm.classList.add('message-span--warning')
    confirm.style.backgroundColor = 'grey';
    confirm.style.textAlign = 'center';
    confirm.style.opacity = '1'
    confirm.style.minWidth = '200px'
    confirm.style.top = '40%'
    confirm.style.left = '50%'
    confirm.style.transform = 'translate(-50%, -50%)'
    confirm.style.fontSize = '25px'
    confirm.style.padding = '25px'
    confirm.style.zIndex = '9999'

    ok.innerHTML = '<br><button class="page__btn page__btn--current confirm" onclick="backPath()">Вернуться назад</button>'
    confirm.append(ok)
    document.body.appendChild(confirm);
}

window.backPath = function (){
    setTimeout(() => window.history.back(), 100)
}