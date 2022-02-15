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
      }

      var offsetItem = document.querySelector('.dropdown__list').offsetHeight;
      document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px"); // Treatments page tabs navigation

      if (treatmentsDropdown && treatmentsDropdownList) {
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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiLCJibG9ja3MvdHJlYXRtZW50cy1wYWdlL3RyZWF0bWVudHMvdHJlYXRtZW50cy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsInNjcm9sbFRvIiwic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsImJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRlY2hub2xvZ3lDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsInRlY2hub2xvZ3lDYXJkQm9keSIsInRhYkNvbnRlbnQiLCJ0YWJJdGVtIiwidGFiRHJvcGRvd25UcmlnZ2VyIiwidHJlYXRtZW50c0Ryb3Bkb3duIiwidHJlYXRtZW50c0Ryb3Bkb3duTGlzdCIsImxpbmtzIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJzY3JvbGxDaGFuZ2UiLCIkIiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaSIsImZvckVhY2giLCJpdGVtIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJPdmVybGF5U2Nyb2xsYmFycyIsImZpbGVzVHJpZ2dlciIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXNUYWJsZSIsInVwZGF0ZUZpbGVzTGlzdCIsImNoaWxkcmVuIiwiZmlsZXMiLCJuYW1lIiwiaW5uZXJIVE1MIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjb250YWlucyIsImNsaWNrIiwibm90IiwiY2xvc2VzdCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImZpbmQiLCJob3Jpem9udGFsU2Nyb2xsIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsInNlY3Rpb25zIiwidXRpbHMiLCJ0b0FycmF5IiwibWF4V2lkdGgiLCJnZXRNYXhXaWR0aCIsInNlY3Rpb24iLCJvZmZzZXRXaWR0aCIsInRyaWdnZXJJdGVtIiwidG8iLCJ4IiwiaW5uZXJXaWR0aCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwic3RhcnQiLCJ0cmlnZ2VyIiwicGluIiwic2NydWIiLCJlbmQiLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwic2N0IiwiY3JlYXRlIiwib2Zmc2V0TGVmdCIsInRvZ2dsZUNsYXNzIiwidGFyZ2V0cyIsImNsYXNzTmFtZSIsInNob3dUcmlnZ2VyIiwic2hvd0l0ZW0iLCJ0b2dnbGUiLCJlbGVtZW50Iiwib2Zmc2V0SXRlbSIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3BlcnR5Iiwic2Nyb2xsWSIsImJvZHkiLCJzbGlkZXJUcmVhdG1lbnRzIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwYWdpbmF0aW9uIiwiZWwiLCJicmVha3BvaW50cyIsInNsaWRlclByYWN0aWNlcyIsInNsaWRlclRlc3RpbW9uaWFscyIsImxvb3AiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlckNhc2VzIiwic2xpZGVyU29jaWFscyIsInRleHRhcmVhIiwiYXV0b3NpemVUZXh0YXJlYSIsImNzc1RleHQiLCJzY3JvbGxIZWlnaHQiLCJlYWNoIiwiJHRoaXMiLCJudW1iZXJPZk9wdGlvbnMiLCJ3cmFwIiwiYWZ0ZXIiLCIkc3R5bGVkU2VsZWN0IiwibmV4dCIsImFwcGVuZCIsInRleHQiLCJlcSIsIiRsaXN0IiwiaW5zZXJ0QWZ0ZXIiLCJyZWwiLCJ2YWwiLCJhcHBlbmRUbyIsIiRsaXN0SXRlbXMiLCJzdG9wUHJvcGFnYXRpb24iLCJhdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0FBLE1BQU0sQ0FBQ0MsY0FBUCxHQUF3QixZQUFZO0FBQ2xDRCxFQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDRCxDQUZEOztBQUlBLElBQUlDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBMEI7QUFBQSxNQUFqQkMsUUFBaUIsdUVBQVIsR0FBUTtBQUV0Q0QsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFDLGtCQUFiLEdBQWtDLHlCQUFsQztBQUNBSCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUUsa0JBQWIsR0FBa0NILFFBQVEsR0FBRyxJQUE3QztBQUNBRCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUcsTUFBYixHQUFzQkwsTUFBTSxDQUFDTSxZQUFQLEdBQXNCLElBQTVDO0FBQ0FOLEVBQUFBLE1BQU0sQ0FBQ00sWUFBUDtBQUNBTixFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUssUUFBYixHQUF3QixRQUF4QjtBQUNBUCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUcsTUFBYixHQUFzQixDQUF0QjtBQUNBTCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYU0sVUFBYixHQUEwQixDQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYU8sYUFBYixHQUE2QixDQUE3QjtBQUNBVCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYVEsU0FBYixHQUF5QixDQUF6QjtBQUNBVixFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYVMsWUFBYixHQUE0QixDQUE1QjtBQUNBZixFQUFBQSxNQUFNLENBQUNnQixV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QUQsQ0FBRCxDQUFRK0YsSUFBUixFQUFoQyxFQUFnRHRFLFdBQWhELENBQTRELFFBQTVEO0FBQ0ErRCxJQUFBQSxLQUFLLENBQUNZLEdBQU4sQ0FBVXBHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdHLElBQVIsQ0FBYSxLQUFiLENBQVY7QUFDQVAsSUFBQUEsS0FBSyxDQUFDOUksT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUxEO0FBT0E2QyxFQUFBQSxDQUFDLENBQUN4QixRQUFELENBQUQsQ0FBWThDLEtBQVosQ0FBa0IsWUFBVztBQUMzQnNFLElBQUFBLGFBQWEsQ0FBQ25FLFdBQWQsQ0FBMEIsUUFBMUI7QUFDQXdFLElBQUFBLEtBQUssQ0FBQzlJLE9BQU4sQ0FBYyxHQUFkO0FBQ0QsR0FIRDtBQUtELENBNUNEO0FDbkJBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTY3JvbGwgdG8gdGhlIHRvcCBiZWZvcmUgdGhlIHBhZ2UgbG9hZHNcclxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufVxyXG5cclxubGV0IHNsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgICAvL2FsZXJ0KFwiIVwiKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbmxldCBzbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XHJcbiAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXk7XHJcbiAgaWYgKGRpc3BsYXkgPT09ICdub25lJykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG52YXIgc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgcmV0dXJuIHNsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHNsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIC8vIFZhcmlhYmVsc1xyXG4gIGxldCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgbGV0IHRlY2hub2xvZ3lDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktY2FyZCcpO1xyXG4gIGxldCB0ZWNobm9sb2d5Q2FyZEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JylcclxuICBsZXQgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19faXRlbVwiKTtcclxuICBsZXQgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19fdHJpZ2dlclwiKTtcclxuICBsZXQgdGFiRHJvcGRvd25UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fdHJpZ2dlciAuZHJvcGRvd25fX3RyaWdnZXItdGV4dFwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93blwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX2xpc3RcIilcclxuXHJcbiAgLy8gU2Nyb2xsIHRvIGNvbnRhY3RzLWZvcm1cclxuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyLWNvbnRhY3RzX19saW5rXCIpO1xyXG5cclxuICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikub2Zmc2V0VG9wO1xyXG5cclxuICAgIHNjcm9sbCh7XHJcbiAgICAgIHRvcDogb2Zmc2V0VG9wIC0gMTAwLFxyXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBNYW5pcHVsYXRpb25zIHdpdGggaGVhZGVyIGNsYXNzZXMgb24gc2Nyb2xsXHJcbiAgbGV0IHNjcm9sbENoYW5nZSA9IDE7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgIGxldCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+PSBzY3JvbGxDaGFuZ2UpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtdG9wXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtdG9wXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIsIFwianMtbmF2LW9wZW5cIiwgXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFRhYnNcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhYkl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgICAgIHRhYkNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGFiQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB0YWJJdGVtW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcblxyXG4gICAgICB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcbiAgICB9KTtcclxuICB9IFxyXG4gIFxyXG4gIGlmICh0YWJEcm9wZG93blRyaWdnZXIpIHtcclxuICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICB9XHJcbiAgLy8gQ3VzdG9tIHNjcm9sbGJhciBpbiB0b290aCB0YWJsZVxyXG4gIE92ZXJsYXlTY3JvbGxiYXJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vdGhcIiksIHt9KTtcclxuXHJcbiAgLy8gRmlsZXMgaW5wdXRcclxuICBsZXQgZmlsZXNUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcclxuICBsZXQgZmlsZXNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxlc19fdGFibGUnKTtcclxuICBcclxuICBsZXQgdXBkYXRlRmlsZXNMaXN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGNoaWxkcmVuID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNUcmlnZ2VyLmZpbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIGNoaWxkcmVuICs9ICAnPGRpdiBjbGFzcz1cImZpbGVzX193cmFwcGVyXCI+JyArICc8ZGl2IGNsYXNzPVwiZmlsZXMtaXRlbVwiPicgKyAnPGkgY2xhc3M9XCJpY29uLWZpbGVcIj48L2k+JyArICc8c3BhbiBjbGFzcz1cImZpbGVzLWl0ZW1fX25hbWVcIj4nICsgZmlsZXNUcmlnZ2VyLmZpbGVzLml0ZW0oaSkubmFtZSArICc8L3NwYW4vPicgKyAnPGkgY2xhc3M9XCJmaWxlcy1pdGVtX19yZW1vdmUgaWNvbi10cmFzaC1jYW5cIiBvbmNsaWNrPVwicmV0dXJuIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1wiPjwvaT4nICsgJzwvZGl2PicgKyAnPC9kaXY+J1xyXG4gICAgfVxyXG4gICAgZmlsZXNUYWJsZS5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuICAgIGlmIChjaGlsZHJlbi5sZW5ndGggPj0gMCkge1xyXG4gICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGZpbGVzVHJpZ2dlcikge1xyXG4gICAgZmlsZXNUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICB1cGRhdGVGaWxlc0xpc3QoKVxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgLy8gTWVkaWEgOTkyID09PT09PlxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk5MnB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAvLyBPcGVuaW5nIGRlc2t0b3AgbWVudSB3aXRoIGJ1cmdlclxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtbmF2LW9wZW5cIikpIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25cclxuICAgICQoJy50ZWNobm9sb2d5X193cmFwcGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikubm90KCQodGhpcykuY2xvc2VzdChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpKS5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikuYWRkQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdqcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5ub3QoJCh0aGlzKS5maW5kKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JykpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5zbGlkZURvd24oMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKCdqcy1hY3RpdmUnKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgIC8vICAgICBzbGlkZURvd24odGVjaG5vbG9neUNhcmRCb2R5W2ldLCAzMDApXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBDaGVja2luZyBpZiB0aGUgYWN0aXZlIHBhZ2UgaXMgdGhlIGhvbWUgcGFnZVxyXG4gICAgLy8gd2luZG93LmhvbWVwYWdlY2hlY2sgPSAoKSA9PiB7XHJcbiAgICAvLyAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgLy8gICBpZihkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgfHwgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2luZGV4Lmh0bWxcIil7XHJcbiAgICAvLyAgICAgY2hlY2s9dHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIHJldHVybiBjaGVjaztcclxuICAgIC8vIH1cclxuICAgIGxldCBob3Jpem9udGFsU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvcml6b250YWwtc2Nyb2xsJylcclxuXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNjcm9sbCkge1xyXG4gICAgICAvLyBIb3Jpem9udGFsIHNjcm9sbCBpbiBUcmVhdG1lbnRzID09PT09PlxyXG4gICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG4gIFxyXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5ob3Jpem9udGFsLXNjcm9sbFwiKTtcclxuICAgICAgbGV0IG1heFdpZHRoID0gMDtcclxuICBcclxuICAgICAgY29uc3QgZ2V0TWF4V2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgbWF4V2lkdGggPSAwO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIG1heFdpZHRoICs9IHNlY3Rpb24ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldE1heFdpZHRoKCk7XHJcbiAgICAgIFNjcm9sbFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlZnJlc2hJbml0XCIsIGdldE1heFdpZHRoKTtcclxuICBcclxuICAgICAgbGV0IHRyaWdnZXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKTtcclxuICBcclxuICAgICAgZ3NhcC50byhzZWN0aW9ucywge1xyXG4gICAgICAgIHg6ICgpID0+IGAtJHttYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRofWAsXHJcbiAgICAgICAgZWFzZTogXCJub25lXCIsXHJcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgc3RhcnQ6IFwiLTEyMHB4IHRvcFwiLFxyXG4gICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlckl0ZW0sXHJcbiAgICAgICAgICBwaW46IHRydWUsXHJcbiAgICAgICAgICBzY3J1YjogdHJ1ZSxcclxuICAgICAgICAgIGVuZDogKCkgPT4gYCs9JHttYXhXaWR0aH1gLFxyXG4gICAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNjdCwgaSkgPT4ge1xyXG4gICAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICAgIHRyaWdnZXI6IHNjdCxcclxuICAgICAgICAgIHN0YXJ0OiAoKSA9PiAndG9wIHRvcC09JyArIChzY3Qub2Zmc2V0TGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoLzIpICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIGVuZDogKCkgPT4gJys9JyArIHNjdC5vZmZzZXRXaWR0aCAqIChtYXhXaWR0aCAvIChtYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSksXHJcbiAgICAgICAgICB0b2dnbGVDbGFzczoge3RhcmdldHM6IHNjdCwgY2xhc3NOYW1lOiBcImFjdGl2ZVwifVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBUb2dnbGUgdmlzaWJsZSBlbGVtZW50c1xyXG4gICAgbGV0IHNob3dUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93X190cmlnZ2VyXCIpO1xyXG4gICAgbGV0IHNob3dJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93X19pdGVtXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hvd1RyaWdnZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2hvd1RyaWdnZXJbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzaG93VHJpZ2dlcltpXS5jbGFzc0xpc3QudG9nZ2xlKCdqcy1hY3RpdmUnKVxyXG5cclxuICAgICAgICBpZiAoc2hvd1RyaWdnZXJbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICBzaG93VHJpZ2dlcltpXS50ZXh0Q29udGVudCA9ICdTZWUgbGVzcydcclxuICAgICAgICAgIHNob3dJdGVtLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd1RyaWdnZXJbaV0udGV4dENvbnRlbnQgPSAnU2VlIGFsbCdcclxuICAgICAgICAgIHNob3dJdGVtLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsZXQgb2Zmc2V0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fbGlzdCcpLm9mZnNldEhlaWdodFxyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS10cmVhdG1lbnRzLWRyb3Bkb3duLW9mZnNldFwiLCBvZmZzZXRJdGVtICsgXCJweFwiKVxyXG4gICAgXHJcbiAgICAvLyBUcmVhdG1lbnRzIHBhZ2UgdGFicyBuYXZpZ2F0aW9uXHJcbiAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duICYmIHRyZWF0bWVudHNEcm9wZG93bkxpc3QpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0gKyA2NCApIHtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LmFkZChcIm9mZnNldC10b3BcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LnJlbW92ZShcIm9mZnNldC10b3BcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuICAgICAgICAgIHNsaWRlVG9nZ2xlKHRyZWF0bWVudHNEcm9wZG93bkxpc3QsIDMwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBPcGVuaW5nIG1vYmlsZSBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwianMtbG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25zICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgIC8vICQoJy50ZWNobm9sb2d5X193cmFwcGVyIC50ZWNobm9sb2d5LWNhcmQnKS5ub3QoJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIuc2Vjb25kYXJ5IC50ZWNobm9sb2d5LWNhcmQnKSkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb2NrIHNsaWRlciAnVHJlYXRtZW50cydcclxuICAgIGNvbnN0IHNsaWRlclRyZWF0bWVudHMgPSBuZXcgU3dpcGVyKCcudHJlYXRtZW50cy1zbGlkZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLXByZXZcIixcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi50cmVhdG1lbnRzLXBhZ2luYXRpb25cIixcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnUHJhY3RpY2VzJ1xyXG4gIGNvbnN0IHNsaWRlclByYWN0aWNlcyA9IG5ldyBTd2lwZXIoJy5wcmFjdGljZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIucHJhY3RpY2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnVGVzdGltb25pYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclRlc3RpbW9uaWFscyA9IG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnRlc3RpbW9uaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdDYXNlcydcclxuICBjb25zdCBzbGlkZXJDYXNlcyA9IG5ldyBTd2lwZXIoJy5jYXNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5jYXNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmNhc2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuY2FzZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdTb2NpYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclNvY2lhbHMgPSBuZXcgU3dpcGVyKCcuc29jaWFsc19fc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuc29jaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnNvY2lhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zb2NpYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCIvLyBBdXRvIHNpemUgdGV4dGFyZWEgPT09PT0+XHJcbnZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblxyXG5pZiAodGV4dGFyZWEpIHtcclxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXV0b3NpemVUZXh0YXJlYSk7XHJcbn0gZWxzZSB7XHJcbiAgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBhdXRvc2l6ZVRleHRhcmVhKCl7XHJcblx0dmFyIGVsID0gdGhpcztcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDphdXRvOyBwYWRkaW5nOjAnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICctbW96LWJveC1zaXppbmc6Y29udGVudC1ib3gnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6JyArIGVsLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0fSwwKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIHNlbGVjdCA9PT09PT5cclxuJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyksIG51bWJlck9mT3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuXHJcbiAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdF9faGlkZGVuJyk7IFxyXG4gICR0aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3RcIj48L2Rpdj4nKTtcclxuICAkdGhpcy5hZnRlcignPGRpdiBjbGFzcz1cInNlbGVjdF9fc3R5bGVkXCI+PC9kaXY+Jyk7XHJcblxyXG4gIHZhciAkc3R5bGVkU2VsZWN0ID0gJHRoaXMubmV4dCgnZGl2LnNlbGVjdF9fc3R5bGVkJyk7XHJcbiAgJHN0eWxlZFNlbGVjdC5hcHBlbmQoJzxzcGFuPjwvc3Bhbj48aSBjbGFzcz1cImljb24tYXJyb3ctZHJvcGRvd25cIj48L2k+JylcclxuICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcSgwKS50ZXh0KCkpO1xyXG5cclxuICB2YXIgJGxpc3QgPSAkKCc8dWwgLz4nLCB7XHJcbiAgICAnY2xhc3MnOiAnc2VsZWN0X19vcHRpb25zJ1xyXG4gIH0pLmluc2VydEFmdGVyKCRzdHlsZWRTZWxlY3QpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAkKCc8bGkgLz4nLCB7XHJcbiAgICAgIHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS50ZXh0KCksXHJcbiAgICAgIHJlbDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnZhbCgpXHJcbiAgICB9KS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgfVxyXG5cclxuICB2YXIgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cclxuICAkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKCdkaXYuc2VsZWN0X19zdHlsZWQuYWN0aXZlJykubm90KHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0X19vcHRpb25zJykuc2xpZGVVcCgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkbGlzdEl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykudGV4dCgpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJHN0eWxlZFNlbGVjdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG59KTsiLG51bGxdfQ==