"use strict";

// Slider OwlCarousel

$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navSpeed: 1000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            992:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navSpeed: 1000,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:1,
                nav:true
            },
            768:{
                items:2,
                nav:true
            },
            992:{
                items:3,
                nav:true,
                loop:true
            }
        }
    });
});

// API Get products, reviews

var $link = 'http://demo4072172.mockable.io/api';
$(document).ready(function() {
    $.get( $link+'/product/1', function(response) {
        $('#products-tpl').tmpl(response).appendTo('#product1');
    });
    $.get($link+'/product/2', function(response) {
        $('#products-tpl').tmpl(response).appendTo('#product2');
    });
});

$('.product1').one('click', function(){
    $.get($link+'/reviews/1', function(response) {
        $('#description1-tmpl').tmpl(response).appendTo('#description1');
    });
});
$('.product1').on('click', function(e){
    e.preventDefault();
    $('.modal1').toggleClass('active');
});
$('.product2').one('click', function(){
    $.get($link+'/reviews/2', function(response) {
        $('#description2-tmpl').tmpl(response).appendTo('#description2');
    });
});
$('.product2').on('click', function(e){
    e.preventDefault();
    $('.modal2').toggleClass('active');
});
