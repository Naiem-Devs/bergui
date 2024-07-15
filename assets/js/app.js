$(document).ready(function () {
  $(".header__bar , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").addClass("active");
  });
  $(".menu-close , .offcanvas-overlay").click(function () {
    $(".offcanvas-area , .offcanvas-overlay,.header__area").removeClass("active");
    
  });
  
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header__area").removeClass("scroll-header");
    } else {
      $(".header__area").addClass("scroll-header");
    }
  });
  
});

