// Scroll to the top before the page loads
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let slideUp = (target, duration=500) => {

  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
  }, duration);
}

let slideDown = (target, duration=500) => {

  target.style.removeProperty('display');
  let display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  let height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout( () => {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
}

var slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
}

window.onload = () => {
  // Variabels
  let burger = document.querySelector(".burger");
  let header = document.querySelector(".header");
  let technologyCard = document.querySelectorAll('.technology-card');
  let technologyCardBody = document.querySelectorAll('.technology-card__body')
  let tabContent = document.querySelectorAll(".tabs__item");
  let tabItem = document.querySelectorAll(".tabs__trigger");
  let tabDropdownTrigger = document.querySelector(".treatments .dropdown__trigger .dropdown__trigger-text");
  let treatmentsDropdown = document.querySelector(".treatments .dropdown");
  let treatmentsDropdownList = document.querySelector(".treatments .dropdown__list")

  // Scroll to contacts-form
  const links = document.querySelectorAll(".header-contacts__link");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop - 100,
      behavior: "smooth"
    });
  }

  // Manipulations with header classes on scroll
  let scrollChange = 1;

  window.addEventListener("scroll", () => {
    let scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.classList.add("js-scroll-down");
      header.classList.remove("js-scroll-top");
    } else {
      header.classList.add("js-scroll-top");
      header.classList.remove("js-scroll-down", "js-nav-open", "js-nav-close");
    }
  });

  // Tabs
  for (let i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener("click", () => {

      tabContent.forEach((item) => {
        item.classList.remove("js-active");
      });

      tabItem.forEach((item) => {
        item.classList.remove("js-active");
      });

      tabContent[i].classList.add("js-active");
      tabItem[i].classList.add("js-active");

      tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
    });
  } 
  
  if (tabDropdownTrigger) {
    tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
  }
  // Custom scrollbar in tooth table
  OverlayScrollbars(document.querySelectorAll(".tooth"), {});

  // Files input
  let filesTrigger = document.getElementById('file');
  let filesTable = document.querySelector('.files__table');
  
  let updateFilesList = () => {
    let children = "";
    for (let i = 0; i < filesTrigger.files.length; ++i) {
      children +=  '<div class="files__wrapper">' + '<div class="files-item">' + '<i class="icon-file"></i>' + '<span class="files-item__name">' + filesTrigger.files.item(i).name + '</span/>' + '<i class="files-item__remove icon-trash-can" onclick="return this.parentNode.parentNode.remove();"></i>' + '</div>' + '</div>'
    }
    filesTable.innerHTML = children;
    if (children.length >= 0) {
      filesTable.style.display = 'flex'
    } else {
      filesTable.style.display = 'none'
    }
  }

  if (filesTrigger) {
    filesTrigger.addEventListener("change", () => {
      updateFilesList()
    })
  }
  
  // Media 992 =====>
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Opening desktop menu with burger
    burger.addEventListener("click", () => {
      if (header.classList.contains("js-nav-open")) {
        header.classList.remove("js-nav-open");
        header.classList.add("js-nav-close");
      } else {
        header.classList.add("js-nav-open");
        header.classList.remove("js-nav-close");
      }
    });

    // Opening technology accordion
    $('.technology__wrapper').click(function () {
      $(".technology__wrapper").not($(this).closest(".technology__wrapper")).removeClass("js-active");
      $(this).closest(".technology__wrapper").addClass("js-active");
      if ($(this).hasClass('js-active')) {
        $('.technology-card__body').not($(this).find('.technology-card__body')).slideUp(300);
        $(this).find('.technology-card__body').slideDown(300);
      }
    })

    // for (let i = 0; i < technologyCard.length; i++) {
    //   technologyCard[i].addEventListener("click", () => {
    //     technologyCard.forEach((element) => {
    //       element.classList.remove("js-active");
    //     });

    //     technologyCard[i].classList.add('js-active');

    //     // Add class to the element that was clicked
    //     slideDown(technologyCardBody[i], 300)
    //   });
    // }
    
    // Checking if the active page is the home page
    // window.homepagecheck = () => {
    //   var check = false;
    //   if(document.location.pathname === "/" || document.location.pathname === "/index.html"){
    //     check=true;
    //     }
    //   return check;
    // }
    let horizontalScroll = document.querySelector('.horizontal-scroll')

    if (horizontalScroll) {
      // Horizontal scroll in Treatments =====>
      gsap.registerPlugin(ScrollTrigger);
  
      const sections = gsap.utils.toArray(".horizontal-scroll");
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
          start: "-120px top",
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
    }


  } else {
    // Toggle visible elements
    let showTrigger = document.querySelectorAll(".show__trigger");
    let showItem = document.querySelectorAll(".show__item");

    for (let i = 0; i < showTrigger.length; i++) {
      showTrigger[i].addEventListener("click", () => {
        showTrigger[i].classList.toggle('js-active')

        if (showTrigger[i].classList.contains("js-active")) {
          showTrigger[i].textContent = 'See less'
          showItem.forEach((element) => {
            element.style.display = "block"
          });
        } else {
          showTrigger[i].textContent = 'See all'
          showItem.forEach((element) => {
            element.style.display = "none"
          });
        }
      })
    }

    let offsetItem = document.querySelector('.dropdown__list').offsetHeight
    document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px")
    
    // Treatments page tabs navigation
    if (treatmentsDropdown && treatmentsDropdownList) {
      window.addEventListener("scroll", () => {
        
        if (window.scrollY > offsetItem + 64 ) {
          treatmentsDropdown.classList.add("js-scroll-down");
          treatmentsDropdownList.style.display = 'none'
          document.querySelector('.treatments').classList.add("offset-top")
        } else {
          treatmentsDropdown.classList.remove("js-scroll-down");
          treatmentsDropdownList.style.display = 'block'
          document.querySelector('.treatments').classList.remove("offset-top")
        }
      });

      treatmentsDropdown.addEventListener('click', () => {
        if (treatmentsDropdown.classList.contains("js-scroll-down")) {
          slideToggle(treatmentsDropdownList, 300);
        } else {
          null
        }
      });
    }


    // Opening mobile menu with burger
    burger.addEventListener("click", () => {
      header.classList.toggle("js-nav-open");
      document.body.classList.toggle("js-lock");
    });

    // Opening technology accordions !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // $('.technology__wrapper .technology-card').not($('.technology__wrapper.secondary .technology-card')).removeClass('js-active')
    for (let i = 0; i < technologyCard.length; i++) {
      technologyCard[i].addEventListener("click", () => {
        // Remove class from all elements
        technologyCard.forEach((element) => {
          element.classList.remove("js-active");
        });

        // Add class to the element that was clicked
        technologyCard[i].classList.add("js-active");
      });
    }

    // Block slider 'Treatments'
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

  // Block slider 'Practices'
  const sliderPractices = new Swiper('.practices-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
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

  // Block slider 'Testimonials'
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

  // Block slider 'Cases'
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

  // Block slider 'Socials'
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
}