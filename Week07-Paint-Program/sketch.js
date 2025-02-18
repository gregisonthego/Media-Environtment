bgColor = 220

function setup() {
  createCanvas(500, 400);
  background(bgColor);
  
  //setup button red
  let redButton;
  redButton = createButton('Red');
  redButton.size (100, 50);
  redButton.position(10,10);
  redButton.style('background:red');
  redButton.mousePressed(changeRed);
  
   //setup button blue
  let blueButton;
  blueButton = createButton('Blue');
  blueButton.size (100, 50);
  blueButton.position(10,70);
  blueButton.style('background:blue');
  blueButton.mousePressed(changeBlue);
  
    //setup eraser
  let clearButton;
  clearButton = createButton('Erase');
  clearButton.size (100, 50);
  clearButton.position(10,130);
  clearButton.style('background:white');
  clearButton.mousePressed(changeClear);
  
  //setup reset
  let resetButton;
  resetButton = createButton('Reset');
  resetButton.size (100, 50);
  resetButton.position(10,190);
  resetButton.style('background:bgColor');
  resetButton.mousePressed(changeReset);
  
}

function changeRed() {
  fill('Red')
}

function changeBlue() {
  fill('Blue')
}

function changeClear() {
  fill(bgColor)
}

function draw() {
  noStroke()
  ellipse(mouseX, mouseY, 30, 30)
}