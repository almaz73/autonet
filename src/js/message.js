export function message(text, type) {
    console.log('text', text)

    let color = 'green'
    if (type === 'error') color = 'red'

    // 1. Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.innerText = text;

    // 2. Стилизуем его (можно вынести в CSS файл)
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = color;
    notification.style.color = '#fff';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.transition = 'all 0.5s ease';

    // 3. Добавляем на страницу
    document.body.appendChild(notification);

    // 4. Убираем уведомление через 3 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 1000);
    }, 3000);
}

