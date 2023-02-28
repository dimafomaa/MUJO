$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .menu-mobile').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.menu-mobile, .menu-mobile__btn').click(function(event){
		$('.header__burger, .menu-mobile').removeClass('active');
		$('body').removeClass('lock');
	});

});
