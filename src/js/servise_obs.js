import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields, formattingPhone, initSubField} from "@/js/global-func.js";
import {servObs} from "@/js/global-constants.js";

window.formattingPhone = formattingPhone


document.addEventListener('DOMContentLoaded', () => {
    let form1 = document.querySelector('.formBlock.v1')
    form1.innerHTML = servObs

    let form2 = document.querySelector('.formBlock.v2')
    form2.innerHTML = servObs
    form2.querySelector('.title').innerHTML = `Оставьте заявку на <span style="color:red">техосмотр</span> автомобиля`

    initCaptcha()
    initSubField()

})

window.send_obsl = function (self) {
    let ver = self.parentNode.parentNode.parentNode.classList[1]
    console.log('send_obsl ver', ver)
    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let select = document.querySelector(`.${ver} [name="select"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        city: city.value,
        select: select.value
    }
    console.log('params', params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

