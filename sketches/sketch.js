var value = 0;

function setup() {
  aKey = loadSound('assets/keys/a.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    aKey.play();
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}