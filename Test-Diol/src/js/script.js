
"use strict";

var product = document.getElementsByClassName('product');
for(var i = 0; i < product.length; i++){
    counter(product[i]);
}

function counter(container){
    var numCount = container.querySelector('.num_count');
    var plusBtn = container.querySelector('.button_plus');
    var minusBtn = container.querySelector('.button_minus');
    plusBtn.onclick = function() {
        var qty = parseInt(numCount.value);
        qty = qty + 1;
        numCount.value = qty;
    };
    minusBtn.onclick = function() {
        var qty = parseInt(numCount.value);
        qty = qty - 1;
        numCount.value = qty;
    };
}