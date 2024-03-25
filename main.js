const firebaseConfig = {
    apiKey: "AIzaSyBLlftrGeZDouq1H4WENi_ej6cjb4X4rG0",
    authDomain: "instalk-5d7a2.firebaseapp.com",
    databaseURL: "https://instalk-5d7a2-default-rtdb.firebaseio.com",
    projectId: "instalk-5d7a2",
    storageBucket: "instalk-5d7a2.appspot.com",
    messagingSenderId: "282136429170",
    appId: "1:282136429170:web:02a81a2bee007544c6b8eb"
  };

  function addUser() {

    userName = document.getElementById("userName").value;
  
    localStorage.setItem("userName", userName);
    
    window.location = "kwitterRoom.html";
  }