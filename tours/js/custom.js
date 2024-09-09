// Get Elements For Dark Mode
let btnDark = document.getElementById("btn-dark");
let navbarTop = document.querySelector(".navbar-top");
let navbarBrand = document.querySelector(".navbar-brand");
let navLink = document.querySelectorAll(".nav-link");

// Check localStorage when the page loads
document.addEventListener("DOMContentLoaded", () => {
  if (window.localStorage.getItem("backgroundColor") === "black") {
    windowBlackMode();
    btnDark.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    btnDark.style.color = "#fff";
  } else {
    windowWhiteMode();
    btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    btnDark.style.color = "black";
  }
});

// Eventlistener On Button
btnDark.addEventListener("click", function () {
  if (btnDark.innerHTML === `<i class="fa-solid fa-moon"></i>`) {
    btnDark.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    btnDark.style.color = "#fff";
    windowBlackMode();
  } else {
    btnDark.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    btnDark.style.color = "black";
    windowWhiteMode();
  }
});

// Function Of Local Storage Dark Mode
function windowBlackMode() {
  window.localStorage.setItem("textColor", "white");
  window.localStorage.setItem("backgroundColor", "black");
  applyStyles();
}

// Functions Of Local Storage White Mode
function windowWhiteMode() {
  window.localStorage.setItem("textColor", "#000000a6");
  window.localStorage.setItem("backgroundColor", "white");
  applyStyles();
}

// Function to apply styles from localStorage
function applyStyles() {
  let textColor = window.localStorage.getItem("textColor");
  let backgroundColor = window.localStorage.getItem("backgroundColor");
  navbarTop.style.backgroundColor = backgroundColor;
  navbarTop.style.color = textColor;
  navbarBrand.style.color = textColor;
  for (let i = 0; i < navLink.length; i++) {
    navLink[i].style.color = textColor;
  }
  document.body.style.color = textColor;
  document.body.style.backgroundColor = backgroundColor;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const selects = document.querySelector(".font");
const options = document.querySelectorAll(".font option");
let selectedFont = "";

// Event listener on selects
if (selects) {
  selects.addEventListener("change", function (e) {
    selectedFont = e.target.value;
    window.localStorage.setItem("fontChange", selectedFont);
    document.body.style.fontFamily = selectedFont;
    options.forEach(option => {
      if (option.value === selectedFont) {
        option.textContent = selectedFont;
      }
    });
  });
}

// Check localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
  selectedFont = window.localStorage.getItem("fontChange");
  if (selectedFont) {
    document.body.style.fontFamily = selectedFont;
    selects.value = selectedFont;
  }
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Appear Button When Page Load
let appearAfter = document.getElementById("appearAfter");

setTimeout(() => {
  appearAfter.classList.add("show");
}, 3000);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Wow Js Animation
new WOW().init();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Input Validate & Send Data
let input = document.querySelector(".form-control");
const requiredField = document.querySelector(".requiredField");
let min = document.querySelector(".min");
let max = document.querySelector(".max");
let sendBtn = document.getElementById("sendBtn");

input.addEventListener("blur", function () {
  if (input.value.length === 0) {
    requiredField.classList.remove("d-none");
  }
});

input.addEventListener("input", function () {
  requiredField.classList.add("d-none");
});

sendBtn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Cant Send Empty Form Please Fill The Data");
  } else if (input.value.length < 5) {
    min.classList.remove("d-none");
  } else if (input.value.length >= 50) {
    max.classList.remove("d-none");
  } else if (input.value.length >= 5) {
    alert(`Data Sent Successfully => ${input.value}`);
    input.value = "";
  }
})