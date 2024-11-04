<template>
   <main class="main">
      <div class="singleserv">
         <div class="singleserv__inner">
            <h1>{{ data.title }}</h1>
            <div class="singleserv__desc">
               {{ data.subtitle }}
            </div>

            <div class="singleserv__pop-wrp">
               <div class="container">
                  <div class="singleserv__pop">
                     <div class="singleserv__pop-label">
                        <b>Самые популярные</b> укладки деревянных напольных покрытий:
                     </div>
                     <div class="singleserv__pop-list">

                        <div class="singleserv__pop-item _active">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop1.svg"
                                 alt="Укладка паркетной и инженерной доски">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка паркетной и инженерной доски
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop2.svg"
                                 alt="Укладка художественного паркета">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка художественного паркета
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop3.svg" alt="Укладка французской елочки">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка французской елочки
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop4.svg" alt="Укладка модульного паркета">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка модульного паркета
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop5.svg"
                                 alt="Укладка паркета в ванных комнатах">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка паркета в ванных комнатах
                           </div>
                        </div>
                        <div class="singleserv__pop-item">
                           <div class="singleserv__pop-item-img">
                              <img src="@/assets/img/ourserv/singleserv__pop6.svg" alt="Укладка штучного паркета">
                           </div>
                           <div class="singleserv__pop-item-txt">
                              Укладка штучного паркета
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>

            <div class="singleserv__price">
               <div class="container">
                  <div class="singleserv__price-inner">
                     <h2 class="singleserv__price-label">Цены и услуги на укладку паркета в Санкт-Петербурге</h2>
                     <div class="singleserv__price-table">
                        <div class="singleserv__price-table-header">
                           <div class="singleserv__price-table-serv">{{ data.prices.title }}</div>
                           <div class="singleserv__price-table-price">РУБ@/М2 </div>
                        </div>
                        <div class="singleserv__price-table-body">

                           <div class="singleserv__price-table-item singleserv__price_btn"
                              v-for="item in data.prices.items" :key="item">
                              <div class="singleserv__price-table-serv">{{ item.name }}</div>
                              <div class="singleserv__price-table-icon-wrp">
                                 <div class="singleserv__price-table-price">{{ item.price }}</div>
                                 <button class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                       class="i-singleserv-arrow"></span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="singleserv__price-foundserv">
                        <div class="foundserv">
                           <div class="foundserv-icon">
                              <span class="i-q-search"></span>
                           </div>
                           <div class="foundserv__inner">
                              <div class="foundserv-desc">
                                 <strong>Не нашли интересующую Вас услугу?</strong><br>
                                 Просмотрите полный список цен на работы
                              </div>
                              <NuxtLink to="/prices" class="foundserv-btn">Подробнее</NuxtLink>
                           </div>
                        </div>
                     </div>

                     <div class="singleserv__price-text">
                        <div class="singleart">
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

                  </div>
               </div>
            </div>


         </div>
      </div>
      <TgExperts />

   </main>
   <PopupsService :isOpen="isPopupOpen" @closePopup="isPopupOpen = false" />
</template>
<script setup>
const isPopupOpen = ref(false)
let route = useRoute()
let slug = route.params.slug


let data = await useBaseFetch(`/blog/service/${slug}`)
console.log(data);
</script>