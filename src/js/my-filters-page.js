import {getMyFilters, describeFilter, removeMyFilter} from '@/js/my-filters.js'

function renderItem(item) {
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

    const actions = document.createElement('div')
    actions.className = 'personal-filter__actions'

    const link = document.createElement('a')
    link.className = 'personal-filter__button'
    link.href = item.url
    link.textContent = 'Открыть фильтр'

    const remove = document.createElement('button')
    remove.type = 'button'
    remove.className = 'personal-filter__delete'
    remove.title = 'Удалить фильтр'
    remove.setAttribute('aria-label', 'Удалить фильтр «' + item.title + '»')
    remove.textContent = 'Удалить'
    remove.addEventListener('click', () => {
        removeMyFilter(item.url)
        li.remove()
        const empty = document.querySelector('#my-filters-empty')
        if (empty && !list.children.length) empty.hidden = false
    })

    actions.append(link, remove)
    li.append(text, actions)
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

    // пришли с кнопки «Мои фильтры» в каталоге — сразу показываем список, а не личную комнату
    if (location.hash === '#my-filters-list') {
        // глобальный scroll-behavior: smooth не даёт прыгнуть к списку до первого кадра
        const html = document.documentElement
        const behavior = html.style.scrollBehavior
        html.style.scrollBehavior = 'auto'
        list.scrollIntoView({block: 'start'})
        html.style.scrollBehavior = behavior
    }
})
