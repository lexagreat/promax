<template>
   <AppPopup :isOpen="isOpen" @closePopup="onClose">
      <div class="added-main">
         <div class="added-main__inner">
            <div class="added-main__label">Товар добавлен в корзину</div>
            <div class="added-main__product">
               <div class="added-main__product-img">
                  <img src="@/assets/img/products/added-product-img.png" alt="Рисунки карандашом «Print»">
               </div>
               <div class="added-main__product-info">
                  <div class="added-main__product-name">
                     <div class="added-main__product-name-cat">Дизайнерский паркет</div>
                     <div class="added-main__product-name-title">Рисунки карандашом «Print»</div>
                  </div>
                  <div class="added-main__product-price">
                     <div class="added-main__product-price-lbl">Цена:</div>
                     <div class="added-main__product-price-val"><span>7 500</span> <span>руб. за м²</span></div>
                  </div>
                  <div class="added-main__product-price-pack">
                     <div class="added-main__product-price-pack-lbl">Цена за упаковку:</div>
                     <div class="added-main__product-price-pack-val"><span>20 000</span> <span>руб. за уп.</span></div>
                  </div>
               </div>
               <div class="added-main__product-ctrl">
                  <div class="added-main__product-ctrl-sum">
                     <div class="added-main__product-ctrl-sum-val"><span>20 000</span> <span>₽</span></div>
                     <div class="add-prod-ctrl-sum-right">
                        <div class="add-prod-ctrl-sum-counter">
                           <span class="counter-minus"></span>
                           <span class="counter-val">1</span>
                           <span class="counter-plus"></span>
                        </div>
                        <div class="add-prod-ctrl-sum-pcs">уп.</div>
                     </div>
                  </div>
                  <div class="added-main__product-ctrl-cart">
                     <div class="added-main__product-ctrl-cart-lbl">Ваша корзина</div>
                     <div class="added-main__product-ctrl-cart-info">
                        <div class="added-main__product-ctrl-cart-info-first">
                           <span class="added-main__product-ctrl-cart-info-lbl">Товары</span>
                           <span class="added-main__product-ctrl-cart-info-val"> (<span>1</span>)</span>
                        </div>
                        <div class="added-main__product-ctrl-cart-info-sum"><span>20 000</span> <span>₽</span></div>
                     </div>
                  </div>
                  <a href="./cart.php" class="added-main__product-ctrl-btn"><span>Перейти в корзину</span><span
                        class="i-cart-circle"></span></a>
               </div>
            </div>
            <div class="added-main__related">
               <div class="added-main__related-label">Вам могут пригодиться</div>
               <div class="added-main__related-list">

                  <div class="added-main__related-item">
                     <div class="added-main__related-item-img">
                        <img src="@/assets/img/products/related-product.png" alt="Клей для паркета Jurgi">
                     </div>
                     <div class="added-main__related-item-name">
                        <div class="added-main__related-item-name-lbl">Клей для паркета</div>
                        <div class="added-main__related-item-name-title">Jurgi</div>
                     </div>
                     <div class="added-main__related-item-price"><span>7 000</span> <span>руб.</span></div>
                     <div class="added-main__related-item-addcart">
                        <div class="products__item-addtocart-btn">
                           <span class="i-addtocart"></span>
                           <span class="products__item-addtocart-btn-txt">В корзину</span>
                        </div>
                     </div>
                  </div>
                  <div class="added-main__related-item">
                     <div class="added-main__related-item-img">
                        <img src="@/assets/img/products/related-product.png" alt="Клей для паркета Jurgi">
                     </div>
                     <div class="added-main__related-item-name">
                        <div class="added-main__related-item-name-lbl">Клей для паркета</div>
                        <div class="added-main__related-item-name-title">Jurgi</div>
                     </div>
                     <div class="added-main__related-item-price"><span>7 000</span> <span>руб.</span></div>
                     <div class="added-main__related-item-addcart">
                        <div class="products__item-addtocart-btn">
                           <span class="i-addtocart"></span>
                           <span class="products__item-addtocart-btn-txt">В корзину</span>
                        </div>
                     </div>
                  </div>
                  <div class="added-main__related-item">
                     <div class="added-main__related-item-img">
                        <img src="@/assets/img/products/related-product.png" alt="Клей для паркета Jurgi">
                     </div>
                     <div class="added-main__related-item-name">
                        <div class="added-main__related-item-name-lbl">Клей для паркета</div>
                        <div class="added-main__related-item-name-title">Jurgi</div>
                     </div>
                     <div class="added-main__related-item-price"><span>7 000</span> <span>руб.</span></div>
                     <div class="added-main__related-item-addcart">
                        <div class="products__item-addtocart-btn">
                           <span class="i-addtocart"></span>
                           <span class="products__item-addtocart-btn-txt">В корзину</span>
                        </div>
                     </div>
                  </div>
                  <div class="added-main__related-item">
                     <div class="added-main__related-item-img">
                        <img src="@/assets/img/products/related-product.png" alt="Клей для паркета Jurgi">
                     </div>
                     <div class="added-main__related-item-name">
                        <div class="added-main__related-item-name-lbl">Клей для паркета</div>
                        <div class="added-main__related-item-name-title">Jurgi</div>
                     </div>
                     <div class="added-main__related-item-price"><span>7 000</span> <span>руб.</span></div>
                     <div class="added-main__related-item-addcart">
                        <div class="products__item-addtocart-btn">
                           <span class="i-addtocart"></span>
                           <span class="products__item-addtocart-btn-txt">В корзину</span>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
      <div class="added__layer"></div>
   </AppPopup>
</template>
<script setup>
const props = defineProps({
   isOpen: Boolean
})
const emit = defineEmits(["closePopup"])
const onClose = () => {
   emit('closePopup')
}
</script>