$(function() {

  $(window).on("scroll", function () {
    $('header').toggleClass("header--active", $(this).scrollTop() > 20);
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__item').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
  })
  
  $('.trending__slider').slick({
    dots: true,
    arrows: false,
  });

  $('.partners__slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      }
    }
    ]
  });

  const mixin1 = document.querySelector('.weak-products__items');
  const mixin2 = document.querySelector('.design-products__items');

  if (mixin1) {
    mixitup('.weak-products__items', {
      selectors: {
        control: '.filter'
      }
      
    })
  }

  if (mixin2) {
    mixitup('.design-products__items', {
      selectors: {
        control: '.filter2'
      }
    })
  }
})