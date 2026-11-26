// Капчу можно использовать сразу несколько на одной странице.
// Позицию цели выдаёт сервер (/api/captcha), ответ сверяется на сервере (/api/captcha/verify),
// а после решения капча кладёт одноразовый токен в data-captcha-token — его требуют почтовые заявки.
document.addEventListener('DOMContentLoaded', () => {
    initCaptcha()
});

let captchaIndex = 0

export function initCaptcha() {
    const parents = document.querySelectorAll('.capctha-div')

    parents.forEach(el => {
        // initCaptcha вызывают несколько модулей — повторно не пересобираем
        if (el.dataset.captchaInit === '1') return
        el.dataset.captchaInit = '1'

        const order = '_' + (captchaIndex++)
        el.innerHTML = `<p class="instructions ${order}">
          Подтвердите, что вы не робот<br>
          Сдвиньте квадрат в нужную область</p>
        <p class="result">✅<span>Спасибо !</span></p>
        <div class="target-area ${order}"></div>
        <div class="puzzle-piece ${order}">⇦ ⇨</div>`

        new PuzzleCaptcha(el)
    })
}


class PuzzleCaptcha {
    constructor(parent) {
        this.parent = parent
        this.parentRect = parent.getBoundingClientRect()
        this.puzzlePiece = parent.querySelector('.puzzle-piece')
        this.targetArea = parent.querySelector('.target-area')
        this.instructions = parent.querySelector('.instructions')
        this.isDragging = false
        this.initialX = 0
        this.currentX = 0
        this.offsetX = 0
        this.challenge = null // {id, offset} от сервера
        this.loading = false
        this.verified = false
        this.parent.dataset.captchaToken = ''
        this.init();
    }

    init() {
        this.setupEventListeners()
        this.updatePosition()
        this.loadChallenge()
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

    async loadChallenge() {
        if (this.loading) return
        this.loading = true
        try {
            const res = await fetch('/api/captcha', {cache: 'no-store'})
            if (!res.ok) throw new Error('Капча недоступна')
            const data = await res.json()
            if (!data || !data.id || !Number.isFinite(data.offset)) throw new Error('Капча недоступна')
            this.challenge = {id: data.id, offset: data.offset}
            // если пользователь уже начал тянуть — покажем цель, как только она пришла
            if (this.isDragging) this.targetArea.style.left = data.offset + '%'
        } catch (error) {
            this.challenge = null
        } finally {
            this.loading = false
        }
    }

    startDragging(e) {
        this.beginDrag(e.clientX, e)
    }

    startDraggingTouch(e) {
        this.beginDrag(e.touches[0].clientX, e)
    }

    beginDrag(clientX, e) {
        if (this.verified) return
        if (!this.challenge) {
            this.loadChallenge()
            return
        }
        this.parentRect = this.parent.getBoundingClientRect()
        this.instructions.style.left = '-10000px'
        this.targetArea.style.left = this.challenge.offset + '%'
        this.isDragging = true;
        this.initialX = clientX - this.offsetX;
        this.puzzlePiece.style.cursor = 'grabbing';
        e.preventDefault();
    }

    drag(e) {
        if (!this.isDragging) return;
        e.preventDefault();
        this.moveTo(e.clientX);
    }

    dragTouch(e) {
        if (!this.isDragging) return;
        this.moveTo(e.touches[0].clientX);
    }

    moveTo(clientX) {
        this.currentX = clientX - this.initialX;
        if (this.currentX < 0) this.currentX = 0
        this.updatePosition();
    }

    stopDragging() {
        if (!this.isDragging) return
        this.isDragging = false;
        this.puzzlePiece.style.cursor = 'move';
        this.verify()
    }

    updatePosition() {
        if (this.currentX > this.parentRect.width - 44) this.currentX = this.parentRect.width - 44

        this.puzzlePiece.style.transform = `translateX(${this.currentX}px)`;
        this.offsetX = this.currentX;
    }

    resetPosition() {
        this.isDragging = false
        this.currentX = 0
        this.offsetX = 0
        this.puzzlePiece.style.transform = ''
        this.puzzlePiece.style.cursor = 'move'
        this.targetArea.style.left = '100%'
        this.instructions.style.left = ''
    }

    resetChallenge() {
        this.resetPosition()
        this.verified = false
        this.challenge = null
        this.parent.dataset.captchaToken = ''
        this.loadChallenge()
    }

    async verify() {
        if (!this.challenge) {
            this.resetChallenge()
            return
        }

        this.parentRect = this.parent.getBoundingClientRect();
        const childRect = this.puzzlePiece.getBoundingClientRect();
        const answer = ((childRect.left - this.parentRect.left) / this.parentRect.width) * 100;

        if (Math.abs(this.challenge.offset - answer) >= 1) {
            // не попал — даём попробовать ещё раз с той же целью
            this.resetPosition()
            return
        }

        try {
            const res = await fetch('/api/captcha/verify', {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({id: this.challenge.id, answer})
            })
            const data = await res.json().catch(() => null)
            if (!res.ok || !data || !data.token) throw new Error((data && data.error) || 'Капча не принята')

            this.verified = true
            this.parent.dataset.captchaToken = data.token
            this.parent.style.border = ''
            this.parent.classList.add('checked')
            this.parent.dispatchEvent(new CustomEvent('captcha:verified'))
        } catch (error) {
            this.resetChallenge()
            if (window.sendMessage) window.sendMessage(error.message || 'Не удалось пройти проверку, попробуйте ещё раз', 'warning')
        }
    }
}
