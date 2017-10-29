/*!
 * LoveHub - Multipurpose Non-Profit Theme
 * Copyright 1994-2015 ForBetterWeb.com
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 64)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 65
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Countdown
$('#clock').countdown('2017/09/12').on('update.countdown', function(event) {
    var $this = $(this).html(event.strftime(''
    + '<div><span>%-w</span>недели</div>'
    + '<div><span>%-d</span>дни</div>'
    + '<div><span>%H</span>часы</div>'
    + '<div><span>%M</span>мин</div>'
    + '<div><span>%S</span>сек</div>'));
});

jQuery(document).ready(function($) {
    'use strict';

    // Timeline
    var $timeline = $( '.timeline .inner' );
    if ( $timeline.length > 0 ) {
        $timeline.each( function () {

            $(this).owlCarousel({
                loop: false,
                margin: 0,
                nav: true,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    800: { items: 3 },
                    1200: { items: 4 },
                }
            });
        });
    }
});/*Document Ready End*/
