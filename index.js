// top buttop display
window.onscroll = function() {
	var position = $("#sp2").position();
	if (document.body.scrollTop <= position.top) {
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
$(window).on("load resize", function (e) {
	if (window.innerWidth > 850) {
		var href = window.location.href;
		var index = href.indexOf("#");	
		console.log(index !== -1);
		if (index !== -1) {
			// remove anchor from url if present and change url
			window.location.href = href.substring(0, index);
		}
		$("body").css("overflow", "hidden");
		$("#substitute").css("display", "inherit");
		$("#container").css("display", "none");
		$("#title-image").css("display", "none");
	}
	else {
		$("body").css("overflow", "auto");
		$("#substitute").css("display", "none");
		$("#container").css("display", "inherit");
		$("#title-image").css("display", "inherit");
	}
});