import { auth,  signInWithPopup , GoogleAuthProvider  ,  sendPasswordResetEmail  , signInWithEmailAndPassword, onAuthStateChanged } from "../firebase.js";

let formField = document.querySelectorAll('form input');

const [loginEmail, loginPassword] = formField;

let forgotPassword = document.getElementById('forgotPassword');

let warning = document.getElementById('warning');

let login_btn = document.getElementById('login_btn');
let form = document.getElementById('form');

let loader = document.getElementById('loader');
loader.style.display = 'none';


let loginWithGoogle = document.getElementById('loginWithGoogle');

const login = () => {
    event.preventDefault();

    // login_btn.innerText = 'Loading...';
    loader.style.display = 'block';
    form.style.opacity = '0.3';
    loginWithGoogle.style.opacity = '0.3';

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
        // Signed in 
        // login_btn.innerText = 'Login';
        loader.style.display = 'none';
        form.style.opacity = '1';
        loginWithGoogle.style.opacity = '1';

        const user = userCredential.user;
        console.log(user);
        
        // ...
        warning.innerText = '';

        Toastify({
            text: 'Login Successfully!',
            duration: 3000
        }).showToast();
    })
    .catch((error) => {
        // login_btn.innerText = 'Login';
        loader.style.display = 'none';
        form.style.opacity = '1';
        loginWithGoogle.style.opacity = '1';

        const errorCode = error.code;
        const errorMessage = error.message;

        warning.innerText = 'invalid input field';

        Toastify({
            text: `${errorMessage}`,
            duration: 3000
        }).showToast();
    });

    
}

login_btn.addEventListener('click', login);



const forgotPass = () => {
    loader.style.display = 'block';
    form.style.opacity = '0.3';
    loginWithGoogle.style.opacity = '0.3';
    sendPasswordResetEmail(auth, loginEmail.value)
    .then(() => {
        loader.style.display = 'none';
        form.style.opacity = '1';
        loginWithGoogle.style.opacity = '1';
        warning.innerText = 'Password send check email';
        Toastify({
            text: 'Password send check email!',
            duration: 3000
        }).showToast();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        loader.style.display = 'none';
        form.style.opacity = '1';
        loginWithGoogle.style.opacity = '1';

        warning.innerText = 'Enter email address!';
        Toastify({
            text: `${errorMessage}`,
            duration: 3000
        }).showToast();
    });
};

forgotPassword.addEventListener('click', forgotPass);


const provider = new GoogleAuthProvider();

const loginGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        
    });
    
}

loginWithGoogle.addEventListener('click', loginGoogle);


onAuthStateChanged(auth, (user) => {
    if (user) {
        window.location.href = '../dashboard/dashboard.html';
    }
});