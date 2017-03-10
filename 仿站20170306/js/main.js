$(document).ready(function(){
	$('.menu_icon').on('click', function(e){
		
		e.preventDefault();
		$(this).toggleClass('opend');
		$('header nav').toggleClass('active');
		
	});
});