export function formatterShowPrice(val){
    return parseInt(val).toLocaleString('ru-RU')
}

export function prepareCars(res) {
    let cars = []
    res && res.forEach(el => {
        let info = el.milleage + ' км, '
        if (el.engineCapacity) info += el.engineCapacity
        if (el.gearboxType) info += ' ' + el.gearboxType
        if (el.enginePower) info += ' (' + el.enginePower + '&nbsp;л.с)'
        if (el.bodyType) info += ', ' + el.bodyType
        info += ', ' + el.driveType
        if (el.engineType) info += ', ' + el.engineType

        let fromPerMonth = formatterShowPrice(parseInt(parseInt(el.price.replace(/ /g, '')) / 90.12))

        cars.push({
            address: el.fullAddress,
            id: el.id,
            name: el.brand + ' ' + el.model,
            href: '/cars/car.html?id=' + el.id,
            price: formatterShowPrice(el.price),
            fromPerMonth: fromPerMonth,
            info: info,
            photos: el.images
        })
    })
    return cars
}
