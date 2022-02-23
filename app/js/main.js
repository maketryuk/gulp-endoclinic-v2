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
  // Validate form
  $(".form").validate({
    errorClass: 'invalid',
    errorPlacement: function errorPlacement(error, element) {},
    rules: {
      user_name: {
        required: true
      },
      user_email: {
        required: true,
        email: true
      },
      user_phone: {
        required: true
      },
      user_datebirth: {
        required: true
      },
      dentist_name: {
        required: true
      },
      dentist_address: {
        required: true
      },
      dentist_email: {
        required: true,
        email: true
      },
      dentist_phone: {
        required: true
      },
      dentist_gdc: {
        required: true
      }
    },
    submitHandler: function submitHandler() {
      var boxes = $('.tooth__checkbox');

      if (boxes.length > 0) {
        if ($('.tooth__checkbox:checked').length < 1) {
          boxes.parents('.tooth__item').addClass('invalid');
          boxes[0].focus();
          return false;
        }
      }

      form.submit();
    }
  }); // Variabels

  var burger = document.querySelector(".burger");
  var header = document.querySelector(".header");
  var technologyCard = document.querySelectorAll('.technology-card'); // let technologyCardBody = document.querySelectorAll('.technology-card__body')
  // let tabContent = document.querySelectorAll(".tabs__item");
  // let tabItem = document.querySelectorAll(".tabs__trigger");
  // let tabDropdownTrigger = document.querySelector(".treatments .dropdown__trigger .dropdown__trigger-text");

  var treatments = document.querySelector('.treatments');
  var treatmentsSidebar = document.querySelector(".treatments-sidebar");
  var treatmentsDropdownTrigger = document.querySelector(".treatments .dropdown__trigger");
  var treatmentsDropdownItem = document.querySelector(".treatments .dropdown__item");
  var treatmentsSidebarLink = document.querySelectorAll(".treatments-sidebar a"); // Spyscroll

  if (treatmentsSidebar) {
    var scrollspy = function scrollspy() {
      scrollspys.forEach(function (current) {
        var _ = current;
        var currentElementOffset = _.offsetTop - 150;
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentElementOffset <= scrollPosition + linksHeight) {
          allLinks.forEach(function (currentLink) {
            currentLink.parentElement.classList.remove("js-current");
            currentLink.parentElement.removeAttribute("class");
          });
          var currentID = current.getAttribute("id");
          document.querySelector("a[href=\"#".concat(currentID, "\"]")).parentElement.classList.add("js-current");
          treatmentsDropdownTrigger.firstChild.textContent = document.querySelector(".treatments-sidebar li.js-current a").textContent;
        }
      });
    };

    var _clickHandler = function _clickHandler(e) {
      e.preventDefault();
      var href = this.getAttribute("href");
      var offsetTop = document.querySelector(href).offsetTop + 200;
      scroll({
        top: offsetTop,
        behavior: "smooth"
      });
    };

    var scrollspys = document.querySelectorAll(".treatments-content__item");
    var links = document.querySelector(".treatments-sidebar a");
    var linksHeight = links.offsetHeight;
    var allLinks = document.querySelectorAll(".treatments-sidebar a");
    window.addEventListener("scroll", function () {
      scrollspy();
    });

    var _iterator = _createForOfIteratorHelper(linksScroll),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var link = _step.value;
        link.addEventListener("click", _clickHandler);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    null;
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
  }); // // Tabs
  // for (let i = 0; i < tabItem.length; i++) {
  //   tabItem[i].addEventListener("click", () => {
  //     tabContent.forEach((item) => {
  //       item.classList.remove("js-active");
  //     });
  //     tabItem.forEach((item) => {
  //       item.classList.remove("js-active");
  //     });
  //     tabContent[i].classList.add("js-active");
  //     tabItem[i].classList.add("js-active");
  //     tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
  //   });
  // } 
  // if (tabDropdownTrigger) {
  //   tabDropdownTrigger.textContent = document.querySelector(".tabs__trigger.js-active").textContent
  // }
  // Custom scrollbar in tooth table

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

      var _loop = function _loop(i) {
        showTrigger[i].addEventListener("click", function () {
          showTrigger[i].classList.toggle('js-active');

          if (showTrigger[i].classList.contains("js-active")) {
            showTrigger[i].textContent = 'See less';
            showItem.forEach(function (element) {
              element.style.display = "block";
            });
          } else {
            showTrigger[i].textContent = 'See all';
            showItem.forEach(function (element) {
              element.style.display = "none";
            });
          }
        });
      };

      for (var i = 0; i < showTrigger.length; i++) {
        _loop(i);
      }

      if (treatmentsSidebar) {
        var _clickHandler2 = function _clickHandler2(e) {
          e.preventDefault();
          var href = this.getAttribute("href");
          var offsetTop = document.querySelector(href).offsetTop - 150;
          scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        };

        var _iterator3 = _createForOfIteratorHelper(linksScroll),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _link = _step3.value;

            _link.addEventListener("click", _clickHandler2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } // Treatments page tabs navigation
      // let treatmentsDropdown = document.querySelector(".treatments .dropdown");
      // let treatmentsDropdownList = document.querySelector(".treatments .dropdown__list");
      // if (treatmentsDropdown && treatmentsDropdownList) {
      //   let offsetItem = document.querySelector('.dropdown__list').offsetHeight
      //   document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px")
      //   window.addEventListener("scroll", () => {
      //     if (window.scrollY > offsetItem + 64 ) {
      //       treatmentsDropdown.classList.add("js-scroll-down");
      //       treatmentsDropdownList.style.display = 'none'
      //       document.querySelector('.treatments').classList.add("offset-top")
      //     } else {
      //       treatmentsDropdown.classList.remove("js-scroll-down");
      //       treatmentsDropdownList.style.display = 'block'
      //       document.querySelector('.treatments').classList.remove("offset-top")
      //     }
      //   });
      //   treatmentsDropdown.addEventListener('click', () => {
      //     if (treatmentsDropdown.classList.contains("js-scroll-down")) {
      //       slideToggle(treatmentsDropdownList, 300);
      //     } else {
      //       null
      //     }
      //   });
      // }


      if (treatmentsDropdownTrigger && treatmentsDropdownItem) {
        var offsetItem = treatmentsDropdownItem.offsetHeight;
        document.documentElement.style.setProperty("--treatments-dropdown-offset", offsetItem + "px");
        window.addEventListener("scroll", function () {
          if (window.scrollY > offsetItem + 64) {
            treatmentsSidebar.classList.add("js-scroll-down");
            treatments.classList.add("offset-top");
            treatmentsDropdownItem.style.display = "none";

            if (treatmentsSidebar.classList.contains("js-scroll-down")) {
              var _loop2 = function _loop2(_i2) {
                treatmentsSidebarLink[_i2].addEventListener("click", function () {
                  treatmentsSidebarLink.forEach(function (element) {
                    element.parentElement.classList.remove("js-current");
                    element.parentElement.removeAttribute("class");
                  });

                  treatmentsSidebarLink[_i2].parentElement.classList.add("js-current");

                  treatmentsDropdownTrigger.firstChild.textContent = treatmentsSidebarLink[_i2].textContent;
                });
              };

              for (var _i2 = 0; _i2 < treatmentsSidebarLink.length; _i2++) {
                _loop2(_i2);
              }
            }
          } else {
            treatmentsSidebar.classList.remove("js-scroll-down");
            treatmentsDropdownItem.style.display = "block";
            treatments.classList.remove("offset-top");
          }
        });
        treatmentsSidebar.addEventListener("click", function () {
          treatmentsDropdownTrigger.classList.toggle("js-active");
          slideToggle(treatmentsDropdownItem, 300);
        });
        treatmentsDropdownTrigger.firstChild.textContent = document.querySelector(".treatments-sidebar li.js-current a").textContent;
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
}; // Scroll to anchor


var linksScroll = document.querySelectorAll(".scroll__link");

var _iterator4 = _createForOfIteratorHelper(linksScroll),
    _step4;

try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var link = _step4.value;
    link.addEventListener("click", clickHandler);
  }
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}

