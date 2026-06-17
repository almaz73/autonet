import {
    api_getBD,
    set_panel
} from "./apibase_admin.js";
import {checkAuth} from './auth-service.js';
import {preparePager} from '@/js/pagination.js'


checkAuth(val => {
    // Если нет токена перебрасываем на авторизацию
    if (!val) window.location.href = 'login.html?redirect=bd.html';
})
set_panel('bd.html')
window.logoutExit = async function () {
    localStorage.removeItem('admin_token')
    location.reload()
}

let selectedField = null

let params={
    page:1,
    pageSize:10,
    city: ''
}

// Создаем объект параметров
const search = new URLSearchParams(location.href);
// Получаем значение переменной page
const page = search.get('page'); // вернет "3"
if(page) params.page = page


api_getBD(showBD_forms, params)

function showBD_forms(result) {
    let content = ''
    let activeCount = 0
    preparePager(result.totalPages)
    for (let row of result.items) {
        if (row.active) activeCount++
        content += ` <tr onclick="setSelected(${row.id}, this)" class='SEL'>
            <td>${row.type_form}</td>
            <td>${new Date(row.created_at).toLocaleString()}</td>
            <td>${row.fio}</td>
            <td>${row.email}</td>
            <td style="min-width: 150px">${row.phone}</td>
            
            <td>${row.city}</td>
            <td>${row.mark_model_year}</td>
            <td>${row.address}</td>
             <td>${row.credit}</td>
            <td><a href="${row.link}"> ${row.link.length>10? row.link.slice(0, 30)+'...':''} </a> </td>
            
            <td><input style="pointer-events: none" type="checkbox" ${row.advertising === 1 ? 'checked' : ''}></td>
            <td style="min-width: 80px"><input style="pointer-events: none" type="checkbox" ${row.concent === 1 ? 'checked' : ''}></td>
        </tr>`
    }

    let article_table = document.querySelector('#bd_table_1')
    article_table.innerHTML = `<table class="admin_table">
        <tr style="background: #dddddd">
            <th>Форма</th>  
            <th>Дата</th> 
            <th>ФИО</th>
            <th>email</th>            
            <th>телефон</th>
            <th>город</th>
            <th>Марка, модель, год</th>            
            <th>адрес</th>
            <th>кредит</th>
            <th>ссылка</th>
            <th>Согласие на рекламную коммуникацию</th>
            <th>Согласие на обработку ЛД</th>
        </tr>
        ${content}
    </table>`

}



window.setSelected = function (val, self) {
    let SEL = document.querySelectorAll('.SEL')
    SEL.forEach(el => el.classList.remove('selected'))
    self.classList.add('selected')
    selectedField = val
}












