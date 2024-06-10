  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import {ref, getDatabase, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBoKpM654yLCQG3ll6GCXirbQMVKU53Tv0",
    authDomain: "queries-a7f2e.firebaseapp.com",
    projectId: "queries-a7f2e",
    storageBucket: "queries-a7f2e.appspot.com",
    messagingSenderId: "879108606746",
    appId: "1:879108606746:web:f5bca527bc85db25cabaa3",
    measurementId: "G-RX16Y2QRTF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase()
  const auth = getAuth()

var email = document.getElementById('email')
var password = document.getElementById('password')
  window.loginUser = function(){
     var obj = {
        userEmail: email.value,
        userPassword: password.value
     }
     signInWithEmailAndPassword(auth, obj.userEmail, obj.userPassword)
     .then(function(res){
      console.log(res);
      email.value = "", password.value = ""
      window.location.href = "http://127.0.0.1:5501/question_page/question.html"
     })
     .catch(function(rej){
        //  console.log(rej.message)
        // alert(rej.message)
        if(rej.message === "Firebase: Error (auth/invalid-credential)."){
          alert("incorrect email or password")
        }
        else if(rej.message === "Firebase: Error (auth/invalid-email)."){
        let input = document.querySelectorAll(".input input")
          input.forEach(function(e){
            e.style.border = "1px solid red"
          })
        }
     })
    }