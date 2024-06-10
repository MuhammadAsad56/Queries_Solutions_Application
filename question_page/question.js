// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

var questionParent = document.getElementById("questionparent")
function getData() {
    var reference = ref(db, "questions/");
    onValue(reference, function (data) {
        var quesData = data.val()
        var quesArr = Object.values(quesData);
        console.log(quesArr);
        for (var i = 0; i < quesArr.length; i++) {
            var userName = quesArr[i].userName
            var question = quesArr[i].question
            var id = quesArr[i].id
            questionParent.innerHTML +=
                `
                <div onclick="cardClick('${id}')" class=" rounded shadow border border- p-3 mb-2">
                <p class="text-info fs-5"><i class="fa-solid fa-user"></i> ${userName}</p>
                <p class="fs-5">${question}</p>
                <p class="m-0 p-0 py-2">Total Answers : 786</p>
                </div>
              `;

        }
    });
}
getData()

window.cardClick = function(id){
    localStorage.setItem("queid",id)
    window.location.assign("../ansQues/index.html")
}