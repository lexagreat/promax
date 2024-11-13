<template>
   <main class="main">

      <AppBreadcrumbs :path="path" />

      <div class="singleprod">
         <div class="container">
            <div class="singleprod__inner">
               <div class="singleprod-first">

                  <div class="singleprod-char__title-mob">{{ data.title }}</div>

                  <SectionsProductSlider :images="data.images" />

                  <div class="singleprod-char">
                     <h1 class="singleprod-char__title">{{ data.title }}</h1>
                     <div class="singleprod-char__list">
                        <div class="singleprod-char__list-item" v-for="item in chars" :key="item">
                           <span>{{ item.key }}</span>
                           <span>{{ item.value }}</span>
                        </div>
                     </div>
                  </div>
                  <div class="singleprod-bar">
                     <form class="singleprod-bar__item">
                        <div class="singleprod-bar__price">
                           <div class="singleprod__tag" v-if="data.is_hit">Хит продаж</div>
                           <div class="singleprod__tag" v-else-if="data.is_best">Лучшее предложение</div>
                           <div class="singleprod__tag" v-else-if="data.is_trend">Тренд 2024</div>
                           <div class="singleprod__issample">
                              <span class="i-issample-yellow"></span>
                              <span class="singleprod__issample-text">есть образец</span>
                           </div>
                           <div class="singleprod-bar__price-text">Цена:</div>
                           <div class="singleprod__regular-price"><span>{{ data.price }}</span><span>руб. за м²</span>
                           </div>
                           <div class="singleprod-bar__price-text">Цена за упаковку:</div>
                           <div class="singleprod__pack-price"><span>{{ data.price }}</span><span>руб. за уп.</span>
                           </div>

                           <div class="products__item-bottom-frst">
                              <div class="products__item-addtocart-btn _active" v-if="inCart" @click="openPopup">
                                 <span class="products__item-addtocart-btn-txt">В корзине</span>
                              </div>
                              <div class="products__item-addtocart-btn" v-else @click="openPopup"><span
                                    class="i-addtocart"></span><span class="products__item-addtocart-btn-txt">В
                                    корзину</span>
                              </div>
                              <div class="products__item-wishlist-btn"><span class="i-wishlist-disabled"></span>
                              </div>
                           </div>

                           <div class="singleprod-info">
                              <div class="singleprod-info__item"><b>Наличие:</b><span>наличие по запросу</span></div>
                              <div class="singleprod-info__item"><b>Самовывоз в СПБ:</b><span>по запросу</span></div>
                              <div class="singleprod-info__item"><b>Доставка по СПБ:</b><span>по запросу</span></div>
                           </div>

                        </div>
                     </form>
                     <form class="singleprod-bar__item">
                        <div class="singleprod-bar__calc">
                           <div class="singleprod-bar__calc-title">Калькулятор:</div>
                           <div class="singleprod-bar__calc-sizes">
                              <div class="singleprod-bar__calc__item">
                                 <span class="singleprod-bar__calc__item-lbl">Ширина (м):</span>
                                 <input class="singleprod-bar__calc__item-width" name="width" type="number" v-model="calcWidth">
                              </div>
                              <div class="singleprod-bar__calc__item">
                                 <span class="singleprod-bar__calc__item-lbl">Длина (м):</span>
                                 <input class="singleprod-bar__calc__item-length" name="length" type="number" v-model="calcHeight">
                              </div>
                           </div>
                           <div class="singleprod-bar__calc-or">или</div>
                           <div class="singleprod-bar__calc-square">
                              <div class="singleprod-bar__calc__item">
                                 <span class="singleprod-bar__calc__item-lbl">Площадь (м²):</span>
                                 <input class="singleprod-bar__calc__item-square" name="square" type="number" disabled style="background-color: white;" :value="calcSquare">
                              </div>
                           </div>
                           <div class="singleprod-bar__calc-percents">
                              <label for="radio-percent-1" class="singleprod-bar__calc-percents-item">
                                 <input type="radio" name="radio-percent" id="radio-percent-1" :value="0" v-model="percent">
                                 <span class="singleprod-bar__calc-percents-item-icon"></span>
                                 <span class="singleprod-bar__calc-percents-item-txt">+0%</span>
                              </label>
                              <label for="radio-percent-2" class="singleprod-bar__calc-percents-item">
                                 <input type="radio" name="radio-percent" id="radio-percent-2" :value="5" v-model="percent">
                                 <span class="singleprod-bar__calc-percents-item-icon"></span>
                                 <span class="singleprod-bar__calc-percents-item-txt">+5%</span>
                              </label>
                              <label for="radio-percent-3" class="singleprod-bar__calc-percents-item">
                                 <input type="radio" name="radio-percent" id="radio-percent-3" :value="10" v-model="percent">
                                 <span class="singleprod-bar__calc-percents-item-icon"></span>
                                 <span class="singleprod-bar__calc-percents-item-txt">+10%</span>
                              </label>
                           </div>
                           <div class="singleprod-bar__calc-out">
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">Ваша площадь:</div>
                                 <div class="singleprod-bar__calc-out-item-val"><span
                                       class="out_square_1">{{ calcSquare }}</span><span>м²</span></div>
                              </div>
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">
                                    Ваша площадь <span><b>+</b> <span class="out_percents">{{ percent }}</span><b>%:</b></span>
                                 </div>
                                 <div class="singleprod-bar__calc-out-item-val"><span
                                       class="out_square_2">{{ squareWithPercent }}</span><span>м²</span></div>
                              </div>
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">Количество упаковок:</div>
                                 <div class="singleprod-bar__calc-out-item-val"><span
                                       class="out_pack_count_1">{{ packageCount }}</span><span>уп.</span></div>
                              </div>
                              <div class="singleprod-bar__calc-out-item">
                                 <div class="singleprod-bar__calc-out-item-lbl">Рекомендуем приобрести:</div>
                                 <div class="singleprod-bar__calc-out-item-val">
                                    <span class="out_pack_count_2">{{ packageCount }}</span><span>уп.</span> <span
                                       class="singleprod-gray">({{ packageCount * squaredMeters }} м²)</span>
                                 </div>
                              </div>
                           </div>
                           <div class="singleprod-bar__calc-out-price"><span>{{ price }}</span> <span>руб.</span></div>
                           <div class="products__item-bottom-frst">
                              <div class="products__item-addtocart-btn" :disabled="price === 0" @click="isPopupOpen = true"><span
                                    class="i-addtocart"></span><span class="products__item-addtocart-btn-txt">В
                                    корзину</span>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div class="singleprod-second">
                  <div class="singleprod-tabs">
                     <div class="singleprod-tabs__ctrl">
                        <div class="singleprod-tabs__ctrl-item _active">Описание</div>
                        <div class="singleprod-tabs__ctrl-item">Способ для укладки</div>
                        <div class="singleprod-tabs__ctrl-item">Паркетная химия</div>
                     </div>
                     <div class="singleprod-tabs__out">
                        <div class="singleprod-tabs__out-item _active" v-html="data.description">
                        </div>
                        <div class="singleprod-tabs__out-item" v-html="data.sposob_ukladki">
                        </div>
                        <div class="singleprod-tabs__out-item" v-html="data.parketnaya_himia">
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>


      <PopupsCart :product="data" :isOpen="isPopupOpen" @closePopup="isPopupOpen = false" />
   </main>
