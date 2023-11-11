import "../scss/styles.scss";

const form = document.getElementById('form')
const emailInput = document.getElementById('email-input');
const error = document.getElementById('error');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern

form.addEventListener('submit', function (e) {
  // Always get the current value of the email field when the form is submitted
  const email = emailInput.value;

  if (!regex.test(email)) {
    // If the email doesn't match the pattern, show error
    error.style.display = 'inline';
    emailInput.style.borderColor = 'var(--primary-light-red)';
    e.preventDefault(); // Prevent form from submitting
  }
});

