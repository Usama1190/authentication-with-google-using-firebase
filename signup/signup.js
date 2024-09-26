import { auth, createUserWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";


let formField = document.querySelectorAll('form input');

const [ userEmail, userPassword, userConfirmPassword ] = formField;

let signup_btn = document.getElementById('signup_btn');

let form = document.getElementById('form');

let loader = document.getElementById('loader');
loader.style.display = 'none';

const signUp = () => {
    event.preventDefault();
    // signup_btn.innerText = 'Loading...';
    loader.style.display = 'block';
    form.style.opacity = '0.3';

    if(userPassword.value === userConfirmPassword.value) {

        createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            // signup_btn.innerText = 'Signup';
            loader.style.display = 'none';
            const user = userCredential.user;

            warning.innerText = '';

            Toastify({
                text: 'Signup Successfully!',
                duration: 3000
            }).showToast();
            
            // ...
        })
        .catch((error) => {
            // signup_btn.innerText = 'Signup';
            loader.style.display = 'none';
            form.style.opacity = '1';

            const errorCode = error.code;
            const errorMessage = error.message;

            warning.innerText = 'invalid input field!';

            Toastify({
                text: `${errorMessage}`,
                duration: 3000
            }).showToast();
            
            // ..
        });
    }
    else {
        warning.innerText = "Confirmed password does't matched!";
        loader.style.display = 'none';
        form.style.opacity = '1';
    }
}

signup_btn.addEventListener('click', signUp);


onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});


function focusEmail() {
    userEmail.classList.add('input');
    alert('hello!')
}