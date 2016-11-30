// top buttop display
window.onscroll = function() {
	var position = $("#sp2").position();
	if (document.body.scrollTop < position.top) {
		$("#top").css("display", "none");
	}
	else {
		$("#top").css("display", "initial");
	}
}


// smoother scroll
function goToByScroll(id) {
	$('html,body').animate({scrollTop: $(id).offset().top},'slow');
}

$("#top").click(function(e) {
	e.preventDefault();		// prevent page from reloading
	goToByScroll("#speakers");
});


// show different things on different screens
$(window).on("load resize", function () {
	console.log(window.innerWidth);
	if (window.innerWidth > 850) {
		alert("View on your phone or decrease the width of your window to view the brochure!");
		$("#poster").css("display", "initial");
		$("#container").css("display", "none");
		$("#title-image").css("display", "none");
	}
	else {
		$("#poster").css("display", "none");
		$("#container").css("display", "initial");
		$("#title-image").css("display", "initial");
	}
});