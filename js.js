$(document).ready(function(){
	//Efecto de scroll a una etiqueta de la misma página
	var a = $('.nav-link');
	a.click(function(){
	    var section = $(this).attr('href');
	    $('html, body').animate({
	      scrollTop: $(section).offset().top
	    }, 1000);
	});
	//Efecto de rating con estrellas en la lista de series
	$('#stars li').on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);
		$(this).parent().children('li.star').each(function(e){
			if (e < onStar) {
				$(this).addClass('hover');
			}
			else {
				$(this).removeClass('hover');
			}
		});
    }).on('mouseout', function(){
    	$(this).parent().children('li.star').each(function(e){
    		$(this).removeClass('hover');
		});
	});  
	$('#stars li').on('click', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var stars = $(this).parent().children('li.star');
		for (i = 0; i < stars.length; i++) {
			$(stars[i]).removeClass('selected');
		}
		for (i = 0; i < onStar; i++) {
			$(stars[i]).addClass('selected');
		}
	});
});

//Efectos del Carousel en el Home de la página
$('#thriller').click(function () {
  $('#myCarousel').carousel(0);
});
$('#drama').click(function () {
  $('#myCarousel').carousel(1);
});
$('#terror').click(function () {
  $('#myCarousel').carousel(2);
});
$('.carousel').carousel({
	interval: 4000
})
$('#myCarousel').on('slide.bs.carousel', function () {
  	cambioColor();
});
function cambioColor(){
	if ($('#thrillerC').hasClass("active")) {
		$('#thriller').css('background-color', '#cc0000');
		$('#drama').css('background-color', 'black');
		$('#terror').css('background-color', '#cc0000');
	}
	if($('#dramaC').hasClass("active")){
		$('#thriller').css('background-color', '#cc0000');
		$('#drama').css('background-color', '#cc0000');
		$('#terror').css('background-color', 'black');
	}
	if($('#terrorC').hasClass("active")){
		$('#thriller').css('background-color', 'black');
		$('#drama').css('background-color', '#cc0000');
		$('#terror').css('background-color', '#cc0000');
	}
}