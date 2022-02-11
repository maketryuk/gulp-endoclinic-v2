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
  } // Ломает всё!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
  // Media 992 =====>


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

    $('.technology-card').click(function () {
      $(".technology-card").not($(this).closest(".technology-card")).removeClass("js-active");
      $(this).closest(".technology-card").addClass("js-active");

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

    var _loop2 = function _loop2(_i) {
      technologyCard[_i].addEventListener("click", function () {
        // Remove class from all elements
        technologyCard.forEach(function (element) {
          element.classList.remove("js-active");
        }); // Add class to the element that was clicked

        technologyCard[_i].classList.add("js-active");
      });
    };

    for (var _i = 0; _i < technologyCard.length; _i++) {
      _loop2(_i);
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
  $styledSelect.text($this.children('option').eq(0).text());
  $styledSelect.append('<i class="icon-arrow-dropdown"></i>');
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
    $styledSelect.text($(this).text()).removeClass('active');
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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Custom scrollbar in tooth table =====>
document.addEventListener("DOMContentLoaded", function () {
  OverlayScrollbars(document.querySelectorAll(".tooth"), {});
}); // Input Files =====>

var dt = new DataTransfer();
$(".files-trigger__input").on('change', function (e) {
  for (var i = 0; i < this.files.length; i++) {
    var filesWrapper = $('<div/>', {
      class: 'files__wrapper'
    });
    var filesItem = $('<div/>', {
      class: 'files-item'
    }),
        fileName = $('<span/>', {
      class: 'files-item__name',
      text: this.files.item(i).name
    });
    filesItem.append('<i class="icon-file"></i>').append(fileName).append('<i class="files-item__remove icon-trash-can"></i>');
    filesWrapper.append(filesItem);
    $(".files__table").append(filesWrapper).css('display', 'flex');
    $('.files').css('margin-bottom', '48px');
  }

  ;

  var _iterator = _createForOfIteratorHelper(this.files),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var file = _step.value;
      dt.items.add(file);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  this.files = dt.files;
  $('.files-item__remove').click(function () {
    var name = $(this).next('.files-item__name').text();
    $(this).parents('.files__wrapper').remove();

    for (var _i = 0; _i < dt.items.length; _i++) {
      if (name === dt.items[_i].getAsFile().name) {
        dt.items.remove(_i);
        continue;
      }
    }

    document.getElementsByClassName('files-trigger__input').files = dt.files;
  });
});
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJibG9ja3MvaGVhZGVyL2pzLmpzIiwiVUkvY29udGFjdHMtZm9ybS9jb250YWN0cy1mb3JtLmpzIiwiYmxvY2tzL2Fib3V0LXBhZ2UvYWJvdXQvYWJvdXQuanMiLCJibG9ja3MvY29udGFjdHMtcGFnZS9jb250YWN0cy9jb250YWN0cy5qcyIsImJsb2Nrcy9yZWZlcmluZy1wYWdlL2NvbnRhY3RzL2NvbnRhY3RzLmpzIiwiYmxvY2tzL3RyZWF0bWVudHMtcGFnZS90cmVhdG1lbnRzL3RyZWF0bWVudHMuanMiXSwibmFtZXMiOlsic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsImJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRlY2hub2xvZ3lDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsInRlY2hub2xvZ3lDYXJkQm9keSIsInRhYkNvbnRlbnQiLCJ0YWJJdGVtIiwidGFiRHJvcGRvd25UcmlnZ2VyIiwidHJlYXRtZW50c0Ryb3Bkb3duIiwidHJlYXRtZW50c0Ryb3Bkb3duTGlzdCIsInNjcm9sbENoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGwiLCIkIiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaSIsImZvckVhY2giLCJpdGVtIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImNvbnRhaW5zIiwiY2xpY2siLCJub3QiLCJjbG9zZXN0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwiZmluZCIsImhvbWVwYWdlY2hlY2siLCJjaGVjayIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwic2VjdGlvbnMiLCJ1dGlscyIsInRvQXJyYXkiLCJtYXhXaWR0aCIsImdldE1heFdpZHRoIiwic2VjdGlvbiIsIm9mZnNldFdpZHRoIiwidHJpZ2dlckl0ZW0iLCJ0byIsIngiLCJpbm5lcldpZHRoIiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJzdGFydCIsInRyaWdnZXIiLCJwaW4iLCJzY3J1YiIsImVuZCIsImludmFsaWRhdGVPblJlZnJlc2giLCJzY3QiLCJjcmVhdGUiLCJvZmZzZXRMZWZ0IiwidG9nZ2xlQ2xhc3MiLCJ0YXJnZXRzIiwiY2xhc3NOYW1lIiwib2Zmc2V0SXRlbTEiLCJzY3JvbGxZIiwidG9nZ2xlIiwiYm9keSIsImVsZW1lbnQiLCJzbGlkZXJUcmVhdG1lbnRzIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwYWdpbmF0aW9uIiwiZWwiLCJicmVha3BvaW50cyIsInNsaWRlclByYWN0aWNlcyIsInNsaWRlclRlc3RpbW9uaWFscyIsImxvb3AiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlckNhc2VzIiwic2xpZGVyU29jaWFscyIsInRleHRhcmVhIiwiYXV0b3NpemVUZXh0YXJlYSIsImNzc1RleHQiLCJzY3JvbGxIZWlnaHQiLCJlYWNoIiwiJHRoaXMiLCJudW1iZXJPZk9wdGlvbnMiLCJjaGlsZHJlbiIsIndyYXAiLCJhZnRlciIsIiRzdHlsZWRTZWxlY3QiLCJuZXh0IiwidGV4dCIsImVxIiwiYXBwZW5kIiwiJGxpc3QiLCJpbnNlcnRBZnRlciIsInJlbCIsInZhbCIsImFwcGVuZFRvIiwiJGxpc3RJdGVtcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJhdHRyIiwicGFyZW50IiwiT3ZlcmxheVNjcm9sbGJhcnMiLCJkdCIsIkRhdGFUcmFuc2ZlciIsIm9uIiwiZmlsZXMiLCJmaWxlc1dyYXBwZXIiLCJjbGFzcyIsImZpbGVzSXRlbSIsImZpbGVOYW1lIiwibmFtZSIsImNzcyIsImZpbGUiLCJpdGVtcyIsInBhcmVudHMiLCJnZXRBc0ZpbGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsTUFBRCxFQUEwQjtBQUFBLE1BQWpCQyxRQUFpQix1RUFBUixHQUFRO0FBRXRDRCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsa0JBQWIsR0FBa0MseUJBQWxDO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRSxrQkFBYixHQUFrQ0gsUUFBUSxHQUFHLElBQTdDO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRyxNQUFiLEdBQXNCTCxNQUFNLENBQUNNLFlBQVAsR0FBc0IsSUFBNUM7QUFDQU4sRUFBQUEsTUFBTSxDQUFDTSxZQUFQO0FBQ0FOLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhSyxRQUFiLEdBQXdCLFFBQXhCO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRyxNQUFiLEdBQXNCLENBQXRCO0FBQ0FMLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTSxVQUFiLEdBQTBCLENBQTFCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhTyxhQUFiLEdBQTZCLENBQTdCO0FBQ0FULEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhUSxTQUFiLEdBQXlCLENBQXpCO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhUyxZQUFiLEdBQTRCLENBQTVCO0FBQ0FDLEVBQUFBLE1BQU0sQ0FBQ0MsVUFBUCxDQUFtQixZQUFNO0FBQ25CYixJQUFB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LENBQVk0RyxHQUFaLENBQWdCLGVBQWhCLEVBQWlDLE1BQWpDO0FBQ0Y7O0FBQUE7O0FBWGlELDZDQVlqQyxLQUFLTixLQVo0QjtBQUFBOztBQUFBO0FBWWxELHdEQUE2QjtBQUFBLFVBQXBCTyxJQUFvQjtBQUM1QlYsTUFBQUEsRUFBRSxDQUFDVyxLQUFILENBQVMzRyxHQUFULENBQWEwRyxJQUFiO0FBQ0E7QUFkaUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlbEQsT0FBS1AsS0FBTCxHQUFhSCxFQUFFLENBQUNHLEtBQWhCO0FBRUF0RyxFQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QmEsS0FBekIsQ0FBK0IsWUFBVTtBQUN4QyxRQUFJOEYsSUFBSSxHQUFHM0csQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0YsSUFBUixDQUFhLG1CQUFiLEVBQWtDQyxJQUFsQyxFQUFYO0FBQ0FyRixJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErRyxPQUFSLENBQWdCLGlCQUFoQixFQUFtQzNHLE1BQW5DOztBQUNBLFNBQUksSUFBSUMsRUFBQyxHQUFHLENBQVosRUFBZUEsRUFBQyxHQUFHOEYsRUFBRSxDQUFDVyxLQUFILENBQVNyRyxNQUE1QixFQUFvQ0osRUFBQyxFQUFyQyxFQUF3QztBQUN2QyxVQUFHc0csSUFBSSxLQUFLUixFQUFFLENBQUNXLEtBQUgsQ0FBU3pHLEVBQVQsRUFBWTJHLFNBQVosR0FBd0JMLElBQXBDLEVBQXlDO0FBQ3hDUixRQUFBQSxFQUFFLENBQUNXLEtBQUgsQ0FBUzFHLE1BQVQsQ0FBZ0JDLEVBQWhCO0FBQ0E7QUFDQTtBQUNEOztBQUNEbkIsSUFBQUEsUUFBUSxDQUFDK0gsc0JBQVQsQ0FBZ0Msc0JBQWhDLEVBQXdEWCxLQUF4RCxHQUFnRUgsRUFBRSxDQUFDRyxLQUFuRTtBQUNBLEdBVkQ7QUFXQSxDQTVCRDtBQ1JBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTY3JvbGwgdG8gdGhlIHRvcCBiZWZvcmUgdGhlIHBhZ2UgbG9hZHNcclxuLy8gd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4vLyAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuLy8gfVxyXG5cclxubGV0IHNsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgICAvL2FsZXJ0KFwiIVwiKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbmxldCBzbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XHJcbiAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXk7XHJcbiAgaWYgKGRpc3BsYXkgPT09ICdub25lJykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG52YXIgc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgcmV0dXJuIHNsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHNsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIC8vIFZhcmlhYmVsc1xyXG4gIGxldCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuICBsZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgbGV0IHRlY2hub2xvZ3lDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktY2FyZCcpO1xyXG4gIGxldCB0ZWNobm9sb2d5Q2FyZEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JylcclxuICBsZXQgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19faXRlbVwiKTtcclxuICBsZXQgdGFiSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFic19fdHJpZ2dlclwiKTtcclxuICBsZXQgdGFiRHJvcGRvd25UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fdHJpZ2dlciAuZHJvcGRvd25fX3RyaWdnZXItdGV4dFwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93blwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX2xpc3RcIilcclxuXHJcbiAgLy8gTWFuaXB1bGF0aW9ucyB3aXRoIGhlYWRlciBjbGFzc2VzIG9uIHNjcm9sbFxyXG4gIGxldCBzY3JvbGxDaGFuZ2UgPSAxO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICBsZXQgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmIChzY3JvbGwgPj0gc2Nyb2xsQ2hhbmdlKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLXRvcFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLXRvcFwiKTtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtZG93blwiLCBcImpzLW5hdi1vcGVuXCIsIFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBUcmVhdG1lbnRzIHBhZ2UgdGFic1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFiSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgdGFiQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhYkl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIHRhYkl0ZW1baV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAvLyDQm9C+0LzQsNC10YIg0LLRgdGRISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAvLyB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcblxyXG4gIC8vIE1lZGlhIDk5MiA9PT09PT5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5OTJweClcIikubWF0Y2hlcykge1xyXG4gICAgLy8gT3BlbmluZyBkZXNrdG9wIG1lbnUgd2l0aCBidXJnZXJcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImpzLW5hdi1vcGVuXCIpKSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuaW5nIHRlY2hub2xvZ3kgYWNjb3JkaW9uXHJcbiAgICAkKCcudGVjaG5vbG9neS1jYXJkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnRlY2hub2xvZ3ktY2FyZFwiKS5ub3QoJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3ktY2FyZFwiKSkucmVtb3ZlQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdChcIi50ZWNobm9sb2d5LWNhcmRcIikuYWRkQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdqcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5ub3QoJCh0aGlzKS5maW5kKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JykpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5zbGlkZURvd24oMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKCdqcy1hY3RpdmUnKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgIC8vICAgICBzbGlkZURvd24odGVjaG5vbG9neUNhcmRCb2R5W2ldLCAzMDApXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICAvLyBDaGVja2luZyBpZiB0aGUgYWN0aXZlIHBhZ2UgaXMgdGhlIGhvbWUgcGFnZVxyXG4gICAgd2luZG93LmhvbWVwYWdlY2hlY2sgPSAoKSA9PiB7XHJcbiAgICAgIHZhciBjaGVjayA9IGZhbHNlO1xyXG4gICAgICBpZihkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIgfHwgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2luZGV4Lmh0bWxcIil7XHJcbiAgICAgICAgY2hlY2s9dHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuICBcclxuICAgIGlmKHdpbmRvdy5ob21lcGFnZWNoZWNrKCkpe1xyXG4gICAgICAvLyBIb3Jpem9udGFsIHNjcm9sbCBpbiBUcmVhdG1lbnRzID09PT09PlxyXG4gICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG4gIFxyXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IGdzYXAudXRpbHMudG9BcnJheShcIi50cmVhdG1lbnRzLWhvcml6b250YWxcIik7XHJcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGdldE1heFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIG1heFdpZHRoID0gMDtcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBtYXhXaWR0aCArPSBzZWN0aW9uLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBnZXRNYXhXaWR0aCgpO1xyXG4gICAgICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoSW5pdFwiLCBnZXRNYXhXaWR0aCk7XHJcbiAgXHJcbiAgICAgIGxldCB0cmlnZ2VySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJyk7XHJcbiAgXHJcbiAgICAgIGdzYXAudG8oc2VjdGlvbnMsIHtcclxuICAgICAgICB4OiAoKSA9PiBgLSR7bWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aH1gLFxyXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxyXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgIHN0YXJ0OiBcIi0xMjBweCB0b3BcIixcclxuICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXJJdGVtLFxyXG4gICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgc2NydWI6IHRydWUsXHJcbiAgICAgICAgICBlbmQ6ICgpID0+IGArPSR7bWF4V2lkdGh9YCxcclxuICAgICAgICAgIGludmFsaWRhdGVPblJlZnJlc2g6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKChzY3QsIGkpID0+IHtcclxuICAgICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICB0cmlnZ2VyOiBzY3QsXHJcbiAgICAgICAgICBzdGFydDogKCkgPT4gJ3RvcCB0b3AtPScgKyAoc2N0Lm9mZnNldExlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aC8yKSAqIChtYXhXaWR0aCAvIChtYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSksXHJcbiAgICAgICAgICBlbmQ6ICgpID0+ICcrPScgKyBzY3Qub2Zmc2V0V2lkdGggKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgdG9nZ2xlQ2xhc3M6IHt0YXJnZXRzOiBzY3QsIGNsYXNzTmFtZTogXCJhY3RpdmVcIn1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBudWxsXHJcbiAgICB9XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBUcmVhdG1lbnRzIHBhZ2UgdGFicyBuYXZpZ2F0aW9uXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgIGxldCBvZmZzZXRJdGVtMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKS5vZmZzZXRIZWlnaHRcclxuICBcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gb2Zmc2V0SXRlbTEgKyA2NCApIHtcclxuICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0cmVhdG1lbnRzRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuICAgICAgICBzbGlkZVRvZ2dsZSh0cmVhdG1lbnRzRHJvcGRvd25MaXN0LCAzMDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG51bGxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyBtb2JpbGUgbWVudSB3aXRoIGJ1cmdlclxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuaW5nIHRlY2hub2xvZ3kgYWNjb3JkaW9ucyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAvLyAkKCcudGVjaG5vbG9neV9fd3JhcHBlciAudGVjaG5vbG9neS1jYXJkJykubm90KCQoJy50ZWNobm9sb2d5X193cmFwcGVyLnNlY29uZGFyeSAudGVjaG5vbG9neS1jYXJkJykpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWNobm9sb2d5Q2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSBjbGFzcyBmcm9tIGFsbCBlbGVtZW50c1xyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCbG9jayBzbGlkZXIgJ1RyZWF0bWVudHMnXHJcbiAgICBjb25zdCBzbGlkZXJUcmVhdG1lbnRzID0gbmV3IFN3aXBlcignLnRyZWF0bWVudHMtc2xpZGVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBcIi50cmVhdG1lbnRzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgcHJldkVsOiBcIi50cmVhdG1lbnRzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIudHJlYXRtZW50cy1wYWdpbmF0aW9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1ByYWN0aWNlcydcclxuICBjb25zdCBzbGlkZXJQcmFjdGljZXMgPSBuZXcgU3dpcGVyKCcucHJhY3RpY2VzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnByYWN0aWNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnByYWN0aWNlcy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnByYWN0aWNlcy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1Rlc3RpbW9uaWFscydcclxuICBjb25zdCBzbGlkZXJUZXN0aW1vbmlhbHMgPSBuZXcgU3dpcGVyKCcudGVzdGltb25pYWxzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi50ZXN0aW1vbmlhbHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi50ZXN0aW1vbmlhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi50ZXN0aW1vbmlhbHMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnQ2FzZXMnXHJcbiAgY29uc3Qgc2xpZGVyQ2FzZXMgPSBuZXcgU3dpcGVyKCcuY2FzZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuY2FzZXMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5jYXNlcy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLmNhc2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnU29jaWFscydcclxuICBjb25zdCBzbGlkZXJTb2NpYWxzID0gbmV3IFN3aXBlcignLnNvY2lhbHNfX3NsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnNvY2lhbHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zb2NpYWxzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc29jaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG59XHJcbiIsbnVsbCwiLy8gQXV0byBzaXplIHRleHRhcmVhID09PT09PlxyXG52YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cclxuaWYgKHRleHRhcmVhKSB7XHJcbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGF1dG9zaXplVGV4dGFyZWEpO1xyXG59IGVsc2Uge1xyXG4gIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gYXV0b3NpemVUZXh0YXJlYSgpe1xyXG5cdHZhciBlbCA9IHRoaXM7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6YXV0bzsgcGFkZGluZzowJztcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnLW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94JztcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OicgKyBlbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdH0sMCk7XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBzZWxlY3QgPT09PT0+XHJcbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBudW1iZXJPZk9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKS5sZW5ndGg7XHJcblxyXG4gICR0aGlzLmFkZENsYXNzKCdzZWxlY3RfX2hpZGRlbicpOyBcclxuICAkdGhpcy53cmFwKCc8ZGl2IGNsYXNzPVwic2VsZWN0XCI+PC9kaXY+Jyk7XHJcbiAgJHRoaXMuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzZWxlY3RfX3N0eWxlZFwiPjwvZGl2PicpO1xyXG5cclxuICB2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3RfX3N0eWxlZCcpO1xyXG4gICRzdHlsZWRTZWxlY3QudGV4dCgkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoMCkudGV4dCgpKTtcclxuICAkc3R5bGVkU2VsZWN0LmFwcGVuZCgnPGkgY2xhc3M9XCJpY29uLWFycm93LWRyb3Bkb3duXCI+PC9pPicpXHJcblxyXG4gIHZhciAkbGlzdCA9ICQoJzx1bCAvPicsIHtcclxuICAgICdjbGFzcyc6ICdzZWxlY3RfX29wdGlvbnMnXHJcbiAgfSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICQoJzxsaSAvPicsIHtcclxuICAgICAgdGV4dDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnRleHQoKSxcclxuICAgICAgcmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuICAgIH0pLmFwcGVuZFRvKCRsaXN0KTtcclxuICB9XHJcblxyXG4gIHZhciAkbGlzdEl0ZW1zID0gJGxpc3QuY2hpbGRyZW4oJ2xpJyk7XHJcblxyXG4gICRzdHlsZWRTZWxlY3QuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICQoJ2Rpdi5zZWxlY3RfX3N0eWxlZC5hY3RpdmUnKS5ub3QodGhpcykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVVwKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdF9fb3B0aW9ucycpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRsaXN0SXRlbXMuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRzdHlsZWRTZWxlY3QudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJHRoaXMudmFsKCQodGhpcykuYXR0cigncmVsJykpO1xyXG4gICAgJGxpc3Quc2xpZGVVcCgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICRzdHlsZWRTZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJGxpc3Quc2xpZGVVcCgzMDApO1xyXG4gIH0pO1xyXG5cclxufSk7IixudWxsLCIkKCcuc2hvd19fdHJpZ2dlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zaG93X19pdGVtJykudG9nZ2xlKClcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdqcy1hY3RpdmUnKVxyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdqcy1hY3RpdmUnKSkge1xyXG4gICAgJCh0aGlzKS5maW5kKCdzcGFuJykudGV4dCgnU2VlIGxlc3MnKVxyXG4gIH0gZWxzZSB7XHJcbiAgICAkKHRoaXMpLmZpbmQoJ3NwYW4nKS50ZXh0KCdTZWUgYWxsJylcclxuICB9XHJcbn0pIiwiLy8gQ3VzdG9tIHNjcm9sbGJhciBpbiB0b290aCB0YWJsZSA9PT09PT5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0T3ZlcmxheVNjcm9sbGJhcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b290aFwiKSwge30pO1xyXG59KTtcclxuXHJcbi8vIElucHV0IEZpbGVzID09PT09PlxyXG5jb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHJcbiQoXCIuZmlsZXMtdHJpZ2dlcl9faW5wdXRcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbGVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdGxldCBmaWxlc1dyYXBwZXIgPSAkKCc8ZGl2Lz4nLCB7Y2xhc3M6ICdmaWxlc19fd3JhcHBlcid9KTtcclxuICAgIGxldCBmaWxlc0l0ZW0gPSAkKCc8ZGl2Lz4nLCB7Y2xhc3M6ICdmaWxlcy1pdGVtJ30pLFxyXG5cdFx0XHRmaWxlTmFtZSA9ICQoJzxzcGFuLz4nLCB7Y2xhc3M6ICdmaWxlcy1pdGVtX19uYW1lJywgdGV4dDogdGhpcy5maWxlcy5pdGVtKGkpLm5hbWV9KTtcclxuXHRcdGZpbGVzSXRlbS5hcHBlbmQoJzxpIGNsYXNzPVwiaWNvbi1maWxlXCI+PC9pPicpXHJcblx0XHRcdC5hcHBlbmQoZmlsZU5hbWUpXHJcbiAgICAgIC5hcHBlbmQoJzxpIGNsYXNzPVwiZmlsZXMtaXRlbV9fcmVtb3ZlIGljb24tdHJhc2gtY2FuXCI+PC9pPicpO1xyXG4gICAgZmlsZXNXcmFwcGVyLmFwcGVuZChmaWxlc0l0ZW0pXHJcblx0XHQkKFwiLmZpbGVzX190YWJsZVwiKS5hcHBlbmQoZmlsZXNXcmFwcGVyKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG4gICAgJCgnLmZpbGVzJykuY3NzKCdtYXJnaW4tYm90dG9tJywgJzQ4cHgnKVxyXG5cdH07XHJcblx0Zm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVzKSB7XHJcblx0XHRkdC5pdGVtcy5hZGQoZmlsZSk7XHJcblx0fVxyXG5cdHRoaXMuZmlsZXMgPSBkdC5maWxlcztcclxuXHJcblx0JCgnLmZpbGVzLWl0ZW1fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbmFtZSA9ICQodGhpcykubmV4dCgnLmZpbGVzLWl0ZW1fX25hbWUnKS50ZXh0KCk7XHJcblx0XHQkKHRoaXMpLnBhcmVudHMoJy5maWxlc19fd3JhcHBlcicpLnJlbW92ZSgpO1xyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGR0Lml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYobmFtZSA9PT0gZHQuaXRlbXNbaV0uZ2V0QXNGaWxlKCkubmFtZSl7XHJcblx0XHRcdFx0ZHQuaXRlbXMucmVtb3ZlKGkpO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmaWxlcy10cmlnZ2VyX19pbnB1dCcpLmZpbGVzID0gZHQuZmlsZXM7XHJcblx0fSk7XHJcbn0pOyIsbnVsbF19