</template>
<script setup>
import { makeTabs } from '~/utils/makeProductPage';
import { isAlreadyInCart, addProductToCart } from '~/assets/js/cart';
const isPopupOpen = ref(false)
const route = useRoute()
let data = await useBaseFetch('/catalog/product/' + route.params.slug)
console.log('data', data);
const squaredMeters = data['squared_metres']
const priceForMetr = data['price']


const calcWidth = ref(10)
const calcHeight = ref(10)
const calcSquare = computed(() => calcWidth.value * calcHeight.value)
const percent = ref(5)



const squareWithPercent = computed(() => {
   console.log('squareWithPercent', calcSquare.value + (percent.value * calcSquare.value / 100));
   return calcSquare.value + (percent.value * calcSquare.value / 100)
})

const packageCount = computed(() => {
   return Math.ceil(squareWithPercent.value / squaredMeters)
})

const price = computed(() => {
   const priceForPackage = priceForMetr * squaredMeters
   return priceForPackage * packageCount.value
})
// const calcSquare = computed(() => calcWidth * calcHeight)
onMounted(() => {
   makeTabs()
})
const inCart = ref(false)
const path = ref([
   {
      name: 'Каталог',
      to: "/catalog"
   },
   {
      name: data.title,
      to: '/product/' + route.params.slug
   }
])

const chars = ref([])

for (let key in data.detail_chars) {
   let title = key[0].toUpperCase + key
   let obj = {
      key: key.charAt(0).toUpperCase() + key.slice(1),
      value: data.detail_chars[key]
   }
   chars.value.push(obj)
}
const openPopup = () => {
   isPopupOpen.value = true
   inCart.value = true
   if (!isAlreadyInCart(data.slug)) {
      addProductToCart(data)
   }
}


onMounted(() => {
   inCart.value = isAlreadyInCart(data.slug)
})
</script>