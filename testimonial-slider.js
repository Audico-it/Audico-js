// Testimonial Slider
$(document).ready(function () {
    var testimonialslider_wrapper = new Swiper(".testimonialslider_wrapper", {
        wrapperClass: "testimonialslider_list",
    slideClass: "testimonialslider_item",
    navigation: {
      nextEl: '.testimonialslider-next',
      prevEl: '.testimonialslider-previous'
    },
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
        // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20,
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
  allowTouchMove: false,
  
      on: {
        init: function () {
  
        },
      },
    });
  });