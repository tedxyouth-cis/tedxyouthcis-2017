window.onscroll = function() {
	var position = $("#sp2").position();
	if (document.body.scrollTop < position.top) {
		$("#top").css("display", "none");
	}
	else {
		$("#top").css("display", "initial");
	}
}