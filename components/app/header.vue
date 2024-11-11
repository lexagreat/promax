<template>
   <header class="header">
      <div class="header-bar">
         <div class="container">
            <div class="header-bar__inner">
               <NuxtLink to="/dealer" class="header-bar__item">
                  <div class="i-circle-orange"></div>
                  <div class="color-orange">Дилерам</div>
               </NuxtLink>
               <div class="header-bar__item phone-orange">
                  <div class="i-phone-orange"></div>
                  <div>
                     <NuxtLink to="tel:78124099320">409 93 20</NuxtLink> | <NuxtLink to="tel:78129244504">924 45 04
                     </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="header-main">
         <div class="container">
            <div class="header-main__inner">
               <div class="header-main-first">
                  <NuxtLink to="/" class="header__logo">
                     <img src="@/assets/img/header-logo.svg" alt="Промакс - напольные покрытия">
                  </NuxtLink>

                  <div class="header-main__el">
                     <NuxtLink to="/catalog" class="header__catalog-btn _btn">
                        <span class="i-catalog"></span>
                        <span>Каталог</span>
                     </NuxtLink>
                     <form class="header-search-form">
                        <input type="text" class="header-search-input" name="search" value="">
                        <button type="submit"><span class="i-search-orange"></span></button>
                     </form>
                  </div>

                  <div class="header-btns">
                     <NuxtLink to="#" class="header-btns__item">
                        <span class="i-clock"></span>
                        <span class="header-btns__lbl">Статус заказа</span>
                     </NuxtLink>

                     <NuxtLink to="/account" class="header-btns__item" v-if="store.isLogin">
                        <span class="i-log-in__logged"><img src="@/assets/img/default-log-in.svg" alt="Иван"></span>
                        <span class="header-btns__lbl"><b>Иван</b></span>
                     </NuxtLink>
                     <button @click="openLogin = true" class="header-btns__item" v-else>
                        <span class="i-log-in"></span>
                        <span class="header-btns__lbl">Войти</span>
                     </button>

                     <NuxtLink to="/cart" class="header-btns__item">
                        <span class="i-cart"></span>
                        <span class="header-btns__lbl">Корзина</span>
                     </NuxtLink>
                  </div>
               </div>
               <div class="header-main-second">
                  <nav class="header-nav">
                     <ul>
                        <li>
                           <NuxtLink to="/">Главная</NuxtLink>
                        </li>
                        <li class="has-children">
                           <NuxtLink to="/services">Все услуги</NuxtLink>
                           <ul>
                              <li v-for="item in services" :key="item">
                                 <NuxtLink :to="'/services/' + item.slug">{{ item.title }}</NuxtLink>
                              </li>
                              <!-- <li>
                                 <NuxtLink to="/services/1">Циклевка</NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="/services/1">Ремонт</NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="/services/1">Реставрация</NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="/services/1">Шлифовка</NuxtLink>
                              </li>
                              <li>
                                 <NuxtLink to="/services/1">Установка плинтуса</NuxtLink>
                              </li> -->
                           </ul>
                        </li>
                        <li>
                           <NuxtLink to="/blog">Блог</NuxtLink>
                        </li>
                        <li>
                           <NuxtLink to="/cases">Кейсы</NuxtLink>
                        </li>
                        <li>
                           <NuxtLink to="/contacts">Контакты</NuxtLink>
                        </li>
                     </ul>
                  </nav>
                  <div class="header-nav_mob_layer"></div>
                  <div class="header-nav_mob_btn">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <PopupsRegistration :isOpen="openReg" @closePopup="openReg = false" @success="onSuccessLogin" />
      <PopupsLogin :isOpen="openLogin" @closePopup="openLogin = false" @openRegModal="openReg = true"
         @success="onSuccessLogin" />
   </header>
</template>
<script setup>
import { useAccountStore } from '~/store/accountStore';
let store = useAccountStore()
const router = useRouter()
const openLogin = ref(false)
const openReg = ref(false)
let services = await useBaseFetch("/blog/services")
const onSuccessLogin = () => {
   router.push("/account")
}

onBeforeMount(() => {
   store.initStore()
})
</script>