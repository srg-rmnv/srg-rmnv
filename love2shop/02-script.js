$(function() {


	var VideoProcessor = (function($){
		function Function(){
			this.windowHeight = $(window).height();
			this.video = $('#video');
			this.videoContent = $('.video-content');
			this.videoContentHeight = $('.video-content').height();
			this.videoContainer = $('#video-content-placeholder');
			this.videoContainerHeight = this.videoContainer.height();
			this.vd = $('video');

			var that = this;
			that.onResize();
			$(window).resize(function(){
				that.onResize();
			});
		}
		Function.prototype.footerHeight = 145;
		Function.prototype.minHeight = 378;
		Function.prototype.onResize = function(){
			this.windowHeight = $(window).height();
			var newVideoHeight = this.windowHeight - this.footerHeight;
			newVideoHeight = newVideoHeight >= this.vd.height() ? this.vd.height() : newVideoHeight;
			if (newVideoHeight <= this.minHeight) {
				newVideoHeight = this.minHeight;
			}
			this.setVideoHeight(newVideoHeight);
			var newVideoContentTop = (this.videoHeight - this.videoContentHeight) / 2;
			this.videoContent.css('top', newVideoContentTop);
		};

		Function.prototype.setVideoHeight = function (videoHeight){
			this.videoHeight = videoHeight;
			this.video.css('height', this.videoHeight);
		};
		Function.prototype.getVideoHeight = function (){
			return this.videoHeight;
		};

		return Function;
	})(jQuery);

	var vp = new VideoProcessor();

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

	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1&appId=181865358650134";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
});

$(document).ready(function(){
        var coubs = {"111":"24ixpro0", "211":"116o0raq"};
    $('.vacancy_link').on({
        mouseenter: function(){
            $(this).addClass('hovered');
            $(this).parent().find('.rock').removeClass('hidden');
            $(this).parent().find('.rock').animate({
                height: "+=80px",
                bottom: '+=20px'
                }, 90, function() {
            });
        },
        mouseleave: function(){
            $(this).removeClass('hovered');
            $(this).parent().find('.rock').animate({
                height: "-=80px",
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
        var city = $('.city').find("input[value="+cityState+"]").data("caption");
        var season = $('.season').find("input[value="+seasonState+"]").data("caption");
        var style = $('.style').find("input[value="+styleState+"]").data("caption");
        var coubId = (cityState + seasonState + styleState);
        $('.city').find("input[value="+cityState+"]").prop('checked', true);
        $('.city .description i').html(city);
        $('.city #myForm img').attr('src','i/city'+cityState+'.png');
        $('.season').find("input[value="+seasonState+"]").prop('checked', true);
        $('.season .description i').html(season);
        $('.season #myForm img').attr('src','i/season'+seasonState+'.png');
        $('.style').find("input[value="+styleState+"]").prop('checked', true);
        $('.style .description i').html(style);
        $('.style #myForm img').attr('src','i/style'+styleState+'.png');
        $(".coub").html('<iframe src="http://coub.com/embed/'+coubs[coubId]+'?muted=false&amp;autostart=true&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="480" height="259"></iframe>');
    }
    else{
        $(".coub").html('<iframe src="http://coub.com/embed/24ixpro0?muted=false&amp;autostart=true&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="480" height="259"></iframe>');
    }

$('#myForm input').on('change', function() {
    var cityState = $('input[name=cityState]:checked').val();
    var seasonState = $('input[name=seasonState]:checked').val();
    var styleState = $('input[name=styleState]:checked').val(); 
    var coubId = (cityState + seasonState + styleState);
    console.log(coubId);
    window.location.hash = coubId;
    $(".coub").html('<iframe src="http://coub.com/embed/'+coubs[coubId]+'?muted=false&amp;autostart=true&originalSize=false&hideTopBar=true&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="480" height="259"></iframe>');
});

$('#myForm label').mouseover(function(){
    var block = $(this).parent().parent().parent().attr('class');
    var state = $(this).parent().find('input').val(); 
    var description = $(this).parent().find('input').data("caption");
    $('.'+block+' #myForm img').attr('src','i/'+block+state+'.png');
    $('.'+block+' .description i').html(description);
});
$('#myForm label').mouseleave(function(){
    var block = $(this).parent().parent().parent().attr('class');
    var state = $(this).parents().find('input[name='+block+'State]:checked').val(); 
    var description = $(this).parents().find('input[name='+block+'State]:checked').data("caption");
    $('.'+block+' #myForm img').attr('src','i/'+block+state+'.png');
    $('.'+block+' .description i').html(description);
});

});