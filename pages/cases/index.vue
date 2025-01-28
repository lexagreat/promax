<template>
  <main class="main">
    <div class="casesb">
      <!-- <div class="container"> -->
        <div class="casesb__inner">
          <h1 class="casesb__title">Кейсы</h1>
          <div class="casesb__main">
            <div class="casesb__list">
              <!-- youtube -->
              <div
                v-if="youtube?.items?.length"
                class="howwork"
              >
                <div class="container">
                  <div class="howwork__inner">
                    <div class="howwork__list">
                      <div
                        class="howwork__item"
                        v-for="item in youtube.items"
                      >
                        <div class="howwork__item-poster">
                          <!-- <img loading="lazy" src="@/assets/img/howwork/howwork-1.webp" alt="howwork"> -->
                        </div>
                        <div class="howwork__item-video-popup">
                          <div class="howwork__item-video-close"></div>
                          <div
                            class="howwork__item-video-inner"
                            v-html="item.iframe"
                          ></div>
                        </div>
                        <h3 class="howwork__item-title">{{ item.title }}</h3>
                      </div>
                    </div>
                    <NuxtLink
                      :to="youtube.link"
                      class="howwork__btn_youtube"
                    >
                      <span class="i-youtube"></span>
                      <span>{{ youtube.title }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <!-- tg -->
              <div
                v-if="tg?.items?.length"
                class="howwork howwork-tg"
              >
                <div class="container">
                  <div class="howwork__inner">
                    <div class="howwork__list">
                      <div
                        class="howwork__item"
                        v-for="item in tg.items"
                        :key="item.id"
                      >
                        <a class="howwork-link" :href="item?.post_link">
                          <img :src="item?.image_link" alt="">
                        </a>
                      </div>
                    </div>
                    <NuxtLink
                      :to="tg.link"
                      class="howwork__btn_telegram"
                    >
                      <span class="i-telegram"></span>
                      <span>{{ tg.title }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <!-- inst -->
              <div
                v-if="inst?.items?.length"
                class="howwork howwork-inst"
              >
                <div class="container">
                  <div class="howwork__inner">
                    <div class="howwork__list">
                      <div
                        class="howwork__item"
                        v-for="item in inst.items"
                        :key="item.id"
                      >
                        <a class="howwork-link" :href="item?.post_link">
                          <img :src="item?.image_link" alt="">
                        </a>
                      </div>
                    </div>
                    <NuxtLink
                      :to="inst.link"
                      class="howwork__btn_instagram"
                    >
                      <span class="i-instagram"></span>
                      <span>{{ inst.title }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </main>
</template>
<script setup>
let cases = await useBaseFetch('/blog/cases/')
let youtube = ref(cases[0].youtube)
let tg = ref(cases[0].tg)
let inst = ref(cases[0].inst)
</script>
<style lang="scss" scoped>
.howwork-tg, .howwork-inst {
  .howwork-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
}

.howwork-tg {
  .howwork-link {
    width: 234px;
    height: 327px;
  }
}

.howwork-inst {
  .howwork-link {
    width: 218px;
    height: 287px;
  }
}

@media (max-width: 768px) {
  .howwork-tg, .howwork-inst {
    .howwork__list {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .howwork-link {
      width: 100%;
    }

    .howwork__item {
      width: 100%;
    }
  }
}
</style>