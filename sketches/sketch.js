var aSound;
var bSound;
var cSound;
var dSound;
var eSound;
var fSound;
var gSound;
var hSound;
var iSound;
var jSound;
var value = 0;
var vol = 0.1;

function setup() {
  aSound = loadSound('assets/keys/a.mp3');
  bSound = loadSound('assets/keys/b.mp3');
  cSound = loadSound('assets/keys/c.mp3');
  dSound = loadSound('assets/keys/d.mp3');
  eSound = loadSound('assets/keys/e.mp3');
  fSound = loadSound('assets/keys/f.mp3');
  gSound = loadSound('assets/keys/g.mp3');
  hSound = loadSound('assets/keys/h.mp3');
  iSound = loadSound('assets/keys/i.mp3');
  jSound = loadSound('assets/keys/j.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function keyTyped() {
  if (key === 'a') {
    value = 50;
    aSound.setVolume(vol);
    aSound.play();
  } else if (key === 'b') {
    value = 255;
    bSound.setVolume(vol);
    bSound.play();
  } else if (key === 'c') {
    value = 100;
    cSound.setVolume(vol);
    cSound.play();
  } else if (key === 'd') {
    value = 100;
    dSound.setVolume(vol);
    dSound.play();
  } else if (key === 'e') {
    value = 100;
    eSound.setVolume(vol);
    eSound.play();
  } else if (key === 'f') {
    value = 100;
    fSound.setVolume(vol);
    fSound.play();
  } else if (key === 'g') {
    value = 100;
    gSound.setVolume(vol);
    gSound.play();
  } else if (key === 'h') {
    value = 255;
    hSound.setVolume(vol);
    hSound.play();
  } else if (key === 'i') {
    value = 255;
    iSound.setVolume(vol);
    iSound.play();
  } else if (key === 'j') {
    value = 255;
    jSound.setVolume(vol);
    jSound.play();
  }

  return false;
}