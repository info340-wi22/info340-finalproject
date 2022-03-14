import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeGhtDDPdKqw99Rmbg-7kU4Zm-zB9vviE",
  authDomain: "react-info340project-wi22.firebaseapp.com",
  databaseURL: "https://react-info340project-wi22-default-rtdb.firebaseio.com",
  projectId: "react-info340project-wi22",
  storageBucket: "react-info340project-wi22.appspot.com",
  messagingSenderId: "171952014356",
  appId: "1:171952014356:web:8b06b6b9cf5033ffbb5301",
  measurementId: "G-3G4NYXGNKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const goalsArray = [
    { type: "fitness_center", title: "Push Up", desc: "Have you completed 100 push ups?" },
    { type: "water_drop", title: "Drink Water", desc: "Have you drank 60oz of water?" },
    { type: "bed", title: "Sleep", desc: "Have you rested for 8 hours?"}
]

ReactDOM.render(<BrowserRouter><App data={goalsArray}/></BrowserRouter>, document.getElementById('root'));
