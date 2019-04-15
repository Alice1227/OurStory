$(function() {
  $(".navbar-toggler").on("click", function() {
    if ($(".navbar-toggler").attr("aria-expanded") == "false") {
      $(".main-content").animate({
        top: "240px"
      }, 500);
    } else {
      $(".main-content").animate({
        top: "100px"
      }, 500);
    }
  });
});