import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4o_7jU32TsTQRhxizmjLOY05CF-F1pIk",
  authDomain: "sv-wood-works-and-wooden-plugs.firebaseapp.com",
  projectId: "sv-wood-works-and-wooden-plugs",
  storageBucket: "sv-wood-works-and-wooden-plugs.firebasestorage.app",
  messagingSenderId: "485170698233",
  appId: "1:485170698233:web:3b2914235c71520c0b0f28",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);