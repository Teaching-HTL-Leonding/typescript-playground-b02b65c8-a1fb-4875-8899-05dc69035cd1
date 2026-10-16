function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  background("lightblue");

  noFill();
  circle(mouseX, mouseY, 27.5);
  circle(mouseX, mouseY, 50);

  line(mouseX-30, mouseY, mouseX+30, mouseY);
  line(mouseX, mouseY-30, mouseX, mouseY+30);
}
