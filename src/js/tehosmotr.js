import {initCaptcha} from "@/js/captcha.js";
import {checkFormFields , formattingPhone} from "@/js/global-func.js";
import {franshiza, franshiza_about_city, question_boss_form} from "@/js/global-constants.js";

window.formattingPhone = formattingPhone


document.addEventListener('DOMContentLoaded', () => {
    // let count_business_plan = document.querySelector('.count_business_plan')
    // let right_panel_content = document.querySelector('#right_panel_content')
    // let who_can_become_partner = document.querySelector('.who_can_become_partner')


    // count_business_plan.addEventListener('click', () => {
    //     openRightPanel()
    //     right_panel_content.innerHTML = '<div class="vv1">'+franshiza_about_city+'</div>'
    //     initCaptcha()
    // })
    // who_can_become_partner.addEventListener('click', () => {
    //     openRightPanel()
    //     right_panel_content.innerHTML = '<div class="vv2">'+franshiza_about_city+'</div>'
    //     initCaptcha()
    // })

    let form1 = document.querySelector('.formBlock.v1')
    form1.innerHTML = franshiza
    form1.querySelector('.formBottom').style.display ='none'
    form1.querySelector('.title').innerHTML ='Оставьте заявку на <span style="color:red">техосмотр</span> автомобиля'

    let form2 = document.querySelector('.formBlock.v2')
    form2.innerHTML = franshiza
    form2.querySelector('.formBottom').style.display ='none'
    form2.querySelector('.title').innerHTML ='Оставьте заявку на <span style="color:red">техосмотр</span> автомобиля'

    initCaptcha()
})

window.callMe = function (self) {
    let ver = self.parentNode.parentNode.parentNode.parentNode.classList[1]
    console.log('callMe', ver)
    let capcthadiv = document.querySelector(`.${ver} .capctha-div`)
    let name = document.querySelector(`.${ver} [name="name"]`)
    let phone = document.querySelector(`.${ver} [name="phone"]`)
    let city = document.querySelector(`.${ver} [name="city"]`)
    let checkbox = document.querySelector(`.${ver} [type="checkbox" ]`)

    if (checkFormFields([capcthadiv, name, phone, city, checkbox])) return false

    let params = {
        name: name.value,
        dity: dity.value,
    }
    console.log('params',params)
    // api_postCallToSell(params).then(res => {
    //     if (res && res.ok) message('Заявка оптарвлена')
    //     else message('Сервер не принял', 'error')
    // })
}

