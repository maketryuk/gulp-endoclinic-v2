var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      $('.header').addClass('js-scroll-down');
      $('.header').removeClass('js-scroll-top');
    } else {
      $('.header').removeClass('js-scroll-down').removeClass('js-nav-open').removeClass('js-nav-close');
      $('.header').addClass('js-scroll-top');
    }
});

// Media 992 =====>
if (window.matchMedia("(min-width: 992px)").matches) {
  $('.burger').click(function () {
    if ($('.header').hasClass('js-nav-open')) {
      $('.header').removeClass('js-nav-open');
      $('.header').addClass('js-nav-close');
    } else {
      $('.header').addClass('js-nav-open');
      $('.header').removeClass('js-nav-close');
    }
  })
} else {
  $('.burger').click(function () {
    $('.header').toggleClass('js-nav-open');
    $('body').toggleClass('js-lock');
  })
}