function setup() {
     createCanvas(700, 500);
    
    background("lightblue");

    //Draw the ears
    triangle(120, 110, 140, 60, 160, 100);   // left ear
    triangle(180, 100, 200, 60, 220, 110);   // right ear 

    //Draw the head
    fill("white") ;
    ellipse(170, 210, 210, 210);

    //Draw the eyes
    fill("grey");
    ellipse(205, 190, 30);

    //Draw the eyes
    ellipse(135, 190, 30);

    //Draw the nose
    fill("pink");
    triangle(170, 240, 150, 220, 190, 220);

    //Draw the left whiskers
    fill("grey");
    line(145, 230, 90, 220);
    line(145, 225, 90, 200);
    line(145, 220, 90, 180);

    //Draw the right whiskers
    line(195, 230, 250, 220);
    line(195, 225, 250, 200);
    line(195, 220, 250, 180);
      
    //Draw the mouth
    line(170, 240, 170, 260);
    line(170, 260, 155, 270);
    line(170, 260, 185, 270);
    line(130, 260, 155, 270);
    line(185, 270, 210, 260);

    //Draw the sun
    fill("yellow");
    circle(700, 0, 300);
}
