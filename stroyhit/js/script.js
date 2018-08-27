"use strict";
$(document).ready(function(){
    $(window).on('scroll',function(){
        var wt=$(window).scrollTop();
        var vw=$(window).height();
        var sb=$('.scrollup-btn');
        if(wt>vw && $(sb).hasClass('btn-hide'))
            $(sb).removeClass('btn-hide');
        else if(wt<=vw && !$(sb).hasClass('btn-hide'))
            $(sb).addClass('btn-hide');
    })
    function bestPages(event){
        $(event.target).find('.owl-nav').addClass('paginator');
        var paginator=$(event.target).find('.owl-prev');
        var cur=event.item.index+1;
        paginator.after('<div class="pagination--numbers"><span class="current-slide">'+cur+'</span>/<span>'+event.item.count+'</span></div>');
    }
    function bestPagesCount(event){
        var paginator=$(event.target).find('.current-slide');
        var cur=event.item.index+1;
        paginator.text(cur);
    }
    $('.sw_btn').on('click',function(){
        $('.add-p').toggleClass('active');
        $('.map-position').toggleClass('active');
        $('.about-company').toggleClass('active');
    })
    $('.scrollup-btn').on('click',function(){
        $('body,html').animate({scrollTop:0},700);
    })
    $('.to-price-tab').on('click',function(e){
        e.preventDefault();
        $('.tab-item,.tab-header a').removeClass('active');
        $('#tabPrice,.tab-header a:first-child').addClass('active');
        $('body,html').animate({scrollTop:$('.tab-header').offset().top+'px'},500);
    })
$('.compare-table .c-content td').hover(function(){
    var i=$(this).parent().index();
    $('.compare-table .c-content tr:nth-child('+(i+1)+')').addClass('hovered');
},function(){
    var i=$(this).parent().index();
    $('.compare-table .c-content tr:nth-child('+(i+1)+')').removeClass('hovered');
})
    function swipeTable(t,w){
        // $(t).find('td:first-child').css('left',-w+'px');
        $(t).find('table').css('transform','translateX('+w+'px)');


    }

    if($(window).width()<768){
        var t=$(window).width()/2;
        $('.compare-table td').css({'maxWidth':t+'px','minWidth':t+'px'});
    }
    $(window).on('resize',function(){
        if($(window).width()<768){
            var t=$(window).width()/2;
            $('.compare-table td').css({'maxWidth':t+'px','minWidth':t+'px'});
        }
    })


var w=$(window).width()<768?$(window).width()/2:$('.c-table-wrapper.active-table td:not(:first-child)').outerWidth();
    var w1=0;
    var c=$('.compare-table tr:first-child td');
    var w_len=c.length - 2;
    var bord=w_len*w;
    var index=1;
    $('.compare-table td:nth-child(2)').addClass('active');
    var gen_num=1;
    if($('body').hasClass('comp-page')) {
        var a=$('.num-items').offset().top;
        var d=$('.compare-table').offset().top;
        $(window).on('scroll',function(){
            var b=$(window).scrollTop();
            // console.log(b+''+a);
            if($(window).width()<768) {
                if (b >= a && !$('.compare-table').hasClass('affix')) {
                    $('.compare-table').addClass('affix');
                }
                else if (b < a && $('.compare-table').hasClass('affix')) {
                    $('.compare-table').removeClass('affix');
                }
            }
            else{
                if (b >= d && !$('.compare-table').hasClass('affix')) {
                    $('.compare-table').addClass('affix');
                }
                else if (b < d && $('.compare-table').hasClass('affix')) {
                    $('.compare-table').removeClass('affix');
                }
            }
        })
        if($(window).width()<768){
            gen_num= $('.c-table-wrapper.active-table .c-header td').length-1;
        }
        else if($(window).width()<1140){
            gen_num=$('.c-table-wrapper.active-table .c-header td').length-2;
        }
        else if($(window).width()<1440){
            gen_num=$('.c-table-wrapper.active-table .c-header td').length-3;
        }
        else {
            gen_num=$('.c-table-wrapper.active-table .c-header td').length-4;
        }
        $('.btn-left').on('click',function(){
            if(index<gen_num) {
                w1 += w;
                swipeTable('.active-table',-w1);
                index++;
            }
        });
        $('.btn-right').on('click',function(){
            if(index>1) {
                w1 -= w;
                swipeTable('.active-table',-w1);
                index--;
                $(this).hasClass('active-table')? $('.num-items>div:first-child .cur-num').text(index):$('.num-items>div:last-child .cur-num').text(index);
            }
        });

        $('.gen-num').text(gen_num);
        $('.compare-table .c-table-wrapper').swipe({
            swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData) {

                if (phase == 'end') {
                //сработает через 20 пикселей то число которое выбрали в threshold
                if (direction == 'left') {
                    if(index<gen_num) {
                        console.log(w);
                        w1 += w;
                        swipeTable(this,-w1);
                        index++;
                        $(this).hasClass('active-table')?$('.num-items>div:first-child .cur-num').text(index):$('.num-items>div:last-child .cur-num').text(index);

                    }

                }
                if (direction == 'right') {

                    if(index>1) {
                        w1 -= w;
                        swipeTable(this,-w1);
                        index--;
                        $(this).hasClass('active-table')? $('.num-items>div:first-child .cur-num').text(index):$('.num-items>div:last-child .cur-num').text(index);
                    }
                }
            }
            },
            fingers: 'all',
            threshold: 20
        });
    }
    function init() {
        var myMap = new ymaps.Map('map-field', {
            center: [55.73, 37.75],
            zoom: 7,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        });

        myMap.geoObjects.add(myPlacemark);
    }
   $('#filterForm input').on('change',function(){
       $(this).closest('form').addClass('updated');
   })
    $('.btn-clear').on('click',function(){
        $(this).closest('form').removeClass('updated');
    })
    if($('body').hasClass('contact-page') || $('body').hasClass('order-page')){
        ymaps.ready(init);
    }
    $('body').on('click','.btn-send.disabled',function(e){
        e.preventDefault();
    })
    $('.range-input').ionRangeSlider({
        type: "double",
        onFinish:function(data){
            $('#price_min').val(data.from).trigger('change');
            $('#price_max').val(data.to).trigger('change');
        }
    });
    $('#price_min,#price_max').on('change',function(){
        var t=$(this).is('#price_min')?$('#prMin'):$('#prMax');
        t.text($(this).val());
    })
    $('.btn-filter').on('click',function(e){
        e.preventDefault();
        $('.filterForm').addClass('active');
    })
    $('.nextStep').on('click',function(e){
        e.preventDefault();
        var i=$(this).closest('.fit-item').index()+1;
        var index=i+1;
        console.log(index);
        $(this).closest('.fit-item').removeClass('active').next().addClass('active');
        $('.fit-steps li').removeClass('active');
        $('.fit-steps li:nth-child('+index+')').addClass('active');
        var cur=$('.fit-item.active');
        if(index==4){
            $('.fit-result').show();
        }
        $('.step-scale-back').animate({'width': i*25+'%'},300);
        // $(cur).removeClass('active');
        // $(cur).next().addClass('active');

        //
        // $(curl).next('li').addClass('active');
        // $(curl).removeClass('active');
    })

    $('.prevStep').on('click',function(e){
        e.preventDefault();
        var i=$(this).closest('.fit-item').index()-1;
        var index=i-1;
        console.log(index);
        $(this).closest('.fit-item').removeClass('active').prev().addClass('active');
        $('.fit-steps li').removeClass('active');
        $('.fit-steps li:nth-child('-index-')').addClass('active');
        var cur=$('.fit-item.active');
        if(index==4){
            $('.fit-result').show();
        }
        $('.step-scale-back').animate({'width': i*25+'%'},300);
        // $(cur).removeClass('active');
        // $(cur).prev().addClass('active');

        //
        // $(curl).prev('li').addClass('active');
        // $(curl).removeClass('active');
    })
   

    $('.single-product-item .item-info a').on('click',function(e){
        e.preventDefault();
        $(this).prev().height('100%');
    })
    $('body').on('click','.fancybox-ax .open-link',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        var text=$(this).hasClass('active')?'Показать':'Свернуть';
        $(this).text(text);
        $(this).parent().next().slideToggle(500);
        $(this).parent().parent().toggleClass('active');

    })
    $('body').on('click','.tab-product-upper',function(e){
        e.preventDefault();
        $(this).find('.open-link').toggleClass('active');
        var text=$(this).find('.open-link').hasClass('active')?'Показать':'Свернуть';
        $(this).find('.open-link').text(text);
        $(this).next().slideToggle(500);
        $(this).parent().toggleClass('active');

    })
    $('body').on('click','.vacancy-item .open-link',function(e){
        e.preventDefault();
        var text=$(this).find('a').hasClass('active')?'Показать':'Свернуть';
        $(this).find('a').text(text);
        $(this).find('a').toggleClass('active');
        $(this).parent().next().slideToggle(500);

    })
    $('.question .icon-item').on('click',function(){
        if($(window).width()<768) {
            var text = $(this).find('.hidden-tip').text();
            $.fancybox.open({
                href: "",
                padding:0,
                margin:0,
                type: "ajax",
                content: "<p class='fancy-tip'>" + text + "</p>"
            });
        }
    })
    $('.buy button[type=submit]:not(.to-price-tab)').on('click',function(){
        if($(window).width()>1499) {
            $.ajax({
                type: "GET",
                cache: false,
                url: 'product.html',
                success: function (response) {
                    $.fancybox.open({
                        padding: 0,
                        margin: 0,
                        wrapCSS     : 'fancybox-ax',
                        type: "ajax",
                        content: '<div class="fancy-header">Купить</div><div id="tabPrice" class="tab-item active">' + $(response).find("#tabPrice").html() + '</div>'
                    });

                }
            });
        }

    });
    $('input[name=view]').on('change',function(){
        if($(this).closest('.sort-panel').next().hasClass('category-filter')){
            $(this).closest('.sort-panel').next().next().toggleClass('list-view');
        }
        else
        $(this).closest('.sort-panel').next().toggleClass('list-view');
    })
    $('.down').on('click', function() {
        // var submenu = $(this).find('.submenu');
        // submenu.toggleClass('open');
        // $(this).toggleClass('active');
    });
    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
    var wrapper = $( ".file_upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( ".attach" ),
        lbl = wrapper.find( ".file-name" );
    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length ){
            lbl.html( 'Файл не выбран');
            return;
        }


        if( lbl.is( ":visible" ) ){
            lbl.html( '<div class="icon-item close"></div>'+file_name );
            btn.html( '<div class="icon-item"></div>Прикрепить файл' );
        }else
            btn.text( file_name );
    }).change();
    $('.tab-header>a').on('click',function(e){
        var num=1;
        e.preventDefault();
        num+=$(this).index();
        $('.tab-header>a,.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.tab-item:nth-child('+num+')').addClass('active');
    });
    $('.step-body .next-step').on('click',function(e){
        e.preventDefault();
        var num=1;
        num+=$(this).closest('.step-body').index();
        $('.step').removeClass('active');
        $('.step:nth-child('+num+')').addClass('active');
        var cur=$(this).closest('.step-body');
        var next=cur.next();
        num+=$(this).closest('.step-body').index();
        cur.removeClass('active');
        $(next).addClass('active');
    })

    $('.step-body .prev-step').on('click',function(e){
        e.preventDefault();
        var num=0;
        num-=$(this).closest('.step-body').index();
        $('.step').removeClass('active');
        $('.step:nth-child('-num-')').addClass('active');
        var cur=$(this).closest('.step-body');
        var prev=cur.prev();
        num-=$(this).closest('.step-body').index();
        cur.removeClass('active');
        $(prev).addClass('active');
    })

    $('.private-review form .form-control').on('keydown',function(){
        $(this).closest('form').find('.btn-send').removeClass('disabled');
    })
    $('#dataForm input[type=radio]').on('change',function(){
        $('.company-input').toggle();
    });
    $('#registerForm input[type=radio],#deliveryForm input[type=radio]').on('change',function(){

        var val=$(this).val();
        $('.register-type').removeClass('active');
        $('.'+val).addClass('active');
    })
    $('#openCatalog').on('click', function () {
        // $('.catalogInner').toggleClass('open');
    });
    $( window ).resize(function(){
        $( ".file_upload input" ).triggerHandler( "change" );
    });
