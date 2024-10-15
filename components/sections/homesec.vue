<template>

   <section class="homesec">
      <div class="container">
         <div class="homesec__inner">
            <div class="homesec__top">
               <div class="homesec__top-left">
                  <div class="homesec__top-left-first">
                     <h2 class="homesec-title">НАПОЛЬНЫЕ РАБОТЫ В СПБ</h2>
                     <p class="homesec-desc">Вы выбираете, все остальное сделают профессионалы</p>
                  </div>
                  <div class="homesec__top-left-sec">
                     <ul>
                        <li>24/7</li>
                        <li>от 350 руб/м2</li>
                        <li>5 лет гарантии</li>
                     </ul>
                  </div>
               </div>
               <div class="homesec__top-right">
                  <div class="homesec__slider">
                     <div class="homesec__slider-item">
                        <img loading="lazy" src="@/assets/img/homesec/worker-laying.webp" alt="worker-laying">
                     </div>
                     <div class="homesec__slider-item">
                        <img loading="lazy" src="@/assets/img/homesec/worker-laying.webp" alt="worker-laying">
                     </div>
                     <div class="homesec__slider-item">
                        <img loading="lazy" src="@/assets/img/homesec/worker-laying.webp" alt="worker-laying">
                     </div>
                     <div class="homesec__slider-item">
                        <img loading="lazy" src="@/assets/img/homesec/worker-laying.webp" alt="worker-laying">
                     </div>
                     <div class="homesec__slider-item">
                        <img loading="lazy" src="@/assets/img/homesec/worker-laying.webp" alt="worker-laying">
                     </div>
                  </div>
                  <div class="homesec__slider-dots"></div>
               </div>
            </div>
            <div class="homesec__bottom">
               <div class="foundserv">
                  <div class="foundserv-icon">
                     <span class="i-q-search"></span>
                  </div>
                  <div class="foundserv__inner">
                     <div class="foundserv-desc">
                        <strong>Не нашли интересующую Вас услугу?</strong><br>
                        Просмотрите полный список цен на работы
                     </div>
                     <div class="foundserv-btn">Подробнее</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="runline__wrapper">
         <div class="runline">
            <div class="runline__item">Все полы сбудутся!</div>
            <div class="runline__item">Все полы сбудутся!</div>
            <div class="runline__item">Все полы сбудутся!</div>
            <div class="runline__item">Все полы сбудутся!</div>
            <div class="runline__item">Все полы сбудутся!</div>
         </div>
      </div>
   </section>

</template>
<script setup>
let slider;

onMounted(() => {
   $(document).ready(function () {
      slider = $(".homesec__slider").slick({
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: true,
      });
   });
})
onBeforeUnmount(() => {
   $(document).ready(function () {
      slider.slick('unslick');
   });
})

</script>