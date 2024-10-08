$(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    autoHeight: true
                },
                400: {
                    items: 1,
                    nav: true,
                    autoHeight: true
                },
                600: {
                    items: 1,
                    nav: true,
                    autoHeight: true
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: true,
                    autoplay: false,
                    autoplayTimeout: 2000,
                    autoplayHoverPause: false,
                    autoHeight: true
                }
            }
        })
    });