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




//button fixed
setInterval(function() {
  let i = 0;
  $('.button-animation span').each(function(index, el) {
    if(index === 0) {
      if($(el).hasClass('active')) {
        $(el).removeClass('active').addClass('left');
        $(el).next().addClass('active').removeClass('right');
        setTimeout(function() {
          $('.button-animation span').removeClass('left');
        }, 600);
        return false;
      }
    } else{
      if($(el).hasClass('active')) {
        $(el).removeClass('active');
        $(el).prev().addClass('active');
        setTimeout(function() {
          $(el).addClass('right');
        }, 600);
        return false;
      }
    }
    i++;
  });
  i = 0;
}, 7000);



var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function() {
  if(mywindow.scrollTop() > 100) {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
      $('.button-animation').addClass('scroll');
      up = !up;
    } else if(newscroll < mypos && up) {
      $('.button-animation').removeClass('scroll');
      up = !up;
    }
    mypos = newscroll;
  } else {
    $('.button-animation').removeClass('scroll');
  }
});
