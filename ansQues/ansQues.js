// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, onValue,push,set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
 
var userName = document.getElementById("userName");
var question = document.getElementById("question");

function getData(){
  var id =  localStorage.getItem("queid")
  var reference = ref(db, `questions/${id}`)
  onValue(reference, function(data){
    var personData = data.val()
   userName.innerHTML = personData.userName
   question.innerHTML = personData.question
  })
}
getData()

var nameUserAns = document.getElementById("nameUserAns")
var ansQues = document.getElementById("ansQues")

window.addAnswer = function(){
  if(nameUserAns.value && ansQues.value){
    var obj = {
        userName: nameUserAns.value,
        answer: ansQues.value
    }
    obj.id = push(ref(db, "answer")).key;
    var reference = ref(db, `answer/${obj.id}`);
    set(reference, obj)
    .then(function(){
        nameUserAns.value = "", ansQues.value = ""
    })
    .catch(function(rej){
        alert(rej.message)
    })
  }else{
    alert("please enter a name or answer")
  }
}
 var answer = document.getElementById("answer")
function getAnsData(){
    var reference = ref(db, "answer/");
    onValue(reference, function(data){
     var answers = data.val()
     var arr = Object.values(answers)
     for(var i = 0; i < arr.length; i++){
        var name = arr[i].userName
        var ans = arr[i].answer
        answer.innerHTML +=
        `
        <div class="rounded p-3 shadow mt-3 ">
           <div class="fs-5 text-info mb-3"><i class="fa-solid fa-user"></i>&nbsp;${name}</div>
            <p class="fs-5">${ans}</p>
            <p>Total answer: 786</p>
        </div>
        `
     }
    })
}
getAnsData()





