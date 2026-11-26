// Обратная связь разработчикам в личной комнате: без капчи кнопка не активна,
// после успешной отправки кнопка блокируется до закрытия вкладки и показывается «Спасибо».
// Получатели письма заданы на сервере (/api/postEmail, type 18) и на клиенте не видны.
const SENT_KEY = 'DEVELOPER_FEEDBACK_SENT'

// sessionStorage живёт до закрытия вкладки: в этой вкладке повторно отправить нельзя
const hasSent = () => {
    console.log('111111111 = ',111111111)
    try {
        return sessionStorage.getItem(SENT_KEY) === '1'
    } catch {
        return false
    }
}

const markSent = () => {
    try {
        sessionStorage.setItem(SENT_KEY, '1')
    } catch {
        // приватный режим может запрещать storage — отправка от этого не должна ломаться
    }
}

const form = document.querySelector('.personal-feedback__form')

if (form) {
    const feedback = form.closest('.personal-feedback')
    const success = feedback.querySelector('.personal-feedback__success')
    const button = form.querySelector('button[type="submit"]')
    const textarea = form.querySelector('#review-text')
    const captcha = form.querySelector('.capctha-div')

    let sent = hasSent()

    console.log('sent = ',sent)

    const showSentState = () => {
        button.disabled = true
        success.hidden = false
    }

    const syncCaptcha = () => {
        button.disabled = sent || !captcha.classList.contains('checked')
    }

    if (sent) showSentState()
    syncCaptcha()
    captcha.addEventListener('captcha:verified', syncCaptcha)

    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        if (sent) return

        const text = textarea.value.trim()
        if (text.length < 3) {
            window.sendMessage('Напишите сообщение', 'warning')
            return
        }

        button.disabled = true
        try {
            const response = await fetch('/api/postEmail', {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify({type: 18, text, captchaToken: captcha.dataset.captchaToken || ''}),
            })
            const result = await response.json().catch(() => ({}))
            if (!response.ok) throw new Error(result.error || 'Не удалось отправить сообщение')

            sent = true
            markSent()
            showSentState()
            success.scrollIntoView({behavior: 'smooth', block: 'center'})
        } catch (error) {
            window.sendMessage(error.message, 'error')
        } finally {
            syncCaptcha()
        }
    })
}
