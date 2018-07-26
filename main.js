$(document).ready(function() {
  // Custom .navbar-toggler-icon
  $(".nav-button").click(function() {
    $(".nav-button").toggleClass("rotate");
  });

  // Adjust/Animate Navbar upon initial scroll depth past 50 pixels
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position > 200) {
      $(".navbar-custom").addClass("navbar-shrink");
    } else {
      $(".navbar-custom").removeClass("navbar-shrink");
    }
  });
});
