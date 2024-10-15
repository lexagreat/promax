<template>
   <section class="breadcrumbs">
      <div class="container">
         <div class="breadcrumbs__inner">
            <div v-for="(item, index) in path" :key="item">
               <NuxtLink :to="item.to" class="breadcrumbs__item">{{ item.name }}</NuxtLink>
               <span v-if="index !== path.length - 1" class="breadcrumbs__sep"><span
                     class="i-breadcrumbs-sep"></span></span>
            </div>
            <!-- <NuxtLink to="#" class="breadcrumbs__item">Паркет с рисунками</NuxtLink>
            <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
            <span class="breadcrumbs__item">Рисунки карандашом «Print»</span> -->
         </div>
      </div>
   </section>
</template>
<script setup>
const props = defineProps({
   path: Array
})

</script>



<style lang="scss">
.breadcrumbs__inner>div {
   display: flex;
   align-items: center;
   gap: 30px;

   @media(max-width: 1470px) {
      gap: 7px;
   }
}
</style>