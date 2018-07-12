"use strict";

/* ---- MENU CATALOG ---- */

$('.down').on('click', function() {
    var submenu = $(this).find('.submenu');
    submenu.toggleClass('open');
});

$('#openCatalog').on('click', function () {
   $('.catalogInner').toggleClass('open');
});

// Slider OwlCarousel
$(document).ready(function(){
    $(".slider").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        navSpeed: 1000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true,
            },
            992:{
                items:1,
                nav:true,
                loop:true

            }
        }
    });
});

