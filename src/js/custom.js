const currentYear = new Date().getFullYear();
document.getElementById('copyright-text').innerHTML =`Copyright © ${currentYear} Sreejith Ezhakkad. All rights reserved`

const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

if(loginButton){
    loginButton.addEventListener('click', () => {
        window.location = "/login.html"; 
    });
}

if(registerButton){
    registerButton.addEventListener('click', () => {
        window.location = "/register.html"; 
    });
}
const appName = import.meta.env.VITE_APP_NAME
document.title = appName
