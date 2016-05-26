var topBarHeight = document.querySelector("#top-bar").offsetHeight;

portfolioYear = document.querySelectorAll(".portfolio-year");

var left = 0;
[].forEach.call(portfolioYear, function (year) {
	year.style.paddingTop = topBarHeight + 100 + "px";
	year.style.width = window.offsetWidth + "px";

	year.style.left = left;
	left += year.offsetWidth;
})
