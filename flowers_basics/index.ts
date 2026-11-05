function setup() {

createCanvas(500, 500);

strokeWeight(20);

background("white");

//Draw the right stemm;
stroke("darkgreen");
noFill();
angleMode(DEGREES);
arc(360, 340, 120, 150, 270, 75);

noStroke();

//Draw the Flower Petals;
fill("limegreen");
circle(425, 250, 80);
circle(375, 200, 80);
circle(325, 250, 80);
circle(375, 300, 80);

//Draw the Flower middle
fill("yellow");
circle(375, 250, 65);

strokeWeight(20);

//Draw the left Stemm;
stroke("darkgreen");
noFill();
arc(120, 340, 120, 150, 270, 75);

noStroke();

//Draw the Flower petals;
fill("limegreen");
circle(175, 250, 70);
circle(140.5, 202.5, 70);
circle(81, 218.1, 70);
circle(81, 281.9, 70);
circle(140.5, 297.5, 70);

//Draw the Flower middle;
fill("yellow");
circle(125, 250, 65);


}

 
