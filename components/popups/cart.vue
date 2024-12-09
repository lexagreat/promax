<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
  >
    <div class="added-main">
      <div class="added-main__inner">
        <div class="added-main__label">Товар добавлен в корзину</div>
        <div>
          <!-- <p>product.price: {{ product.price }}</p>
          <p>product.squared_metres: {{ product.squared_metres }}</p>
          <p>localCount: {{ localCount }}</p>
          <p>countPackages: {{ props.countPackages }}</p> -->
        </div>
        <div class="added-main__product">
          <div class="added-main__product-img">
            <img
              :src="product.images[0]"
              alt="Рисунки карандашом «Print»"
            />
          </div>
          <div class="added-main__product-info">
            <div class="added-main__product-name">
              <div class="added-main__product-name-cat">{{ product.sub_category.title }}</div>
              <div class="added-main__product-name-title">{{ product.title }}</div>
            </div>
            <div class="added-main__product-price">
              <div class="added-main__product-price-lbl">Цена:</div>
              <div class="added-main__product-price-val">
                <span>{{ product.price }}</span> <span>руб. за м²</span>
              </div>
            </div>
            <div class="added-main__product-price-pack">
              <div class="added-main__product-price-pack-lbl">Цена за упаковку:</div>
              <div class="added-main__product-price-pack-val">
                <span>{{ product.price * product.squared_metres }}</span> <span>руб. за уп.</span>
              </div>
            </div>
          </div>
          <div class="added-main__product-ctrl">
            <div class="added-main__product-ctrl-sum">
              <div class="added-main__product-ctrl-sum-val">
                <span>{{ product.price * product.squared_metres * localCount }}</span>
                <span>₽</span>
              </div>
              <div class="add-prod-ctrl-sum-right">
                <div class="add-prod-ctrl-sum-counter">
                  <button
                    class="counter-minus"
                    :disabled="localCount <= 1"
                    @click="minus"
                  ></button>
                  <span class="counter-val">{{ localCount }}</span>
                  <span
                    class="counter-plus"
                    @click="plus"
                  ></span>
                </div>
                <div class="add-prod-ctrl-sum-pcs">уп.</div>
              </div>
            </div>
            <div class="added-main__product-ctrl-cart">
              <div class="added-main__product-ctrl-cart-lbl">Ваша корзина</div>
              <div class="added-main__product-ctrl-cart-info">
                <div class="added-main__product-ctrl-cart-info-first">
                  <span class="added-main__product-ctrl-cart-info-lbl">Товары</span>
                  <span class="added-main__product-ctrl-cart-info-val">
                    (<span>{{ countOfProducts }}</span
                    >)</span
                  >
                </div>
                <div class="added-main__product-ctrl-cart-info-sum">
                  <span>{{ sumOfProducts }}</span> <span>₽</span>
                </div>
              </div>
            </div>
            <NuxtLink
              href="/cart"
              class="added-main__product-ctrl-btn"
              ><span>Перейти в корзину</span><span class="i-cart-circle"></span
            ></NuxtLink>
          </div>
        </div>
        <div v-if="props.product.useful_product.length" class="added-main__related">
          <div class="added-main__related-label">Вам могут пригодиться</div>
          <div class="added-main__related-list">
            <div
              class="added-main__related-item"
              v-for="usefulProduct of props.product.useful_product"
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
    <div class="added__layer popup__layer"></div>
  </AppPopup>
</template>
<script setup>
import { useTemplateRef } from 'vue'
import {
  minusProductCount,
  plusProductCount,
  getProductCount,
  isAlreadyInCart,
  getSumOfProducts,
  getCountOfProducts,
  addProductToCart
} from '~/assets/js/cart'
const props = defineProps({
  isOpen: Boolean,
  product: Object,
  countPackages: Number
})
const emit = defineEmits(['closePopup'])
const onClose = () => {
  emit('closePopup')
}
const localCount = ref(0)
const sumOfProducts = ref(0)
const countOfProducts = ref(0)

const addToCartBtns = useTemplateRef('addtocart-btn')

const plus = () => {
  localCount.value++
  plusProductCount(props.product.slug)
  sumOfProducts.value = getSumOfProducts()
}
const minus = () => {
  localCount.value--
  minusProductCount(props.product.slug)
  sumOfProducts.value = getSumOfProducts()
}

const addUsefulProductToCart = async (slug) => {
  const product = await useBaseFetch('/catalog/product/' + slug)

  if (typeof product === 'object' && !isAlreadyInCart(slug)) {
    addProductToCart(product)
    sumOfProducts.value = getSumOfProducts()
    countOfProducts.value = getCountOfProducts()

    for (let btn of addToCartBtns.value) {
      const btnSlug = btn.getAttribute('data-slug')

      if (isAlreadyInCart(slug) && btnSlug === slug) {
        btn.children[1].innerText = 'В корзине'
        btn.classList.add('_active')
      }
    }
  }
}

watch(
  () => props.countPackages,
  (newValue) => {
    localCount.value = newValue
    sumOfProducts.value = getSumOfProducts()
    countOfProducts.value = getCountOfProducts()
  }
)

onMounted(() => {
  localCount.value = getProductCount(props.product.slug)
  sumOfProducts.value = getSumOfProducts()
  countOfProducts.value = getCountOfProducts()

  if (addToCartBtns.value && addToCartBtns.value.length) {
    for (let btn of addToCartBtns.value) {
      const slug = btn.getAttribute('data-slug')
  
      if (isAlreadyInCart(slug)) {
        btn.children[1].innerText = 'В корзине'
        btn.classList.add('_active')
      }
    }
  }
})
</script>
