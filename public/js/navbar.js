$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar-bg").css("background", "#002c6e");
    } else {
      $(".navbar-bg").animate().css("background", "#3f51b500");
    }
  });
});
