function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  //noLoop ()
 background(255,34,213)
  fill(194,241,21,10)
  
  ellipseMode (CENTER)
 translate(mouseY, mouseX)
 rotate(radians(mouseX) )
  
  for(var i = 0; i<100; i++){
    ellipse( mouseX, mouseY, 4*i, 14*i)
  }

//translate (300, 200)
 // fill (0)
//  for (var i = 0; i < 100; i ++ ){
//  ellipse( mouseX * i,mouseY * i,100,100)
 // }
  
 
  }
function mousePressed(){
  background(255)
}
