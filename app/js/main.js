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
  // let filesTrigger = document.getElementById('file');

  var filesTable = document.querySelector('.files__table'); // let updateFilesList = () => {
  //   let children = "";
  //   for (let i = 0; i < filesTrigger.files.length; ++i) {
  //     children +=  '<div class="files__wrapper">' + '<div class="files-item">' + '<i class="icon-file"></i>' + '<span class="files-item__name">' + filesTrigger.files.item(i).name + '</span/>' + '<i class="files-item__remove icon-trash-can" onclick="return this.parentNode.parentNode.remove();"></i>' + '</div>' + '</div>'
  //   }
  //   filesTable.innerHTML = children;
  //   if (children.length >= 0) {
  //     filesTable.style.display = 'flex'
  //   } else {
  //     filesTable.style.display = 'none'
  //   }
  // }
  // if (filesTrigger) {
  //   filesTrigger.addEventListener("change", () => {
  //     updateFilesList()
  //   })
  // }

  var dt = new DataTransfer();
  $("#file").on('change', function (e) {
    for (var i = 0; i < this.files.length; i++) {
      var fileBloc = $('<div/>', {
        class: 'files__wrapper'
      }),
          fileName = $('<files-item/>', {
        class: 'name',
        text: this.files.item(i).name
      });
      fileBloc.append("<div class=\"files-item\"><i class=\"icon-file\"></i><span class=\"files-item__name\">".concat(this.files.item(i).name, "</span><i class=\"files-item__remove icon-trash-can\"></i><div><div>"));
      $(".files__table").append(fileBloc);
    }

    ;

    var _iterator2 = _createForOfIteratorHelper(this.files),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var file = _step2.value;
        dt.items.add(file);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    this.files = dt.files;

    if (this.files.length >= 0) {
      filesTable.style.display = 'flex';
    } else {
      filesTable.style.display = 'none';
    }

    $('.files-item__remove').click(function () {
      var name = $(this).parent().find('.files-item__name').text();
      $(this).parents('.files__wrapper').remove();

      for (var _i = 0; _i < dt.items.length; _i++) {
        if (name === dt.items[_i].getAsFile().name) {
          dt.items.remove(_i);
          continue;
        }
      }

      document.getElementById('file').files = dt.files;
    });
  }); // Media 992 =====>

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
      },
      992: {
        slidesPerView: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiXSwibmFtZXMiOlsic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsImJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRlY2hub2xvZ3lDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsInRlY2hub2xvZ3lDYXJkQm9keSIsInRhYkNvbnRlbnQiLCJ0YWJJdGVtIiwidGFiRHJvcGRvd25UcmlnZ2VyIiwidHJlYXRtZW50c0Ryb3Bkb3duIiwidHJlYXRtZW50c0Ryb3Bkb3duTGlzdCIsImxpbmtzIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwib2Zmc2V0VG9wIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJzY3JvbGxDaGFuZ2UiLCIkIiwic2Nyb2xsVG9wIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaSIsImZvckVhY2giLCJpdGVtIiwidGV4dENvbnRlbnQiLCJsZW5ndGgiLCJPdmVybGF5U2Nyb2xsYmFycyIsImZpbGVzVGFibGUiLCJkdCIsIkRhdGFUcmFuc2ZlciIsIm9uIiwiZmlsZXMiLCJmaWxlQmxvYyIsImNsYXNzIiwiZmlsZU5hbWUiLCJ0ZXh0IiwibmFtZSIsImFwcGVuZCIsImZpbGUiLCJpdGVtcyIsImNsaWNrIiwicGFyZW50IiwiZmluZCIsInBhcmVudHMiLCJnZXRBc0ZpbGUiLCJnZXRFbGVtZW50QnlJZCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29udGFpbnMiLCJub3QiLCJjbG9zZXN0IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImhhc0NsYXNzIiwiaG9yaXpvbnRhbFNjcm9sbCIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJzZWN0aW9ucyIsInV0aWxzIiwidG9BcnJheSIsIm1heFdpZHRoIiwiZ2V0TWF4V2lkdGgiLCJzZWN0aW9uIiwib2Zmc2V0V2lkdGgiLCJ0cmlnZ2VySXRlbSIsInRvIiwieCIsImlubmVyV2lkdGgiLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInN0YXJ0IiwidHJpZ2dlciIsInBpbiIsInNjcnViIiwiZW5kIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsInNjdCIsImNyZWF0ZSIsIm9mZnNldExlZnQiLCJ0b2dnbGVDbGFzcyIsInRhcmdldHMiLCJjbGFzc05hbWUiLCJzaG93VHJpZ2dlciIsInNob3dJdGVtIiwidG9nZ2xlIiwiZWxlbWVudCIsIm9mZnNldEl0ZW0iLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsInNjcm9sbFkiLCJib2R5Iiwic2xpZGVyVHJlYXRtZW50cyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXJQcmFjdGljZXMiLCJzbGlkZXJUZXN0aW1vbmlhbHMiLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXJDYXNlcyIsInNsaWRlclNvY2lhbHMiLCJ0ZXh0YXJlYSIsImF1dG9zaXplVGV4dGFyZWEiLCJjc3NUZXh0Iiwic2Nyb2xsSGVpZ2h0IiwiZWFjaCIsIiR0aGlzIiwibnVtYmVyT2ZPcHRpb25zIiwiY2hpbGRyZW4iLCJ3cmFwIiwiYWZ0ZXIiLCIkc3R5bGVkU2VsZWN0IiwibmV4dCIsImVxIiwiJGxpc3QiLCJpbnNlcnRBZnRlciIsInJlbCIsInZhbCIsImFwcGVuZFRvIiwiJGxpc3RJdGVtcyIsInN0b3BQcm9wYWdhdGlvbiIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQTBCO0FBQUEsTUFBakJDLFFBQWlCLHVFQUFSLEdBQVE7QUFFdENELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxrQkFBYixHQUFrQyx5QkFBbEM7QUFDQUgsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFFLGtCQUFiLEdBQWtDSCxRQUFRLEdBQUcsSUFBN0M7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0JMLE1BQU0sQ0FBQ00sWUFBUCxHQUFzQixJQUE1QztBQUNBTixFQUFBQSxNQUFNLENBQUNNLFlBQVA7QUFDQU4sRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFLLFFBQWIsR0FBd0IsUUFBeEI7QUFDQVAsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0IsQ0FBdEI7QUFDQUwsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFNLFVBQWIsR0FBMEIsQ0FBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFPLGFBQWIsR0FBNkIsQ0FBN0I7QUFDQVQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFRLFNBQWIsR0FBeUIsQ0FBekI7QUFDQVYsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFTLFlBQWIsR0FBNEIsQ0FBNUI7QUFDQUMsRUFBQUEsTUFBTSxDQUFDQyxVQUFQLENBQW1CLFlBQU07QUFDbkJiLElBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhWSxPQUFiLEdBQXVCLE1BQXZCO0FBQ0FkLElBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhYSxjQUFi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NUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0gsSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUNBUCxJQUFBQSxLQUFLLENBQUN2SixPQUFOLENBQWMsR0FBZDtBQUNELEdBTEQ7QUFPQThDLEVBQUFBLENBQUMsQ0FBQ3hCLFFBQUQsQ0FBRCxDQUFZZ0QsS0FBWixDQUFrQixZQUFXO0FBQzNCOEUsSUFBQUEsYUFBYSxDQUFDbkUsV0FBZCxDQUEwQixRQUExQjtBQUNBc0UsSUFBQUEsS0FBSyxDQUFDdkosT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUhEO0FBS0QsQ0E1Q0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNjcm9sbCB0byB0aGUgdG9wIGJlZm9yZSB0aGUgcGFnZSBsb2Fkc1xyXG4vLyB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4vLyB9XHJcblxyXG5sZXQgc2xpZGVVcCA9ICh0YXJnZXQsIGR1cmF0aW9uPTUwMCkgPT4ge1xyXG5cclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gJ2hlaWdodCwgbWFyZ2luLCBwYWRkaW5nJztcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gICAgICAgIC8vYWxlcnQoXCIhXCIpO1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxubGV0IHNsaWRlRG93biA9ICh0YXJnZXQsIGR1cmF0aW9uPTUwMCkgPT4ge1xyXG5cclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcclxuICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheTtcclxuICBpZiAoZGlzcGxheSA9PT0gJ25vbmUnKSBkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XHJcbiAgbGV0IGhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSBcImhlaWdodCwgbWFyZ2luLCBwYWRkaW5nXCI7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbnZhciBzbGlkZVRvZ2dsZSA9ICh0YXJnZXQsIGR1cmF0aW9uID0gNTAwKSA9PiB7XHJcbiAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICByZXR1cm4gc2xpZGVEb3duKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gc2xpZGVVcCh0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgLy8gVmFyaWFiZWxzXHJcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBsZXQgdGVjaG5vbG9neUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkJyk7XHJcbiAgbGV0IHRlY2hub2xvZ3lDYXJkQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKVxyXG4gIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19pdGVtXCIpO1xyXG4gIGxldCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX190cmlnZ2VyXCIpO1xyXG4gIGxldCB0YWJEcm9wZG93blRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX190cmlnZ2VyIC5kcm9wZG93bl9fdHJpZ2dlci10ZXh0XCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duXCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fbGlzdFwiKVxyXG5cclxuICAvLyBTY3JvbGwgdG8gY29udGFjdHMtZm9ybVxyXG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkZXItY29udGFjdHNfX2xpbmtcIik7XHJcblxyXG4gIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKS5vZmZzZXRUb3A7XHJcblxyXG4gICAgc2Nyb2xsKHtcclxuICAgICAgdG9wOiBvZmZzZXRUb3AgLSAxMDAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmlwdWxhdGlvbnMgd2l0aCBoZWFkZXIgY2xhc3NlcyBvbiBzY3JvbGxcclxuICBsZXQgc2Nyb2xsQ2hhbmdlID0gMTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IHNjcm9sbENoYW5nZSkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIiwgXCJqcy1uYXYtb3BlblwiLCBcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gVGFic1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gICAgdGFiSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgdGFiQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRhYkl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0YWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIHRhYkl0ZW1baV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICAgIH0pO1xyXG4gIH0gXHJcbiAgXHJcbiAgaWYgKHRhYkRyb3Bkb3duVHJpZ2dlcikge1xyXG4gICAgdGFiRHJvcGRvd25UcmlnZ2VyLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX190cmlnZ2VyLmpzLWFjdGl2ZVwiKS50ZXh0Q29udGVudFxyXG4gIH1cclxuICAvLyBDdXN0b20gc2Nyb2xsYmFyIGluIHRvb3RoIHRhYmxlXHJcbiAgT3ZlcmxheVNjcm9sbGJhcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b290aFwiKSwge30pO1xyXG5cclxuICAvLyBGaWxlcyBpbnB1dFxyXG4gIC8vIGxldCBmaWxlc1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xyXG4gIGxldCBmaWxlc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGVzX190YWJsZScpO1xyXG4gIFxyXG4gIC8vIGxldCB1cGRhdGVGaWxlc0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gICBsZXQgY2hpbGRyZW4gPSBcIlwiO1xyXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlc1RyaWdnZXIuZmlsZXMubGVuZ3RoOyArK2kpIHtcclxuICAvLyAgICAgY2hpbGRyZW4gKz0gICc8ZGl2IGNsYXNzPVwiZmlsZXNfX3dyYXBwZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJmaWxlcy1pdGVtXCI+JyArICc8aSBjbGFzcz1cImljb24tZmlsZVwiPjwvaT4nICsgJzxzcGFuIGNsYXNzPVwiZmlsZXMtaXRlbV9fbmFtZVwiPicgKyBmaWxlc1RyaWdnZXIuZmlsZXMuaXRlbShpKS5uYW1lICsgJzwvc3Bhbi8+JyArICc8aSBjbGFzcz1cImZpbGVzLWl0ZW1fX3JlbW92ZSBpY29uLXRyYXNoLWNhblwiIG9uY2xpY2s9XCJyZXR1cm4gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XCI+PC9pPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nXHJcbiAgLy8gICB9XHJcbiAgLy8gICBmaWxlc1RhYmxlLmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gIC8vICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSAwKSB7XHJcbiAgLy8gICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoZmlsZXNUcmlnZ2VyKSB7XHJcbiAgLy8gICBmaWxlc1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgLy8gICAgIHVwZGF0ZUZpbGVzTGlzdCgpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XHJcblxyXG4gICQoXCIjZmlsZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBmaWxlQmxvYyA9ICQoJzxkaXYvPicsIHtjbGFzczogJ2ZpbGVzX193cmFwcGVyJ30pLFxyXG4gICAgICAgIGZpbGVOYW1lID0gJCgnPGZpbGVzLWl0ZW0vPicsIHtjbGFzczogJ25hbWUnLCB0ZXh0OiB0aGlzLmZpbGVzLml0ZW0oaSkubmFtZX0pO1xyXG4gICAgICBmaWxlQmxvYy5hcHBlbmQoYDxkaXYgY2xhc3M9XCJmaWxlcy1pdGVtXCI+PGkgY2xhc3M9XCJpY29uLWZpbGVcIj48L2k+PHNwYW4gY2xhc3M9XCJmaWxlcy1pdGVtX19uYW1lXCI+JHt0aGlzLmZpbGVzLml0ZW0oaSkubmFtZX08L3NwYW4+PGkgY2xhc3M9XCJmaWxlcy1pdGVtX19yZW1vdmUgaWNvbi10cmFzaC1jYW5cIj48L2k+PGRpdj48ZGl2PmApXHJcbiAgICAgICQoXCIuZmlsZXNfX3RhYmxlXCIpLmFwcGVuZChmaWxlQmxvYyk7XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgIGR0Lml0ZW1zLmFkZChmaWxlKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlsZXMgPSBkdC5maWxlcztcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPj0gMCkge1xyXG4gICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJCgnLmZpbGVzLWl0ZW1fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZmlsZXMtaXRlbV9fbmFtZScpLnRleHQoKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZmlsZXNfX3dyYXBwZXInKS5yZW1vdmUoKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGR0Lml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihuYW1lID09PSBkdC5pdGVtc1tpXS5nZXRBc0ZpbGUoKS5uYW1lKXtcclxuICAgICAgICAgIGR0Lml0ZW1zLnJlbW92ZShpKTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzID0gZHQuZmlsZXM7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICAvLyBNZWRpYSA5OTIgPT09PT0+XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIC8vIE9wZW5pbmcgZGVza3RvcCBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1uYXYtb3BlblwiKSkge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyB0ZWNobm9sb2d5IGFjY29yZGlvblxyXG4gICAgJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5ub3QoJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikpLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5hZGRDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLm5vdCgkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKSkuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGVjaG5vbG9neUNhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgdGVjaG5vbG9neUNhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHRlY2hub2xvZ3lDYXJkQm9keS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgICAgLy8gICBzbGlkZVVwKGVsZW1lbnQpXHJcbiAgICAvLyAgICAgLy8gfSk7XHJcblxyXG4gICAgLy8gICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoJ2pzLWFjdGl2ZScpO1xyXG5cclxuICAgIC8vICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgLy8gICAgIHNsaWRlRG93bih0ZWNobm9sb2d5Q2FyZEJvZHlbaV0sIDMwMClcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuXHJcbiAgICBsZXQgaG9yaXpvbnRhbFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3Jpem9udGFsLXNjcm9sbCcpXHJcblxyXG4gICAgaWYgKGhvcml6b250YWxTY3JvbGwpIHtcclxuICAgICAgLy8gSG9yaXpvbnRhbCBzY3JvbGwgaW4gVHJlYXRtZW50cyA9PT09PT5cclxuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuICBcclxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuaG9yaXpvbnRhbC1zY3JvbGxcIik7XHJcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGdldE1heFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIG1heFdpZHRoID0gMDtcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBtYXhXaWR0aCArPSBzZWN0aW9uLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBnZXRNYXhXaWR0aCgpO1xyXG4gICAgICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoSW5pdFwiLCBnZXRNYXhXaWR0aCk7XHJcbiAgXHJcbiAgICAgIGxldCB0cmlnZ2VySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJyk7XHJcbiAgXHJcbiAgICAgIGdzYXAudG8oc2VjdGlvbnMsIHtcclxuICAgICAgICB4OiAoKSA9PiBgLSR7bWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aH1gLFxyXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxyXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgIHN0YXJ0OiBcIi0xMjBweCB0b3BcIixcclxuICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXJJdGVtLFxyXG4gICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgc2NydWI6IHRydWUsXHJcbiAgICAgICAgICBlbmQ6ICgpID0+IGArPSR7bWF4V2lkdGh9YCxcclxuICAgICAgICAgIGludmFsaWRhdGVPblJlZnJlc2g6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKChzY3QsIGkpID0+IHtcclxuICAgICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICB0cmlnZ2VyOiBzY3QsXHJcbiAgICAgICAgICBzdGFydDogKCkgPT4gJ3RvcCB0b3AtPScgKyAoc2N0Lm9mZnNldExlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aC8yKSAqIChtYXhXaWR0aCAvIChtYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSksXHJcbiAgICAgICAgICBlbmQ6ICgpID0+ICcrPScgKyBzY3Qub2Zmc2V0V2lkdGggKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgdG9nZ2xlQ2xhc3M6IHt0YXJnZXRzOiBzY3QsIGNsYXNzTmFtZTogXCJhY3RpdmVcIn1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVG9nZ2xlIHZpc2libGUgZWxlbWVudHNcclxuICAgIGxldCBzaG93VHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd19fdHJpZ2dlclwiKTtcclxuICAgIGxldCBzaG93SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd19faXRlbVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3dUcmlnZ2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNob3dUcmlnZ2VyW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RyaWdnZXJbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnanMtYWN0aXZlJylcclxuXHJcbiAgICAgICAgaWYgKHNob3dUcmlnZ2VyW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImpzLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgc2hvd1RyaWdnZXJbaV0udGV4dENvbnRlbnQgPSAnU2VlIGxlc3MnXHJcbiAgICAgICAgICBzaG93SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dUcmlnZ2VyW2ldLnRleHRDb250ZW50ID0gJ1NlZSBhbGwnXHJcbiAgICAgICAgICBzaG93SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBUcmVhdG1lbnRzIHBhZ2UgdGFicyBuYXZpZ2F0aW9uXHJcbiAgICBpZiAodHJlYXRtZW50c0Ryb3Bkb3duICYmIHRyZWF0bWVudHNEcm9wZG93bkxpc3QpIHtcclxuICAgICAgbGV0IG9mZnNldEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2xpc3QnKS5vZmZzZXRIZWlnaHRcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS10cmVhdG1lbnRzLWRyb3Bkb3duLW9mZnNldFwiLCBvZmZzZXRJdGVtICsgXCJweFwiKVxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gb2Zmc2V0SXRlbSArIDY0ICkge1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKS5jbGFzc0xpc3QuYWRkKFwib2Zmc2V0LXRvcFwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKS5jbGFzc0xpc3QucmVtb3ZlKFwib2Zmc2V0LXRvcFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cmVhdG1lbnRzRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1zY3JvbGwtZG93blwiKSkge1xyXG4gICAgICAgICAgc2xpZGVUb2dnbGUodHJlYXRtZW50c0Ryb3Bkb3duTGlzdCwgMzAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE9wZW5pbmcgbW9iaWxlIG1lbnUgd2l0aCBidXJnZXJcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZShcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJqcy1sb2NrXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyB0ZWNobm9sb2d5IGFjY29yZGlvbnMgISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIVxyXG4gICAgLy8gJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIgLnRlY2hub2xvZ3ktY2FyZCcpLm5vdCgkKCcudGVjaG5vbG9neV9fd3JhcHBlci5zZWNvbmRhcnkgLnRlY2hub2xvZ3ktY2FyZCcpKS5yZW1vdmVDbGFzcygnanMtYWN0aXZlJylcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVjaG5vbG9neUNhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGVjaG5vbG9neUNhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAvLyBSZW1vdmUgY2xhc3MgZnJvbSBhbGwgZWxlbWVudHNcclxuICAgICAgICB0ZWNobm9sb2d5Q2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmRbaV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQmxvY2sgc2xpZGVyICdUcmVhdG1lbnRzJ1xyXG4gICAgY29uc3Qgc2xpZGVyVHJlYXRtZW50cyA9IG5ldyBTd2lwZXIoJy50cmVhdG1lbnRzLXNsaWRlcicsIHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogXCIudHJlYXRtZW50cy1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgIHByZXZFbDogXCIudHJlYXRtZW50cy1idXR0b24tcHJldlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6IFwiLnRyZWF0bWVudHMtcGFnaW5hdGlvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdQcmFjdGljZXMnXHJcbiAgY29uc3Qgc2xpZGVyUHJhY3RpY2VzID0gbmV3IFN3aXBlcignLnByYWN0aWNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5wcmFjdGljZXMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5wcmFjdGljZXMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5wcmFjdGljZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdUZXN0aW1vbmlhbHMnXHJcbiAgY29uc3Qgc2xpZGVyVGVzdGltb25pYWxzID0gbmV3IFN3aXBlcignLnRlc3RpbW9uaWFscy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIudGVzdGltb25pYWxzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIudGVzdGltb25pYWxzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIudGVzdGltb25pYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ0Nhc2VzJ1xyXG4gIGNvbnN0IHNsaWRlckNhc2VzID0gbmV3IFN3aXBlcignLmNhc2VzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLmNhc2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuY2FzZXMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5jYXNlcy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1NvY2lhbHMnXHJcbiAgY29uc3Qgc2xpZGVyU29jaWFscyA9IG5ldyBTd2lwZXIoJy5zb2NpYWxzX19zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5zb2NpYWxzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIuc29jaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnNvY2lhbHMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDUsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxufSIsIi8vIEF1dG8gc2l6ZSB0ZXh0YXJlYSA9PT09PT5cclxudmFyIHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuXHJcbmlmICh0ZXh0YXJlYSkge1xyXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhdXRvc2l6ZVRleHRhcmVhKTtcclxufSBlbHNlIHtcclxuICBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1dG9zaXplVGV4dGFyZWEoKXtcclxuXHR2YXIgZWwgPSB0aGlzO1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OmF1dG87IHBhZGRpbmc6MCc7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJy1tb3otYm94LXNpemluZzpjb250ZW50LWJveCc7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDonICsgZWwuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHR9LDApO1xyXG59XHJcblxyXG4vLyBDdXN0b20gc2VsZWN0ID09PT09PlxyXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKSwgbnVtYmVyT2ZPcHRpb25zID0gJCh0aGlzKS5jaGlsZHJlbignb3B0aW9uJykubGVuZ3RoO1xyXG5cclxuICAkdGhpcy5hZGRDbGFzcygnc2VsZWN0X19oaWRkZW4nKTsgXHJcbiAgJHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xyXG4gICR0aGlzLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2VsZWN0X19zdHlsZWRcIj48L2Rpdj4nKTtcclxuXHJcbiAgdmFyICRzdHlsZWRTZWxlY3QgPSAkdGhpcy5uZXh0KCdkaXYuc2VsZWN0X19zdHlsZWQnKTtcclxuICAkc3R5bGVkU2VsZWN0LmFwcGVuZCgnPHNwYW4+PC9zcGFuPjxpIGNsYXNzPVwiaWNvbi1hcnJvdy1kcm9wZG93blwiPjwvaT4nKVxyXG4gICRzdHlsZWRTZWxlY3QuZmluZCgnc3BhbicpLnRleHQoJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKDApLnRleHQoKSk7XHJcblxyXG4gIHZhciAkbGlzdCA9ICQoJzx1bCAvPicsIHtcclxuICAgICdjbGFzcyc6ICdzZWxlY3RfX29wdGlvbnMnXHJcbiAgfSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICQoJzxsaSAvPicsIHtcclxuICAgICAgdGV4dDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnRleHQoKSxcclxuICAgICAgcmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuICAgIH0pLmFwcGVuZFRvKCRsaXN0KTtcclxuICB9XHJcblxyXG4gIHZhciAkbGlzdEl0ZW1zID0gJGxpc3QuY2hpbGRyZW4oJ2xpJyk7XHJcblxyXG4gICRzdHlsZWRTZWxlY3QuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICQoJ2Rpdi5zZWxlY3RfX3N0eWxlZC5hY3RpdmUnKS5ub3QodGhpcykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVVwKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdF9fb3B0aW9ucycpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRsaXN0SXRlbXMuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRzdHlsZWRTZWxlY3QuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS50ZXh0KCkpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICR0aGlzLnZhbCgkKHRoaXMpLmF0dHIoJ3JlbCcpKTtcclxuICAgICRsaXN0LnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkc3R5bGVkU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICRsaXN0LnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==