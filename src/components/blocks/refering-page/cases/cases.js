const sliderCases = new Swiper('.cases-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".cases-button-next",
    prevEl: ".cases-button-prev",
  },
  pagination: {
    el: ".cases-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
})