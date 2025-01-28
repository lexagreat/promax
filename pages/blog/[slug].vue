<template>
  <main class="main">
    <div class="breadcrumbs">
      <div class="container">
        <div class="breadcrumbs__inner">
          <NuxtLink
            to="/blog"
            class="breadcrumbs__item"
            >Блог</NuxtLink
          >
          <span class="breadcrumbs__sep"><span class="i-breadcrumbs-sep"></span></span>
          <span class="breadcrumbs__item">{{ data.title }}</span>
        </div>
      </div>
    </div>

    <div class="singleart">
      <div class="container">
        <div class="singleart__inner">
          <h1>{{ data.title }}</h1>
          <div
            v-for="item in data.blocks"
            :key="item"
            class="p"
            :class="{ '_with-img': item.image !== null }"
          >
            <div v-if="!item.video.length">
              <h2 v-if="item.title">{{ item.title }}</h2>
              <p v-if="item.text">{{ item.text }}</p>
            </div>
            <img
              v-if="item.image && !item.video.length"
              :src="item.image"
              alt=""
            />
            <div class="video" v-if="item.video.length" v-html="item.video"></div>
          </div>
        </div>
      </div>
    </div>
    <TgExperts />
  </main>
</template>
<script setup>
const route = useRoute()
let slug = route.params.slug
let data = await useBaseFetch(`/blog/${slug}/`)
</script>

<style lang="scss" scoped>
div.p {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &._with-img {
    flex-direction: row;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

  &._with-video {
    width: 100%;
  }

  img {
    width: 551px;
    height: 398px;
    object-fit: cover;
  }
}

@media (max-width: 1470px) {
  div.p {
    img {
      width: 100%;
      height: 100%;
      object-fit: unset;
    }
    &._with-img {
      flex-direction: column;

      &:nth-child(even) {
        flex-direction: column;
      }
    }
  }
}

@media (max-width: 1024px) {
  div.p {
    flex-direction: column !important;
  }
}
</style>
