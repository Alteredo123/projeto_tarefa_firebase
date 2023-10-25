// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjRzpCE8EzVGpRnesvX8A0yUnQQRW7n4Y",
  authDomain: "projetotarefa-fa407.firebaseapp.com",
  projectId: "projetotarefa-fa407",
  storageBucket: "projetotarefa-fa407.appspot.com",
  messagingSenderId: "173894407281",
  appId: "1:173894407281:web:f7ebb6232c18e5a4c537d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)