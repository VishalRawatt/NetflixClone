import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-clone-2fa8c.firebaseapp.com",
  projectId: "netflix-clone-2fa8c",
  storageBucket: "netflix-clone-2fa8c.appspot.com",
  messagingSenderId: "569615724668",
  appId: "1:569615724668:web:53b1700d85cfde456359f9",
  measurementId: "G-37QMRE02YM"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;