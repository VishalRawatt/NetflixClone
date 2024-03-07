import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC97AHnOoWL32lt6jPxL-6-8OAgLiadK6M",
  authDomain: "netflix-dda33.firebaseapp.com",
  projectId: "netflix-dda33",
  storageBucket: "netflix-dda33.appspot.com",
  messagingSenderId: "433595919054",
  appId: "1:433595919054:web:71fc67b35a8dd0fd05be9f",
  measurementId: "G-1JSGZV4S5P"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);