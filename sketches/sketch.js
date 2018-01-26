var aSound;
var bSound;

var hSound;
var eSound;
var lSound;
var oSound;

var value = 0;

function setup() {
  aSound = loadSound('assets/keys/a.mp3');
  bSound = loadSound('assets/keys/b.mp3');
  hSound = loadSound('assets/keys/h.mp3');
  eSound = loadSound('assets/keys/e.mp3');
  lSound = loadSound('assets/keys/l.mp3');
  oSound = loadSound('assets/keys/o.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function keyTyped() {
  if (key === 'a') {
    value = 255;
    aSound.setVolume(0.1);
    aSound.play();
  }

  else if {} (key === 'b') {
    value = 255;
    bSound.setVolume(0.1);
    bSound.play();
  }

  return false;
}

function mousePressed() {
  if ( aSound.isPlaying() ) { // .isPlaying() returns a boolean
    hSound.stop();
    background(255,0,0);
  } else {
    hSound.play();
    background(0,255,0);
  }

  if ( bSound.isPlaying() ) { // .isPlaying() returns a boolean
    eSound.stop();
    background(255,0,255);
  } else {
    eSound.play();
    background(0,255,255);
  }
}