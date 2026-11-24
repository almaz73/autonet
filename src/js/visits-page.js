import {getVisits} from '@/js/visits.js'

const DATE_PATTERN = /^(\d{2})\.(\d{2})\.(\d{4})$/

function weekdayOf(value) {
    const match = value.match(DATE_PATTERN)
    if (!match) return ''
    const date = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]))
    if (Number.isNaN(date.getTime())) return ''
    return date.toLocaleDateString('ru-RU', {weekday: 'long'})
}

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.querySelector('#visits-body')
    if (!tbody) return

    const visits = getVisits()
    const table = document.querySelector('#visits-table')
    const empty = document.querySelector('#visits-empty')

    if (!visits.length) {
        if (table) table.hidden = true
        if (empty) empty.hidden = false
        return
    }

    tbody.innerHTML = visits
        .map((value, index) => `<tr><td>${index + 1}</td><td>${value}</td><td>${weekdayOf(value)}</td></tr>`)
        .join('')

    if (empty) empty.hidden = true
})
