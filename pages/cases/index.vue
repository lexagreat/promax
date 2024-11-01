<template>
   <main class="main">
      <div class="casesb">
         <!-- <div class="container"> -->
         <div class="casesb__inner">
            <h1 class="casesb__title">Кейсы</h1>
            <div class="casesb__main">
               <div class="casesb__list">
                  <div class="howwork">
                     <div class="container">
                        <div class="howwork__inner">

                           <div class="howwork__list">

                              <!-- <div class="howwork__item">
                                 <div class="howwork__item-poster">
                                    <img loading="lazy" src="@/assets/img/howwork/howwork-1.webp" alt="howwork">
                                 </div>
                                 <div class="howwork__item-video-popup">
                                    <div class="howwork__item-video-close"></div>
                                    <div class="howwork__item-video-inner">
                                       place for video frame
                                    </div>
                                 </div>
                                 <h3 class="howwork__item-title">Грунтовка | Нанесение<br> двухкомпонентной<br>
                                    грунтовки
                                    на
                                    растворителе</h3>
                              </div> -->
                              <div class="howwork__item" v-for="item in youtube.items">
                                 <div class="howwork__item-poster">
                                    <!-- <img loading="lazy" src="@/assets/img/howwork/howwork-1.webp" alt="howwork"> -->
                                 </div>
                                 <div class="howwork__item-video-popup">
                                    <div class="howwork__item-video-close"></div>
                                    <div class="howwork__item-video-inner" v-html="item.iframe">
                                    </div>
                                 </div>
                                 <h3 class="howwork__item-title">{{ item.title }}</h3>
                              </div>


                           </div>
                           <NuxtLink :to="youtube.link" class="howwork__btn_youtube">
                              <span class="i-youtube"></span>
                              <span>{{ youtube.title }}</span>
                           </NuxtLink>
                        </div>
                     </div>
                  </div>
                  <div class="howwork">
                     <div class="container">
                        <div class="howwork__inner">

                           <div class="howwork__list">

                              <div class="howwork__item" v-for="item in tg.items">
                                 <div class="howwork__item-poster">
                                    <!-- <img loading="lazy" src="@/assets/img/howwork/howwork-1.webp" alt="howwork"> -->
                                 </div>
                                 <div class="howwork__item-video-popup">
                                    <div class="howwork__item-video-close"></div>
                                    <div class="howwork__item-video-inner" v-html="item.iframe">
                                    </div>
                                 </div>
                                 <h3 class="howwork__item-title">{{ item.title }}</h3>
                              </div>

                           </div>
                           <NuxtLink :to="tg.link" class="howwork__btn_telegram">
                              <span class="i-telegram"></span>
                              <span>{{ tg.title }}</span>
                           </NuxtLink>
                        </div>
                     </div>
                  </div>
                  <div class="howwork">
                     <div class="container">
                        <div class="howwork__inner">

                           <div class="howwork__list">

                              <div class="howwork__item" v-for="item in inst.items">
                                 <div class="howwork__item-poster">
                                    <!-- <img loading="lazy" src="@/assets/img/howwork/howwork-1.webp" alt="howwork"> -->
                                 </div>
                                 <div class="howwork__item-video-popup">
                                    <div class="howwork__item-video-close"></div>
                                    <div class="howwork__item-video-inner" v-html="item.iframe">
                                    </div>
                                 </div>
                                 <h3 class="howwork__item-title">{{ item.title }}</h3>
                              </div>
                           </div>
                           <NuxtLink :to="tg.link" class="howwork__btn_instagram">
                              <span class="i-instagram"></span>
                              <span>{{ inst.title }}</span>
                           </NuxtLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- </div> -->
      </div>
   </main>
</template>
<script setup>
let cases = await useBaseFetch("/blog/cases")
let youtube = ref(cases[0].youtube)
let tg = ref(cases[0].tg)
let inst = ref(cases[0].inst)
console.log(cases[0]);
</script>