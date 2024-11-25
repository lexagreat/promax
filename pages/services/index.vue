<template>
  <main class="main">
    <div class="ourservb">
      <div class="container">
        <div class="ourservb__inner">
          <h1 class="ourservb__title">Наши услуги</h1>
          <div class="ourservb__list">
            <NuxtLink
              v-for="item in services"
              :key="item.id"
              :to="'/services/' + item.slug"
              class="ourservb__item"
            >
              <div class="ourservb__item-icon">
                <img
                  :src="item.icon"
                  :alt="item.title"
                />
              </div>
              <div class="ourservb__item-desc">
                <h2 class="ourservb__item-title">{{ item.title }}</h2>
                <div class="ourservb__item-text">{{ item.subtitle }}</div>
              </div>
            </NuxtLink>

            <!-- <NuxtLink
              to="/services/1"
              class="ourservb__item"
            >
              <div class="ourservb__item-icon">
                <img
                  src="@/assets/img/ourservb/ourservb_2.svg"
                  alt="Услуги и цены на шлифовку паркета в Санкт-Петербурге"
                />
              </div>
              <div class="ourservb__item-desc">
                <h2 class="ourservb__item-title">
                  Цены и услуги на укладку<br />
                  паркета в Санкт-Петербурге
                </h2>
                <div class="ourservb__item-text">
                  Укладка паркета от мастеров-паркетчиков с опытом<br />
                  работы и знаниями тонкостей процесса.
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/services/1"
              class="ourservb__item"
            >
              <div class="ourservb__item-icon">
                <img
                  src="@/assets/img/ourservb/ourservb_3.svg"
                  alt="Услуги и цены на шлифовку паркета в Санкт-Петербурге"
                />
              </div>
              <div class="ourservb__item-desc">
                <h2 class="ourservb__item-title">
                  Циклевка паркета от 160 руб.<br />
                  без пыли и грязи!
                </h2>
                <div class="ourservb__item-text">
                  Проведем качественно циклевку паркета и вернем<br />
                  ему былую привлекательность!
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/services/1"
              class="ourservb__item"
            >
              <div class="ourservb__item-icon">
                <img
                  src="@/assets/img/ourservb/ourservb_4.svg"
                  alt="Услуги и цены на шлифовку паркета в Санкт-Петербурге"
                />
              </div>
              <div class="ourservb__item-desc">
                <h2 class="ourservb__item-title">Ремонт паркета в СПб</h2>
                <div class="ourservb__item-text">
                  Ремонт паркетного покрытия любой сложности<br />
                  с соблюдением оговоренных сроков.
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/services/1"
              class="ourservb__item"
            >
              <div class="ourservb__item-icon">
                <img
                  src="@/assets/img/ourservb/ourservb_5.svg"
                  alt="Услуги и цены на шлифовку паркета в Санкт-Петербурге"
                />
              </div>
              <div class="ourservb__item-desc">
                <h2 class="ourservb__item-title">
                  Реставрация паркета<br />
                  в Санкт-Петербурге
                </h2>
                <div class="ourservb__item-text">
                  Ремонт и замена плашек, устранение щелей,<br />
                  скрипа и других дефектов паркетного покрытия.
                </div>
              </div>
            </NuxtLink>
            <NuxtLink
              to="/services/1"
              class="ourservb__item"
            >
              <div class="ourservb__item-icon">
                <img
                  src="@/assets/img/ourservb/ourservb_6.svg"
                  alt="Услуги и цены на шлифовку паркета в Санкт-Петербурге"
                />
              </div>
              <div class="ourservb__item-desc">
                <h2 class="ourservb__item-title">Установка плинтуса</h2>
                <div class="ourservb__item-text">
                  Установке плинуса по доступной<br />
                  цене в удобное для Вас время.
                </div>
              </div>
            </NuxtLink> -->
          </div>
          <NuxtLink
            to="/prices"
            class="ourserv__bottom-btn _btn"
          >
            <span>Посмотреть полный прайс</span>
            <span class="i-ourserv-view-cases"></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
let services = await useBaseFetch('/blog/services/')
</script>
