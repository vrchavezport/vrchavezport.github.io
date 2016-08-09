$(document).ready(function() {
			
	scroller();
			
	$(window).resize(scroller);
	
})		

function scroller() {
	if($(".top").css("position") == "fixed"){
		$('#worklink, #icons3').on('click', function(e){
			e.preventDefault();
			var target= $(this).get(0).href == 'bework' ? $('#bework') : $('#bework');
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		});
				
		$('#aboutlink, #icons2').on('click', function(e){
			e.preventDefault();
			var targett= $(this).get(0).href == 'beabout' ? $('#beabout') : $('#beabout');
			$('html, body').stop().animate({
				scrollTop: targett.offset().top
			}, 1000);
		});
				
		$('#contlink, #icons').on('click', function(e){
			e.preventDefault();
			var targettt= $(this).get(0).href == 'bename' ? $('#bename') : $('#bename');
			$('html, body').stop().animate({
				scrollTop: targettt.offset().top
			}, 1000);
		});
				
		$('#skilltext, #skillclick').on('click', function(e){
			e.preventDefault();
			var targetttt= $(this).get(0).href == 'beabout' ? $('#beskills') : $('#beskills');
			$('html, body').stop().animate({
				scrollTop: targetttt.offset().top
			}, 1000);
		});
				
		$('#schooltext, #schoolclick').on('click', function(e){
			e.preventDefault();
			var targettttt= $(this).get(0).href == 'beschool' ? $('#beschool') : $('#beschool');
			$('html, body').stop().animate({
				scrollTop: targettttt.offset().top
			}, 1000);
		});				
	}
};
