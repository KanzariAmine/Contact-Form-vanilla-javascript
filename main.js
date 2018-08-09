// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsRrZYCcDKU-VM3ojJQVRweOP0Jdd0aaQ",
    authDomain: "contact-form-19025.firebaseapp.com",
    databaseURL: "https://contact-form-19025.firebaseio.com",
    projectId: "contact-form-19025",
    storageBucket: "contact-form-19025.appspot.com",
    messagingSenderId: "855904949303"
  };
  firebase.initializeApp(config);

//Reference message collection
let messageRef = firebase.database().ref('message')

//Listen for from submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
//Get Value
let name = getInputVal('name');
let company = getInputVal('company');
let email = getInputVal('email');
let phone = getInputVal('phone');
let message = getInputVal('message');

//Save Message
saveMessage(name, company, email, phone, message);
//Show Alert 
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
  document.getElementById('contactForm').reset();
}, 3000)

//Rest the Form

e.preventDefault()
}

//Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//Save Data to firebase
function saveMessage(name, company, email, phone,  message){
  messageRef.push().set({
    name: name,
    company: company,
    email:email,
    phone: phone,
    message: message
  })
  console.log ('save is OK')
}