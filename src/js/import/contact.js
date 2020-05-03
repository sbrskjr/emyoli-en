$('.btn-check').on('click', function(event) {
  event.preventDefault();
  //проверка формы на валидность
  $(".contact__form .contact__form__input input[type='text'], .contact__form .contact__form__input textarea").each(function() {
    if($(this).val() === '') {
      $(this).parent('.contact__form__input').addClass('invalid');
    } else{
      $(this).parent('.contact__form__input').removeClass('invalid');
      $(this).parent('.contact__form__input').removeClass('empty_field');
    }
  });
  //проверка email
  var email = $(".contact__form input[type='email']");
  var pattern = /^[a-z0-9_.-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
  if (email.val().search(pattern) === -1) {
    $(email).parent('.contact__form__input').addClass('invalid');
    console.log('wef');
  } else{
    $(email).parent('.contact__form__input').removeClass('invalid');
    $(email).parent('.contact__form__input').removeClass('empty_field');
  }
  //проверка checkbox
  if($(".contact__form .contact__form__input input[type='checkbox']").prop('checked')) {
    $(".contact__form .contact__form__input input[type='checkbox']").parent('.contact__form__input').removeClass('invalid');
    $(".contact__form .contact__form__input input[type='checkbox']").parent('.contact__form__input').removeClass('empty_field');
  } else{
    $(".contact__form .contact__form__input input[type='checkbox']").parent('.contact__form__input').addClass('invalid');
  }

  // Считаем к-во незаполненных полей
  var sizeEmpty = $('.contact__form').find('.empty_field').length;
  if(sizeEmpty > 0) {
  } else{
    //скрываем форму
    $('.contact__form').fadeOut();
    //показываем предупреждения
    setTimeout(function() {
      $('.contact__check').fadeIn();
      $(window).animate({ scrollTop: 0}, 1100); 
      $('body').animate({ scrollTop: 0}, 1100);
    }, 300);
  }
  
});
