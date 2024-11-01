<template>

   <main class="main">
      <div class="breadcrumbs">
         <div class="container">
            <div class="breadcrumbs__inner">
               <NuxtLink to="/blog" class="breadcrumbs__item">Блог</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <span class="breadcrumbs__item">{{ data.title }}</span>
            </div>
         </div>
      </div>

      <div class="singleart">
         <div class="container">
            <div class="singleart__inner">
               <h1>{{ data.title }}</h1>
               <div v-for="item in data.blocks" :key="item" class="p">
                  <div>
                     <h2 v-if="item.title">{{ item.title }}</h2>
                     <p>{{ item.text }}</p>

                  </div>
                  <img v-if="item.image" :src="item.image" alt="">

               </div>

            </div>
         </div>
      </div>
      <TgExperts />
   </main>

</template>
<script setup>
const route = useRoute()
let slug = route.params.slug;
let data = await useBaseFetch(`/blog/${slug}`)
console.log(data);
</script>


<style lang="scss" scoped>
div.p {
   display: flex;
   gap: 24px;

   &:nth-child(even) {
      flex-direction: row-reverse;
   }

   img {
      max-width: 100%;
   }

   @media(max-width: 1024px) {
      flex-direction: column !important;
   }
}
</style>