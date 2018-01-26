var value = 0;

function setup() {
  aKey = loadSound('assets/keys/a.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function keyPressed() {
  if (keyCode === a) {
    aKey.play();
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}

function keyPressed() {
  // Do something
  return false; // prevent any default behaviour
}