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

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {
    preloader();
  }); // End window LODE

  new WOW().init();

  function preloader() {
    $(".preloader").delay(0).fadeOut();
  }
})(jQuery);






