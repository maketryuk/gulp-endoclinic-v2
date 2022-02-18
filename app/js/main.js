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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25iZWZvcmV1bmxvYWQiLCJzY3JvbGxUbyIsInNsaWRlVXAiLCJ0YXJnZXQiLCJkdXJhdGlvbiIsInN0eWxlIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInNldFRpbWVvdXQiLCJkaXNwbGF5IiwicmVtb3ZlUHJvcGVydHkiLCJzbGlkZURvd24iLCJnZXRDb21wdXRlZFN0eWxlIiwic2xpZGVUb2dnbGUiLCJvbmxvYWQiLCIkIiwidmFsaWRhdGUiLCJlcnJvckNsYXNzIiwiZXJyb3JQbGFjZW1lbnQiLCJlcnJvciIsImVsZW1lbnQiLCJydWxlcyIsInVzZXJfbmFtZSIsInJlcXVpcmVkIiwidXNlcl9lbWFpbCIsImVtYWlsIiwidXNlcl9waG9uZSIsInVzZXJfZGF0ZWJpcnRoIiwiZGVudGlzdF9uYW1lIiwiZGVudGlzdF9hZGRyZXNzIiwiZGVudGlzdF9lbWFpbCIsImRlbnRpc3RfcGhvbmUiLCJkZW50aXN0X2dkYyIsInN1Ym1pdEhhbmRsZXIiLCJib3hlcyIsImxlbmd0aCIsInBhcmVudHMiLCJhZGRDbGFzcyIsImZvY3VzIiwiZm9ybSIsInN1Ym1pdCIsImJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsInRlY2hub2xvZ3lDYXJkIiwicXVlcnlTZWxlY3RvckFsbCIsInRyZWF0bWVudHMiLCJ0cmVhdG1lbnRzU2lkZWJhciIsInRyZWF0bWVudHNEcm9wZG93blRyaWdnZXIiLCJ0cmVhdG1lbnRzRHJvcGRvd25JdGVtIiwidHJlYXRtZW50c1NpZGViYXJMaW5rIiwic2Nyb2xsc3B5Iiwic2Nyb2xsc3B5cyIsImZvckVhY2giLCJjdXJyZW50IiwiXyIsImN1cnJlbnRFbGVtZW50T2Zmc2V0Iiwib2Zmc2V0VG9wIiwic2Nyb2xsUG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJib2R5IiwibGlua3NIZWlnaHQiLCJhbGxMaW5rcyIsImN1cnJlbnRMaW5rIiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImN1cnJlbnRJRCIsImdldEF0dHJpYnV0ZSIsImFkZCIsImZpcnN0Q2hpbGQiLCJ0ZXh0Q29udGVudCIsImNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJzY3JvbGwiLCJ0b3AiLCJiZWhhdmlvciIsImxpbmtzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzU2Nyb2xsIiwibGluayIsInNjcm9sbENoYW5nZSIsIk92ZXJsYXlTY3JvbGxiYXJzIiwiZmlsZXNUYWJsZSIsImR0IiwiRGF0YVRyYW5zZmVyIiwib24iLCJpIiwiZmlsZXMiLCJmaWxlQmxvYyIsImNsYXNzIiwiZmlsZU5hbWUiLCJ0ZXh0IiwiaXRlbSIsIm5hbWUiLCJhcHBlbmQiLCJmaWxlIiwiaXRlbXMiLCJjbGljayIsInBhcmVudCIsImZpbmQiLCJnZXRBc0ZpbGUiLCJnZXRFbGVtZW50QnlJZCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiY29udGFpbnMiLCJub3QiLCJjbG9zZXN0IiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsImhvcml6b250YWxTY3JvbGwiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwic2VjdGlvbnMiLCJ1dGlscyIsInRvQXJyYXkiLCJtYXhXaWR0aCIsImdldE1heFdpZHRoIiwic2VjdGlvbiIsIm9mZnNldFdpZHRoIiwidHJpZ2dlckl0ZW0iLCJ0byIsIngiLCJpbm5lcldpZHRoIiwiZWFzZSIsInNjcm9sbFRyaWdnZXIiLCJzdGFydCIsInRyaWdnZXIiLCJwaW4iLCJzY3J1YiIsImVuZCIsImludmFsaWRhdGVPblJlZnJlc2giLCJzY3QiLCJjcmVhdGUiLCJvZmZzZXRMZWZ0IiwidG9nZ2xlQ2xhc3MiLCJ0YXJnZXRzIiwiY2xhc3NOYW1lIiwic2hvd1RyaWdnZXIiLCJzaG93SXRlbSIsInRvZ2dsZSIsIm9mZnNldEl0ZW0iLCJzZXRQcm9wZXJ0eSIsInNjcm9sbFkiLCJzbGlkZXJUcmVhdG1lbnRzIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJwYWdpbmF0aW9uIiwiZWwiLCJicmVha3BvaW50cyIsInNsaWRlclByYWN0aWNlcyIsInNsaWRlclRlc3RpbW9uaWFscyIsImxvb3AiLCJjZW50ZXJlZFNsaWRlcyIsInNsaWRlckNhc2VzIiwic2xpZGVyU29jaWFscyIsInRleHRhcmVhIiwiYXV0b3NpemVUZXh0YXJlYSIsImNzc1RleHQiLCJzY3JvbGxIZWlnaHQiLCJlYWNoIiwiJHRoaXMiLCJudW1iZXJPZk9wdGlvbnMiLCJjaGlsZHJlbiIsIndyYXAiLCJhZnRlciIsIiRzdHlsZWRTZWxlY3QiLCJuZXh0IiwiZXEiLCIkbGlzdCIsImluc2VydEFmdGVyIiwicmVsIiwidmFsIiwiYXBwZW5kVG8iLCIkbGlzdEl0ZW1zIiwic3RvcFByb3BhZ2F0aW9uIiwiYXR0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBQSxNQUFNLENBQUNDLGNBQVAsR0FBd0IsWUFBWTtBQUNsQ0QsRUFBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQTBCO0FBQUEsTUFBakJDLFFBQWlCLHVFQUFSLEdBQVE7QUFFdENELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxrQkFBYixHQUFrQyx5QkFBbEM7QUFDQUgsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFFLGtCQUFiLEdB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M0IsQ0FBVCxFQUFZO0FBQzNCQSxJQUFBQSxDQUFDLENBQUM2RyxlQUFGO0FBQ0FULElBQUFBLGFBQWEsQ0FBQ3ZFLElBQWQsQ0FBbUIsTUFBbkIsRUFBMkJSLElBQTNCLENBQWdDbEYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0YsSUFBUixFQUFoQyxFQUFnRGdCLFdBQWhELENBQTRELFFBQTVEO0FBQ0EwRCxJQUFBQSxLQUFLLENBQUNXLEdBQU4sQ0FBVXZLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJLLElBQVIsQ0FBYSxLQUFiLENBQVY7QUFDQVAsSUFBQUEsS0FBSyxDQUFDeEwsT0FBTixDQUFjLEdBQWQ7QUFDRCxHQUxEO0FBT0FvQixFQUFBQSxDQUFDLENBQUMyQixRQUFELENBQUQsQ0FBWTZELEtBQVosQ0FBa0IsWUFBVztBQUMzQnlFLElBQUFBLGFBQWEsQ0FBQy9ELFdBQWQsQ0FBMEIsUUFBMUI7QUFDQWtFLElBQUFBLEtBQUssQ0FBQ3hMLE9BQU4sQ0FBYyxHQUFkO0FBQ0QsR0FIRDtBQUtELENBNUNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTY3JvbGwgdG8gdGhlIHRvcCBiZWZvcmUgdGhlIHBhZ2UgbG9hZHNcclxud2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxufVxyXG5cclxubGV0IHNsaWRlVXAgPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdoZWlnaHQsIG1hcmdpbiwgcGFkZGluZyc7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHdpbmRvdy5zZXRUaW1lb3V0KCAoKSA9PiB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKTtcclxuICAgICAgICAvL2FsZXJ0KFwiIVwiKTtcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuXHJcbmxldCBzbGlkZURvd24gPSAodGFyZ2V0LCBkdXJhdGlvbj01MDApID0+IHtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdkaXNwbGF5Jyk7XHJcbiAgbGV0IGRpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXk7XHJcbiAgaWYgKGRpc3BsYXkgPT09ICdub25lJykgZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xyXG4gIGxldCBoZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xyXG4gIHRhcmdldC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpblRvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gXCJoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ1wiO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpO1xyXG4gICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG5sZXQgc2xpZGVUb2dnbGUgPSAodGFyZ2V0LCBkdXJhdGlvbiA9IDUwMCkgPT4ge1xyXG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgcmV0dXJuIHNsaWRlRG93bih0YXJnZXQsIGR1cmF0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHNsaWRlVXAodGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIC8vIFZhbGlkYXRlIGZvcm1cclxuICAkKFwiLmZvcm1cIikudmFsaWRhdGUoe1xyXG4gICAgZXJyb3JDbGFzczogJ2ludmFsaWQnLFxyXG4gICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uKGVycm9yLCBlbGVtZW50KSB7fSxcclxuICAgIHJ1bGVzOiB7XHJcbiAgICAgIHVzZXJfbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VyX2VtYWlsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgdXNlcl9waG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB1c2VyX2RhdGViaXJ0aDoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZW50aXN0X25hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZGVudGlzdF9hZGRyZXNzOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbnRpc3RfZW1haWw6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZGVudGlzdF9waG9uZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZW50aXN0X2dkYzoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYm94ZXMgPSAkKCcudG9vdGhfX2NoZWNrYm94Jyk7XHJcbiAgICAgIGlmKGJveGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiggJCgnLnRvb3RoX19jaGVja2JveDpjaGVja2VkJykubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgYm94ZXMucGFyZW50cygnLnRvb3RoX19pdGVtJykuYWRkQ2xhc3MoJ2ludmFsaWQnKVxyXG4gICAgICAgICAgYm94ZXNbMF0uZm9jdXMoKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZm9ybS5zdWJtaXQoKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAvLyBWYXJpYWJlbHNcclxuICBsZXQgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gIGxldCB0ZWNobm9sb2d5Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmQnKTtcclxuICAvLyBsZXQgdGVjaG5vbG9neUNhcmRCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpXHJcbiAgLy8gbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2l0ZW1cIik7XHJcbiAgLy8gbGV0IHRhYkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX3RyaWdnZXJcIik7XHJcbiAgLy8gbGV0IHRhYkRyb3Bkb3duVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX3RyaWdnZXIgLmRyb3Bkb3duX190cmlnZ2VyLXRleHRcIik7XHJcbiAgbGV0IHRyZWF0bWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlYXRtZW50cycpO1xyXG4gIGxldCB0cmVhdG1lbnRzU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cy1zaWRlYmFyXCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzIC5kcm9wZG93bl9fdHJpZ2dlclwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX2l0ZW1cIik7XHJcbiAgbGV0IHRyZWF0bWVudHNTaWRlYmFyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJlYXRtZW50cy1zaWRlYmFyIGFcIik7XHJcblxyXG4gIC8vIFNweXNjcm9sbFxyXG4gIGlmICh0cmVhdG1lbnRzU2lkZWJhcikge1xyXG4gICAgbGV0IHNjcm9sbHNweXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyZWF0bWVudHMtY29udGVudF9faXRlbVwiKTtcclxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cy1zaWRlYmFyIGFcIik7XHJcbiAgICBsZXQgbGlua3NIZWlnaHQgPSBsaW5rcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICBsZXQgYWxsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyZWF0bWVudHMtc2lkZWJhciBhXCIpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxzcHkoKSB7XHJcbiAgICAgIHNjcm9sbHNweXMuZm9yRWFjaChjdXJyZW50ID0+IHtcclxuICAgICAgICBsZXQgXyA9IGN1cnJlbnQ7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50T2Zmc2V0ID0gXy5vZmZzZXRUb3AgLSAxNTA7XHJcbiAgICAgICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcclxuICAgICAgICBpZiAoY3VycmVudEVsZW1lbnRPZmZzZXQgPD0gc2Nyb2xsUG9zaXRpb24gKyBsaW5rc0hlaWdodCkge1xyXG4gICAgICAgICAgYWxsTGlua3MuZm9yRWFjaChjdXJyZW50TGluayA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRMaW5rLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICAgIGN1cnJlbnRMaW5rLnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRJRCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhW2hyZWY9XCIjJHtjdXJyZW50SUR9XCJdYCkucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwianMtY3VycmVudFwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93blRyaWdnZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cy1zaWRlYmFyIGxpLmpzLWN1cnJlbnQgYVwiKS50ZXh0Q29udGVudFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICBzY3JvbGxzcHkoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzU2Nyb2xsKSB7XHJcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikub2Zmc2V0VG9wICsgMjAwO1xyXG4gIFxyXG4gICAgICBzY3JvbGwoe1xyXG4gICAgICAgIHRvcDogb2Zmc2V0VG9wLFxyXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBNYW5pcHVsYXRpb25zIHdpdGggaGVhZGVyIGNsYXNzZXMgb24gc2Nyb2xsXHJcbiAgbGV0IHNjcm9sbENoYW5nZSA9IDE7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgIGxldCBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgaWYgKHNjcm9sbCA+PSBzY3JvbGxDaGFuZ2UpIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtdG9wXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtdG9wXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIsIFwianMtbmF2LW9wZW5cIiwgXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIC8vIFRhYnNcclxuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRhYkl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuICAvLyAgIHRhYkl0ZW1baV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHJcbiAgLy8gICAgIHRhYkNvbnRlbnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIC8vICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgICB0YWJJdGVtLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAvLyAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1hY3RpdmVcIik7XHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgICAgdGFiQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gIC8vICAgICB0YWJJdGVtW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcblxyXG4gIC8vICAgICB0YWJEcm9wZG93blRyaWdnZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX3RyaWdnZXIuanMtYWN0aXZlXCIpLnRleHRDb250ZW50XHJcbiAgLy8gICB9KTtcclxuICAvLyB9IFxyXG4gIFxyXG4gIC8vIGlmICh0YWJEcm9wZG93blRyaWdnZXIpIHtcclxuICAvLyAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICAvLyB9XHJcblxyXG4gIC8vIEN1c3RvbSBzY3JvbGxiYXIgaW4gdG9vdGggdGFibGVcclxuICBPdmVybGF5U2Nyb2xsYmFycyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvb3RoXCIpLCB7fSk7XHJcblxyXG4gIC8vIEZpbGVzIGlucHV0XHJcbiAgLy8gbGV0IGZpbGVzVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XHJcbiAgbGV0IGZpbGVzVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsZXNfX3RhYmxlJyk7XHJcbiAgXHJcbiAgLy8gbGV0IHVwZGF0ZUZpbGVzTGlzdCA9ICgpID0+IHtcclxuICAvLyAgIGxldCBjaGlsZHJlbiA9IFwiXCI7XHJcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzVHJpZ2dlci5maWxlcy5sZW5ndGg7ICsraSkge1xyXG4gIC8vICAgICBjaGlsZHJlbiArPSAgJzxkaXYgY2xhc3M9XCJmaWxlc19fd3JhcHBlclwiPicgKyAnPGRpdiBjbGFzcz1cImZpbGVzLWl0ZW1cIj4nICsgJzxpIGNsYXNzPVwiaWNvbi1maWxlXCI+PC9pPicgKyAnPHNwYW4gY2xhc3M9XCJmaWxlcy1pdGVtX19uYW1lXCI+JyArIGZpbGVzVHJpZ2dlci5maWxlcy5pdGVtKGkpLm5hbWUgKyAnPC9zcGFuLz4nICsgJzxpIGNsYXNzPVwiZmlsZXMtaXRlbV9fcmVtb3ZlIGljb24tdHJhc2gtY2FuXCIgb25jbGljaz1cInJldHVybiB0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcIj48L2k+JyArICc8L2Rpdj4nICsgJzwvZGl2PidcclxuICAvLyAgIH1cclxuICAvLyAgIGZpbGVzVGFibGUuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcbiAgLy8gICBpZiAoY2hpbGRyZW4ubGVuZ3RoID49IDApIHtcclxuICAvLyAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIC8vIGlmIChmaWxlc1RyaWdnZXIpIHtcclxuICAvLyAgIGZpbGVzVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAvLyAgICAgdXBkYXRlRmlsZXNMaXN0KClcclxuICAvLyAgIH0pXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHJcbiAgJChcIiNmaWxlXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcclxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmZpbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IGZpbGVCbG9jID0gJCgnPGRpdi8+Jywge2NsYXNzOiAnZmlsZXNfX3dyYXBwZXInfSksXHJcbiAgICAgICAgZmlsZU5hbWUgPSAkKCc8ZmlsZXMtaXRlbS8+Jywge2NsYXNzOiAnbmFtZScsIHRleHQ6IHRoaXMuZmlsZXMuaXRlbShpKS5uYW1lfSk7XHJcbiAgICAgIGZpbGVCbG9jLmFwcGVuZChgPGRpdiBjbGFzcz1cImZpbGVzLWl0ZW1cIj48aSBjbGFzcz1cImljb24tZmlsZVwiPjwvaT48c3BhbiBjbGFzcz1cImZpbGVzLWl0ZW1fX25hbWVcIj4ke3RoaXMuZmlsZXMuaXRlbShpKS5uYW1lfTwvc3Bhbj48aSBjbGFzcz1cImZpbGVzLWl0ZW1fX3JlbW92ZSBpY29uLXRyYXNoLWNhblwiPjwvaT48ZGl2PjxkaXY+YClcclxuICAgICAgJChcIi5maWxlc19fdGFibGVcIikuYXBwZW5kKGZpbGVCbG9jKTtcclxuICAgIH07XHJcbiAgICBmb3IgKGxldCBmaWxlIG9mIHRoaXMuZmlsZXMpIHtcclxuICAgICAgZHQuaXRlbXMuYWRkKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maWxlcyA9IGR0LmZpbGVzO1xyXG5cclxuICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcbiAgXHJcbiAgICAkKCcuZmlsZXMtaXRlbV9fcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgbGV0IG5hbWUgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5maWxlcy1pdGVtX19uYW1lJykudGV4dCgpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJy5maWxlc19fd3JhcHBlcicpLnJlbW92ZSgpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZHQuaXRlbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlmKG5hbWUgPT09IGR0Lml0ZW1zW2ldLmdldEFzRmlsZSgpLm5hbWUpe1xyXG4gICAgICAgICAgZHQuaXRlbXMucmVtb3ZlKGkpO1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJykuZmlsZXMgPSBkdC5maWxlcztcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIFxyXG4gIC8vIE1lZGlhIDk5MiA9PT09PT5cclxuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA5OTJweClcIikubWF0Y2hlcykge1xyXG4gICAgLy8gT3BlbmluZyBkZXNrdG9wIG1lbnUgd2l0aCBidXJnZXJcclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoaGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImpzLW5hdi1vcGVuXCIpKSB7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuaW5nIHRlY2hub2xvZ3kgYWNjb3JkaW9uXHJcbiAgICAkKCcudGVjaG5vbG9neV9fd3JhcHBlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpLm5vdCgkKHRoaXMpLmNsb3Nlc3QoXCIudGVjaG5vbG9neV9fd3JhcHBlclwiKSkucmVtb3ZlQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpLmFkZENsYXNzKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtYWN0aXZlJykpIHtcclxuICAgICAgICAkKCcudGVjaG5vbG9neS1jYXJkX19ib2R5Jykubm90KCQodGhpcykuZmluZCgnLnRlY2hub2xvZ3ktY2FyZF9fYm9keScpKS5zbGlkZVVwKDMwMCk7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCcudGVjaG5vbG9neS1jYXJkX19ib2R5Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWNobm9sb2d5Q2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICB0ZWNobm9sb2d5Q2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgIHRlY2hub2xvZ3lDYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgLy8gdGVjaG5vbG9neUNhcmRCb2R5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIC8vICAgICAvLyAgIHNsaWRlVXAoZWxlbWVudClcclxuICAgIC8vICAgICAvLyB9KTtcclxuXHJcbiAgICAvLyAgICAgdGVjaG5vbG9neUNhcmRbaV0uY2xhc3NMaXN0LmFkZCgnanMtYWN0aXZlJyk7XHJcblxyXG4gICAgLy8gICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZWxlbWVudCB0aGF0IHdhcyBjbGlja2VkXHJcbiAgICAvLyAgICAgc2xpZGVEb3duKHRlY2hub2xvZ3lDYXJkQm9keVtpXSwgMzAwKVxyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH1cclxuICAgIFxyXG5cclxuICAgIGxldCBob3Jpem9udGFsU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvcml6b250YWwtc2Nyb2xsJylcclxuXHJcbiAgICBpZiAoaG9yaXpvbnRhbFNjcm9sbCkge1xyXG4gICAgICAvLyBIb3Jpem9udGFsIHNjcm9sbCBpbiBUcmVhdG1lbnRzID09PT09PlxyXG4gICAgICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xyXG4gIFxyXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IGdzYXAudXRpbHMudG9BcnJheShcIi5ob3Jpem9udGFsLXNjcm9sbFwiKTtcclxuICAgICAgbGV0IG1heFdpZHRoID0gMDtcclxuICBcclxuICAgICAgY29uc3QgZ2V0TWF4V2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgbWF4V2lkdGggPSAwO1xyXG4gICAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgIG1heFdpZHRoICs9IHNlY3Rpb24ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGdldE1heFdpZHRoKCk7XHJcbiAgICAgIFNjcm9sbFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlZnJlc2hJbml0XCIsIGdldE1heFdpZHRoKTtcclxuICBcclxuICAgICAgbGV0IHRyaWdnZXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKTtcclxuICBcclxuICAgICAgZ3NhcC50byhzZWN0aW9ucywge1xyXG4gICAgICAgIHg6ICgpID0+IGAtJHttYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRofWAsXHJcbiAgICAgICAgZWFzZTogXCJub25lXCIsXHJcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xyXG4gICAgICAgICAgc3RhcnQ6IFwiLTEyMHB4IHRvcFwiLFxyXG4gICAgICAgICAgdHJpZ2dlcjogdHJpZ2dlckl0ZW0sXHJcbiAgICAgICAgICBwaW46IHRydWUsXHJcbiAgICAgICAgICBzY3J1YjogdHJ1ZSxcclxuICAgICAgICAgIGVuZDogKCkgPT4gYCs9JHttYXhXaWR0aH1gLFxyXG4gICAgICAgICAgaW52YWxpZGF0ZU9uUmVmcmVzaDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goKHNjdCwgaSkgPT4ge1xyXG4gICAgICAgIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcclxuICAgICAgICAgIHRyaWdnZXI6IHNjdCxcclxuICAgICAgICAgIHN0YXJ0OiAoKSA9PiAndG9wIHRvcC09JyArIChzY3Qub2Zmc2V0TGVmdCAtIHdpbmRvdy5pbm5lcldpZHRoLzIpICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIGVuZDogKCkgPT4gJys9JyArIHNjdC5vZmZzZXRXaWR0aCAqIChtYXhXaWR0aCAvIChtYXhXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSksXHJcbiAgICAgICAgICB0b2dnbGVDbGFzczoge3RhcmdldHM6IHNjdCwgY2xhc3NOYW1lOiBcImFjdGl2ZVwifVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBUb2dnbGUgdmlzaWJsZSBlbGVtZW50c1xyXG4gICAgbGV0IHNob3dUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93X190cmlnZ2VyXCIpO1xyXG4gICAgbGV0IHNob3dJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93X19pdGVtXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hvd1RyaWdnZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgc2hvd1RyaWdnZXJbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBzaG93VHJpZ2dlcltpXS5jbGFzc0xpc3QudG9nZ2xlKCdqcy1hY3RpdmUnKVxyXG5cclxuICAgICAgICBpZiAoc2hvd1RyaWdnZXJbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICBzaG93VHJpZ2dlcltpXS50ZXh0Q29udGVudCA9ICdTZWUgbGVzcydcclxuICAgICAgICAgIHNob3dJdGVtLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2hvd1RyaWdnZXJbaV0udGV4dENvbnRlbnQgPSAnU2VlIGFsbCdcclxuICAgICAgICAgIHNob3dJdGVtLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHJlYXRtZW50c1NpZGViYXIpIHtcclxuICAgICAgZm9yIChjb25zdCBsaW5rIG9mIGxpbmtzU2Nyb2xsKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKS5vZmZzZXRUb3AgLSAxNTA7XHJcbiAgICBcclxuICAgICAgICBzY3JvbGwoe1xyXG4gICAgICAgICAgdG9wOiBvZmZzZXRUb3AsXHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJlYXRtZW50cyBwYWdlIHRhYnMgbmF2aWdhdGlvblxyXG4gICAgLy8gbGV0IHRyZWF0bWVudHNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25cIik7XHJcbiAgICAvLyBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX2xpc3RcIik7XHJcblxyXG4gICAgLy8gaWYgKHRyZWF0bWVudHNEcm9wZG93biAmJiB0cmVhdG1lbnRzRHJvcGRvd25MaXN0KSB7XHJcbiAgICAvLyAgIGxldCBvZmZzZXRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19saXN0Jykub2Zmc2V0SGVpZ2h0XHJcbiAgICAvLyAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdHJlYXRtZW50cy1kcm9wZG93bi1vZmZzZXRcIiwgb2Zmc2V0SXRlbSArIFwicHhcIilcclxuICAgIFxyXG4gICAgLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gb2Zmc2V0SXRlbSArIDY0ICkge1xyXG4gICAgLy8gICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgIC8vICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKS5jbGFzc0xpc3QuYWRkKFwib2Zmc2V0LXRvcFwiKVxyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICB0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgLy8gICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKS5jbGFzc0xpc3QucmVtb3ZlKFwib2Zmc2V0LXRvcFwiKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcblxyXG4gICAgLy8gICB0cmVhdG1lbnRzRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1zY3JvbGwtZG93blwiKSkge1xyXG4gICAgLy8gICAgICAgc2xpZGVUb2dnbGUodHJlYXRtZW50c0Ryb3Bkb3duTGlzdCwgMzAwKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgbnVsbFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKHRyZWF0bWVudHNEcm9wZG93blRyaWdnZXIgJiYgdHJlYXRtZW50c0Ryb3Bkb3duSXRlbSkge1xyXG4gICAgICBsZXQgb2Zmc2V0SXRlbSA9IHRyZWF0bWVudHNEcm9wZG93bkl0ZW0ub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdHJlYXRtZW50cy1kcm9wZG93bi1vZmZzZXRcIiwgb2Zmc2V0SXRlbSArIFwicHhcIik7XHJcbiAgICAgIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gb2Zmc2V0SXRlbSArIDY0ICkge1xyXG4gICAgICAgICAgdHJlYXRtZW50c1NpZGViYXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgICAgdHJlYXRtZW50cy5jbGFzc0xpc3QuYWRkKFwib2Zmc2V0LXRvcFwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgICAgICAgIGlmICh0cmVhdG1lbnRzU2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1zY3JvbGwtZG93blwiKSkge1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmVhdG1lbnRzU2lkZWJhckxpbmsubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICB0cmVhdG1lbnRzU2lkZWJhckxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudHNTaWRlYmFyTGluay5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtY3VycmVudFwiKVxyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIilcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudHNTaWRlYmFyTGlua1tpXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJqcy1jdXJyZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudHNEcm9wZG93blRyaWdnZXIuZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IHRyZWF0bWVudHNTaWRlYmFyTGlua1tpXS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzU2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25JdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzLmNsYXNzTGlzdC5yZW1vdmUoXCJvZmZzZXQtdG9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cmVhdG1lbnRzU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRyZWF0bWVudHNEcm9wZG93blRyaWdnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWFjdGl2ZVwiKVxyXG4gICAgICAgIHNsaWRlVG9nZ2xlKHRyZWF0bWVudHNEcm9wZG93bkl0ZW0sIDMwMClcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhciBsaS5qcy1jdXJyZW50IGFcIikudGV4dENvbnRlbnRcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBPcGVuaW5nIG1vYmlsZSBtZW51IHdpdGggYnVyZ2VyXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1uYXYtb3BlblwiKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwianMtbG9ja1wiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25zICEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISFcclxuICAgIC8vICQoJy50ZWNobm9sb2d5X193cmFwcGVyIC50ZWNobm9sb2d5LWNhcmQnKS5ub3QoJCgnLnRlY2hub2xvZ3lfX3dyYXBwZXIuc2Vjb25kYXJ5IC50ZWNobm9sb2d5LWNhcmQnKSkucmVtb3ZlQ2xhc3MoJ2pzLWFjdGl2ZScpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGNsYXNzIGZyb20gYWxsIGVsZW1lbnRzXHJcbiAgICAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkW2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJsb2NrIHNsaWRlciAnVHJlYXRtZW50cydcclxuICAgIGNvbnN0IHNsaWRlclRyZWF0bWVudHMgPSBuZXcgU3dpcGVyKCcudHJlYXRtZW50cy1zbGlkZXInLCB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgICBwcmV2RWw6IFwiLnRyZWF0bWVudHMtYnV0dG9uLXByZXZcIixcclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiBcIi50cmVhdG1lbnRzLXBhZ2luYXRpb25cIixcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnUHJhY3RpY2VzJ1xyXG4gIGNvbnN0IHNsaWRlclByYWN0aWNlcyA9IG5ldyBTd2lwZXIoJy5wcmFjdGljZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgIHByZXZFbDogXCIucHJhY3RpY2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIucHJhY3RpY2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnVGVzdGltb25pYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclRlc3RpbW9uaWFscyA9IG5ldyBTd2lwZXIoJy50ZXN0aW1vbmlhbHMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnRlc3RpbW9uaWFscy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnRlc3RpbW9uaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdDYXNlcydcclxuICBjb25zdCBzbGlkZXJDYXNlcyA9IG5ldyBTd2lwZXIoJy5jYXNlcy1zbGlkZXInLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi5jYXNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLmNhc2VzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuY2FzZXMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gQmxvY2sgc2xpZGVyICdTb2NpYWxzJ1xyXG4gIGNvbnN0IHNsaWRlclNvY2lhbHMgPSBuZXcgU3dpcGVyKCcuc29jaWFsc19fc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuc29jaWFscy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnNvY2lhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi5zb2NpYWxzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgICA5OTI6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIFNjcm9sbCB0byBhbmNob3JcclxubGV0IGxpbmtzU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGxfX2xpbmtcIik7XHJcblxyXG5mb3IgKGNvbnN0IGxpbmsgb2YgbGlua3NTY3JvbGwpIHtcclxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGlja0hhbmRsZXIoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gIGNvbnN0IG9mZnNldFRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikub2Zmc2V0VG9wIC0gMTUwO1xyXG5cclxuICBzY3JvbGwoe1xyXG4gICAgdG9wOiBvZmZzZXRUb3AsXHJcbiAgICBiZWhhdmlvcjogXCJzbW9vdGhcIlxyXG4gIH0pO1xyXG59IiwiLy8gQXV0byBzaXplIHRleHRhcmVhID09PT09PlxyXG52YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cclxuaWYgKHRleHRhcmVhKSB7XHJcbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGF1dG9zaXplVGV4dGFyZWEpO1xyXG59IGVsc2Uge1xyXG4gIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gYXV0b3NpemVUZXh0YXJlYSgpe1xyXG5cdHZhciBlbCA9IHRoaXM7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6YXV0bzsgcGFkZGluZzowJztcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnLW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94JztcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OicgKyBlbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdH0sMCk7XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBzZWxlY3QgPT09PT0+XHJcbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBudW1iZXJPZk9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKS5sZW5ndGg7XHJcblxyXG4gICR0aGlzLmFkZENsYXNzKCdzZWxlY3RfX2hpZGRlbicpOyBcclxuICAkdGhpcy53cmFwKCc8ZGl2IGNsYXNzPVwic2VsZWN0XCI+PC9kaXY+Jyk7XHJcbiAgJHRoaXMuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzZWxlY3RfX3N0eWxlZFwiPjwvZGl2PicpO1xyXG5cclxuICB2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3RfX3N0eWxlZCcpO1xyXG4gICRzdHlsZWRTZWxlY3QuYXBwZW5kKCc8c3Bhbj48L3NwYW4+PGkgY2xhc3M9XCJpY29uLWFycm93LWRyb3Bkb3duXCI+PC9pPicpXHJcbiAgJHN0eWxlZFNlbGVjdC5maW5kKCdzcGFuJykudGV4dCgkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoMCkudGV4dCgpKTtcclxuXHJcbiAgdmFyICRsaXN0ID0gJCgnPHVsIC8+Jywge1xyXG4gICAgJ2NsYXNzJzogJ3NlbGVjdF9fb3B0aW9ucydcclxuICB9KS5pbnNlcnRBZnRlcigkc3R5bGVkU2VsZWN0KTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgJCgnPGxpIC8+Jywge1xyXG4gICAgICB0ZXh0OiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudGV4dCgpLFxyXG4gICAgICByZWw6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS52YWwoKVxyXG4gICAgfSkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgdmFyICRsaXN0SXRlbXMgPSAkbGlzdC5jaGlsZHJlbignbGknKTtcclxuXHJcbiAgJHN0eWxlZFNlbGVjdC5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJCgnZGl2LnNlbGVjdF9fc3R5bGVkLmFjdGl2ZScpLm5vdCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdF9fb3B0aW9ucycpLnNsaWRlVXAoMzAwKTtcclxuICAgIH0pO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0X19vcHRpb25zJykuc2xpZGVUb2dnbGUoMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJGxpc3RJdGVtcy5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJHN0eWxlZFNlbGVjdC5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJHRoaXMudmFsKCQodGhpcykuYXR0cigncmVsJykpO1xyXG4gICAgJGxpc3Quc2xpZGVVcCgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICRzdHlsZWRTZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJGxpc3Quc2xpZGVVcCgzMDApO1xyXG4gIH0pO1xyXG5cclxufSk7Il19