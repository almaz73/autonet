import {
    api_getHistoryPeriod,
    set_panel
} from "./apibase_admin.js";
import {checkAuth} from './auth-service.js';
import {preparePager} from '@/js/pagination.js'


checkAuth(val => {
    // Если нет токена перебрасываем на авторизацию
    if (!val) window.location.href = 'login.html?redirect=history.html';
})
set_panel('history.html')
window.logoutExit = async function () {
    localStorage.removeItem('admin_token')
    location.reload()
}

let selectedField = null

let params={
    page:1,
    pageSize:15,
    city: ''
}

// Создаем объект параметров
const search = new URLSearchParams(location.href);
// Получаем значение переменной page
const page = search.get('page'); // вернет "3"
if(page) params.page = page


api_getHistoryPeriod(result=>{
    let content = ''
    preparePager(result.totalPages)
    for (let row of result.items) {
        content += ` <tr  class='SEL'>
            <td>${row.car}</td>
            <td style="width: 120px;">${row.startedDate?new Date(row.startedDate).toLocaleString():'-'}</td>
            <td style="width: 120px;">${new Date(row.endDate).toLocaleString()}</td>
            <td>${row.days}</td>            
        </tr>`
    }

    let article_table = document.querySelector('#history_table_period')
    article_table.innerHTML = `<table class="admin_table">
        <tr style="background: #dddddd">
            <th>Авто</th>
            <th>Дата добавления</th>
            <th>Дата удаления</th> 
            <th>Дни</th>            
        </tr>
        ${content}
    </table>`
},params)




window.setSelected = function (val, self) {
    let SEL = document.querySelectorAll('.SEL')
    SEL.forEach(el => el.classList.remove('selected'))
    self.classList.add('selected')
    selectedField = val
}












