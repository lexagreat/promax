<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__first">
          <div class="footer__first-phones">
            <NuxtLink to="tel:78124099320">409 93 20</NuxtLink>
            <NuxtLink to="tel:78129244504">924 45 04</NuxtLink>
          </div>
          <div class="footer__first-socials">
            <div class="footer__first-socials-list">
              <NuxtLink to="https://www.youtube.com/user/parketpromax"><span class="i-soc-youtube"></span></NuxtLink>
              <NuxtLink to="https://t.me/parket_promaks"><span class="i-soc-tg"></span></NuxtLink>
              <NuxtLink to="https://vk.com/parket_promaks"><span class="i-soc-vk"></span></NuxtLink>
              <NuxtLink to="https://instagram.com/parket_promaks?igshid=YmMyMTA2M2Y="><span class="i-soc-inst"></span></NuxtLink>
            </div>
            <div class="footer__first-socials-info">
              * Запрещенная в России экстремистская организация
            </div>
          </div>
        </div>
        <div class="footer__second">
          <div class="footer-nav">
            <ul>
              <li>
                <NuxtLink to="/services">Услуги</NuxtLink>
                <ul>
                  <li
                    v-for="service of services.slice(0, 4)"
                    :key="service.id"
                  >
                    <NuxtLink :to="`/services/${service.slug}`">{{ service.title }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__third">
          <div class="footer-nav">
            <ul>
              <li>
                <NuxtLink to="/catalog">Каталог</NuxtLink>
                <ul>
                  <li
                    v-for="category of categories.slice(0, 4)"
                    :key="category.id"
                  >
                    <NuxtLink :to="`/catalog?id=${category.id}`">{{ category.title }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__fourth">
          <div class="footer-nav">
            <ul>
              <li>
                <NuxtLink to="/contacts">Контакты</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog">Блог</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Политика конфиденциальности</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">Карта сайта</NuxtLink>
              </li>
            </ul>
          </div>

          <div class="footer__copy">
            <div class="footer__copy-first">Copyright © 2010-2024</div>
            <div class="footer__copy-second">
              <span class="i-banks"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
const services = await useBaseFetch('/blog/services')
const categories = await useBaseFetch('/catalog/categories-list')
</script>
