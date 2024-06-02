// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmC7LFgNN6QAukEgYPYJFHdpJA0I1bp2s",
  authDomain: "medishop-client.firebaseapp.com",
  projectId: "medishop-client",
  storageBucket: "medishop-client.appspot.com",
  messagingSenderId: "1075978825417",
  appId: "1:1075978825417:web:517af94201f04986b4a718"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);