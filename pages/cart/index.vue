<template>
   <main class="main">
      <div class="cartb">
         <div class="container">
            <div class="cartb__inner">
               <h1 class="cartb__title">Корзина</h1>
               <div class="cartb__main">
                  <div class="cartb__list">
                     <CardsProductCart v-for="item in cart" :product="item" @remove="onRemove"
                        @changeCount="onChangeCount" />
                  </div>
                  <div class="cartb__main-info">
                     <div class="added-main__product-ctrl-cart">
                        <div class="added-main__product-ctrl-cart-lbl">Ваша корзина</div>
                        <div class="added-main__product-ctrl-cart-info">
                           <div class="added-main__product-ctrl-cart-info-first">
                              <span class="added-main__product-ctrl-cart-info-lbl">Товары</span>
                              <span class="added-main__product-ctrl-cart-info-val"> (<span>{{ cart.length
                                    }}</span>)</span>
                           </div>
                           <div class="added-main__product-ctrl-cart-info-sum"><span>{{ price }}</span> <span>₽</span>
                           </div>
                        </div>
                     </div>
                     <button class="added-main__product-ctrl-btn" @click="isPopupOpen = true"><span>Перейти к
                           оформлению</span><span class="i-ourserv-view-cases"></span></button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <TgExperts />
      <PopupsOrder :isOpen="isPopupOpen" @closePopup="isPopupOpen = false" />
   </main>
</template>
<script setup>
import { getCart, getFullPrice } from '~/assets/js/cart';
const isPopupOpen = ref(false)
const cart = ref([])
onMounted(() => {
   cart.value = getCart()
   price.value = getFullPrice(getCart())
})


const onRemove = () => {
   cart.value = getCart()
   price.value = getFullPrice(getCart())
}
const onChangeCount = () => {
   console.log('change');
   price.value = getFullPrice(getCart())
}

const price = ref(0)

</script>