const sliderSocials = new Swiper('.socials__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".socials-button-next",
    prevEl: ".socials-button-prev",
  },
  pagination: {
    el: ".socials-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  }
})