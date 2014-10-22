

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=181865358650134";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


(function (d, w, c) {
(w[c] = w[c] || []).push(function() {
try {
w.yaCounter22915180 = new Ya.Metrika({id:22915180,
webvisor:true,
clickmap:true,
trackLinks:true,
accurateTrackBounce:true,
trackHash:true});
} catch(e) { }
});
var n = d.getElementsByTagName("script")[0],
s = d.createElement("script"),
f = function () { n.parentNode.insertBefore(s, n); };
s.type = "text/javascript";
s.async = true;
s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";
if (w.opera == "[object Opera]") {
d.addEventListener("DOMContentLoaded", f, false);
} else { f(); }
})(document, window, "yandex_metrika_callbacks");

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-45671515-1', 'love2shop.ru');
ga('send', 'pageview');
// анимация появления окна коуба 

function StartCoub() {
	$('.instruction').hide("slow", function() { 
		$('.coub-container').show();
		$('.instruction').remove();
	});
}



function AnimateRotate(d){
    var elem = $(".jobs");
    $({deg: 0}).delay(1000).animate({deg: d}, {
        duration: 500,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}
function AnimateArrowbig(){
   $(".arrow_big").delay(1500).animate({
    right:'200px',
    top:'200px',
    opacity:'1',
    height:'140px',
    width:'50px'
  });
}
function AnimateArrowsmall(){
   $(".arrow_small").delay(1700).animate({
    right:'150px',
    top:'200px',
    opacity:'1',
    height:'70px',
    width:'40px'
  });
}
function AnimateStamp(){
   $(".stamp").delay(2500).animate({
    right:'-100px',
    top:'200px',
    opacity:'1',
    height:'220px',
    width:'220px'
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

   //  	$(".subscribe-button").click(function(e) {
			// 	e.preventDefault;
			// 	$(".innermain").slideToggle(500);
			// 	$(".inner").slideToggle(500);
			// });

			$(".vacancy").click(function() {
				$(".innermain").hide(0);
				$(".inner").hide(0);
				$(".animation_container").show(0);
				AnimateRotate(-8);
				AnimateArrowsmall();
				AnimateArrowbig();
				AnimateStamp();
			});
				$(".close").click(function(e) {
					e.preventDefault;
				$(".animation_container").hide(0);
					$(".innermain").show(0);
					});
// анимация для мобильных девайсов

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


// Rock vacancy animation
    $('.vacancy').on({
        mouseenter: function(){
            $(this).addClass('hovered');
            $(this).parent().find('.rock').removeClass('hidden');
            $(this).parent().find('.rock').animate({
                bottom: '+=30px'
                }, 90, function() {
            });
        },
        mouseleave: function(){
            $(this).removeClass('hovered');
            $(this).parent().find('.rock').animate({	
                bottom: '-=30px'
                }, 90, function() {
                    $(this).addClass('hidden')
                });
        }
    });









});

