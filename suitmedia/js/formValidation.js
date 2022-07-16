function formValidation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name == '') {
    alert('Please enter your name');
  } else if (email == '') {
    alert('Please enter your email');
  } else if (message == '') {
    alert('Please enter your message');
  } else {
    alert('We will contact you shortly !');
  }
}
