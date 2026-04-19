import {api_createPromo, api_deletePromo, api_getPromo, api_savePromo} from "@/js/apibase_admin.js";
import { checkAuth } from '@/js/auth-service.js';

checkAuth(val=>{
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

function showPromo(data) {
    datas = data
    let content = ''
    for (let row of data) {
        content += ` <tr>
            <td style="max-width: 700px"> ${row.name}
                <span class="remove-bt" onclick="deletePromo(${row.id})">❌</span>
                <span class="remove-bt" onclick="editPromo(${row.id})">✎</span>
            </td>
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
            <th> На главной</th>
            <th> Место в показе</th>
            <th> Включено</th>
        </tr>
        ${content}
    </table>`

    promo_table2.innerHTML = `<table class="admin_table">
        <tr style="opacity: 0; top: 40px">
            <th> Название</th>
            <th> На главной</th>
            <th> Место в показе</th>
            <th> Включено</th>
        </tr>
        ${content}
    </table>`
}


function prepareModal(id) {
    document.querySelector('#qw0').value = ''
    document.querySelector('#qw1').checked = false
    document.querySelector('#qw2').value = ''
    document.querySelector('#qw3').checked = false

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
    }
}

function getModalFields() {
    return {
        name: document.querySelector('#qw0').value,
        onMain: document.querySelector('#qw1').checked,
        priority: +document.querySelector('#qw2').value,
        active: document.querySelector('#qw3').checked
    }
    //          photoBig,
    //         photoMiddle,
    //         photoSmall,
    //         photoSM_ver,
    //         photoSM_hor
}

window.saveNewPromoModal = function () {
    let params = getModalFields()

    api_createPromo(params, val => {
        modal.close()
        api_getPromo(showPromo)
    })

    toDirty(null, 'clean')
}

window.savePromoModal = function (){
    let data = getModalFields()
    data.id = dirties[0]
    api_savePromo(data, val => {
        modal.close()
        api_getPromo(showPromo)
    })
}

window.savePromo = function () {
    if (confirm("Вы уверены, что хотите сохранить изменения?")) {
        console.log('dirties = ', dirties)

        dirties.forEach(id => {
            let data = datas.find(el => el.id === id)
            api_savePromo(data, val => {
                api_getPromo(showPromo)
            })
        })
        toDirty(null, 'clean')
    }
}

//// работа с фотками
window.uploadPhoto = function(type) {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // Accept only images
    
    console.log('fileInput = ',fileInput)

    // When a file is selected, upload it
    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (!file) return;
        
        console.log('file = ',file)

        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('photo', file);

        let path = 'savePhoto.php'
        if (type === 'banner') {
            if (!['01.jpg', '02.jpg', '03.jpg', '04.jpg'].includes(file.name)) return alert('Карусель поддерживает только 4 варианта файла: 01.jpg, 02.jpg, 03.jpg, 04.jpg, Переименуйте если хотите поменять один из них  ')
            console.log('file = ', file)
            path = 'saveBanner.php'
        }
        // todo
        // Send the file to the server
        /*fetch(path, {// Changed from save.php to savePhoto.php
            method: 'POST',
            body: formData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    if (currentId) {
                        let elem = goods.models.find(el => Object.entries(el)[0][0] === currentId)[currentId];
                        if (currentGal_img !== undefined) {
                            elem.photos.all.splice(1, 0, 'tovar/' + data.filename)
                            document.querySelector('[data-dismiss="modal"]').click()
                            document.getElementById('my-dialog').closest('dialog').close()
                        } else if (elem) {
                            elem.img = 'tovar/' + data.filename;
                            document.getElementById('my-dialog').closest('dialog').close()
                            show();
                        }
                    }
                    if (type === 'banner') location.reload()

                } else {
                    alert('Ошибка при загрузке фото:' + (data.error || 'Неизвестная ошибка'));
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                alert('Произошла ошибка при загрузке фото: ' + error.message);
            });
        */
    });

    // Trigger the file selection dialog
    fileInput.click();
}






