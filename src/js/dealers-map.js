const MAP_WIDGET_URL = 'https://makemap.2gis.ru/widget'
const MAP_ORIGIN = 'https://makemap.2gis.ru'
const DEALERS_API = '/api/getDealers'
const OVERVIEW_ZOOM = 4
const DEALER_ZOOM = 16
const MARKER_COLOR = '#E22427'
const ACTIVE_MARKER_COLOR = '#111111'

let dealersPromise = null

const loadDealers = () => {
    if (!dealersPromise) {
        dealersPromise = fetch(DEALERS_API).then((response) => {
            if (!response.ok) throw new Error(`Не удалось загрузить дилеров: HTTP ${response.status}`)
            return response.json()
        })
    }
    return dealersPromise
}

const parseCoords = (value) => {
    if (!value) return null
    const [lat, lon] = value.split(',').map((part) => parseFloat(part.trim()))
    return Number.isFinite(lat) && Number.isFinite(lon) ? {lat, lon} : null
}

const telHref = (tel) => `tel:${(tel ?? '').replace(/[^\d+]/g, '')}`

const splitList = (value) => String(value ?? '')
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)

const firstPhone = (tel) => splitList(tel)[0] ?? ''

const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

// в адресах из CMS встречается <br> — разрешаем только его, остальное экранируем
const formatMultiline = (value) => escapeHtml(value).replace(/&lt;br\s*\/?&gt;/gi, '<br>')

