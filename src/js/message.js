export function message(text, type) {
    let color = 'green'
    if (type === 'warning') color = 'orangered'
    if (type === 'error') color = 'red'

    let notification = document.createElement('div');
    notification.innerText = text;
    notification.classList.add('message-span')
    notification.style.backgroundColor = color;
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100)

    //  Убираем уведомление через 3 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.classList.remove('show')
    }, 3000);
}

