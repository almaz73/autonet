import {api_createPromo, api_deletePromo, api_getPromo, api_savePromo, api_uploadPhoto} from "@/js/apibase_admin.js";
import {checkAuth} from '@/js/auth-service.js';

checkAuth(val => {
    // Если нет токена перебрасываем на авторизацию
    if (!val) window.location.href = 'login.html?redirect=promo.html';
})


let datas = []
let dirties = [] // список измененных

const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeBtn");

window.onlyNumber = (field => field.value = parseInt(field.value))
window.toDirty = function (id, val) {
    dirties.push(id)
    if (val === undefined) document.querySelector('.buttons').classList.add('dirty')
    else {
        document.querySelector('.buttons').classList.remove('dirty')
        dirties = []
    }
}

window.changedFiled = function (id, type, value) {
    let row = datas.find(row => row.id === id)
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
    toDirty(id)
}

api_getPromo(showPromo)

function showPromo(result) {
    datas = result
    let content = ''
    for (let row of result) {
        content += ` <tr>
            <td style="max-width: 700px; min-width: 105px"> ${row.name}
                <span class="remove-bt" onclick="deletePromo(${row.id})">❌</span>
                <span class="remove-bt" onclick="editPromo(${row.id})">✎</span>
            </td>
            <td><img style="width: 25px" class="${row.photo278 && row.photo585 && row.photo1200 ? '' : 'hidden-img'}" src="/pub_promo/${row.photo278}" /></td>
            <td><input type="checkbox" ${row.onMain === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'onMain', this.checked)"></td>
            <td > <input value="${row.priority}" onchange="onlyNumber(this); changedFiled(${row.id}, 'priority', this.value)"/></td>
            <td><input type="checkbox" ${row.active === 1 ? 'checked' : ''} onchange="changedFiled(${row.id}, 'active',this.checked)"></td>
        </tr>`
    }

    let promo_table = document.querySelector('#promo_table_1')
    let promo_table2 = document.querySelector('#promo_table_2')
    promo_table.innerHTML = `<table class="admin_table">
        <tr>
            <th> Название</th>
            <th></th>
            <th style="white-space: nowrap"> На главной</th>
            <th> Порядок</th>
            <th> Актив</th>
        </tr>
        ${content}
    </table>`

    promo_table2.innerHTML = `<table class="admin_table">
        <tr style="opacity: 0; top: 40px">
            <th> Название</th>
            <th></th>
           <th style="white-space: nowrap"> На главной</th>
            <th> Порядок</th>
            <th> Актив</th>
        </tr>
        ${content}
    </table>`
}


function prepareModal(id) {
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

closeBtn.onclick = () => modal.close();

window.logoutExit = async function () {
    localStorage.removeItem('admin_token')
    location.reload()
}

window.cancelPromo = function () {
    api_getPromo(showPromo)
}

window.deletePromo = function (id) {
    if (confirm("Вы уверены, что хотите удалить?")) {
        api_deletePromo(id, res => {
            api_getPromo(showPromo)
        })
    }
}

window.editPromo = function (id) {
    prepareModal(id)
    dirties = [id]

    if (id) {
        let row = datas.find(row => row.id === id)
        document.querySelector('#qw0').value = row.name
        document.querySelector('#qw1').checked = row.onMain
        document.querySelector('#qw2').value = row.priority
        document.querySelector('#qw3').checked = row.active
        document.querySelector('#qw4').value = row.description

        console.log('row = ', row)
        if (row.photo278) setPhoto(row.photo278)
        if (row.photo585) setPhoto(row.photo585)
        if (row.photo1200) setPhoto(row.photo1200)
    }
}

function getModalFields() {
    return {
        name: document.querySelector('#qw0').value,
        onMain: document.querySelector('#qw1').checked,
        priority: +document.querySelector('#qw2').value,
        active: document.querySelector('#qw3').checked,
        description: document.querySelector('#qw4').value,
        photo278: document.querySelector('#_278').alt,
        photo585: document.querySelector('#_585').alt,
        photo1200: document.querySelector('#_1200').alt,
    }
}

window.saveNewPromoModal = function () {
    let params = getModalFields()

    api_createPromo(params, val => {
        modal.close()
        api_getPromo(showPromo)
    })

    toDirty(null, 'clean')
}

window.savePromoModal = function (withoutClose) {
    let data = getModalFields()
    data.id = dirties[0]

    api_savePromo(data, val => {
        if (!withoutClose) modal.close()
        api_getPromo(showPromo)
    })
}

window.savePromo = function () {
    if (confirm("Вы уверены, что хотите сохранить изменения?")) {

        dirties.forEach(id => {
            let data = datas.find(el => el.id === id)
            api_savePromo(data, val => {
                api_getPromo(showPromo)
            })
        })
        toDirty(null, 'clean')
    }
}

function setPhoto(link) {
    if (link.includes('v_b')) {
        document.querySelector('#_278').src = '/pub_promo/' + link
        document.querySelector('#_278').alt = link
    }
    if (link.includes('h_b')) {
        document.querySelector('#_585').src = '/pub_promo/' + link
        document.querySelector('#_585').alt = link
    }
    if (link.includes('h_m')) {
        document.querySelector('#_1200').src = '/pub_promo/' + link
        document.querySelector('#_1200').alt = link
    }
}

//// работа с фотками
window.uploadPhoto = function (type) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accept only images
    const id = dirties[0]


    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        if (file.name.indexOf(type) == -1) return alert('Файл должен называться ' + type + '.jpg');
        api_uploadPhoto({file, name: type + '_' + id}, res => {
            // сохраним в базе
            const url = res.photoUrl
            const data = datas.find(el => el.id === id)
            if (url.includes('v_b')) data.photo278 = url
            if (url.includes('h_b')) data.photo585 = url
            if (url.includes('h_m')) data.photo1200 = url

            // отобразим
            setPhoto(url)
            window.savePromoModal('withoutClose')
        })
    });

    // Trigger the file selection dialog
    fileInput.click();
}

window.codGeneration = function () {
    console.log('datas = ',datas)
    let dep = datas.map(el=>parseInt(el.description))
    console.log('dep = ',dep)
    let max = Math.max(...dep)
    console.log('max = ',max)
    document.querySelector('#qw4').value = ++max
}

window.changeCod = function (obj) {
    obj.value = parseInt(obj.value)
}






