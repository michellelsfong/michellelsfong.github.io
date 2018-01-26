var song;
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
  song = loadSound('assets/keys/a.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}