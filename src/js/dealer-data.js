const DEALERS_API = '/api/getDealers'

let dealersPromise = null

export const loadDealers = () => {
    if (!dealersPromise) {
        dealersPromise = fetch(DEALERS_API)
            .then((response) => {
                if (!response.ok) throw new Error(`Не удалось загрузить дилеров: HTTP ${response.status}`)
                return response.json()
            })
            .catch((error) => {
                dealersPromise = null
                throw error
            })
    }
    return dealersPromise
}

// города берём из базы (таблица dealers), чтобы список городов совпадал с адресами в футере
export const getDealerCities = async () => {
    const dealers = await loadDealers()
    return [...new Set(dealers.map((dealer) => dealer.city).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b, 'ru'))
}
