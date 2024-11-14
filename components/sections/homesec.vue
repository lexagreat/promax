<template>
  <section class="homesec">
    <div class="container">
      <div class="homesec__inner">
        <div class="homesec__top">
          <div class="homesec__top-left">
            <div class="homesec__top-left-first">
              <h2 class="homesec-title">{{ data.title }}</h2>
              <p class="homesec-desc">{{ data.subtitle }}</p>
            </div>
            <div class="homesec__top-left-sec">
              <ul>
                <li
                  v-for="item in data.items"
                  :key="item"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="homesec__top-right">
            <div class="homesec__slider">
              <div
                class="homesec__slider-item"
                v-for="item in data.images"
                :key="item"
              >
                <img
                  loading="lazy"
                  :src="item"
                  alt="worker-laying"
                />
              </div>
            </div>
            <div class="homesec__slider-dots"></div>
          </div>
        </div>
        <div class="homesec__bottom">
          <div class="foundserv">
            <div class="foundserv-icon">
              <span class="i-q-search"></span>
            </div>
            <div class="foundserv__inner">
              <div class="foundserv-desc">
                <strong>Не нашли интересующую Вас услугу?</strong><br />
                Просмотрите полный список цен на работы
              </div>
              <div class="foundserv-btn">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="runline__wrapper">
      <div class="runline">
        <div class="runline__item">Все полы сбудутся!</div>
        <div class="runline__item">Все полы сбудутся!</div>
        <div class="runline__item">Все полы сбудутся!</div>
        <div class="runline__item">Все полы сбудутся!</div>
        <div class="runline__item">Все полы сбудутся!</div>
      </div>
    </div>
  </section>
</template>
<script setup>
let slider

onMounted(() => {
  $(document).ready(function () {
    slider = $('.homesec__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    })
  })
})
onBeforeRouteLeave(() => {
  $(document).ready(function () {
    slider.slick('unslick')
  })
})

let data = await useBaseFetch('/blog/floor_works')
data = data[0]
</script>

<style lang="scss" scoped>
.homesec__slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
