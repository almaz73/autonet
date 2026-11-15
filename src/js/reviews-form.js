import {checkFormFields} from '@/js/global-func.js'

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
