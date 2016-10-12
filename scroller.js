$(document).ready(function() {
			
	scroller();
			
	$(window).resize(scroller);
	
})		

function scroller() {
	if($(".menu").css("height") == "50px"){
		$('#abou').on('click', function(e){
			e.preventDefault();
			var target= $(this).get(0).href == 'aboutAnchor' ? $('#aboutAnchor') : $('#aboutAnchor');
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		});
				
		$('#ski').on('click', function(e){
			e.preventDefault();
			var targett= $(this).get(0).href == 'skillAnchor' ? $('#skillAnchor') : $('#skillAnchor');
			$('html, body').stop().animate({
				scrollTop: targett.offset().top
			}, 1000);
		});
				
		$('#wor').on('click', function(e){
			e.preventDefault();
			var targettt= $(this).get(0).href == 'workAnchor' ? $('#workAnchor') : $('#workAnchor');
			$('html, body').stop().animate({
				scrollTop: targettt.offset().top
			}, 1000);
		});
				
		$('#schoo').on('click', function(e){
			e.preventDefault();
			var targetttt= $(this).get(0).href == 'schoolAnchor' ? $('#schoolAnchor') : $('#schoolAnchor');
			$('html, body').stop().animate({
				scrollTop: targetttt.offset().top
			}, 1000);
		});
				
		$('#conta').on('click', function(e){
			e.preventDefault();
			var targettttt= $(this).get(0).href == 'contactAnchor' ? $('#contactAnchor') : $('#contactAnchor');
			$('html, body').stop().animate({
				scrollTop: targettttt.offset().top
			}, 1000);
		});				
	}
};
