$(document).ready(function() {
  var key = "iugHnz5VJlJx1lPLrrWoPNz4xxOz92iqMeQ1Rl0o";
  var minimuffins = "45167400"
  var nutbar = "45196685"
  var url = "https://api.nal.usda.gov/ndb/search/?format=json&q="+ food +"&sort=n&max=25&offset=0&api_key=iugHnz5VJlJx1lPLrrWoPNz4xxOz92iqMeQ1Rl0o" + key;
  var counter = 0;



$(".search").on("mouseenter", function() {
//HERE ARE THE HOVER INSTRUUCTIONS
	$(this).addClass("focused");
 });

$(".search").on("mouseleave", function() {
$(this).removeClass("focused");

});

$(".search").on("click", function() {

	counter++;

$.getJSON(url, function(data) {
	var foodObject = data["foods"][0]["food"]
console.log(foodObject);
   console.log(foodObject["nutrients"]);
      console.log(foodObject["nutrients"][0]);
      console.log(foodObject["nutrients"][1]);

if (counter === 1) {$("#search").html(data["current"]["offset"]);}
if (counter === 2) {$("#search").html(data["current"]["group"]);}
if (counter === 3) {$("#search").html(data["current"]["name"]);}
if (counter === 4) {$("#search").html(data["current"]["ndbno"]);}
});
	$(this).toggleClass("active");
	$("body").toggleClass("label");
	$("h1").html("Clicked!");
	
});

});

