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
                <div
                  class="singleprod-char__list-item"
                  v-for="item in chars"
                  :key="item"
                >
                  <span>{{ item.key }}</span>
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </div>
            <div
              class="singleprod-bar"
              :class="{ no_calc: !(squaredMeters && squaredMeters > 0) }"
            >
              <form class="singleprod-bar__item">
                <div class="singleprod-bar__price">
                  <div
                    class="singleprod__tag"
                    v-if="data.is_hit"
                  >
                    Хит продаж
                  </div>
                  <div
                    class="singleprod__tag"
                    v-else-if="data.is_best"
                  >
                    Лучшее предложение
                  </div>
                  <div
                    class="singleprod__tag"
                    v-else-if="data.is_trend"
                  >
                    Тренд 2024
                  </div>
                  <div class="singleprod__issample">
                    <span class="i-issample-yellow"></span>
                    <span class="singleprod__issample-text">есть образец</span>
                  </div>
                  <div class="singleprod-bar__price-text">Цена:</div>
                  <div class="singleprod__regular-price">
                    <span>{{ data.price }}</span
                    ><span>руб. за м²</span>
                  </div>
                  <div class="singleprod-bar__price-text">Цена за упаковку:</div>
                  <div class="singleprod__pack-price">
                    <span>{{ data.price * data.squared_metres }}</span
                    ><span>руб. за уп.</span>
                  </div>
                  <!--  -->
                  <div class="products__item-bottom-frst">
                    <button
                      class="products__item-addtocart-btn"
                      :class="{ _active: inCart }"
                      :disabled="inCart"
                      @click="openPopup(false)"
                    >
                      <span class="products__item-addtocart-btn-txt">{{
                        inCart ? 'В корзине' : 'В корзину'
                      }}</span>
                    </button>
                    <!--  -->
                    <div
                      v-if="accountStore.isLogin"
                      class="products__item-wishlist-btn"
                      :class="{ _active: productsStore.isProductInFavorite(data.id) }"
                      @click="productsStore.toggleFavoriteProduct(data.id, data)"
                    >
                      <span
                        :class="{
                          'i-wishlist-active': productsStore.isProductInFavorite(data.id),
                          'i-wishlist-disabled': !productsStore.isProductInFavorite(data.id)
                        }"
                      ></span>
                    </div>
                  </div>

                  <div class="singleprod-info">
                    <div class="singleprod-info__item">
                      <b>Наличие:</b><span>наличие по запросу</span>
                    </div>
                    <div class="singleprod-info__item">
                      <b>Самовывоз в СПБ:</b><span>по запросу</span>
                    </div>
                    <div class="singleprod-info__item">
                      <b>Доставка по СПБ:</b><span>по запросу</span>
                    </div>
                  </div>
                </div>
              </form>
              <form
                v-if="squaredMeters && squaredMeters > 0"
                class="singleprod-bar__item"
              >
                <div class="singleprod-bar__calc">
                  <div class="singleprod-bar__calc-title">Калькулятор:</div>
                  <div class="singleprod-bar__calc-sizes">
                    <div class="singleprod-bar__calc__item">
                      <span class="singleprod-bar__calc__item-lbl">Ширина (м):</span>
                      <input
                        class="singleprod-bar__calc__item-width"
                        name="width"
                        type="number"
                        v-model="calcWidth"
                      />
                    </div>
                    <div class="singleprod-bar__calc__item">
                      <span class="singleprod-bar__calc__item-lbl">Длина (м):</span>
                      <input
                        class="singleprod-bar__calc__item-length"
                        name="length"
                        type="number"
                        v-model="calcHeight"
                      />
                    </div>
                  </div>
                  <div class="singleprod-bar__calc-or">или</div>
                  <div class="singleprod-bar__calc-square">
                    <div class="singleprod-bar__calc__item">
                      <span class="singleprod-bar__calc__item-lbl">Площадь (м²):</span>
                      <input
                        class="singleprod-bar__calc__item-square"
                        name="square"
                        type="number"
                        disabled
                        style="background-color: white"
                        :value="calcSquare"
                      />
                    </div>
                  </div>
                  <div class="singleprod-bar__calc-percents">
                    <label
                      for="radio-percent-1"
                      class="singleprod-bar__calc-percents-item"
                    >
                      <input
                        type="radio"
                        name="radio-percent"
                        id="radio-percent-1"
                        :value="0"
                        v-model="percent"
                      />
                      <span class="singleprod-bar__calc-percents-item-icon"></span>
                      <span class="singleprod-bar__calc-percents-item-txt">+0%</span>
                    </label>
                    <label
                      for="radio-percent-2"
                      class="singleprod-bar__calc-percents-item"
                    >
                      <input
                        type="radio"
                        name="radio-percent"
                        id="radio-percent-2"
                        :value="5"
                        v-model="percent"
                      />
                      <span class="singleprod-bar__calc-percents-item-icon"></span>
                      <span class="singleprod-bar__calc-percents-item-txt">+5%</span>
                    </label>
                    <label
                      for="radio-percent-3"
                      class="singleprod-bar__calc-percents-item"
                    >
                      <input
                        type="radio"
                        name="radio-percent"
                        id="radio-percent-3"
                        :value="10"
                        v-model="percent"
                      />
                      <span class="singleprod-bar__calc-percents-item-icon"></span>
                      <span class="singleprod-bar__calc-percents-item-txt">+10%</span>
                    </label>
                  </div>
                  <div class="singleprod-bar__calc-out">
                    <div class="singleprod-bar__calc-out-item">
                      <div class="singleprod-bar__calc-out-item-lbl">Ваша площадь:</div>
                      <div class="singleprod-bar__calc-out-item-val">
                        <span class="out_square_1">{{ calcSquare }}</span
                        ><span>м²</span>
                      </div>
                    </div>
                    <div class="singleprod-bar__calc-out-item">
                      <div class="singleprod-bar__calc-out-item-lbl">
                        Ваша площадь
                        <span
                          ><b>+</b> <span class="out_percents">{{ percent }}</span
                          ><b>%:</b></span
                        >
                      </div>
                      <div class="singleprod-bar__calc-out-item-val">
                        <span class="out_square_2">{{ squareWithPercent }}</span
                        ><span>м²</span>
                      </div>
                    </div>
                    <div class="singleprod-bar__calc-out-item">
                      <div class="singleprod-bar__calc-out-item-lbl">Количество упаковок:</div>
                      <div class="singleprod-bar__calc-out-item-val">
                        <span class="out_pack_count_1">{{ packageCount }}</span
                        ><span>уп.</span>
                      </div>
                    </div>
                    <div class="singleprod-bar__calc-out-item">
                      <div class="singleprod-bar__calc-out-item-lbl">Рекомендуем приобрести:</div>
                      <div class="singleprod-bar__calc-out-item-val">
                        <span class="out_pack_count_2">{{ packageCount }}</span
                        ><span>уп.</span>
                        <span class="singleprod-gray">({{ packageCount * squaredMeters }} м²)</span>
                      </div>
                    </div>
                  </div>
                  <div class="singleprod-bar__calc-out-price">
                    <span>{{ price }}</span> <span>руб.</span>
                  </div>
                  <div class="products__item-bottom-frst">
                    <!--  -->
                    <div
                      class="products__item-addtocart-btn"
                      :class="{ _active: inCart }"
                      :disabled="price === 0"
                      @click="openPopup(true)"
                    >
                      <span class="i-addtocart"></span
                      ><span class="products__item-addtocart-btn-txt">{{
                        inCart ? 'В корзине' : 'В корзину'
                      }}</span>
                    </div>
                    <!--  -->
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
                <div
                  class="singleprod-tabs__out-item _active"
                  v-html="data.description"
                ></div>
                <div
                  class="singleprod-tabs__out-item"
                  v-html="data.sposob_ukladki"
                ></div>
                <div
                  class="singleprod-tabs__out-item"
                  v-html="data.parketnaya_himia"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PopupsCart
      :countPackages="count"
      :product="data"
      :isOpen="isPopupOpen"
      @closePopup="isPopupOpen = false"
    />
  </main>
