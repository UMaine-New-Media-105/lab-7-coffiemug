let circleCount;
let buffer;

function setup() {
  createCanvas(400, 400);
  circleCount=6
  buffer=(width/circleCount)/2
}

function draw() {
  background(220);
  translate(buffer,buffer)
  push();
  for(let rowsDrawn=0;rowsDrawn<circleCount;rowsDrawn++){
    for(let columnsDrawn=0;columnsDrawn<circleCount;columnsDrawn++){
  fill('red');
    ellipse(0,0,width/circleCount);
    translate(width/circleCount,width/circleCount);
  }
  }
  pop();
}

function rowOfCircles(){
  for(let circlesDrawn=0;circlesDrawn<circleCount;circlesDrawn++){
    
    
    
  }
}
