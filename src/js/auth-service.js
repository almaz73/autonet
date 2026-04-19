// Simple authentication service
import {server} from "@/js/global-constants.js";

export function checkAuth(callback) {
    // In a real application, this would make an API call to check authentication
    // For now, we'll just check for a token in localStorage
    const token = localStorage.getItem('admin_token');
    
    if (token) {
        // Simulate API call
        setTimeout(() => callback(true), 100);
    } else {
        setTimeout(() => callback(false), 100);
    }
}

export async function login(credentials, callback) {
     await fetch(server +'/api/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
        },
        body: JSON.stringify({
            username: credentials.username,
            password: credentials.password
        })
    })
    .then(res => {
        if (!res.ok) throw new Error('Authentication failed');
        return res.json();
    })
    .then(data => {
        if (data && data.token) {
            localStorage.setItem('admin_token', data.token);
            callback({ success: true, token: data.token });
        } else {
            callback({ success: false, error: 'Неверный логин или пароль' });
        }
    })
    .catch(error => {
        callback({ success: false, error: 'Неверный логин или пароль' });
    });
}

// export function logout() {
//     // In a real application, this would invalidate the token on the server
//     fetch(server +'/api/auth/verify', {
//         method: 'POST',
//         credentials: 'include',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${localStorage.getItem('admin_token')}`
//         }
//     })
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Authentication failed');
//         }
//         return res.json();
//     })
//     .then(data => {
//         // Store token
//         localStorage.setItem('admin_token', data.token);
//         callback({ success: true, token: data.token });
//     })
//     .catch(error => {
//         callback({ success: false, error: 'Invalid credentials' });
//     });
// }