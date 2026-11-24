import {getMyFilters, describeFilter} from '@/js/my-filters.js'

function renderItem(item, index) {
    const li = document.createElement('li')
    li.className = 'personal-filter'

    const text = document.createElement('div')
    text.className = 'personal-filter__text'

    const title = document.createElement('span')
    title.className = 'personal-filter__title'
    title.textContent = item.title
    text.append(title)

    if (item.details.length) {
        const details = document.createElement('span')
        details.className = 'personal-filter__details'
        details.textContent = item.details.join(', ')
        text.append(details)
    }

    const indexText = document.createElement('span')
    indexText.className = 'personal-filter__index'
    indexText.textContent = String(index + 1)

    const link = document.createElement('a')
    link.className = 'personal-filter__button'
    link.href = item.url
    link.textContent = 'Открыть фильтр'

    li.append(indexText, text, link)
    return li
}

document.addEventListener('DOMContentLoaded', async () => {
    const list = document.querySelector('#my-filters-list')
    if (!list) return

    const empty = document.querySelector('#my-filters-empty')
    const filters = getMyFilters()

    if (!filters.length) {
        if (empty) empty.hidden = false
        return
    }

    const described = await Promise.all(filters.map(url => describeFilter(url)))
    list.append(...described.map(renderItem))
    if (empty) empty.hidden = true
})
