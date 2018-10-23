$(function(){
  $('.js-header-hamburger').on('click', function() {
    $(this).toggleClass('active');
    if( $(this).hasClass('active') ){
      $('.js-header-menu-items').fadeIn();
    } else {
      $('.js-header-menu-items').css('display', '');
    }
  });
})