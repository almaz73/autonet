import {initCaptcha} from "@/js/captcha.js";
import {constructorForm, checkFormFields, formattingPhone} from "@/js/global-func.js";
import {franshiza} from "@/js/global-constants.js";

window.formattingPhone = formattingPhone
document.addEventListener('DOMContentLoaded', () => {

    let form1 = document.querySelector('.formBlock.v1')
    form1.innerHTML = franshiza
    form1.querySelector('.formBottom').style.display = 'none'
    form1.querySelector('[name="city"]').style.display = 'none'
    form1.querySelector('.title').innerHTML = `Записаться на шиномонтаж. Диагностика колес <span style="color:red">бесплатно</span>`

    initCaptcha()
})

window.callMe = function (self) {
    let ver = self.parentNode.parentNode.parentNode.parentNode.classList[1]
    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
       city: city.value,
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}
