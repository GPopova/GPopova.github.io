"use strict";


//PAGE HOME//
/* Slider OwlCarousel*/

$(document).ready(function(){
    $(".slider").owlCarousel({
        loop:true,
        margin:0,
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
        margin:0,
        nav: true,
        navText: ["<img src='img/button-left.svg'>","<img src='img/button-right.png'>"],
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



/* Select */


var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
         create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
             and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
         and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
     except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
 then close all select boxes:*/
document.addEventListener("click", closeAllSelect);




/* Menu Responsive */


$('.menu').on('click', function () {
   $('.menu-top-responsive').show();
   $('.close').on('click', function () {
       $('.menu-top-responsive').hide();
   });
});


// PAGES //

/* Carousel Slider3 */

var images = [
    "img/install-img.png",
    "img/color-img.png",
    "img/lighter-img.png"
];

var num = 0;

function next(){
    var slider = document.getElementById("slider3");
    num++;
    if(num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}

function prew(){
    var slider = document.getElementById("slider3");
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
}


/* Carousel Slider4 */

var images4 = [
    "img/install-img.png",
    "img/color-img.png",
    "img/lighter-img.png"
];

var num4 = 0;

function next4(){
    var slider4 = document.getElementById("slider4");
    num4++;
    if(num4 >= images4.length){
        num4 = 0;
    }
    slider4.src = images4[num4];
}

function prew4(){
    var slider4 = document.getElementById("slider4");
    num4--;
    if(num4 < 0){
        num4 = images4.length-1;
    }
    slider4.src = images4[num4];
}

