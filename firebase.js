// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZ_hLMRFLf1TudM7PruBBlskficR7W93A",
  authDomain: "copy-prague-coolpass-by-melih.firebaseapp.com",
  projectId: "copy-prague-coolpass-by-melih",
  storageBucket: "copy-prague-coolpass-by-melih.appspot.com",
  messagingSenderId: "825764883368",
  appId: "1:825764883368:web:9ba5d6ad838eceb8e68b9d",
  measurementId: "G-Z0QGDNRYQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);