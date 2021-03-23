// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCb1trKDLGx6kTgw-JEXZSIZSSEhAOaS0g",
    authDomain: "kwitter-project-842ee.firebaseapp.com",
    projectId: "kwitter-project-842ee",
    storageBucket: "kwitter-project-842ee.appspot.com",
    messagingSenderId: "764601046288",
    appId: "1:764601046288:web:bd1c7ecb049e5696850195"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function logout()
{
      localStorage.removeItem(user_name);
      localStorage.removeItem(room_name);
      window.location = "index.html"
}