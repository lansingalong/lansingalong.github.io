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
				}

				year.style.left = left;
				left += year.offsetWidth;
			});
		}

		adjustForTopBar();
		$(window).resize(adjustForTopBar);

		var adjustForNavBar = function(){
			var windowWidth = document.querySelector("html").offsetWidth;
			var timelineYears = document.querySelectorAll(".timeline-year");

			[].forEach.call(timelineYears, function(tY){
				tY.style.width = (windowWidth - 100) / (timelineYears.length) + "px";
			});
		}

		var hash = window.location.hash.substring(1);
		if (hash && $(".portfolio-year." + hash).length > 0) {
			$(".timeline-year").removeClass("active")
			$(".timeline-year." + hash).toggleClass("active");
		}

		$(".timeline-year").click(function () {
			$(".timeline-year").removeClass("active")
			$(this).toggleClass("active");
		})

		$("#scroll-bar").scroll(function(event){
		   	var focus = $('.portfolio-year:in-viewport');

		    // window.location.hash = "#" + $(focus).attr("id");
			$(".timeline-year").removeClass("active")
			$(".timeline-year." + $(focus).attr("id")).toggleClass("active");
		});

		adjustForNavBar();
		$(window).resize(adjustForNavBar);

		$("#scroll-bar").scrollLeft(10000);
	})

	$("body").mousewheel(function(event, delta) {
		var original = $("#scroll-bar").scrollLeft()
		$("#scroll-bar").scrollLeft(original + delta);

		event.preventDefault();
	});
});
