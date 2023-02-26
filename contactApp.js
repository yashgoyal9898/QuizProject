// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMKWZHzzzh3rTKFAacjX7kiF6_26HtgP8",
    authDomain: "myquiz-1e7fe.firebaseapp.com",
    databaseURL: "https://myquiz-1e7fe-default-rtdb.firebaseio.com",
    projectId: "myquiz-1e7fe",
    storageBucket: "myquiz-1e7fe.appspot.com",
    messagingSenderId: "426386544803",
    appId: "1:426386544803:web:fd780ab4736e11953d0716"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Refernece contactInfo collections
  let contactInfo = firebase.database().ref("Conatct_Us__Page_Infoormation");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;
    console.log(name, email, message);
  
    saveContactInfo(name, email, message);

    alert("Form is submitted");
    window.location="Home.html";
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }
  