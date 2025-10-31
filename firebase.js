import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATgdnvaNSvfcZpGiKw6cyc2Llcd4GWm7s",
  authDomain: "aula9alto.firebaseapp.com",
  projectId: "aula9alto",
  storageBucket: "aula9alto.firebasestorage.app",
  messagingSenderId: "899405718207",
  appId: "1:899405718207:web:8ad445b134e81fcbeb9c0a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);