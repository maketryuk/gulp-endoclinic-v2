$('.show__trigger').click(function () {
  $(this).parent().find('.show__item').toggle()
  $(this).toggleClass('js-active')
  if ($(this).hasClass('js-active')) {
    $(this).find('span').text('See less')
  } else {
    $(this).find('span').text('See all')
  }
})