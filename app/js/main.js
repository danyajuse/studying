$(function () {

  $(".filter-price__range").ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__min').text(data.from + '.00');
      $('.filter-price__max').text(data.to + '.00');
    },
    onChange: function (data) {
      $('.filter-price__min').text(data.from + '.00');
      $('.filter-price__max').text(data.to + '.00');
    }
  });

  $(".filter-recent__stars").rateYo({
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

  $(".product-shop__btn-filter").on("click", function (event) {
    event.preventDefault();
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  $('.menu__btn').on('click', function () {
    $(this).toggleClass('menu__btn--active');
  });

  $('.menu a').on('click', function () {
    $('.menu__btn').removeClass('menu__btn--active')
  })

  $('.menu__item').on('click', function () {
    $('.menu__list').removeClass('menu__list--active');
  })

  $('.product-shop__filter-btn').on('click', function () {
    $('.product-shop__filters').toggleClass('product-shop__filters--active')
  })

  $('.product-shop__filter-btn').on('click', function () {
    $(this).toggleClass('product-shop__filter-btn--active')
  })

  $('.view__button').on('click', function () {
    $('.view__button').removeClass('view__button--active')
    $(this).addClass('view__button--active');
  })

  $('.view__button--list').on('click', function () {
    $('.product-card').addClass('product-card--list')
  })

  $('.view__button--grid').on('click', function () {
    $('.product-card').removeClass('product-card--list')
  })

  $('.view__button--list').on('click', function () {
    $('.product-shop__list').addClass('product-shop__list--list')
  })

  $('.view__button--grid').on('click', function () {
    $('.product-shop__list').removeClass('product-shop__list--list')
  })

  $('.view__button--list').on('click', function () {
    $('.pagination').addClass('pagination--list')
  })

  $('.view__button--grid').on('click', function () {
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