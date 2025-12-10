window.addFavorite = function (val) {
    let currentCar = window.currentCars.find(el => el.id === val)
    let cars = getFavoriteCars()
    let favoriteButton = document.querySelector("#favoriteId_" + val)
    let isChoden = favoriteButton.classList.contains('chosen')
    let isExist = cars.find(el => el.id === val)

    if (!isChoden) {
        favoriteButton.classList.add('chosen')
        if (!isExist) cars.push(currentCar)
    } else if (location.pathname === '/personal/favorite-cars/') {
        favoriteButton.classList.remove('chosen')
        cars = cars.filter(el => el.id !== val)
        // нужно еще удалить с экрана
        localStorage.setItem('FavoriteCars', JSON.stringify(cars))
        window.getVitrina()
    } else {
        location.href = '/personal/favorite-cars/'
    }

    localStorage.setItem('FavoriteCars', JSON.stringify(cars))
    showChosen(cars)
}

function showChosen(cars_) {
    let cars = cars_ || getFavoriteCars()
    cars.forEach(el => {
        let favoriteButton = document.querySelector("#favoriteId_" + el.id)
        if (favoriteButton) favoriteButton.classList.add('chosen')
    })
}

function getFavoriteCars() {
    let cars = localStorage.getItem('FavoriteCars')
    if (cars) cars = JSON.parse(cars)
    else cars = []

    return cars
}

document.addEventListener('DOMContentLoaded', () => {
    showChosen();
})