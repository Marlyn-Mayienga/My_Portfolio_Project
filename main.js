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

//Form-validation//
const form = document.getElementById("form");

// Check if String has Uppercase
function checkUppercase(str) {
  for (var i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == str.charAt(i).toUpperCase() &&
      str.charAt(i).match(/[a-z]/i)
    ) {
      return true;
    }
  }
  return false;
}
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  console.log("Form Submitted");

  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const errorMessage = document.getElementById("error");
  const message = document.getElementById("msg");

  if (username.value === "") {
    errorMessage.textContent = "Name cannot be blank";
    errorMessage.classList.add("show");
    e.preventDefault();
    return;
  } else {
    errorMessage.classList.remove("show");
  }

  if (username.value.length < 3 || username.value.length > 20) {
    errorMessage.textContent = "Name must have between 3 to 20 characters";
    errorMessage.classList.add("show");
    e.preventDefault();
    return;
  } else {
    errorMessage.classList.remove("show");
  }

  if (checkUppercase(email.value)) {
    errorMessage.textContent = "Most enter a valid email in lower case";
    errorMessage.classList.add("show");
    e.preventDefault();
    return;
  } else {
    errorMessage.classList.remove("show");
  }

  if (message.value.length > 1000 || message.value === "") {
    errorMessage.textContent =
      "Most write a message of less than 1000 characters";
    errorMessage.classList.add("show");
    e.preventDefault();
    return;
  } else {
    errorMessage.classList.remove("show");
  }
}

//Local storage//
//This is the section for data binding//

const form2 = document.querySelector("#form");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    fullname: document.querySelector("#username").value,
    EmailAdress: document.querySelector("#email").value,
    message: document.querySelector("#msg").value,
  };

  localStorage.setItem("DATA", JSON.stringify(obj));
});

const getData = localStorage.getItem("DATA");
const getDataValue = JSON.parse(getData);

window.addEventListener("load", () => {
  if (localStorage.getItem("DATA")) {
    document.querySelector("#username").value = getDataValue.fullname;
    document.querySelector("#email").value = getDataValue.EmailAdress;
    document.querySelector("#msg").value = getDataValue.message;
  }
});

//Popup Window//
const array = [
  {
    id: "1",
    name: "PWW 2022",
    shortDescription:
      "This web app shares information about Pakistan Watch Week 2022.",
    longDescription:
      "This website project serves the objective of notifying people about a forthcoming Watch Week 2022, complete with an about page that provides further information.",
    featured: ["Front End Dev", "Responsive", 2021],
    image: "images/watch_mobile.gif",
    imageDesktop: "images/watch_desktop.gif",
    technologies: ["html", "css", "javascript"],
    live_version: "https://hammas-saleem.github.io/Pakistan-Watch-Week-2022/",
    source_link: "https://github.com/HAMMAS-SALEEM/Pakistan-Watch-Week-2022",
  },
  {
    id: "2",
    name: "ToDoList",
    shortDescription:
      "A convenient way to keep track of their daily routine works.",
    longDescription:
      "A simple to-do app for managing daily tasks built with Webpack, JavaScript, HTML, and CSS. With the functionality to manipulate multiple completed tasks and store them to local storage.",
    featured: ["Interactive", "Local Storage", 2021],
    image: "images/todolist-mobile.GIF",
    imageDesktop: "images/todolist-desktop.GIF",
    technologies: ["html", "css", "javascript"],
    live_version: "https://hammas-saleem.github.io/ToDoList/",
    source_link: "https://github.com/HAMMAS-SALEEM/ToDoList",
  },

  {
    id: "3",
    name: "Space Traveler Hub",
    shortDescription:
      "This is a rocket booking and mission joining application.",
    longDescription: `This web app serves the facilities to reserve and rocket and joins a 
                      mission. This application gets data from API and stores it into redux. 
                      It has been built on React.js`,
    featured: ["Interactive", "Front End Dev", 2022],
    image: "images/space-traveler.png",
    imageDesktop: "images/space-traveler.png",
    technologies: ["ReactJS", "Redux", "Jest"],
    live_version: "https://hammasspace.netlify.app/",
    source_link: "https://github.com/HAMMAS-SALEEM/Space-Traveler-Hub",
  },

  {
    id: "5",
    name: "MyBudget",
    shortDescription: "MyBudget is a budget manager application.",
    longDescription:
      '"MyBudget" is a budget manager web application that allows users to keep track of their budget with different categories.',
    featured: ["Interactive", "Responsive", 2022],
    image: "images/my_budget.png",
    imageDesktop: "images/my_budget.png",
    technologies: ["Ruby on Rails", "ReactJS", "PostgreSQL"],
    live_version: "https://quiet-sierra-22121.herokuapp.com/",
    source_link: "https://github.com/HAMMAS-SALEEM/MyBudget",
  },
];

