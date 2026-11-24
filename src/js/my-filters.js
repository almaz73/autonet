import {brandSlug} from '@/js/global-func.js'
import {loadCities} from '@/js/cities.js'

export const MY_FILTERS_KEY = 'MyFilters'
export const MY_FILTERS_LIMIT = 20

const MONEY = new Intl.NumberFormat('ru-RU')

const BRAND_TITLES = {
    'vaz-lada': 'ВАЗ (LADA)',
    lada: 'LADA',
    bmw: 'BMW',
    kia: 'Kia',
    'mercedes-benz': 'Mercedes-Benz',
    'land-rover': 'Land Rover',
    'great-wall': 'Great Wall',
    'alfa-romeo': 'Alfa Romeo',
    exeed: 'EXEED',
}

const GEARBOX_TITLES = {
    'Автоматическая': 'автоматическая коробка',
    'Механическая': 'механическая коробка',
    'Вариатор': 'вариатор',
    'Роботизированная': 'роботизированная коробка',
}

const ENGINE_TITLES = {
    'Бензин': 'бензиновый двигатель',
    'Дизель': 'дизельный двигатель',
    'Гибрид': 'гибридный двигатель',
    'Электро': 'электродвигатель',
}

// фильтр храним как путь каталога: /cars/... + query без домена и якоря
function normalizeFilterUrl(url) {
    try {
        const parsed = new URL(url, location.origin)
        if (parsed.pathname !== '/cars' && !parsed.pathname.startsWith('/cars/')) return null
        return parsed.pathname + parsed.search
    } catch {
        return null
    }
}

export function getMyFilters() {
    try {
        const raw = JSON.parse(localStorage.getItem(MY_FILTERS_KEY) || '[]')
        if (!Array.isArray(raw)) return []
        return raw.filter(item => typeof item === 'string' && item).slice(0, MY_FILTERS_LIMIT)
    } catch {
        return []
    }
}

// повторный фильтр поднимаем наверх, самые старые вытесняются
export function rememberFilter(url) {
    const normalized = normalizeFilterUrl(url)
    if (!normalized) return getMyFilters()

    const list = getMyFilters().filter(item => item !== normalized)
    list.unshift(normalized)
    const next = list.slice(0, MY_FILTERS_LIMIT)
    try {
        localStorage.setItem(MY_FILTERS_KEY, JSON.stringify(next))
    } catch {
        return next
    }
    return next
}

function prettySlug(slug) {
    return String(slug)
        .split('-')
        .filter(Boolean)
        .map(part => part[0].toUpperCase() + part.slice(1))
        .join(' ')
}

function brandTitle(slug) {
    const key = String(slug).toLowerCase()
    return BRAND_TITLES[key] || prettySlug(key)
}

function formatMoney(value) {
    const number = Number(String(value).replace(/\s/g, '').replace(',', '.'))
    return Number.isFinite(number) ? MONEY.format(number) + ' ₽' : String(value)
}

function lowerFirst(value) {
    const text = String(value)
    return text ? text[0].toLowerCase() + text.slice(1) : text
}

let cityMapPromise = null

// посадочные городов в адресе лежат слагами: almetevsk → Альметьевск
function cityNameBySlug(slug) {
    if (!cityMapPromise) {
        cityMapPromise = loadCities()
            .then(cities => {
                const map = {}
                cities.forEach(name => {
                    const key = brandSlug(name).toLowerCase()
                    if (key) map[key] = name
                })
                return map
            })
            .catch(() => ({}))
    }
    return cityMapPromise.then(map => map[String(slug).toLowerCase()] || null)
}

function formatRange(from, to, render) {
    if (from && to) return render(from) + ' – ' + render(to)
    if (from) return 'от ' + render(from)
    if (to) return 'до ' + render(to)
    return ''
}

function describeQuery(searchParams, details, state) {
    const push = text => {
        if (text && !details.includes(text)) details.push(text)
    }

    const city = searchParams.get('city')
    if (city && !state.cityMentioned) push('город ' + city)

    const bodyType = searchParams.get('bodyType')
    if (bodyType) push('кузов ' + lowerFirst(bodyType))

    const gearbox = searchParams.get('gearboxType')
    if (gearbox) push(GEARBOX_TITLES[gearbox] || lowerFirst(gearbox) + ' коробка')

    const engine = searchParams.get('engineType')
    if (engine) push(ENGINE_TITLES[engine] || lowerFirst(engine) + ' двигатель')

    const drive = searchParams.get('driveType')
    if (drive) push(lowerFirst(drive) + ' привод')

    const wheel = searchParams.get('wheelType')
    if (wheel) push(lowerFirst(wheel) + ' руль')

    const color = searchParams.get('color')
    if (color) push('цвет ' + lowerFirst(color))

    const year = formatRange(searchParams.get('yearReleasedFrom'), searchParams.get('yearReleasedTo'), v => v)
    if (year) push('год выпуска ' + year)

    const mileage = formatRange(
        searchParams.get('milleageFrom'),
        searchParams.get('milleageTo'),
        v => MONEY.format(Number(v)) + ' км',
    )
    if (mileage) push('пробег ' + mileage)

    const price = formatRange(searchParams.get('priceFrom'), searchParams.get('priceTo'), formatMoney)
    if (price) push('цена ' + price)

    const capacity = searchParams.get('engineCapacity')
    if (capacity) push('объём двигателя до ' + capacity + ' л')

    const priceOrder = searchParams.get('priceOrder')
    if (priceOrder === 'true') push('сортировка по цене, по убыванию')
    else if (priceOrder === 'false') push('сортировка по цене, по возрастанию')
}

// текст для личной комнаты: «Ford Focus — город Альметьевск, автоматическая коробка, левый руль»
export async function describeFilter(url) {
    const parsed = new URL(url, location.origin)
    const segments = parsed.pathname.split('/').filter(Boolean)
    const path = segments[0] === 'cars' ? segments.slice(1) : segments
    const details = []
    const state = {cityMentioned: false}

    let title = 'Все автомобили'

    if (path.length) {
        const cityName = await cityNameBySlug(path[0])
        if (cityName) {
            title = 'Автомобили в городе ' + cityName
            state.cityMentioned = true
            if (path[1]) details.push(prettySlug(path.slice(1).join(' ')))
        } else {
            title = brandTitle(path[0])
            if (path[1]) {
                title += ' ' + prettySlug(path[1])
                if (path[2]) details.push(prettySlug(path.slice(2).join(' ')))
            }
        }
    }

    describeQuery(parsed.searchParams, details, state)

    return {
        url: parsed.pathname + parsed.search,
        title,
        details,
        text: title + (details.length ? ' — ' + details.join(', ') : ''),
    }
}

// «Топ 20 марок по продаже»: запоминаем марку по клику, как бы ссылка ни выглядела
document.addEventListener('click', (event) => {
    const link = event.target instanceof Element && event.target.closest('#brands_dynamic a[href]')
    if (!link) return
    rememberFilter(link.getAttribute('href'))
}, true)
