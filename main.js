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
    for (var i = 0; i < str.length; i++) {
      if (
        str.charAt(i) != str.charAt(i).toUpperCase() &&
        !str.charAt(i).match(/[a-z]/i)
      ) {
        return false;
      }
    }
    return true;
  }
  return false;
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  console.log('Form Submitted');

  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const errorMessage = document.getElementById('error');
  const message = document.getElementById('msg');

  if (username.value === '') {
    errorMessage.textContent = 'Name cannot be blank';
    errorMessage.classList.add('show');
    e.preventDefault();
    return;
  }
  errorMessage.classList.remove('show');

  if (username.value.length < 3 || username.value.length > 20) {
    errorMessage.textContent = 'Name must have between 3 to 20 characters';
    errorMessage.classList.add('show');
    e.preventDefault();
    return;
  }
  errorMessage.classList.remove('show');

  if (checkUppercase(email.value)) {
    errorMessage.textContent = 'Most enter a valid email in lower case';
    errorMessage.classList.add('show');
    e.preventDefault();
    return;
  }
  errorMessage.classList.remove('show');

  if (message.value.length > 1000 || message.value === '') {
    errorMessage.textContent = 'Most write a message of less than 1000 characters';
    errorMessage.classList.add('show');
    e.preventDefault();
  } else {
    errorMessage.classList.remove('show');
  }
}

// Local storage//
// This is the section for data binding//

const formC = document.querySelector('#form');

formC.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    fullname: document.querySelector('#username').value,
    EmailAdress: document.querySelector('#email').value,
    message: document.querySelector('#msg').value,
  };

  localStorage.setItem('DATA', JSON.stringify(obj));
});

const getData = localStorage.getItem('DATA');
const getDataValue = JSON.parse(getData);

window.addEventListener('load', () => {
  if (localStorage.getItem('DATA')) {
    document.querySelector('#username').value = getDataValue.fullname;
    document.querySelector('#email').value = getDataValue.EmailAdress;
    document.querySelector('#msg').value = getDataValue.message;
  }
});
