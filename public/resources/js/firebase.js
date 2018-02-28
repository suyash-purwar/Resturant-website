 // Initialize Firebase
var config = {
  apiKey: "xxxxxxx", 
  authDomain: "my-first-project-ebd27.firebaseapp.com",
  databaseURL: "https://my-first-project-ebd27.firebaseio.com",
  projectId: "my-first-project-ebd27",
  storageBucket: "my-first-project-ebd27.appspot.com",
  messagingSenderId: "657417896100"
};

firebase.initializeApp(config);

var messageRef = firebase.database().ref('messages');

// Added event listener
getId('submit_button').addEventListener('click', submitForm);

// Return the value from input
// If error exists show error box with message
function getInputVal(id) {
  if (document.getElementById(id).value === "") {
    showMessage('Fill out all the fields', 'danger');
  } else if (document.getElementById('noOfPeople').value > 6) {
    showMessage('Maximum number of people is 6', 'danger');
  } else {
    return document.getElementById(id).value;
  }
  
}

function submitForm(e) {
  e.preventDefault();

  // Get values
  const name = getInputVal('name');
  const contact = getInputVal('contact');
  const email = getInputVal('email');
  const date = getInputVal('date');
  const number_of_people = getInputVal('noOfPeople');

  saveMessages(name, contact, email, date, number_of_people);
  showMessage('Congrats! Your table is booked', 'success');
}

// Save message to firebase
function saveMessages (name, contact, email, date, number_of_people) {
  const newMessageRef = messageRef.push();
  newMessageRef.set({
    name,
    contact,
    email,
    date,
    number_of_people
  });
}
