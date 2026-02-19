let counter = 0
let messages = []

window.sendMessage = function(text, type) {

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

