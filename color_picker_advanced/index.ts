function setup() {

    createCanvas(360, 200);

    noStroke();
    fill("red");
    background(0, 100, 100);
}

function mouseMoved() {

    colorMode(HSB);
     const colorHue: number = round(mouseX);
    const colorSaturation: number = min(100, round(mouseY));  

    fill(colorHue, colorSaturation, 100);
    rect(0, 0, 360, 100);

}

function mouseClicked() {
    const colorHue: number = round(mouseX);
    const colorSaturation: number = min(100, round(mouseY));  

    fill(colorHue, colorSaturation, 100);
    rect(0, 100, 360, 100);

    fill("black");
    text(`H: ${colorHue}, S: ${colorSaturation}, B: 100`, 10, 190,);
}
