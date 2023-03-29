let starsAcross;
let starSize;
let buffer;
//let extra;

function setup() {
  angleMode(DEGREES);
  createCanvas(400, 400);
  starsAcross = 8;
  starSize = width / starsAcross;
  buffer = starSize / 2;
  //extra=width-(starsAcross*starSize)
  //buffer=extra/2.5
  starColors = ["hsl(55,100%,70%)", "hsl(175,100%,85%)", "hsl(40,100%,80%)"];
  noLoop();
}

function draw() {
  background(20, 100, 220);
  push();
  for (let starsDrawn = 0; starsDrawn < starsAcross; starsDrawn++) {
    lilStar(buffer, buffer, random(starColors));
    translate(width / starsAcross, height / starsAcross);
  }
  pop();

  push();
  for (let starsDrawn = 0; starsDrawn < starsAcross; starsDrawn++) {
    lilStar(buffer, height - buffer, random(starColors));
    translate(width / starsAcross, -height / starsAcross);
  }
  pop();
}

function lilStar(x, y, color) {
  push();
  noStroke();
  fill(color);
  translate(x, y);
  push();
  for (let starPoints = 0; starPoints < 4; starPoints++) {
    triangle(-10, 0, 10, 0, 0, 30);
    rotate(90);
  }
  pop();
  pop();
}
