import {
    api_getHistory,
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
    pageSize:10,
    city: ''
}

// Создаем объект параметров
const search = new URLSearchParams(location.href);
// Получаем значение переменной page
const page = search.get('page'); // вернет "3"
if(page) params.page = page


api_getHistory(showHistory_forms, params)

function showHistory_forms(result) {
    console.log('result = ',result.items[0])
    let content = ''
    let activeCount = 0
    preparePager(result.totalPages)
    for (let row of result.items) {
        if (row.active) activeCount++
        content += ` <tr onclick="setSelected(${row.id}, this)" class='SEL'>
            <td style="width: 50px;">${new Date(row.date).toLocaleString()}</td>
            <td>${row.count}</td>
            <td style="column-count: 3"><small>${row.carsPerDay.replaceAll(',',',<br>')}</small></td>
            
        </tr>`
    }

    let article_table = document.querySelector('#history_table')
    article_table.innerHTML = `<table class="admin_table">
        <tr style="background: #dddddd">
            <th>Дата</th> 
            <th>Кол-во</th>            
            <th>авто</th>
           
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












