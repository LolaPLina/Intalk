const firebaseConfig = {
    apiKey: "AIzaSyBLlftrGeZDouq1H4WENi_ej6cjb4X4rG0",
    authDomain: "instalk-5d7a2.firebaseapp.com",
    databaseURL: "https://instalk-5d7a2-default-rtdb.firebaseio.com",
    projectId: "instalk-5d7a2",
    storageBucket: "instalk-5d7a2.appspot.com",
    messagingSenderId: "282136429170",
    appId: "1:282136429170:web:02a81a2bee007544c6b8eb"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "Nova sala adicionada"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "intalkPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "instalkPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
