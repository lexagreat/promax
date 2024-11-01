<template>
   <main class="main">

      <div class="blogb">
         <div class="blogb__inner">
            <h1 class="blogb__title">Блог</h1>
            <div class="blogb__main">
               <div class="container">

                  <div class="blogb__list">

                     <div class="blogb__item" v-for="item in blog" :key="item">
                        <div class="blogb__item-inner">
                           <div class="blogb__item-img">
                              <img loading="lazy" :src="item.image" alt="Технология укладки паркета">
                           </div>
                           <div class="blogb__item-desc">
                              <div class="blogb__item-desc-title">
                                 {{ item.title }}
                              </div>
                              <NuxtLink :to="'/blog/' + item.slug" class="blogb__item-desc-btn">
                                 <span class="blogb__item-desc-btn-name">Подробнее</span>
                                 <span class="i-blogb-more"></span>
                              </NuxtLink>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
      <TgExperts />
   </main>
</template>
<script setup>
let blog = await useBaseFetch("/blog/list")

</script>