// jQuery for page scrolling feature - requires jQuery Easing plugin
$(document).ready(function() {
    $('#navmenulinks').localScroll({duration:800});
});

$(document).ready(function(){
    var topPadding = 
        // parseInt($('.site-header').css('padding-top'), 10) + 
        // parseInt($('.site-header').css('margin-top'), 10) +
        // parseInt($('.site-header').css('padding-bottom'), 10) + 
        // parseInt($('.site-header').css('margin-bottom'), 10) +
        parseInt($('.site-header').css('height'), 10) + "px";
    $('.content').css('padding-top', topPadding);
    // var boxsizing = $('.site-header').css('box-sizing');
    // $('.content').css('box-sizing', boxsizing);
});