import {server} from "@/js/global-constants.js";
import { checkAuth } from "./auth-service.js";

// Simple function to get the auth token from localStorage
function getAuthHeaders() {
    const token = localStorage.getItem('admin_token');
    return {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ''
    };
}

/*** Получение кол-во автомобилей разбитых по бренду. Отсортировано от большего к меньшему ***/
export function api_getPromo(callback) {
    let request = '/api/promo';
    const token = localStorage.getItem('admin_token');
    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    return fetch(server + request, {
        method: 'GET',
        headers: headers
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_savePromo(newRow, callback) {
    let request = '/api/promo/' + newRow.id
    // Check authentication before making API calls
    const token = localStorage.getItem('admin_token');
    if (!token) {
        // Redirect to login if no token is found
        window.location.href = '../admin/login.html?redirect=promo.html';
        return;
    }
    
    return fetch(server + request, {
        method: 'PUT', // Метод запроса
        headers: {
            'Content-Type': 'application/json;charset=utf-8', // Указываем формат данных
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}` // Добавляем токен авторизации
        },
        body: JSON.stringify(newRow) // Преобразуем объект в строку
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_createPromo(newRow, callback) {
    let request = '/api/promo'
    // Check authentication before making API calls
    const token = localStorage.getItem('admin_token');
    if (!token) {
        // Redirect to login if no token is found
        window.location.href = '../admin/login.html?redirect=promo.html';
        return;
    }
        
    return fetch(server + request, {
        method: 'POST', // Метод запроса
        headers: {
            'Content-Type': 'application/json', // Указываем формат данных
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}` // Добавляем токен авторизации
        },
        body: JSON.stringify(newRow) // Преобразуем объект в строку
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_deletePromo(id, callback) {
    let request = '/api/promo/' + id

    // Check authentication before making API calls
    const token = localStorage.getItem('admin_token');
    if (!token) {
        // Redirect to login if no token is found
        window.location.href = '../admin/login.html?redirect=promo.html';
        return;
    }
    
    return fetch(server + request, {
        method: 'DELETE', // Метод запроса
        headers: {
            'Content-Type': 'application/json;charset=utf-8', // Указываем формат данных
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}` // Добавляем токен авторизации
        },
    }).then(res => {
        if (!res.ok) console.log(`HTTP error! status: ${res.status}`)
        return res.json();
    })
        .then(res => callback(res))
        .catch(error => console.error('Произошла ошибка:', error));
}

export function api_uploadPhoto(file, callback) {
    const token = localStorage.getItem('admin_token');
    if (!token) {
        window.location.href = '../admin/login.html?redirect=promo.html';
        return;
    }

    // Create FormData to send the photo
    const formData = new FormData();
    formData.append('id', file.name);
    formData.append('photo', file);

    return fetch(server + '/api/promo/upload', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: formData
    }).then(res => {
        if (!res.ok) {
            console.log(`HTTP error! status: ${res.status}`);
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then(data => {
        // console.log('Photo uploaded successfully:', data);
        callback(data);
    })
    .catch(error => {
        console.error('Error uploading photo:', error);
    });
} 