export const initializeRangeSlider = (
   containerSelector,
   sliderSelector,
   minInputSelector,
   maxInputSelector,
   radioSelector
) => {
   if (!document.querySelector(containerSelector)) return;
   var $container = $(containerSelector);
   var $slider = $container.find(sliderSelector);
   var $minInput = $container.find(minInputSelector);
   var $maxInput = $container.find(maxInputSelector);
   var $radioButtons = $container.find(radioSelector);
   let minVal = Number($minInput[0].getAttribute("data-min"));
   let maxVal = Number($maxInput[0].getAttribute("data-max"));
   $slider.slider({
      range: true,
      min: minVal,
      max: maxVal,
      values: [$minInput.val() || minVal, $maxInput.val() || maxVal],
      slide: function (event, ui) {
         $minInput.val(ui.values[0]);
         $maxInput.val(ui.values[1]);
      },
   });
   function updateSliderValues() {
      var minValue = parseInt($minInput.val()) || minVal;
      var maxValue = parseInt($maxInput.val()) || maxVal;
      minValue = Math.max(minValue, $slider.slider("option", "min"));
      maxValue = Math.min(maxValue, $slider.slider("option", "max"));
      if (maxValue < minValue) {
         maxValue = minValue;
         $maxInput.val(maxValue);
      }
      $slider.slider("values", 0, minValue);
      $slider.slider("values", 1, maxValue);
   }
   $minInput.on("input blur", function () {
      updateSliderValues();
   });
   $maxInput.on("input blur", function () {
      updateSliderValues();
   });
   $radioButtons.on("change", function () {
      var range = $(this).val().split("-").map(Number);
      $slider.slider("option", "values", range);
      $minInput.val(range[0]);
      $maxInput.val(range[1]);
   });
   if ($radioButtons.length === 0) {
      $container.find(".radio-container").hide();
   }
};
export const makeFilters = (id = null) => {
   console.log('makeFilters');
   $(".filterbar__param_1>ul>li>ul>li").removeClass("_active"); // Удаляем класс у категорий
   console.log('categories', $(".filterbar__param_1>ul>li>ul>li"));
   console.log('id === null', id === null);
   if (id === null) {
      $(".filterbar__param_1>ul>li>ul>li").children("ul").slideUp(); // скрываем подкатегории
      $(".filterbar__param_1>ul>li>ul>li:first-child").addClass("_active"); // открываем первую категорию
      $(".filterbar__param_1>ul>li>ul>li:first-child>ul").slideDown(); // открываем подкатегорию
   }

   $(".filterbar__param_1>ul>li>ul>li>span").on("click", function () { // нажатие на span категории
      console.log('click');
      const $currentLi = $(this).closest("li"); // li категории
      const $currentUl = $currentLi.children("ul"); // ul подкатегории

      if ($currentLi.hasClass("_active")) {
         // $currentLi.removeClass("_active");
         // $currentUl.slideUp();
      } else {
         $(this).closest("ul").find("li").removeClass("_active");
         $(this).closest("ul").find("li").children("ul").slideUp();
         $currentLi.addClass("_active");
         $currentUl.slideDown();
      }
   });

   $(".filterbar__param_1>ul>li>ul>li>ul>li").on("click", function () {
      $(".filterbar__param_1>ul>li>ul>li>ul>li").removeClass("_active");
      $(this).toggleClass("_active");
   });

   $(".filterbar__all-btn-mob-icon").on("click", function () {
      $(".filterbar__inner").slideToggle();
   });

   
   if (typeof id === 'number') {
      $(".filterbar__param_1>ul>li>ul>li").removeClass("_active");
      $(".filterbar__param_1>ul>li>ul>li").children("ul").slideUp();
      const li = $(`.filterbar__param_1>ul>li>ul>li[data-id="${id}"]`)
      const ul = li.children("ul"); // ul подкатегории

      if (ul.length) {
         ul.slideDown()
      }

      li.addClass('_active')
   }
};
export const makeCatalogFilters = (id = null) => {
   if (typeof id !== null) {
      makeFilters(id);
      return
   }
   makeFilters();
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
};
