'use strict';

const navbar = document.querySelector('.navbar-nav');

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


//navbar scroll events to sticky navbar
const header = document.querySelector('.header');
const nav = document.querySelector('.navbar');
const navHeight = nav.getBoundingClientRect().height;
const body = document.body;
console.log(body);

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    body.style.paddingTop = navHeight + 'px';
  } else {
    nav.classList.remove('sticky');
    body.style.paddingTop = '0px';
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//updating navbar on scroll

//button click scroll events
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

$('.read-more').click(function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  console.log(id);
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});
