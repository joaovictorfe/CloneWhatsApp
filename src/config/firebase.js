// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBY7iymC61d4ZXlBtS1z7YcaQR_oX1fL5A',
    authDomain: 'clonewhatsapp-af582.firebaseapp.com',
    projectId: 'clonewhatsapp-af582',
    storageBucket: 'clonewhatsapp-af582.appspot.com',
    messagingSenderId: '583797469341',
    appId: '1:583797469341:web:b42632ba6b50268d9fa474',
    measurementId: 'G-0MK1F1BFBB',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
