// капчу можно использовать сразу несколько на одной странице.
// для улучшения можно добавить назначение секретного числа серверу.
document.addEventListener('DOMContentLoaded', () => {
    initCaptcha()
});

export function initCaptcha(){
    const parents = document.querySelectorAll('.capctha-div')

    parents.forEach((el, ind) => {
        let order = '_' + ind
        let parent = el

        if (parent) {
            parent.innerHTML = `<p class="instructions ${order}">
          Подтвердите, что вы не робот<br>
          Сдвиньте квадрат в белую область</p>
        <p class="result">✅<span>Спасибо !</span></p>
        <div class="target-area ${order}"></div>
        <div class="puzzle-piece ${order}">⇦ ⇨</div>`

            new PuzzleCaptcha(order, parent);
        }
    })
}


class PuzzleCaptcha {
    constructor(order, parent) {
        this.parent = parent
        this.puzzlePiece = document.querySelector(`.puzzle-piece.${order}`);
        this.targetArea = document.querySelector(`.target-area.${order}`);
        this.instructions = document.querySelector(`.instructions.${order}`);
        this.isDragging = false;
        this.initialX = 0;
        this.currentX = 0; // Начальная позиция X
        this.offsetX = 0;
        this.targetX = parseInt(Math.random() * 73) + 5; // Позиция цели X (300px ширина контейнера - 40px правая граница - 80px ширина элемента)
        this.parent && this.init();
    }

    init() {
        this.setupEventListeners();
        this.updatePosition();
    }

    setupEventListeners() {
        // События для перетаскивания
        this.puzzlePiece.addEventListener('mousedown', this.startDragging.bind(this));
        document.addEventListener('mousemove', this.drag.bind(this));
        document.addEventListener('mouseup', this.stopDragging.bind(this));

        // Для мобильных устройств
        this.puzzlePiece.addEventListener('touchstart', this.startDraggingTouch.bind(this));
        document.addEventListener('touchmove', this.dragTouch.bind(this));
        document.addEventListener('touchend', this.stopDragging.bind(this));
    }

    startDragging(e) {
        this.instructions.style.left = '-10000px'
        this.targetArea.style.left = this.targetX + '%'
        this.isDragging = true;
        this.initialX = e.clientX - this.offsetX;
        this.puzzlePiece.style.cursor = 'grabbing';
        e.preventDefault();
    }

    startDraggingTouch(e) {
        this.instructions.style.left = '-10000px'
        this.targetArea.style.left = this.targetX + '%'
        this.isDragging = true;
        const touch = e.touches[0];
        this.initialX = touch.clientX - this.offsetX;
        e.preventDefault();
    }

    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.currentX = e.clientX - this.initialX;
        if (this.currentX < 0) this.currentX = 0
        if (this.currentX < 0) this.currentX = 0
        this.updatePosition();
    }

    dragTouch(e) {
        if (!this.isDragging) return;
        const touch = e.touches[0];
        this.currentX = touch.clientX - this.initialX;

        if (this.currentX < 0) this.currentX = 0
        this.updatePosition();
    }

    stopDragging() {
        this.isDragging = false;
        this.puzzlePiece.style.cursor = 'move';
        this.verify()
    }

    updatePosition() {
        this.puzzlePiece.style.transform = `translateX(${this.currentX}px)`;
        this.offsetX = this.currentX;
    }

    verify() {
        const parentRect = this.parent.getBoundingClientRect();
        const childRect = this.puzzlePiece.getBoundingClientRect();
        const offsetLeftPercent = ((childRect.left - parentRect.left) / parentRect.width) * 100;
        if (Math.abs(this.targetX - offsetLeftPercent) < 1) {
            this.parent.style.border = ''
            this.parent.classList.add('checked')
        }
    }
}

