let img;

// Load the image.
function preload() {
  img = loadImage('/BIKE.jpg');
  font = loadFont('/CRfont.otf')
}

function setup() {
  createCanvas(535, 398.6);

  background(50);

  // Draw the image.
  image(img, 0, 0, 535, 398.6);

  // Label the image
  fill(200, 46, 130)
  textFont(font);
  textSize(36);
  text('BIKEMAN!', 50, 250)
  describe('a sihlouette of a man holding a bike in the air');
}