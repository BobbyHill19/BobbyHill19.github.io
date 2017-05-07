function checkTime() {
  var date = new Date();

  var seconds = date.getSeconds();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var day = date.getDay();
  var date = date.getDate();

  var object = {
    minutes: minutes,
    seconds: seconds,
    hours: hours,
    day: day,
    date: date,
  }

  return object;
}


window.addEventListener("load", drawComposition);

function drawComposition() {
  window.setInterval(scaleDivBySeconds, 2000)
}

var whichDiv = 1;

function scaleDivBySeconds() {

  var divs = [ "first-div", "eleventh-div", "tenth-div", "ninth-div", "eight-div",
  "seventh-div", "sixth-div", "fifth-div",  "fourth-div", "third-div", 
  "second-div", "twelfth-div" ];


//   var x = divs[ whichDiv ];
//   var element = document.getElementById( x )
//   console.log( element )

//   element.classList.add( "fadeOut" )

//   var time = checkTime();

//   if( time.hours < 9 ) {
    
//   } else {

//   }


//   if( whichDiv == 11 ) {
//     whichDiv = 0
//   }

//   if (whichDiv < 11){
//     whichDiv = whichDiv + 1;
//   }

//   if (whichDiv == 11){

//   }
// }
