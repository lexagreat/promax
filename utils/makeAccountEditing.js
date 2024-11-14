export default function () {
   // START account
   $(".accountb-tabs-header__item").on("click", function () {
      $(".accountb-tabs-header__item").removeClass("_active");
      $(this).addClass("_active");
      var index = $(this).index();
      $(".accountb-tabs-body__item").removeClass("_active");
      $(".accountb-tabs-body__item").eq(index).addClass("_active");
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
   // НАЖАТИЕ НА СЕРДЦЕ
   $(".accountb-tabs-body__item .products__item-wishlist-btn span").on(
      "click",
      function () {
         $(this).parents(".products__item").remove();
      }
   );
   // END account
}
