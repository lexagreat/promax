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
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
               <div class="advant__slider_1__item">
                  <span class="i-advant-slider-before"></span>
                  <img loading="lazy" src="@/assets/img/advant/advant_1.webp" alt="advant">
                  <span class="i-advant-slider-after"></span>
               </div>
            </div>
            <div class="advant__slider_control">
               <span class="advant__slider_dot _active"></span>
               <span class="advant__slider_dot"></span>
               <span class="advant__slider_dot"></span>
               <span class="advant__slider_dot"></span>
               <span class="advant__slider_dot"></span>
               <span class="advant__slider_dot"></span>
               <span class="advant__slider_dot"></span>
               <span class="advant__slider_dot"></span>
            </div>
            <div class="advant__slider_2__wrapper">
               <div class="advant__slider_2__title">8 плюсов работы с нами</div>
               <div class="advant__slider_2">
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 2
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 3
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 4
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 5
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 6
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 7
                     </p>
                  </div>
                  <div class="advant__slider_2__item">
                     <p>
                        Мы ориентированы на качество,<br> соблюдение технологий,<br> сроки выполнения
                        паркетных
                        работ 8
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
</script>