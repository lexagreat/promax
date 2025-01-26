<template>
  <main class="main">
    <div class="cartb">
      <div class="container">
        <div class="cartb__inner">
          <h1 class="cartb__title">Корзина</h1>
          <div class="cartb__main">
            <div class="cartb__list">
              <CardsProductCart
                v-for="item in cart"
                :product="item"
                @remove="onRemove"
                @changeCount="onChangeCount"
              />
            </div>
            <div
              v-if="cart.length"
              class="cartb__main-info"
            >
              <div class="added-main__product-ctrl-cart">
                <div class="added-main__product-ctrl-cart-lbl">Ваша корзина</div>
                <div class="added-main__product-ctrl-cart-info">
                  <div class="added-main__product-ctrl-cart-info-first">
                    <span class="added-main__product-ctrl-cart-info-lbl">Товары</span>
                    <span class="added-main__product-ctrl-cart-info-val">
                      (<span>{{ cart.length }}</span
                      >)</span
                    >
                  </div>
                  <div class="added-main__product-ctrl-cart-info-sum">
                    <span>{{ price }}</span> <span>₽</span>
                  </div>
                </div>
              </div>
              <!-- TODO: Потом добавить :disabled="!accountStore.isLogin" -->
              <button
                class="added-main__product-ctrl-btn"
                @click="makeOrder"
              >
                <span>Перейти к оформлению</span><span class="i-ourserv-view-cases"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TgExperts />
    <PopupsOrder
      :isOpen="openCartPopup"
      @closePopup="openCartPopup = false"
      @success="success"
    />
    <PopupsSuccess
      :isOpen="openSuccessPopup"
      @closePopup="openSuccessPopup = false"
    />
  </main>
</template>
<script setup>
import { clearCart, getCart, getFullPrice } from '~/assets/js/cart'
import { useAccountStore } from '~/store/accountStore'

const accountStore = useAccountStore()

const router = useRouter()

const openCartPopup = ref(false)
const openSuccessPopup = ref(false)
const cart = ref([])
onMounted(() => {
  cart.value = getCart()
  price.value = getFullPrice()
})

const onRemove = () => {
  cart.value = getCart()
  price.value = getFullPrice()
}
const onChangeCount = () => {
  price.value = getFullPrice()
}

async function success() {
  await clearCart()
  cart.value = []
  openSuccessPopup.value = true
}

const price = ref(0)

function makeOrder() {
  // TODO - потом добавить
  // if (!accountStore.isLogin) {
  //   router.push('/')
  // }
  openCartPopup.value = true
}
</script>
