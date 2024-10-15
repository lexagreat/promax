<template>
   <main class="main">
      <div class="cartb">
         <div class="container">
            <div class="cartb__inner">
               <h1 class="cartb__title">Корзина</h1>
               <div class="cartb__main">
                  <div class="cartb__list">
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
                           <div class="cartb__item-second-title">Рисунки карандашом «Print»</div>
                           <div class="cartb__item-second-prices">
                              <div class="cartb__item-second-prices-reg">
                                 <span>7 500</span> <span>руб. за м²</span>
                              </div>
                              <div class="cartb__item-second-prices-pack">
                                 <span>20 000</span> <span>руб. за уп.</span>
                              </div>
                           </div>
                        </div>
                        <div class="cartb__item-third">
                           <div class="cartb__item-third-ctrl">
                              <div class="add-prod-ctrl-sum-right">
                                 <div class="add-prod-ctrl-sum-counter">
                                    <span class="counter-minus"></span>
                                    <span class="counter-val">1</span>
                                    <span class="counter-plus"></span>
                                 </div>
                                 <div class="add-prod-ctrl-sum-pcs">уп.</div>
                                 <div class="add-prod-ctrl-sum-square"><span>3</span> <span>м²</span></div>
                              </div>
                              <div class="cartb__item-third-ctrl-delete">
                                 <span class="i-delete-btn"></span>
                              </div>
                           </div>
                           <div class="cartb__item-third-price">
                              <span>20 000</span> <span>₽</span>
                           </div>
                        </div>
                     </div>
                     <div class="cartb__item">
                        <div class="cartb__item-first">
                           <div class="cartb__item-first-mark">
                              <span class="i-grey-mark"></span>
                           </div>
                           <div class="cartb__item-first-img">
                              <img src="@/assets/img/cartb.png" alt="Рисунки карандашом «Print»">
                           </div>
                        </div>
                        <div class="cartb__item-second">
                           <div class="cartb__item-second-cat">Дизайнерский паркет</div>
                           <div class="cartb__item-second-title">Рисунки карандашом «Print»</div>
                           <div class="cartb__item-second-prices">
                              <div class="cartb__item-second-prices-reg">
                                 <span>7 500</span> <span>руб. за м²</span>
                              </div>
                              <div class="cartb__item-second-prices-pack">
                                 <span>20 000</span> <span>руб. за уп.</span>
                              </div>
                           </div>
                        </div>
                        <div class="cartb__item-third">
                           <div class="cartb__item-third-ctrl">
                              <div class="add-prod-ctrl-sum-right">
                                 <div class="add-prod-ctrl-sum-counter">
                                    <span class="counter-minus"></span>
                                    <span class="counter-val">0</span>
                                    <span class="counter-plus"></span>
                                 </div>
                                 <div class="add-prod-ctrl-sum-pcs">уп.</div>
                                 <div class="add-prod-ctrl-sum-square"><span>0</span> <span>м²</span></div>
                              </div>
                              <div class="cartb__item-third-ctrl-delete">
                                 <span class="i-delete-btn"></span>
                              </div>
                           </div>
                           <div class="cartb__item-third-price">
                              <span>20 000</span> <span>₽</span>
                           </div>
                        </div>
                     </div>
                     <div class="cartb__item">
                        <div class="cartb__item-first">
                           <div class="cartb__item-first-mark">
                              <span class="i-grey-mark"></span>
                           </div>
                           <div class="cartb__item-first-img">
                              <img src="@/assets/img/cartb.png" alt="Рисунки карандашом «Print»">
                           </div>
                        </div>
                        <div class="cartb__item-second">
                           <div class="cartb__item-second-cat">Дизайнерский паркет</div>
                           <div class="cartb__item-second-title">Рисунки карандашом «Print»</div>
                           <div class="cartb__item-second-prices">
                              <div class="cartb__item-second-prices-reg">
                                 <span>7 500</span> <span>руб. за м²</span>
                              </div>
                              <div class="cartb__item-second-prices-pack">
                                 <span>20 000</span> <span>руб. за уп.</span>
                              </div>
                           </div>
                        </div>
                        <div class="cartb__item-third">
                           <div class="cartb__item-third-ctrl">
                              <div class="add-prod-ctrl-sum-right">
                                 <div class="add-prod-ctrl-sum-counter">
                                    <span class="counter-minus"></span>
                                    <span class="counter-val">0</span>
                                    <span class="counter-plus"></span>
                                 </div>
                                 <div class="add-prod-ctrl-sum-pcs">уп.</div>
                                 <div class="add-prod-ctrl-sum-square"><span>0</span> <span>м²</span></div>
                              </div>
                              <div class="cartb__item-third-ctrl-delete">
                                 <span class="i-delete-btn"></span>
                              </div>
                           </div>
                           <div class="cartb__item-third-price">
                              <span>20 000</span> <span>₽</span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="cartb__main-info">
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
const isPopupOpen = ref(false)

</script>