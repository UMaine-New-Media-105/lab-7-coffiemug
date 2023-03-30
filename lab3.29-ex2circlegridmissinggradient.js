let circleCount;
let buffer;

function setup() {
  createCanvas(400, 400);
  circleCount=6
  buffer=(width/circleCount)/2
}

function draw() {
  background('hsl(220,60%,50%)');
  translate(buffer,buffer)
  push();
  for(let rowsDrawn=0;rowsDrawn<circleCount;rowsDrawn++){
    push();
    for(let circlesDrawn=0;circlesDrawn<circleCount;circlesDrawn++){
  fill('darkblue');
      stroke('white');
    ellipse(0,0,width/circleCount);
    translate(width/circleCount,0);
  }
    pop();
    push();
  translate(0,width/circleCount)
  }
  pop();
}

function rowOfCircles(){
  for(let circlesDrawn=0;circlesDrawn<circleCount;circlesDrawn++){
    
    
    
  }
}
