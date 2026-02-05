import {gl_Call} from "@/js/global-constants.js";
import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields} from "@/js/global-func.js";


let globalcall = document.querySelector('.global-call')
let right_panel_content = document.querySelector('#right_panel_content')
globalcall.addEventListener('click', () => { // авезжпеь панель
    openRightPanel()
    right_panel_content.innerHTML = gl_Call
    initCaptcha()
})

window.glob_call = function () {
    let capcthadiv = right_panel_content.querySelector(`.capctha-div`)
    let name = right_panel_content.querySelector(`[name="name"]`)
    let phone = right_panel_content.querySelector(`[name="phone"]`)
    let checkbox = right_panel_content.querySelector(`[type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, checkbox])) return false

    let params = {
        name: name.value,
        phone: phone.value,
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}