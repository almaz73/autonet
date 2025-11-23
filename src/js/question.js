let question_block = document.querySelector('.question_block')
let textarea = document.querySelector('.question_panel .contentedit div')
let history = document.querySelector('.question_panel .history')
window.openChat = function (e, root) {
    e.stopPropagation()

    if (root === 'no') return e.stopPropagation()
    if (!root || window.innerWidth > 500) question_block.style.display = 'block'

    history.scrollTo(0, 10000);
}
window.closeChat = function (e) {
    question_block.style.display = 'none'
}


textarea && textarea.addEventListener('keydown', key => {
    if (key.code === 'Enter') {
        history.innerHTML += '<b>-Вы </b>' + textarea.innerHTML + '<br><br>'
        history.scrollTo({top: 10000, behavior: 'smooth'});
        send(textarea.innerHTML)
        setTimeout(() => textarea.innerHTML = '')
    }
})

function send(message) {
    let botId = 'bot8235288635:AAF_soJaYR8OPHAQrpfcF4FDUr2JjRRDlVw';
    let chatId = '-5064627941';
    let linkTelega = `https://api.telegram.org/${botId}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`;

    fetch(linkTelega)
        .then(response => response.json())
        .then(() => {
            console.log('сообщение доставлено = ')
        });
}