import {
    api_createPromo,
    api_deletePromo,
    api_getPromo,
    api_savePromo,
    api_uploadPhoto,
    set_panel
} from "./apibase_admin.js";
import {checkAuth} from './auth-service.js';


checkAuth(val => {
    // Если нет токена перебрасываем на авторизацию
    if (!val) window.location.href = 'login.html?redirect=articles.html';
})
set_panel('articles.html')
window.logoutExit = async function () {
    localStorage.removeItem('admin_token')
    location.reload()
}


let datas = []

const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");


window.changedFiled = function (id, type, value) {
    toDirty(id)
    let row = datas.find(row => row.id === id)
    let isPhoto = row.photo278 && row.photo585 && row.photo1200

    if (!isPhoto && type !== 'priority') return alert('Необходимо прикрепить фотографии')

    switch (type) {
        case 'onMain':
            row.onMain = value
            break
        case 'priority':
            row.priority = parseInt(value)
            break
        case 'active':
            row.active = value
            break
    }
}


closeBtn.onclick = () => modal.close();