// button
    $('.order-call,.fancybox').fancybox({
        padding:0,
        margin:0
    });
    $('.fancybox-group').fancybox({
        padding:0,
        margin:0,
        wrapCSS     : 'fancybox-rev',
        beforeShow : function() {
            var index=this.index+1;
            this.title=index+'/'+this.group.length;
        }
    });
    $('.filter-title').on('click',function(){
        $(this).next().slideToggle();
    })
    $('.btn-filter').fancybox({
        padding:0,
        margin:0,
        topRatio:0,
        wrapCSS     : 'fancybox-cust'
    });
    $('.check').on('click', function () {
        $('.check').removeClass('checked');
        $(this).toggleClass('checked');
// Change Price
        var c = $(this).prev().val();
        $(this).parents('.product-item').find('.cost').text(c);
    });
    $(".slider8").owlCarousel({
        loop:false,
        margin:10,
        items:1,
        nav:true,
        dots:false,
        responsiveClass:true,
        navSpeed: 1000,
        responsive:{
            768:{
                items:3,
                nav:true,
                dots:false,
                margin:10
            },
            1140:{
                items:5,
                nav:true,
                dots:false
            }
        }
    });

// Menu City

//Select City
    if($(window).width()<768){
        $(".slider7").owlCarousel({
            loop:false,
            margin:10,
            items:1,
            nav:true,
            dots:false,
            responsiveClass:true,
            navSpeed: 1000,
            onInitialized:bestPages,
            onChanged:bestPagesCount
        });
    }
    $("#selectCity input[type='radio']").on('click', function () {
        var label = $(this).next();
        var text = label.text();
        $('#cityName').find('span').html(text);
    });

    $('.more-tel').on('click',function(e){
        e.preventDefault();
        $(this).closest('.contacts').toggleClass('open');
    })
    if($(window).width()<1440) {
        var text2=$('.top-menu-list .tablet-no');
        var text = $(window).width() > 767 ? $('.center-menu .tablet-no') : $('.navigation-panel .mob-no');
        $('.more-menu .submenu ul').html(text.clone());
       $('.add-li ul').html(text2.clone());
    }
    $(window).on('resize',function(){
        $('.more-menu .submenu ul').html('');
        if($(window).width()<1140) {
            var text = $(window).width() > 767 ? $('.center-menu .tablet-no') : $('.navigation-panel .mob-no');
            $('.more-menu .submenu ul').html(text.clone());
        }
        if($(window).width()>767){
            if($('.slider7').hasClass('owl-carousel')){
                $('.slider7').trigger('destroy.owl.carousel');
                $('.slider7').removeClass('owl-carousel');
            }
        }
        else{
            if(!$('.slider7').hasClass('owl-carousel')) {
                $('.slider7').addClass('owl-carousel')
                $(".slider7").owlCarousel({
                    loop: false,
                    margin: 10,
                    items: 1,
                    nav: true,
                    dots: false,
                    responsiveClass: true,
                    navSpeed: 1000,
                    onInitialized:bestPages,
                    onChanged:bestPagesCount

                });
            }
        }
    })
    $('#cityName,#openCatalog,.down>a,.more-menu>li>a,.add-li>a').on('click',function(e){
        e.preventDefault();
        $('.settings,.navigation').addClass('move');

if($(window).width()>767){
    if($(e.target).parent().hasClass('down')){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');

    }
    else{
        $(this).next().toggleClass('open');
    }

}
        else{
    if($(e.target).parent().hasClass('down')){
        $('.catalogMenu').addClass('move');
        $(this).parent().addClass('active');
    }
    $(this).next().addClass('open');

}
    })
    $('.to-menu').on('click',function(e){
        e.preventDefault();
        if( $('.catalogMenu').hasClass('move')){
            $('.catalogMenu').removeClass('move');
            $('.down.active').removeClass('active')
        }
        else{
        $('.settings,.navigation').removeClass('move');
        $(this).parent().removeClass('open');}
    })
