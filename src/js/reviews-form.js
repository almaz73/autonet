import {checkFormFields} from '@/js/global-func.js'

// ответы компании на /reviews/ сворачиваем до одной строки: длинные тексты
// занимают пол-экрана и мешают листать отзывы
document.querySelectorAll('.review-card__answer').forEach((answer) => {
    const collapsible = answer.querySelector('.review-card__answer-collapse')
    const text = answer.querySelector('.review-card__answer-text')
    const toggle = answer.querySelector('.review-card__answer-toggle')
    if (!collapsible || !text || !toggle) return

    collapsible.classList.add('is-collapsed')
    // кнопка нужна только если текст действительно не влез в одну строку
    if (text.scrollHeight <= text.clientHeight + 1) {
        collapsible.classList.remove('is-collapsed')
        return
    }

    toggle.hidden = false
    toggle.setAttribute('aria-expanded', 'false')
    toggle.addEventListener('click', () => {
        const collapsed = collapsible.classList.toggle('is-collapsed')
        toggle.textContent = collapsed ? 'Читать далее' : 'Свернуть'
        toggle.setAttribute('aria-expanded', String(!collapsed))
    })
})

// Форма отзыва на /reviews/: отзыв уходит в базу скрытым и публикуется после модерации
const form = document.querySelector('.review-form')

if (form) {
    const success = document.querySelector('.review-form__success')
    const button = form.querySelector('button[type="submit"]')
    const captcha = form.querySelector('.capctha-div')

    // кнопка доступна только после того, как капча пройдена
    const syncCaptcha = () => {
        button.disabled = !captcha.classList.contains('checked')
    }
    syncCaptcha()
    captcha.addEventListener('captcha:verified', syncCaptcha)

    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const fio = form.elements.fio
        const text = form.elements.review

        if (checkFormFields([fio, text, captcha])) return

        const rating = Number(form.querySelector('input[name="rating"]:checked')?.value || 0)
        if (!rating) {
            sendMessage('Поставьте оценку', 'warning')
            return
        }

        button.disabled = true
        try {
            const response = await fetch('/api/postReview', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fio: fio.value, review: text.value, rating}),
            })
            const result = await response.json().catch(() => ({}))
            if (!response.ok) throw new Error(result.error || 'Не удалось отправить отзыв')

            form.hidden = true
            success.hidden = false
            success.scrollIntoView({behavior: 'smooth', block: 'center'})
        } catch (error) {
            sendMessage(error.message, 'error')
        } finally {
            syncCaptcha()
        }
    })
}
