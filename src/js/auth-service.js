// Simple authentication service
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

export function login(credentials, callback) {
    console.log('111 = ',111)
    // In a real application, this would make a login API call
    // For now, we'll just store a token in localStorage if username and password are 'admin'
    if (credentials.username === 'admin' && credentials.password === 'admin') {
        // Simulate API call
        setTimeout(() => {
            const token = 'fake_admin_token_' + Date.now();
            localStorage.setItem('admin_token', token);
            callback({ success: true, token });
        }, 500);
    } else {
        setTimeout(() => {
            callback({ success: false, error: 'Invalid credentials' });
        }, 500);
    }
}

export function logout() {
    // In a real application, this would invalidate the token on the server
    localStorage.removeItem('admin_token');
}