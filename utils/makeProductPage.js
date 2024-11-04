export function makeTabs() {
   $(".singleprod-tabs__ctrl-item").on("click", function () {
      $(".singleprod-tabs__ctrl-item").removeClass("_active");
      $(this).addClass("_active");
      var index = $(this).index();
      $(".singleprod-tabs__out-item").removeClass("_active");
      $(".singleprod-tabs__out-item").eq(index).addClass("_active");
   });
}
