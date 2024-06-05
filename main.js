let currentUser = null;

function showRegisterForm() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('movingButtonArea').style.display = 'none';
    document.getElementById('authOptions').style.display = 'none';
    document.getElementById('pageTitle').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('movingButtonArea').style.display = 'none';
    document.getElementById('authOptions').style.display = 'none';
    document.getElementById('pageTitle').style.display = 'none';
}

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(username + '_password')) {
        alert('Це ім\'я користувача вже зареєстроване!');
    } else if (username && password) {
        localStorage.setItem(username + '_password', password);
        alert('Реєстрація успішна! Тепер увійдіть.');
        showLoginForm();
    } else {
        alert('Будь ласка, введіть ім\'я користувача та пароль!');
    }
}

function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    const savedPassword = localStorage.getItem(loginUsername + '_password');

    if (savedPassword === loginPassword) {
        currentUser = loginUsername;
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('movingButtonArea').style.display = 'block';
        document.getElementById('userDisplayName').textContent = currentUser;
        document.title = currentUser;
    } else {
        alert('Неправильне ім\'я користувача або пароль!');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('movingButtonArea').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('authOptions').style.display = 'block';
    document.getElementById('pageTitle').style.display = 'block';
    document.title = 'Реєстрація, логін та переміщення кнопки';
}

function moveButton() {
    const button = document.getElementById('movingButton');
    const container = document.querySelector('.container');

    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}
