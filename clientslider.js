// Client Slider
$(document).ready(function () {
      var clientslider_wrapper = new Swiper(".clientslider_wrapper", {
          wrapperClass: "clientslider_list",
      slideClass: "clientslider_item",
      navigation: {
        nextEl: '.clientslider-next',
        prevEl: '.clientslider-previous'
      },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
      // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 780px
    780: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1280px
    1280	: {
      slidesPerView: 5,
      spaceBetween: 50
    }
  },
      autoplay: {
          delay: 200,
          disableOnInteraction: false,
      },
  speed: 1000,
  loop: true,

        on: {
          init: function () {

          },
        },
      });
    });
// Testimonial Slider
$(document).ready(function () {
      var testimonialslider_wrapper = new Swiper(".testimonialslider-wrapper", {
          wrapperClass: "testimonialslider-list",
      slideClass: "testimonialslider-item",
      navigation: {
        nextEl: '.testimonialslider-next',
        prevEl: '.testimonialslider-previous'
      },

  breakpoints: {
  	      // when window width is >= 560px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
      // when window width is >= 560px
    560: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 820px
    820: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 1280px
    1280	: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  },
      autoplay: {
          delay: 100000,
          disableOnInteraction: false,

      },
  speed: 700,
  loop: true,
  centeredSlides: true,

        on: {
          init: function () {

          },
        },
      });
    });
