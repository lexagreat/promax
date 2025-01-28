<template>
  <section class="prodtabs">
    <div class="container">
      <div class="prodtabs__inner">
        <div class="prodtabs__control">
          <div class="prodtabs-tabs">
            <div
              class="prodtabs-tabs__item"
              @click="setTab('trend/')"
              :class="{ _active: url == 'trend/' }"
            >
              Тренд 2024
            </div>
            <div
              class="prodtabs-tabs__item"
              @click="setTab('hit/')"
              :class="{ _active: url == 'hit/' }"
            >
              Хит продаж
            </div>
            <div
              class="prodtabs-tabs__item"
              @click="setTab('best/')"
              :class="{ _active: url == 'best/' }"
            >
              Лучшее предложение
            </div>
          </div>
          <NuxtLink
            to="/catalog"
            class="prodtabs__btn _btn"
            >Перейти в Каталог</NuxtLink
          >
        </div>
        <div class="prodtabs__main products products_ld_4">
          <CardsProduct
            v-for="(item, index) in products"
            :product="item"
            :key="index"
            :id="'homepageitem' + index"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const products = ref([])
let base = '/catalog/'
const url = ref('hit/')
async function setTab(slug) {
  if (slug == url.value) return
  url.value = slug

  let res = await useBaseFetch(`${base}${url.value}`)
  products.value = res.products
}
await setTab('trend/')
</script>
