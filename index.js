document.addEventListener('DOMContentLoaded', function () {
    var popupContainer = document.getElementById('popupContainer');
    var redirectButton = document.getElementById('redirectButton');

 
    popupContainer.style.display = 'flex';

    
    redirectButton.addEventListener('click', function () {
        
        window.location.href = 'otra_pagina.html';
    });
});

function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username && password) {
        
        const uniqueCode = generateUniqueCode();

        
        document.getElementById('registrationContainer').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'block';
        document.getElementById('loggedInUsername').innerText = username;
        document.getElementById('loggedInCode').innerText = uniqueCode;
    } else {
        alert('Por favor, completa todos los campos.');
    }
}

function generateUniqueCode() {
    
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}

function redirectToLogin() {
    
    window.location.href = 'inicio.html';
}
