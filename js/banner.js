$(function() {
    var $timer = null;
    var $index = $('.banner_bullet').find($('.active')).index();
    $colorArr = ['rgb(255,65,117)', 'rgb(210,210,210)', 'rgb(255,204,255)', 'rgb(244,223,206)', 'rgb(255,225,208)'];
    $('#banner_wrap').css('background-color', $colorArr[$index]);
    //$index = $('.banner_pic ul').find($('.active')).index(),
    $nextindex = $index + 1;

    function automove() {
        timer = setInterval(function() {
            $index = $('.banner_bullet').find($('.active')).index();
            $nextindex = $index + 1;
            if ($nextindex > $('.banner_pic ul li').length - 1) {
                $nextindex = 0;
            }
            if ($index > $('.banner_pic ul li').length - 1) {
                $index = 0;
            }
            $('.banner_pic ul li').stop(true, true).eq($index).animate({ 'opacity': 0 }, 300);
            $('.banner_pic ul li').stop(true, true).eq($nextindex).animate({ 'opacity': 1 }, 300);
            $('.banner_pic ul li').eq($index).removeClass('active');
            $('.banner_pic ul li').eq($nextindex).addClass('active');
            $('.banner_bullet a').removeClass('active');
            $('.banner_bullet a').eq($nextindex).addClass('active');
            $('#banner_wrap').css('background-color', $colorArr[$nextindex]);
            $index++;
            $nextindex++;

        }, 4000)
    }
    $('.banner_bullet a').hover(function() { //划过下方小圆点
        $index = $(this).index();
        $('.banner_pic ul li').eq($index).stop(true, true).animate({ 'opacity': 1 }, 300).siblings().stop(true, true).animate({ 'opacity': 0 }, 300);
        $('.banner_pic ul li').eq($index).addClass('active').siblings().removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
    }, function() {})
    automove(); //自动轮播
    $('.banner_pic').hover(function() {
        clearInterval(timer);
        $('.banner_bullet a img').css('animation-iteration-count', 1);
    }, function() {
        automove();
        $('.banner_bullet a img').css('animation-iteration-count', 'infinite');
    })
})
