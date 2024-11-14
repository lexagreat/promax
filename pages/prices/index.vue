<template>
  <main class="main">
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs__inner">
          <NuxtLink
            to="/blog"
            class="breadcrumbs__item"
            >Все услуги</NuxtLink
          >
          <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
          <span class="breadcrumbs__item">Цены</span>
        </div>
      </div>
    </div>

    <div class="singleserv__price">
      <div class="container">
        <div class="singleserv__price-inner">
          <h1 class="singleserv__price-label">
            Услуги и цены на укладку, циклевку, ремонт паркета и установку плинтуса
          </h1>

          <div class="singleserv__price-foundserv __prices">
            <div class="foundserv">
              <div class="foundserv-icon">
                <span class="i-prices"></span>
              </div>
              <div class="foundserv__inner">
                <div class="foundserv-desc">
                  <strong>Хотите быстро узнать стоимость работ?</strong><br />
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
              <div class="singleserv__price-table-price">РУБ@/М2</div>
            </div>
            <div class="singleserv__price-table-body">
              <div
                class="singleserv__price-table-item prices_btn"
                v-for="item in prices"
                :key="item"
              >
                <div class="singleserv__price-table-serv">{{ item.name }}</div>
                <div class="singleserv__price-table-icon-wrp">
                  <div class="singleserv__price-table-price">{{ item.price }}</div>
                  <div
                    class="singleserv__price-table-icon"
                    @click="openPopup(item.id)"
                  >
                    <span class="i-singleserv-arrow"></span>
                  </div>
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
  <PopupsPrices
    :isOpen="isPopupOpen"
    @closePopup="isPopupOpen = false"
  />
</template>
<script setup>
const isPopupOpen = ref(false)
const currentId = ref(0)
const openPopup = (id) => {
  currentId.value = id
  isPopupOpen.value = true
}
let prices = await useBaseFetch('/blog/services/prices')
</script>