const main = document.querySelector(".mobile_menu");
const dynamicWork = document.querySelector(".works");
const modelView = document.querySelector(".bg_model");

function openMain() {
  main.style.visibility = "visible";
}

function closeMain() {
  main.style.visibility = "hidden";
}

function closeModel() {
  modelView.style.visibility = "hidden";
}

function openModel(id) {
  modelView.style.visibility = "visible";
  for (let i = 0; i < array.length; i += 1) {
    if (id === array[i].id) {
      modelView.innerHTML = `
        <div class="model_content" id="modelcontent">
        <div class="model_header">
            <h2 class="project_title">${array[i].name}</h2>
            <span onclick="closeModel()" class="crossBtn">&times;</span>
        </div>
        <ul class="info_list">
            <li class="item1">${array[i].featured[0]}</li>
            <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[1]}</span></li>
            <li class="item2"><span class="dot">&bull;</span><span>${array[i].featured[2]}</span></li>
        </ul>
        <img class="img_project" src=${array[i].image} alt="project">
        <img class="img_desktop" src=${array[i].imageDesktop} alt="project desktop screenshot">
        <p class="project_description">${array[i].longDescription}</p>
        <ul class="tech_list">
            <li>${array[i].technologies[0]}</li>
            <li class="margin_li">${array[i].technologies[1]}</li>
            <li class="margin_li">${array[i].technologies[2]}</li>
        </ul>
        <img src="./images/border_line.png" alt="border line" class="button_line">
        <div class="buttons">
            <a class="model_btn live" href=${array[i].live_version}>See live<img class="_icon" src="./images/Icon.svg" alt="live icon"></a>
            <a class="model_btn source" href=${array[i].source_link}>See project<img class="_icon" src="./images/Vector.svg" alt="github icon"></a>
        </div>
    </div>`;
    }
  }
}

openMain();
closeMain();
openModel();
closeModel();
for (let i = 0; i < array.length; i += 1) {
  dynamicWork.innerHTML += `<div class="cr-grid">
    <div id=${array[i].id} class="w1contain">
        <img class="pti" src=${array[i].image} alt="Portfolio Title Image"/>
        <img class="snap01 img13" src=${array[i].imageDesktop} alt="Portfolio"/>
        <div class="for-fullscreen">
            <header>
                <h2 class="works-title">${array[i].name}</h2>
            </header>
            <ul class="specs w11contain">
                <li class="spec1">${array[i].featured[0]}</li>
                <li class="spec2">${array[i].featured[1]}</li>
                <li class="spec2">${array[i].featured[2]}</li>
            </ul>
            <p class="w1par">${array[i].shortDescription}
            </p>
            <div class="bcontain">
                <button type="button" class="w1btn" disabled>${array[i].technologies[0]}</button>
                <button type="button" class="w1btn" disabled>${array[i].technologies[1]}</button>
                <button type="button" class="w1btn" disabled>${array[i].technologies[2]}</button>
            </div>
            <button id=${array[i].id} onclick="openModel(this.id)" type="button" class="w1btn2"><a  href="#model">See Project</a></button>
        </div>
    </div>
    </div>
    `;
}
