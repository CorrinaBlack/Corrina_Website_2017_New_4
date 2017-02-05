// ***************************************************************************************************
// ON DOCUMENT READY**********************************************************************************
$(document).ready(function () {

    // ONLOAD *************************************************************************
    setTimeout(function () {

        // Set the navigation div to hide/show
        if ($(window).width() > 1250) {
            var fadeStart = 500, fadeUntil = 840, fading = $('#Sub_Navigation_A');
            $(this).doFade(fadeStart, fadeUntil, fading);
        }
        else {
            var fadeStart = 720, fadeUntil = 840, fading = $('#Sub_Navigation_B');
            $(this).doFade(fadeStart, fadeUntil, fading);
        }

        // Attach the scrolling navigation handlers
        $(document).on("click", "#scrollMe", function () {
            $(this).niceScroll_Top();
        });
        $(document).on("click", "#scrollMe1", function () {
            $(this).niceScroll_Item_1('1');
        });
        $(document).on("click", "#scrollMeHelp1", function () {
            $(this).niceScroll_Item_1_Alt('1');
        });
        $(document).on("click", "#scrollMeHelp2", function () {
            $(this).niceScroll_Item_2_Alt('2');
        });
        $(document).on("click", "#scrollMe2", function () {
            $(this).niceScroll_Other_Items('2');
        });
        $(document).on("click", "#scrollMe3", function () {
            $(this).niceScroll_Other_Items('3');
        });
        $(document).on("click", "#scrollMe4", function () {
            $(this).niceScroll_Other_Items('4');
        });
        $(document).on("click", "#scrollMe5", function () {
            $(this).niceScroll_Other_Items('5');
        });
        $(document).on("click", "#scrollMe6", function () {
            $(this).niceScroll_Other_Items('6');
        });
    }, 50);
    // ********************************************************************************


    // ONRESIZE: ATTACH SHOW SUBNAVIGATION HANDLER ************************************
    $(window).resize(function () {
        if ($(window).width() > 1250) {
            var fadeStart = 500, fadeUntil = 840, fading = $('#Sub_Navigation_A');
            $(this).doFade(fadeStart, fadeUntil, fading);
        }
        else {
            var fadeStart = 720, fadeUntil = 840, fading = $('#Sub_Navigation_B');
            $(this).doFade(fadeStart, fadeUntil, fading);
        }
    });
    // ********************************************************************************


    // DO FADE ************************************************************************
    $.fn.doFade = function (fadeStart, fadeUntil, fading) {
        $(window).bind('scroll', function () {
           var offset = $(document).scrollTop(), opacity = 1;
           if (offset <= fadeStart) {
               opacity = 0;
           }
          else if (offset <= fadeUntil) {
               opacity = ((fadeUntil - fadeStart) - (fadeUntil - offset)) / (fadeUntil - fadeStart);
           }
           else {
               opacity = 1;
           }
           fading.css('opacity', opacity);
        });
    }
    // ********************************************************************************

    
    // DO NICE SCROLL *****************************************************************
    var $root = $('html, body');

    $.fn.niceScroll_Top = function (x) {
        $root.animate({
            scrollTop: '0px'
        }, 500);
    }
    $.fn.niceScroll_Item_1 = function (x) { 
        var y = '#scrollMe_' + x;
        $root.animate({
            scrollTop: $(y).offset().top - 91
        }, 500);
    }
    // freeform has problems with item one scrolling
    $.fn.niceScroll_Item_1_Alt = function (x) {
        var y = '#scrollMe_' + x;
        $root.animate({
                scrollTop: $(y).offset().top - 71
        }, 500);
    }
    // freeform has problems with item two scrolling
    $.fn.niceScroll_Item_2_Alt = function (x) {
        var y = '#scrollMe_' + x;
        $root.animate({
            scrollTop: $(y).offset().top - 83
        }, 500);
    }
    $.fn.niceScroll_Other_Items = function (x) {
        var y = '#scrollMe_' + x;
        $root.animate({
            scrollTop: $(y).offset().top - 43
        }, 500);
    }
    // ********************************************************************************


});
// ***************************************************************************************************