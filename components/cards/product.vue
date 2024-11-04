<template>
   <div class="products__item" :data-product-id="id">
      <div class="products__item-slider-wrapper">
         <div class="products__item-discount"></div>
         <div class="products__item-slider">
            <div class="products__item-slider-item" v-for="image in product?.images">
               <img loading="lazy" :src="image" alt="products-item">
            </div>

         </div>
         <div class="products__item-slider-dots">
            <span class="products__item-slider-dots-item _bgred"></span>
            <span class="products__item-slider-dots-item _bgblack"></span>
            <span class="products__item-slider-dots-item _bgwhite"></span>
            <span class="products__item-slider-dots-item _bgblue"></span>
            <span class="products__item-slider-dots-item _bggreen"></span>
            <span class="products__item-slider-dots-item _bgred"></span>
            <span class="products__item-slider-dots-item _bgblack"></span>
            <span class="products__item-slider-dots-item _bgwhite"></span>
            <span class="products__item-slider-dots-item _bgblue"></span>
            <span class="products__item-slider-dots-item _bggreen"></span>
         </div>
      </div>
      <h2 class="products__item-title">
         <NuxtLink :to="'/product/' + product?.slug">{{ product?.title }}</NuxtLink>
      </h2>
      <div class="products__item-info">
         <div class="products__item-info-item _article">{{ product?.artikul }}</div> |
         <div class="products__item-info-item _description" v-html="product?.description"></div>
      </div>
      <div class="products__item-size">
         <span class="i-size-gray"></span>
         <span>{{ product.width }} х {{ product.length }} мм</span>
      </div>
      <div class="products__item-char">
         <div class="products__item-char-item" v-for="item in chars" :key="item">
            <span class="products__item-char-item-lbl">{{ item.key }}</span>
            <span class="products__item-char-item-val">{{ item.value }}</span>
         </div>
      </div>
      <div class="products__item-bottom">
         <div class="products__item-bottom-frst">
            <div class="products__item-wishlist-btn" :class="{ _active: isInFavor }"><span
                  class="i-wishlist-active"></span>
            </div>
            <div class="products__item-addtocart-btn" @click="addToCart" :class="{ _active: isInCart }"><span
                  class="i-addtocart"></span><span class="products__item-addtocart-btn-txt">В
                  корзину</span>
            </div>
            <div class="products__item-price">
               <span class="products__item-price-val">{{ product?.price }}</span>
               <span class="products__item-price-in">руб. за м²</span>
            </div>
         </div>
         <div class="products__item-issample">
            <span class="i-issample-gray"></span>
            <span class="products__item-issample-text">есть образец</span>
         </div>
      </div>
   </div>

</template>
<script setup>
import { addProductToCart, isAlreadyInCart } from '~/assets/js/cart';
const props = defineProps({
   id: String,
   product: Object
})
let slider;
const isInCart = ref(false)
const isInFavor = ref(false)
onBeforeUpdate(() => {
   isInCart.value = isAlreadyInCart(props.product.slug);

})
onMounted(() => {
   slider = $(`[data-product-id='${props.id}'] .products__item-slider`).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
   });
})
onBeforeRouteLeave(() => {
   $(document).ready(function () {
      slider.slick('unslick');
   });
})

const addToCart = () => {
   addProductToCart(props.product)
   isInCart.value = true
}
const chars = ref([])

for (let key in props.product.detail_chars) {
   let obj = {
      key: key.charAt(0).toUpperCase() + key.slice(1),
      value: props.product.detail_chars[key]
   }
   chars.value.push(obj)
}
</script>


<style lang="scss">
.products__item-info-item._description {
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;

   &>* {
      margin: 0 !important;
      font-size: unset;
      line-height: unset;
   }
}
</style>