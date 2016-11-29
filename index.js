window.onscroll = function() {
	var position = $("#speakers").position();
	if (document.body.scrollTop < position.top + 100) {
		$("#top").css("display", "none");
	}
	else {
		$("#top").css("display", "initial");
	}
}