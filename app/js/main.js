"use strict";

// Scroll to the top before the page loads
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }
var slideUp = function slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
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
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property'); //alert("!");
  }, duration);
};

var slideDown = function slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
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
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
  }, duration);
};

var slideToggle = function slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration);
  } else {
    return slideUp(target, duration);
  }
};

window.onload = function () {
  // Variabels
  var burger = document.querySelector(".burger");
  var header = document.querySelector(".header");
  var technologyCard = document.querySelectorAll('.technology-card');
  var technologyCardBody = document.querySelectorAll('.technology-card__body');
  var tabContent = document.querySelectorAll(".tabs__item");
  var tabItem = document.querySelectorAll(".tabs__trigger");
  var tabDropdownTrigger = document.querySelector(".treatments .dropdown__trigger .dropdown__trigger-text");
  var treatmentsDropdown = document.querySelector(".treatments .dropdown");
  var treatmentsDropdownList = document.querySelector(".treatments .dropdown__list"); // Manipulations with header classes on scroll

  var scrollChange = 1;
  window.addEventListener("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
      header.classList.add("js-scroll-down");
      header.classList.remove("js-scroll-top");
    } else {
      header.classList.add("js-scroll-top");
      header.classList.remove("js-scroll-down", "js-nav-open", "js-nav-close");
    }
  }); // Treatments page tabs

  var _loop = function _loop(i) {
    tabItem[i].addEventListener("click", function () {
      tabContent.forEach(function (item) {
        item.classList.remove("js-active");
      });
      tabItem.forEach(function (item) {
        item.classList.remove("js-active");
      });
      tabContent[i].classList.add("js-active");
      tabItem[i].classList.add("js-active");
      tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent;
    });
  };

  for (var i = 0; i < tabItem.length; i++) {
    _loop(i);
  } // Custom scrollbar in tooth table


  OverlayScrollbars(document.querySelectorAll(".tooth"), {}); // Files input

  var filesTrigger = document.getElementById('file');
  var filesTable = document.querySelector('.files__table');

  var updateFilesList = function updateFilesList() {
    var children = "";

    for (var _i = 0; _i < filesTrigger.files.length; ++_i) {
      children += '<div class="files__wrapper">' + '<div class="files-item">' + '<i class="icon-file"></i>' + '<span class="files-item__name">' + filesTrigger.files.item(_i).name + '</span/>' + '<i class="files-item__remove icon-trash-can" onclick="return this.parentNode.parentNode.remove();"></i>' + '</div>' + '</div>';
    }

    filesTable.innerHTML = children;

    if (children.length >= 0) {
      filesTable.style.display = 'flex';
    } else {
      filesTable.style.display = 'none';
    }
  };

  if (filesTrigger) {
    filesTrigger.addEventListener("change", function () {
      updateFilesList();
    });
  }

  if (tabDropdownTrigger) {
    tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent;
  } // Media 992 =====>


  if (window.matchMedia("(min-width: 992px)").matches) {
    // Opening desktop menu with burger
    burger.addEventListener("click", function () {
      if (header.classList.contains("js-nav-open")) {
        header.classList.remove("js-nav-open");
        header.classList.add("js-nav-close");
      } else {
        header.classList.add("js-nav-open");
        header.classList.remove("js-nav-close");
      }
    }); // Opening technology accordion

    $('.technology__wrapper').click(function () {
      $(".technology__wrapper").not($(this).closest(".technology__wrapper")).removeClass("js-active");
      $(this).closest(".technology__wrapper").addClass("js-active");

      if ($(this).hasClass('js-active')) {
        $('.technology-card__body').not($(this).find('.technology-card__body')).slideUp(300);
        $(this).find('.technology-card__body').slideDown(300);
      }
    }); // for (let i = 0; i < technologyCard.length; i++) {
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

    window.homepagecheck = function () {
      var check = false;

      if (document.location.pathname === "/" || document.location.pathname === "/index.html") {
        check = true;
      }

      return check;
    };

    if (window.homepagecheck()) {
      // Horizontal scroll in Treatments =====>
      gsap.registerPlugin(ScrollTrigger);
      var sections = gsap.utils.toArray(".treatments-horizontal");
      var maxWidth = 0;

      var getMaxWidth = function getMaxWidth() {
        maxWidth = 0;
        sections.forEach(function (section) {
          maxWidth += section.offsetWidth;
        });
      };

      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
      var triggerItem = document.querySelector('.treatments');
      gsap.to(sections, {
        x: function x() {
          return "-".concat(maxWidth - window.innerWidth);
        },
        ease: "none",
        scrollTrigger: {
          start: "-120px top",
          trigger: triggerItem,
          pin: true,
          scrub: true,
          end: function end() {
            return "+=".concat(maxWidth);
          },
          invalidateOnRefresh: true
        }
      });
      sections.forEach(function (sct, i) {
        ScrollTrigger.create({
          trigger: sct,
          start: function start() {
            return 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth));
          },
          end: function end() {
            return '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth));
          },
          toggleClass: {
            targets: sct,
            className: "active"
          }
        });
      });
    } else {
      null;
    }
  } else {
    // Treatments page tabs navigation
    window.addEventListener("scroll", function () {
      var offsetItem1 = document.querySelector('.header').offsetHeight;

      if (window.scrollY > offsetItem1 + 64) {
        treatmentsDropdown.classList.add("js-scroll-down");
        treatmentsDropdownList.style.display = 'none';
      } else {
        treatmentsDropdown.classList.remove("js-scroll-down");
        treatmentsDropdownList.style.display = 'block';
      }
    });
    treatmentsDropdown.addEventListener('click', function () {
      if (treatmentsDropdown.classList.contains("js-scroll-down")) {
        slideToggle(treatmentsDropdownList, 300);
      } else {
        null;
      }
    }); // Opening mobile menu with burger

    burger.addEventListener("click", function () {
      header.classList.toggle("js-nav-open");
      document.body.classList.toggle("js-lock");
    }); // Opening technology accordions !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // $('.technology__wrapper .technology-card').not($('.technology__wrapper.secondary .technology-card')).removeClass('js-active')

    var _loop2 = function _loop2(_i2) {
      technologyCard[_i2].addEventListener("click", function () {
        // Remove class from all elements
        technologyCard.forEach(function (element) {
          element.classList.remove("js-active");
        }); // Add class to the element that was clicked

        technologyCard[_i2].classList.add("js-active");
      });
    };

    for (var _i2 = 0; _i2 < technologyCard.length; _i2++) {
      _loop2(_i2);
    } // Block slider 'Treatments'


    var sliderTreatments = new Swiper('.treatments-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".treatments-button-next",
        prevEl: ".treatments-button-prev"
      },
      pagination: {
        el: ".treatments-pagination"
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        }
      }
    });
  } // Block slider 'Practices'


  var sliderPractices = new Swiper('.practices-slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".practices-button-next",
      prevEl: ".practices-button-prev"
    },
    pagination: {
      el: ".practices-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  }); // Block slider 'Testimonials'

  var sliderTestimonials = new Swiper('.testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".testimonials-button-next",
      prevEl: ".testimonials-button-prev"
    },
    pagination: {
      el: ".testimonials-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 'auto',
        centeredSlides: true
      }
    }
  }); // Block slider 'Cases'

  var sliderCases = new Swiper('.cases-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".cases-button-next",
      prevEl: ".cases-button-prev"
    },
    pagination: {
      el: ".cases-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  }); // Block slider 'Socials'

  var sliderSocials = new Swiper('.socials__slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".socials-button-next",
      prevEl: ".socials-button-prev"
    },
    pagination: {
      el: ".socials-pagination"
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  });
};
"use strict";

