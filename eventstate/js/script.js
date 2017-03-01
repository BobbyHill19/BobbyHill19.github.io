$(document).ready(function(){ 
// ALL CODE GOES HERE
console.log("hello there!");

$(".button").on("mouseenter", function() {
//HERE ARE THE HOVER INSTRUUCTIONS
	$(this).addClass("focused");
 });

$(".button").on("mouseleave", function() {
$(this).removeClass("focused");

});

$(".button").on("click", function() {
	$(this).toggleClass("active");
	$("body").toggleClass("dark");
	$("h1").html("Clicked!");
});


$("h1").on("click", function() {
	$(this).html("Switch");
});



});
