$(function() {

	var adjustForTopBar = function () {
		var topBarHeight = document.querySelector("#top-bar").offsetHeight;

		portfolioYear = document.querySelectorAll(".portfolio-year");

		var left = 0;
		[].forEach.call(portfolioYear, function (year) {
			year.style.paddingTop = topBarHeight + "px";
			year.style.width = window.offsetWidth + "px";

			var projectsInYear = year.querySelectorAll(".project-card");
			var portfolioWidth = year.offsetWidth;
			var numberOfCardsThatFit = portfolioWidth / projectsInYear[0].offsetWidth;

			if (numberOfCardsThatFit < projectsInYear.length) {
				year.style.width = year.offsetWidth + (projectsInYear[0].offsetWidth * 0.8) + "px";
			}

			year.style.left = left;
			left += year.offsetWidth;
		});
	}

	$(window).resize(adjustForTopBar);
	adjustForTopBar();

	$("#scroll-bar").scrollLeft(10000);

	$("body").mousewheel(function(event, delta) {
		var original = $("#scroll-bar").scrollLeft()
		$("#scroll-bar").scrollLeft(original + delta);

		event.preventDefault();
	});

});
