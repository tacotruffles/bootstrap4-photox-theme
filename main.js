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

  // Mission Statment section animation
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });

  // Gallery category Filter
  $(".gallery-list-item").click(function() {
    let filter = $(this).attr("data-filter");
    console.log(filter);
    if (filter === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + filter)
        .hide(300);
      $(".filter")
        .filter("." + filter)
        .show(300);
    }
  });

  $(".gallery-list-item").click(function() {
    $(this)
      .addClass("active-item")
      .siblings()
      .removeClass("active-item");
  });

  // Pricing Card Animation
  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 4300) {
      $(".card-1").addClass("moveFromLeft");
      $(".card-2").addClass("moveFromBottom");
      $(".card-3").addClass("moveFromRight");
    } else {
      $(".card-1").removeClass("moveFromLeft");
      $(".card-2").removeClass("moveFromBottom");
      $(".card-3").removeClass("moveFromRight");
    }
  });
});
