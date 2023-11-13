import "../scss/styles.scss";

const form = document.getElementById('form')
const emailInput = document.getElementById('email-input');
const error = document.getElementById('error');
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function (e) {
  const email = emailInput.value;

  if (!regex.test(email)) {
    error.style.display = 'inline';
    emailInput.style.borderColor = 'var(--primary-light-red)';
    e.preventDefault();
  }
});

