import { initializeApp } from "firebase/app";

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const express = require("express")

const server = express()
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
const { Server } = require('wss');

const wss = new Server({ server });
wss.on('connection', (wss) => {
    console.log('Client connected');
    wss.on('close', () => console.log('Client disconnected'));
});
// Import the functions you need from the SDKs you need
const firebaseConfig = {
    apiKey: "AIzaSyDck-I1Ak9cbCg-s_6aRa5aTzH447V93QY",
    authDomain: "i-am-fabi.firebaseapp.com",
    databaseURL: "https://i-am-fabi-default-rtdb.firebaseio.com",
    projectId: "i-am-fabi",
    storageBucket: "i-am-fabi.appspot.com",
    messagingSenderId: "361124503866",
    appId: "1:361124503866:web:e0f64c6e3da6f236ff3003"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration