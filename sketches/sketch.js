function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
}