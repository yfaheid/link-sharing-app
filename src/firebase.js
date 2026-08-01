import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJ22Z_zLFycUe2XydJqUAYRBQCvmrZNnY",
  authDomain: "link-sharing-app-7f0b7.firebaseapp.com",
  projectId: "link-sharing-app-7f0b7",
  storageBucket: "link-sharing-app-7f0b7.firebasestorage.app",
  messagingSenderId: "991664842546",
  appId: "1:991664842546:web:3276f908eac8d33d9a992b",
  measurementId: "G-Z8HSBJ2JTS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, app, db, storage };
