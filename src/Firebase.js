import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCRyKWqGJG2dAcKVxZ_1Ggdk6eWkgngOUE",
  authDomain: "login-321bc.firebaseapp.com",
  projectId: "login-321bc",
  storageBucket: "login-321bc.appspot.com",
  messagingSenderId: "698192680212",
  appId: "1:698192680212:web:15f76342905f45fc8bde01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};