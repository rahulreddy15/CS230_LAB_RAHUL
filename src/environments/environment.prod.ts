export const environment = {
  production: true,
  firebase: {
    projectId: 'insomniac-games-app',
    appId: '1:314711490464:web:89f92a20cc01a7a4d76ec5',
    databaseURL: 'https://insomniac-games-app-default-rtdb.firebaseio.com',
    storageBucket: 'insomniac-games-app.appspot.com',
    apiKey: 'AIzaSyC7_gmEwXHGtmZOweWZijkVc1bLgx5DoUw',
    authDomain: 'insomniac-games-app.firebaseapp.com',
    messagingSenderId: '314711490464',
  }
};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7_gmEwXHGtmZOweWZijkVc1bLgx5DoUw",
  authDomain: "insomniac-games-app.firebaseapp.com",
  databaseURL: "https://insomniac-games-app-default-rtdb.firebaseio.com",
  projectId: "insomniac-games-app",
  storageBucket: "insomniac-games-app.appspot.com",
  messagingSenderId: "314711490464",
  appId: "1:314711490464:web:89f92a20cc01a7a4d76ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);