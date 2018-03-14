// Where is the circle
var x, y;
bg = 200;

function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = random(width / 2);
  y = 300;
}

function draw() {
  background(bg);
  // Draw a circle
  stroke(255);
  fill(255);
  ellipse(x, y, 24, 24);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;

  }

  if (key === 'a') {
		background (bg, bg, bg,0);
		bg = 100;
	} else {
		background (bg);
	}
}