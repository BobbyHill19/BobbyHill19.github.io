window.addEventListener("mousemove", onMouseMove)

function onMouseMove(e) {
  var positionX = e.clientX;
  var positionY = e.clientY;

  document.getElementById("mouseX").innerHTML = positionX;
  document.getElementById("mouseY").innerHTML = positionY;

  moveDivs(positionX, positionY);
}

function moveDivs(x,y) {
  var divs = document.getElementsByTagName("p");
  var height = window.innerHeight;

  for(var i = 0; i < divs.length; i++) {
    divs[i].style.transform =
      "rotate(" + (x - 2*i) + "deg)";

    divs[i].style.filter = 
      "blur(" + (y * 2 / height * i) + "px)";
  }
}
