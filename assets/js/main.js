/*global $, alert, console */

$(document).ready(function() {


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
    $(".tabs-section .owl-carousel").owlCarousel({
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

});



window.addEventListener('scroll', function() {
    var top = document.documentElement.scrollTop,
        nav_bar = document.getElementById('nav_bar')

    top > 137 ? nav_bar.classList.add('sticky') : nav_bar.classList.remove('sticky');

});