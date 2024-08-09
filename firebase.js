// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signOut, GoogleAuthProvider  , sendPasswordResetEmail  , createUserWithEmailAndPassword, signInWithPopup ,  signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDAIkMK_AvH8SebTlf60qiG8w-S2l-kgko",
    authDomain: "authentication-with-20222.firebaseapp.com",
    projectId: "authentication-with-20222",
    storageBucket: "authentication-with-20222.appspot.com",
    messagingSenderId: "407379175103",
    appId: "1:407379175103:web:bcdb3f9c0906724bf6480a",
    measurementId: "G-TCCQM7JTKZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider  , signOut, sendPasswordResetEmail  ,createUserWithEmailAndPassword, signInWithPopup ,  signInWithEmailAndPassword, onAuthStateChanged };