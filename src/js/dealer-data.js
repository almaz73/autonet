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
