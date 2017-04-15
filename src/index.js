import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import App from './client/components/App/App';
import './index.css';

  // Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBzW1IsajvDUglMOcoLA4LJHsXz2oygoxM",
    authDomain: "todoapp-24fcc.firebaseapp.com",
    databaseURL: "https://todoapp-24fcc.firebaseio.com",
    projectId: "todoapp-24fcc",
    storageBucket: "todoapp-24fcc.appspot.com",
    messagingSenderId: "147656116326"
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
