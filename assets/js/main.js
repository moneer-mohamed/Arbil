/*global $, alert, console */

$(document).ready(function() {

    function handlePreloader() {
        if ($('.loader-wrap').length) {
            $('.loader-wrap').delay(1000).fadeOut(500);
        }
        TweenMax.to($(".loader-wrap .overlay_pre"), 1.2, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
        });
    }

    if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function() {
            $('.loader-wrap').delay(200).fadeOut(500);
        })
    }

    $(window).on('load', function() {
        handlePreloader();
    });


    /* ===============================  click on navbar toggler  =============================== */
    $('.icon_bar').on('click', function() {
        $(this).toggleClass('open');
        $('.sidebar').toggleClass("opened");
        $('.overlay_gen').fadeToggle().on('click', function() {
            $(this).fadeOut();
            $('.icon_bar').removeClass('open')
            $('.sidebar').removeClass("opened");
        });
    })


    /* ===============================  tabs Carousel =============================== */
    $(".tabs-section .owl-carousel, .menu_wrap.owl-carousel").owlCarousel({
        autoplay: false,
        nav: true,
        dots: false,
        navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
        loop: true,
        responsive: {
            0: { items: 2 },
            576: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1201: { items: 6 }
        }
    });


    $('.testimonial_active').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        stagePadding: 150,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            575: {
                items: 1,
                stagePadding: 100,
            },
            768: {
                items: 1,
                stagePadding: 10,
            },
            992: {
                items: 1,
                stagePadding: 50,
            },
            1250: {
                items: 1,
                stagePadding: 150,
            },
        },
    });



    /* ===============================  jarallax  =============================== */

    $('.jarallax').jarallax({

        // options here

    });


    /* ===============================  WOW.js  =============================== */

    new WOW().init();


    /* ===============================  Button Up  =============================== */

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 1000) {

            $('.up').addClass('fade')
        } else {

            $('.up').removeClass('fade')
        }
    })


    $('.up').on('click', function() {

        $('html, body').animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo')
    })


    /* ===============================  dropdown  =============================== */

    $('.dropdown-toggle').dropdown()

    /* ===============================  tooltip  =============================== */
    $('.tooltipp').tooltip();

    /* ===============================  venobox  =============================== */
    $('.venobox').venobox({
        bgcolor: '',
        overlayColor: 'rgba(6, 12, 34, 0.85)',
        closeBackground: '',
        closeColor: '#fff'
    });


    /* =============================== Settings of content tabs =============================== */
    $('.products_section .list_menu ul li').on('click', function() {

        $(this).addClass('active').siblings().removeClass('active');

        var id = $(this).attr('data-content')

        $('.products_content .box_content[id="' + id + '"]').addClass('active').siblings().removeClass('active')

    })

    /* =============================== Settings of content tabs =============================== */
    $('.menu_page .menu_wrap .item').on('click', function() {

        $(this).addClass('active').parent().siblings().find('.item').removeClass('active');

        var id = $(this).attr('data-content')

        $('.menu_page .menu_content .box_content[id="' + id + '"]').addClass('active').siblings().removeClass('active')

    })


    /* =============================== nice select =============================== */
    $('.nice-select').niceSelect();

    /* =============================== jquery ui =============================== */
    $('input.timepicker').timepicker({});

    $('#date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });


});