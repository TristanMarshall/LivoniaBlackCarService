$(document).ready(function(){

////////////////////////////////////////////////////////////////////////////////
//                     J Q U E R Y  A N I M A T I O N
////////////////////////////////////////////////////////////////////////////////

$('.MainLogo').fadeIn(3000);
$('.big').delay(1000).fadeIn(3000);
$('.small').delay(2000).fadeIn(3000);
$('.navLink').fadeIn(3000);



$('.res').hover(function() {
	$('.rese').show();
});

$('.blackDiv, .linklink, .testimonial').hover(function() {
	$('.rese').hide();
});

$('.testimonial').hover(function() {
	$('.showMe').show();
});

$('.blackDiv, .res, .linklink').hover(function() {
	$('.showMe').hide();
});


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
//                             H A M B U R G E R 
////////////////////////////////////////////////////////////////////////////////

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


////////////////////////////////////////////////////////////////////////////////
//                   E N D  O F  D O C U M E N T . R E A D Y
////////////////////////////////////////////////////////////////////////////////


});
