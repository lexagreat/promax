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
              <div
                v-if="data.volume"
                class="singleprod-char__volumes"
              >
                <button
                  v-for="volume of volumes"
                  class="singleprod-char__volumes-item"
                  :class="{ '_active': Number(volume.artikul) === activeVolume }"
                  :key="volume.artikul"
                  @click="toggleVolume(Number(volume.artikul))"
                >
                  {{ volume.volume }}
                </button>
              </div>
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
                    <span>{{ volumes.length ? volumePrice : data.price }}</span>
                    <span v-if="data.squared_metres === null">руб.</span>
                    <span v-else>руб. за м²</span>
                  </div>
                  <div
                    v-if="data.squared_metres !== null"
                    class="singleprod-bar__price-text"
                  >
                    Цена за упаковку:
                  </div>
                  <div
                    v-if="data.squared_metres !== null"
                    class="singleprod__pack-price"
                  >
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
                        <span class="singleprod-gray">({{ squareWithPercent }} м²)</span>
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
                <div class="singleprod-tabs__out-item _active">
                  <p>{{ data.description }}</p>
                  <div class="attachments">
                    <a
                      v-for="attachment of data.attachment"
                      class="attachments-link"
                      :href="data.attachment.file"
                      target="_blank"
                      download
                      >{{ attachment.title || attachment.file }}</a
                    >
                  </div>
                </div>
                <div class="singleprod-tabs__out-item">
                  <p>{{ data.sposob_ukladki }}</p>
                </div>
                <div class="singleprod-tabs__out-item">
                  <div
                    v-if="data.useful_product"
                    class="added-main__related-list"
                  >
                    <div
                      class="added-main__related-item"
                      v-for="usefulProduct of data.useful_product"
                      :key="usefulProduct.id"
                    >
                      <div class="added-main__related-item-img">
                        <img
                          :src="usefulProduct.images[0]"
                          :alt="usefulProduct.sub_category.title"
                        />
                      </div>
                      <div class="added-main__related-item-name">
                        <div class="added-main__related-item-name-lbl">
                          {{ usefulProduct.sub_category.category }}
                        </div>
                        <div class="added-main__related-item-name-title">
                          {{ usefulProduct.sub_category.title }}
                        </div>
                      </div>
                      <div class="added-main__related-item-price">
                        <span>{{ usefulProduct.price }}</span> <span>руб.</span>
                      </div>
                      <div class="added-main__related-item-addcart">
                        <div
                          class="products__item-addtocart-btn"
                          ref="addtocart-btn"
                          :data-slug="usefulProduct.slug"
                          @click="addUsefulProductToCart(usefulProduct.slug)"
                        >
                          <span class="i-addtocart"></span>
                          <span class="products__item-addtocart-btn-txt">В корзину</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PopupsCart
      :countPackages="count"
      :product="data"
      :activeVolume="activeVolume"
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

const volumes = data['volume'] || []
let activeVolume = ref(null)

if (volumes.length) {
  activeVolume.value = Number(volumes[0].artikul)
}

const volumePrice = computed(() => {
  return volumes.filter((volume) => Number(volume.artikul) === activeVolume.value)[0].price
})

const toggleVolume = (artikul) => {
  activeVolume.value = artikul
}

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

const squaerdPrice = computed(() => {
  const priceForPackage = priceForMetr * squaredMeters
  return priceForPackage * packageCount.value
})

onMounted(async () => {
  if (accountStore.isLogin) {
    await productsStore.getFavoriteProducts()
  }
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
    if (volumes.length) {
      const updatedProduct = JSON.parse(JSON.stringify(data))
      updatedProduct.artikulVolume = activeVolume.value

      addProductToCart(updatedProduct)
    } else {
      addProductToCart(data)
    }

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

const addToCartBtns = useTemplateRef('addtocart-btn')

const addUsefulProductToCart = async (slug) => {
  const product = await useBaseFetch('/catalog/product/' + slug)

  if (typeof product === 'object' && !isAlreadyInCart(slug)) {
    addProductToCart(product)

    for (let btn of addToCartBtns.value) {
      const btnSlug = btn.getAttribute('data-slug')

      if (isAlreadyInCart(slug) && btnSlug === slug) {
        btn.children[1].innerText = 'В корзине'
        btn.classList.add('_active')
        btn.setAttribute('disabled', true)
      }
    }
  }
}

onMounted(() => {
  inCart.value = isAlreadyInCart(data.slug)

  if (inCart.value) {
    count.value = getProductCount(data.slug)
  }

  if (addToCartBtns.value && addToCartBtns.value.length) {
    for (let btn of addToCartBtns.value) {
      const slug = btn.getAttribute('data-slug')

      if (isAlreadyInCart(slug)) {
        btn.children[1].innerText = 'В корзине'
        btn.classList.add('_active')
        btn.setAttribute('disabled', true)
      }
    }
  }
})
</script>
<style scoped>
.added-main__related-item:first-child {
  border-top: none;
}
</style>
