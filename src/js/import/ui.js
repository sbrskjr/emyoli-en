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



//pop-up open
$('.pop-up_open').on('click', function(event) {
  event.preventDefault();
  $('.pop-up-bg').fadeIn();
}); 
//pop-up close
$('.pop-up__close').on('click', function() {
  $('.pop-up-bg').fadeOut();
}); 
