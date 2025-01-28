$(document).ready(function () {
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
      $(".header-nav li").on("click", function() {
         if (!this.classList.contains('has-children')) {
            $("nav.header-nav").toggleClass("_active");
            $(".header-nav_mob_layer").toggleClass("_active");
         }
      })

      $(".header-nav li.has-children a").on("click", function() {
         $("nav.header-nav").toggleClass("_active");
         $(".header-nav_mob_layer").toggleClass("_active");
      })
   }

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
});
