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
      // var boxes = $('.tooth__checkbox');
      // if(boxes.length > 0) {
      //   if( $('.tooth__checkbox:checked').length < 1) {
      //     boxes.parents('.tooth__item').addClass('invalid')
      //     boxes[0].focus();
      //     return false;
      //   }
      // }
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

    var scrollspys = document.querySelectorAll(".treatments-content__item");
    var links = document.querySelector(".treatments-sidebar a");
    var linksHeight = links.offsetHeight;
    var allLinks = document.querySelectorAll(".treatments-sidebar a");
    window.addEventListener("scroll", function () {
      scrollspy();
    });
  } else {
    null;
  } // Scroll to contacts-form


  var linksScroll = document.querySelectorAll(".scroll__link");

  var _iterator = _createForOfIteratorHelper(linksScroll),
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
      top: offsetTop - 150,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJVSS9jb250YWN0cy1mb3JtL2NvbnRhY3RzLWZvcm0uanMiXSwibmFtZXMiOlsic2xpZGVVcCIsInRhcmdldCIsImR1cmF0aW9uIiwic3R5bGUiLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwid2luZG93Iiwic2V0VGltZW91dCIsImRpc3BsYXkiLCJyZW1vdmVQcm9wZXJ0eSIsInNsaWRlRG93biIsImdldENvbXB1dGVkU3R5bGUiLCJzbGlkZVRvZ2dsZSIsIm9ubG9hZCIsIiQiLCJ2YWxpZGF0ZSIsImVycm9yQ2xhc3MiLCJlcnJvclBsYWNlbWVudCIsImVycm9yIiwiZWxlbWVudCIsInJ1bGVzIiwidXNlcl9uYW1lIiwicmVxdWlyZWQiLCJ1c2VyX2VtYWlsIiwiZW1haWwiLCJ1c2VyX3Bob25lIiwidXNlcl9kYXRlYmlydGgiLCJkZW50aXN0X25hbWUiLCJkZW50aXN0X2FkZHJlc3MiLCJkZW50aXN0X2VtYWlsIiwiZGVudGlzdF9waG9uZSIsImRlbnRpc3RfZ2RjIiwic3VibWl0SGFuZGxlciIsImZvcm0iLCJzdWJtaXQiLCJidXJnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJ0ZWNobm9sb2d5Q2FyZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmVhdG1lbnRzIiwidHJlYXRtZW50c1NpZGViYXIiLCJ0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyIiwidHJlYXRtZW50c0Ryb3Bkb3duSXRlbSIsInRyZWF0bWVudHNTaWRlYmFyTGluayIsInNjcm9sbHNweSIsInNjcm9sbHNweXMiLCJmb3JFYWNoIiwiY3VycmVudCIsIl8iLCJjdXJyZW50RWxlbWVudE9mZnNldCIsIm9mZnNldFRvcCIsInNjcm9sbFBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsImxpbmtzSGVpZ2h0IiwiYWxsTGlua3MiLCJjdXJyZW50TGluayIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjdXJyZW50SUQiLCJnZXRBdHRyaWJ1dGUiLCJhZGQiLCJmaXJzdENoaWxkIiwidGV4dENvbnRlbnQiLCJsaW5rcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW5rc1Njcm9sbCIsImxpbmsiLCJjbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwic2Nyb2xsIiwidG9wIiwiYmVoYXZpb3IiLCJzY3JvbGxDaGFuZ2UiLCJPdmVybGF5U2Nyb2xsYmFycyIsImZpbGVzVGFibGUiLCJkdCIsIkRhdGFUcmFuc2ZlciIsIm9uIiwiaSIsImZpbGVzIiwibGVuZ3RoIiwiZmlsZUJsb2MiLCJjbGFzcyIsImZpbGVOYW1lIiwidGV4dCIsIml0ZW0iLCJuYW1lIiwiYXBwZW5kIiwiZmlsZSIsIml0ZW1zIiwiY2xpY2siLCJwYXJlbnQiLCJmaW5kIiwicGFyZW50cyIsImdldEFzRmlsZSIsImdldEVsZW1lbnRCeUlkIiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJjb250YWlucyIsIm5vdCIsImNsb3Nlc3QiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJob3Jpem9udGFsU2Nyb2xsIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwiU2Nyb2xsVHJpZ2dlciIsInNlY3Rpb25zIiwidXRpbHMiLCJ0b0FycmF5IiwibWF4V2lkdGgiLCJnZXRNYXhXaWR0aCIsInNlY3Rpb24iLCJvZmZzZXRXaWR0aCIsInRyaWdnZXJJdGVtIiwidG8iLCJ4IiwiaW5uZXJXaWR0aCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwic3RhcnQiLCJ0cmlnZ2VyIiwicGluIiwic2NydWIiLCJlbmQiLCJpbnZhbGlkYXRlT25SZWZyZXNoIiwic2N0IiwiY3JlYXRlIiwib2Zmc2V0TGVmdCIsInRvZ2dsZUNsYXNzIiwidGFyZ2V0cyIsImNsYXNzTmFtZSIsInNob3dUcmlnZ2VyIiwic2hvd0l0ZW0iLCJ0b2dnbGUiLCJvZmZzZXRJdGVtIiwic2V0UHJvcGVydHkiLCJzY3JvbGxZIiwic2xpZGVyVHJlYXRtZW50cyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwicGFnaW5hdGlvbiIsImVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXJQcmFjdGljZXMiLCJzbGlkZXJUZXN0aW1vbmlhbHMiLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJzbGlkZXJDYXNlcyIsInNsaWRlclNvY2lhbHMiLCJ0ZXh0YXJlYSIsImF1dG9zaXplVGV4dGFyZWEiLCJjc3NUZXh0Iiwic2Nyb2xsSGVpZ2h0IiwiZWFjaCIsIiR0aGlzIiwibnVtYmVyT2ZPcHRpb25zIiwiY2hpbGRyZW4iLCJ3cmFwIiwiYWZ0ZXIiLCIkc3R5bGVkU2VsZWN0IiwibmV4dCIsImVxIiwiJGxpc3QiLCJpbnNlcnRBZnRlciIsInJlbCIsInZhbCIsImFwcGVuZFRvIiwiJGxpc3RJdGVtcyIsInN0b3BQcm9wYWdhdGlvbiIsImF0dHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxNQUFELEVBQTBCO0FBQUEsTUFBakJDLFFBQWlCLHVFQUFSLEdBQVE7QUFFdENELEVBQUFBLE1BQU0sQ0FBQ0UsS0FBUCxDQUFhQyxrQkFBYixHQUFrQyx5QkFBbEM7QUFDQUgsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFFLGtCQUFiLEdBQWtDSCxRQUFRLEdBQUcsSUFBN0M7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLENBQWFHLE1BQWIsR0FBc0JMLE1BQU0sQ0FBQ00sWUFBUCxHQUFzQixJQUE1QztBQUNBTixFQUFBQSxNQUFNLENBQUNNLFlBQVA7QUFD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Q0FtRSxJQUFBQSxLQUFLLENBQUN2TCxPQUFOLENBQWMsR0FBZDtBQUNELEdBSEQ7QUFLRCxDQTVDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2Nyb2xsIHRvIHRoZSB0b3AgYmVmb3JlIHRoZSBwYWdlIGxvYWRzXHJcbi8vIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbi8vIH1cclxuXHJcbmxldCBzbGlkZVVwID0gKHRhcmdldCwgZHVyYXRpb249NTAwKSA9PiB7XHJcblxyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmcnO1xyXG4gIHRhcmdldC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdUb3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luVG9wID0gMDtcclxuICB0YXJnZXQuc3R5bGUubWFyZ2luQm90dG9tID0gMDtcclxuICB3aW5kb3cuc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLXRvcCcpO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi10b3AnKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21hcmdpbi1ib3R0b20nKTtcclxuICAgICAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLWR1cmF0aW9uJyk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5Jyk7XHJcbiAgICAgICAgLy9hbGVydChcIiFcIik7XHJcbiAgfSwgZHVyYXRpb24pO1xyXG59XHJcblxyXG5sZXQgc2xpZGVEb3duID0gKHRhcmdldCwgZHVyYXRpb249NTAwKSA9PiB7XHJcblxyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpO1xyXG4gIGxldCBkaXNwbGF5ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5O1xyXG4gIGlmIChkaXNwbGF5ID09PSAnbm9uZScpIGRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcclxuICBsZXQgaGVpZ2h0ID0gdGFyZ2V0Lm9mZnNldEhlaWdodDtcclxuICB0YXJnZXQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuICB0YXJnZXQuc3R5bGUucGFkZGluZ1RvcCA9IDA7XHJcbiAgdGFyZ2V0LnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gIHRhcmdldC5zdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xyXG4gIHRhcmdldC5vZmZzZXRIZWlnaHQ7XHJcbiAgdGFyZ2V0LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IFwiaGVpZ2h0LCBtYXJnaW4sIHBhZGRpbmdcIjtcclxuICB0YXJnZXQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xyXG4gIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy10b3AnKTtcclxuICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctYm90dG9tJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJyk7XHJcbiAgdGFyZ2V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tYm90dG9tJyk7XHJcbiAgd2luZG93LnNldFRpbWVvdXQoICgpID0+IHtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnaGVpZ2h0Jyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICB0YXJnZXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcclxuICAgIHRhcmdldC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1wcm9wZXJ0eScpO1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG5cclxubGV0IHNsaWRlVG9nZ2xlID0gKHRhcmdldCwgZHVyYXRpb24gPSA1MDApID0+IHtcclxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgIHJldHVybiBzbGlkZURvd24odGFyZ2V0LCBkdXJhdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBzbGlkZVVwKHRhcmdldCwgZHVyYXRpb24pO1xyXG4gIH1cclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAvLyBWYWxpZGF0ZSBmb3JtXHJcbiAgJChcIi5mb3JtXCIpLnZhbGlkYXRlKHtcclxuICAgIGVycm9yQ2xhc3M6ICdpbnZhbGlkJyxcclxuICAgIGVycm9yUGxhY2VtZW50OiBmdW5jdGlvbihlcnJvciwgZWxlbWVudCkge30sXHJcbiAgICBydWxlczoge1xyXG4gICAgICB1c2VyX25hbWU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdXNlcl9lbWFpbDoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHVzZXJfcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgdXNlcl9kYXRlYmlydGg6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZGVudGlzdF9uYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbnRpc3RfYWRkcmVzczoge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBkZW50aXN0X2VtYWlsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlbnRpc3RfcGhvbmU6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgZGVudGlzdF9nZGM6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gdmFyIGJveGVzID0gJCgnLnRvb3RoX19jaGVja2JveCcpO1xyXG4gICAgICAvLyBpZihib3hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIC8vICAgaWYoICQoJy50b290aF9fY2hlY2tib3g6Y2hlY2tlZCcpLmxlbmd0aCA8IDEpIHtcclxuICAgICAgLy8gICAgIGJveGVzLnBhcmVudHMoJy50b290aF9faXRlbScpLmFkZENsYXNzKCdpbnZhbGlkJylcclxuICAgICAgLy8gICAgIGJveGVzWzBdLmZvY3VzKCk7XHJcbiAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gVmFyaWFiZWxzXHJcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcclxuICBsZXQgdGVjaG5vbG9neUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVjaG5vbG9neS1jYXJkJyk7XHJcbiAgLy8gbGV0IHRlY2hub2xvZ3lDYXJkQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKVxyXG4gIC8vIGxldCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19pdGVtXCIpO1xyXG4gIC8vIGxldCB0YWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX190cmlnZ2VyXCIpO1xyXG4gIC8vIGxldCB0YWJEcm9wZG93blRyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX190cmlnZ2VyIC5kcm9wZG93bl9fdHJpZ2dlci10ZXh0XCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyZWF0bWVudHMnKTtcclxuICBsZXQgdHJlYXRtZW50c1NpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhclwiKTtcclxuICBsZXQgdHJlYXRtZW50c0Ryb3Bkb3duVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJlYXRtZW50cyAuZHJvcGRvd25fX3RyaWdnZXJcIik7XHJcbiAgbGV0IHRyZWF0bWVudHNEcm9wZG93bkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX19pdGVtXCIpO1xyXG4gIGxldCB0cmVhdG1lbnRzU2lkZWJhckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRyZWF0bWVudHMtc2lkZWJhciBhXCIpO1xyXG5cclxuICAvLyBTcHlzY3JvbGxcclxuICBpZiAodHJlYXRtZW50c1NpZGViYXIpIHtcclxuICAgIGxldCBzY3JvbGxzcHlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmVhdG1lbnRzLWNvbnRlbnRfX2l0ZW1cIik7XHJcbiAgICBsZXQgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhciBhXCIpO1xyXG4gICAgbGV0IGxpbmtzSGVpZ2h0ID0gbGlua3Mub2Zmc2V0SGVpZ2h0O1xyXG4gICAgbGV0IGFsbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cmVhdG1lbnRzLXNpZGViYXIgYVwiKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsc3B5KCkge1xyXG4gICAgICBzY3JvbGxzcHlzLmZvckVhY2goY3VycmVudCA9PiB7XHJcbiAgICAgICAgbGV0IF8gPSBjdXJyZW50O1xyXG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudE9mZnNldCA9IF8ub2Zmc2V0VG9wIC0gMTUwO1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50T2Zmc2V0IDw9IHNjcm9sbFBvc2l0aW9uICsgbGlua3NIZWlnaHQpIHtcclxuICAgICAgICAgIGFsbExpbmtzLmZvckVhY2goY3VycmVudExpbmsgPT4ge1xyXG4gICAgICAgICAgICBjdXJyZW50TGluay5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1jdXJyZW50XCIpO1xyXG4gICAgICAgICAgICBjdXJyZW50TGluay5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50SUQgPSBjdXJyZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYVtocmVmPVwiIyR7Y3VycmVudElEfVwiXWApLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImpzLWN1cnJlbnRcIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMtc2lkZWJhciBsaS5qcy1jdXJyZW50IGFcIikudGV4dENvbnRlbnRcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgc2Nyb2xsc3B5KClcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBudWxsXHJcbiAgfVxyXG5cclxuICAvLyBTY3JvbGwgdG8gY29udGFjdHMtZm9ybVxyXG4gIGNvbnN0IGxpbmtzU2Nyb2xsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zY3JvbGxfX2xpbmtcIik7XHJcblxyXG4gIGZvciAoY29uc3QgbGluayBvZiBsaW5rc1Njcm9sbCkge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKS5vZmZzZXRUb3A7XHJcblxyXG4gICAgc2Nyb2xsKHtcclxuICAgICAgdG9wOiBvZmZzZXRUb3AgLSAxNTAsXHJcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE1hbmlwdWxhdGlvbnMgd2l0aCBoZWFkZXIgY2xhc3NlcyBvbiBzY3JvbGxcclxuICBsZXQgc2Nyb2xsQ2hhbmdlID0gMTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsID49IHNjcm9sbENoYW5nZSkge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImpzLXNjcm9sbC10b3BcIik7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwianMtc2Nyb2xsLWRvd25cIiwgXCJqcy1uYXYtb3BlblwiLCBcImpzLW5hdi1jbG9zZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gLy8gVGFic1xyXG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGFiSXRlbS5sZW5ndGg7IGkrKykge1xyXG4gIC8vICAgdGFiSXRlbVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cclxuICAvLyAgICAgdGFiQ29udGVudC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgLy8gICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIHRhYkl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIC8vICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgICB0YWJDb250ZW50W2ldLmNsYXNzTGlzdC5hZGQoXCJqcy1hY3RpdmVcIik7XHJcbiAgLy8gICAgIHRhYkl0ZW1baV0uY2xhc3NMaXN0LmFkZChcImpzLWFjdGl2ZVwiKTtcclxuXHJcbiAgLy8gICAgIHRhYkRyb3Bkb3duVHJpZ2dlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19fdHJpZ2dlci5qcy1hY3RpdmVcIikudGV4dENvbnRlbnRcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0gXHJcbiAgXHJcbiAgLy8gaWYgKHRhYkRyb3Bkb3duVHJpZ2dlcikge1xyXG4gIC8vICAgdGFiRHJvcGRvd25UcmlnZ2VyLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX190cmlnZ2VyLmpzLWFjdGl2ZVwiKS50ZXh0Q29udGVudFxyXG4gIC8vIH1cclxuXHJcbiAgLy8gQ3VzdG9tIHNjcm9sbGJhciBpbiB0b290aCB0YWJsZVxyXG4gIE92ZXJsYXlTY3JvbGxiYXJzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9vdGhcIiksIHt9KTtcclxuXHJcbiAgLy8gRmlsZXMgaW5wdXRcclxuICAvLyBsZXQgZmlsZXNUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcclxuICBsZXQgZmlsZXNUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxlc19fdGFibGUnKTtcclxuICBcclxuICAvLyBsZXQgdXBkYXRlRmlsZXNMaXN0ID0gKCkgPT4ge1xyXG4gIC8vICAgbGV0IGNoaWxkcmVuID0gXCJcIjtcclxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXNUcmlnZ2VyLmZpbGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgLy8gICAgIGNoaWxkcmVuICs9ICAnPGRpdiBjbGFzcz1cImZpbGVzX193cmFwcGVyXCI+JyArICc8ZGl2IGNsYXNzPVwiZmlsZXMtaXRlbVwiPicgKyAnPGkgY2xhc3M9XCJpY29uLWZpbGVcIj48L2k+JyArICc8c3BhbiBjbGFzcz1cImZpbGVzLWl0ZW1fX25hbWVcIj4nICsgZmlsZXNUcmlnZ2VyLmZpbGVzLml0ZW0oaSkubmFtZSArICc8L3NwYW4vPicgKyAnPGkgY2xhc3M9XCJmaWxlcy1pdGVtX19yZW1vdmUgaWNvbi10cmFzaC1jYW5cIiBvbmNsaWNrPVwicmV0dXJuIHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZSgpO1wiPjwvaT4nICsgJzwvZGl2PicgKyAnPC9kaXY+J1xyXG4gIC8vICAgfVxyXG4gIC8vICAgZmlsZXNUYWJsZS5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuICAvLyAgIGlmIChjaGlsZHJlbi5sZW5ndGggPj0gMCkge1xyXG4gIC8vICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGZpbGVzVGFibGUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgLy8gaWYgKGZpbGVzVHJpZ2dlcikge1xyXG4gIC8vICAgZmlsZXNUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIC8vICAgICB1cGRhdGVGaWxlc0xpc3QoKVxyXG4gIC8vICAgfSlcclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IGR0ID0gbmV3IERhdGFUcmFuc2ZlcigpO1xyXG5cclxuICAkKFwiI2ZpbGVcIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuZmlsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgZmlsZUJsb2MgPSAkKCc8ZGl2Lz4nLCB7Y2xhc3M6ICdmaWxlc19fd3JhcHBlcid9KSxcclxuICAgICAgICBmaWxlTmFtZSA9ICQoJzxmaWxlcy1pdGVtLz4nLCB7Y2xhc3M6ICduYW1lJywgdGV4dDogdGhpcy5maWxlcy5pdGVtKGkpLm5hbWV9KTtcclxuICAgICAgZmlsZUJsb2MuYXBwZW5kKGA8ZGl2IGNsYXNzPVwiZmlsZXMtaXRlbVwiPjxpIGNsYXNzPVwiaWNvbi1maWxlXCI+PC9pPjxzcGFuIGNsYXNzPVwiZmlsZXMtaXRlbV9fbmFtZVwiPiR7dGhpcy5maWxlcy5pdGVtKGkpLm5hbWV9PC9zcGFuPjxpIGNsYXNzPVwiZmlsZXMtaXRlbV9fcmVtb3ZlIGljb24tdHJhc2gtY2FuXCI+PC9pPjxkaXY+PGRpdj5gKVxyXG4gICAgICAkKFwiLmZpbGVzX190YWJsZVwiKS5hcHBlbmQoZmlsZUJsb2MpO1xyXG4gICAgfTtcclxuICAgIGZvciAobGV0IGZpbGUgb2YgdGhpcy5maWxlcykge1xyXG4gICAgICBkdC5pdGVtcy5hZGQoZmlsZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbGVzID0gZHQuZmlsZXM7XHJcblxyXG4gICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoID49IDApIHtcclxuICAgICAgZmlsZXNUYWJsZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWxlc1RhYmxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuICBcclxuICAgICQoJy5maWxlcy1pdGVtX19yZW1vdmUnKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICBsZXQgbmFtZSA9ICQodGhpcykucGFyZW50KCkuZmluZCgnLmZpbGVzLWl0ZW1fX25hbWUnKS50ZXh0KCk7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnLmZpbGVzX193cmFwcGVyJykucmVtb3ZlKCk7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkdC5pdGVtcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYobmFtZSA9PT0gZHQuaXRlbXNbaV0uZ2V0QXNGaWxlKCkubmFtZSl7XHJcbiAgICAgICAgICBkdC5pdGVtcy5yZW1vdmUoaSk7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKS5maWxlcyA9IGR0LmZpbGVzO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gTWVkaWEgOTkyID09PT09PlxyXG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDk5MnB4KVwiKS5tYXRjaGVzKSB7XHJcbiAgICAvLyBPcGVuaW5nIGRlc2t0b3AgbWVudSB3aXRoIGJ1cmdlclxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGlmIChoZWFkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtbmF2LW9wZW5cIikpIHtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLW5hdi1vcGVuXCIpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtbmF2LWNsb3NlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1uYXYtY2xvc2VcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE9wZW5pbmcgdGVjaG5vbG9neSBhY2NvcmRpb25cclxuICAgICQoJy50ZWNobm9sb2d5X193cmFwcGVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikubm90KCQodGhpcykuY2xvc2VzdChcIi50ZWNobm9sb2d5X193cmFwcGVyXCIpKS5yZW1vdmVDbGFzcyhcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiLnRlY2hub2xvZ3lfX3dyYXBwZXJcIikuYWRkQ2xhc3MoXCJqcy1hY3RpdmVcIik7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdqcy1hY3RpdmUnKSkge1xyXG4gICAgICAgICQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5ub3QoJCh0aGlzKS5maW5kKCcudGVjaG5vbG9neS1jYXJkX19ib2R5JykpLnNsaWRlVXAoMzAwKTtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy50ZWNobm9sb2d5LWNhcmRfX2JvZHknKS5zbGlkZURvd24oMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlY2hub2xvZ3lDYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgIHRlY2hub2xvZ3lDYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgdGVjaG5vbG9neUNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwianMtYWN0aXZlXCIpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAvLyB0ZWNobm9sb2d5Q2FyZEJvZHkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgc2xpZGVVcChlbGVtZW50KVxyXG4gICAgLy8gICAgIC8vIH0pO1xyXG5cclxuICAgIC8vICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKCdqcy1hY3RpdmUnKTtcclxuXHJcbiAgICAvLyAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgIC8vICAgICBzbGlkZURvd24odGVjaG5vbG9neUNhcmRCb2R5W2ldLCAzMDApXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcblxyXG4gICAgbGV0IGhvcml6b250YWxTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9yaXpvbnRhbC1zY3JvbGwnKVxyXG5cclxuICAgIGlmIChob3Jpem9udGFsU2Nyb2xsKSB7XHJcbiAgICAgIC8vIEhvcml6b250YWwgc2Nyb2xsIGluIFRyZWF0bWVudHMgPT09PT0+XHJcbiAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gZ3NhcC51dGlscy50b0FycmF5KFwiLmhvcml6b250YWwtc2Nyb2xsXCIpO1xyXG4gICAgICBsZXQgbWF4V2lkdGggPSAwO1xyXG4gIFxyXG4gICAgICBjb25zdCBnZXRNYXhXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICBtYXhXaWR0aCA9IDA7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgbWF4V2lkdGggKz0gc2VjdGlvbi5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgZ2V0TWF4V2lkdGgoKTtcclxuICAgICAgU2Nyb2xsVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwicmVmcmVzaEluaXRcIiwgZ2V0TWF4V2lkdGgpO1xyXG4gIFxyXG4gICAgICBsZXQgdHJpZ2dlckl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlYXRtZW50cycpO1xyXG4gIFxyXG4gICAgICBnc2FwLnRvKHNlY3Rpb25zLCB7XHJcbiAgICAgICAgeDogKCkgPT4gYC0ke21heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGh9YCxcclxuICAgICAgICBlYXNlOiBcIm5vbmVcIixcclxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XHJcbiAgICAgICAgICBzdGFydDogXCItMTIwcHggdG9wXCIsXHJcbiAgICAgICAgICB0cmlnZ2VyOiB0cmlnZ2VySXRlbSxcclxuICAgICAgICAgIHBpbjogdHJ1ZSxcclxuICAgICAgICAgIHNjcnViOiB0cnVlLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiBgKz0ke21heFdpZHRofWAsXHJcbiAgICAgICAgICBpbnZhbGlkYXRlT25SZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgc2VjdGlvbnMuZm9yRWFjaCgoc2N0LCBpKSA9PiB7XHJcbiAgICAgICAgU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xyXG4gICAgICAgICAgdHJpZ2dlcjogc2N0LFxyXG4gICAgICAgICAgc3RhcnQ6ICgpID0+ICd0b3AgdG9wLT0nICsgKHNjdC5vZmZzZXRMZWZ0IC0gd2luZG93LmlubmVyV2lkdGgvMikgKiAobWF4V2lkdGggLyAobWF4V2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkpLFxyXG4gICAgICAgICAgZW5kOiAoKSA9PiAnKz0nICsgc2N0Lm9mZnNldFdpZHRoICogKG1heFdpZHRoIC8gKG1heFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpKSxcclxuICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7dGFyZ2V0czogc2N0LCBjbGFzc05hbWU6IFwiYWN0aXZlXCJ9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGVsZW1lbnRzXHJcbiAgICBsZXQgc2hvd1RyaWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX3RyaWdnZXJcIik7XHJcbiAgICBsZXQgc2hvd0l0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3dfX2l0ZW1cIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaG93VHJpZ2dlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICBzaG93VHJpZ2dlcltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHNob3dUcmlnZ2VyW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2pzLWFjdGl2ZScpXHJcblxyXG4gICAgICAgIGlmIChzaG93VHJpZ2dlcltpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJqcy1hY3RpdmVcIikpIHtcclxuICAgICAgICAgIHNob3dUcmlnZ2VyW2ldLnRleHRDb250ZW50ID0gJ1NlZSBsZXNzJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93VHJpZ2dlcltpXS50ZXh0Q29udGVudCA9ICdTZWUgYWxsJ1xyXG4gICAgICAgICAgc2hvd0l0ZW0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyZWF0bWVudHMgcGFnZSB0YWJzIG5hdmlnYXRpb25cclxuICAgIC8vIGxldCB0cmVhdG1lbnRzRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duXCIpO1xyXG4gICAgLy8gbGV0IHRyZWF0bWVudHNEcm9wZG93bkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyZWF0bWVudHMgLmRyb3Bkb3duX19saXN0XCIpO1xyXG5cclxuICAgIC8vIGlmICh0cmVhdG1lbnRzRHJvcGRvd24gJiYgdHJlYXRtZW50c0Ryb3Bkb3duTGlzdCkge1xyXG4gICAgLy8gICBsZXQgb2Zmc2V0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9fbGlzdCcpLm9mZnNldEhlaWdodFxyXG4gICAgLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRyZWF0bWVudHMtZHJvcGRvd24tb2Zmc2V0XCIsIG9mZnNldEl0ZW0gKyBcInB4XCIpXHJcbiAgICBcclxuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0gKyA2NCApIHtcclxuICAgIC8vICAgICAgIHRyZWF0bWVudHNEcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwianMtc2Nyb2xsLWRvd25cIik7XHJcbiAgICAvLyAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25MaXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LmFkZChcIm9mZnNldC10b3BcIilcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgIC8vICAgICAgIHRyZWF0bWVudHNEcm9wZG93bkxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIC8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVhdG1lbnRzJykuY2xhc3NMaXN0LnJlbW92ZShcIm9mZnNldC10b3BcIilcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG5cclxuICAgIC8vICAgdHJlYXRtZW50c0Ryb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuICAgIC8vICAgICAgIHNsaWRlVG9nZ2xlKHRyZWF0bWVudHNEcm9wZG93bkxpc3QsIDMwMCk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIG51bGxcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGlmICh0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyICYmIHRyZWF0bWVudHNEcm9wZG93bkl0ZW0pIHtcclxuICAgICAgbGV0IG9mZnNldEl0ZW0gPSB0cmVhdG1lbnRzRHJvcGRvd25JdGVtLm9mZnNldEhlaWdodFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXRyZWF0bWVudHMtZHJvcGRvd24tb2Zmc2V0XCIsIG9mZnNldEl0ZW0gKyBcInB4XCIpO1xyXG4gICAgICBcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG9mZnNldEl0ZW0gKyA2NCApIHtcclxuICAgICAgICAgIHRyZWF0bWVudHNTaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJqcy1zY3JvbGwtZG93blwiKTtcclxuICAgICAgICAgIHRyZWF0bWVudHMuY2xhc3NMaXN0LmFkZChcIm9mZnNldC10b3BcIik7XHJcbiAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25JdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICAgICAgICBpZiAodHJlYXRtZW50c1NpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtc2Nyb2xsLWRvd25cIikpIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJlYXRtZW50c1NpZGViYXJMaW5rLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdHJlYXRtZW50c1NpZGViYXJMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzU2lkZWJhckxpbmsuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWN1cnJlbnRcIilcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzU2lkZWJhckxpbmtbaV0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwianMtY3VycmVudFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSB0cmVhdG1lbnRzU2lkZWJhckxpbmtbaV0udGV4dENvbnRlbnRcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHJlYXRtZW50c1NpZGViYXIuY2xhc3NMaXN0LnJlbW92ZShcImpzLXNjcm9sbC1kb3duXCIpO1xyXG4gICAgICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duSXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgdHJlYXRtZW50cy5jbGFzc0xpc3QucmVtb3ZlKFwib2Zmc2V0LXRvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJlYXRtZW50c1NpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB0cmVhdG1lbnRzRHJvcGRvd25UcmlnZ2VyLmNsYXNzTGlzdC50b2dnbGUoXCJqcy1hY3RpdmVcIilcclxuICAgICAgICBzbGlkZVRvZ2dsZSh0cmVhdG1lbnRzRHJvcGRvd25JdGVtLCAzMDApXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdHJlYXRtZW50c0Ryb3Bkb3duVHJpZ2dlci5maXJzdENoaWxkLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmVhdG1lbnRzLXNpZGViYXIgbGkuanMtY3VycmVudCBhXCIpLnRleHRDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gT3BlbmluZyBtb2JpbGUgbWVudSB3aXRoIGJ1cmdlclxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwianMtbmF2LW9wZW5cIik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImpzLWxvY2tcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBPcGVuaW5nIHRlY2hub2xvZ3kgYWNjb3JkaW9ucyAhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXHJcbiAgICAvLyAkKCcudGVjaG5vbG9neV9fd3JhcHBlciAudGVjaG5vbG9neS1jYXJkJykubm90KCQoJy50ZWNobm9sb2d5X193cmFwcGVyLnNlY29uZGFyeSAudGVjaG5vbG9neS1jYXJkJykpLnJlbW92ZUNsYXNzKCdqcy1hY3RpdmUnKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWNobm9sb2d5Q2FyZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vIFJlbW92ZSBjbGFzcyBmcm9tIGFsbCBlbGVtZW50c1xyXG4gICAgICAgIHRlY2hub2xvZ3lDYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImpzLWFjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBlbGVtZW50IHRoYXQgd2FzIGNsaWNrZWRcclxuICAgICAgICB0ZWNobm9sb2d5Q2FyZFtpXS5jbGFzc0xpc3QuYWRkKFwianMtYWN0aXZlXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCbG9jayBzbGlkZXIgJ1RyZWF0bWVudHMnXHJcbiAgICBjb25zdCBzbGlkZXJUcmVhdG1lbnRzID0gbmV3IFN3aXBlcignLnRyZWF0bWVudHMtc2xpZGVyJywge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiBcIi50cmVhdG1lbnRzLWJ1dHRvbi1uZXh0XCIsXHJcbiAgICAgICAgcHJldkVsOiBcIi50cmVhdG1lbnRzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIudHJlYXRtZW50cy1wYWdpbmF0aW9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1ByYWN0aWNlcydcclxuICBjb25zdCBzbGlkZXJQcmFjdGljZXMgPSBuZXcgU3dpcGVyKCcucHJhY3RpY2VzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnByYWN0aWNlcy1idXR0b24tbmV4dFwiLFxyXG4gICAgICBwcmV2RWw6IFwiLnByYWN0aWNlcy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLnByYWN0aWNlcy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyBCbG9jayBzbGlkZXIgJ1Rlc3RpbW9uaWFscydcclxuICBjb25zdCBzbGlkZXJUZXN0aW1vbmlhbHMgPSBuZXcgU3dpcGVyKCcudGVzdGltb25pYWxzLXNsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiBcIi50ZXN0aW1vbmlhbHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi50ZXN0aW1vbmlhbHMtYnV0dG9uLXByZXZcIixcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiBcIi50ZXN0aW1vbmlhbHMtcGFnaW5hdGlvblwiLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIH0sXHJcbiAgICAgIDk5Mjoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnQ2FzZXMnXHJcbiAgY29uc3Qgc2xpZGVyQ2FzZXMgPSBuZXcgU3dpcGVyKCcuY2FzZXMtc2xpZGVyJywge1xyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogXCIuY2FzZXMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5jYXNlcy1idXR0b24tcHJldlwiLFxyXG4gICAgfSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6IFwiLmNhc2VzLXBhZ2luYXRpb25cIixcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIEJsb2NrIHNsaWRlciAnU29jaWFscydcclxuICBjb25zdCBzbGlkZXJTb2NpYWxzID0gbmV3IFN3aXBlcignLnNvY2lhbHNfX3NsaWRlcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6IFwiLnNvY2lhbHMtYnV0dG9uLW5leHRcIixcclxuICAgICAgcHJldkVsOiBcIi5zb2NpYWxzLWJ1dHRvbi1wcmV2XCIsXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogXCIuc29jaWFscy1wYWdpbmF0aW9uXCIsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgfSxcclxuICAgICAgOTkyOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9KVxyXG59IiwiLy8gQXV0byBzaXplIHRleHRhcmVhID09PT09PlxyXG52YXIgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xyXG5cclxuaWYgKHRleHRhcmVhKSB7XHJcbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGF1dG9zaXplVGV4dGFyZWEpO1xyXG59IGVsc2Uge1xyXG4gIG51bGxcclxufVxyXG5cclxuZnVuY3Rpb24gYXV0b3NpemVUZXh0YXJlYSgpe1xyXG5cdHZhciBlbCA9IHRoaXM7XHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0ZWwuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6YXV0bzsgcGFkZGluZzowJztcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnLW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94JztcclxuXHRcdGVsLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OicgKyBlbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xyXG5cdH0sMCk7XHJcbn1cclxuXHJcbi8vIEN1c3RvbSBzZWxlY3QgPT09PT0+XHJcbiQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKXtcclxuICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBudW1iZXJPZk9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKS5sZW5ndGg7XHJcblxyXG4gICR0aGlzLmFkZENsYXNzKCdzZWxlY3RfX2hpZGRlbicpOyBcclxuICAkdGhpcy53cmFwKCc8ZGl2IGNsYXNzPVwic2VsZWN0XCI+PC9kaXY+Jyk7XHJcbiAgJHRoaXMuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzZWxlY3RfX3N0eWxlZFwiPjwvZGl2PicpO1xyXG5cclxuICB2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3RfX3N0eWxlZCcpO1xyXG4gICRzdHlsZWRTZWxlY3QuYXBwZW5kKCc8c3Bhbj48L3NwYW4+PGkgY2xhc3M9XCJpY29uLWFycm93LWRyb3Bkb3duXCI+PC9pPicpXHJcbiAgJHN0eWxlZFNlbGVjdC5maW5kKCdzcGFuJykudGV4dCgkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoMCkudGV4dCgpKTtcclxuXHJcbiAgdmFyICRsaXN0ID0gJCgnPHVsIC8+Jywge1xyXG4gICAgJ2NsYXNzJzogJ3NlbGVjdF9fb3B0aW9ucydcclxuICB9KS5pbnNlcnRBZnRlcigkc3R5bGVkU2VsZWN0KTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG4gICAgJCgnPGxpIC8+Jywge1xyXG4gICAgICB0ZXh0OiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudGV4dCgpLFxyXG4gICAgICByZWw6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS52YWwoKVxyXG4gICAgfSkuYXBwZW5kVG8oJGxpc3QpO1xyXG4gIH1cclxuXHJcbiAgdmFyICRsaXN0SXRlbXMgPSAkbGlzdC5jaGlsZHJlbignbGknKTtcclxuXHJcbiAgJHN0eWxlZFNlbGVjdC5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJCgnZGl2LnNlbGVjdF9fc3R5bGVkLmFjdGl2ZScpLm5vdCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdF9fb3B0aW9ucycpLnNsaWRlVXAoMzAwKTtcclxuICAgIH0pO1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0X19vcHRpb25zJykuc2xpZGVUb2dnbGUoMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJGxpc3RJdGVtcy5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgJHN0eWxlZFNlbGVjdC5maW5kKCdzcGFuJykudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJHRoaXMudmFsKCQodGhpcykuYXR0cigncmVsJykpO1xyXG4gICAgJGxpc3Quc2xpZGVVcCgzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICRzdHlsZWRTZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJGxpc3Quc2xpZGVVcCgzMDApO1xyXG4gIH0pO1xyXG5cclxufSk7Il19