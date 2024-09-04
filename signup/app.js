let form = document.getElementById('form');
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');
const signup_btn = document.getElementById('signup_btn');

userEmail.addEventListener('click', (e) => {
    e.preventDefault();

    form.classList.add('form1');
    userPassword.removeAttribute('disabled');
})

userPassword.addEventListener('click', (e) => {
    e.preventDefault();

    signup_btn.removeAttribute('disabled');
})