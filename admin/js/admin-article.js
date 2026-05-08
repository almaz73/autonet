import {
    api_createArticle,
    api_deleteArticle,
    api_getArticle,
    api_saveArticle,
    api_uploadPhotoArticle,
    set_panel
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
    let isPhoto = !!row.photo

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


api_getArticle(showArticle)

function showArticle(result) {
    datas = result
    let content = ''
    let activeCount = 0
    for (let row of result) {
        if (row.active) activeCount++
        content += ` <tr onclick="setSelected(${row.id}, this)" class='SEL'>
            <td style="max-width: 700px; min-width: 105px">
             <a href="/news/${row.code}" style="min-width:150px; padding-right: 20px; font-size:10px">${row.code}</a>
             ${row.name}
                <span class="remove-bt" onclick="deleteArticle(${row.id})">❌</span>
                <span class="remove-bt" onclick="editArticle(${row.id})">✎</span>
            </td>
            <td><img style="width: 100px" class="${row.photo ? '' : 'hidden-img'}" src="/pub_article/${row.photo}" /></td>
            <td><input value="${row.priority}" oninput="onlyNumber(this);changedFiled(${row.id}, 'priority', this.value)"/></td>
            <td><input type="checkbox" ${row.active === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'active',this.checked)"></td>
        </tr>`
    }

    let article_table = document.querySelector('#article_table_1')
    article_table.innerHTML = `<table class="admin_table">
        <tr style="background: #dddddd">
            <th> Название</th>
            <th></th>
            <th title="по умолчанию все должны быть 10"> Порядок</th>
            <th> На сайте</th>
        </tr>
        ${content}
    </table>`


    document.querySelector('.summ').innerHTML = `Всего - ${activeCount}, не опубликованныхf - ${result.length - activeCount}`
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


function getModalFields() {
    return {
        name: document.querySelector('#qw0').innerHTML,
        shortContent: document.querySelector('#qw10').innerHTML,
        content: document.querySelector('#qw11').innerHTML,
        priority: +document.querySelector('#qw2').value,
        active: document.querySelector('#qw3').checked,
        code: document.querySelector('#qw4').value,
        photo: document.querySelector('#_278').alt
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
    document.querySelector('#qw0').innerHTML = ''
    document.querySelector('#qw10').innerHTML = ''
    document.querySelector('#qw11').innerHTML = ''
    document.querySelector('#qw2').value = ''
    document.querySelector('#qw3').checked = false
    document.querySelector('#qw4').value = ''
    document.querySelector('#_278').src = ''
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
            document.querySelector('#qw0').innerHTML = row.name
            document.querySelector('#qw10').innerHTML = row.shortContent
            document.querySelector('#qw11').innerHTML = row.content
            document.querySelector('#qw2').value = row.priority
            document.querySelector('#qw3').checked = row.active
            document.querySelector('#qw4').value = row.code
            if (row.photo) setPhoto(row.photo)

            if (!row.code) codGeneration()
        }
    }
}

window.saveArticleModal = function (withoutClose) {
    let data = getModalFields()
    if (!data.name) return alert('Поле "Название" обязателен для заполнения')
    if (!data.content) return alert('Поле "Содержимое статьи" обязателен для заполнения')
    if (!data.shortContent) return alert('Поле "Краткий анонс" обязателен для заполнения')
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
    document.querySelector('#_278').src = '/pub_article/' + link
    document.querySelector('#_278').alt = link
}

window.uploadPhoto = function () {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accept only images
    const id = dirties[0]


    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        // if (file.name.indexOf(type) == -1) return alert('Файл должен называться ' + type);
        api_uploadPhotoArticle({file, name: 'news_' + id}, res => {
            // сохраним в базе
            const url = res.photoUrl
            const data = datas.find(el => el.id === id)

            data.photo = url

            // отобразим
            setPhoto(url)
            window.saveArticleModal('withoutClose')
        })
    });

    // Trigger the file selection dialog
    fileInput.click();
}


/// работа tiniMCE

// 3. Инициализация TinyMCE
console.log('bkLib = ',bkLib)
bkLib.onDomLoaded(function () {
    nicEditors.allTextAreas()
});


