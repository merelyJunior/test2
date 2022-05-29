$(document).ready(function () {
  // Header show on scroll--------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".header").addClass("h-v");
      $(".navigation a").addClass("nav-color");

      $(".hidden-img ").css("display", "block");
    } else {
      $(".header").removeClass("h-v");
      $(".navigation a").removeClass("nav-color");
      $(".hidden-img ").css("display", "none");
    }
  });
  // Block scroll--------------------------------------
  $('.navigation a[href^="#"]').click(function () {
    var scroll_el = $(this).attr("href");
    if ($(scroll_el).length != 0) {
      $("html, body").animate({ scrollTop: $(scroll_el).offset().top }, 500);
      $("body").removeClass("lock");
    }
    return false;
  });

  // Slider owl--------------------------------------
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    center: true,
    nav: false,
    // navText: ["<img src='/img/Button1.png'>", "<img src='/img/Button2.png'>"],
    responsive: {
      0: {
        nav: false,
        items: 3,
      },
    },
  });
  AOS.init();
});
