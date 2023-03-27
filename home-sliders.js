$(document).ready(function () {
  //Reference Slider
  const referenceslider_wrapper = new Swiper(".referenceslider_wrapper", {
  wrapperClass: "referenceslider_list",
  slideClass: "referenceslider_item",
  navigation: {
    nextEl: '.referenceslider_next',
    prevEl: '.referenceslider_previous',
  },
  pagination: {
    type: 'bullets',
    el: '.referenceslider_pagination',
    clickable: true,
  },
  autoplay: {
  	delay: 10000,
   	disableOnInteraction: false,
  },
  effect: 'coverflow',
    coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 1500,
  slidesPerView: 1,
  loop: true,
  on: {
    init: function () {
    var swiper_pagination_bulletwe_style = document.createElement('style'); swiper_pagination_bulletwe_style.type = 'text/css'; swiper_pagination_bulletwe_style.innerHTML =
      `.swiper-pagination-bullet{ background:#FFF;
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
  // Client Slider
 	const clientslider_wrapper = new Swiper(".clientslider_wrapper", {
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
    // when window width is >= 768px
    768: {
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
  	delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  });

  // Testimonial Slider
  const testimonialslider_wrapper = new Swiper(".testimonialslider_wrapper", {
  wrapperClass: "testimonialslider_list",
  slideClass: "testimonialslider_item",
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
});
});
