// Media 992 =====>
if (window.matchMedia("(min-width: 992px)").matches) {
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

}