const CITIES_API = '/api/auto/getCities'

let citiesPromise = null

export const loadCities = () => {
    if (!citiesPromise) {
        citiesPromise = fetch(CITIES_API)
            .then((response) => {
                if (!response.ok) throw new Error(`Не удалось загрузить города: HTTP ${response.status}`)
                return response.json()
            })
            .then((data) => {
                const list = Array.isArray(data) ? data : data.items
                const cities = [...new Set((list ?? [])
                    .map(city => String(city).trim())
                    .filter(city => city && city !== '-'))]
                // «Россия» — значение по умолчанию, ставим её первой
                return cities.sort((a, b) => {
                    if (a === 'Россия') return -1
                    if (b === 'Россия') return 1
                    return a.localeCompare(b, 'ru')
                })
            })
            .catch((error) => {
                citiesPromise = null
                throw error
            })
    }
    return citiesPromise
}
