<template>

   <main class="main">
      <div class="breadcrumbs">
         <div class="container">
            <div class="breadcrumbs__inner">
               <NuxtLink to="/blog" class="breadcrumbs__item">Все услуги</NuxtLink>
               <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
               <span class="breadcrumbs__item">Цены</span>
            </div>
         </div>
      </div>

      <div class="singleserv__price">
         <div class="container">
            <div class="singleserv__price-inner">
               <h1 class="singleserv__price-label">Услуги и цены на укладку, циклевку, ремонт паркета и установку
                  плинтуса</h1>


               <div class="singleserv__price-foundserv __prices">
                  <div class="foundserv">
                     <div class="foundserv-icon">
                        <span class="i-prices"></span>
                     </div>
                     <div class="foundserv__inner">
                        <div class="foundserv-desc">
                           <strong>Хотите быстро узнать стоимость работ?</strong><br>
                           Отправьте фото паркета и получите ответ за 15 минут.
                        </div>
                        <div class="foundserv-btn">Подробнее</div>
                     </div>
                  </div>
               </div>

               <div class="prices__info">
                  Обратите внимание, что стоимость работ уже посчитана с учетом абразивных материалов.
               </div>

               <div class="singleserv__price-table">
                  <div class="singleserv__price-table-header">
                     <div class="singleserv__price-table-serv">НАИМЕНОВАНИЕ УЛСУГИ</div>
                     <div class="singleserv__price-table-price">РУБ@/М2 </div>
                  </div>
                  <div class="singleserv__price-table-body">

                     <div class="singleserv__price-table-item prices_btn">
                        <div class="singleserv__price-table-serv">Настил паркетной доски и ламината на подложку
                           перпендикулярно к стене</div>
                        <div class="singleserv__price-table-icon-wrp">
                           <div class="singleserv__price-table-price">650</div>
                           <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                 class="i-singleserv-arrow"></span></div>
                        </div>
                     </div>
                     <div class="singleserv__price-table-item prices_btn">
                        <div class="singleserv__price-table-serv">Настил паркетной доски и ламината на подложку под
                           углом к стене</div>
                        <div class="singleserv__price-table-icon-wrp">
                           <div class="singleserv__price-table-price">750</div>
                           <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                 class="i-singleserv-arrow"></span></div>
                        </div>
                     </div>
                     <div class="singleserv__price-table-item prices_btn">
                        <div class="singleserv__price-table-serv">Настил паркетной доски /инженерной доски на клей к
                           основанию</div>
                        <div class="singleserv__price-table-icon-wrp">
                           <div class="singleserv__price-table-price">1150</div>
                           <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                 class="i-singleserv-arrow"></span></div>
                        </div>
                     </div>
                     <div class="singleserv__price-table-item prices_btn">
                        <div class="singleserv__price-table-serv">Настил штучного паркета «елка», «разбежка», «шашка»
                        </div>
                        <div class="singleserv__price-table-icon-wrp">
                           <div class="singleserv__price-table-price">1300</div>
                           <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                 class="i-singleserv-arrow"></span></div>
                        </div>
                     </div>
                     <div class="singleserv__price-table-item prices_btn">
                        <div class="singleserv__price-table-serv">Настил массивной доски на клей</div>
                        <div class="singleserv__price-table-icon-wrp">
                           <div class="singleserv__price-table-price">1300</div>
                           <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                 class="i-singleserv-arrow"></span></div>
                        </div>
                     </div>
                     <div class="singleserv__price-table-item prices_btn">
                        <div class="singleserv__price-table-serv">Настил модульного паркета</div>
                        <div class="singleserv__price-table-icon-wrp">
                           <div class="singleserv__price-table-price">1500</div>
                           <div class="singleserv__price-table-icon" @click="isPopupOpen = true"><span
                                 class="i-singleserv-arrow"></span></div>
                        </div>
                     </div>

                  </div>
               </div>

               <div class="prices-download-wrp">
                  <div class="prices-download-btn _btn">Скачать</div>
                  <div class="prices-download-txt">Прайс в PDF формате</div>
               </div>



            </div>
         </div>
      </div>
      <TgExperts />
   </main>
   <PopupsPrices :isOpen="isPopupOpen" @closePopup="isPopupOpen = false" />
</template>
<script setup>
const isPopupOpen = ref(false)
</script>