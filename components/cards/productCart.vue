<template>
   <div class="cartb__item">
      <div class="cartb__item-first">
         <div class="cartb__item-first-mark _active">
            <span class="i-grey-mark"></span>
         </div>
         <div class="cartb__item-first-img">
            <img src="@/assets/img/cartb.png" alt="Рисунки карандашом «Print»">
         </div>
      </div>
      <div class="cartb__item-second">
         <div class="cartb__item-second-cat">Дизайнерский паркет</div>
         <div class="cartb__item-second-title">{{ product.title }}</div>
         <div class="cartb__item-second-prices">
            <div class="cartb__item-second-prices-reg">
               <span>{{ product.price }}</span> <span>руб. за м²</span>
            </div>
            <!-- <div class="cartb__item-second-prices-pack">
               <span>20 000</span> <span>руб. за уп.</span>
            </div> -->
         </div>
      </div>
      <div class="cartb__item-third">
         <div class="cartb__item-third-ctrl">
            <div class="add-prod-ctrl-sum-right">
               <div class="add-prod-ctrl-sum-counter">
                  <span class="counter-minus" @click="minus"></span>
                  <span class="counter-val">{{ count }}</span>
                  <span class="counter-plus" @click="plus"></span>
               </div>
               <div class="add-prod-ctrl-sum-pcs">уп.</div>
               <div class="add-prod-ctrl-sum-square"><span>3</span> <span>м²</span></div>
            </div>
            <div class="cartb__item-third-ctrl-delete" @click="remove">
               <span class="i-delete-btn"></span>
            </div>
         </div>
         <div class="cartb__item-third-price">
            <span>{{ product.price * count }}</span> <span>₽</span>
         </div>
      </div>
   </div>
</template>
<script setup>
import { getProductCount, plusProductCount, minusProductCount, removeProductFromCart } from '~/assets/js/cart';
const props = defineProps({
   product: Object
})
const emit = defineEmits(["remove", "changeCount"])
const count = ref(0)

const plus = () => {
   count.value++
   plusProductCount(props.product.slug)
   emit('changeCount')

}
const minus = () => {
   if (count.value <= 1) return
   count.value--
   minusProductCount(props.product.slug)
   emit('changeCount')

}
const remove = () => {
   removeProductFromCart(props.product.slug)
   emit('remove')
}

onMounted(() => {
   count.value = getProductCount(props.product.slug)
})

</script>