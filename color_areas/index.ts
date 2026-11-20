function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    //orange rect
    fill("orange");
    rect(0, 0, width / 3, height);

    //green rect
    fill("green");
    rect(width / 3, 0, width / 3, height);

    //red rect
    fill("red");
    rect((width * 2) / 3, 0, width / 3, height);

    //green rect
    fill("black");
    rect(0, height * 0.7, width, height * 0.3);

}

let message: string;


function mouseClicked() {
    //Text Art/zentriert
    fill("black");
    rect(0, height * 0.7, width, height * 0.3);
    textStyle(BOLD);
    fill("white");
    textSize(20);
    textAlign(CENTER);

    //Farbe drücken
    if (mouseX < width / 3) {
        message = "Orange";
    } else if (mouseX <= 2 * width / 3) {
        message = "green";
    } else {
        message = "red";
    }
    text(message, width / 2, height * 0.87);
}
