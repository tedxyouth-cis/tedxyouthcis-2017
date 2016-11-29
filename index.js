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
