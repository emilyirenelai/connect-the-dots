// p5.js functions
/* global createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
    rect, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, 
  mouseX, mouseY, strokeWeight, line, mouseIsPressed, windowWidth, windowHeight, noStroke, 
  keyCode, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize, HSB, background, color, colorMode, createCanvas, ellipse, fill, height, line, mouseIsPressed,
 *mouseX, mouseY, rect, stroke, strokeWeight, width, random, quad, bezier, curve, box, WEBGL, rotateX, rotateY, frameCount,torus, 
  previousX, previousY, saturation, brushSaturation, pic, currentTime, frameRate, base_image, img1, img2, img3, list, key*/

let brushHue, prevMouseX, prevMouseY, listpic, img1, img2, img3, img4, img5, img6, brushBrightness, brushSaturation, list, pic, strokeW, imgg, r;

function preload() {
  img1 = loadImage('https://cdn.glitch.com/021ddeed-1016-4f4a-891f-1e309cd62922%2Fwhaledot.png?v=1626476629550');
  //Whale
  
  img2 = loadImage('https://cdn.glitch.com/021ddeed-1016-4f4a-891f-1e309cd62922%2Fdino.png?v=1626479029227'); 
  //Dinosaur
  
  img3 = loadImage('https://cdn.glitch.com/021ddeed-1016-4f4a-891f-1e309cd62922%2Fducky.png?v=1626479144600'); 
  //Duck
  
  img4 = loadImage(
    "https://cdn.glitch.com/b5150738-20b3-4995-9125-964994de6f30%2FMarioConnect.jpg?v=1594412925418");
  //Mario
  img5 = loadImage(
    "https://cdn.glitch.com/b5150738-20b3-4995-9125-964994de6f30%2FAshandPickachuConnect.png?v=1594413316460"); 
  //Ash and Pikachu
  img6 = loadImage(
    "https://cdn.glitch.com/b5150738-20b3-4995-9125-964994de6f30%2FSpongebobConnect.jpg?v=1594413310158"); 
  //Spongebob
}

function setup() {
  // Canvas & color settings
  width = 1400;
  height = 1400;
  createCanvas(width, height);
  colorMode(HSB, 360, 10, 100);
  prevMouseX = 0;
  prevMouseY = 0; 
  saturation = 50
  brushHue = 0;
  strokeW = 15;
  background(95);
  strokeWeight(6);
  brushHue = 0;
  pic = 0;
  list = [img1, img2, img3, img4, img5, img6];
  

  // Doesn't clear every frame, draws the background to clear the screen at the beginning of the frame
  clearScreen();
  //pickRandomBackground();
  image(img1, 200, 200); //draw initial puzzle
  
}


function keyPressed() {
  //clear entire canvas
  if (key == 0) {
    background(95);
  }
  if (key == "n") {
    listpic = list[pic]; 
    pic = (pic + 1) % 6;  //add one to the pick
    background(95);//reset screen
    image(list[pic], 200, 200); //rotate through image options 
  } 
}
  
function textKey() {
  fill("black");
  stroke("white");
  textSize(50);
  //print out the text/titles
  text("Connect the dots!", 30, 70);
  textSize(20);
  text("Key shortcuts:", 100, 100);
  text("n = next puzzle", 100, 130);
  text("0 = clear all", 100, 160);
}
  
  
function draw() {
  
  //choose a random color
  chooseColors(); 
  
  //display the text/titles
  textKey();
  
  
  //if mouse is pressed draw
  if (mouseIsPressed) {
    line(prevMouseX, prevMouseY, mouseX, mouseY); //makes a line from previous mouse spot to current 
  }
  prevMouseX = mouseX;
  prevMouseY = mouseY;
  }
  

/* A function that sets the stroke and fill of our "paint brush". */
function chooseColors() {
  brushHue += 10; //one is not a fast enough color change
  if (brushHue >= 360) {
    brushHue %= 360; //% so we get the whole spectrum of colors
  }
  stroke(brushHue, brushSaturation, brushBrightness);
  fill(brushHue, brushSaturation, brushBrightness);
}
  
function clearScreen() {
  //saveCanvas();
  background(95);
  brushHue = 0;
  brushSaturation = 50;
  brushBrightness = 80;
}
  

