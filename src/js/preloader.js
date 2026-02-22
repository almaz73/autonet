/* ромашка isWait loader*/

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.footer__bottom').innerHTML +=`
  <div id="preloader"
           style="position: fixed;
           transform: translateY(-50%);
           left: 50%;
           top: 50px;
           pointer-events: none;
           display: none;
           z-index: 10000">
    <img src="/icons/load.gif" alt="" style="width: 73px">
</div>`

})

/**  Глобальный дизаблинг кнопок, во время обращения к серверу? если отправляется кнокпка **/
/* не всегда кнопки сами сообщают чтоон нажат (фильтре) дизаблить надо их тоже */

window.showPreloader = function(val, button) {
    let preload = document.querySelector('#preloader')
    if (!preload) return false
    preload.style.display = val?'block':'none'

    if (button) {
        button.style.opacity = val ? .5 : 1
        button.disabled = val
    }
}