$('.dropdown-toggle').on('click',function(){
    var href=$(this).data('slide');
    $(this).toggleClass('open');
    $('#'+href).slideToggle();
})
    $('.navbar-toggle').on('click',function(){
        var target=$(this).data('target');
        $(this).toggleClass('open');
        $(target).toggleClass('open');
    })
    // var a = $('.select').find('a');
    //
    // a.on('click', function (){
    //     $('#selectCity').toggleClass('open');
    // });
    $(".slider").owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:false,
        dots:true,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        navSpeed: 1000

    });
    $(".slider6").owlCarousel({
        loop:true,
        margin:10,
        items:1,
        nav:false,
        autoplay:5000,
        autoplayTimeout:4000,
        /*animateOut: 'fadeOut',
        transitionStyle : "fade",*/
        slideSpeed:4000,
        rewindSpeed:4000,
        paginationSpeed:5000,
        dots:true,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        navSpeed: 5000

    });
    $('.count-plus,.count-minus').on('click',function(e){
        e.preventDefault();
        var val=$(this).parent().find('input').val();
        var t=$(this).hasClass('count-plus')?++val:--val;
        t<0&&(t=0);
       $(this).parent().find('input').val(t);
    })
    $('#callForm').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "#",
            data: { name: "", tel: "" }
        })
            .done(function( msg ) {
                $('#callForm').addClass('got');
                setTimeout(function(){
                    $('.fancybox-close').click();
                    $('#callForm').delay(4000).removeClass('got');
                },2000);
            });
    })
    $('#toDirector').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "#",
            data: { name: "", tel: "",email:"" }
        })
            .done(function( msg ) {
                $('#toDirectorForm').addClass('got');
                setTimeout(function(){
                    $('.fancybox-close').click();
                    $('#toDirectorForm').delay(6000).removeClass('got');
                },2000);
            });
    })
