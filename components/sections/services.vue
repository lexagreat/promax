<template>
   <section class="ourserv">
      <div class="ourserv__before">
         <span class="i-ourserv-before-1"></span>
         <span class="i-ourserv-before-2"></span>
         <span class="i-ourserv-before-3"></span>
      </div>
      <div class="container">
         <div class="ourserv__inner">
            <h2 class="ourserv__title">Наши услуги</h2>
            <div class="ourserv__slider-wrapper">
               <div class="ourserv__prev"><span class="i-ourserv-prev"></span></div>
               <div class="ourserv__slider">

                  <div class="ourserv__slider-item" v-for="item in services">
                     <div class="ourserv__slider-item-inner">
                        <img loading="lazy" :src="item.image" alt="ourserv">
                        <div class="ourserv__slider-item-desc">
                           <div class="ourserv__slider-item-desc-title">
                              {{ item.title }}
                           </div>
                           <NuxtLink :to="'/services/' + item.slug" class="ourserv__slider-item-desc-btn">
                              <span class="ourserv__slider-item-desc-btn-name">Подробнее</span>
                              <span class="i-ourserv-more"></span>
                           </NuxtLink>
                        </div>
                     </div>
                  </div>

               </div>
               <div class="ourserv__next"><span class="i-ourserv-next"></span></div>
            </div>
            <div class="ourserv__bottom">
               <h2 class="ourserv__bottom-title">Фото паркетных работ</h2>
               <NuxtLink to="#" class="ourserv__bottom-btn _btn">
                  <span>Посмотреть кейсы</span>
                  <span class="i-ourserv-view-cases"></span>
               </NuxtLink>
            </div>
         </div>
      </div>

   </section>
</template>
<script setup>
let slider;
onMounted(() => {
   slider = $(".ourserv__slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $(".ourserv__prev"),
      nextArrow: $(".ourserv__next"),
      responsive: [
         {
            breakpoint: 1470,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            },
         },
      ],
   });
})


onBeforeRouteLeave(() => {
   $(document).ready(function () {
      slider.slick('unslick');
   });
})


let services = await useBaseFetch("/blog/services")
console.log(services);

</script>