window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


const bodyElement = document.getElementById("bodyID");
const mainElement = document.getElementById("mainID");
const darkModeBtn = document.getElementById("darkModeButton")
const darkModeImg = document.getElementById("darkModeImg")
let darkMode = false;

function darkModeFunc() {
  if (!darkMode) {
    bodyElement.classList.toggle("darkMode");
    mainElement.classList.toggle("darkMode");
    darkModeImg.src = "/assets/SunImg.webp";
    darkMode = true;
  } else {
    bodyElement.classList.toggle("darkMode");
    mainElement.classList.toggle("darkMode");
    darkModeImg.src = "/assets/MoonImg.webp";
    darkMode = false;
  } 
}