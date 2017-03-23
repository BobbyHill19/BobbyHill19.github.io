$(document).ready(function() {
var wolfCount = 0;
var numOfWolves = 1;

for (var i=0; i<numOfWolves; i++) {
	$("#wolf-container").append("<div class='wolf'></div");
	if (i % 1 === 0) {
		$(".wolf").last().addClass("small");
	}

}

	$(".wolf").on ("mouseenter", function() {
		$(this).addClass("counted");
		wolfCount = wolfCount + 1;
		$("#count-target").html(wolfCount);

		if (wolfCount === numOfWolves) {
			$("#bar").html("Shop Now at www.Munch-Fitness.com");

		} 

});




});