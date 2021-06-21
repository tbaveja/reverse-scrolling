/*var winHeight = $(window).innerHeight();
$(document).ready(function () {
  $(".panel").height(winHeight);
  $("body").height(winHeight * $(".panel").length);
});

window.addEventListener("resize", function (event) {
    var winHeight = $(window).innerHeight();
  $(".panel").height($(window).innerHeight());
});*/

$(window).on("scroll", function () {
  $(".panelCon").css("bottom", $(window).scrollTop() * -1);
});

$('.button').on("click", function() {
	$(".panelCon").toggleClass("disable");
	$(this).toggleClass("green")
	$(this).hasClass('green') ? $(this).html('Enable Reverse Scrolling'): $(this).html('Disable Reverse Scrolling');
})