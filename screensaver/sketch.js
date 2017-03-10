function setup(){
  createCanvas(windowWidth, windowHeight,  WEBGL);
  background(0,0,0);
}

function draw(){
  
  var purple = map(mouseX, 0, width, 0, 255);
  var yellow = map(mouseY, 0, height, 0, 255);
  
  
  rotateY(frameCount * 0.01);

  for(var j = 0; j < 5; j++){
    push();
    
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.3 + j) * 100, 
      sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.0050);
      
      push();
      ellipse(10, 10, 34); 
      pop();
    }
    pop();
  }
}
