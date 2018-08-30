
"use strict";

/* Menu Responsive */

$('.submenu').on('click', function () {
   $('.menu-responsive').toggleClass('open');
});






videoControls.setAttribute('data-state', 'visible');

var supportsProgress = (document.createElement('progress').max !== undefined);
if (!supportsProgress) progress.setAttribute('data-state', 'fake');

var changeButtonState = function(type) {
    // Play/Pause button
    if (type == 'playpause') {
        if (video.paused || video.ended) {
            playpause.setAttribute('data-state', 'play');
        }
        else {
            playpause.setAttribute('data-state', 'pause');
        }
    }
}

video.addEventListener('play', function() {
    changeButtonState('playpause');
}, false);
video.addEventListener('pause', function() {
    changeButtonState('playpause');
}, false);
stop.addEventListener('click', function(e) {
    video.pause();
    video.currentTime = 0;
    progress.value = 0;
    // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
    changeButtonState('playpause');
});

playpause.addEventListener('click', function(e) {
    if (video.paused || video.ended) video.play();
    else video.pause();
});