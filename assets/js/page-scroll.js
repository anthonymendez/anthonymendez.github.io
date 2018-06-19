// jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function() {
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            var href = $anchor.attr('href');
            var fixedHref = href.substring(href.indexOf("#"));

            var topPadding = parseInt($('.site-header').css('height'), 10);
            console.log($(fixedHref).offset().top);
            $('html, body').stop().animate({
                scrollTop: $(fixedHref).offset().top - (topPadding)
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
});

$(document).ready(function(){
    var height = parseInt($('.site-header').css('height'), 10);
    var imgTopBit = parseInt($('#main').css('height'), 10) / 16;
    var topPadding = (height - imgTopBit) + "px"
    $('.content').css('padding-top', topPadding);
});