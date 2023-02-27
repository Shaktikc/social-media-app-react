import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCsoblO34V9RuWcXGhkscs2Jd3nc8fyjY",
  authDomain: "social-media-app-9462f.firebaseapp.com",
  projectId: "social-media-app-9462f",
  storageBucket: "social-media-app-9462f.appspot.com",
  messagingSenderId: "280608711724",
  appId: "1:280608711724:web:686494d2315218f646dd89",
  measurementId: "G-E2E54Z5Z63",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
