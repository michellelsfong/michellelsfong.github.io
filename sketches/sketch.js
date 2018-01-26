var aSound;
var bSound;
var value = 0;

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function keyTyped() {
  if (key === 'a') {
    value = 255;
  } else if (key === 'b') {
    value = 0;
  }
  // uncomment to prevent any default behavior
  // return false;
}

function setup() {
  aSound = loadSound('assets/keys/a.mp3');
  bSound = loadSound('assets/keys/b.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if ( aSound.isPlaying() ) { // .isPlaying() returns a boolean
    aSound.stop();
    background(255,0,0);
  } else {
    aSound.play();
    background(0,255,0);
  }

  if ( bSound.isPlaying() ) { // .isPlaying() returns a boolean
    bSound.stop();
    background(255,0,255);
  } else {
    bSound.play();
    background(0,255,255);
  }
}