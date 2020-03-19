function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, RGB, 0, 255, true))
  quad(mouseX, mouseY, pmouseX, pmouseY);
  triangle(width - mouseX, height = mouseY, width - pmouseX, height = pmouseY);

}

}
