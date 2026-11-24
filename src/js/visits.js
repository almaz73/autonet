// История посещений сайта: один день — одна запись, последние 20 дней.
// В localStorage лежит строкой через запятую: "23.10.2026, 14.10.2026".
export const VISITS_KEY = 'Visits'
export const VISITS_LIMIT = 20

const DATE_PATTERN = /^\d{2}\.\d{2}\.\d{4}$/

const pad = value => String(value).padStart(2, '0')

export function formatVisitDate(date) {
    return `${pad(date.getDate())}.${pad(date.getMonth() + 1)}.${date.getFullYear()}`
}

export function getVisits() {
    try {
        return (localStorage.getItem(VISITS_KEY) || '')
            .split(',')
            .map(value => value.trim())
            .filter(value => DATE_PATTERN.test(value))
            .slice(0, VISITS_LIMIT)
    } catch {
        return []
    }
}

function saveVisits(visits) {
    try {
        localStorage.setItem(VISITS_KEY, visits.join(', '))
    } catch {
        // приватный режим или переполненное хранилище — история просто не сохранится
    }
}

// повторный заход в тот же день не создаёт новую запись
export function trackVisit(now = new Date()) {
    const today = formatVisitDate(now)
    const visits = getVisits()
    if (visits[0] === today) return visits

    const next = [today, ...visits.filter(value => value !== today)].slice(0, VISITS_LIMIT)
    saveVisits(next)
    return next
}

trackVisit()
