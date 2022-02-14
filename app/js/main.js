"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiLCJibG9ja3MvdHJlYXRtZW50cy1wYWdlL3RyZWF0bWVudHMvdHJlYXRtZW50cy5qcyJdLCJuYW1lcyI6WyJzbGlkZVVwIiwidGFyZ2V0IiwiZHVyYXRpb24iLCJzdHlsZSIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiZGlzcGxheSIsInJlbW92ZVByb3BlcnR5Iiwic2xpZGVEb3duIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNsaWRlVG9nZ2xlIiwib25sb2FkIiwiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwidGVjaG5vbG9neUNhcmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGVjaG5vbG9neUNhcmRCb2R5IiwidGFiQ29udGVudCIsInRhYkl0ZW0iLCJ0YWJEcm9wZG93blRyaWdnZXIiLCJ0cmVhdG1lbnRzRHJvcGRvd24iLCJ0cmVhdG1lbnRzRHJvcGRvd25MaXN0IiwibGlua3MiLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJvZmZzZXRUb3AiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsInNjcm9sbENoYW5nZSIsIiQiLCJzY3JvbGxUb3AiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJpIiwiZm9yRWFjaCIsIml0ZW0iLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsIk92ZXJsYXlTY3JvbGxiYXJzIiwiZmlsZXNUcmlnZ2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWxlc1RhYmxlIiwidXBkYXRlRmlsZXNMaXN0IiwiY2hpbGRyZW4iLCJmaWxlcyIsIm5hbWUiLCJpbm5lckhUTUwiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNvbnRhaW5zIiwiY2xpY2siLCJub3QiLCJjbG9zZXN0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwiZmluZCIsImhvbWVwYWdlY2hlY2siLCJjaGVjayIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwic2VjdGlvbnMiLCJ1dGlscyIsInRvQXJyYXkiLCJtYXhXaWR0aCIsImdldE1heFdpZHRoIiwic2VjdGlvbiIsIm9mZnNldFdpZHRoIiwidHJpZ2dlckl0ZW0iLCJ0byIsIngiLCJpbm5lcldpZHRoIiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJzdGFydCIsInRyaWdnZXIiLCJwaW4iLCJzY3J1YiIsImVuZCIsImludmFsaWRhdGVPblJlZnJlc2giLCJzY3QiLCJjcmVhdGUiLCJvZmZzZXRMZWZ0IiwidG9nZ2xlQ2xhc3MiLCJ0YXJnZXRzIiwiY2xhc3NOYW1lIiwic2hvd1RyaWdnZXIiLCJzaG93SXRlbSIsInRvZ2dsZSIsImVsZW1lbnQiLCJvZmZzZXRJdGVtMSIsInNjcm9sbFkiLCJib2R5Iiwic2xpZGVyVHJlYXRtZW50cyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXJQcmFjdGljZXMiLCJzbGlkZXJUZXN0aW1vbmlhbHMiLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXJDYXNlcyIsInNsaWRlclNvY2lhbHMiLCJ0ZXh0YXJlYSIsImF1dG9zaXplVGV4dGFyZWEiLCJjc3NUZXh0Iiwic2Nyb2xsSGVpZ2h0IiwiZWFjaCIsIiR0aGlzIiwibnVtYmVyT2ZPcHRpb25zIiwid3JhcCIsImFmdGVyIiwiJHN0eWxlZFNlbGVjdCIsIm5leHQiLCJhcHBlbmQiLCJ0ZXh0IiwiZXEiLCIkbGlzdCIsImluc2VydEFmdGVyIiwicmVsIiwidmFsIiwiYXBwZW5kVG8iLCIkbGlzdEl0ZW1zIiwic3RvcFByb3BhZ2F0aW9uIiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBMEI7QUFBQSxNQUFqQkMsUUFBaUIsdUVBQVIsR0FBUTtBQUV0Q0QsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFDLGtCQUFiLEdBQWtDLHlCQUFsQztBQUNBSCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUUsa0JBQWIsR0FBa0NILFFBQVEsR0FBRyxJQUE3QztBQUNBRCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUcsTUFBYixHQUFzQkwsTUFBTSxDQUFDTSxZQUFQLEdBQXNCLElBQTVDO0FBQ0FOLEVBQUFBLE1BQU0sQ0FBQ00sWUFBUDtBQUNBTixFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUssUUFBYixHQUF3QixRQUF4QjtBQUNBUCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUcsTUFBYixHQUFzQixDQUF0QjtBQUNBTCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYU0sVUFBYixHQUEwQixDQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYU8sYUFBYixHQUE2QixDQUE3QjtBQUNBVCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYVEsU0FBYixHQUF5QixDQUF6QjtBQUNBVixFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYVMsWUFBYixHQUE0QixDQUE1QjtBQUNBQyxFQUFBQSxNQUFNLENBQUNDLFVBQVAsQ0FBbUIsWUFBTTtBQUNuQmIsSUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFZLE9BQWIsR0FBdUIsTUFBdkI7QUFDQWQsSUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFhLGNBQWIsQ0FBNEIsUUFB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LEVBQUFBLENBQUMsQ0FBQ3hCLFFBQUQsQ0FBRCxDQUFZOEMsS0FBWixDQUFrQixZQUFXO0FBQzNCdUUsSUFBQUEsYUFBYSxDQUFDcEUsV0FBZCxDQUEwQixRQUExQjtBQUNBeUUsSUFBQUEsS0FBSyxDQUFDaEosT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUhEO0FBS0QsQ0E1Q0Q7QUNuQkEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcm9sbCB0byB0aGUgdG9wIGJlZm9yZSB0aGUgcGFnZSBsb2Fkc1xyXG4vLyB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4vLyB9XHJcblxyXG5sZXQgc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uPTUwMCkgPT4ge1xyXG5cclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICAgIC8vYWxlcnQoXCIhXCIpO1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxubGV0IHNsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uPTUwMCkgPT4ge1xyXG5cclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcclxuICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheTtcclxuICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSBkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luLCBwYWRkaW5nXCI7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbnZhciBzbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICByZXR1cm4gc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gVmFyaWFiZWxzXHJcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBsZXQgdGVjaG5vbG9neUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkJyk7XHJcbiAgbGV0IHRlY2hub2xvZ3lDYXJkQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKVxyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19pdGVtXCIpO1xyXG4gIGxldCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX190cmlnZ2VyXCIpO1xyXG4gIGxldCB0YWJEcm9wZG93blRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX190cmlnZ2VyIC5kcm9wZG93bl9fdHJpZ2dlci10ZXh0XCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duXCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fbGlzdFwiKVxyXG5cclxuICAvLyBTY3JvbGwgdG8gY29udGFjdHMtZm9ybVxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItY29udGFjdHNfX2xpbmtcIik7XHJcblxyXG4gIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKS5vZmZzZXRUb3A7XHJcblxyXG4gICAgc2Nyb2xsKHtcclxuICAgICAgdG9wOiBvZmZzZXRUb3AgLSAxMDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmlwdWxhdGlvbnMgd2l0aCBoZWFkZXIgY2xhc3NlcyBvbiBzY3JvbGxcclxuICBsZXQgc2Nyb2xsQ2hhbmdlID0gMTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IHNjcm9sbENoYW5nZSkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIiwgXCJqcy1uYXYtb3BlblwiLCBcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVGFic1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFiSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgdGFiQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhYkl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIHRhYkl0ZW1baV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICAgIH0pO1xyXG4gIH0gXHJcbiAgXHJcbiAgaWYgKHRhYkRyb3Bkb3duVHJpZ2dlcikge1xyXG4gICAgdGFiRHJvcGRvd25UcmlnZ2VyLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX190cmlnZ2VyLmpzLWFjdGl2ZVwiKS50ZXh0Q29udGVudFxyXG4gIH1cclxuICAvLyBDdXN0b20gc2Nyb2xsYmFyIGluIHRvb3RoIHRhYmxlXHJcbiAgT3ZlcmxheVNjcm9sbGJhcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b290aFwiKSwge30pO1xyXG5cclxuICAvLyBGaWxlcyBpbnB1dFxyXG4gIGxldCBmaWxlc1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xyXG4gIGxldCBmaWxlc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGVzX190YWJsZScpO1xyXG4gIFxyXG4gIGxldCB1cGRhdGVGaWxlc0xpc3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlc1RyaWdnZXIuZmlsZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgY2hpbGRyZW4gKz0gICc8ZGl2IGNsYXNzPVwiZmlsZXNfX3dyYXBwZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJmaWxlcy1pdGVtXCI+JyArICc8aSBjbGFzcz1cImljb24tZmlsZVwiPjwvaT4nICsgJzxzcGFuIGNsYXNzPVwiZmlsZXMtaXRlbV9fbmFtZVwiPicgKyBmaWxlc1RyaWdnZXIuZmlsZXMuaXRlbShpKS5uYW1lICsgJzwvc3Bhbi8+JyArICc8aSBjbGFzcz1cImZpbGVzLWl0ZW1fX3JlbW92ZSBpY29uLXRyYXNoLWNhblwiIG9uY2xpY2s9XCJyZXR1cm4gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XCI+PC9pPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nXHJcbiAgICB9XHJcbiAgICBmaWxlc1RhYmxlLmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZmlsZXNUcmlnZ2VyKSB7XHJcbiAgICBmaWxlc1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgIHVwZGF0ZUZpbGVzTGlzdCgpXHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxuICAvLyBNZWRpYSA5OTIgPT09PT0+XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIC8vIE9wZW5pbmcgZGVza3RvcCBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1uYXYtb3BlblwiKSkge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyB0ZWNobm9sb2d5IGFjY29yZGlvblxyXG4gICAgJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5ub3QoJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikpLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5hZGRDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLm5vdCgkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKSkuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGVjaG5vbG9neUNhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgdGVjaG5vbG9neUNhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoJ2pzLWFjdGl2ZScpO1xyXG5cclxuICAgIC8vICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgLy8gICAgIHNsaWRlRG93bih0ZWNobm9sb2d5Q2FyZEJvZHlbaV0sIDMwMClcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIENoZWNraW5nIGlmIHRoZSBhY3RpdmUgcGFnZSBpcyB0aGUgaG9tZSBwYWdlXHJcbiAgICB3aW5kb3cuaG9tZXBhZ2VjaGVjayA9ICgpID0+IHtcclxuICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgIGlmKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvaW5kZXguaHRtbFwiKXtcclxuICAgICAgICBjaGVjaz10cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaWYod2luZG93LmhvbWVwYWdlY2hlY2soKSl7XHJcbiAgICAgIC8vIEhvcml6b250YWwgc2Nyb2xsIGluIFRyZWF0bWVudHMgPT09PT0+XHJcbiAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnRyZWF0bWVudHMtaG9yaXpvbnRhbFwiKTtcclxuICAgICAgbGV0IG1heFdpZHRoID0gMDtcclxuICBcclxuICAgICAgY29uc3QgZ2V0TWF4V2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgbWF4V2lkdGggPSAwO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIG1heFdpZHRoICs9IHNlY3Rpb24ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldE1heFdpZHRoKCk7XHJcbiAgICAgIFNjcm9sbFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlZnJlc2hJbml0XCIsIGdldE1heFdpZHRoKTtcclxuICBcclxuICAgICAgbGV0IHRyaWdnZXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKTtcclxuICBcclxuICAgICAgZ3NhcC50byhzZWN0aW9ucywge1xyXG4gICAgICAgIHg6ICgpID0+IGAtJHttYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRofWAsXHJcbiAgICAgICAgZWFzZTogXCJub25lXCIsXHJcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgc3RhcnQ6IFwiLTEyMHB4IHRvcFwiLFxyXG4gICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlckl0ZW0sXHJcbiAgICAgICAgICBwaW46IHRydWUsXHJcbiAgICAgICAgICBzY3J1YjogdHJ1ZSxcclxuICAgICAgICAgIGVuZDogKCkgPT4gYCs9JHttYXhXaWR0aH1gLFxyXG4gICAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNjdCwgaSkgPT4ge1xyXG4gICAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICAgIHRyaWdnZXI6IHNjdCxcclxuICAgICAgICAgIHN0YXJ0OiAoKSA9PiAndG9wIHRvcC09JyArIChzY3Qub2Zmc2V0TGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoLzIpICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIGVuZDogKCkgPT4gJys9JyArIHNjdC5vZmZzZXRXaWR0aCAqIChtYXhXaWR0aCAvIChtYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSksXHJcbiAgICAgICAgICB0b2dnbGVDbGFzczoge3RhcmdldHM6IHNjdCwgY2xhc3NOYW1lOiBcImFjdGl2ZVwifVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG51bGxcclxuICAgIH1cclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGVsZW1lbnRzXHJcbiAgICBsZXQgc2hvd1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX3RyaWdnZXJcIik7XHJcbiAgICBsZXQgc2hvd0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX2l0ZW1cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaG93VHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzaG93VHJpZ2dlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dUcmlnZ2VyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2pzLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIGlmIChzaG93VHJpZ2dlcltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1hY3RpdmVcIikpIHtcclxuICAgICAgICAgIHNob3dUcmlnZ2VyW2ldLnRleHRDb250ZW50ID0gJ1NlZSBsZXNzJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93VHJpZ2dlcltpXS50ZXh0Q29udGVudCA9ICdTZWUgYWxsJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBUcmVhdG1lbnRzIHBhZ2UgdGFicyBuYXZpZ2F0aW9uXHJcbiAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duICYmIHRyZWF0bWVudHNEcm9wZG93bkxpc3QpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBvZmZzZXRJdGVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHRcclxuICAgIFxyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0xICsgNjQgKSB7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhcImpzLXNjcm9sbC1kb3duXCIpKSB7XHJcbiAgICAgICAgICBzbGlkZVRvZ2dsZSh0cmVhdG1lbnRzRHJvcGRvd25MaXN0LCAzMDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuaW5nIG1vYmlsZSBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwianMtbG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25zICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgIC8vICQoJy50ZWNobm9sb2d5X193cmFwcGVyIC50ZWNobm9sb2d5LWNhcmQnKS5ub3QoJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIuc2Vjb25kYXJ5IC50ZWNobm9sb2d5LWNhcmQnKSkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb2NrIHNsaWRlciAnVHJlYXRtZW50cydcclxuICAgIGNvbnN0IHNsaWRlclRyZWF0bWVudHMgPSBuZXcgU3dpcGVyKCcudHJlYXRtZW50cy1zbGlkZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLXByZXZcIixcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi50cmVhdG1lbnRzLXBhZ2luYXRpb25cIixcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnUHJhY3RpY2VzJ1xyXG4gIGNvbnN0IHNsaWRlclByYWN0aWNlcyA9IG5ldyBTd2lwZXIoJy5wcmFjdGljZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIucHJhY3RpY2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnVGVzdGltb25pYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclRlc3RpbW9uaWFscyA9IG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnRlc3RpbW9uaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdDYXNlcydcclxuICBjb25zdCBzbGlkZXJDYXNlcyA9IG5ldyBTd2lwZXIoJy5jYXNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5jYXNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmNhc2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuY2FzZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdTb2NpYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclNvY2lhbHMgPSBuZXcgU3dpcGVyKCcuc29jaWFsc19fc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuc29jaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnNvY2lhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zb2NpYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbn0iLCIvLyBBdXRvIHNpemUgdGV4dGFyZWEgPT09PT0+XHJcbnZhciB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XHJcblxyXG5pZiAodGV4dGFyZWEpIHtcclxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgYXV0b3NpemVUZXh0YXJlYSk7XHJcbn0gZWxzZSB7XHJcbiAgbnVsbFxyXG59XHJcblxyXG5mdW5jdGlvbiBhdXRvc2l6ZVRleHRhcmVhKCl7XHJcblx0dmFyIGVsID0gdGhpcztcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDphdXRvOyBwYWRkaW5nOjAnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICctbW96LWJveC1zaXppbmc6Y29udGVudC1ib3gnO1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6JyArIGVsLnNjcm9sbEhlaWdodCArICdweCc7XHJcblx0fSwwKTtcclxufVxyXG5cclxuLy8gQ3VzdG9tIHNlbGVjdCA9PT09PT5cclxuJCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xyXG4gIHZhciAkdGhpcyA9ICQodGhpcyksIG51bWJlck9mT3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuXHJcbiAgJHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdF9faGlkZGVuJyk7IFxyXG4gICR0aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3RcIj48L2Rpdj4nKTtcclxuICAkdGhpcy5hZnRlcignPGRpdiBjbGFzcz1cInNlbGVjdF9fc3R5bGVkXCI+PC9kaXY+Jyk7XHJcblxyXG4gIHZhciAkc3R5bGVkU2VsZWN0ID0gJHRoaXMubmV4dCgnZGl2LnNlbGVjdF9fc3R5bGVkJyk7XHJcbiAgJHN0eWxlZFNlbGVjdC5hcHBlbmQoJzxzcGFuPjwvc3Bhbj48aSBjbGFzcz1cImljb24tYXJyb3ctZHJvcGRvd25cIj48L2k+JylcclxuICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcSgwKS50ZXh0KCkpO1xyXG5cclxuICB2YXIgJGxpc3QgPSAkKCc8dWwgLz4nLCB7XHJcbiAgICAnY2xhc3MnOiAnc2VsZWN0X19vcHRpb25zJ1xyXG4gIH0pLmluc2VydEFmdGVyKCRzdHlsZWRTZWxlY3QpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mT3B0aW9uczsgaSsrKSB7XHJcbiAgICAkKCc8bGkgLz4nLCB7XHJcbiAgICAgIHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS50ZXh0KCksXHJcbiAgICAgIHJlbDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnZhbCgpXHJcbiAgICB9KS5hcHBlbmRUbygkbGlzdCk7XHJcbiAgfVxyXG5cclxuICB2YXIgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cclxuICAkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkKCdkaXYuc2VsZWN0X19zdHlsZWQuYWN0aXZlJykubm90KHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0X19vcHRpb25zJykuc2xpZGVVcCgzMDApO1xyXG4gICAgfSk7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVRvZ2dsZSgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkbGlzdEl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAkc3R5bGVkU2VsZWN0LmZpbmQoJ3NwYW4nKS50ZXh0KCQodGhpcykudGV4dCgpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJHN0eWxlZFNlbGVjdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkbGlzdC5zbGlkZVVwKDMwMCk7XHJcbiAgfSk7XHJcblxyXG59KTsiLG51bGxdfQ==