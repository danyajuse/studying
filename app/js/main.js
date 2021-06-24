$(function () {

  $(".filter__range").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter__min').text(data.from + '.00');
      $('.filter__max').text(data.to + '.00');
    },
    onChange: function (data) {
      $('.filter__min').text(data.from + '.00');
      $('.filter__max').text(data.to + '.00');
    }
  });

  $(".recent-card__stars").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true,
    starSvg: "<svg><use xlink: href = images/sprite.svg#starr></use></svg>"
  });

  $(".product-card__stars").rateYo({
    starWidth: "19px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "11px",
    readOnly: true,
    starSvg: "<svg><use xlink: href = images/sprite.svg#starr></use></svg>"
  });

  $(window).on("scroll", function () {
    $('header').toggleClass("header--active", $(this).scrollTop() > 20);
  });

  $('.filter-btn').on('click', function () {
    $(this).toggleClass('filter-btn--active')
    $('.product-shop__wrapper').toggleClass('product-shop__wrapper--active');
    $('.sidebar').toggleClass('sidebar--active')
    $('.overlay').toggleClass('overlay--active');
    $('body').toggleClass('modal-open');
  })

  
  $('.overlay').on('click', function () {
    $('.product-shop__wrapper').removeClass('product-shop__wrapper--active');
    $('.sibebar').removeClass('sidebar--active')
    $(this).removeClass('overlay--active');
    $('.filter-btn').removeClass('filter-btn--active');
    $('body').toggleClass('modal-open');
  })

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu a').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active');
  });

  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
  })

  $('.view__button').on('click', function() {
    $('.view__button').removeClass('view__button--active')
    $(this).addClass('view__button--active');
  })

  $('.view__button--list').on('click', function() {
    $('.product-shop__list').addClass('product-shop__list--list');
    $('.product-card').addClass('product-card--list');
    $('.pagination').addClass('pagination--list')
  })

  $('.view__button--grid').on('click', function() {
    $('.product-shop__list').removeClass('product-shop__list--list');
    $('.product-card').removeClass('product-card--list');
    $('.pagination').removeClass('pagination--list')
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
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  const mixin1 = document.querySelector('.weak-products__items');
  const mixin2 = document.querySelector('.design-products__items');

  if (mixin1) {
    mixitup('.weak-products__items', {
      selectors: {
        control: '.filter1'
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