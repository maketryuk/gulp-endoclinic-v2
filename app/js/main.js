"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Scroll to the top before the page loads
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

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
  var treatmentsDropdownList = document.querySelector(".treatments .dropdown__list"); // Scroll to contacts-form

  var links = document.querySelectorAll(".header-contacts__link");

  var _iterator = _createForOfIteratorHelper(links),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var link = _step.value;
      link.addEventListener("click", clickHandler);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  function clickHandler(e) {
    e.preventDefault();
    var href = this.getAttribute("href");
    var offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop - 100,
      behavior: "smooth"
    });
  } // Manipulations with header classes on scroll


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
  }); // Tabs

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
  }

  if (tabDropdownTrigger) {
    tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent;
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
    //     // technologyCardBody.forEach((element) => {
    //     //   slideUp(element)
    //     // });
    //     technologyCard[i].classList.add('js-active');
    //     // Add class to the element that was clicked
    //     slideDown(technologyCardBody[i], 300)
    //   });
    // }

    var horizontalScroll = document.querySelector('.horizontal-scroll');

    if (horizontalScroll) {
      // Horizontal scroll in Treatments =====>
      gsap.registerPlugin(ScrollTrigger);
      var sections = gsap.utils.toArray(".horizontal-scroll");
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
    }
  } else {
    (function () {
      // Toggle visible elements
      var showTrigger = document.querySelectorAll(".show__trigger");
      var showItem = document.querySelectorAll(".show__item");

      var _loop2 = function _loop2(_i2) {
        showTrigger[_i2].addEventListener("click", function () {
          showTrigger[_i2].classList.toggle('js-active');

          if (showTrigger[_i2].classList.contains("js-active")) {
            showTrigger[_i2].textContent = 'See less';
            showItem.forEach(function (element) {
              element.style.display = "block";
            });
          } else {
            showTrigger[_i2].textContent = 'See all';
            showItem.forEach(function (element) {
              element.style.display = "none";
            });
          }
        });
      };

      for (var _i2 = 0; _i2 < showTrigger.length; _i2++) {
        _loop2(_i2);
      } // Treatments page tabs navigation


      if (treatmentsDropdown && treatmentsDropdownList) {
        var offsetItem = document.querySelector('.dropdown__list').offsetHeight;
        document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px");
        window.addEventListener("scroll", function () {
          if (window.scrollY > offsetItem + 64) {
            treatmentsDropdown.classList.add("js-scroll-down");
            treatmentsDropdownList.style.display = 'none';
            document.querySelector('.treatments').classList.add("offset-top");
          } else {
            treatmentsDropdown.classList.remove("js-scroll-down");
            treatmentsDropdownList.style.display = 'block';
            document.querySelector('.treatments').classList.remove("offset-top");
          }
        });
        treatmentsDropdown.addEventListener('click', function () {
          if (treatmentsDropdown.classList.contains("js-scroll-down")) {
            slideToggle(treatmentsDropdownList, 300);
          } else {
            null;
          }
        });
      } // Opening mobile menu with burger


      burger.addEventListener("click", function () {
        header.classList.toggle("js-nav-open");
        document.body.classList.toggle("js-lock");
      }); // Opening technology accordions !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      // $('.technology__wrapper .technology-card').not($('.technology__wrapper.secondary .technology-card')).removeClass('js-active')

      var _loop3 = function _loop3(_i3) {
        technologyCard[_i3].addEventListener("click", function () {
          // Remove class from all elements
          technologyCard.forEach(function (element) {
            element.classList.remove("js-active");
          }); // Add class to the element that was clicked

          technologyCard[_i3].classList.add("js-active");
        });
      };

      for (var _i3 = 0; _i3 < technologyCard.length; _i3++) {
        _loop3(_i3);
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
    })();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25iZWZvcmV1bmxvYWQiLCJzY3JvbGxUbyIsInNsaWRlVXAiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInNldFRpbWVvdXQiLCJkaXNwbGF5IiwicmVtb3ZlUHJvcGVydHkiLCJzbGlkZURvd24iLCJnZXRDb21wdXRlZFN0eWxlIiwic2xpZGVUb2dnbGUiLCJvbmxvYWQiLCJidXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJ0ZWNobm9sb2d5Q2FyZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZWNobm9sb2d5Q2FyZEJvZHkiLCJ0YWJDb250ZW50IiwidGFiSXRlbSIsInRhYkRyb3Bkb3duVHJpZ2dlciIsInRyZWF0bWVudHNEcm9wZG93biIsInRyZWF0bWVudHNEcm9wZG93bkxpc3QiLCJsaW5rcyIsImxpbmsiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImdldEF0dHJpYnV0ZSIsIm9mZnNldFRvcCIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwic2Nyb2xsQ2hhbmdlIiwiJCIsInNjcm9sbFRvcCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImkiLCJmb3JFYWNoIiwiaXRlbSIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiT3ZlcmxheVNjcm9sbGJhcnMiLCJmaWxlc1RyaWdnZXIiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVzVGFibGUiLCJ1cGRhdGVGaWxlc0xpc3QiLCJjaGlsZHJlbiIsImZpbGVzIiwibmFtZSIsImlubmVySFRNTCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29udGFpbnMiLCJjbGljayIsIm5vdCIsImNsb3Nlc3QiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJmaW5kIiwiaG9yaXpvbnRhbFNjcm9sbCIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJzZWN0aW9ucyIsInV0aWxzIiwidG9BcnJheSIsIm1heFdpZHRoIiwiZ2V0TWF4V2lkdGgiLCJzZWN0aW9uIiwib2Zmc2V0V2lkdGgiLCJ0cmlnZ2VySXRlbSIsInRvIiwieCIsImlubmVyV2lkdGgiLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInN0YXJ0IiwidHJpZ2dlciIsInBpbiIsInNjcnViIiwiZW5kIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsInNjdCIsImNyZWF0ZSIsIm9mZnNldExlZnQiLCJ0b2dnbGVDbGFzcyIsInRhcmdldHMiLCJjbGFzc05hbWUiLCJzaG93VHJpZ2dlciIsInNob3dJdGVtIiwidG9nZ2xlIiwiZWxlbWVudCIsIm9mZnNldEl0ZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInNjcm9sbFkiLCJib2R5Iiwic2xpZGVyVHJlYXRtZW50cyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXJQcmFjdGljZXMiLCJzbGlkZXJUZXN0aW1vbmlhbHMiLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXJDYXNlcyIsInNsaWRlclNvY2lhbHMiLCJ0ZXh0YXJlYSIsImF1dG9zaXplVGV4dGFyZWEiLCJjc3NUZXh0Iiwic2Nyb2xsSGVpZ2h0IiwiZWFjaCIsIiR0aGlzIiwibnVtYmVyT2ZPcHRpb25zIiwid3JhcCIsImFmdGVyIiwiJHN0eWxlZFNlbGVjdCIsIm5leHQiLCJhcHBlbmQiLCJ0ZXh0IiwiZXEiLCIkbGlzdCIsImluc2VydEFmdGVyIiwicmVsIiwidmFsIiwiYXBwZW5kVG8iLCIkbGlzdEl0ZW1zIiwic3RvcFByb3BhZ2F0aW9uIiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSxNQUFNLENBQUNDLGNBQVAsR0FBd0IsWUFBWTtBQUNsQ0QsRUFBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQTBCO0FBQUEsTUFBakJDLFFBQWlCLHVFQUFSLEdBQVE7QUFFdENELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxrQkFBYixHQUFrQyx5QkFBbEM7QUFDQUgsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFFLGtCQUFiLEdBQWtDSCxRQUFRLEdBQUcsSUFBN0M7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0JMLE1BQU0sQ0FBQ00sWUFBUCxHQUFzQixJQUE1QztBQUNBTixFQUFBQSxNQUFNLENBQUNNLFlBQVA7QUFDQU4sRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFLLFFBQWIsR0FBd0IsUUFBeEI7QUFDQVAsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0IsQ0FBdEI7QUFDQUwsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFNLFVBQWIsR0FBMEIsQ0FBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFPLGFBQWIsR0FBNkIsQ0FBN0I7QUFDQVQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFRLFNBQWIsR0FBeUIsQ0FBekI7QUFDQVYsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFTLFlBQWIsR0FBNEIsQ0FBNUI7QUFDQWYsRUFBQUEsTUFBTSxDQUFDZ0IsVUFBUCxDQUFtQixZQUFNO0FBQ25CWixJQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYVcs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LEdBQU4sQ0FBVXBHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdHLElBQVIsQ0FBYSxLQUFiLENBQVY7QUFDQVAsSUFBQUEsS0FBSyxDQUFDOUksT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUxEO0FBT0E2QyxFQUFBQSxDQUFDLENBQUN4QixRQUFELENBQUQsQ0FBWThDLEtBQVosQ0FBa0IsWUFBVztBQUMzQnNFLElBQUFBLGFBQWEsQ0FBQ25FLFdBQWQsQ0FBMEIsUUFBMUI7QUFDQXdFLElBQUFBLEtBQUssQ0FBQzlJLE9BQU4sQ0FBYyxHQUFkO0FBQ0QsR0FIRDtBQUtELENBNUNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTY3JvbGwgdG8gdGhlIHRvcCBiZWZvcmUgdGhlIHBhZ2UgbG9hZHNcclxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufVxyXG5cclxubGV0IHNsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgICAvL2FsZXJ0KFwiIVwiKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbmxldCBzbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XHJcbiAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXk7XHJcbiAgaWYgKGRpc3BsYXkgPT09ICdub25lJykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG52YXIgc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgcmV0dXJuIHNsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHNsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIC8vIFZhcmlhYmVsc1xyXG4gIGxldCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgbGV0IHRlY2hub2xvZ3lDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktY2FyZCcpO1xyXG4gIGxldCB0ZWNobm9sb2d5Q2FyZEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JylcclxuICBsZXQgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19faXRlbVwiKTtcclxuICBsZXQgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19fdHJpZ2dlclwiKTtcclxuICBsZXQgdGFiRHJvcGRvd25UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fdHJpZ2dlciAuZHJvcGRvd25fX3RyaWdnZXItdGV4dFwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93blwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX2xpc3RcIilcclxuXHJcbiAgLy8gU2Nyb2xsIHRvIGNvbnRhY3RzLWZvcm1cclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyLWNvbnRhY3RzX19saW5rXCIpO1xyXG5cclxuICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikub2Zmc2V0VG9wO1xyXG5cclxuICAgIHNjcm9sbCh7XHJcbiAgICAgIHRvcDogb2Zmc2V0VG9wIC0gMTAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNYW5pcHVsYXRpb25zIHdpdGggaGVhZGVyIGNsYXNzZXMgb24gc2Nyb2xsXHJcbiAgbGV0IHNjcm9sbENoYW5nZSA9IDE7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgIGxldCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+PSBzY3JvbGxDaGFuZ2UpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtdG9wXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtdG9wXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIsIFwianMtbmF2LW9wZW5cIiwgXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFRhYnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhYkl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgIHRhYkNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGFiQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB0YWJJdGVtW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcbiAgICB9KTtcclxuICB9IFxyXG4gIFxyXG4gIGlmICh0YWJEcm9wZG93blRyaWdnZXIpIHtcclxuICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICB9XHJcbiAgLy8gQ3VzdG9tIHNjcm9sbGJhciBpbiB0b290aCB0YWJsZVxyXG4gIE92ZXJsYXlTY3JvbGxiYXJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vdGhcIiksIHt9KTtcclxuXHJcbiAgLy8gRmlsZXMgaW5wdXRcclxuICBsZXQgZmlsZXNUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcclxuICBsZXQgZmlsZXNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxlc19fdGFibGUnKTtcclxuICBcclxuICBsZXQgdXBkYXRlRmlsZXNMaXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNUcmlnZ2VyLmZpbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGNoaWxkcmVuICs9ICAnPGRpdiBjbGFzcz1cImZpbGVzX193cmFwcGVyXCI+JyArICc8ZGl2IGNsYXNzPVwiZmlsZXMtaXRlbVwiPicgKyAnPGkgY2xhc3M9XCJpY29uLWZpbGVcIj48L2k+JyArICc8c3BhbiBjbGFzcz1cImZpbGVzLWl0ZW1fX25hbWVcIj4nICsgZmlsZXNUcmlnZ2VyLmZpbGVzLml0ZW0oaSkubmFtZSArICc8L3NwYW4vPicgKyAnPGkgY2xhc3M9XCJmaWxlcy1pdGVtX19yZW1vdmUgaWNvbi10cmFzaC1jYW5cIiBvbmNsaWNrPVwicmV0dXJuIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1wiPjwvaT4nICsgJzwvZGl2PicgKyAnPC9kaXY+J1xyXG4gICAgfVxyXG4gICAgZmlsZXNUYWJsZS5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPj0gMCkge1xyXG4gICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGZpbGVzVHJpZ2dlcikge1xyXG4gICAgZmlsZXNUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICB1cGRhdGVGaWxlc0xpc3QoKVxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgLy8gTWVkaWEgOTkyID09PT09PlxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk5MnB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAvLyBPcGVuaW5nIGRlc2t0b3AgbWVudSB3aXRoIGJ1cmdlclxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtbmF2LW9wZW5cIikpIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25cclxuICAgICQoJy50ZWNobm9sb2d5X193cmFwcGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikubm90KCQodGhpcykuY2xvc2VzdChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpKS5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikuYWRkQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdqcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5ub3QoJCh0aGlzKS5maW5kKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JykpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5zbGlkZURvd24oMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAvLyB0ZWNobm9sb2d5Q2FyZEJvZHkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgc2xpZGVVcChlbGVtZW50KVxyXG4gICAgLy8gICAgIC8vIH0pO1xyXG5cclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKCdqcy1hY3RpdmUnKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgIC8vICAgICBzbGlkZURvd24odGVjaG5vbG9neUNhcmRCb2R5W2ldLCAzMDApXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcblxyXG4gICAgbGV0IGhvcml6b250YWxTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9yaXpvbnRhbC1zY3JvbGwnKVxyXG5cclxuICAgIGlmIChob3Jpem9udGFsU2Nyb2xsKSB7XHJcbiAgICAgIC8vIEhvcml6b250YWwgc2Nyb2xsIGluIFRyZWF0bWVudHMgPT09PT0+XHJcbiAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gZ3NhcC51dGlscy50b0FycmF5KFwiLmhvcml6b250YWwtc2Nyb2xsXCIpO1xyXG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gIFxyXG4gICAgICBjb25zdCBnZXRNYXhXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICBtYXhXaWR0aCA9IDA7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgbWF4V2lkdGggKz0gc2VjdGlvbi5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZ2V0TWF4V2lkdGgoKTtcclxuICAgICAgU2Nyb2xsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwicmVmcmVzaEluaXRcIiwgZ2V0TWF4V2lkdGgpO1xyXG4gIFxyXG4gICAgICBsZXQgdHJpZ2dlckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlYXRtZW50cycpO1xyXG4gIFxyXG4gICAgICBnc2FwLnRvKHNlY3Rpb25zLCB7XHJcbiAgICAgICAgeDogKCkgPT4gYC0ke21heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGh9YCxcclxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcclxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICBzdGFydDogXCItMTIwcHggdG9wXCIsXHJcbiAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VySXRlbSxcclxuICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgIHNjcnViOiB0cnVlLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiBgKz0ke21heFdpZHRofWAsXHJcbiAgICAgICAgICBpbnZhbGlkYXRlT25SZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2N0LCBpKSA9PiB7XHJcbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgICAgdHJpZ2dlcjogc2N0LFxyXG4gICAgICAgICAgc3RhcnQ6ICgpID0+ICd0b3AgdG9wLT0nICsgKHNjdC5vZmZzZXRMZWZ0IC0gd2luZG93LmlubmVyV2lkdGgvMikgKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiAnKz0nICsgc2N0Lm9mZnNldFdpZHRoICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7dGFyZ2V0czogc2N0LCBjbGFzc05hbWU6IFwiYWN0aXZlXCJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGVsZW1lbnRzXHJcbiAgICBsZXQgc2hvd1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX3RyaWdnZXJcIik7XHJcbiAgICBsZXQgc2hvd0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX2l0ZW1cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaG93VHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzaG93VHJpZ2dlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dUcmlnZ2VyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2pzLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIGlmIChzaG93VHJpZ2dlcltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1hY3RpdmVcIikpIHtcclxuICAgICAgICAgIHNob3dUcmlnZ2VyW2ldLnRleHRDb250ZW50ID0gJ1NlZSBsZXNzJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93VHJpZ2dlcltpXS50ZXh0Q29udGVudCA9ICdTZWUgYWxsJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgLy8gVHJlYXRtZW50cyBwYWdlIHRhYnMgbmF2aWdhdGlvblxyXG4gICAgaWYgKHRyZWF0bWVudHNEcm9wZG93biAmJiB0cmVhdG1lbnRzRHJvcGRvd25MaXN0KSB7XHJcbiAgICAgIGxldCBvZmZzZXRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19saXN0Jykub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdHJlYXRtZW50cy1kcm9wZG93bi1vZmZzZXRcIiwgb2Zmc2V0SXRlbSArIFwicHhcIilcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0gKyA2NCApIHtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LmFkZChcIm9mZnNldC10b3BcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LnJlbW92ZShcIm9mZnNldC10b3BcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuICAgICAgICAgIHNsaWRlVG9nZ2xlKHRyZWF0bWVudHNEcm9wZG93bkxpc3QsIDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBPcGVuaW5nIG1vYmlsZSBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwianMtbG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25zICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgIC8vICQoJy50ZWNobm9sb2d5X193cmFwcGVyIC50ZWNobm9sb2d5LWNhcmQnKS5ub3QoJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIuc2Vjb25kYXJ5IC50ZWNobm9sb2d5LWNhcmQnKSkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb2NrIHNsaWRlciAnVHJlYXRtZW50cydcclxuICAgIGNvbnN0IHNsaWRlclRyZWF0bWVudHMgPSBuZXcgU3dpcGVyKCcudHJlYXRtZW50cy1zbGlkZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLXByZXZcIixcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi50cmVhdG1lbnRzLXBhZ2luYXRpb25cIixcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnUHJhY3RpY2VzJ1xyXG4gIGNvbnN0IHNsaWRlclByYWN0aWNlcyA9IG5ldyBTd2lwZXIoJy5wcmFjdGljZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIucHJhY3RpY2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnVGVzdGltb25pYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclRlc3RpbW9uaWFscyA9IG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnRlc3RpbW9uaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdDYXNlcydcclxuICBjb25zdCBzbGlkZXJDYXNlcyA9IG5ldyBTd2lwZXIoJy5jYXNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5jYXNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmNhc2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuY2FzZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdTb2NpYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclNvY2lhbHMgPSBuZXcgU3dpcGVyKCcuc29jaWFsc19fc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuc29jaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnNvY2lhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zb2NpYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCIvLyBBdXRvIHNpemUgdGV4dGFyZWEgPT09PT0+XHJcbnZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblxyXG5pZiAodGV4dGFyZWEpIHtcclxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXV0b3NpemVUZXh0YXJlYSk7XHJcbn0gZWxzZSB7XHJcbiAgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBhdXRvc2l6ZVRleHRhcmVhKCl7XHJcblx0dmFyIGVsID0gdGhpcztcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDphdXRvOyBwYWRkaW5nOjAnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICctbW96LWJveC1zaXppbmc6Y29udGVudC1ib3gnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6JyArIGVsLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0fSwwKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIHNlbGVjdCA9PT09PT5cclxuJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyksIG51bWJlck9mT3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuXHJcbiAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdF9faGlkZGVuJyk7IFxyXG4gICR0aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3RcIj48L2Rpdj4nKTtcclxuICAkdGhpcy5hZnRlcignPGRpdiBjbGFzcz1cInNlbGVjdF9fc3R5bGVkXCI+PC9kaXY+Jyk7XHJcblxyXG4gIHZhciAkc3R5bGVkU2VsZWN0ID0gJHRoaXMubmV4dCgnZGl2LnNlbGVjdF9fc3R5bGVkJyk7XHJcbiAgJHN0eWxlZFNlbGVjdC5hcHBlbmQoJzxzcGFuPjwvc3Bhbj48aSBjbGFzcz1cImljb24tYXJyb3ctZHJvcGRvd25cIj48L2k+JylcclxuICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcSgwKS50ZXh0KCkpO1xyXG5cclxuICB2YXIgJGxpc3QgPSAkKCc8dWwgLz4nLCB7XHJcbiAgICAnY2xhc3MnOiAnc2VsZWN0X19vcHRpb25zJ1xyXG4gIH0pLmluc2VydEFmdGVyKCRzdHlsZWRTZWxlY3QpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAkKCc8bGkgLz4nLCB7XHJcbiAgICAgIHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS50ZXh0KCksXHJcbiAgICAgIHJlbDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnZhbCgpXHJcbiAgICB9KS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgfVxyXG5cclxuICB2YXIgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cclxuICAkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKCdkaXYuc2VsZWN0X19zdHlsZWQuYWN0aXZlJykubm90KHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0X19vcHRpb25zJykuc2xpZGVVcCgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkbGlzdEl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykudGV4dCgpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJHN0eWxlZFNlbGVjdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG59KTsiXX0=