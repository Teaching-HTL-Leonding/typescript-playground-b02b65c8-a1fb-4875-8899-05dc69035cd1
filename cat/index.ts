function setup() {
    createCanvas(1000, 500);
    
    background("lightblue");

    //Draw the ears
    triangle(120, 110, 140, 60, 160, 100);   // left ear
    triangle(180, 100, 200, 60, 210, 100);

    //Draw the head
    fill("white") 
    ellipse(170, 210, 210, 210)

    }