$('#passwordForm').on('submit',function(){
    $.ajax({
        method: "GET",
        url: "#",
        data: { email: ""}
    })
        .done(function( msg ) {
            var cur=$('.password-field .form-body.active');
            var next=cur.next();
            cur.removeClass('active');
            next.addClass('active');

        });
    return false;
})
    $(".slider4").owlCarousel({
        loop:false,
        items:3,
        nav:true,
        dots:false,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        navSpeed: 1000,
        responsive:{
            768:{
                items:3,
                nav:true,
                dots:false,
                margin:10
            },
            1140:{
                items:5,
                nav:true,
                dots:false
            }
        }

    });
    $(".slider2").owlCarousel({
        loop:true,
        margin:10,
        nav:true,dots:false,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        navSpeed: 1000,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:false
            },
            600:{
                items:1,
                nav:true,
            },
            768:{
                items:2,
                nav:true,
                margin:20

            },
            1140:{
                items:2,
                nav:true,
                margin:40
            }
        }
    });
    $(".slider3").owlCarousel({
        nav:true,
        dots:false,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        infinite: false,
        navSpeed: 1000,
        responsive:{
            0:{
                items:1,
                margin:10,
                nav:true,
                dots:false
            },
            640:{
                items:2,
                nav:true,
                dots:false
            },
            768:{
                items:3,
                nav:true,
                dots:false,
                margin:7

            },
            1140:{
                items:2,
                nav:true,
                dots:false,
                margin:20,
                slideBy:2
            }
        }
    });
    $(".slider5").owlCarousel({
        nav:true,
        dots:false,
        responsiveClass:true,
        URLhashListener:true,
        startPosition: 'URLHash',
        infinite: false,
        navSpeed: 1000,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:false
            },
            640:{
                items:2,
                nav:true,
                dots:false
            },
            768:{
                items:3,
                nav:true,
                dots:false,
                margin:7

            },
            1140:{
                items:3,
                nav:true,
                dots:false,
                margin:40,
                slideBy:1
            },
            1440:{
                items:4,
                nav:true,
                dots:false,
                margin:40,
                slideBy:1
            }
        }
    });
