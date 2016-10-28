$(document).ready(function() {
			
	scroller();
			
	$(window).resize(scroller);
	
})		

function scroller() {
	if($(".menu").css("height") == "50px"){
		$('#abou').on('click', function(e){
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $('#aboutAnchor').offset().top
			}, 1000);
		});
				
		$('#ski').on('click', function(e){
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $('#skillAnchor').offset().top
			}, 1000);
		});
				
		$('#wor').on('click', function(e){
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $('#workAnchor').offset().top
			}, 1000);
		});
				
		$('#schoo').on('click', function(e){
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $('#schoolAnchor').offset().top
			}, 1000);
		});
				
		$('#conta').on('click', function(e){
			e.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $('#contactAnchor').offset().top
			}, 1000);
		});				
	}
};
