// Auto size textarea =====>
var textarea = document.querySelector('textarea');

textarea.addEventListener('keydown', autosizeTextarea);

function autosizeTextarea(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

// Custom select =====>
$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select__hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select__styled"></div>');

  var $styledSelect = $this.next('div.select__styled');
  $styledSelect.text($this.children('option').eq(0).text());
  $styledSelect.append('<i class="icon-arrow-dropdown"></i>')

  var $list = $('<ul />', {
      'class': 'select__options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select__styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select__options').slideUp(300);
      });
      $(this).toggleClass('active').next('ul.select__options').slideToggle(300);
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.slideUp(300);
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.slideUp(300);
  });

});