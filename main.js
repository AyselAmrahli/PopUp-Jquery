
/*------아이셀의 세상 -------*/

$(document).ready(function(){
	 var width =$(document).width();
	 var height = $(document).height();

	
	$('a').click(function(){
		$(".pop").width(width).height(height).fadeIn('1000');
		$('.up').fadeIn('3000');
		$('i').fadeIn('4000');
		
	$('i').click(function(){
		$('.up').fadeOut('3000');
		$('.pop').fadeOut('5000');
		$('i').fadeOut('6000');
	})
	});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
		$('.up').fadeOut('3000');
		$('.pop').fadeOut('5000');
		$('i').fadeOut('6000');
	
    }
});
});