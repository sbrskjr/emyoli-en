//modal open
$('.menu-open').click(function() {
  $(this).toggleClass('active');
  $('.header__nav').toggleClass('active');
  $('.bg').fadeToggle();
});
//modal close
$('.bg').click(function() {
  $('.menu-open').toggleClass('active');
  $('.header__nav').toggleClass('active');
  $('.bg').fadeToggle();
});
