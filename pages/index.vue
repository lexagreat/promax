<template>
  <main class="main home">
    <SectionsTry />
    <SectionsHomesec />

    <div class="bosstext">
      <div class="container">
        <div class="bosstext__inner">
          <div class="bosstext-prof">
            <div class="bosstext-prof__inner">
              <div class="bosstext-prof-first">
                <img
                  loading="lazy"
                  src="@/assets/img/bosstext/Maksim-Alexanderovich.png"
                  alt="Maksim-Alexanderovich"
                />
              </div>
              <div class="bosstext-prof-sec">
                <div class="bosstext-prof__desc">
                  <div class="bosstext-prof__name">
                    Максим<br />
                    Александрович
                  </div>
                  <div class="bosstext-prof__pos">
                    Генеральный директор<br />
                    ООО «Паркет Промакс»
                  </div>
                </div>
                <div
                  @click="openQuestion = true"
                  class="bosstext-prof__btn _btn"
                >
                  Задать вопрос
                </div>
              </div>
            </div>
          </div>
          <div class="bosstext__desc">
            <h2>Паркетные работы в Спб по доступным ценам</h2>
            <p>
              Наша компания специализируется на напольных покрытиях, предлагая натуральный и
              надежный паркет, который служит десятилетиями с минимальным ремонтом.
            </p>
            <p>
              Только деревянный пол способен создать тепло и уют в вашем доме. Паркет остается самым
              востребованным материалом, придавая помещению благородство и элегантность.
            </p>
            <p>
              Если вы цените преимущества паркета, мы с удовольствием установим его для вас. Даже
              самый простой паркет из обычных пород дерева превосходит другие виды покрытий
              благодаря своей долговечности, экологической чистоте и легкости монтажа.
            </p>
            <p>
              При правильном уходе паркет может прослужить более 100 лет с минимальным ремонтом.
              Регулярная циклевка пола (ремонт паркета) раз в 7 лет поможет сохранить его в отличном
              состоянии.
            </p>
          </div>
        </div>
      </div>
    </div>

    <SectionsProdtabs />

    <SectionsServices />
    <SectionsAdvant />
    <div class="howwork">
      <div class="container">
        <div class="howwork__inner">
          <h2 class="howwork__title">Как мы работаем</h2>
          <div class="howwork__list--main">
            <!-- <div class="howwork__item">
   <div class="howwork__item-poster">
      <img loading="lazy" src="@/assets/img/howwork/howwork-1.webp" alt="howwork">
   </div>
   <div class="howwork__item-video-popup">
      <div class="howwork__item-video-close"></div>
      <div class="howwork__item-video-inner">
         place for video frame
      </div>
   </div>
   <h3 class="howwork__item-title">Грунтовка | Нанесение<br> двухкомпонентной<br>
      грунтовки
      на
      растворителе</h3>
</div> -->
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

    <TgExperts />
    <PopupsQuestion
      :isOpen="openQuestion"
      @closePopup="openQuestion = false"
      @success="openSuccessPopup = true"
    />
    <PopupsSuccess
      :isOpen="openSuccessPopup"
      @closePopup="openSuccessPopup = false"
    />
  </main>
</template>
<script setup>
import { useAccountStore } from '~/store/accountStore'

const accountStore = useAccountStore()

let cases = await useBaseFetch('/blog/cases/')
let youtube = ref(cases[0].youtube)

const openQuestion = ref(false)
const openSuccessPopup = ref(false)

onMounted(async () => {
  if (accountStore.isLogin) {
    await accountStore.getInfoAboutMe()
  }
})
</script>
