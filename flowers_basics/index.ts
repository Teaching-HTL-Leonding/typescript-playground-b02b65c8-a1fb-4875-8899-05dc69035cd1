function setup() {

  createCanvas(500, 500);

strokeWeight(20)

  background("white");

   //Draw the stem of the right Flower;
  noFill();
  stroke("darkgreen");
  arc(375, 300, 100, 150, 30, 45);

  noStroke();

  //Draw the first Flower padels;
  fill("limegreen");
  circle(425, 200, 80);
  circle(375, 150, 80);
  circle(325, 200, 80);
  circle(375, 250, 80);

  //Draw the right Flower middle;
  fill("yellow");
  circle(375, 200, 65);

  //Draw the stem of the left Flower;
  noFill();
  stroke("darkgreen");
  arc(125, 300, 100, 150, 30, 45);

  noStroke();

  //Draw the left Flower padels;
  fill("limegreen");
  circle(175, 200, 70);
  circle(140.5, 247.5, 70);
  circle(81, 231.9, 70);
  circle(81, 168.1, 70);
  circle(140.5, 152.5, 70);

  //Draw the left Flower middle;
  fill("yellow");
  circle(125, 200, 65); 

  

}
