'use strict';

(function () {
  'use strict';

  var carousels = function () {
    $('.owl-carousel1').owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 2,
          nav: false,
          loop: false,
        },
        1000: {
          items: 3,
          nav: true,
        },
      },
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();

$('.navbar-nav').click(function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
  let li = $(this).children();
  li.removeClass('active');
  console.log(e.target);
  $(e.target).parent().addClass('active');
});

$('.navbar-brand').click(function (e) {
  const id = $(e.target).parent()[0].getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
