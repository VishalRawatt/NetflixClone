import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCWJYfL3Y9O9umYNRVnILr6sIi7ChuZl3Y",
  authDomain: "netflix-clone-2fa8c.firebaseapp.com",
  projectId: "netflix-clone-2fa8c",
  storageBucket: "netflix-clone-2fa8c.appspot.com",
  messagingSenderId: "569615724668",
  appId: "1:569615724668:web:53b1700d85cfde456359f9",
  measurementId: "G-37QMRE02YM"
};

firebase.initializeApp(firebaseConfig) ;
const storage = firebase.storage() ;

export default storage ;