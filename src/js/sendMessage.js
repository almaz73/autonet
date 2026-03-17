let counter = 0
let messages = []

window.sendMessage = function (text, type) {

    let color = 'green'
    if (type === 'warning') color = 'orangered'
    if (type === 'error') color = 'red'

    let notification = document.createElement('div');
    notification.innerText = text;
    notification.classList.add('message-span')
    notification.style.backgroundColor = color;
    notification.style.top = (10 + 40 * counter) + 'px'
    notification.id = counter
    document.body.appendChild(notification);
    messages.push(notification)

    notification.addEventListener("click", () => {
        notification.classList.remove('show')
        reorder(notification.id)
    })
    notification.addEventListener("mouseover", () => {
        notification.stopped = true
    })
    setTimeout(() => notification.classList.add('show'), 100)
    counter++
    //  Убираем уведомление через 3 секунды
    setTimeout(() => {
        if (!notification.stopped) {
            notification.style.opacity = '0';
            notification.classList.remove('show')
            reorder(notification.id)
        }
    }, 3000);
}

function reorder(id) {
    messages = messages.filter(el => el.id !== id)
    counter--
    messages.forEach((el, ind) => {
        el.style.top = (10 + 40 * ind) + 'px'
        el.id = ind
    })
}

window.sendConfirm = function (text) {
    let confirm = document.createElement('div');
    let ok = document.createElement('div');
    confirm.innerText = text || 'Нет данных.';
    confirm.classList.add('message-span')
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