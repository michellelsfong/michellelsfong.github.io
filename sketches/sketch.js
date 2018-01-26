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
var kSound;
var lSound;
var mSound;
var nSound;
var oSound;
var pSound;
var qSound;
var rSound;
var sSound;
var tSound;
var uSound;
var vSound;
var wSound;
var xSound;
var ySound;
var zSound;
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
  kSound = loadSound('assets/keys/k.mp3');
  lSound = loadSound('assets/keys/l.mp3');
  mSound = loadSound('assets/keys/m.mp3');
  nSound = loadSound('assets/keys/n.mp3');
  oSound = loadSound('assets/keys/o.mp3');
  pSound = loadSound('assets/keys/p.mp3');
  qSound = loadSound('assets/keys/q.mp3');
  rSound = loadSound('assets/keys/r.mp3');
  sSound = loadSound('assets/keys/s.mp3');
  tSound = loadSound('assets/keys/t.mp3');
  uSound = loadSound('assets/keys/u.mp3');
  vSound = loadSound('assets/keys/v.mp3');
  wSound = loadSound('assets/keys/w.mp3');
  xSound = loadSound('assets/keys/x.mp3');
  ySound = loadSound('assets/keys/y.mp3');
  zSound = loadSound('assets/keys/z.mp3');
  createCanvas(720, 200);
  background(255,0,0);
}

//function draw() {
//  fill(value);
//  rect(25, 25, 50, 50);
//}

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
  } else if (key === 'k') {
    value = 255;
    kSound.setVolume(vol);
    kSound.play();
  } else if (key === 'l') {
    value = 255;
    lSound.setVolume(vol);
    lSound.play();
  } else if (key === 'm') {
    value = 255;
    mSound.setVolume(vol);
    mSound.play();
  } else if (key === 'n') {
    value = 255;
    nSound.setVolume(vol);
    nSound.play();
  } else if (key === 'o') {
    value = 255;
    oSound.setVolume(vol);
    oSound.play();
  } else if (key === 'p') {
    value = 255;
    pSound.setVolume(vol);
    pSound.play();
  } else if (key === 'q') {
    value = 255;
    qSound.setVolume(vol);
    qSound.play();
  } else if (key === 'r') {
    value = 255;
    rSound.setVolume(vol);
    rSound.play();
  } else if (key === 's') {
    value = 255;
    sSound.setVolume(vol);
    sSound.play();
  } else if (key === 't') {
    value = 255;
    tSound.setVolume(vol);
    tSound.play();
  } else if (key === 'u') {
    value = 255;
    uSound.setVolume(vol);
    uSound.play();
  } else if (key === 'v') {
    value = 255;
    vSound.setVolume(vol);
    vSound.play();
  } else if (key === 'w') {
    value = 255;
    wSound.setVolume(vol);
    wSound.play();
  } else if (key === 'x') {
    value = 255;
    xSound.setVolume(vol);
    xSound.play();
  } else if (key === 'y') {
    value = 255;
    ySound.setVolume(vol);
    ySound.play();
  } else if (key === 'z') {
    value = 255;
    zSound.setVolume(vol);
    zSound.play();
  }

  return false;
}