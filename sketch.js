function setup() {
  createCanvas(400, 400);
  background(220);

  strokeWeight(15);
}

function draw() {

if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, RGB, 0, 255, true))
  line(mouseX, mouseY, pmouseX, pmouseY);
  line(width - mouseX, height = mouseY, width - pmouseX, height = pmouseY);
  square(mouseX, mouseY, pmouseX, pmouseY);
  square(width - mouseX, height = mouseY, width - pmouseX, height = pmouseY);

}

}

function keyTyped(){

if (key === 's'){
  // saves image
  saveCanvas('fileName', 'png');
}

return false;

}
