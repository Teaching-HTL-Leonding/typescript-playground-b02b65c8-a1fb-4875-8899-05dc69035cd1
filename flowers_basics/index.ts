function setup() {
  createCanvas(1000, 1000);
  
  background("white");
  
  strokeWeight(17)

  //Draw the first stem;
  noFill();
  stroke("darkgreen");
  arc(260, 350, 100, 150, 30, 45);

  noStroke();

   //Draw the Flower Petals;
  fill("lime");
  circle(265.5, 297.5, 70);
  circle(300, 250, 70);
  circle(265.5, 202.5, 70);
  circle(206, 218.1, 70);
  circle(206, 281.9, 70);

   //Draw the flower middle;
  fill("yellow");
  circle(250, 250, 65);

  //Draw the stem;
  noFill();
  stroke("darkgreen");
  arc(760, 350, 100, 150, 30, 45);
  
  noStroke();

  //Draw the Flower Petals;
  fill("lime");
  circle(800, 250, 80);
  circle(750, 300, 80);
  circle(700, 250, 80);
  circle(750, 200, 80);

  //Draw the Flower middle;
  fill("yellow");
  circle(750, 250, 65);








