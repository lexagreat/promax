<template>
   <section class="prodtabs">
      <div class="container">
         <div class="prodtabs__inner">
            <div class="prodtabs__control">
               <div class="prodtabs-tabs">
                  <div class="prodtabs-tabs__item _active">Тренд 2024</div>
                  <div class="prodtabs-tabs__item">Хит продаж</div>
                  <div class="prodtabs-tabs__item">Лучшее предложение</div>
               </div>
               <NuxtLink to="#" class="prodtabs__btn _btn">Перейти в Каталог</NuxtLink>
            </div>
            <div class="prodtabs__main products products_ld_4">

               <CardsProduct v-for="(item, index) in products" :product="item" :key="index"
                  :id="'homepageitem' + index" />

            </div>
         </div>
      </div>
   </section>
</template>
<script setup>
let products = await useBaseFetch('/products-list')
</script>