// data-profiles="СТО, Сервис": дилер попадает в раздел, если его профиль содержит одно из значений
const matchesProfiles = (dealer, wantedProfiles) => {
    if (!wantedProfiles.length) return true
    const profiles = splitList(dealer.profile).map((part) => part.toLowerCase())
    return wantedProfiles.some((wanted) => profiles.some((profile) => profile.includes(wanted)))
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

const createSection = (section, dealers, {withHash = false} = {}) => {
    const listEl = section.querySelector('.dealers__list')
    const mapFrame = section.querySelector('.dealers__map iframe')
    if (!listEl || !mapFrame) return

    const wantedProfiles = splitList(section.dataset.profiles).map((part) => part.toLowerCase())
    const items = dealers
        .filter((dealer) => matchesProfiles(dealer, wantedProfiles))
        .map((dealer, index) => ({
            ...dealer,
            index,
            point: parseCoords(dealer.coords),
        }))

    const points = items.filter((item) => item.point).map((item) => item.point)
    const cards = []
    let renderToken = 0

    const overviewPosition = () => {
        if (!points.length) return null
        const lats = points.map((point) => point.lat)
        const lons = points.map((point) => point.lon)
        return {
            lat: (Math.max(...lats) + Math.min(...lats)) / 2,
            lon: (Math.max(...lons) + Math.min(...lons)) / 2,
            zoom: OVERVIEW_ZOOM,
        }
    }

    // попап открывается внутри iframe, поэтому в список сообщаем через postMessage родителю
    const popupHtml = (item, active) => `
        <div style="font:14px/1.45 Gilroy,Arial,sans-serif;min-width:190px;cursor:pointer;background:white"
             onclick="window.top.postMessage({type:'dealer:select',index:${item.index}},'*')">
            <div style="font-weight:700;color:#111;margin-bottom:2px;padding-left: 5px">${escapeHtml(item.city)}</div>
            <div style="color:#333;padding-left: 5px">${formatMultiline(item.address)}</div>
            <div style="margin-top:4px;padding-left: 5px"><a style="color:#E22427;text-decoration:none" href="${escapeHtml(telHref(item.tel))}">${escapeHtml(item.tel)}</a></div>
            <div style="color:#8a8a95;font-size:12px;margin-top:2px;padding-left: 5px">${escapeHtml(item.days)}</div>
            <div style="color:${active ? '#111' : '#E22427'};font-weight:600;margin-top:6px;padding-left: 5px">Показать в списке →</div>
        </div>`

    const buildMapSrc = async (position, activeIndex) => {
        const geometries = items
            .filter((item) => item.point)
            .map((item) => ({
                type: 'Feature',
                properties: {
                    description: toBase64(popupHtml(item, item.index === activeIndex)),
                    color: item.index === activeIndex ? ACTIVE_MARKER_COLOR : MARKER_COLOR,
                    zIndex: 1000000000,
                },
                geometry: {
                    type: 'Point',
                    coordinates: [item.point.lon, item.point.lat],
                },
                id: item.index,
            }))

        const data = {orderedGeometries: geometries, mapPosition: position, scrollWheelZoom: false}
        const compressed = await compress(JSON.stringify(data))
        if (!compressed) return null
        return `${MAP_WIDGET_URL}?data=${toBase64Url(compressed)}`
    }

    const renderList = () => {
        const fragment = document.createDocumentFragment()

        items.forEach((item) => {
            const card = document.createElement('article')
            card.className = 'dealer-card'
            card.id = `dealer-${item.index}`
            card.dataset.index = String(item.index)
            card.tabIndex = 0
            card.setAttribute('role', 'button')
            const phone = firstPhone(item.tel)
            card.innerHTML = `
                <div class="dealer-card__city">${escapeHtml(item.city)}</div>
                <div class="dealer-card__address">${formatMultiline(item.address)}</div>
                ${phone ? `<a class="dealer-card__tel" href="${escapeHtml(telHref(phone))}">${escapeHtml(phone)}</a>` : ''}
                <div class="dealer-card__days">${escapeHtml(item.days)}</div>
                ${item.link ? `<a class="dealer-card__more" href="${escapeHtml(item.link)}">Подробнее...</a>` : ''}`

            card.querySelector('.dealer-card__tel')?.addEventListener('click', (event) => {
                event.stopPropagation()
            })

            cards.push(card)
            fragment.append(card)
        })

        listEl.append(fragment)
    }

    const scrollCardIntoList = (card) => {
        const top = card.offsetTop - listEl.clientHeight / 2 + card.offsetHeight / 2
        listEl.scrollTo({top: Math.max(0, top), behavior: 'smooth'})
    }

    const panTo = async (index) => {
        const item = items[index]
        if (!item?.point) return

        const token = ++renderToken
        const src = await buildMapSrc({...item.point, zoom: DEALER_ZOOM}, index)
        if (src && token === renderToken) mapFrame.src = src
    }

    const select = (index, {pan = false} = {}) => {
        if (!items[index]) return

        cards.forEach((card, cardIndex) => {
            const isActive = cardIndex === index
            card.classList.toggle('is-active', isActive)
            if (isActive) card.setAttribute('aria-current', 'true')
            else card.removeAttribute('aria-current')
        })

        if (cards[index]) scrollCardIntoList(cards[index])

        if (withHash && location.hash !== `#dealer-${index}`) {
            history.replaceState(null, '', `#dealer-${index}`)
        }

        if (pan) panTo(index)
    }

    const readHashIndex = () => {
        if (!withHash) return null
        const match = location.hash.match(/^#dealer-(\d+)$/)
        if (!match) return null
        const index = Number(match[1])
        return items[index] ? index : null
    }

    const init = async () => {
        const hashIndex = readHashIndex()
        if (hashIndex !== null) select(hashIndex)

        const position = hashIndex !== null && items[hashIndex].point
            ? {...items[hashIndex].point, zoom: DEALER_ZOOM}
            : overviewPosition()

        if (!position) return

        const token = ++renderToken
        const src = await buildMapSrc(position, hashIndex)
        if (src && token === renderToken) mapFrame.src = src
    }

    if (!items.length) {
        listEl.textContent = 'Подходящих адресов не найдено.'
        return
    }

    renderList()

    listEl.addEventListener('click', (event) => {
        if (event.target.closest('a')) return
        const card = event.target.closest('.dealer-card')
        if (card) select(Number(card.dataset.index), {pan: true})
    })

    listEl.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return
        if (event.target.closest('a')) return
        const card = event.target.closest('.dealer-card')
        if (!card) return
        event.preventDefault()
        select(Number(card.dataset.index), {pan: true})
    })

    window.addEventListener('message', (event) => {
        if (event.origin !== MAP_ORIGIN || event.source !== mapFrame.contentWindow) return
        const data = event.data
        if (!data || data.type !== 'dealer:select' || !Number.isInteger(data.index)) return
        select(data.index)
    })

    if (withHash) {
        window.addEventListener('hashchange', () => {
            const index = readHashIndex()
            if (index !== null) select(index, {pan: true})
        })
    }

    init()
}

const start = async () => {
    const sections = [...document.querySelectorAll('[data-dealers-map]')]
    if (!sections.length) return

    let dealers
    try {
        dealers = await loadDealers()
    } catch (error) {
        console.error(error)
        sections.forEach((section) => {
            const listEl = section.querySelector('.dealers__list')
            if (listEl) listEl.textContent = 'Не удалось загрузить список адресов.'
        })
        return
    }

    sections.forEach((section, index) => {
        createSection(section, dealers, {withHash: index === 0})
    })
}

start()
