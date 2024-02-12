import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-2fbe5.firebaseapp.com",
  projectId: "blog-2fbe5",
  storageBucket: "blog-2fbe5.appspot.com",
  messagingSenderId: "649643309405",
  appId: "1:649643309405:web:f14f7508a7132fd97710b4",
  measurementId: "G-TRW56F0HM5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
