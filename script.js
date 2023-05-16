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


const canvas = document.getElementById("plannerCanvas");
// then the Canvas Context - this lets us draw
const ctx = canvas.getContext("2d");

var background = new Image();
background.src = "assets/Border_Map.webp";

// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function(){
    ctx.drawImage(background,0,0);   
}

//var canvas = document.createElement('canvas');
//document.body.appendChild(canvas);

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
//canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
//var ctx = canvas.getContext('2d');
//resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX-60;
  pos.y = e.clientY-155;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#ff0000';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

//https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse