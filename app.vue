<template>
   <div class="wrapper lock-padding">
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>
<style lang="scss">
@import "@/assets/scss/style";
</style>
<script setup>
import { initCart } from './assets/js/cart';
onMounted(() => {
   initCart()
})
</script>
