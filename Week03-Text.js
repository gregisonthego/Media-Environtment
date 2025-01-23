function setup() {
  createCanvas(800, 400);
   background(226, 213, 135);
}

function draw() {
  fill(24, 35, 200)
  textStyle(BOLDITALIC)
  textFont('Courier New', 32)
  text('Harrisburg University', 50, 50);
  fill(255, 255, 255)
  textStyle(NORMAL)
  textFont('Courier New', 14)
  text('my 3 sentences', 100, 100, 700)
}