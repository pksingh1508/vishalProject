// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwUAVTneorZ3Vym6vAc4EY-m_Imj2CO0U",
    authDomain: "foodordering-8e351.firebaseapp.com",
    projectId: "foodordering-8e351",
    storageBucket: "foodordering-8e351.appspot.com",
    messagingSenderId: "1059225881588",
    appId: "1:1059225881588:web:af9579a10ac7b3177f87a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;