$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });

  $('#top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });

  $('.scroll-btn').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

});
