const parent = document.querySelector('.capctha-div')
if (parent) {
    parent.innerHTML = `<p class="instructions">
          Подтвердите, что вы <b style="font-size: larger">не робот</b><br>
          Перетащите квадрат в белую область</p>
        <p class="result ">✅<span>Спасибо !</span></p>
        <div class="target-area" id="targetArea"></div>
        <div class="puzzle-piece" id="puzzlePiece">⇦ ⇨</div>`
}

class PuzzleCaptcha {
    constructor() {
        this.puzzlePiece = document.getElementById('puzzlePiece');
        this.targetArea = document.querySelector('.target-area');
        this.instructions = document.querySelector('.instructions');
        this.resultMessage = document.getElementById('resultMessage');

        this.isDragging = false;
        this.initialX = 0;
        this.currentX = 0; // Начальная позиция X
        this.offsetX = 0;
        this.targetX = parseInt(Math.random() * 73) + 5; // Позиция цели X (300px ширина контейнера - 40px правая граница - 80px ширина элемента)

        parent && this.init();
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
        e.preventDefault();
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
        const parentRect = parent.getBoundingClientRect();
        const childRect = this.puzzlePiece.getBoundingClientRect();
        const result = document.querySelector('.result')
        const offsetLeftPercent = ((childRect.left - parentRect.left) / parentRect.width) * 100;
        if (Math.abs(this.targetX - offsetLeftPercent) < 1) {
            result.style.display = 'flex'
            parent.style.border = ''
            parent.classList.add('checked')
        }
    }
}

// Инициализация капчи после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    new PuzzleCaptcha();
});