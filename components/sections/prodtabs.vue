<template>
   <section class="prodtabs">
      <div class="container">
         <div class="prodtabs__inner">
            <div class="prodtabs__control">
               <div class="prodtabs-tabs">
                  <div class="prodtabs-tabs__item" @click="setTab('get_trends')"
                     :class="{ _active: url == 'get_trends' }">Тренд 2024</div>
                  <div class="prodtabs-tabs__item" @click="setTab('get_hits')" :class="{ _active: url == 'get_hits' }">
                     Хит
                     продаж</div>
                  <div class="prodtabs-tabs__item" @click="setTab('get_bests')"
                     :class="{ _active: url == 'get_bests' }">
                     Лучшее предложение</div>
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
const products = ref([])
let base = '/products/'
const url = ref('get_trends')
async function setTab(slug) {
   url.value = slug
   products.value = await useBaseFetch(base + url.value, {
      method: "POST"
   });

}
await setTab('get_trends')
</script>