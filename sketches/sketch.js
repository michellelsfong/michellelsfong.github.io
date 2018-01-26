var value = 0;

function setup() {
<<<<<<< HEAD
  aKey = loadSound('assets/keys/a.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    aKey.play();
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
=======
  createCanvas(640, 480);
}

function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
>>>>>>> parent of 3eab3b3... sound
  }
  rect(25, 25, 50, 50);
}