$(document).ready(function () {
   console.log("old scripts are working");

   $("li.has-children ul").hide();
   if ($(window).width() > 768) {
      $(".header-nav > ul > li").hover(
         function () {
            $(this).addClass("_hover");
         },
         function () {
            $(this).removeClass("_hover");
         }
      );
      $(".header-nav li.has-children").hover(
         function () {
            $(this).find("ul").first().stop(true, true).slideDown("fast");
         },
         function () {
            $(this).find("ul").first().stop(true, true).slideUp("fast");
         }
      );
   } else {
      // $(".home .prodtabs__main.products").slick({
      //    infinite: false,
      //    slidesToShow: 2,
      //    slidesToScroll: 1,
      //    arrows: false,
      //    dots: true,
      // });
   }

   // function toggleTextInAddtoCartBtn(thisEl) {
   //    if ($(thisEl).hasClass("_active")) {
   //       $(thisEl).find(".products__item-addtocart-btn-txt").text("Оформление");
   //    } else {
   //       $(thisEl).find(".products__item-addtocart-btn-txt").text("В корзину");
   //    }
   // }
   // $(".products__item-addtocart-btn").each(function () {
   //    toggleTextInAddtoCartBtn(this);
   // });
   // $(".products__item-addtocart-btn").on("click", function () {
   //    $(this).addClass("_active");
   //    $(this).find(".products__item-addtocart-btn-txt").text("Оформление");
   // });
   $(".products__item-wishlist-btn").on("click", function () {
      $(this).toggleClass("_active");
      if ($(this).find("span").hasClass("i-wishlist-disabled")) {
         $(this).find("span").attr("class", "i-wishlist-active");
      } else {
         $(this).find("span").attr("class", "i-wishlist-disabled");
      }
   });

   $("nav.header-nav li.has-children").each(function () {
      $(this).append('<span class="header-nav_arrow"></span>');
   });

   $(".header-nav_arrow").on("click", function () {
      $(this).toggleClass("_active");
      $(this).parents(".has-children").children("ul").slideToggle();
   });
   $(".header-nav_mob_btn").on("click", function () {
      $("nav.header-nav").toggleClass("_active");
      $(".header-nav_mob_layer").toggleClass("_active");
   });
   $(".header-nav_mob_layer").on("click", function () {
      $("nav.header-nav").removeClass("_active");
      $(".header-nav_mob_layer").removeClass("_active");
   });
   $(".btn_img_burger").on("click", function () {
      $(".try-img-btns__item").toggleClass("_active");
   });

   $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 5) {
         $(".header-nav_mob_btn").addClass("_scroll");
      } else {
         $(".header-nav_mob_btn").removeClass("_scroll");
      }
   });

   // $(".filterbar__param_1>ul>li>ul>li:first-child").addClass("_active");
   // $(".filterbar__param_1>ul>li>ul>li:first-child>ul").slideDown();
   // $(
   //    ".filterbar__param_1>ul>li>ul>li:first-child>ul>li:nth-child(11)"
   // ).addClass("_active");

   // $(".filterbar__param_1>ul>li>ul>li>span").on("click", function () {
   //    const $currentLi = $(this).closest("li");
   //    const $currentUl = $currentLi.children("ul");

   //    if ($currentLi.hasClass("_active")) {
   //       $currentLi.removeClass("_active");
   //       $currentUl.slideUp();
   //    } else {
   //       $(this).closest("ul").find("li").removeClass("_active");
   //       $(this).closest("ul").find("li").children("ul").slideUp();
   //       $currentLi.addClass("_active");
   //       $currentUl.slideDown();
   //    }
   // });

   // $(".filterbar__param_1>ul>li>ul>li>ul>li").on("click", function () {
   //    $(".filterbar__param_1>ul>li>ul>li>ul>li").removeClass("_active");
   //    $(this).toggleClass("_active");
   // });

   // $(".filterbar__all-btn-mob-icon").on("click", function () {
   //    $(".filterbar__inner").slideToggle();
   // });

   // START counter
   // function updateCounter(element, increment) {
   //    var $counterVal = $(element)
   //       .closest(".add-prod-ctrl-sum-counter")
   //       .find(".counter-val");
   //    var currentValue = parseInt($counterVal.text(), 10);
   //    var newValue = currentValue + increment;
   //    if (newValue < 0) {
   //       newValue = 0;
   //    }
   //    $counterVal.text(newValue);
   // }
   // $(".counter-minus").on("click", function () {
   //    updateCounter(this, -1);
   // });
   // $(".counter-plus").on("click", function () {
   //    updateCounter(this, 1);
   // });
   // END counter

   // // START PopUp Added to cart
   // // open popup
   // let isFirstClick = false;
   // $(".single-product .products__item-addtocart-btn").on("click", function () {
   //    if (!isFirstClick) {
   //       $(".added").addClass("_active");
   //       $("html").addClass("_hidden");
   //       isFirstClick = true;
   //    } else {
   //       console.log('Перейти на страницу "Оформление"');
   //    }
   // });

   // // close popup
   // $(".added__layer").on("click", function () {
   //    $(".added").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // // END PopUp Added to cart

   // // START popup popup
   // $("a.added-main__product-ctrl-btn").on("click", function () {
   //    $(".form1").addClass("_active");
   //    $("html").addClass("_hidden");
   // });
   // $(".form1__layer").on("click", function () {
   //    $(".form1").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // // END popup popup

   // // START popup single-ourserv
   // $(".singleserv__price_btn").on("click", function () {
   //    $(".form2").addClass("_active");
   //    $("html").addClass("_hidden");
   // });
   // $(".form2__layer").on("click", function () {
   //    $(".form2").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // // END popup single-ourserv

   // START popup Регистрация
   // $(".registration_btn").on("click", function () {
   //    $(".registration_form").addClass("_active");
   //    $("html").addClass("_hidden");
   //    $(".login_form").removeClass("_active");
   // });
   // $(".registration__layer").on("click", function () {
   //    $(".registration_form").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // END popup Регистрация

   // START popup Войти
   // $(".login_btn").on("click", function () {
   //    $(".login_form").addClass("_active");
   //    $("html").addClass("_hidden");
   //    $(".registration_form").removeClass("_active");
   // });
   // $(".login__layer").on("click", function () {
   //    $(".login_form").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // END popup Войти

   // START popup Регистрация (ДЛЯ ДИЛЕРОВ)
   // $(".distr_registration_btn").on("click", function () {
   //    $(".distr_registration_form").addClass("_active");
   //    $("html").addClass("_hidden");
   //    $(".distr_login_form").removeClass("_active");
   // });
   // $(".distr_registration__layer").on("click", function () {
   //    $(".distr_registration_form").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // END popup Регистрация (ДЛЯ ДИЛЕРОВ)

   // START popup Войти (ДЛЯ ДИЛЕРОВ)
   // $(".distr_login_btn").on("click", function () {
   //    $(".distr_login_form").addClass("_active");
   //    $("html").addClass("_hidden");
   //    $(".distr_registration_form").removeClass("_active");
   // });
   // $(".distr_login__layer").on("click", function () {
   //    $(".distr_login_form").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // // END popup Войти (ДЛЯ ДИЛЕРОВ)

   // // START popup Заявка оформлена
   // $(".submitted_btn").on("click", function () {
   //    $(".submitted_form").addClass("_active");
   //    $("html").addClass("_hidden");
   // });
   // $(".submitted__layer").on("click", function () {
   //    $(".submitted_form").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // END popup Заявка оформлена

   // // START popup prices
   // $(".prices_btn").on("click", function () {
   //    $(".form3").addClass("_active");
   //    $("html").addClass("_hidden");
   // });
   // $(".form3__layer").on("click", function () {
   //    $(".form3").removeClass("_active");
   //    $("html").removeClass("_hidden");
   // });
   // // END popup prices

   // // START account
   // $(".accountb-tabs-header__item").on("click", function () {
   //    $(".accountb-tabs-header__item").removeClass("_active");
   //    $(this).addClass("_active");
   //    var index = $(this).index();
   //    $(".accountb-tabs-body__item").removeClass("_active");
   //    $(".accountb-tabs-body__item").eq(index).addClass("_active");
   // });

   $(".accountb-main__second-edit").on("click", function () {
      $(this).addClass("_active");
      $(".accountb-main__second-item-val").addClass("_active");
      $("input#prof-save").addClass("_active");
      $(".accountb-main__second-item-val input").attr("readonly", false);
   });
   $("input#prof-save").on("click", function (event) {
      event.preventDefault();
      $(".accountb-main__second-edit").removeClass("_active");
      $(".accountb-main__second-item-val").removeClass("_active");
      $("input#prof-save").removeClass("_active");
      $(".accountb-main__second-item-val input").attr("readonly", true);
   });

   // $(".accountb-tabs-body__item .products__item-wishlist-btn span").on(
   //    "click",
   //    function () {
   //       $(this).parents(".products__item").remove();
   //    }
   // );
   // // END account

   // START single-ourserv
   $(".singleserv__pop-item").on("click", function () {
      $(".singleserv__pop-item").removeClass("_active");
      $(this).addClass("_active");
      var index = $(this).index();
   });
   // END single-ourserv

   // START Маска для телефона
   $(".phoneNum").each(function () {
      const maskOptions = {
         mask: "+{7} (000) 000-00-00",
      };
      IMask(this, maskOptions);
   });
   // END Маска для телефона

   // START Валидация
   // Проверка всех форм на изменение любых полей с классом _required
   $("form").on("input change", "input._required", function () {
      const form = $(this).closest("form");
      const submitButton = form.find(".popup-form-submit");
      let allValid = true;

      form.find("input._required").each(function () {
         const input = $(this);
         if (
            input.val().trim() === "" ||
            (input.hasClass("phoneNum") &&
               !IMask(input[0], { mask: "+{7} (000) 000-00-00" }).masked
                  .isComplete)
         ) {
            allValid = false;
            return false;
         }
      });
      if (allValid) {
         submitButton.addClass("active");
      } else {
         submitButton.removeClass("active");
      }
   });

   // END Валидация

   // START PopUp Цены
   // $(".download-file-input").on("change", function () {
   //    const $this = $(this);
   //    const fileName = $this[0].files.length
   //       ? $this[0].files[0].name
   //       : "Загрузить фото";
   //    const fileIcon = $this.siblings(".file-icon");
   //    const fileText = $this.siblings(".file-text");

   //    if ($this[0].files.length) {
   //       fileIcon.css("background-image", 'url("@/assets/img/file-icon.svg")');
   //       $(".download-info__btn").addClass("active");
   //       $(".download-info").addClass("active");
   //    } else {
   //       fileIcon.css(
   //          "background-image",
   //          'url("@/assets/img/upload-icon.svg")'
   //       );
   //       $(".download-info__btn").removeClass("active");
   //       $(".download-info").removeClass("active");
   //    }

   //    fileText.text(fileName);
   // });

   // $(".popup-form-reset").on("click", function () {
   //    $(".download-file-input").each(function () {
   //       $(this).val("");
   //       $(this)
   //          .siblings(".file-icon")
   //          .css("background-image", 'url("@/assets/img/upload-icon.svg")');
   //       $(this).siblings(".file-text").text("Загрузить фото");
   //       $(".download-info__btn").removeClass("active");
   //       $(".download-info").removeClass("active");
   //    });
   //    $(".popup-form-submit").removeClass("active");
   // });

   // $('.popup-form__split label[for^="age"] input').on(
   //    "focus input blur",
   //    function () {
   //       var $input = $(this);
   //       var $icon = $input.siblings(".singleserv__price-table-icon");

   //       if ($input.is(":focus") || $input.val().trim() !== "") {
   //          $icon.addClass("active");
   //       } else {
   //          $icon.removeClass("active");
   //       }
   //    }
   // );
   // END PopUp Цены
   // START filters
   // function initializeRangeSlider(
   //    containerSelector,
   //    sliderSelector,
   //    minInputSelector,
   //    maxInputSelector,
   //    radioSelector
   // ) {
   //    if (!document.querySelector(containerSelector)) return;
   //    var $container = $(containerSelector);
   //    var $slider = $container.find(sliderSelector);
   //    var $minInput = $container.find(minInputSelector);
   //    var $maxInput = $container.find(maxInputSelector);
   //    var $radioButtons = $container.find(radioSelector);
   //    let minVal = Number($minInput[0].getAttribute("data-min"));
   //    let maxVal = Number($maxInput[0].getAttribute("data-max"));
   //    $slider.slider({
   //       range: true,
   //       min: minVal,
   //       max: maxVal,
   //       values: [$minInput.val() || minVal, $maxInput.val() || maxVal],
   //       slide: function (event, ui) {
   //          $minInput.val(ui.values[0]);
   //          $maxInput.val(ui.values[1]);
   //       },
   //    });
   //    function updateSliderValues() {
   //       console.log(minVal);
   //       console.log(maxVal);
   //       var minValue = parseInt($minInput.val()) || minVal;
   //       var maxValue = parseInt($maxInput.val()) || maxVal;
   //       minValue = Math.max(minValue, $slider.slider("option", "min"));
   //       maxValue = Math.min(maxValue, $slider.slider("option", "max"));
   //       if (maxValue < minValue) {
   //          maxValue = minValue;
   //          $maxInput.val(maxValue);
   //       }
   //       $slider.slider("values", 0, minValue);
   //       $slider.slider("values", 1, maxValue);
   //    }
   //    $minInput.on("input blur", function () {
   //       updateSliderValues();
   //    });
   //    $maxInput.on("input blur", function () {
   //       updateSliderValues();
   //    });
   //    $radioButtons.on("change", function () {
   //       var range = $(this).val().split("-").map(Number);
   //       $slider.slider("option", "values", range);
   //       $minInput.val(range[0]);
   //       $maxInput.val(range[1]);
   //    });
   //    if ($radioButtons.length === 0) {
   //       $container.find(".radio-container").hide();
   //    }
   // }
   // initializeRangeSlider(
   //    ".filterbar__param_3",
   //    ".filterbar-block__range-input",
   //    ".filterbar__param_3_min",
   //    ".filterbar__param_3_max",
   //    ".filterbar-block__range-radio input[type=radio]"
   // );
   // initializeRangeSlider(
   //    ".filterbar__width",
   //    ".sizes-width-range",
   //    ".sizes-width-from",
   //    ".sizes-width-to"
   // );
   // initializeRangeSlider(
   //    ".filterbar__length",
   //    ".sizes-length-range",
   //    ".sizes-length-from",
   //    ".sizes-length-to"
   // );
   // END filters

   // $(".filterbar__param_1>ul>li>ul>li:first-child").addClass("_active");
   // $(".filterbar__param_1>ul>li>ul>li:first-child>ul").slideDown();
   // $(
   //    ".filterbar__param_1>ul>li>ul>li:first-child>ul>li:nth-child(11)"
   // ).addClass("_active");

   // $(".filterbar__param_1>ul>li>ul>li>span").on("click", function () {
   //    const $currentLi = $(this).closest("li");
   //    const $currentUl = $currentLi.children("ul");

   //    if ($currentLi.hasClass("_active")) {
   //       $currentLi.removeClass("_active");
   //       $currentUl.slideUp();
   //    } else {
   //       $(this).closest("ul").find("li").removeClass("_active");
   //       $(this).closest("ul").find("li").children("ul").slideUp();
   //       $currentLi.addClass("_active");
   //       $currentUl.slideDown();
   //    }
   // });

   // $(".filterbar__param_1>ul>li>ul>li>ul>li").on("click", function () {
   //    $(".filterbar__param_1>ul>li>ul>li>ul>li").removeClass("_active");
   //    $(this).toggleClass("_active");
   // });

   // $(".filterbar__all-btn-mob-icon").on("click", function () {
   //    $(".filterbar__inner").slideToggle();
   // });
});
