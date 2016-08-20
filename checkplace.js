$(document).ready(function() {
			
	checkplace();
			
	$(window).resize(checkplace);
})		

function checkplace() {
	if($(".top").css("position") == "fixed"){
		var num=400;		
		$(window).bind('scroll', function() {
			if($(window).scrollTop() < num) {
				$('#contlink').css({"color" : "#7EB7A1"})
				$('#icons').css({"color" : "#7EB7A1"});
			} else {
				$('#contlink').css({"color" : "black"})
				$('#icons').css({"color" : "black"});
			}
		});
	}
			
	if($(".top").css("position") == "fixed"){
		var nu=500;
		var eh = 1000;		
		$(window).bind('scroll', function() {
			if($(window).scrollTop() > nu && $(window).scrollTop() < eh) {
				$('#aboutlink').css({"color" : "#7EB7A1"})
				$('#icons2').css({"color" : "#7EB7A1"});
			} else {
				$('#aboutlink').css({"color" : "black"})
				$('#icons2').css({"color" : "black"});
			}
		});
	}
			
	if($(".top").css("position") == "fixed"){
		var so=1200;
		var wha = 1900;		
		$(window).bind('scroll', function() {
			if($(window).scrollTop() > so && $(window).scrollTop() < wha) {
				$('#worklink').css({"color" : "#7EB7A1"})
				$('#icons3').css({"color" : "#7EB7A1"});
			} else {
				$('#worklink').css({"color" : "black"})
				$('#icons3').css({"color" : "black"});
			}
		});
	}
			
	if($(".top").css("position") == "fixed"){
		var fin=2100;
		var alm=2450;		
		$(window).bind('scroll', function() {
			if($(window).scrollTop() > fin && $(window).scrollTop() < alm) {
				$('#skilltext').css({"color" : "#7EB7A1"})
				$('#skillclick').css({"color" : "#7EB7A1"});
			} else {
				$('#skilltext').css({"color" : "black"})
				$('#skillclick').css({"color" : "black"});
			}
		});
	}
			
	if($(".top").css("position") == "fixed"){
		var don=2600;	
		$(window).bind('scroll', function() {
			if($(window).scrollTop() > don) {
				$('#schooltext').css({"color" : "#7EB7A1"})
				$('#schoolclick').css({"color" : "#7EB7A1"});
			} else {
				$('#schooltext').css({"color" : "black"})
				$('#schoolclick').css({"color" : "black"});
			}
		});
	}
};
