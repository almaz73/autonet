import {
    api_createArticle,
    api_deleteArticle,
    api_getArticle,
    api_saveArticle,
    set_panel,
    api_uploadPhotoArticle
} from "./apibase_admin.js";
import {checkAuth} from './auth-service.js';


checkAuth(val => {
    // Если нет токена перебрасываем на авторизацию
    if (!val) window.location.href = 'login.html?redirect=article.html';
})
set_panel('article.html')
window.logoutExit = async function () {
    localStorage.removeItem('admin_token')
    location.reload()
}


let datas = []
let dirties = [] // список измененных
let selectedField = null

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



api_getArticle(showArticles)

function showArticles(result) {
    datas = result
    let content = ''
    let activeCount = 0
    let mainCount = 0
    for (let row of result) {
        if (row.active) activeCount++
        if (row.onMain && row.active) mainCount++
        content += ` <tr onclick="setSelected(${row.id}, this)" class='SEL'>
            <td style="max-width: 700px; min-width: 105px">
             <a href="/article/${row.code}" style="min-width:150px; padding-right: 20px; font-size:10px">${row.code}</a>
             ${row.name}
                <span class="remove-bt" onclick="deleteArticle(${row.id})">❌</span>
                <span class="remove-bt" onclick="editArticle(${row.id})">✎</span>
            </td>
            <td><img style="width: 25px" class="${row.photo278 && row.photo585 && row.photo1200 ? '' : 'hidden-img'}" src="/pub_article/${row.photo278}" /></td>
            <td><input type="checkbox" ${row.onMain === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'onMain', this.checked)"></td>
            <td><input value="${row.priority}" oninput="onlyNumber(this);changedFiled(${row.id}, 'priority', this.value)"/></td>
            <td><input type="checkbox" ${row.active === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'active',this.checked)"></td>
        </tr>`
    }

    let article_table = document.querySelector('#article_table_1')
    let article_table2 = document.querySelector('#article_table_2')
    article_table.innerHTML = `<table class="admin_table">
        <tr>
            <th> Название</th>
            <th></th>
            <th style="white-space: nowrap"> На главной</th>
            <th> Порядок</th>
            <th> Актив</th>
        </tr>
        ${content}
    </table>`

    article_table2.innerHTML = `<table class="admin_table">
        <tr style="opacity: 0; top: 40px">
            <th> Название</th>
            <th></th>
           <th style="white-space: nowrap"> На главной</th>
            <th> Порядок</th>
            <th> Актив</th>
        </tr>
        ${content}
    </table>`

    document.querySelector('.summ').innerHTML = `Активных акций - ${activeCount}, на главной - ${mainCount}, выключенных - ${result.length - activeCount}`
}

window.saveNewArticleModal = function () {
    let params = getModalFields()

    if (datas.find(el => !el.name)) return alert('В списке есть акция без названия, используйте')
    api_createArticle(params, val => {
        api_getArticle(showArticle)
        window.editArticle(val.id)
        codGeneration()
        toDirty(null, 'clean')
    })
}

function showArticle(result) {
    datas = result
    let content = ''
    let activeCount = 0
    let mainCount = 0
    for (let row of result) {
        if (row.active) activeCount++
        if (row.onMain && row.active) mainCount++
        content += ` <tr onclick="setSelected(${row.id}, this)" class='SEL'>
            <td style="max-width: 700px; min-width: 105px">
             <a href="/article/${row.code}" style="min-width:150px; padding-right: 20px; font-size:10px">${row.code}</a>
             ${row.name}
                <span class="remove-bt" onclick="deleteArticle(${row.id})">❌</span>
                <span class="remove-bt" onclick="editArticle(${row.id})">✎</span>
            </td>
            <td><img style="width: 25px" class="${row.photo278 && row.photo585 && row.photo1200 ? '' : 'hidden-img'}" src="/pub_article/${row.photo278}" /></td>
            <td><input type="checkbox" ${row.onMain === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'onMain', this.checked)"></td>
            <td><input value="${row.priority}" oninput="onlyNumber(this);changedFiled(${row.id}, 'priority', this.value)"/></td>
            <td><input type="checkbox" ${row.active === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'active',this.checked)"></td>
        </tr>`
    }

    let article_table = document.querySelector('#article_table_1')
    let article_table2 = document.querySelector('#article_table_2')
    article_table.innerHTML = `<table class="admin_table">
        <tr>
            <th> Название</th>
            <th></th>
            <th style="white-space: nowrap"> На главной</th>
            <th> Порядок</th>
            <th> Актив</th>
        </tr>
        ${content}
    </table>`

    article_table2.innerHTML = `<table class="admin_table">
        <tr style="opacity: 0; top: 40px">
            <th> Название</th>
            <th></th>
           <th style="white-space: nowrap"> На главной</th>
            <th> Порядок</th>
            <th> Актив</th>
        </tr>
        ${content}
    </table>`

    document.querySelector('.summ').innerHTML = `Активных акций - ${activeCount}, на главной - ${mainCount}, выключенных - ${result.length - activeCount}`
}

