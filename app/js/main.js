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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiLCJibG9ja3MvdHJlYXRtZW50cy1wYWdlL3RyZWF0bWVudHMvdHJlYXRtZW50cy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInNjcm9sbFRvIiwic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsImJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRlY2hub2xvZ3lDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsInRlY2hub2xvZ3lDYXJkQm9keSIsInRhYkNvbnRlbnQiLCJ0YWJJdGVtIiwidGFiRHJvcGRvd25UcmlnZ2VyIiwidHJlYXRtZW50c0Ryb3Bkb3duIiwidHJlYXRtZW50c0Ryb3Bkb3duTGlzdCIsImxpbmtzIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJzY3JvbGxDaGFuZ2UiLCIkIiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaSIsImZvckVhY2giLCJpdGVtIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJPdmVybGF5U2Nyb2xsYmFycyIsImZpbGVzVHJpZ2dlciIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXNUYWJsZSIsInVwZGF0ZUZpbGVzTGlzdCIsImNoaWxkcmVuIiwiZmlsZXMiLCJuYW1lIiwiaW5uZXJIVE1MIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjb250YWlucyIsImNsaWNrIiwibm90IiwiY2xvc2VzdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImZpbmQiLCJob3Jpem9udGFsU2Nyb2xsIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsInNlY3Rpb25zIiwidXRpbHMiLCJ0b0FycmF5IiwibWF4V2lkdGgiLCJnZXRNYXhXaWR0aCIsInNlY3Rpb24iLCJvZmZzZXRXaWR0aCIsInRyaWdnZXJJdGVtIiwidG8iLCJ4IiwiaW5uZXJXaWR0aCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwic3RhcnQiLCJ0cmlnZ2VyIiwicGluIiwic2NydWIiLCJlbmQiLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwic2N0IiwiY3JlYXRlIiwib2Zmc2V0TGVmdCIsInRvZ2dsZUNsYXNzIiwidGFyZ2V0cyIsImNsYXNzTmFtZSIsInNob3dUcmlnZ2VyIiwic2hvd0l0ZW0iLCJ0b2dnbGUiLCJlbGVtZW50Iiwib2Zmc2V0SXRlbTEiLCJzY3JvbGxZIiwiYm9keSIsInNsaWRlclRyZWF0bWVudHMiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJlbCIsImJyZWFrcG9pbnRzIiwic2xpZGVyUHJhY3RpY2VzIiwic2xpZGVyVGVzdGltb25pYWxzIiwibG9vcCIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVyQ2FzZXMiLCJzbGlkZXJTb2NpYWxzIiwidGV4dGFyZWEiLCJhdXRvc2l6ZVRleHRhcmVhIiwiY3NzVGV4dCIsInNjcm9sbEhlaWdodCIsImVhY2giLCIkdGhpcyIsIm51bWJlck9mT3B0aW9ucyIsIndyYXAiLCJhZnRlciIsIiRzdHlsZWRTZWxlY3QiLCJuZXh0IiwiYXBwZW5kIiwidGV4dCIsImVxIiwiJGxpc3QiLCJpbnNlcnRBZnRlciIsInJlbCIsInZhbCIsImFwcGVuZFRvIiwiJGxpc3RJdGVtcyIsInN0b3BQcm9wYWdhdGlvbiIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQUEsTUFBTSxDQUFDQyxjQUFQLEdBQXdCLFlBQVk7QUFDbENELEVBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNELENBRkQ7O0FBSUEsSUFBSUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsTUFBRCxFQUEwQjtBQUFBLE1BQWpCQyxRQUFpQix1RUFBUixHQUFRO0FBRXRDRCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsa0JBQWIsR0FBa0MseUJBQWxDO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRSxrQkFBYixHQUFrQ0gsUUFBUSxHQUFHLElBQTdDO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRyxNQUFiLEdBQXNCTCxNQUFNLENBQUNNLFlBQVAsR0FBc0IsSUFBNUM7QUFDQU4sRUFBQUEsTUFBTSxDQUFDTSxZQUFQO0FBQ0FOLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSyxRQUFiLEdBQXdCLFFBQXhCO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRyxNQUFiLEdBQXNCLENBQXRCO0FBQ0FMLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTSxVQUFiLEdBQTBCLENBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTyxhQUFiLEdBQTZCLENBQTdCO0FBQ0FULEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhUSxTQUFiLEdBQXlCLENBQXpCO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhUyxZQUFiLEdBQTRCLENBQTVCO0FBQ0FmLEVBQUFBLE1BQU0sQ0FBQ2dCLFVBQVAsQ0FBbUIsWUFBTTtBQUNuQlosSUFBQUEsTUFB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QjtBQUNBc0UsSUFBQUEsS0FBSyxDQUFDNUksT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUhEO0FBS0QsQ0E1Q0Q7QUNuQkEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcm9sbCB0byB0aGUgdG9wIGJlZm9yZSB0aGUgcGFnZSBsb2Fkc1xyXG53aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG59XHJcblxyXG5sZXQgc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uPTUwMCkgPT4ge1xyXG5cclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICAgIC8vYWxlcnQoXCIhXCIpO1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxubGV0IHNsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uPTUwMCkgPT4ge1xyXG5cclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcclxuICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheTtcclxuICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSBkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luLCBwYWRkaW5nXCI7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbnZhciBzbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICByZXR1cm4gc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gVmFyaWFiZWxzXHJcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBsZXQgdGVjaG5vbG9neUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkJyk7XHJcbiAgbGV0IHRlY2hub2xvZ3lDYXJkQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKVxyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19pdGVtXCIpO1xyXG4gIGxldCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX190cmlnZ2VyXCIpO1xyXG4gIGxldCB0YWJEcm9wZG93blRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX190cmlnZ2VyIC5kcm9wZG93bl9fdHJpZ2dlci10ZXh0XCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duXCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fbGlzdFwiKVxyXG5cclxuICAvLyBTY3JvbGwgdG8gY29udGFjdHMtZm9ybVxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItY29udGFjdHNfX2xpbmtcIik7XHJcblxyXG4gIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKS5vZmZzZXRUb3A7XHJcblxyXG4gICAgc2Nyb2xsKHtcclxuICAgICAgdG9wOiBvZmZzZXRUb3AgLSAxMDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmlwdWxhdGlvbnMgd2l0aCBoZWFkZXIgY2xhc3NlcyBvbiBzY3JvbGxcclxuICBsZXQgc2Nyb2xsQ2hhbmdlID0gMTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IHNjcm9sbENoYW5nZSkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIiwgXCJqcy1uYXYtb3BlblwiLCBcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVGFic1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFiSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgdGFiQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhYkl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIHRhYkl0ZW1baV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICAgIH0pO1xyXG4gIH0gXHJcbiAgXHJcbiAgaWYgKHRhYkRyb3Bkb3duVHJpZ2dlcikge1xyXG4gICAgdGFiRHJvcGRvd25UcmlnZ2VyLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX190cmlnZ2VyLmpzLWFjdGl2ZVwiKS50ZXh0Q29udGVudFxyXG4gIH1cclxuICAvLyBDdXN0b20gc2Nyb2xsYmFyIGluIHRvb3RoIHRhYmxlXHJcbiAgT3ZlcmxheVNjcm9sbGJhcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b290aFwiKSwge30pO1xyXG5cclxuICAvLyBGaWxlcyBpbnB1dFxyXG4gIGxldCBmaWxlc1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xyXG4gIGxldCBmaWxlc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGVzX190YWJsZScpO1xyXG4gIFxyXG4gIGxldCB1cGRhdGVGaWxlc0xpc3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlc1RyaWdnZXIuZmlsZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgY2hpbGRyZW4gKz0gICc8ZGl2IGNsYXNzPVwiZmlsZXNfX3dyYXBwZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJmaWxlcy1pdGVtXCI+JyArICc8aSBjbGFzcz1cImljb24tZmlsZVwiPjwvaT4nICsgJzxzcGFuIGNsYXNzPVwiZmlsZXMtaXRlbV9fbmFtZVwiPicgKyBmaWxlc1RyaWdnZXIuZmlsZXMuaXRlbShpKS5uYW1lICsgJzwvc3Bhbi8+JyArICc8aSBjbGFzcz1cImZpbGVzLWl0ZW1fX3JlbW92ZSBpY29uLXRyYXNoLWNhblwiIG9uY2xpY2s9XCJyZXR1cm4gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XCI+PC9pPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nXHJcbiAgICB9XHJcbiAgICBmaWxlc1RhYmxlLmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZmlsZXNUcmlnZ2VyKSB7XHJcbiAgICBmaWxlc1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZUZpbGVzTGlzdCgpXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICAvLyBNZWRpYSA5OTIgPT09PT0+XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIC8vIE9wZW5pbmcgZGVza3RvcCBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1uYXYtb3BlblwiKSkge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyB0ZWNobm9sb2d5IGFjY29yZGlvblxyXG4gICAgJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5ub3QoJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikpLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5hZGRDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLm5vdCgkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKSkuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGVjaG5vbG9neUNhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgdGVjaG5vbG9neUNhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoJ2pzLWFjdGl2ZScpO1xyXG5cclxuICAgIC8vICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgLy8gICAgIHNsaWRlRG93bih0ZWNobm9sb2d5Q2FyZEJvZHlbaV0sIDMwMClcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIENoZWNraW5nIGlmIHRoZSBhY3RpdmUgcGFnZSBpcyB0aGUgaG9tZSBwYWdlXHJcbiAgICAvLyB3aW5kb3cuaG9tZXBhZ2VjaGVjayA9ICgpID0+IHtcclxuICAgIC8vICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAvLyAgIGlmKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvaW5kZXguaHRtbFwiKXtcclxuICAgIC8vICAgICBjaGVjaz10cnVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgLy8gfVxyXG4gICAgbGV0IGhvcml6b250YWxTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9yaXpvbnRhbC1zY3JvbGwnKVxyXG5cclxuICAgIGlmIChob3Jpem9udGFsU2Nyb2xsKSB7XHJcbiAgICAgIC8vIEhvcml6b250YWwgc2Nyb2xsIGluIFRyZWF0bWVudHMgPT09PT0+XHJcbiAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gZ3NhcC51dGlscy50b0FycmF5KFwiLmhvcml6b250YWwtc2Nyb2xsXCIpO1xyXG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gIFxyXG4gICAgICBjb25zdCBnZXRNYXhXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICBtYXhXaWR0aCA9IDA7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgbWF4V2lkdGggKz0gc2VjdGlvbi5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZ2V0TWF4V2lkdGgoKTtcclxuICAgICAgU2Nyb2xsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwicmVmcmVzaEluaXRcIiwgZ2V0TWF4V2lkdGgpO1xyXG4gIFxyXG4gICAgICBsZXQgdHJpZ2dlckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlYXRtZW50cycpO1xyXG4gIFxyXG4gICAgICBnc2FwLnRvKHNlY3Rpb25zLCB7XHJcbiAgICAgICAgeDogKCkgPT4gYC0ke21heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGh9YCxcclxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcclxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICBzdGFydDogXCItMTIwcHggdG9wXCIsXHJcbiAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VySXRlbSxcclxuICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgIHNjcnViOiB0cnVlLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiBgKz0ke21heFdpZHRofWAsXHJcbiAgICAgICAgICBpbnZhbGlkYXRlT25SZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2N0LCBpKSA9PiB7XHJcbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgICAgdHJpZ2dlcjogc2N0LFxyXG4gICAgICAgICAgc3RhcnQ6ICgpID0+ICd0b3AgdG9wLT0nICsgKHNjdC5vZmZzZXRMZWZ0IC0gd2luZG93LmlubmVyV2lkdGgvMikgKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiAnKz0nICsgc2N0Lm9mZnNldFdpZHRoICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7dGFyZ2V0czogc2N0LCBjbGFzc05hbWU6IFwiYWN0aXZlXCJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGVsZW1lbnRzXHJcbiAgICBsZXQgc2hvd1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX3RyaWdnZXJcIik7XHJcbiAgICBsZXQgc2hvd0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX2l0ZW1cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaG93VHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzaG93VHJpZ2dlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dUcmlnZ2VyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2pzLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIGlmIChzaG93VHJpZ2dlcltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1hY3RpdmVcIikpIHtcclxuICAgICAgICAgIHNob3dUcmlnZ2VyW2ldLnRleHRDb250ZW50ID0gJ1NlZSBsZXNzJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93VHJpZ2dlcltpXS50ZXh0Q29udGVudCA9ICdTZWUgYWxsJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBUcmVhdG1lbnRzIHBhZ2UgdGFicyBuYXZpZ2F0aW9uXHJcbiAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duICYmIHRyZWF0bWVudHNEcm9wZG93bkxpc3QpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBvZmZzZXRJdGVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHRcclxuICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0xICsgNjQgKSB7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImpzLXNjcm9sbC1kb3duXCIpKSB7XHJcbiAgICAgICAgICBzbGlkZVRvZ2dsZSh0cmVhdG1lbnRzRHJvcGRvd25MaXN0LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuaW5nIG1vYmlsZSBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwianMtbG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25zICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgIC8vICQoJy50ZWNobm9sb2d5X193cmFwcGVyIC50ZWNobm9sb2d5LWNhcmQnKS5ub3QoJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIuc2Vjb25kYXJ5IC50ZWNobm9sb2d5LWNhcmQnKSkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb2NrIHNsaWRlciAnVHJlYXRtZW50cydcclxuICAgIGNvbnN0IHNsaWRlclRyZWF0bWVudHMgPSBuZXcgU3dpcGVyKCcudHJlYXRtZW50cy1zbGlkZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLXByZXZcIixcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi50cmVhdG1lbnRzLXBhZ2luYXRpb25cIixcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnUHJhY3RpY2VzJ1xyXG4gIGNvbnN0IHNsaWRlclByYWN0aWNlcyA9IG5ldyBTd2lwZXIoJy5wcmFjdGljZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIucHJhY3RpY2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnVGVzdGltb25pYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclRlc3RpbW9uaWFscyA9IG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnRlc3RpbW9uaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdDYXNlcydcclxuICBjb25zdCBzbGlkZXJDYXNlcyA9IG5ldyBTd2lwZXIoJy5jYXNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5jYXNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmNhc2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuY2FzZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdTb2NpYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclNvY2lhbHMgPSBuZXcgU3dpcGVyKCcuc29jaWFsc19fc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuc29jaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnNvY2lhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zb2NpYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCIvLyBBdXRvIHNpemUgdGV4dGFyZWEgPT09PT0+XHJcbnZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblxyXG5pZiAodGV4dGFyZWEpIHtcclxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXV0b3NpemVUZXh0YXJlYSk7XHJcbn0gZWxzZSB7XHJcbiAgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBhdXRvc2l6ZVRleHRhcmVhKCl7XHJcblx0dmFyIGVsID0gdGhpcztcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDphdXRvOyBwYWRkaW5nOjAnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICctbW96LWJveC1zaXppbmc6Y29udGVudC1ib3gnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6JyArIGVsLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0fSwwKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIHNlbGVjdCA9PT09PT5cclxuJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyksIG51bWJlck9mT3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuXHJcbiAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdF9faGlkZGVuJyk7IFxyXG4gICR0aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3RcIj48L2Rpdj4nKTtcclxuICAkdGhpcy5hZnRlcignPGRpdiBjbGFzcz1cInNlbGVjdF9fc3R5bGVkXCI+PC9kaXY+Jyk7XHJcblxyXG4gIHZhciAkc3R5bGVkU2VsZWN0ID0gJHRoaXMubmV4dCgnZGl2LnNlbGVjdF9fc3R5bGVkJyk7XHJcbiAgJHN0eWxlZFNlbGVjdC5hcHBlbmQoJzxzcGFuPjwvc3Bhbj48aSBjbGFzcz1cImljb24tYXJyb3ctZHJvcGRvd25cIj48L2k+JylcclxuICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcSgwKS50ZXh0KCkpO1xyXG5cclxuICB2YXIgJGxpc3QgPSAkKCc8dWwgLz4nLCB7XHJcbiAgICAnY2xhc3MnOiAnc2VsZWN0X19vcHRpb25zJ1xyXG4gIH0pLmluc2VydEFmdGVyKCRzdHlsZWRTZWxlY3QpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAkKCc8bGkgLz4nLCB7XHJcbiAgICAgIHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS50ZXh0KCksXHJcbiAgICAgIHJlbDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnZhbCgpXHJcbiAgICB9KS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgfVxyXG5cclxuICB2YXIgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cclxuICAkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKCdkaXYuc2VsZWN0X19zdHlsZWQuYWN0aXZlJykubm90KHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0X19vcHRpb25zJykuc2xpZGVVcCgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkbGlzdEl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykudGV4dCgpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJHN0eWxlZFNlbGVjdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG59KTsiLG51bGxdfQ==