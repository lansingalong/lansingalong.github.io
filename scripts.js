$(function() {
	$("html").fadeIn(500);

	$("#top-bar").ready(function() {

		// widen portfolio year to accomodate the number of projects in that year
		var adjustForExtraProjects = function () {
			var topBarHeight = document.querySelector("#top-bar").offsetHeight;
			portfolioYear = document.querySelectorAll(".portfolio-year");

			var left = 0;
			[].forEach.call(portfolioYear, function (year) {
				year.style.paddingTop = topBarHeight + "px";
				year.style.width = window.offsetWidth + "px";

				var projectsInYear = year.querySelectorAll(".project-card");
				var portfolioWidth = year.offsetWidth - 100;
				var projectWidth = projectsInYear[0].offsetWidth + 20;
				var numberOfProjects = projectsInYear.length;
				var numberOfProjectsThatFit = portfolioWidth / projectWidth;

				while (numberOfProjectsThatFit < numberOfProjects) {
					year.style.width = year.offsetWidth + 1 + "px";
					// year.style.width = year.offsetWidth + projectWidth + "px";
					// year.style.width += ((1 - (numberOfProjects - numberOfProjectsThatFit)) * projectWidth);

					var projectsInYear = year.querySelectorAll(".project-card");
					var portfolioWidth = year.offsetWidth - 50;
					var projectWidth = projectsInYear[0].offsetWidth + 20;
					var numberOfProjects = projectsInYear.length;
					var numberOfProjectsThatFit = portfolioWidth / projectWidth;
				}

				year.style.left = left;
				left += year.offsetWidth;
			});
		}

		adjustForExtraProjects();
		$(window).resize(adjustForExtraProjects);

		// make the timeline-nav equally distributed in width
		var adjustForNavBar = function(){
			var windowWidth = document.querySelector("html").offsetWidth;
			var timelineYears = document.querySelectorAll(".timeline-year");
			var timeline = document.querySelector("#timeline-nav");

			[].forEach.call(timelineYears, function(tY){
				tY.style.width = (windowWidth - parseInt($("#timeline-nav").css('padding-left')) * 2) / (timelineYears.length) + "px";
			});
		}
		adjustForNavBar();
		$(window).resize(adjustForNavBar);

		// if coming in with a hash, then move to that
		var hash = window.location.hash.substring(1);
		if (hash && $(".portfolio-year." + hash).length > 0) {
			$(".timeline-year").removeClass("active")
			$(".timeline-year." + hash).toggleClass("active");
		}

		// move to correct portfolio year when that time period is clicked in timeline
		$(".timeline-year").click(function () {
			$(".timeline-year").removeClass("active")

			event.preventDefault();


			var active_period = $("a > div.active").parent().attr("href");
			var period = $(this).parent().attr("href");

			$("#scroll-bar").animate({
			  scrollLeft: $("#scroll-bar").scrollLeft() + $(period).position().left
			}, 500, "swing", function () {
				$(this).toggleClass("active");
			})

		})

		// focused portfolio year is marked as active in the timeline
		$("#scroll-bar").scroll(function(event){
		   	var focus = $('.portfolio-year:in-viewport');

		    var period = $(focus).attr("id");
		    if(history.replaceState) {
		    	history.replaceState(undefined, undefined, "#" + period)
		    }
			$(".timeline-year").removeClass("active")
			$(".timeline-year." + $(focus).attr("id")).toggleClass("active");
		});

		var toggleBio = function () {
			$("#my-intro p, #social-media").slideToggle(200);
			$("#read-more, #read-less").toggle(1);
			$("#scroll-bar").fadeToggle(100);
			$("#timeline-nav").toggleClass("hidden");
		}

		$("#read-less").hide();
		$("#read-more, #read-less").click(toggleBio)


		$("#scroll-bar").scrollLeft(10000);
	})

	// map vertical scrolling to horizontal scrolling
	$("body").mousewheel(function(event, delta) {
		var original = $("#scroll-bar").scrollLeft()
		$("#scroll-bar").scrollLeft(original + delta * 3);

		event.preventDefault();
	});
});