function clickHandler(e) {
  e.preventDefault();
  var href = this.getAttribute("href");
  var offsetTop = document.querySelector(href).offsetTop - 150;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiXSwibmFtZXMiOlsic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsIiQiLCJ2YWxpZGF0ZSIsImVycm9yQ2xhc3MiLCJlcnJvclBsYWNlbWVudCIsImVycm9yIiwiZWxlbWVudCIsInJ1bGVzIiwidXNlcl9uYW1lIiwicmVxdWlyZWQiLCJ1c2VyX2VtYWlsIiwiZW1haWwiLCJ1c2VyX3Bob25lIiwidXNlcl9kYXRlYmlydGgiLCJkZW50aXN0X25hbWUiLCJkZW50aXN0X2FkZHJlc3MiLCJkZW50aXN0X2VtYWlsIiwiZGVudGlzdF9waG9uZSIsImRlbnRpc3RfZ2RjIiwic3VibWl0SGFuZGxlciIsImJveGVzIiwibGVuZ3RoIiwicGFyZW50cyIsImFkZENsYXNzIiwiZm9jdXMiLCJmb3JtIiwic3VibWl0IiwiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwidGVjaG5vbG9neUNhcmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHJlYXRtZW50cyIsInRyZWF0bWVudHNTaWRlYmFyIiwidHJlYXRtZW50c0Ryb3Bkb3duVHJpZ2dlciIsInRyZWF0bWVudHNEcm9wZG93bkl0ZW0iLCJ0cmVhdG1lbnRzU2lkZWJhckxpbmsiLCJzY3JvbGxzcHkiLCJzY3JvbGxzcHlzIiwiZm9yRWFjaCIsImN1cnJlbnQiLCJfIiwiY3VycmVudEVsZW1lbnRPZmZzZXQiLCJvZmZzZXRUb3AiLCJzY3JvbGxQb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJsaW5rc0hlaWdodCIsImFsbExpbmtzIiwiY3VycmVudExpbmsiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwiY3VycmVudElEIiwiZ2V0QXR0cmlidXRlIiwiYWRkIiwiZmlyc3RDaGlsZCIsInRleHRDb250ZW50IiwiY2xpY2tIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwibGlua3MiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3NTY3JvbGwiLCJsaW5rIiwic2Nyb2xsQ2hhbmdlIiwiT3ZlcmxheVNjcm9sbGJhcnMiLCJmaWxlc1RhYmxlIiwiZHQiLCJEYXRhVHJhbnNmZXIiLCJvbiIsImkiLCJmaWxlcyIsImZpbGVCbG9jIiwiY2xhc3MiLCJmaWxlTmFtZSIsInRleHQiLCJpdGVtIiwibmFtZSIsImFwcGVuZCIsImZpbGUiLCJpdGVtcyIsImNsaWNrIiwicGFyZW50IiwiZmluZCIsImdldEFzRmlsZSIsImdldEVsZW1lbnRCeUlkIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjb250YWlucyIsIm5vdCIsImNsb3Nlc3QiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiaG9yaXpvbnRhbFNjcm9sbCIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJzZWN0aW9ucyIsInV0aWxzIiwidG9BcnJheSIsIm1heFdpZHRoIiwiZ2V0TWF4V2lkdGgiLCJzZWN0aW9uIiwib2Zmc2V0V2lkdGgiLCJ0cmlnZ2VySXRlbSIsInRvIiwieCIsImlubmVyV2lkdGgiLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInN0YXJ0IiwidHJpZ2dlciIsInBpbiIsInNjcnViIiwiZW5kIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsInNjdCIsImNyZWF0ZSIsIm9mZnNldExlZnQiLCJ0b2dnbGVDbGFzcyIsInRhcmdldHMiLCJjbGFzc05hbWUiLCJzaG93VHJpZ2dlciIsInNob3dJdGVtIiwidG9nZ2xlIiwib2Zmc2V0SXRlbSIsInNldFByb3BlcnR5Iiwic2Nyb2xsWSIsInNsaWRlclRyZWF0bWVudHMiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJlbCIsImJyZWFrcG9pbnRzIiwic2xpZGVyUHJhY3RpY2VzIiwic2xpZGVyVGVzdGltb25pYWxzIiwibG9vcCIsImNlbnRlcmVkU2xpZGVzIiwic2xpZGVyQ2FzZXMiLCJzbGlkZXJTb2NpYWxzIiwidGV4dGFyZWEiLCJhdXRvc2l6ZVRleHRhcmVhIiwiY3NzVGV4dCIsInNjcm9sbEhlaWdodCIsImVhY2giLCIkdGhpcyIsIm51bWJlck9mT3B0aW9ucyIsImNoaWxkcmVuIiwid3JhcCIsImFmdGVyIiwiJHN0eWxlZFNlbGVjdCIsIm5leHQiLCJlcSIsIiRsaXN0IiwiaW5zZXJ0QWZ0ZXIiLCJyZWwiLCJ2YWwiLCJhcHBlbmRUbyIsIiRsaXN0SXRlbXMiLCJzdG9wUHJvcGFnYXRpb24iLCJhdHRyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsTUFBRCxFQUEwQjtBQUFBLE1BQWpCQyxRQUFpQix1RUFBUixHQUFRO0FBRXRDRCxFQUFBQSxNQUFNLENBQUNFLEtBQVAsQ0FBYUMsa0JBQWIsR0FBa0MseUJBQWxDO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRSxrQkFBYixHQUFrQ0gsUUFBUSxHQUFHLElBQTdDO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhRyxNQUFiLEdBQXNCTCxNQUFNLENBQUNNLFlBQVAsR0FBc0IsSUFBNUM7QUFDQU4sRUFBQUEsTUFB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QUFELENBQUQsQ0FBUWtGLElBQVIsRUFBaEMsRUFBZ0RnQixXQUFoRCxDQUE0RCxRQUE1RDtBQUNBMEQsSUFBQUEsS0FBSyxDQUFDVyxHQUFOLENBQVV2SyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEySyxJQUFSLENBQWEsS0FBYixDQUFWO0FBQ0FQLElBQUFBLEtBQUssQ0FBQ3pMLE9BQU4sQ0FBYyxHQUFkO0FBQ0QsR0FMRDtBQU9BcUIsRUFBQUEsQ0FBQyxDQUFDMkIsUUFBRCxDQUFELENBQVk2RCxLQUFaLENBQWtCLFlBQVc7QUFDM0J5RSxJQUFBQSxhQUFhLENBQUMvRCxXQUFkLENBQTBCLFFBQTFCO0FBQ0FrRSxJQUFBQSxLQUFLLENBQUN6TCxPQUFOLENBQWMsR0FBZDtBQUNELEdBSEQ7QUFLRCxDQTVDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2Nyb2xsIHRvIHRoZSB0b3AgYmVmb3JlIHRoZSBwYWdlIGxvYWRzXHJcbi8vIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbi8vIH1cclxuXHJcbmxldCBzbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb249NTAwKSA9PiB7XHJcblxyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgICAgLy9hbGVydChcIiFcIik7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG5sZXQgc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb249NTAwKSA9PiB7XHJcblxyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xyXG4gIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5O1xyXG4gIGlmIChkaXNwbGF5ID09PSAnbm9uZScpIGRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxubGV0IHNsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIHJldHVybiBzbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBzbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAvLyBWYWxpZGF0ZSBmb3JtXHJcbiAgJChcIi5mb3JtXCIpLnZhbGlkYXRlKHtcclxuICAgIGVycm9yQ2xhc3M6ICdpbnZhbGlkJyxcclxuICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge30sXHJcbiAgICBydWxlczoge1xyXG4gICAgICB1c2VyX25hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdXNlcl9lbWFpbDoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZXJfcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdXNlcl9kYXRlYmlydGg6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZGVudGlzdF9uYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbnRpc3RfYWRkcmVzczoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZW50aXN0X2VtYWlsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbnRpc3RfcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZGVudGlzdF9nZGM6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGJveGVzID0gJCgnLnRvb3RoX19jaGVja2JveCcpO1xyXG4gICAgICBpZihib3hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYoICQoJy50b290aF9fY2hlY2tib3g6Y2hlY2tlZCcpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgIGJveGVzLnBhcmVudHMoJy50b290aF9faXRlbScpLmFkZENsYXNzKCdpbnZhbGlkJylcclxuICAgICAgICAgIGJveGVzWzBdLmZvY3VzKCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gVmFyaWFiZWxzXHJcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBsZXQgdGVjaG5vbG9neUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkJyk7XHJcbiAgLy8gbGV0IHRlY2hub2xvZ3lDYXJkQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKVxyXG4gIC8vIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19pdGVtXCIpO1xyXG4gIC8vIGxldCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX190cmlnZ2VyXCIpO1xyXG4gIC8vIGxldCB0YWJEcm9wZG93blRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX190cmlnZ2VyIC5kcm9wZG93bl9fdHJpZ2dlci10ZXh0XCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKTtcclxuICBsZXQgdHJlYXRtZW50c1NpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhclwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX3RyaWdnZXJcIik7XHJcbiAgbGV0IHRyZWF0bWVudHNEcm9wZG93bkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX19pdGVtXCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzU2lkZWJhckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyZWF0bWVudHMtc2lkZWJhciBhXCIpO1xyXG5cclxuICAvLyBTcHlzY3JvbGxcclxuICBpZiAodHJlYXRtZW50c1NpZGViYXIpIHtcclxuICAgIGxldCBzY3JvbGxzcHlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmVhdG1lbnRzLWNvbnRlbnRfX2l0ZW1cIik7XHJcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhciBhXCIpO1xyXG4gICAgbGV0IGxpbmtzSGVpZ2h0ID0gbGlua3Mub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IGFsbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmVhdG1lbnRzLXNpZGViYXIgYVwiKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsc3B5KCkge1xyXG4gICAgICBzY3JvbGxzcHlzLmZvckVhY2goY3VycmVudCA9PiB7XHJcbiAgICAgICAgbGV0IF8gPSBjdXJyZW50O1xyXG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudE9mZnNldCA9IF8ub2Zmc2V0VG9wIC0gMTUwO1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50T2Zmc2V0IDw9IHNjcm9sbFBvc2l0aW9uICsgbGlua3NIZWlnaHQpIHtcclxuICAgICAgICAgIGFsbExpbmtzLmZvckVhY2goY3VycmVudExpbmsgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50TGluay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICBjdXJyZW50TGluay5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50SUQgPSBjdXJyZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtocmVmPVwiIyR7Y3VycmVudElEfVwiXWApLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImpzLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhciBsaS5qcy1jdXJyZW50IGFcIikudGV4dENvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgc2Nyb2xsc3B5KClcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rc1Njcm9sbCkge1xyXG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICBjb25zdCBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpLm9mZnNldFRvcCArIDIwMDtcclxuICBcclxuICAgICAgc2Nyb2xsKHtcclxuICAgICAgICB0b3A6IG9mZnNldFRvcCxcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbnVsbFxyXG4gIH1cclxuXHJcbiAgLy8gTWFuaXB1bGF0aW9ucyB3aXRoIGhlYWRlciBjbGFzc2VzIG9uIHNjcm9sbFxyXG4gIGxldCBzY3JvbGxDaGFuZ2UgPSAxO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICBsZXQgc2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgIGlmIChzY3JvbGwgPj0gc2Nyb2xsQ2hhbmdlKSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLXRvcFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLXRvcFwiKTtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtZG93blwiLCBcImpzLW5hdi1vcGVuXCIsIFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyAvLyBUYWJzXHJcbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJJdGVtLmxlbmd0aDsgaSsrKSB7XHJcbiAgLy8gICB0YWJJdGVtW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gIC8vICAgICB0YWJDb250ZW50LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAvLyAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgdGFiSXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgLy8gICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIHRhYkNvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuICAvLyAgICAgdGFiSXRlbVtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG5cclxuICAvLyAgICAgdGFiRHJvcGRvd25UcmlnZ2VyLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX190cmlnZ2VyLmpzLWFjdGl2ZVwiKS50ZXh0Q29udGVudFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfSBcclxuICBcclxuICAvLyBpZiAodGFiRHJvcGRvd25UcmlnZ2VyKSB7XHJcbiAgLy8gICB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcbiAgLy8gfVxyXG5cclxuICAvLyBDdXN0b20gc2Nyb2xsYmFyIGluIHRvb3RoIHRhYmxlXHJcbiAgT3ZlcmxheVNjcm9sbGJhcnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b290aFwiKSwge30pO1xyXG5cclxuICAvLyBGaWxlcyBpbnB1dFxyXG4gIC8vIGxldCBmaWxlc1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xyXG4gIGxldCBmaWxlc1RhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGVzX190YWJsZScpO1xyXG4gIFxyXG4gIC8vIGxldCB1cGRhdGVGaWxlc0xpc3QgPSAoKSA9PiB7XHJcbiAgLy8gICBsZXQgY2hpbGRyZW4gPSBcIlwiO1xyXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlc1RyaWdnZXIuZmlsZXMubGVuZ3RoOyArK2kpIHtcclxuICAvLyAgICAgY2hpbGRyZW4gKz0gICc8ZGl2IGNsYXNzPVwiZmlsZXNfX3dyYXBwZXJcIj4nICsgJzxkaXYgY2xhc3M9XCJmaWxlcy1pdGVtXCI+JyArICc8aSBjbGFzcz1cImljb24tZmlsZVwiPjwvaT4nICsgJzxzcGFuIGNsYXNzPVwiZmlsZXMtaXRlbV9fbmFtZVwiPicgKyBmaWxlc1RyaWdnZXIuZmlsZXMuaXRlbShpKS5uYW1lICsgJzwvc3Bhbi8+JyArICc8aSBjbGFzcz1cImZpbGVzLWl0ZW1fX3JlbW92ZSBpY29uLXRyYXNoLWNhblwiIG9uY2xpY2s9XCJyZXR1cm4gdGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlKCk7XCI+PC9pPicgKyAnPC9kaXY+JyArICc8L2Rpdj4nXHJcbiAgLy8gICB9XHJcbiAgLy8gICBmaWxlc1RhYmxlLmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gIC8vICAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+PSAwKSB7XHJcbiAgLy8gICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBpZiAoZmlsZXNUcmlnZ2VyKSB7XHJcbiAgLy8gICBmaWxlc1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgLy8gICAgIHVwZGF0ZUZpbGVzTGlzdCgpXHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgY29uc3QgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XHJcblxyXG4gICQoXCIjZmlsZVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oZSl7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBmaWxlQmxvYyA9ICQoJzxkaXYvPicsIHtjbGFzczogJ2ZpbGVzX193cmFwcGVyJ30pLFxyXG4gICAgICAgIGZpbGVOYW1lID0gJCgnPGZpbGVzLWl0ZW0vPicsIHtjbGFzczogJ25hbWUnLCB0ZXh0OiB0aGlzLmZpbGVzLml0ZW0oaSkubmFtZX0pO1xyXG4gICAgICBmaWxlQmxvYy5hcHBlbmQoYDxkaXYgY2xhc3M9XCJmaWxlcy1pdGVtXCI+PGkgY2xhc3M9XCJpY29uLWZpbGVcIj48L2k+PHNwYW4gY2xhc3M9XCJmaWxlcy1pdGVtX19uYW1lXCI+JHt0aGlzLmZpbGVzLml0ZW0oaSkubmFtZX08L3NwYW4+PGkgY2xhc3M9XCJmaWxlcy1pdGVtX19yZW1vdmUgaWNvbi10cmFzaC1jYW5cIj48L2k+PGRpdj48ZGl2PmApXHJcbiAgICAgICQoXCIuZmlsZXNfX3RhYmxlXCIpLmFwcGVuZChmaWxlQmxvYyk7XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgZmlsZSBvZiB0aGlzLmZpbGVzKSB7XHJcbiAgICAgIGR0Lml0ZW1zLmFkZChmaWxlKTtcclxuICAgIH1cclxuICAgIHRoaXMuZmlsZXMgPSBkdC5maWxlcztcclxuXHJcbiAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPj0gMCkge1xyXG4gICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gIFxyXG4gICAgJCgnLmZpbGVzLWl0ZW1fX3JlbW92ZScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgIGxldCBuYW1lID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZmlsZXMtaXRlbV9fbmFtZScpLnRleHQoKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCcuZmlsZXNfX3dyYXBwZXInKS5yZW1vdmUoKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGR0Lml0ZW1zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihuYW1lID09PSBkdC5pdGVtc1tpXS5nZXRBc0ZpbGUoKS5uYW1lKXtcclxuICAgICAgICAgIGR0Lml0ZW1zLnJlbW92ZShpKTtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpLmZpbGVzID0gZHQuZmlsZXM7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICBcclxuICAvLyBNZWRpYSA5OTIgPT09PT0+XHJcbiAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpLm1hdGNoZXMpIHtcclxuICAgIC8vIE9wZW5pbmcgZGVza3RvcCBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaWYgKGhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1uYXYtb3BlblwiKSkge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gT3BlbmluZyB0ZWNobm9sb2d5IGFjY29yZGlvblxyXG4gICAgJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5ub3QoJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikpLnJlbW92ZUNsYXNzKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKS5hZGRDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgJCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLm5vdCgkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKSkuc2xpZGVVcCgzMDApO1xyXG4gICAgICAgICQodGhpcykuZmluZCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGVjaG5vbG9neUNhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgdGVjaG5vbG9neUNhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIC8vIHRlY2hub2xvZ3lDYXJkQm9keS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAvLyAgICAgLy8gICBzbGlkZVVwKGVsZW1lbnQpXHJcbiAgICAvLyAgICAgLy8gfSk7XHJcblxyXG4gICAgLy8gICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoJ2pzLWFjdGl2ZScpO1xyXG5cclxuICAgIC8vICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgLy8gICAgIHNsaWRlRG93bih0ZWNobm9sb2d5Q2FyZEJvZHlbaV0sIDMwMClcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuXHJcbiAgICBsZXQgaG9yaXpvbnRhbFNjcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3Jpem9udGFsLXNjcm9sbCcpXHJcblxyXG4gICAgaWYgKGhvcml6b250YWxTY3JvbGwpIHtcclxuICAgICAgLy8gSG9yaXpvbnRhbCBzY3JvbGwgaW4gVHJlYXRtZW50cyA9PT09PT5cclxuICAgICAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcclxuICBcclxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoXCIuaG9yaXpvbnRhbC1zY3JvbGxcIik7XHJcbiAgICAgIGxldCBtYXhXaWR0aCA9IDA7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGdldE1heFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIG1heFdpZHRoID0gMDtcclxuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICBtYXhXaWR0aCArPSBzZWN0aW9uLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBnZXRNYXhXaWR0aCgpO1xyXG4gICAgICBTY3JvbGxUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJyZWZyZXNoSW5pdFwiLCBnZXRNYXhXaWR0aCk7XHJcbiAgXHJcbiAgICAgIGxldCB0cmlnZ2VySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJyk7XHJcbiAgXHJcbiAgICAgIGdzYXAudG8oc2VjdGlvbnMsIHtcclxuICAgICAgICB4OiAoKSA9PiBgLSR7bWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aH1gLFxyXG4gICAgICAgIGVhc2U6IFwibm9uZVwiLFxyXG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcclxuICAgICAgICAgIHN0YXJ0OiBcIi0xMjBweCB0b3BcIixcclxuICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXJJdGVtLFxyXG4gICAgICAgICAgcGluOiB0cnVlLFxyXG4gICAgICAgICAgc2NydWI6IHRydWUsXHJcbiAgICAgICAgICBlbmQ6ICgpID0+IGArPSR7bWF4V2lkdGh9YCxcclxuICAgICAgICAgIGludmFsaWRhdGVPblJlZnJlc2g6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKChzY3QsIGkpID0+IHtcclxuICAgICAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICB0cmlnZ2VyOiBzY3QsXHJcbiAgICAgICAgICBzdGFydDogKCkgPT4gJ3RvcCB0b3AtPScgKyAoc2N0Lm9mZnNldExlZnQgLSB3aW5kb3cuaW5uZXJXaWR0aC8yKSAqIChtYXhXaWR0aCAvIChtYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSksXHJcbiAgICAgICAgICBlbmQ6ICgpID0+ICcrPScgKyBzY3Qub2Zmc2V0V2lkdGggKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgdG9nZ2xlQ2xhc3M6IHt0YXJnZXRzOiBzY3QsIGNsYXNzTmFtZTogXCJhY3RpdmVcIn1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVG9nZ2xlIHZpc2libGUgZWxlbWVudHNcclxuICAgIGxldCBzaG93VHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd19fdHJpZ2dlclwiKTtcclxuICAgIGxldCBzaG93SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvd19faXRlbVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNob3dUcmlnZ2VyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNob3dUcmlnZ2VyW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgc2hvd1RyaWdnZXJbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnanMtYWN0aXZlJylcclxuXHJcbiAgICAgICAgaWYgKHNob3dUcmlnZ2VyW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImpzLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgc2hvd1RyaWdnZXJbaV0udGV4dENvbnRlbnQgPSAnU2VlIGxlc3MnXHJcbiAgICAgICAgICBzaG93SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNob3dUcmlnZ2VyW2ldLnRleHRDb250ZW50ID0gJ1NlZSBhbGwnXHJcbiAgICAgICAgICBzaG93SXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRyZWF0bWVudHNTaWRlYmFyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rc1Njcm9sbCkge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikub2Zmc2V0VG9wIC0gMTUwO1xyXG4gICAgXHJcbiAgICAgICAgc2Nyb2xsKHtcclxuICAgICAgICAgIHRvcDogb2Zmc2V0VG9wLFxyXG4gICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyZWF0bWVudHMgcGFnZSB0YWJzIG5hdmlnYXRpb25cclxuICAgIC8vIGxldCB0cmVhdG1lbnRzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duXCIpO1xyXG4gICAgLy8gbGV0IHRyZWF0bWVudHNEcm9wZG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX19saXN0XCIpO1xyXG5cclxuICAgIC8vIGlmICh0cmVhdG1lbnRzRHJvcGRvd24gJiYgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdCkge1xyXG4gICAgLy8gICBsZXQgb2Zmc2V0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fbGlzdCcpLm9mZnNldEhlaWdodFxyXG4gICAgLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRyZWF0bWVudHMtZHJvcGRvd24tb2Zmc2V0XCIsIG9mZnNldEl0ZW0gKyBcInB4XCIpXHJcbiAgICBcclxuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0gKyA2NCApIHtcclxuICAgIC8vICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAvLyAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LmFkZChcIm9mZnNldC10b3BcIilcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgIC8vICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LnJlbW92ZShcIm9mZnNldC10b3BcIilcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vICAgdHJlYXRtZW50c0Ryb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuICAgIC8vICAgICAgIHNsaWRlVG9nZ2xlKHRyZWF0bWVudHNEcm9wZG93bkxpc3QsIDMwMCk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIG51bGxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyICYmIHRyZWF0bWVudHNEcm9wZG93bkl0ZW0pIHtcclxuICAgICAgbGV0IG9mZnNldEl0ZW0gPSB0cmVhdG1lbnRzRHJvcGRvd25JdGVtLm9mZnNldEhlaWdodFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRyZWF0bWVudHMtZHJvcGRvd24tb2Zmc2V0XCIsIG9mZnNldEl0ZW0gKyBcInB4XCIpO1xyXG4gICAgICBcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0gKyA2NCApIHtcclxuICAgICAgICAgIHRyZWF0bWVudHNTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHMuY2xhc3NMaXN0LmFkZChcIm9mZnNldC10b3BcIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25JdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICBpZiAodHJlYXRtZW50c1NpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlYXRtZW50c1NpZGViYXJMaW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdHJlYXRtZW50c1NpZGViYXJMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzU2lkZWJhckxpbmsuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWN1cnJlbnRcIilcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzU2lkZWJhckxpbmtbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwianMtY3VycmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSB0cmVhdG1lbnRzU2lkZWJhckxpbmtbaV0udGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHJlYXRtZW50c1NpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duSXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgdHJlYXRtZW50cy5jbGFzc0xpc3QucmVtb3ZlKFwib2Zmc2V0LXRvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJlYXRtZW50c1NpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1hY3RpdmVcIilcclxuICAgICAgICBzbGlkZVRvZ2dsZSh0cmVhdG1lbnRzRHJvcGRvd25JdGVtLCAzMDApXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duVHJpZ2dlci5maXJzdENoaWxkLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzLXNpZGViYXIgbGkuanMtY3VycmVudCBhXCIpLnRleHRDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gT3BlbmluZyBtb2JpbGUgbWVudSB3aXRoIGJ1cmdlclxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuaW5nIHRlY2hub2xvZ3kgYWNjb3JkaW9ucyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAvLyAkKCcudGVjaG5vbG9neV9fd3JhcHBlciAudGVjaG5vbG9neS1jYXJkJykubm90KCQoJy50ZWNobm9sb2d5X193cmFwcGVyLnNlY29uZGFyeSAudGVjaG5vbG9neS1jYXJkJykpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWNobm9sb2d5Q2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSBjbGFzcyBmcm9tIGFsbCBlbGVtZW50c1xyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCbG9jayBzbGlkZXIgJ1RyZWF0bWVudHMnXHJcbiAgICBjb25zdCBzbGlkZXJUcmVhdG1lbnRzID0gbmV3IFN3aXBlcignLnRyZWF0bWVudHMtc2xpZGVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBcIi50cmVhdG1lbnRzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgcHJldkVsOiBcIi50cmVhdG1lbnRzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIudHJlYXRtZW50cy1wYWdpbmF0aW9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1ByYWN0aWNlcydcclxuICBjb25zdCBzbGlkZXJQcmFjdGljZXMgPSBuZXcgU3dpcGVyKCcucHJhY3RpY2VzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnByYWN0aWNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnByYWN0aWNlcy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnByYWN0aWNlcy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1Rlc3RpbW9uaWFscydcclxuICBjb25zdCBzbGlkZXJUZXN0aW1vbmlhbHMgPSBuZXcgU3dpcGVyKCcudGVzdGltb25pYWxzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi50ZXN0aW1vbmlhbHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi50ZXN0aW1vbmlhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi50ZXN0aW1vbmlhbHMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnQ2FzZXMnXHJcbiAgY29uc3Qgc2xpZGVyQ2FzZXMgPSBuZXcgU3dpcGVyKCcuY2FzZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuY2FzZXMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5jYXNlcy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLmNhc2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnU29jaWFscydcclxuICBjb25zdCBzbGlkZXJTb2NpYWxzID0gbmV3IFN3aXBlcignLnNvY2lhbHNfX3NsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnNvY2lhbHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zb2NpYWxzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc29jaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyBTY3JvbGwgdG8gYW5jaG9yXHJcbmxldCBsaW5rc1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2Nyb2xsX19saW5rXCIpO1xyXG5cclxuZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzU2Nyb2xsKSB7XHJcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICBjb25zdCBvZmZzZXRUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpLm9mZnNldFRvcCAtIDE1MDtcclxuXHJcbiAgc2Nyb2xsKHtcclxuICAgIHRvcDogb2Zmc2V0VG9wLFxyXG4gICAgYmVoYXZpb3I6IFwic21vb3RoXCJcclxuICB9KTtcclxufSIsIi8vIEF1dG8gc2l6ZSB0ZXh0YXJlYSA9PT09PT5cclxudmFyIHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcclxuXHJcbmlmICh0ZXh0YXJlYSkge1xyXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBhdXRvc2l6ZVRleHRhcmVhKTtcclxufSBlbHNlIHtcclxuICBudWxsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF1dG9zaXplVGV4dGFyZWEoKXtcclxuXHR2YXIgZWwgPSB0aGlzO1xyXG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OmF1dG87IHBhZGRpbmc6MCc7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJy1tb3otYm94LXNpemluZzpjb250ZW50LWJveCc7XHJcblx0XHRlbC5zdHlsZS5jc3NUZXh0ID0gJ2hlaWdodDonICsgZWwuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcclxuXHR9LDApO1xyXG59XHJcblxyXG4vLyBDdXN0b20gc2VsZWN0ID09PT09PlxyXG4kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgdmFyICR0aGlzID0gJCh0aGlzKSwgbnVtYmVyT2ZPcHRpb25zID0gJCh0aGlzKS5jaGlsZHJlbignb3B0aW9uJykubGVuZ3RoO1xyXG5cclxuICAkdGhpcy5hZGRDbGFzcygnc2VsZWN0X19oaWRkZW4nKTsgXHJcbiAgJHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xyXG4gICR0aGlzLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2VsZWN0X19zdHlsZWRcIj48L2Rpdj4nKTtcclxuXHJcbiAgdmFyICRzdHlsZWRTZWxlY3QgPSAkdGhpcy5uZXh0KCdkaXYuc2VsZWN0X19zdHlsZWQnKTtcclxuICAkc3R5bGVkU2VsZWN0LmFwcGVuZCgnPHNwYW4+PC9zcGFuPjxpIGNsYXNzPVwiaWNvbi1hcnJvdy1kcm9wZG93blwiPjwvaT4nKVxyXG4gICRzdHlsZWRTZWxlY3QuZmluZCgnc3BhbicpLnRleHQoJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKDApLnRleHQoKSk7XHJcblxyXG4gIHZhciAkbGlzdCA9ICQoJzx1bCAvPicsIHtcclxuICAgICdjbGFzcyc6ICdzZWxlY3RfX29wdGlvbnMnXHJcbiAgfSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuICAgICQoJzxsaSAvPicsIHtcclxuICAgICAgdGV4dDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnRleHQoKSxcclxuICAgICAgcmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuICAgIH0pLmFwcGVuZFRvKCRsaXN0KTtcclxuICB9XHJcblxyXG4gIHZhciAkbGlzdEl0ZW1zID0gJGxpc3QuY2hpbGRyZW4oJ2xpJyk7XHJcblxyXG4gICRzdHlsZWRTZWxlY3QuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICQoJ2Rpdi5zZWxlY3RfX3N0eWxlZC5hY3RpdmUnKS5ub3QodGhpcykuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3RfX29wdGlvbnMnKS5zbGlkZVVwKDMwMCk7XHJcbiAgICB9KTtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdF9fb3B0aW9ucycpLnNsaWRlVG9nZ2xlKDMwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRsaXN0SXRlbXMuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICRzdHlsZWRTZWxlY3QuZmluZCgnc3BhbicpLnRleHQoJCh0aGlzKS50ZXh0KCkpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICR0aGlzLnZhbCgkKHRoaXMpLmF0dHIoJ3JlbCcpKTtcclxuICAgICRsaXN0LnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkc3R5bGVkU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICRsaXN0LnNsaWRlVXAoMzAwKTtcclxuICB9KTtcclxuXHJcbn0pOyJdfQ==