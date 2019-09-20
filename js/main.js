$(document).ready(function(){
  
	menuToggle();

	$('.tab-url').click(function(event){
		event.preventDefault();
		
		$('.item-text').hide();
		$('.img-1').removeClass('hide');
		$('.img-2').addClass('hide');
		
		var id = $(this).attr('href');
		
		$('.item-img-row .img-1', this).addClass('hide');
		$('.item-img-row .img-2', this).removeClass('hide');

		$(id).fadeIn(1000);
	});

});

function menuToggle() {
	$('a.toggle-menu').on('click', function(){
		if ($('.main-menu .main-menu-nav').css('display') == 'none') {
			$('.main-menu .main-menu-nav').slideDown(300);
			$('a.toggle-menu').addClass('active');
		}
		else {
			$('.main-menu .main-menu-nav').slideUp(300);
			$('a.toggle-menu').removeClass('active');
		}
	});
}