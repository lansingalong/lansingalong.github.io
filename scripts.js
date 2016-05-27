$(function() {

	$("#top-bar").ready(function() {
		var adjustForTopBar = function () {
			var topBarHeight = document.querySelector("#top-bar").offsetHeight;

			portfolioYear = document.querySelectorAll(".portfolio-year");

			var left = 0;
			[].forEach.call(portfolioYear, function (year) {
				year.style.paddingTop = topBarHeight + "px";
				year.style.width = window.offsetWidth + "px";

				var projectsInYear = year.querySelectorAll(".project-card");
				var portfolioWidth = year.offsetWidth - 100;
				var projectWidth = projectsInYear[0].offsetWidth + 20;
				var projectWidth = 324;
				var numberOfProjects = projectsInYear.length;
				var numberOfProjectsThatFit = portfolioWidth / projectWidth;


				console.log(projectsInYear, portfolioWidth, projectWidth, numberOfProjectsThatFit);
				console.log(numberOfProjectsThatFit, numberOfProjects );
				while (numberOfProjectsThatFit < numberOfProjects) {
					year.style.width = year.offsetWidth + 1 + "px";
					// year.style.width = year.offsetWidth + projectWidth + "px";
					// year.style.width += ((1 - (numberOfProjects - numberOfProjectsThatFit)) * projectWidth);

					var projectsInYear = year.querySelectorAll(".project-card");
					var portfolioWidth = year.offsetWidth - 50;
					var projectWidth = projectsInYear[0].offsetWidth + 20;
					var projectWidth = 324;
					var numberOfProjects = projectsInYear.length;
					var numberOfProjectsThatFit = portfolioWidth / projectWidth;

					console.log(projectsInYear, portfolioWidth, projectWidth, numberOfProjectsThatFit);
					console.log(numberOfProjectsThatFit , numberOfProjects );
				}

				year.style.left = left;
				left += year.offsetWidth;
			});
		}

		adjustForTopBar();
		$(window).resize(adjustForTopBar);

		$("#scroll-bar").scrollLeft(10000);
	})

	$("body").mousewheel(function(event, delta) {
		var original = $("#scroll-bar").scrollLeft()
		$("#scroll-bar").scrollLeft(original + delta);

		event.preventDefault();
	});

});
