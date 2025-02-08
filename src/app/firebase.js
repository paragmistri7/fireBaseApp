import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyDfWHkLepcIC8bZuj-G-Ta1i6RlWZj3dc8",
    authDomain: "my-book-a3ef2.firebaseapp.com",
    projectId: "my-book-a3ef2",
    storageBucket: "my-book-a3ef2.firebasestorage.app",
    messagingSenderId: "994704452222",
    appId: "1:994704452222:web:28ad9f74b75a76a289c62f",
    measurementId: "G-LD7FS8TLNV",
    databaseURL : "https://my-book-a3ef2-default-rtdb.firebaseio.com"
};
  
export const app = initializeApp(firebaseConfig) 