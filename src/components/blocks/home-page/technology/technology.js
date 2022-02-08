// Media 992 =====>
if (window.matchMedia("(min-width: 992px)").matches) {
  $('.technology-card').click(function () {
    $(".technology-card").not($(this).closest(".technology-card")).removeClass("js-active");
    $(this).closest(".technology-card").addClass("js-active");
    if ($(this).hasClass('js-active')) {
      $('.technology-card__body').not($(this).find('.technology-card__body')).slideUp(300);
      $(this).find('.technology-card__body').slideDown(300);
    }
  })
} else {
  $('.technology-card').removeClass('js-active')
  $('.technology-card').click(function () {
    $(this).toggleClass('js-active')
    $('.technology-card').not($(this)).removeClass('js-active')
  })
}