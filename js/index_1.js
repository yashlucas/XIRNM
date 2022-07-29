const firebaseConfig = {
 
    apiKey: "AIzaSyCXcosvo7GvCLzbgbXwZicJOHVHkppaOok",
    authDomain: "xinrm-ee1a6.firebaseapp.com",
    databaseURL: "https://xinrm-ee1a6-default-rtdb.firebaseio.com",
    projectId: "xinrm-ee1a6",
    storageBucket: "xinrm-ee1a6.appspot.com",
    messagingSenderId: "536753779043",
    appId: "1:536753779043:web:4956cb7c43e2b1426da356",
    measurementId: "G-FQR0PXXLJ5"
  //   copy your firebase config informations
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB1 = firebase.database().ref("details");

document.getElementById("details").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var a0=getElementVal("s0")
  var a1=getElementVal("s1")
  var a2=getElementVal("s2")
  var a3=getElementVal("s3")
  var a4=getElementVal("s4")
  var a5=getElementVal("s5")
  var a6=getElementVal("s6")
  var a7=getElementVal("s7")
  var a8=getElementVal("s8")
  var a9=getElementVal("s9")
  var a10=getElementVal("s11")


  saveMessages1(a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("details").reset();
}

const saveMessages1 = (a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) => {
  var newContactForm1 = contactFormDB1.push();

  newContactForm1.set({
    a0:a0,
    a1:a1,
    a2:a2,
    a3:a3,
    a4:a4,
    a5:a5,
    a6:a6,
    a7:a7,
    a8:a8,
    a9:a9,
    a10:a10
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

getDocs(saveMessages).then((snapshot)=>{
  console.log(snapshot.docs)
});
