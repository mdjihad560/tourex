(function($) {
  ("use strict");

  /*------------------------------------------------------------------
[Table of contents]


-------------------------------------------------------------------*/

  /*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };

  $(function () {

/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $("#sticky-menu").addClass("sticky-menu");
      } else {
        $("#sticky-menu").removeClass("sticky-menu");
      }
    });

/*--------------------------------------------------------------
OFF CANVAS JS INIT
--------------------------------------------------------------*/

    $(".menu-bar").on("click", function () {
      $(".offcanves-menu, .offcanvas-overlay").addClass("active");
    });
    $(".close, .offcanvas-overlay").on("click", function () {
      $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
    });

    // progress top js
   $(window).on("scroll", function () {
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
       $(".scroll-to-target").removeClass("open");
     } else {
       $(".scroll-to-target").addClass("open");
     }
   });

   /*===========================================
	=           Scroll Up  	         =
=============================================*/
   if ($(".scroll-to-target").length) {
     $(".scroll-to-target").on("click", function () {
       var target = $(this).attr("data-target");
       // animate
       $("html, body").animate(
         {
           scrollTop: $(target).offset().top,
         },
         0
       );
     });
   }

  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {

    $("#loading").fadeOut(500);
    
  }); // End window LODE

  new WOW().init();


})(jQuery);






