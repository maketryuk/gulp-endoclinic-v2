// Media 992 =====>
if (window.matchMedia("(min-width: 992px)").matches) {
// Horizontal scroll in Treatments =====>
gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".treatments-wrapper");
let maxWidth = 0;

const getMaxWidth = () => {
  maxWidth = 0;
  sections.forEach((section) => {
    maxWidth += section.offsetWidth;
  });
};
getMaxWidth();
ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

let triggerItem = document.querySelector('.treatments');


gsap.to(sections, {
  x: () => `-${maxWidth - window.innerWidth}`,
  ease: "none",
  scrollTrigger: {
    start: "-70px top",
    trigger: triggerItem,
    pin: true,
    scrub: true,
    end: () => `+=${maxWidth}`,
    invalidateOnRefresh: true
  }
});

sections.forEach((sct, i) => {
  ScrollTrigger.create({
    trigger: sct,
    start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
    end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
    toggleClass: {targets: sct, className: "active"}
  });
});

// About labels =====>
gsap.to(".about-label-table", {
  yPercent: -200,
  ease: "none",
  scrollTrigger: {
    trigger: ".about-label-table",
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});



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