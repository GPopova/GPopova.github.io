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

// formSignIn open
$('#sign').on('click', function() {
    $('#formSignIn').toggleClass('open');
});

//Authorization:
// Form Login 
var formLogin = document.forms.login;
formLogin.onsubmit = function (e) {
    e.preventDefault();
    resetError(this.elements.name.parentNode);
    if (!validateName(this.elements.name.value, 2, 20)) {
        showError(this.elements.name.parentNode, 'Enter your name');
    }
    resetError(this.elements.password.parentNode);
    if(!validatePassword(this.elements.password.value, 6, 15)){
        showError(this.elements.password.parentNode, 'Enter your password');
    }
    if(validateName(this.elements.name.value, 2, 20) && validatePassword(this.elements.password.value, 6, 15)){
        formLogin.reset();
    }
};
// Form Registration 
var formRegistration = document.forms.registration;
formRegistration.onsubmit = function (e) {
    e.preventDefault();
    resetError(this.elements.name.parentNode);
    if (!validateName(this.elements.name.value, 2, 20)) {
        showError(this.elements.name.parentNode, 'Enter your name');
    }
    resetError(this.elements.password.parentNode);
    if(!validatePassword(this.elements.password.value, 6, 15)){
        showError(this.elements.password.parentNode, 'Enter your password');
    }
    if(validateName(this.elements.name.value, 2, 20) && validatePassword(this.elements.password.value, 6, 15)){
        setTimeout(function(){
            formRegistration.reset();
        }, 3000);
    }
};

// Functions for Validate Forms
function validateName(str, min, max) {
    return (str.length >= min) && (str.length <= max) && (checkName(str));
}
function checkName(str) {
    var wrongSymbols = '01234567890!?:;.';
    for (var i = 0; i < str.length; i++) {
        if (wrongSymbols.indexOf(str[i]) > -1) return false;
    }
    return true;
}
function validatePassword(str, min, max) {
    return (str.length >= min) && (str.length <= max);
}

// add errorMessage
function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

// remove errorMessage
function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

//Form Subscribe Footer
var formSubscribe = document.forms.subscribe;

formSubscribe.onsubmit = function(e){
    e.preventDefault();
    resetError(this.elements.email.parentNode);
    if (!validateEmail(this.elements.email.value)) {
        showError(this.elements.email.parentNode, ' Enter your email');
    }
};
function validateEmail(str) {
    return checkEmail(str);
}
function checkEmail(str) {
    if (str.indexOf('@') < 1) return false;
    if (str.indexOf('.') <= str.indexOf('@') + 2) return false;
    if (str.indexOf('.') == str[str.length-1]) return false;
    return true;
}
