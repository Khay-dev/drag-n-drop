// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1OIeB1r-MqYRN9B8y1gsA3LecnxxDRo0",
    authDomain: "drag-n-drop-ed255.firebaseapp.com",
    projectId: "drag-n-drop-ed255",
    storageBucket: "drag-n-drop-ed255.appspot.com",
    messagingSenderId: "105225083589",
    appId: "1:105225083589:web:c8a019eab3d2d6da8c6eac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
  export const auth = getAuth(app);