
$(document).ready(function(){
    $("#slide-one").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:0,
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
    $("#slide-two").owlCarousel({
        loop:true,
        margin:0,
        responsiveClass:true,
        responsive:{
            0:{
                items:5,
                nav:true
            },
            600:{
                items:4,
                nav:true
            },
            992:{
                items:5,
                nav:true,
                loop:true
            }
        }
    });
});


$(document).ready(function() {
    $(".select").select2();
    $(".js-example-basic-multiple").select2();
});


$( "#slider-range" ).slider({
    range: true,
    values: [ 0, 100 ]
});

// $(".gradient").pxgradient({
//     step: 5,
//     colors: ["#ffe0c4","#ff8414"],
//     dir: "y"
// });