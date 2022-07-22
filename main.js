// Define Form Constants
const KEY_USERNAME = 'username';
const KEY_EMAIL = 'email';
const KEY_MESSAGE = 'message';
const KEY_FORM = 'form';

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger-btn');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}
menu.addEventListener('click', toggleMenu);
hamburger.addEventListener('click', toggleMenu);

// Form-validation//
const form = document.getElementById('form');

// Check if String has Uppercase
function checkUppercase(str) {
  return str !== str.toLowerCase();
}

const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('msg');
const errorMessage = document.getElementById('error');

function handleSubmit(e) {
  // Fetch Values

  // Do Username Empty Validation
  if (username.value === '') {
    errorMessage.textContent = 'Name cannot be blank';
    errorMessage.classList.add('show');
    // Prevent Form Submit
    e.preventDefault();
    return false;
  }
  errorMessage.classList.remove('show');

  // Do Username Length Validation
  if (username.value.length < 3 || username.value.length > 20) {
    errorMessage.textContent = 'Name must have between 3 to 20 characters';
    errorMessage.classList.add('show');
    // Prevent Form Submit
    e.preventDefault();
    return false;
  }
  errorMessage.classList.remove('show');

  // Do Email Lowercase Validation
  if (checkUppercase(email.value)) {
    errorMessage.textContent = 'Most enter a valid email in lower case';
    errorMessage.classList.add('show');
    // Prevent Form Submit
    e.preventDefault();
    return false;
  }

  // Do Message Length Validation
  if (message.value.length > 1000 || message.value === '') {
    errorMessage.textContent = 'Most write a message of less than 1000 characters';
    errorMessage.classList.add('show');
    e.preventDefault();
    return false;
  }

  // If Above Validation Passes Remove Error Banner from All Existing Error Validations
  errorMessage.classList.remove('show');

  // Form Data
  const formData = {
    [KEY_USERNAME]: username.value,
    [KEY_EMAIL]: email.value,
    [KEY_MESSAGE]: message.value,
  };

  // Save to Local Storage
  localStorage.setItem(KEY_FORM, JSON.stringify(formData));
  return true;
}

function saveDataToLocalStorage(key, value) {
  // Fetch Local Storage Form Data
  const formData = localStorage.getItem(KEY_FORM);
  // If Form Data is Empty initialize to empty Form else
  let formJSON;
  if (formData == null) {
    formJSON = {};
  } else {
    formJSON = JSON.parse(formData);
  }

  // Assign JSON Key to Value
  formJSON[key] = value;
  // Set Stringified JSON
  localStorage.setItem(KEY_FORM, JSON.stringify(formJSON));
}

// Add Form Input Event Listeners that Save to Local Storage onChange event
form.addEventListener('submit', handleSubmit);

// Fetch Local Storage on Window Page Load
window.addEventListener('load', () => {
  // Fetch Form Data from Local Storage
  const formData = localStorage.getItem(KEY_FORM);
  // Fetch Form JSON from String Form Data
  const formJSON = JSON.parse(formData);
  if (formJSON) {
    // Set Username
    if (formJSON[KEY_USERNAME])username.value = formJSON[KEY_USERNAME];
    // Set Email
    if (formJSON[KEY_EMAIL])email.value = formJSON[KEY_EMAIL];
    // Set Message
    if (formJSON[KEY_MESSAGE])message.value = formJSON[KEY_MESSAGE];
  }

  // Register User Input Change Handler
  username.addEventListener('input', (e) => {
    console.log(e.target.value);
    // Save Input Value
    saveDataToLocalStorage(KEY_USERNAME, e.target.value);
  });

  // Register Email Input Change Handler
  email.addEventListener('change', (e) => {
    // Save Input Value
    saveDataToLocalStorage(KEY_EMAIL, e.target.value);
  });

  // Register Message Input Change Handler
  message.addEventListener('change', (e) => {
    // Save Input Value
    saveDataToLocalStorage(KEY_MESSAGE, e.target.value);
  });
});
