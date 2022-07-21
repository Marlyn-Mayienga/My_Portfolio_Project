const menu = document.querySelector('.menu');
// const menuItems = document.querySelectorAll('.menuItem');
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
  for (let i = 0; i < str.length; i += 1) {
    if (
      str.charAt(i) !== str.charAt(i).toUpperCase()
      && !str.charAt(i).match(/[a-z]/i)
    ) {
      return false;
    }
  }
  return true;
}

function handleSubmit(e) {
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
  // document.getElementById("form").submit()
}
form.addEventListener('submit', handleSubmit);
