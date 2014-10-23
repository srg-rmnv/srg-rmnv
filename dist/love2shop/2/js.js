// анимация появления окна коуба 

function StartCoub() {
	$('.instruction').hide("slow", function() { 
		$('.coub-container').show();
		$('.instruction').remove();
	});
}


$(window).on('load resize', function() { 
    if (($(window).width()) > 1024) {
    	$("video").show();
    	document.getElementById('video').play();}
 else {
 		document.getElementById('video').pause();
 		$('video').hide();
 		} 
});

$(document).ready(function() {

$(".subscribe-button").click(function(e) {
	e.preventDefault;
	$(".innermain").hide();
	$(".inner").show();
});
// анимация для мобильных девайсов

	$(".arrow").click(function() {
		$("html, body").animate({ scrollTop: "700px" });
	});

// тут задаем коубы

	var coubs = {"111":"24ixpro0", "211":"116o0raq"};

// показываем коуб только если выбраны все три категории

	$('#coub input').on('change', function() {
    var cityState = $('input[name=cityState]:checked').val();
    var seasonState = $('input[name=seasonState]:checked').val();
    var styleState = $('input[name=styleState]:checked').val(); 
    var coubId = (cityState + seasonState + styleState);
    if (coubId > 110) {
    	StartCoub();
    	window.location.hash = coubId;
    	var coubHeight = parseInt($('.coub').css('height'));
    	var coubWidth = parseInt($('.coub').css('width'));
    	$(".coub").html('<iframe src="http://coub.com/embed/'+coubs[coubId]+'?muted=false&amp;autostart=false&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="'+coubWidth+'" height="'+coubHeight+'"></iframe>');
    }});

// сохранение ховера только на выбранных элементах

	$(".try").on('click', function(){
	    $(this).addClass("hovered");
	    $(this).parent().parent().find('.hovered').not(this).removeClass('hovered');
	});
});