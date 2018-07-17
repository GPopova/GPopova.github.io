"use strict";

// Menu Catalog

$('.down').on('click', function() {
    var submenu = $(this).find('.submenu');
    submenu.toggleClass('open');
    $(this).toggleClass('active');
});

$('#openCatalog').on('click', function () {
   $('.catalogInner').toggleClass('open');
});

// button

$('.check').on('click', function () {
    $('.check').removeClass('checked');
    $(this).toggleClass('checked');
// Change Price
    var c = $(this).prev().val();
    $(this).parents('.product-item').find('.cost').text(c);
});


// Menu City

var a = $('.select').find('a');

a.on('click', function (){
    $('#selectCity').toggleClass('open');
});
//Select City

$("#selectCity input[type='radio']").on('click', function () {
    var label = $(this).next();
    var text = label.text();
    $('#cityName').html(text);
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
            700:{
                items:1,
                nav:true,
                loop:true,
                margin:4
            },
            768:{
                items:2,
                nav:true,
                loop:true,
                margin:20
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
            700:{
                items:1,
                nav:true,
                margin:4
            },
            768:{
                items:3,
                nav:true,
                margin:4
            },
            992:{
                items:3,
                nav:true,
                loop:true

            },
            1024:{
                items:3,
                nav:true,
                loop:true
            },
            1440:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
});


$(document).ready(function(){
    $(".slider4").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        infinite: false,
        navSpeed: 1000,
        responsive:{
            0:{
                items:3,
                nav:true
            },
            600:{
                items:3,
                nav:true,
            },
            992:{
                items:3,
                nav:true,
                loop:true

            }
        }
    });
});



//Responsive


//Open Submenu(header)

$('.top-menu .tablet a').on('click', function () {
    $(this).next().toggleClass('open');
});


// Open Submenu(NavigationPanel)

$('.navigation-panel .tablet a').on('click', function () {
    $(this).next().toggleClass('open');
});

// Open Contacts

$('.contacts .tablet').on('click', function () {
   $(this).toggleClass('active');
    $(this).next().toggleClass('open');
});

// Footer Menu

$('.logo .mobile').on('click', function () {
   $(this).toggleClass('active');
    $('.logo ul').toggleClass('open');
});

// Dye Logos Open All

$('.products-all').on('click', function () {
   $('.dye-logos .close').toggleClass('open');
    $(this).text("Скрыть");
    $(this).on('click', function () {
        $(this).text("Показать все 50");
    });
});



