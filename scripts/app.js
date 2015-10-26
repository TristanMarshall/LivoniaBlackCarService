$(document).ready(function(){

////////////////////////////////////////////////////////////////////////////////
//                     J Q U E R Y  A N I M A T I O N
////////////////////////////////////////////////////////////////////////////////

$('.MainLogo').fadeIn(3000);
$('.big').delay(1000).fadeIn(3000);
$('.small').delay(2000).fadeIn(3000);
$('nav').fadeIn(3000);

////////////////////////////////////////////////////////////////////////////////
//                             V E L O C I T Y
////////////////////////////////////////////////////////////////////////////////

$('.linklink').on('click', function(e) {
  e.preventDefault();
  $('.linklink').removeClass('active');
  $(e.target).addClass('active');
  $($(e.target).attr('href')).velocity('scroll', {
    duration: 1000
  });
});

////////////////////////////////////////////////////////////////////////////////
//                   E N D  O F  D O C U M E N T . R E A D Y
////////////////////////////////////////////////////////////////////////////////
});