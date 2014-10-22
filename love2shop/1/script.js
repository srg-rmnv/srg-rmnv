

	$('.subscribe-button').on('click', function(){
		var self = this;
		$(this).attr('disabled', 'disabled');

		$.get('/check-email', {email: $('[name="email"]').val()}, function(response){
			$(self).removeAttr('disabled');
			if (response.success) {
				if (typeof response.data.redirectTo != 'undefined') {
					location.href = response.data.redirectTo;
				}
			}
			else {
				alert(response.error);
			}
		}, 'json');
	});
if (($(window).width()) > 1024) {
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=181865358650134";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));}

function StartVideo(){if (($(window).width()) > 1024) {document.getElementById('video').play();}
 else {}
}
$(window).on('load', function() { StartVideo() });
$(window).on('resize', function() { StartVideo() });

$(document).ready(function(){
window.addEventListener('load', function(){
setTimeout(scrollTo, 0, 0, 1);
}, false);



        var coubs = {"111":"24ixpro0", "211":"116o0raq"};
    $('.vacancy_link').on({
        mouseenter: function(){
            $(this).addClass('hovered');
            $(this).parent().find('.rock').removeClass('hidden');
            $(this).parent().find('.rock').animate({
                height: "+=40px",
                bottom: '+=20px'
                }, 90, function() {
            });
        },
        mouseleave: function(){
            $(this).removeClass('hovered');
            $(this).parent().find('.rock').animate({
                height: "-=40px",
                bottom: '-=20px'
                }, 90, function() {
                    $(this).addClass('hidden')
                });
        }
    });
    if(window.location.hash){
        var hash = window.location.hash;
        var cityState = (hash.substring(1,2))
        var seasonState = (hash.substring(2,3))
        var styleState = (hash.substring(3))
        var coubId = (cityState + seasonState + styleState);
        $('.city').find("input[value="+cityState+"]").prop('checked', true).next('label').find('div').addClass("hovered");
        $('.season').find("input[value="+seasonState+"]").prop('checked', true).next('label').find('div').addClass("hovered");;
        $('.style').find("input[value="+styleState+"]").prop('checked', true).next('label').find('div').addClass("hovered");;
        console.log(coubId);
        $(".coub").html('<iframe src="http://coub.com/embed/'+coubs[coubId]+'?muted=false&amp;autostart=true&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="480" height="259"></iframe>');
    }
    else{
        $(".coub").html('<iframe src="http://coub.com/embed/24ixpro0?muted=false&amp;autostart=true&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="480" height="259"></iframe>');
    }

$('#coub input').on('change', function() {
    var cityState = $('input[name=cityState]:checked').val();
    var seasonState = $('input[name=seasonState]:checked').val();
    var styleState = $('input[name=styleState]:checked').val(); 
    var coubId = (cityState + seasonState + styleState);
    console.log(coubId);
    window.location.hash = coubId;
    $(".coub").html('<iframe src="http://coub.com/embed/'+coubs[coubId]+'?muted=false&amp;autostart=true&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="480" height="259"></iframe>');
});
$(".city .try").on('click', function(){
    $(this).addClass("hovered");
    $(this).parent().parent().find('.hovered').not(this).removeClass('hovered');
});
$(".season .try").on('click', function(){
    $(this).addClass("hovered");
    $(this).parent().parent().find('.hovered').not(this).removeClass('hovered');
});
$(".style .try").on('click', function(){
    $(this).addClass("hovered");
    $(this).parent().parent().find('.hovered').not(this).removeClass('hovered');
});


AnimateRotate(-8);
AnimateArrowsmall();
AnimateArrowbig();
AnimateStamp();
});


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