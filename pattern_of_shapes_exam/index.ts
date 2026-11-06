function setup() {
}

function mouseMoved() {
  createCanvas(600, 400);
  background("white");
  stroke("black");
  strokeWeight(2);

  //Draw the rectangles
  fill("gold");
  rect(width * 0.1, height * 0.1, width * 0.2, height * 0.2);
  rect(width * 0.1, height * 0.7, width * 0.2, height * 0.2);
  rect(width * 0.7, height * 0.1, width * 0.2, height * 0.2);
  rect(width * 0.7, height * 0.7, width * 0.2, height * 0.2);

  //Draw the big rectangle

  fill("steelblue");
  rect(width * 0.3, height * 0.3, width * 0.4, height * 0.4);

  //Draw the big circle
  fill("white");
  circle(width / 2, height / 2, min(width, height) * 0.4);

  //Draw the circles around
  fill("tomato");
  circle(width*0.2, height/2, min(width, height)*0.2);
  circle(width*0.5, height*0.2, min(width, height)*0.2);
  circle(width*0.8, height/2, min(width, height)*0.2);
  circle(width*0.5, height*0.8, min(width, height)*0.2);

  //Draw the red circle in the middle
  fill("tomato");
  circle(mouseX, mouseY, 40);

  
}

