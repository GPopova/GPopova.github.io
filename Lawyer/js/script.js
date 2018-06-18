$(document).ready(function () {
  $(".fancybox").fancybox({
    'hideOnContentClick': true
  });

  $('.top-menu ul').slicknav({
    prependTo: '.menu-responsive',
    duration: 100
  });

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
});