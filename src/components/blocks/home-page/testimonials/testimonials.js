const sliderTestimonials = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".testimonials-button-next",
    prevEl: ".testimonials-button-prev",
  },
  pagination: {
    el: ".testimonials-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 'auto',
      centeredSlides: true,
    }
  }
})