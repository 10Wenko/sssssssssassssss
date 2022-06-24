$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.gallery__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 800,
    });
});