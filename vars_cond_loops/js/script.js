$(document).ready(function() {
var popCount = 0;
var numOfBalloons = 15;

for (var i=0; i<numOfBalloons; i++) {
	$("#balloon-container").append("<div class='balloon'></div");
	if (i % 1 === 0) {
		$(".balloon").last().addClass("big");
	}

}

	$(".balloon").on ("mouseenter", function() {
		$(this).addClass("popped");
		popCount = popCount + 1;
		$("#pop-target").html(popCount);

		if (popCount === numOfBalloons) {
			$("#bar").html("CONGRATS!!! You Won");

		} 

// 		else if(popCount === 5) {
// 			alert("Keep going!");
// 		}
// 		else{
// 			console.log("Not done yet.")
// 		}
});




});