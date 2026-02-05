/* случайно вытаскивает 4 банера для раздела промо-акции */

let links=''

/**удаленные  */
    // '<a href="/promo/633448/" class="ver"><img src="../../photo-action/p_0.webp" loading="lazy" alt="Премиум авто"></a>',
    // '<a href="/" class="ver"> <img src="../../photo-action/p_1.webp" loading="lazy" alt="Подбор авто"></a>',
    // '<a href="/promo/651626/" class="ver"> <img src="../../photo-action/p_6.webp" loading="lazy" alt="Снижение цен на нормо-час"></a>',
    // '<a href="/promo/651622/" class="ver"><img src="../../photo-action/p_10.webp" loading="lazy" alt="Скидка на ТО (Solaris/Jetour)"></a>',
    // '<a href="/promo/651614/" class="ver"><img src="../../photo-action/p_18.webp" loading="lazy" alt="Гарантия на авто с пробегом"></a>',

let promos = [
    '<a href="/promo/644223/" class="ver"> <img src="../../photo-action/p_2.webp" loading="lazy" alt="Выкуп автомобилей с пробегом"></a>',
    '<a href="/promo/644340/" class="ver"> <img src="../../photo-action/p_3.webp" loading="lazy" alt="Сделка через салон"></a>',
    '<a href="/promo/647168/" class="ver"> <img src="../../photo-action/p_4.webp" loading="lazy" alt="Постановка на учёт в ГИБДД"></a>',
    '<a href="/promo/647169/" class="ver"><img src="../../photo-action/p_5.webp" loading="lazy" alt="Поставьте авто на комиссию"></a>',
    '<a href="/promo/651625/" class="ver"> <img src="../../photo-action/p_7.webp" loading="lazy" alt="Установка парктроников"></a>',
    '<a href="/promo/651624/" class="ver"> <img src="../../photo-action/p_8.webp" loading="lazy" alt="Trade-in с повышенной оценкой"></a>',
    '<a href="/promo/651623/" class="ver"> <img src="../../photo-action/p_9.webp" loading="lazy" alt="Скидка 10% в День рождения"></a>',
    '<a href="/promo/651621/" class="ver"> <img src="../../photo-action/p_11.webp" loading="lazy" alt="Саквояж или EVA ковры"></a>',
    '<a href="/promo/651620/" class="ver"> <img src="../../photo-action/p_12.webp" loading="lazy" alt="Установка видеорегистратора"></a>',
    '<a href="/promo/651619/" class="ver"> <img src="../../photo-action/p_13.webp" loading="lazy" alt="Компрессор в подарок"></a>',
    '<a href="/promo/651618/" class="ver"> <img src="../../photo-action/p_14.webp" loading="lazy" alt="Тонировка задней полусферы"></a>',
    '<a href="/promo/651617/" class="ver"> <img src="../../photo-action/p_15.webp" alt = "Скидка 2000 рублей на установку сигнализации"></a>',
    '<a href="/promo/651616/" class="ver"> <img src="../../photo-action/p_16.webp" loading="lazy" alt="Первый взнос 0 рублей"></a>',
    '<a href="/promo/651615/" class="ver"><img src="../../photo-action/p_17.webp" loading="lazy" alt="Обмен или возврат"></a>',
    '<a href="/promo/651613/" class="ver"><img src="../../photo-action/p_19.webp" loading="lazy" alt="Аренда авто"></a>',
    '<a href="/promo/651612/" class="ver"><img src="../../photo-action/p_20.webp" loading="lazy" alt="2 сертификата в сервис">',
    // '<a href="/promo/657231/" class="ver"><img src="../../photo-action/p_21.webp" loading="lazy" alt="Коммерческий транспорт с пробегом">',
    // '<a href="/promo/655683/" class="ver"><img src="../../photo-action/p_22.webp" loading="lazy" alt="Cнижение цен на нормо-час до 20%">'
]
// * тут 2 последних скрыто, так как для них нет вертикальных фоток они случаййно не будут предлагаться


for (let i = 0; i < 4; i++) {
    const num = Math.floor(Math.random() * promos.length);
    const el = promos[num];
    links += (el)
    promos.splice(num, 1);
}

let div = document.querySelector('.promo-photos')
div.innerHTML = links