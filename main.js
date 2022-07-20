const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger-btn");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
menu.addEventListener("click", toggleMenu);
hamburger.addEventListener("click", toggleMenu);


//Form-validation
const form = document.querySelector('#form');
const username = document.querySelector('#user-name');
const email = document.querySelector('#user-email');
const errorMessage = document.querySelector('#error-message');
const message = document.querySelector('#msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (username.value === '') {
    errorMessage.textContent = 'Name cannot be blank';
    username.classList.add('invalid');
    return;
  }
  username.classList.remove('invalid');
  username.classList.add('valid');

  if (username.value.length < 3 || username.value.length > 20) {
    errorMessage.textContent = 'Name must have between 3 to 20 characters';
    username.classList.add('invalid');
    return;
  }
  username.classList.remove('invalid');
  username.classList.add('valid');

  if (email.value !== email.value.toLowerCase() || email.value === '') {
    errorMessage.textContent = 'Most enter a valid email in lower case';
    email.classList.add('invalid');
    return;
  }
  email.classList.remove('invalid');
  email.classList.add('valid');

  if (message.value.length > 1000 || message.value === '') {
    errorMessage.textContent = 'Most write a message of less than 1000 characters';
    message.classList.add('invalid');
    return;
  }
  message.classList.remove('invalid');
  message.classList.add('valid');

  form.submit();
});