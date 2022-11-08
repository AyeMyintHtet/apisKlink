
const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyA7TQmdGhm3E43cJG7iOYzV3GLWUe06rSQ",
    authDomain: "fir-klink.firebaseapp.com",
    projectId: "fir-klink",
    storageBucket: "fir-klink.appspot.com",
    messagingSenderId: "705139633936",
    appId: "1:705139633936:web:102f43b7aaa70e84f7ff95"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const Data = db.collection("Data")
module.exports = Data