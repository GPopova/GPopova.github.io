"use strict";

// Menu Catalog

$('.down').on('click', function() {
    var submenu = $(this).find('.submenu');
    submenu.toggleClass('open');
});

$('#openCatalog').on('click', function () {
   $('.catalogInner').toggleClass('open');
});

// button

$('.check').on('click', function () {
    $(this).toggleClass('checked');
});

// Menu City

var a = $('.select').find('a');

a.on('click', function (){
    $('#selectCity').toggleClass('open');
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


$(document).ready(function(){
    $(".slider2").owlCarousel({
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
                items:2,
                nav:true,
                loop:true

            }
        }
    });
});


$(document).ready(function(){
    $(".slider3").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        infinite: false,
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

//
