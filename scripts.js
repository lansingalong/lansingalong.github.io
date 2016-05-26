var topBarHeight = document.querySelector("#top-bar").offsetHeight;

portfolioYear = document.querySelectorAll(".portfolio-year");

var left = 0;
[].forEach.call(portfolioYear, function (year) {
	year.style.paddingTop = topBarHeight + 100 + "px";
	year.style.width = window.offsetWidth + "px";

	year.style.left = left;
	left += year.offsetWidth;
});

$(function() {

	$("#scroll-bar").scrollLeft(10000);

   $("body").mousewheel(function(event, delta) {

      var original = $("#scroll-bar").scrollLeft()
      $("#scroll-bar").scrollLeft(original - delta * 2);
    
      event.preventDefault();

   });

});
