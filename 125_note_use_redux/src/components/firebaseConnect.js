import * as firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  
  apiKey: "AIzaSyCVSzaBEnH9ZBjVEsOWDoKF9hDmpBOMtIE",
  authDomain: "notereact01.firebaseapp.com",
  databaseURL: "https://notereact01.firebaseio.com",
  projectId: "notereact01",
  storageBucket: "notereact01.appspot.com",
  messagingSenderId: "932644799559",
  appId: "1:932644799559:web:5eeebbe6c73dd6052add62",
  measurementId: "G-HYFE976B5Y"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export const noteDulieu = firebase.database().ref('dataForNote')