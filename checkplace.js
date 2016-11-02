$(document).ready(function() {
			
	checkplace();
			
	$(window).resize(checkplace);
})		

function checkplace() {	
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 300) &&($(window).scrollTop() < 810)) {
			$('#abou').css({"color" : "red"})
		} else {
			$('#abou').css({"color" : "black"});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 825) &&($(window).scrollTop() < 1523)) {
			$('#ski').css({"color" : "red"})
		} else {
			$('#ski').css({"color" : "black"});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 1580) &&($(window).scrollTop() < 2700)) {
			$('#wor').css({"color" : "red"})
		} else {
			$('#wor').css({"color" : "black"});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 2770) &&($(window).scrollTop() < 3300)) {
			$('#schoo').css({"color" : "red"})
		} else {
			$('#schoo').css({"color" : "black"});
		}
	});
			
	$(window).bind('scroll', function() {
		if($(window).scrollTop() > 3300) {
			$('#conta').css({"color" : "red"})
		} else {
			$('#conta').css({"color" : "black"});
		}
	});
}
