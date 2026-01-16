window.addFavorite = function (val) {
    let currentCar = window.favorCars && window.favorCars.find(el => el.id === val)
    let cars = getFavoriteCars()
    let favoriteButton = document.querySelector("#favoriteId_" + val)
    let isChosen = favoriteButton.classList.contains('chosen')
    let isExist = cars.find(el => el && el.id === val)

    if (!isChosen) {
        favoriteButton.classList.add('chosen')
        if (!isExist) cars.push(currentCar)
    } else if (location.pathname === '/personal/favorite-cars/') {
        favoriteButton.classList.remove('chosen')
        cars = cars.filter(el => el.id !== val)

        localStorage.setItem('FavoriteCars', JSON.stringify(cars))
        window.getVitrina()
    } else {
        location.href = '/personal/favorite-cars/'
    }

    if (cars) {
        cars = cars.filter(el=>el)
        localStorage.setItem('FavoriteCars', JSON.stringify(cars))
        initFavotite(cars)
    }
}

export function initFavotite(cars_) {
    let cars = cars_ || getFavoriteCars()
    cars.forEach(el => {
        let favoriteButton = el && document.querySelector("#favoriteId_" + el.id)
        if (favoriteButton) favoriteButton.classList.add('chosen')
    })

    let preload_getList = document.querySelector('#preload_getList')
    if (preload_getList) preload_getList.style.display = 'none'
}

function getFavoriteCars() {
    let cars = localStorage.getItem('FavoriteCars')
    if (cars) cars = JSON.parse(cars)
    else cars = []
    return cars
}