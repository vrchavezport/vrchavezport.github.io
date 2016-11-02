$(document).ready(function() {
			
	checkplace();
			
	$(window).resize(checkplace);
})	
function checkplace() {	
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 300) &&($(window).scrollTop() < 810)) {
			$('#abou').css({"border" : "solid 2px #141823"});
			$('#abou').mouseover(function(){
			    $('#abou').css({"border": "solid 2px #141823"});
			});
			$('#abou').mouseout(function(){
			    $('#abou').css({"border": "solid 2px #141823"});
			});
		} else if(($(window).scrollTop() < 300) ||($(window).scrollTop() > 810)){
			$('#abou').css({"border" : "solid 2px #f8f8f8"});
			$('#abou').mouseover(function(){
			    $('#abou').css({"border": "solid 2px #141823"});
			});
			$('#abou').mouseout(function(){
			    $('#abou').css({"border": "solid 2px #f8f8f8"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 825) &&($(window).scrollTop() < 1523)) {
			$('#ski').css({"border" : "solid 2px #141823"});
			$('#ski').mouseover(function(){
			    $('#ski').css({"border": "solid 2px #141823"});
			});
			$('#ski').mouseout(function(){
			    $('#ski').css({"border": "solid 2px #141823"});
			});
		} else {
			$('#ski').css({"border" : "solid 2px #f8f8f8"});
			$('#ski').mouseover(function(){
			    $('#ski').css({"border": "solid 2px #141823"});
			});
			$('#ski').mouseout(function(){
			    $('#ski').css({"border": "solid 2px #f8f8f8"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 1580) &&($(window).scrollTop() < 2700)) {
			$('#wor').css({"border" : "solid 2px #141823"});
			$('#wor').mouseover(function(){
			    $('#wor').css({"border": "solid 2px #141823"});
			});
			$('#wor').mouseout(function(){
			    $('#wor').css({"border": "solid 2px #141823"});
			});
		} else {
			$('#wor').css({"border" : "solid 2px #f8f8f8"});
			$('#wor').mouseover(function(){
			    $('#wor').css({"border": "solid 2px #141823"});
			});
			$('#wor').mouseout(function(){
			    $('#wor').css({"border": "solid 2px #f8f8f8"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if(($(window).scrollTop() > 2770) &&($(window).scrollTop() < 3200)) {
			$('#schoo').css({"border" : "solid 2px #141823"});
			$('#schoo').mouseover(function(){
			    $('#schoo').css({"border": "solid 2px #141823"});
			});
			$('#schoo').mouseout(function(){
			    $('#schoo').css({"border": "solid 2px #141823"});
			});
		} else {
			$('#schoo').css({"border" : "solid 2px #f8f8f8"});
			$('#schoo').mouseover(function(){
			    $('#schoo').css({"border": "solid 2px #141823"});
			});
			$('#schoo').mouseout(function(){
			    $('#schoo').css({"border": "solid 2px #f8f8f8"});
			});
		}
	});
			
	$(window).bind('scroll', function() {
		if($(window).scrollTop() > 3300) {
			$('#conta').css({"border" : "solid 2px #141823"});
			$('#conta').mouseover(function(){
			    $('#conta').css({"border": "solid 2px #141823"});
			});
			$('#conta').mouseout(function(){
			    $('#conta').css({"border": "solid 2px #141823"});
			});
		} else {
			$('#conta').css({"border" : "solid 2px #f8f8f8"});
			$('#conta').mouseover(function(){
			    $('#conta').css({"border": "solid 2px #141823"});
			});
			$('#conta').mouseout(function(){
			    $('#conta').css({"border": "solid 2px #f8f8f8"});
			});
		}
	});
}
