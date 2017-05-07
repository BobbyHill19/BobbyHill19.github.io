function checkTime() {
  var date = new Date();
  var seconds = date.getSeconds();
  var object = {
    seconds: seconds,
  }
  return object;
}

window.addEventListener("load", drawComposition);
function drawComposition() {
  window.setInterval(scaleDivBySeconds, 1000)
}

var whichDiv = 1;
function scaleDivBySeconds() {
  var divs = [ "first-div", "eleventh-div", "tenth-div", "ninth-div", "eight-div",
  "seventh-div", "sixth-div", "fifth-div",  "fourth-div", "third-div", 
   "second-div", ];

  // make an array with div names ['first-div']
  // get the current div ID name from the array using whichDiv
  // divs[ whichDiv ]
  // put that in a var
  // get the div using document.getElementById
  // put a CSS class on the element that will fade it out
  // element.classList.add('fadeOut')

  //put a transition on the last div
  // if whichDiv the last number:
    // change the position to center of the screen
    // set whichDiv to zero

  var x = divs[ whichDiv ];
  var element = document.getElementById( x )
  console.log( element )
  element.classList.add( "fadeOut" )
  var time = checkTime();

  //div.style.width = time.seconds * 9 + "px";
  //console.log( time.date )

  if( time.hours < 9 ) {  
  } else {
  }

  // whichDiv = whichDiv + ;
  if( whichDiv == 11 ) {
    whichDiv = 0
  }
  if (whichDiv < 11){
    whichDiv = whichDiv + 1;
  }
  if (whichDiv == 11){

  }
}


