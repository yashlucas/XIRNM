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
var contactFormDB = firebase.database().ref("final_data");

document.getElementById("final_data").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var s0=getElementVal("a0")
  var s1=getElementVal("a1")
  var s2=getElementVal("a2")
  var s3=getElementVal("a3")
  var s4=getElementVal("a4")
  var s5=getElementVal("a5")
  var s6=getElementVal("a6")
  var s7=getElementVal("a7")
  var s8=getElementVal("a8")
  var s9=getElementVal("a9")



  saveMessages2(s0,s1,s2,s3,s4,s5,s6,s7,s8,s9);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("final_data").reset();
}

const saveMessages2 = (s0,s1,s2,s3,s4,s5,s6,s7,s8,s9) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    s0:s0,
    s1:s1,
    s2:s2,
    s3:s3,
    s4:s4,
    s5:s5,
    s6:s6,
    s7:s7,
    s8:s8,
    s9:s9
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

getDocs(saveMessages).then((snapshot)=>{
  console.log(snapshot.docs)
});
