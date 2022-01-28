// Media 992 =====>
if (window.matchMedia("(min-width: 992px)").matches) {
  // let treatmentsSlides = gsap.utils.toArray('.treatments-slide');
  
  // gsap.to(treatmentsSlides, {
  //   xPercent: -100 * (treatmentsSlides.length - 1),
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: '.treatments',
  //     pin: true,
  //     scrub: 0.1,
  //     end: () => '+=' + document.querySelector('.treatments').offsetWidth,
  //   },
  // });



} else {
  const sliderTreatments = new Swiper('.treatments-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".treatments-button-next",
      prevEl: ".treatments-button-prev",
    },
    pagination: {
      el: ".treatments-pagination",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    }
  })
}