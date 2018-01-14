// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*-- Section-Scroll--*/
  $(function (){
                  $('#full-body').fullpage({});
            });
            
/*-- Section-Scroll--*/


/*-----Slick Slider Start Here-----*/

//Single Item slide Start Here
$(function () {
    $(".full-slide").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        vertical: false,
        dots: true,
        nextArrow: '<i class="fa fa-angle-right"></i>',
        prevArrow: '<i class="fa fa-angle-left"></i>'
    });
}); //Single Item slide End Here

//Multiple Item slide Start Here
 $(function () {
                $(".multiple-slide").slick({
                    autoplay: true,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '0px',
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                   
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: true
                            }
                        },
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                arrows: true
                            }
                        },
                        {
                            breakpoint: 580,
                            settings: {
                                arrows: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                centerMode: false,
                                centerPadding: '0px'
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                                centerMode: false,
                                centerPadding: '0px',
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });

            }); //Single Item slide End Here
