<template>

   <section class="advant">
      <div class="container">
         <div class="ourserv__after">
            <span class="i-ourserv-after-1"></span>
            <span class="i-ourserv-after-2"></span>
            <span class="i-ourserv-after-3"></span>
         </div>
         <div class="advant__inner">
            <div class="advant__slider_1">
               <div class="advant__slider_1__item" v-for="item in data" :key="item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" :src="item.image" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>

            </div>
            <div class="advant__slider_control">
               <span class="advant__slider_dot" v-for="item in data" :key="item"></span>
            </div>
            <div class="advant__slider_2__wrapper">
               <div class="advant__slider_2__title">{{ data.length }} плюсов работы с нами</div>
               <div class="advant__slider_2">
                  <div class="advant__slider_2__item" v-for="item in data" :key="item">
                     <p>
                        {{ item.text }}
                     </p>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </section>

</template>
<script setup>
let slider,
   slider2;
onMounted(() => {
   slider = $(".advant__slider_1").slick({
      infinite: true,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      asNavFor: ".advant__slider_2",
      draggable: false,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
         {
            breakpoint: 1470,
            settings: {
               vertical: false,
            },
         },
      ],
   });
   slider2 = $(".advant__slider_2").slick({
      fade: true,
      cssEase: "linear",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: ".advant__slider_1",
      draggable: false,
   });
})
onBeforeRouteLeave(() => {
   $(document).ready(function () {
      slider.slick('unslick');
      slider2.slick('unslick');
   });
})

let data = await useBaseFetch("/blog/advantage")
console.log(data);

</script>