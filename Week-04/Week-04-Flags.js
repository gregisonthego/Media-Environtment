// Flag of Denmark

var canW = 740 //canvas width
var canH = 480 //canvas height

function setup() {
  createCanvas(canW, canH);
  background(200, 16, 46);
}

function draw() {
  var l2Xpos = canW*14/37
  stroke(255, 255, 255)
  strokeWeight(canW*4/37)
  line(0, canH/2, canW, canH/2) //horiz line
  line(l2Xpos, 0, l2Xpos,canH) //vet line
}

// Flag of Congo
var canW = 600 //canvas width
var canH = 400 //canvas height

function setup() {
  createCanvas(canW, canH);
  background(251, 222, 74);
}

function draw() {
  noStroke()
  fill(0,149,67)
  triangle(0,0,canW*(2/3), 0, 0,canH)//GreenTriangle
  fill(220, 36, 31)
  triangle(canW,0, canW, canH, canW*(1/3), canH)//RedTriangle
  
}
