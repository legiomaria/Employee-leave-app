
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhOJZa4JS76dAg8ZeqP-Eopoi72Ui34aw",
  authDomain: "employee-leave-ba38b.firebaseapp.com",
  projectId: "employee-leave-ba38b",
  storageBucket: "employee-leave-ba38b.appspot.com",
  messagingSenderId: "296409067946",
  appId: "1:296409067946:web:69efa722443834e1863bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

