
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDu7T_ofZ9XCPbCF8FBTlACz3jyCuvtfG0",
  authDomain: "fir-29daa.firebaseapp.com",
  projectId: "fir-29daa",
  storageBucket: "fir-29daa.appspot.com",
  messagingSenderId: "194885525609",
  appId: "1:194885525609:web:8fa24fe34f3ffed9be42f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);