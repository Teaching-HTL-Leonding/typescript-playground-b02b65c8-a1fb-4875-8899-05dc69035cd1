function setup() {
    
    createCanvas (1000, 500);

    background ("lightblue");

    // Draw the house
    fill("yellow");
    rect(150, 200, 100, 100);

    // Door of the house
    fill("red");
    rect(185, 250, 30, 50);

    // 1.Window of the house
    fill("darkblue"); 
    rect(170, 210, 20, 20);

    // 2.Window of the house
    rect(210, 210, 20, 20);

    // Draw the roof
    fill("yellow");
    triangle(140, 200, 260, 200, 200, 150);

    // Draw the treestump
    fill("brown");
    rect(280, 220, 20, 80);

    // 1.Draw the tree
    fill("lightgreen");
    ellipse(270, 210, 70, 70);

    // 2.Draw the tree
    fill("green");
    ellipse(290, 180, 55, 55);

    // 3.Draw the tree
    fill("darkgreen");
    ellipse(305, 210, 64, 64);

    // Draw the sun
    fill("yellow");
    ellipse(500, 100, 100, 100);

    // Draw the sunbeams
    fill("yellow")
    
    }
