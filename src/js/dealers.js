class Carousel {
    constructor(containerId, images, visibleCount = 4) {
        this.container = document.getElementById(containerId);
        this.images = images;
        this.visibleCount = visibleCount;
        this.currentIndex = 0;
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;

        this.init();
    }

    init() {
        this.render();
        this.setupEventListeners();
        this.updateControls();
    }

    render() {
        this.container.innerHTML = '';

        this.images.forEach((image, index) => {

            let content = `<div class="pic">
                        <img src="${image.src}" alt="${image.name}" class="carousel-image" draggable="false">
                        <div class="name">${image.name}</div>
                        <div class="aff">${image.aff}</div>
                        </div>`
            this.container.innerHTML += content
        });
    }

    setupEventListeners() {
        // Перетаскивание мышкой
        this.container.addEventListener('mousedown', this.dragStart.bind(this));
        this.container.addEventListener('touchstart', this.dragStart.bind(this));

        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('touchmove', this.drag.bind(this));

        document.addEventListener('mouseup', this.dragEnd.bind(this));
        document.addEventListener('touchend', this.dragEnd.bind(this));

        // Кнопки навигации
        document.getElementById('prevBtn').addEventListener('click', () => this.prev());
        document.getElementById('nextBtn').addEventListener('click', () => this.next());
    }

    dragStart(e) {
        if (e.type === 'touchstart') this.startX = e.touches[0].clientX;
        else this.startX = e.clientX;

        this.isDragging = true;
        this.container.classList.add('dragging');
        this.animationID = requestAnimationFrame(this.animation.bind(this));
    }

    drag(e) {
        if (!this.isDragging) return;

        e.preventDefault();

        let currentX;

        if (e.type === 'touchmove') currentX = e.touches[0].clientX;
        else currentX = e.clientX;

        const movedBy = currentX - this.startX;

        if (Math.abs(movedBy) > 5) { // Минимальное движение для начала перетаскивания
            this.currentTranslate = this.prevTranslate + movedBy;
        }
    }

    dragEnd() {
        if (!this.isDragging) return;

        this.isDragging = false;
        this.container.classList.remove('dragging');
        cancelAnimationFrame(this.animationID);

        const movedBy = this.currentTranslate - this.prevTranslate;

        if (Math.abs(movedBy) > 100) { // Порог для смены слайда
            if (movedBy > 0) this.prev()
            else this.next()
        } else {
            this.setPositionByIndex();
        }

        this.prevTranslate = this.currentTranslate;
    }

    animation() {
        this.setSliderPosition();
        if (this.isDragging) requestAnimationFrame(this.animation.bind(this));
    }

    setSliderPosition() {
        this.container.style.transform = `translateX(${this.currentTranslate}px)`;
    }

    setPositionByIndex() {
        const itemWidth = this.container.children[0].offsetWidth;
        this.currentTranslate = -this.currentIndex * itemWidth;
        this.prevTranslate = this.currentTranslate;
        this.setSliderPosition();
    }

    next() {
        const maxIndex = this.images.length - this.visibleCount;

        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.setPositionByIndex();
            this.updateControls();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.setPositionByIndex();
            this.updateControls();
        }
    }

    updateControls() {
        const maxIndex = this.images.length - this.visibleCount;
        document.getElementById('prevBtn').disabled = this.currentIndex === 0;
        document.getElementById('nextBtn').disabled = this.currentIndex === maxIndex;
    }
}

// Массив с URL фотографий (можно заменить на свои)
const images = [
    {src: '/photo/franshiza/Казань.webp', name: 'Казань', aff: '3 филиала'},
    {src: '/photo/franshiza/Альметьевск.webp', name: 'Альметьевск', aff: '2 филиала'},
    {src: '/photo/franshiza/Астрахань.webp', name: 'Астрахань', aff: '1 филиал'},
    {src: '/photo/franshiza/Буинск.webp', name: 'Буинск', aff: '1 филиал'},
    {src: '/photo/franshiza/Екат.webp', name: 'Екатеринбург', aff: '1 филиал'},
    {src: '/photo/franshiza/Магнитогорск.webp', name: 'Магнитогорск', aff: '1 филиал'},
    {src: '/photo/franshiza/НабЧелны.webp', name: 'Набережные Челны', aff: '2 филиала'},
    {src: '/photo/franshiza/Нижнекамск.webp', name: 'Нижнекамск', aff: '3 филиала'},
    {src: '/photo/franshiza/НижТагил.webp', name: 'Нижний Тагил', aff: '2 филиала'},
    {src: '/photo/franshiza/Самара.webp', name: 'Самара', aff: '1 филиал'},
    {src: '/photo/franshiza/Стерлитамак.webp', name: 'Стерлитамак', aff: '1 филиал'}
];

// Инициализация карусели
document.addEventListener('DOMContentLoaded', () => {
    new Carousel('carousel', images, 4);
});
