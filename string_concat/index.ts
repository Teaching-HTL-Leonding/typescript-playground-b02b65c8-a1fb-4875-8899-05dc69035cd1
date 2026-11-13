function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

let clickPositions:string ="0/0"

function mouseClicked() {
  fill("darkblue");
  circle(mouseX, mouseY, 15);

  clickPositions = `${clickPositions}, ${round(mouseX)}/${round(mouseY)}`;

  text(clickPositions, 10, 20);
}
