  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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


var firstName = document.getElementById('firstName')
var email = document.getElementById('email')
var password = document.getElementById('password')
  window.signUpUser = function(){
      if(firstName.value && email.value && password.value){
     var obj = {
        userName: firstName.value,
        userEmail: email.value,
        userPassword: password.value
     }
     console.log(obj);
         createUserWithEmailAndPassword(auth, obj.userEmail, obj.userPassword)
         .then(function(res){
          console.log(res);
          obj.id = res.user.uid
          console.log(obj.id);
          var reference = ref(db, `users/${obj.id}`);
          set(reference, obj)   
          window.location.href = "http://127.0.0.1:5501/question_page/question.html"
        })
        .catch(function(rej){
            if(rej.message === "Firebase: Error (auth/invalid-email)."){
                alert("invalid-email")
            }
           else if(rej.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                alert("Password should be at least 6 characters")
            }
           else if(rej.message === "Firebase: Error (auth/email-already-in-use)."){
                alert("this-email-already-in-use")
            }
        })
     }else{
         alert("please fill all fields")
        }
        }
    //      let input = document.querySelectorAll(".input input")
    //      input.forEach(function(e){
    //          e.style.border = "1px solid red"
    //         })
