'use strict';

const navbar = document.querySelector('.navbar-nav');
AOS.init();

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

$(window).scroll(() => {
  const windscroll = $(window).scrollTop();
  if (windscroll >= navHeight) {
    $('section').each(function (i) {
      if ($(this).position().top <= windscroll + 75) {
        if (i > 3) {
          i -= 1;
        }
        $('.nav-item.active').removeClass('active');
        $('.nav-item').eq(i).addClass('active');
      }
    });
  }
});

// $(window).scroll(function() {
//   const windscroll = $(window).scrollTop();
//   console.log(windscroll)
//   if (windscroll >= navHeight) {
//       $('nav').addClass('fixed');
//       $('#section').each(function(i) {
//         console.log(i)
//           if ($(this).position().top <= windscroll - navHeight) {
//               $('nav a.active').removeClass('active');
//               $('nav a').eq(i).addClass('active');
//           }
//       });

//   } else {

//       $('nav').removeClass('fixed');
//       $('nav a.active').removeClass('active');
//       $('nav a:first').addClass('active');
//   }

// }).scroll();​

//return element offsets for scrolling
function getOffset(id) {
  const element = document.querySelector(id);
  const elementPosition = element.getBoundingClientRect().top + 50;
  const offSet = elementPosition + window.pageYOffset - navHeight;
  return offSet;
}

//collapse navbar on click
$(document).ready(function () {
  $('nav')
    .find('li')
    .on('click', 'a', function () {
      console.log('clicked');
      $('.navbar-collapse').collapse('hide');
    });
});

//button click scroll events
$('.navbar-nav').click(function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    if (id === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: getOffset(id), behavior: 'smooth' });
    }
  }
  let li = $(this).children();
  li.removeClass('active');
  $(e.target).parent().addClass('active');
});

$('.navbar-brand').click(function (e) {
  e.preventDefault();
  const id = $(e.target).parent()[0].getAttribute('href');
  window.scrollTo({ top: getOffset(id), behavior: 'smooth' });
});

$('.read-more').click(function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  window.scrollTo({ top: getOffset(id), behavior: 'smooth' });
});

$('.get-started').click(function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  window.scrollTo({ top: getOffset(id), behavior: 'smooth' });
});

$('.footer-links li').click(function (e) {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  if (id === '#hero') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: getOffset(id), behavior: 'smooth' });
  }
});
