$(function () {

    $('.header__slider-inner').slick({
        dots: false,
        arrows: false,
        infinite: true,
        asNavFor: '.header__slider-nav',
        speed: 500,
        fade: true,
        responsive: [
            /*  {
                 breakpoint: 681,
                 settings: {
                     dots: false,
                     arrows: false,
                     infinite: true,
                     asNavFor: '.header__slider-nav',
                     speed: 500,
                     fade: true,
                 }
             }, */
        ]
    });

    $('.header__slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.header__slider-inner',
        autoplay: true,
        autoplaySpeed: 7000,
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        speed: 900,
        responsive: [
            {
                breakpoint: 1181,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                }
            },
            {
                breakpoint: 941,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '200px',
                    arrows: true,
                    speed: 1500,
                }
            },
            {
                breakpoint: 911,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '190px',
                    arrows: true,
                    speed: 1500,
                }
            },
            {
                breakpoint: 811,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '170px',
                    arrows: true,
                    speed: 1500,
                }
            },
            {
                breakpoint: 791,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '150px',
                    arrows: true,
                    speed: 1500,
                }
            },
            {
                breakpoint: 751,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '120px',
                    arrows: true,
                    speed: 1500,
                }
            },
            {
                breakpoint: 721,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '90px',
                    arrows: true,
                    speed: 1500,
                }
            },

            {
                breakpoint: 681,
                settings: 'unslick',

            },
        ]
    });

    $('.menu-btn').on('click', function () {
        $('.header__menu-list').toggleClass('active');
    });

    $('.footer__list-title.no--1').on('click', function () {
        $('.footer__list-link__item.no--1').toggleClass('active');
    });

    $('.footer__list-title.no--2').on('click', function () {
        $('.footer__list-link__item.no--2').toggleClass('active');
    });

    $('.footer__list-title.no--3').on('click', function () {
        $('.footer__list-link__item.no--3').toggleClass('active');
    });

    $('.footer__list-title.no--4').on('click', function () {
        $('.footer__list-link__item.no--4').toggleClass('active');
    });

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

});