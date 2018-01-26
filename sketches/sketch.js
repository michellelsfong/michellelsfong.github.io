var aSound;
var bSound;
var hSound;
var value = 0;

function setup() {
  aSound = loadSound('assets/keys/a.mp3');
  bSound = loadSound('assets/keys/b.mp3');
  hSound = loadSound('assets/keys/h.mp3');
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
  } else if (key === 'b') {
    value = 255;
    bSound.setVolume(0.1);
    bSound.play();
  } else if (key === 'h') {
    value = 255;
    hSound.setVolume(0.1);
    hSound.play();
  }

  return false;
}