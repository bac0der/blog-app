// Firebase kutubxonalarini import qilish
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyDDVBfDdaGEAwoRVGvZ5alZQwf4gxs6GVA",
  authDomain: "myblog-2dff5.firebaseapp.com",
  projectId: "myblog-2dff5",
  storageBucket: "myblog-2dff5.firebasestorage.app",
  messagingSenderId: "1033919901151",
  appId: "1:1033919901151:web:58876d7caf54b554c5286a",
  measurementId: "G-004T3L6GXX"
};


// Firebase-ni ishga tushirish
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
