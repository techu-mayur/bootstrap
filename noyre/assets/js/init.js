/**
 * Created by User on 24-06-2020.
 */
(function ($) {
    $(document).ready(function () {

        /**
        About us start here
         */
        $('.about-caurosel').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left aboutarrow-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right aboutarrow-right" aria-hidden="true"></i>'],
            dots: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
            }
        })

        /**
         About us end here
         */

        /**
         Client  start here
         */
        $('.client-carousel').owlCarousel({
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left aboutarrow-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right aboutarrow-right" aria-hidden="true"></i>'],
            dots: false,
            center: true,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:1,
                },
            }
        })

        /**
         Client  end here
         */

    });
})(jQuery);
