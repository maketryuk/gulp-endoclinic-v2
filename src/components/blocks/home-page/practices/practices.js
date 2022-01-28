const sliderPractices = new Swiper('.practices-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".practices-button-next",
    prevEl: ".practices-button-prev",
  },
  pagination: {
    el: ".practices-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
})