function getModalFields() {
    return {
        name: document.querySelector('#qw0').value,
        onMain: document.querySelector('#qw1').checked,
        priority: +document.querySelector('#qw2').value,
        active: document.querySelector('#qw3').checked,
        code: document.querySelector('#qw4').value,
        photo278: document.querySelector('#_278').alt,
        photo585: document.querySelector('#_585').alt,
        photo1200: document.querySelector('#_1200').alt,
    }
}

window.saveNewArticleModal = function () {
    let params = getModalFields()

    if (datas.find(el => !el.name)) return alert('В списке есть акция без названия, используйте')
    api_createArticle(params, val => {
        api_getArticle(showArticle)
        window.editArticle(val.id)
        codGeneration()
        toDirty(null, 'clean')
    })
}

window.setSelected = function (val, self) {
    let SEL = document.querySelectorAll('.SEL')
    SEL.forEach(el => el.classList.remove('selected'))
    self.classList.add('selected')
    selectedField = val
}

window.codGeneration = function () {
    let dep = datas.map(el => el.code && parseInt(el.code))
    let max = Math.max(...dep)
    if (max === -Infinity) max = 0
    document.querySelector('#qw4').value = ++max
}
function clearPanel() {
    document.querySelector('#qw0').value = ''
    document.querySelector('#qw1').checked = false
    document.querySelector('#qw2').value = ''
    document.querySelector('#qw3').checked = false
    document.querySelector('#qw4').value = ''
    document.querySelector('#_278').src = ''
    document.querySelector('#_585').src = ''
    document.querySelector('#_1200').src = ''
    document.querySelector('#_278').alt = ''
    document.querySelector('#_585').alt = ''
    document.querySelector('#_1200').alt = ''
}
function prepareModal(id) {
    clearPanel()

    let type = document.querySelector('.type')
    if (id) {
        type.classList.add('edit')
        type.classList.remove('new')
    } else {
        type.classList.remove('edit')
        type.classList.add('new')
    }
    modal.showModal();
}

window.editArticle = function (id) {
    prepareModal(id)
    dirties = [id]

    if (id) {
        let row = datas.find(row => row.id === id)
        if (row) {
            document.querySelector('#qw0').value = row.name
            document.querySelector('#qw1').checked = row.onMain
            document.querySelector('#qw2').value = row.priority
            document.querySelector('#qw3').checked = row.active
            document.querySelector('#qw4').value = row.code
            if (row.photo278) setPhoto(row.photo278)
            if (row.photo585) setPhoto(row.photo585)
            if (row.photo1200) setPhoto(row.photo1200)

            if (!row.code) codGeneration()
        }
    }
}

window.saveArticleModal = function (withoutClose) {
    let data = getModalFields()
    if (!data.name) return alert('Поле "Название" обязателен для заполнения')
    data.id = dirties[0]

    api_saveArticle(data, val => {
        if (!withoutClose) modal.close()
        api_getArticle(showArticle)
        clearPanel()
    })
}

window.deleteArticle = function (id) {
    if (confirm("Вы уверены, что хотите удалить?")) {
        api_deleteArticle(id, res => {
            api_getArticle(showArticle)
        })
    }
}

//// работа с фотками

function setPhoto(link) {
    if (link.includes('v_b')) {
        document.querySelector('#_278').src = '/pub_article/' + link
        document.querySelector('#_278').alt = link
    }
    if (link.includes('h_b')) {
        document.querySelector('#_585').src = '/pub_article/' + link
        document.querySelector('#_585').alt = link
    }
    if (link.includes('h_m')) {
        document.querySelector('#_1200').src = '/pub_article/' + link
        document.querySelector('#_1200').alt = link
    }
}

window.uploadPhoto = function (type) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accept only images
    const id = dirties[0]


    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        // if (file.name.indexOf(type) == -1) return alert('Файл должен называться ' + type);
        api_uploadPhotoArticle({file, name: type + '_' + id}, res => {
            // сохраним в базе
            const url = res.photoUrl
            const data = datas.find(el => el.id === id)
            if (url.includes('v_b')) data.photo278 = url
            if (url.includes('h_b')) data.photo585 = url
            if (url.includes('h_m')) data.photo1200 = url

            // отобразим
            setPhoto(url)
            window.saveArticleModal('withoutClose')
        })
    });

    // Trigger the file selection dialog
    fileInput.click();
}





