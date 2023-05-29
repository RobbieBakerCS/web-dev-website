window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


const bodyElement = document.getElementById("bodyID");
const mainElement = document.getElementById("mainID");
const darkModeBtn = document.getElementById("darkModeButton")
const darkModeImg = document.getElementById("darkModeImg")
const darkModeTest = document.getElementsByClassName("darkModeTest")
let darkMode = false;

//Dark Mode function, grabs ID's and toggles CSS class change. Switches button image also
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

//Fetches empty canvas from planner.html
const canvas = document.getElementById("plannerCanvas");
//Creates background variable and assigns transparent image
var background = new Image();
background.src = "assets/Transparent_Image.png";

//Draws transparent image onto background
background.onload = function(){
    ctx.drawImage(background,0,0);
}

document.body.style.margin = 0;
var ctx = canvas.getContext('2d');
//Calls resize function that sets image to correct size
resize()


var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

//Fetches mouse position on page, edits made to adjust for drawing being off mouse position
function setPosition(e) {
  pos.x = e.clientX-62;
  pos.y = e.clientY-185;
}

function resize() {
  ctx.canvas.width = window.innerWidth-80;
  ctx.canvas.height = window.innerHeight-75;
}

//Sets brush stroke colour
ctx.strokeStyle = '#ff0000';
//Replaces background variable source and draws onto canvas
background.src = "assets/Border_Map.webp";
ctx.drawImage(background,0,0);

//Function to handle drawing and brush format
function draw(e) {
  if (e.buttons !== 1) return;
  //Drawing path begins on click
  ctx.beginPath();
  //Sets brush size and line cap
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  //Creates stroke
  ctx.stroke();
}

//Collect button elements from planner.html
brush1Button = document.getElementById("brush1");
brush2Button = document.getElementById("brush2");
brush3Button = document.getElementById("brush3");

map1Button = document.getElementById("map1");
map2Button = document.getElementById("map2");
map3Button = document.getElementById("map3");

//Function to handle brush switch, resets stroke colour,
//adds border to selected brush and removes from others
function brush1Switch() {
  ctx.strokeStyle = '#ff0000';
  brush1Button.style.border = "2px solid #ff0000";
  brush2Button.style.border = "0px";
  brush3Button.style.border = "0px";
}

function brush2Switch() {
  ctx.strokeStyle = '#00bd0d';
  brush1Button.style.border = "0px";
  brush2Button.style.border = "2px solid #00bd0d";
  brush3Button.style.border = "0px";
}

function brush3Switch() {
  ctx.strokeStyle = '#002cbd';
  brush1Button.style.border = "0px";
  brush2Button.style.border = "0px";
  brush3Button.style.border = "2px solid #002cbd";
}

//Fetches clear canvas button and clears canvas, and redraws background
clearCanvasButton = document.getElementById("clearCanvas");
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0);
}

//Function to handle map switch, redefines background source,
//draw background to canvas, adds border to selected map and removes from others
function map1Switch() {
  background.src = "assets/Border_Map.webp";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0);
  resize()
  map1Button.style.border = "2px solid #ffffff";
  map2Button.style.border = "0px";
  map3Button.style.border = "0px";
}

function map2Switch() {
  background.src = "assets/Chalet_Map.webp";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0);
  map1Button.style.border = "0px";
  map2Button.style.border = "2px solid #ffffff";
  map3Button.style.border = "0px";
}

function map3Switch() {
  background.src = "assets/House_Map.webp";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background,0,0);
  map1Button.style.border = "0px";
  map2Button.style.border = "0px";
  map3Button.style.border = "2px solid #ffffff";
}

//(Contributors, 2010)