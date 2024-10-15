<template>
   <section class="singleprod-imgs">
      <div class="singleprod-imgs-first">
         <div class="singleprod-imgs-first__item"><img src="@/assets/img/single-prod-min.png" alt="single-prod-min">
         </div>
         <div class="singleprod-imgs-first__item"><img src="@/assets/img/single-prod-min.png" alt="single-prod-min">
         </div>
         <div class="singleprod-imgs-first__item"><img src="@/assets/img/single-prod-min.png" alt="single-prod-min">
         </div>
         <div class="singleprod-imgs-first__item"><img src="@/assets/img/single-prod-min.png" alt="single-prod-min">
         </div>
         <div class="singleprod-imgs-first__item"><img src="@/assets/img/single-prod-min.png" alt="single-prod-min">
         </div>
      </div>
      <div class="singleprod-imgs-second">
         <div class="singleprod-imgs-second__item"><img src="@/assets/img/single-prod-max.png" alt="single-prod-max">
         </div>
         <div class="singleprod-imgs-second__item"><img src="@/assets/img/single-prod-max.png" alt="single-prod-max">
         </div>
         <div class="singleprod-imgs-second__item"><img src="@/assets/img/single-prod-max.png" alt="single-prod-max">
         </div>
         <div class="singleprod-imgs-second__item"><img src="@/assets/img/single-prod-max.png" alt="single-prod-max">
         </div>
         <div class="singleprod-imgs-second__item"><img src="@/assets/img/single-prod-max.png" alt="single-prod-max">
         </div>
      </div>
   </section>
</template>
<script setup>
onMounted(() => {
   $(".singleprod-imgs-first").slick({
      infinite: true,
      vertical: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      asNavFor: ".singleprod-imgs-second",
      focusOnSelect: true,
   });
   $(".singleprod-imgs-second").slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".singleprod-imgs-first",
   });
})

</script>