// Auto size textarea =====>
var textarea = document.querySelector('textarea');

if (textarea) {
  textarea.addEventListener('keydown', autosizeTextarea);
} else {
  null;
}

function autosizeTextarea() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
} // Custom select =====>


$('select').each(function () {
  var $this = $(this),
      numberOfOptions = $(this).children('option').length;
  $this.addClass('select__hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select__styled"></div>');
  var $styledSelect = $this.next('div.select__styled');
  $styledSelect.append('<span></span><i class="icon-arrow-dropdown"></i>');
  $styledSelect.find('span').text($this.children('option').eq(0).text());
  var $list = $('<ul />', {
    'class': 'select__options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');
  $styledSelect.click(function (e) {
    e.stopPropagation();
    $('div.select__styled.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select__options').slideUp(300);
    });
    $(this).toggleClass('active').next('ul.select__options').slideToggle(300);
  });
  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.find('span').text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.slideUp(300);
  });
  $(document).click(function () {
    $styledSelect.removeClass('active');
    $list.slideUp(300);
  });
});
"use strict";
"use strict";

$('.show__trigger').click(function () {
  $(this).parent().find('.show__item').toggle();
  $(this).toggleClass('js-active');

  if ($(this).hasClass('js-active')) {
    $(this).find('span').text('See less');
  } else {
    $(this).find('span').text('See all');
  }
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiLCJibG9ja3MvYWJvdXQtcGFnZS9hYm91dC9hYm91dC5qcyIsImJsb2Nrcy9jb250YWN0cy1wYWdlL2NvbnRhY3RzL2NvbnRhY3RzLmpzIiwiYmxvY2tzL3RyZWF0bWVudHMtcGFnZS90cmVhdG1lbnRzL3RyZWF0bWVudHMuanMiXSwibmFtZXMiOlsic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsImJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRlY2hub2xvZ3lDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsInRlY2hub2xvZ3lDYXJkQm9keSIsInRhYkNvbnRlbnQiLCJ0YWJJdGVtIiwidGFiRHJvcGRvd25UcmlnZ2VyIiwidHJlYXRtZW50c0Ryb3Bkb3duIiwidHJlYXRtZW50c0Ryb3Bkb3duTGlzdCIsInNjcm9sbENoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGwiLCIkIiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaSIsImZvckVhY2giLCJpdGVtIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJPdmVybGF5U2Nyb2xsYmFycyIsImZpbGVzVHJpZ2dlciIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXNUYWJsZSIsInVwZGF0ZUZpbGVzTGlzdCIsImNoaWxkcmVuIiwiZmlsZXMiLCJuYW1lIiwiaW5uZXJIVE1MIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjb250YWlucyIsImNsaWNrIiwibm90IiwiY2xvc2VzdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImZpbmQiLCJob21lcGFnZWNoZWNrIiwiY2hlY2siLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsInNlY3Rpb25zIiwidXRpbHMiLCJ0b0FycmF5IiwibWF4V2lkdGgiLCJnZXRNYXhXaWR0aCIsInNlY3Rpb24iLCJvZmZzZXRXaWR0aCIsInRyaWdnZXJJdGVtIiwidG8iLCJ4IiwiaW5uZXJXaWR0aCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwic3RhcnQiLCJ0cmlnZ2VyIiwicGluIiwic2NydWIiLCJlbmQiLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwic2N0IiwiY3JlYXRlIiwib2Zmc2V0TGVmdCIsInRvZ2dsZUNsYXNzIiwidGFyZ2V0cyIsImNsYXNzTmFtZSIsIm9mZnNldEl0ZW0xIiwic2Nyb2xsWSIsInRvZ2dsZSIsImJvZHkiLCJlbGVtZW50Iiwic2xpZGVyVHJlYXRtZW50cyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXJQcmFjdGljZXMiLCJzbGlkZXJUZXN0aW1vbmlhbHMiLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXJDYXNlcyIsInNsaWRlclNvY2lhbHMiLCJ0ZXh0YXJlYSIsImF1dG9zaXplVGV4dGFyZWEiLCJjc3NUZXh0Iiwic2Nyb2xsSGVpZ2h0IiwiZWFjaCIsIiR0aGlzIiwibnVtYmVyT2ZPcHRpb25zIiwid3JhcCIsImFmdGVyIiwiJHN0eWxlZFNlbGVjdCIsIm5leHQiLCJhcHBlbmQiLCJ0ZXh0IiwiZXEiLCIkbGlzdCIsImluc2VydEFmdGVyIiwicmVsIiwidmFsIiwiYXBwZW5kVG8iLCIkbGlzdEl0ZW1zIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImF0dHIiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQTBCO0FBQUEsTUFBakJDLFFBQWlCLHVFQUFSLEdBQVE7QUFFdENELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxrQkFBYixHQUFrQyx5QkFBbEM7QUFDQUgsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFFLGtCQUFiLEdBQWtDSCxRQUFRLEdBQUcsSUFBN0M7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0JMLE1BQU0sQ0FBQ00sWUFBUCxHQUFzQixJQUE1QztBQUNBTixFQUFBQSxNQUFNLENBQUNNLFlBQVA7QUFDQU4sRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFLLFFBQWIsR0FBd0IsUUFBeEI7QUFDQVAsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0IsQ0FBdEI7QUFDQUwsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFNLFVBQWIsR0FBMEIsQ0FBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFPLGFBQWIsR0FBNkIsQ0FBN0I7QUFDQVQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFRLFNBQWIsR0FBeUIsQ0FBekI7QUFDQVYsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFTLFlBQWIsR0FBNEIsQ0FBNUI7QUFDQUMsRUFBQUEsTUFBTSxDQUFDQyxVQUFQLENBQW1CLFlBQU07QUFDbkJiLElBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhWSxPQUFiLEdBQXVCLE1BQXZCO0FBQ0FkLElBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhYSxjQUFiLENBQTRCLFFBQTVCO0FBQ0FmLElBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhYSxjQUFi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QUNBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2Nyb2xsIHRvIHRoZSB0b3AgYmVmb3JlIHRoZSBwYWdlIGxvYWRzXHJcbi8vIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbi8vIH1cclxuXHJcbmxldCBzbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb249NTAwKSA9PiB7XHJcblxyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgICAgLy9hbGVydChcIiFcIik7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG5sZXQgc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb249NTAwKSA9PiB7XHJcblxyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xyXG4gIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5O1xyXG4gIGlmIChkaXNwbGF5ID09PSAnbm9uZScpIGRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxudmFyIHNsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIHJldHVybiBzbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBzbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAvLyBWYXJpYWJlbHNcclxuICBsZXQgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gIGxldCB0ZWNobm9sb2d5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmQnKTtcclxuICBsZXQgdGVjaG5vbG9neUNhcmRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpXHJcbiAgbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2l0ZW1cIik7XHJcbiAgbGV0IHRhYkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX3RyaWdnZXJcIik7XHJcbiAgbGV0IHRhYkRyb3Bkb3duVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX3RyaWdnZXIgLmRyb3Bkb3duX190cmlnZ2VyLXRleHRcIik7XHJcbiAgbGV0IHRyZWF0bWVudHNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25cIik7XHJcbiAgbGV0IHRyZWF0bWVudHNEcm9wZG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX19saXN0XCIpXHJcblxyXG4gIC8vIE1hbmlwdWxhdGlvbnMgd2l0aCBoZWFkZXIgY2xhc3NlcyBvbiBzY3JvbGxcclxuICBsZXQgc2Nyb2xsQ2hhbmdlID0gMTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IHNjcm9sbENoYW5nZSkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIiwgXCJqcy1uYXYtb3BlblwiLCBcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVHJlYXRtZW50cyBwYWdlIHRhYnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhYkl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgIHRhYkNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGFiQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB0YWJJdGVtW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcbiAgICB9KTtcclxuICB9IFxyXG4gIFxyXG4gIC8vIEN1c3RvbSBzY3JvbGxiYXIgaW4gdG9vdGggdGFibGVcclxuICBPdmVybGF5U2Nyb2xsYmFycyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb3RoXCIpLCB7fSk7XHJcblxyXG4gIC8vIEZpbGVzIGlucHV0XHJcbiAgbGV0IGZpbGVzVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XHJcbiAgbGV0IGZpbGVzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsZXNfX3RhYmxlJyk7XHJcbiAgXHJcbiAgbGV0IHVwZGF0ZUZpbGVzTGlzdCA9ICgpID0+IHtcclxuICAgIGxldCBjaGlsZHJlbiA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzVHJpZ2dlci5maWxlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBjaGlsZHJlbiArPSAgJzxkaXYgY2xhc3M9XCJmaWxlc19fd3JhcHBlclwiPicgKyAnPGRpdiBjbGFzcz1cImZpbGVzLWl0ZW1cIj4nICsgJzxpIGNsYXNzPVwiaWNvbi1maWxlXCI+PC9pPicgKyAnPHNwYW4gY2xhc3M9XCJmaWxlcy1pdGVtX19uYW1lXCI+JyArIGZpbGVzVHJpZ2dlci5maWxlcy5pdGVtKGkpLm5hbWUgKyAnPC9zcGFuLz4nICsgJzxpIGNsYXNzPVwiZmlsZXMtaXRlbV9fcmVtb3ZlIGljb24tdHJhc2gtY2FuXCIgb25jbGljaz1cInJldHVybiB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcIj48L2k+JyArICc8L2Rpdj4nICsgJzwvZGl2PidcclxuICAgIH1cclxuICAgIGZpbGVzVGFibGUuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcbiAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID49IDApIHtcclxuICAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChmaWxlc1RyaWdnZXIpIHtcclxuICAgIGZpbGVzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgdXBkYXRlRmlsZXNMaXN0KClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAodGFiRHJvcGRvd25UcmlnZ2VyKSB7XHJcbiAgICB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1lZGlhIDk5MiA9PT09PT5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5OTJweClcIikubWF0Y2hlcykge1xyXG4gICAgLy8gT3BlbmluZyBkZXNrdG9wIG1lbnUgd2l0aCBidXJnZXJcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImpzLW5hdi1vcGVuXCIpKSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuaW5nIHRlY2hub2xvZ3kgYWNjb3JkaW9uXHJcbiAgICAkKCcudGVjaG5vbG9neV9fd3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpLm5vdCgkKHRoaXMpLmNsb3Nlc3QoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKSkucmVtb3ZlQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpLmFkZENsYXNzKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtYWN0aXZlJykpIHtcclxuICAgICAgICAkKCcudGVjaG5vbG9neS1jYXJkX19ib2R5Jykubm90KCQodGhpcykuZmluZCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpKS5zbGlkZVVwKDMwMCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcudGVjaG5vbG9neS1jYXJkX19ib2R5Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWNobm9sb2d5Q2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICB0ZWNobm9sb2d5Q2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIHRlY2hub2xvZ3lDYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgdGVjaG5vbG9neUNhcmRbaV0uY2xhc3NMaXN0LmFkZCgnanMtYWN0aXZlJyk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkXHJcbiAgICAvLyAgICAgc2xpZGVEb3duKHRlY2hub2xvZ3lDYXJkQm9keVtpXSwgMzAwKVxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gQ2hlY2tpbmcgaWYgdGhlIGFjdGl2ZSBwYWdlIGlzIHRoZSBob21lIHBhZ2VcclxuICAgIHdpbmRvdy5ob21lcGFnZWNoZWNrID0gKCkgPT4ge1xyXG4gICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgaWYoZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL1wiIHx8IGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9pbmRleC5odG1sXCIpe1xyXG4gICAgICAgIGNoZWNrPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZih3aW5kb3cuaG9tZXBhZ2VjaGVjaygpKXtcclxuICAgICAgLy8gSG9yaXpvbnRhbCBzY3JvbGwgaW4gVHJlYXRtZW50cyA9PT09PT5cclxuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuICBcclxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIudHJlYXRtZW50cy1ob3Jpem9udGFsXCIpO1xyXG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gIFxyXG4gICAgICBjb25zdCBnZXRNYXhXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICBtYXhXaWR0aCA9IDA7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgbWF4V2lkdGggKz0gc2VjdGlvbi5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZ2V0TWF4V2lkdGgoKTtcclxuICAgICAgU2Nyb2xsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwicmVmcmVzaEluaXRcIiwgZ2V0TWF4V2lkdGgpO1xyXG4gIFxyXG4gICAgICBsZXQgdHJpZ2dlckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlYXRtZW50cycpO1xyXG4gIFxyXG4gICAgICBnc2FwLnRvKHNlY3Rpb25zLCB7XHJcbiAgICAgICAgeDogKCkgPT4gYC0ke21heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGh9YCxcclxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcclxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICBzdGFydDogXCItMTIwcHggdG9wXCIsXHJcbiAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VySXRlbSxcclxuICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgIHNjcnViOiB0cnVlLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiBgKz0ke21heFdpZHRofWAsXHJcbiAgICAgICAgICBpbnZhbGlkYXRlT25SZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2N0LCBpKSA9PiB7XHJcbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgICAgdHJpZ2dlcjogc2N0LFxyXG4gICAgICAgICAgc3RhcnQ6ICgpID0+ICd0b3AgdG9wLT0nICsgKHNjdC5vZmZzZXRMZWZ0IC0gd2luZG93LmlubmVyV2lkdGgvMikgKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiAnKz0nICsgc2N0Lm9mZnNldFdpZHRoICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7dGFyZ2V0czogc2N0LCBjbGFzc05hbWU6IFwiYWN0aXZlXCJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbnVsbFxyXG4gICAgfVxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVHJlYXRtZW50cyBwYWdlIHRhYnMgbmF2aWdhdGlvblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBsZXQgb2Zmc2V0SXRlbTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykub2Zmc2V0SGVpZ2h0XHJcbiAgXHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0xICsgNjQgKSB7XHJcbiAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJlYXRtZW50c0Ryb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImpzLXNjcm9sbC1kb3duXCIpKSB7XHJcbiAgICAgICAgc2xpZGVUb2dnbGUodHJlYXRtZW50c0Ryb3Bkb3duTGlzdCwgMzAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBudWxsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgbW9iaWxlIG1lbnUgd2l0aCBidXJnZXJcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1sb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyB0ZWNobm9sb2d5IGFjY29yZGlvbnMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxyXG4gICAgLy8gJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIgLnRlY2hub2xvZ3ktY2FyZCcpLm5vdCgkKCcudGVjaG5vbG9neV9fd3JhcHBlci5zZWNvbmRhcnkgLnRlY2hub2xvZ3ktY2FyZCcpKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVjaG5vbG9neUNhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGVjaG5vbG9neUNhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgY2xhc3MgZnJvbSBhbGwgZWxlbWVudHNcclxuICAgICAgICB0ZWNobm9sb2d5Q2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmRbaV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmxvY2sgc2xpZGVyICdUcmVhdG1lbnRzJ1xyXG4gICAgY29uc3Qgc2xpZGVyVHJlYXRtZW50cyA9IG5ldyBTd2lwZXIoJy50cmVhdG1lbnRzLXNsaWRlcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogXCIudHJlYXRtZW50cy1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgIHByZXZFbDogXCIudHJlYXRtZW50cy1idXR0b24tcHJldlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6IFwiLnRyZWF0bWVudHMtcGFnaW5hdGlvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdQcmFjdGljZXMnXHJcbiAgY29uc3Qgc2xpZGVyUHJhY3RpY2VzID0gbmV3IFN3aXBlcignLnByYWN0aWNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5wcmFjdGljZXMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5wcmFjdGljZXMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5wcmFjdGljZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdUZXN0aW1vbmlhbHMnXHJcbiAgY29uc3Qgc2xpZGVyVGVzdGltb25pYWxzID0gbmV3IFN3aXBlcignLnRlc3RpbW9uaWFscy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIudGVzdGltb25pYWxzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIudGVzdGltb25pYWxzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIudGVzdGltb25pYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ0Nhc2VzJ1xyXG4gIGNvbnN0IHNsaWRlckNhc2VzID0gbmV3IFN3aXBlcignLmNhc2VzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLmNhc2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuY2FzZXMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5jYXNlcy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1NvY2lhbHMnXHJcbiAgY29uc3Qgc2xpZGVyU29jaWFscyA9IG5ldyBTd2lwZXIoJy5zb2NpYWxzX19zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zb2NpYWxzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuc29jaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnNvY2lhbHMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxufSIsIi8vIEF1dG8gc2l6ZSB0ZXh0YXJlYSA9PT09PT5cclxudmFyIHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuXHJcbmlmICh0ZXh0YXJlYSkge1xyXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhdXRvc2l6ZVRleHRhcmVhKTtcclxufSBlbHNlIHtcclxuICBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1dG9zaXplVGV4dGFyZWEoKXtcclxuXHR2YXIgZWwgPSB0aGlzO1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OmF1dG87IHBhZGRpbmc6MCc7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJy1tb3otYm94LXNpemluZzpjb250ZW50LWJveCc7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDonICsgZWwuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHR9LDApO1xyXG59XHJcblxyXG4vLyBDdXN0b20gc2VsZWN0ID09PT09PlxyXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKSwgbnVtYmVyT2ZPcHRpb25zID0gJCh0aGlzKS5jaGlsZHJlbignb3B0aW9uJykubGVuZ3RoO1xyXG5cclxuICAkdGhpcy5hZGRDbGFzcygnc2VsZWN0X19oaWRkZW4nKTsgXHJcbiAgJHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xyXG4gICR0aGlzLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2VsZWN0X19zdHlsZWRcIj48L2Rpdj4nKTtcclxuXHJcbiAgdmFyICRzdHlsZWRTZWxlY3QgPSAkdGhpcy5uZXh0KCdkaXYuc2VsZWN0X19zdHlsZWQnKTtcclxuICAkc3R5bGVkU2VsZWN0LmFwcGVuZCgnPHNwYW4+PC9zcGFuPjxpIGNsYXNzPVwiaWNvbi1hcnJvdy1kcm9wZG93blwiPjwvaT4nKVxyXG4gICRzdHlsZWRTZWxlY3QuZmluZCgnc3BhbicpLnRleHQoJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKDApLnRleHQoKSk7XHJcblxyXG4gIHZhciAkbGlzdCA9ICQoJzx1bCAvPicsIHtcclxuICAgICdjbGFzcyc6ICdzZWxlY3RfX29wdGlvbnMnXHJcbiAgfSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICQoJzxsaSAvPicsIHtcclxuICAgICAgdGV4dDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnRleHQoKSxcclxuICAgICAgcmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuICAgIH0pLmFwcGVuZFRvKCRsaXN0KTtcclxuICB9XHJcblxyXG4gIHZhciAkbGlzdEl0ZW1zID0gJGxpc3QuY2hpbGRyZW4oJ2xpJyk7XHJcblxyXG4gICRzdHlsZWRTZWxlY3QuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICQoJ2Rpdi5zZWxlY3RfX3N0eWxlZC5hY3RpdmUnKS5ub3QodGhpcykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVVwKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdF9fb3B0aW9ucycpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRsaXN0SXRlbXMuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRzdHlsZWRTZWxlY3QuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS50ZXh0KCkpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICR0aGlzLnZhbCgkKHRoaXMpLmF0dHIoJ3JlbCcpKTtcclxuICAgICRsaXN0LnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkc3R5bGVkU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICRsaXN0LnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyIsbnVsbCwiJCgnLnNob3dfX3RyaWdnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuc2hvd19faXRlbScpLnRvZ2dsZSgpXHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnanMtYWN0aXZlJylcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtYWN0aXZlJykpIHtcclxuICAgICQodGhpcykuZmluZCgnc3BhbicpLnRleHQoJ1NlZSBsZXNzJylcclxuICB9IGVsc2Uge1xyXG4gICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgnU2VlIGFsbCcpXHJcbiAgfVxyXG59KSIsbnVsbF19