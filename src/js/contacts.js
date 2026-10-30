const DEALERS_API = '/api/getDealers'
const MAP_WIDGET_URL = 'https://makemap.2gis.ru/widget'
const DEALER_ZOOM = 16
const MARKER_COLOR = '#E22427'

const listEl = document.querySelector('#dealers')
const searchField = document.querySelector('#search-field')

let dealers = []

const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

// в адресах из CMS встречается <br> — разрешаем только его, остальное экранируем
const formatMultiline = (value) => escapeHtml(value).replace(/&lt;br\s*\/?&gt;/gi, '<br>')

const telHref = (tel) => `tel:${String(tel ?? '').replace(/[^\d+]/g, '')}`

const parseCoords = (value) => {
    if (!value) return null
    const [lat, lon] = value.split(',').map((part) => parseFloat(part.trim()))
    return Number.isFinite(lat) && Number.isFinite(lon) ? {lat, lon} : null
}

const toBase64 = (text) => {
    const bytes = new TextEncoder().encode(text)
    let binary = ''
    bytes.forEach((byte) => {
        binary += String.fromCharCode(byte)
    })
    return btoa(binary)
}

const toBase64Url = (bytes) => {
    let binary = ''
    for (let offset = 0; offset < bytes.length; offset += 0x8000) {
        binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000))
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

// виджет 2ГИС принимает data = base64url(zlib(JSON))
const compress = async (text) => {
    if (typeof CompressionStream === 'undefined') return null
    const source = new Blob([new TextEncoder().encode(text)]).stream()
    const stream = source.pipeThrough(new CompressionStream('deflate'))
    return new Uint8Array(await new Response(stream).arrayBuffer())
}

const buildMapSrc = async (dealer) => {
    const point = parseCoords(dealer.coords)
    if (!point) return null

    const popup = `
        <div style="font:14px/1.45 Gilroy,Arial,sans-serif;min-width:180px;background:white">
            <div style="font-weight:700;color:#111;margin-bottom:2px">${escapeHtml(dealer.city)}</div>
            <div style="color:#333">${formatMultiline(dealer.address)}</div>
            <div style="margin-top:4px"><a style="color:#E22427;text-decoration:none" href="${escapeHtml(telHref(dealer.tel))}">${escapeHtml(dealer.tel)}</a></div>
            <div style="color:#8a8a95;font-size:12px;margin-top:2px">${escapeHtml(dealer.days)}</div>
        </div>`

    const data = {
        orderedGeometries: [{
            type: 'Feature',
            properties: {
                description: toBase64(popup),
                color: MARKER_COLOR,
                zIndex: 1000000000,
            },
            geometry: {
                type: 'Point',
                coordinates: [point.lon, point.lat],
            },
            id: dealer.id,
        }],
        mapPosition: {...point, zoom: DEALER_ZOOM},
        scrollWheelZoom: false,
    }

    const compressed = await compress(JSON.stringify(data))
    if (!compressed) return null
    return `${MAP_WIDGET_URL}?data=${toBase64Url(compressed)}`
}

const cardHtml = (dealer) => {
    const photoUrl = dealer.url ? encodeURI(dealer.url) : ''
    const pageUrl = dealer.link ? encodeURI(dealer.link) : ''

    const profile = dealer.profile
        ? `<div class="dealer-block__profile">${escapeHtml(dealer.profile)}</div>`
        : ''
    const phone = dealer.tel
        ? `<a class="dealer-block__phone" href="${escapeHtml(telHref(dealer.tel))}">${escapeHtml(dealer.tel)}</a>`
        : ''
    const days = dealer.days
        ? `<div class="dealer-block__days"><span>Режим работы</span>${escapeHtml(dealer.days)}</div>`
        : ''
    const page = pageUrl
        ? '<span class="dealer-block__link">Страница центра</span>'
        : ''

    return `
        <article class="dealer-block${photoUrl ? ' dealer-block--photo' : ''}"${photoUrl ? ` style="background-image:url('${escapeHtml(photoUrl)}')"` : ''}${pageUrl ? ` data-link="${escapeHtml(pageUrl)}" role="link" tabindex="0"` : ''}>
            <div class="dealer-block__body">
                ${profile}
                <div class="dealer-block__city">${escapeHtml(dealer.city)}</div>
                <a class="dealer-block__address" href="#" data-id="${dealer.id}">${formatMultiline(dealer.address)}</a>
                ${phone}
                ${days}
                <div class="dealer-block__actions">${page}</div>
            </div>
        </article>`
}

const render = () => {
    const query = (searchField?.value ?? '').trim().toLowerCase()
    const filtered = query
        ? dealers.filter((dealer) => [dealer.city, dealer.address]
            .some((value) => String(value ?? '').toLowerCase().includes(query)))
        : dealers

    if (!filtered.length) {
        listEl.innerHTML = `<p class="dealer-empty">${query ? 'Ничего не найдено.' : 'Список дилерских центров пуст.'}</p>`
        return
    }

    const groups = new Map()
    filtered.forEach((dealer) => {
        const city = dealer.city || 'Другой город'
        if (!groups.has(city)) groups.set(city, [])
        groups.get(city).push(dealer)
    })

    const cities = [...groups.keys()].sort((a, b) => a.localeCompare(b, 'ru'))

    listEl.innerHTML = cities.map((city) => `
        <section class="dealer-city">
            <h3 class="dealer-city__title">${escapeHtml(city)}</h3>
            <div class="dealer-city__grid">${groups.get(city).map(cardHtml).join('')}</div>
        </section>`).join('')
}

const openDealerMap = async (dealer) => {
    const src = await buildMapSrc(dealer)
    if (!src) {
        console.error('Не удалось построить карту для дилерского центра', dealer)
        return
    }
    if (typeof window.openMap === 'function') window.openMap(src)
}

const start = async () => {
    if (!listEl) return

    listEl.innerHTML = '<p class="dealer-empty">Загрузка…</p>'

    try {
        const response = await fetch(DEALERS_API)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        dealers = await response.json()
        render()
    } catch (error) {
        console.error(error)
        listEl.innerHTML = '<p class="dealer-empty">Не удалось загрузить список дилерских центров.</p>'
        return
    }

    searchField?.addEventListener('input', render)

    listEl.addEventListener('click', (event) => {
        const addressLink = event.target.closest('.dealer-block__address')
        if (addressLink) {
            event.preventDefault()
            const dealer = dealers.find((item) => String(item.id) === addressLink.dataset.id)
            if (dealer) openDealerMap(dealer)
            return
        }
        // телефон и другие ссылки обрабатывает браузер
        if (event.target.closest('a')) return
        const card = event.target.closest('.dealer-block')
        if (card?.dataset.link) window.location.href = card.dataset.link
    })

    listEl.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        if (event.target.closest('a')) return
        const card = event.target.closest('.dealer-block')
        if (!card?.dataset.link) return
        event.preventDefault()
        window.location.href = card.dataset.link
    })
}

start()
