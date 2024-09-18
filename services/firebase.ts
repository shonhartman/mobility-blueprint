import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBbr0GxlugyKnCv-3fAoGJyY5L-YUjGPeA",
    authDomain: "mobility-blueprint.firebaseapp.com",
    projectId: "mobility-blueprint",
    storageBucket: "mobility-blueprint.appspot.com",
    messagingSenderId: "1015643947870",
    appId: "1:1015643947870:web:fff9534f73dc5d8e7a45cf",
    measurementId: "G-290KMF9NQG"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);