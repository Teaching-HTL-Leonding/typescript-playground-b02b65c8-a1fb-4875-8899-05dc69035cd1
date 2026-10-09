function setup() {
  createCanvas(500, 1000);
  
  background("white");
  
  strokeWeight(15)

  //Draw the first stem;
  noFill()
  stroke("darkgreen");
  arc(260, 350, 100, 150, 30, 45);

  noStroke()

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

  







  }
