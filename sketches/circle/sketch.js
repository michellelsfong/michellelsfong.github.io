var x;
var y;
var outsideRadius = 150;
var insideRadius = 130;

function setup() {
  createCanvas(720, 400);
  background(204);
  x = width/2;
  y = height/2;
}

function draw() {
  background(204);
  
  var numPoints = int(map(mouseX, 0, width, 60, 120));
  var angle = 0;
  var angleStep = 180.0/numPoints;
    
  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= numPoints; i++) {
    var px = x + cos(radians(angle)) * outsideRadius;
    var py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py); 
    angle += angleStep;
  }
  endShape();
}
