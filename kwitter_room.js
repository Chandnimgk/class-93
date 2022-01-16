
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAaLJ2ecbTqyoJtHFkfDNAX269y85FrcxA",
      authDomain: "kwitter-3c38f.firebaseapp.com",
      projectId: "kwitter-3c38f",
      storageBucket: "kwitter-3c38f.appspot.com",
      messagingSenderId: "718751684495",
      appId: "1:718751684495:web:90c30b667f14496cfeddfa"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
