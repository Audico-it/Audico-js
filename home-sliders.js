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
          delay: 3000,
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
      slidesPerView: 3,
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

        on: {
          init: function () {

          },
        },
      });
    });

//Reference Slider
$(document).ready(function () {
var referenceslider_wrapper = new Swiper(".referenceslider_wrapper", {
wrapperClass: "referenceslider_list",
slideClass: "referenceslider_item",
navigation: {
nextEl: '.referenceslider_next',
prevEl: '.referenceslider_previous'
},
pagination: {
type: 'bullets',
el: '.referenceslider_pagination',
clickable: true,

},
speed: 700,
slidesPerView: 'auto',
loop: true,

on: {
init: function () {
var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
` .swiper-pagination-bullet{ background:#FFF;
margin-right:8px;
transition:.2s;
} `;
document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bulletwe_style);var swiper_pagination_bullethoverwe_style = document.createElement('style'); swiper_pagination_bullethoverwe_style.type = 'text/css'; swiper_pagination_bullethoverwe_style.innerHTML =
` .swiper-pagination-bullet:hover{ opacity:.7;
} `;
document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullethoverwe_style);var swiper_pagination_bullet_activehoverwe_style = document.createElement('style'); swiper_pagination_bullet_activehoverwe_style.type = 'text/css'; swiper_pagination_bullet_activehoverwe_style.innerHTML =
` .swiper-pagination-bullet-active:hover{ opacity:1;
} `;
document.getElementsByTagName('head')[0].appendChild(swiper_pagination_bullet_activehoverwe_style);var swiper_pagination_fractionwe_style = document.createElement('style'); swiper_pagination_fractionwe_style.type = 'text/css'; swiper_pagination_fractionwe_style.innerHTML =
` .swiper-pagination-fraction{ font-size:16px;
} `;
document.getElementsByTagName('head')[0].appendChild(swiper_pagination_fractionwe_style);
},
},
});
});
