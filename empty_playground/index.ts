function setup() {

    createCanvas(400, 400);

    background(240, 230, 200); //Sandy background

   
    // --- OCEAN ---
    noStroke();
    fill(30, 144, 255); // Ocean blue
    rect(0, 120, width, 80);

    // Ocean wave details
    stroke(255, 255, 255, 150);
    strokeWeight(3);
    noFill();
    arc(60, 150, 40, 10, 0, PI);
    arc(180, 170, 50, 12, 0, PI);
    arc(320, 140, 45, 10, 0, PI);

    // --- SAND BEACH ---
    noStroke();
    fill(238, 214, 152); // Sand color
    rect(0, 190, width, 210);

    // Shoreline foam
    stroke(255);
    strokeWeight(4);
    noFill();
    arc(100, 192, 120, 15, 0, PI);
    arc(280, 192, 150, 15, 0, PI);
    arc(440, 192, 100, 15, 0, PI);

    // --- BEACH CHAIR & UMBRELLA ---
    // Umbrella pole
    stroke(120, 100, 80);
    strokeWeight(4);
    line(80, 210, 80, 310);

    // Umbrella canopy
    noStroke();
    fill(255, 80, 80); // Red stripe
    arc(80, 210, 100, 60, PI, 0);
    fill(255); // White stripe
    arc(80, 210, 60, 60, PI, 0);
    fill(255, 80, 80); // Center red
    arc(80, 210, 20, 60, PI, 0);

    // Beach chair structure
    stroke(160, 82, 45);
    strokeWeight(4);
    line(45, 310, 95, 310); // Frame base
    line(45, 310, 30, 280); // Backrest frame
    line(40, 310, 40, 325); // Left leg
    line(90, 310, 90, 325); // Right leg

    // Chair blue canvas
    stroke(30, 144, 255);
    strokeWeight(5);
    line(32, 282, 93, 308);

     const centerX = width / 2;
    const centerY = height / 2;

    //Legs
    stroke(180, 0, 0);
    strokeWeight(6);
    noFill();

    // Left legs
    line(centerX - 40, centerY, centerX - 80, centerY - 20);
    line(centerX - 40, centerY + 10, centerX - 85, centerY + 10);
    line(centerX - 40, centerY + 20, centerX - 75, centerY + 40);

    // Right legs
    line(centerX + 40, centerY, centerX + 80, centerY - 20);
    line(centerX + 40, centerY + 10, centerX + 85, centerY + 10);
    line(centerX + 40, centerY + 20, centerX + 75, centerY + 40);

    // Claws / Pincers
    fill(220, 30, 30);
    strokeWeight(2);
    stroke(150, 0, 0);

    // Body
    fill(220, 30, 30);
    ellipse(centerX, centerY, 110, 75);

    // Eye Stalks
    stroke(180, 0, 0);
    strokeWeight(4);
    line(centerX - 20, centerY - 30, centerX - 25, centerY - 50);
    line(centerX + 20, centerY - 30, centerX + 25, centerY - 50);

    // Eyes 
    noStroke();
    fill(255);
    ellipse(centerX - 25, centerY - 52, 14, 14);
    ellipse(centerX + 25, centerY - 52, 14, 14);

    // Pupils
    fill(0);
    ellipse(centerX - 25, centerY - 52, 6, 6);
    ellipse(centerX + 25, centerY - 52, 6, 6);

    // --- RIGHT ARM & CLAW ---
    // 1. Arm line
    stroke(150, 0, 0);
    strokeWeight(2);
    line(centerX + 30, centerY - 20, centerX + 70, centerY - 60);

    // 2. Back of the claw (palm)
    fill(220, 30, 30);
    ellipse(centerX + 80, centerY - 70, 35, 25);

    // 3. THE $100 BILL (larger and clearer)
    push();
    translate(centerX + 102, centerY - 82); // Shifted outward so it sticks out clearly
    rotate(-0.15); // Slightly flatter tilt for easier reading

    // Bill background
    fill(195, 235, 195); // Brighter green for better visibility
    stroke(30, 90, 40);
    strokeWeight(1.5);
    rectMode(CENTER);
    rect(0, 0, 52, 28, 3); // Slightly larger bill size

    // Inner border
    noFill();
    stroke(50, 110, 60);
    strokeWeight(1);
    rect(0, 0, 44, 22);

    // Big, bold $100 text
    fill(20, 70, 30);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("$100", 0, 0);
    pop();

    // 4. Front pincer tip (pinching just the bottom edge of the bill)
    fill(220, 30, 30);
    stroke(150, 0, 0);
    strokeWeight(2);
    triangle(
        centerX + 88, centerY - 70,
        centerX + 73, centerY - 83,
        centerX + 73, centerY - 65);

    // --- TITLE TEXT "CRAB" ---
    fill(180, 0, 0); // Bold red text color
    noStroke();
    textSize(36); // Big, easy-to-read font size
    textAlign(CENTER, TOP); // Centers the text horizontally at the top
    textStyle(BOLD);
    text("CRAB", width / 2, 15); // Drawn at top center (x = width / 2, y = 15)  

    // --- LEFT ARM & CLAW ---
    // 1. Arm line
    stroke(150, 0, 0);
    strokeWeight(2);
    line(centerX - 30, centerY - 20, centerX - 70, centerY - 60);

    // 2. Back of the claw (palm)
    fill(220, 30, 30);
    ellipse(centerX - 80, centerY - 70, 35, 25);

    // 3. THE $100 BILL (mirrored on left side)
    push();
    translate(centerX - 102, centerY - 82); // Symmetrical X offset (-102 instead of +102)
    rotate(0.15); // Mirrored tilt angle (+0.15 instead of -0.15)

    // Bill background
    fill(195, 235, 195);
    stroke(30, 90, 40);
    strokeWeight(1.5);
    rectMode(CENTER);
    rect(0, 0, 52, 28, 3);

    // Inner border
    noFill();
    stroke(50, 110, 60);
    strokeWeight(1);
    rect(0, 0, 44, 22);

    // Big, bold $100 text
    fill(20, 70, 30);
    noStroke();
    textSize(11);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text("$100", 0, 0);
    pop();

    // 4. Front pincer tip (pinching the left bill edge)
    fill(220, 30, 30);
    stroke(150, 0, 0);
    strokeWeight(2);
    triangle(
        centerX - 88, centerY - 70,
        centerX - 73, centerY - 83,
        centerX - 73, centerY - 65);

    // --- SMILE ---
    noFill();
    stroke(120, 0, 0); // Dark red stroke for the mouth
    strokeWeight(2.5);
    arc(centerX, centerY + 5, 24, 16, 0, PI); // Curved arc forming a smile

}