</template>
<script setup>
import { makeTabs } from '~/utils/makeProductPage'
import {
  isAlreadyInCart,
  addProductToCart,
  getProductCount,
  setProductCount
} from '~/assets/js/cart'
import { useProductsStore } from '~/store/productsStore'
import { useAccountStore } from '~/store/accountStore'

const productsStore = useProductsStore()
const accountStore = useAccountStore()

const isPopupOpen = ref(false)
const route = useRoute()
let data = await useBaseFetch('/catalog/product/' + route.params.slug + '/')

const squaredMeters = data['squared_metres']
const priceForMetr = data['price']

const calcWidth = ref(10)
const calcHeight = ref(10)
const calcSquare = computed(() => calcWidth.value * calcHeight.value)
const percent = ref(5)

const squareWithPercent = computed(() => {
  return calcSquare.value + (percent.value * calcSquare.value) / 100
})

const packageCount = computed(() => {
  const res = Math.ceil(squareWithPercent.value / squaredMeters)
  return res <= 0 ? 1 : res
})

const price = computed(() => {
  const priceForPackage = priceForMetr * squaredMeters
  return priceForPackage * packageCount.value
})

await productsStore.getFavoriteProducts()

onMounted(() => {
  makeTabs()
})
const count = ref(0)
const inCart = ref(false)
const path = ref([
  {
    name: 'Каталог',
    to: '/catalog'
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
const openPopup = (isCalcBtn) => {
  if (!inCart.value) {
    addProductToCart(data)

    if (isCalcBtn) {
      setProductCount(data.slug, packageCount.value)
      count.value = packageCount.value
    } else {
      count.value = 1
    }
  } else {
    if (isCalcBtn) {
      setProductCount(data.slug, packageCount.value)
      count.value = packageCount.value
    }
  }
  isPopupOpen.value = true
  inCart.value = true
}

onMounted(() => {
  inCart.value = isAlreadyInCart(data.slug)

  if (inCart.value) {
    count.value = getProductCount(data.slug)
  }
})
</script>
