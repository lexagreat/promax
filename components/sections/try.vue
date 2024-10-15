<template>
   <section class="try">
      <div class="container">
         <div class="try__inner">
            <h1 class="try__title">ПРИМЕРЬ <span>СВОЙ БУДУЩИЙ</span> ПОЛ</h1>
            <div class="try-main">
               <div class="try-btns">
                  <div class="try-btns__item">
                     <div class="i-photo-orange"></div>
                     <div class="try-btns__item-lbl">
                        <span class="try-btns__item-title">Загрузите свою комнату</span>
                        <span class="try-btns__item-desc"></span>
                     </div>
                  </div>
                  <div class="try-btns__item">
                     <div class="i-check-black"></div>
                     <div class="try-btns__item-lbl">
                        <span class="try-btns__item-title">Выберите пол</span>
                        <span class="try-btns__item-desc">Country Oak</span>
                     </div>
                  </div>
                  <div class="try-btns__item">
                     <div class="i-choice-black"></div>
                     <div class="try-btns__item-lbl">
                        <span class="try-btns__item-title">Выберите комнату</span>
                        <span class="try-btns__item-desc">Моя комната</span>
                     </div>
                  </div>

               </div>
               <div class="try-slider-wrapper">
                  <div class="try-slider">
                     <NuxtLink to="#" class="try-slider__item">
                        <div class="try-slider__item-img">
                           <img src="@/assets/img/try/image_5.webp" alt="image_5">
                        </div>
                        <div class="try-slider__item-main">
                           <h3 class="try-slider__item-subtitle">Moduleo Roots Country Oak 549941</h3>
                           <h2 class="try-slider__item-title">Country Oak</h2>
                           <div class="try-slider__item-size">
                              <span class="i-size-gray"></span>
                              <span>632 х 158 мм</span>
                           </div>
                        </div>
                     </NuxtLink>
                     <NuxtLink to="#" class="try-slider__item">
                        <div class="try-slider__item-img">
                           <img src="@/assets/img/try/image_5.webp" alt="image_5">
                        </div>
                        <div class="try-slider__item-main">
                           <h3 class="try-slider__item-subtitle">Moduleo Roots Country Oak 549941</h3>
                           <h2 class="try-slider__item-title">Country Oak 2</h2>
                           <div class="try-slider__item-size">
                              <span class="i-size-gray"></span>
                              <span>632 х 158 мм</span>
                           </div>
                        </div>
                     </NuxtLink>
                  </div>
                  <div class="try-slider-control">
                     <div class="try-slider-control__prev"><span class="i-prev-black"></span></div>
                     <div class="try-slider-control__next"><span class="i-next-black"></span></div>
                  </div>
                  <div class="try-slider-more">
                     <!-- link of the current slide -->
                     <NuxtLink to="#">Подробнее</NuxtLink>
                  </div>
               </div>
               <div class="try-img-wrapper">
                  <div class="try-img">
                     <img src="@/assets/img/try/try-img.webp" alt="try-img">
                  </div>
                  <div class="try-img-btns">
                     <div class="try-img-btns__item btn_try_plus"><span class="i-plus-white"></span></div>
                     <div class="try-img-btns__item btn_try_link"><span class="i-link-gray"></span></div>
                     <div class="try-img-btns__item btn_try_cube"><span class="i-cube-gray"></span></div>
                     <div class="try-img-btns__item btn_try_compare"><span class="i-compare-gray"></span>
                     </div>
                     <div class="try-img-btns__item btn_try_cad"><span class="i-cad-gray"></span></div>
                     <div class="try-img-btns__item btn_img_burger"><span class="i-img-burger"></span></div>
                  </div>
                  <div class="try-unload _btn">Выгрузить</div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
let slider;
onMounted(() => {
   slider = $(".try-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $(".try-slider-control__prev"),
      nextArrow: $(".try-slider-control__next"),
   });

})

onBeforeUnmount(() => {
   $(document).ready(function () {
      slider.slick('unslick');
   });
})

</script>