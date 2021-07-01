(function ($)
  { "use strict"


   // :: 7.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    $(function () {
        $('[data-toggle="popover"]').popover({html:true})
      })

  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('.preloader-img');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });



// Header fixed and Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {      
      $('#header').addClass('header-fixed');
    } else {     
      $('#header').removeClass('header-fixed');
    }
  });

  if ($(this).scrollTop() > 100) {   
    $('#header').addClass('header-fixed');
  }

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });


 // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fas fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smoth scroll on page hash links
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });
 
/*----------------------------------------------------*/
    /*  CAROUSEL BEST SELLERS
    /*----------------------------------------------------*/
  var owl = $('#best-sellers-carousel');
  owl.owlCarousel({
      items:2,
      loop:true,
      autoplay:true,
      autoplayTimeout:3500,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
  });



/*----------------------------------------------------*/
    /*  CAROUSEL REVIEWSS
    /*----------------------------------------------------*/

    $('.owl-review').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout:7000,
        dots: true,
        items: 1,
        nav: true,    
        navText: ['<i class="fa fa-arrow-up"><i>', '<i class="fa fa-arrow-down"><i>'],
    });


/*----------------------------------------------------*/
    /*  CAROUSEL BRANDS
    /*----------------------------------------------------*/

    $('.owl-brand').owlCarousel({
        loop: true,        
        autoplay: true,
        autoplayTimeout:3000,
        dots: true,
        nav: false,
        responsive : {
          0 : {
            items: 1
          },
          768 : {
            items: 1
          },
          992 : {
            items: 3,
          }
        },
        
    });  
   
/*----------------------------------------------------*/
    /*  CAROUSEL SINGLE PRODUCT
    /*----------------------------------------------------*/
  var owl = $('#single-product-carousel');
  owl.owlCarousel({
      items:2,
      loop:true,
      autoplay:true,
      autoplayTimeout:3500,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        }
    }
  });
   
})(jQuery);
