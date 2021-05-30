$(function() {

  $(window).on("scroll", function () {
    $('header').toggleClass("header--active", $(this).scrollTop() > $(window).height());
  });
  
  $('.trending__slider').slick({
    dots: true,
    arrows: false,
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