$('.search input[type=search]').on('keyup',function(){
    if($(window).width()>1439)
    $(this).closest('.search').addClass('tipped');
})
    $('.search input[type=search]').on('blur',function(){
        if($(window).width()>1439)
            $(this).closest('.search').removeClass('tipped');
    })
    $('.faq-item h2').on('click',function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle(500);
    })
    $('.btn-show').on('click',function(){
        $(this).prev().toggleClass('show-less');
    })
    var opt=0;
    var ar=$('.price-scale-header li');
    function updateScale(sum){
        opt+=sum;
        $.each(ar,function(key,value){
            var margin=$(ar[key]).data('list-price-id');
            var m2=$(ar[++key]).data('list-price-id');
           console.log(m2+' '+margin);
            var s=opt/1000;
            if(s>margin && s<m2){
                $(ar[key]).prev().removeClass('active');
                $(ar[key]).addClass('active');
                $('.price-table p').removeClass('current-p');
                var index=key+1;
                $('.price-table p:nth-child('+index+')').addClass('current-p');
                $('.price-scale-header').removeClass('not-slided');
                $('.price-scale-line').animate({'width':(key+1)*25+'%'},400);
            }
        });

    }
    $('.cart .btn-close').on('click',function(){
        $(this).parent().addClass('deleted');
    })
    $('.cart .btn-return').on('click',function(){
        $(this).parent().parent().removeClass('deleted');
    })
    $('body').on('click','.tab-subproduct .btn-blue:not(.ordered)',function(e){
        $(this).addClass('ordered');
        e.preventDefault();
        var count=$(this).prev().find('input').val();
        var price=parseInt($(this).prevAll('.price').find('.current .change-price').text().split(' ').join(''));
        var sum=count*price;
        console.log(sum);
        updateScale(sum);
        $(this).html('<img src="img/check-b.svg" alt=""/>Оформить');
    })
    $('.product-size input').on('change',function(){
       var price= $(this).data('price');
        $(this).closest('.product-size').prev().find('.change-price').text(price);
        if($(this).parent().parent().parent().hasClass('tab-review-header-item')){
           var index=$(this).data('item');
            console.log(index);
            $('.tab-product-item').removeClass('focus');
            $('#'+index).addClass('focus');
        }
        
    })
        $('.table-wrapper').mCustomScrollbar({
            axis:"x",
            theme:"rounded-dots-dark",
            advanced:{ autoExpandHorizontalScroll:true }
        });
    $('.tab-header>a').on('click',function(){
        if($(window).width()<440){
            var width=$(window).width();
            var w=$(this).parent().width();

            var t=$(this).index()==2||$(this).index()==3?(w-width):0;
            console.log(t);
            $('.tab-header').css('transform','translateX(-'+t+'px)');
        }

    })
    $('.order-page .order-list').mCustomScrollbar({
        theme:"rounded-dots-dark" 
    });


  $('#tag-display').on('click', function () {
    $('.tag-display').show();
});


$('#brand-display').on('click', function () {
    $('.brand-display').show();
});



    /* Contacts Scroll */

    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 600, 'swing', function () {
            window.location.hash = target;
        });
    });


});



//

