
"use strict";

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


