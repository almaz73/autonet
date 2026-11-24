let emptyNode = null

export function hasFilterCity(city) {
    return Boolean(city && city !== 'Все' && city !== 'Россия')
}

function createNode() {
    const node = document.createElement('div')
    node.className = 'filter-empty'

    const link = document.createElement('a')
    link.href = 'javascript:void(0)'
    link.textContent = 'сменить город'
    link.addEventListener('click', () => window.openCityPanel && window.openCityPanel())

    node.append('В вашем городе фильтр ничего не нашел. Вы можете ', link, '.')
    return node
}

export function showFilterEmpty(target, show, prepend = false) {
    if (emptyNode && !emptyNode.isConnected) emptyNode = null

    if (!show || !target) {
        if (emptyNode) {
            emptyNode.remove()
            emptyNode = null
        }
        return
    }

    if (!emptyNode) emptyNode = createNode()
    if (prepend) target.prepend(emptyNode)
    else target.append(emptyNode)
}
