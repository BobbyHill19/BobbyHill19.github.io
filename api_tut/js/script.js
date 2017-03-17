$(document).ready(function() {
  var key = "016e67baecfb44548a2232006171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";
  var counter = 0;

// $.getJSON(url, function(data) {
// console.log(data);
// if (counter === 0) {$("#weather").html(data["current"]["wind_kph"]);}
// if (counter === 1) {$("#weather").html(data["current"]["wind_mph"]);}
// if (counter === 2) {$("#weather").html(data["current"]["wind_degree"]);}
// });

$(".cloud").on("mouseenter", function() {
//HERE ARE THE HOVER INSTRUUCTIONS
	$(this).addClass("focused");
 });

$(".cloud").on("mouseleave", function() {
$(this).removeClass("focused");

});

$(".cloud").on("click", function() {

	counter++;

$.getJSON(url, function(data) {
console.log(counter);
if (counter === 1) {$("#weather").html(data["current"]["wind_kph"]);}
if (counter === 2) {$("#weather").html(data["current"]["wind_mph"]);}
if (counter === 3) {$("#weather").html(data["current"]["wind_degree"]);}
if (counter === 4) {$("#weather").html(data["current"]["pressure_mb"]);}
});
	$(this).toggleClass("active");
	$("body").toggleClass("cloud");
	$("h1").html("Clicked!");
	
});

});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/