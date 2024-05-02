// subscribe.js

function subscribe() {
  var emailInput = document.getElementById('email');
  var email = emailInput.value;

  // Simple email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  
  alert('Subscribed successfully!');

  // Clear the input field after successful subscription
  emailInput.value = '';
}
