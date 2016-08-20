$(document).ready(function() {
			
	keyer();
			
	$(window).resize(keyer);
	
})
		
function keyer() {
	$(document).keydown(function(e){
		if(e.keyCode==40 && $(window).scrollTop() < 400){	
			e.preventDefault();
			var target1= $("#beabout");
			$("body, html").stop().animate({
				scrollTop: target1.offset().top
			}, 1000);
		}

		if(e.keyCode==40 && $(window).scrollTop() > 400 && $(window).scrollTop() < 1000){	
			e.preventDefault();
			var target2= $("#bework");
			$("body, html").stop().animate({
				scrollTop: target2.offset().top
			}, 1000);
		}

		if(e.keyCode==38 && $(window).scrollTop() > 400 && $(window).scrollTop() < 1000){	
			e.preventDefault();
			var target3= $("#bename");
			$("body, html").stop().animate({
				scrollTop: target3.offset().top
			}, 1000);
		}				
				
		if(e.keyCode==40 && $(window).scrollTop() > 1200 && $(window).scrollTop() < 1900){	
			e.preventDefault();
			var target4= $("#beskills");
			$("body, html").stop().animate({
				scrollTop: target4.offset().top
			}, 1000);				
		}
			
		if(e.keyCode==38 && $(window).scrollTop() > 1200 && $(window).scrollTop() < 1900){	
			e.preventDefault();
			var target4= $("#beabout");
			$("body, html").stop().animate({
				scrollTop: target4.offset().top
			}, 1000);				
		}

		if(e.keyCode==40 && $(window).scrollTop() > 2100 && $(window).scrollTop() < 2450){	
			e.preventDefault();
			var target5= $("#beschool");
			$("body, html").stop().animate({
				scrollTop: target5.offset().top
			}, 1000);				
		}

		if(e.keyCode==38 && $(window).scrollTop() > 2100 && $(window).scrollTop() < 2450){	
			e.preventDefault();
			var target6= $("#bework");
			$("body, html").stop().animate({
				scrollTop: target6.offset().top
			}, 1000);				
		}

		if(e.keyCode==38 && $(window).scrollTop() > 2600){	
			e.preventDefault();
			var target7= $("#beskills");
			$("body, html").stop().animate({
				scrollTop: target7.offset().top
			}, 1000);				
		}								
	});
};
