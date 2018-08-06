$(document).ready(function () {

  $('.data-menu li a').click(function () {
    event.preventDefault();
    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
    } else {
      $this.parent().parent().find('li .submenu').removeClass('show');
      $this.next().toggleClass('show');

    }
  });


  $(".fancybox").fancybox({
    'hideOnContentClick': true,
    afterShow: function (a, z) {
      initMap()
    }
  });

  $('.top-menu ul').slicknav({
    prependTo: '.menu-responsive',
    duration: 100
  });

  if(window.innerWidth < 767){
    function myfun() {
      var width = parseInt($('.top-line .top-right').css('width'));

      $(".slicknav_nav").css('width', width);
    };

    $( window ).resize(myfun);
    $( document ).ready(myfun);
  }


  $('.counties-li li:gt(13)').hide();
  $('.counties-li li.more a').click(function() {
    event.preventDefault();
    $('.counties-li li.more').addClass('display-none');
    $('.counties-li li:gt(13)').show();

  });

  $('.counties-li li.hide a').click(function() {
    event.preventDefault();
    $('.counties-li li.hide').addClass('display-none');
    $('.counties-li li.more').removeClass('display-none');
    $('.counties-li li:gt(13)').hide();
  });

  $('select').niceSelect();
  
});


