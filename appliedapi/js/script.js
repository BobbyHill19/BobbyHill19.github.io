$(document).ready(function() {
  var key = "iugHnz5VJlJx1lPLrrWoPNz4xxOz92iqMeQ1Rl0o";
  var minimuffins = "45167400"
  var nutbar = "45196685"
  var broccoliNumber = "11090";
  // var url = "https://api.nal.usda.gov/ndb/search/?format=json&q="+ broccoliNumber +"&sort=n&max=25&offset=0&api_key=iugHnz5VJlJx1lPLrrWoPNz4xxOz92iqMeQ1Rl0o";
   var url = "https://api.nal.usda.gov/ndb/V2/reports?ndbno=" + broccoliNumber + "&type=b&format=json&api_key=" + key;
  var counter = 0;



$(".search").on("mouseenter", function() {
//HERE ARE THE HOVER INSTRUUCTIONS
	$(this).addClass("focused");
 });

$(".search").on("mouseleave", function() {
$(this).removeClass("focused");

});

$(".label").on("click", function() {

	counter++;

$.getJSON(url, function(data) {
	console.log(data) 
	var foodObject = data["foods"][0]["food"]
console.log(foodObject);
   console.log(foodObject["nutrients"]);
      console.log(foodObject["nutrients"][0]);
      console.log(foodObject["nutrients"][1]);

if (counter === 1) {$("#search").html(foodObject["nutrients"][0]["name"]);}
if (counter === 2) {$("#search").html(foodObject["nutrients"][1]["nutrient_id"]);}
if (counter === 3) {$("#search").html(foodObject["nutrients"][2]["unit"]);}
if (counter === 4) {$("#search").html(foodObject["nutrients"][3]["value"]);}
});
	$(this).toggleClass("active");
	$("body").toggleClass("label");
	$("h1").html("Fact!");
	
});

});

