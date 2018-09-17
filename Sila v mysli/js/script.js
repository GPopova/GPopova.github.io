
"use strict";

/* Menu Responsive */

/*$('.submenu').on('click', function () {
   $('.menu-responsive').toggleClass('open');
});


$('.open-list').on('click', function () {
    $('.open-menu').toggleClass('open');
});*/


$('.open-menu').hide();
$('.open-list').mouseenter(function () {
    $('.open-menu').show();
});
$('.open-list').mouseleave(function () {
    $('.open-menu').hide();
});
