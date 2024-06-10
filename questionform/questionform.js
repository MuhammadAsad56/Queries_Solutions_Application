  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

var userName = document.getElementById("userName")
var question = document.getElementById("question")
   
  window.addQuestion = function(){
    if(userName.value && question.value){
        var obj = {
          userName: userName.value,
          question: question.value,
        }
      
        obj.id = push(ref(db, "questions")).key;
        var reference = ref(db, `questions/${obj.id}`);
        set(reference, obj)
        .then(function(){
          window.location.assign("../question_page/question.html");
          // window.location.href = "http://127.0.0.1:5501/question_page/question.html"
        })
        .catch(function(rej){
          alert(rej.message)
        })
    }else{
        alert("please enter a username or question")
    }
  }