<template>
  <header class="header">
    <div class="header-bar">
      <div class="container">
        <div class="header-bar__inner">
          <NuxtLink
            to="/dealer"
            class="header-bar__item"
          >
            <div class="i-circle-orange"></div>
            <div class="color-orange">Дилерам</div>
          </NuxtLink>
          <div class="header-bar__item phone-orange">
            <div class="i-phone-orange"></div>
            <div>
              <NuxtLink to="tel:78124099320">409 93 20</NuxtLink> |
              <NuxtLink to="tel:78129244504">924 45 04 </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <div class="header-main__inner">
          <div class="header-main-first">
            <NuxtLink
              to="/"
              class="header__logo"
            >
              <img
                src="@/assets/img/header-logo.svg"
                alt="Промакс - напольные покрытия"
              />
            </NuxtLink>

            <div class="header-main__el">
              <NuxtLink
                to="/catalog"
                class="header__catalog-btn _btn"
              >
                <span class="i-catalog"></span>
                <span>Каталог</span>
              </NuxtLink>
              <form class="header-search-form">
                <input
                  type="text"
                  class="header-search-input"
                  name="search"
                  value=""
                />
                <button type="submit"><span class="i-search-orange"></span></button>
              </form>
            </div>

            <div class="header-btns">
              <NuxtLink
                to="/account"
                class="header-btns__item"
              >
                <span class="i-clock"></span>
                <span class="header-btns__lbl">Статус заказа</span>
              </NuxtLink>
              <NuxtLink
                v-if="accountStore.isLogin"
                to="/account"
                class="header-btns__item"
              >
                <span class="i-log-in__logged"
                  ><img
                    :src="
                      accountStore.infoAboutMe?.avatar === null
                        ? startImg
                        : accountStore.infoAboutMe?.avatar
                    "
                    :alt="accountStore.infoAboutMe?.name"
                /></span>
                <span class="header-btns__lbl"
                  ><b class="header__profile-title">{{ accountStore.infoAboutMe?.name }}</b></span
                >
              </NuxtLink>
              <NuxtLink
                v-if="!accountStore.isLogin"
                @click="openLogin = true"
                class="header-btns__item"
              >
                <span class="i-log-in"></span>
                <span class="header-btns__lbl">Войти</span>
              </NuxtLink>

              <NuxtLink
                to="/cart"
                class="header-btns__item"
              >
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
                    <li
                      v-for="item in services"
                      :key="item"
                    >
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
    <PopupsRegistration
      v-if="openReg"
      :isOpen="openReg"
      @closePopup="openReg = false"
      @openLoginModal="openLogin = true"
      @success="onSuccessLogin"
    />
    <PopupsLogin
      v-if="openLogin"
      :isOpen="openLogin"
      @closePopup="openLogin = false"
      @openRegModal="openReg = true"
      @openResetPassword="openResetPassword = true"
      @success="onSuccessLogin"
    />
    <PopupsResetPassword
      v-if="openResetPassword"
      :isOpen="openResetPassword"
      @closePopup="openResetPassword = false"
    />
    <PopupsResetPasswordConfirm
      v-if="openResetPasswordConfirm"
      :isOpen="openResetPasswordConfirm"
      @success="onSuccessResetPassword"
      @closePopup="openResetPasswordConfirm = false"
      @openLoginModal="openLogin = true"
    />
  </header>
</template>
<script setup>
import { watch } from 'vue'
import { useAccountStore } from '~/store/accountStore'
import startImg from '@/assets/img/default-log-in.svg'

let accountStore = useAccountStore()

const router = useRouter()
const route = useRoute()

const openLogin = ref(false)
const openReg = ref(false)
const openResetPassword = ref(false)
const openResetPasswordConfirm = ref(false)
const openSuccess = ref(false)

let services = await useBaseFetch('/blog/services/')

const onSuccessLogin = () => {
  router.push('/account')
}

const onSuccessResetPassword = () => {
  router.push('/login')
}

const confirmResetPassword = async () => {
  let { id, key } = route.query

  if (id && key) {
    key = key.slice(0, -1)

    openResetPasswordConfirm.value = true
  }
}

onBeforeMount(() => {
  accountStore.initStore()
})

onMounted(async () => {
  const resetPassword = await confirmResetPassword()
  if (accountStore.isLogin) {
    await accountStore.getInfoAboutMe()
  }
})
</script>
<style lang="scss" scoped>
.header-bar {
  background-color: #373435;
}

.header-bar__inner {
  display: flex;
  justify-content: flex-end;
  color: #fff;
  gap: 67px;
  padding-top: 8px;
  padding-bottom: 7px;
  font-size: 20px;
  line-height: 28.9px;
}

.header-bar__item {
  display: flex;
  align-items: center;
  font-weight: 400;
}

.header-bar__item.phone-orange {
  font-weight: 500;
}

.header-main {
  animation: fadeIn 0.7s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.i-log-in__logged {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.header-btns {
  display: flex;
  font-size: 20px;
}

.header__profile-title {
    max-width: 100px;
    word-break: break-all;
    display: flex;
  }

header.header {
  position: relative;
  z-index: 999;
}

.header-nav li.has-children > a::after {
  content: '';
  width: 10px;
  height: 10px;
  background-image: url(@/assets/img/nav-arrow-close.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: -2px;
  margin-left: 12px;
  transition: all 0.2s ease;
}

.header-nav li.has-children._hover > a::after,
li.has-children._active > a::after {
  background-image: url(@/assets/img/nav-arrow-open.svg);
}

.header-main-first {
  display: flex;
  align-items: center;
  padding-top: 29px;
  padding-bottom: 21px;
}

.header__logo {
  display: flex;
  margin-right: 19px;

  & img {
    width: 100%;
  }
}

.header__catalog-btn {
  padding-left: 37px;
  padding-right: 35px;
  font-weight: 500;
  font-size: 23px;
  line-height: 1;
  margin-right: 18px;
}

.header-search-form {
  display: flex;
  border: 1px solid #d5d5d5;
  padding: 5px;
  border-radius: 100px;
  margin-right: 24px;
  flex: auto;

  button {
    border-radius: 50%;
  }

  input {
    font-size: 20px;
    padding-left: 25px;
    padding-right: 20px;
    border-radius: 100px;
    flex: auto;
  }
}

.header-main__el {
  display: flex;
  flex: auto;
}

.header-btns__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.header-btns__item:first-child {
  margin-right: 39px;
}

.header-btns__item:nth-child(2) {
  margin-right: 38px;
}

.header-btns__item:nth-child(3) {
  margin-right: 23px;
}

.header-nav ul {
  list-style: none;
  font-size: 20px;

  color: #989898;
  border-bottom: 1px solid #d5d5d5;
}

.header-nav > ul {
  display: flex;
}

.header-nav > ul > li > a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 45px;
  padding-bottom: 11px;
}

.header-nav > ul > li._active > a,
.header-nav > ul > li._hover > a,
.header-nav > ul > li > .router-link-active {
  color: #373435;
  border-bottom: 3px solid #f8c71a;
  margin-bottom: -1px;
  transform: scale(1.05);
  opacity: 1;
}

.header-nav li.has-children {
  position: relative;
}

.header-nav li.has-children > ul {
  display: none;
  padding: 19px;
  padding-bottom: 20px;
  position: absolute;
  z-index: 99;
  box-shadow: 0 15px 18px #00000026;
  background-color: #fff;
  left: 0;
  right: 0;
  min-width: 190px;
  bottom: -2px;
  transform: translateY(100%);
  font-size: 16px;
  line-height: 35px;
}

.header-nav li.has-children > ul li {
  display: flex;
}

.header-nav li.has-children > ul a:hover {
  color: #373435;
  font-weight: 700;
  opacity: 1;
}

.header-nav > ul > li > a,
.header-nav > ul > li > a {
  border-bottom: 3px solid transparent;
  margin-bottom: -1px;
}

a.header-btns__item > span:first-child {
  margin-top: auto;
  margin-bottom: auto;
}

@media (max-width: 1470px) {
  .header-btns {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid #d5d5d5;
    padding: 14px 0;
    justify-content: center;
    z-index: 999;
  }

  .header-bar__inner {
    justify-content: center;
  }

  .header-nav > ul > li > a {
    padding: 0px 35px;
  }

  a.header__logo {
    width: 150px;
  }

  .header__catalog-btn {
    padding-left: 30px;
    padding-right: 30px;
    font-size: 21px;
    margin-right: 15px;
  }
}

@media (max-width: 768px) {
  .header-bar {
    display: none;
  }

  .header-main-first {
    padding: 0 0 28px;
    flex-direction: column;
    gap: 18px;
  }

  a.header__logo {
    width: 94px;
  }

  .header__logo {
    margin-right: auto;
  }

  .header-search-form {
    margin-right: 0;
  }

  a.header__catalog-btn._btn span:nth-child(2) {
    display: none;
  }

  a.header__catalog-btn._btn {
    width: 38px;
    padding: 0;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
  }

  span.i-catalog {
    margin-right: 0;
  }

  .header-main__el {
    width: 100%;
    align-items: center;
  }

  .i-search-orange {
    width: 32px;
    height: 32px;
  }

  nav.header-nav {
    position: fixed;
    background-color: #fff;
    top: 0;
    right: 0;
    padding: 23px 45px 26px 20px;
    z-index: 999;
    border-radius: 0 0 0 20px;
  }

  .header-nav_mob_layer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #0000004d;
    z-index: 99;
  }

  .header-nav > ul {
    flex-direction: column;
    gap: 14px;
    border-bottom: none;
  }

  .header-nav > ul > li > a {
    padding: 0;
    justify-content: flex-start;
  }

  .header-nav > ul > li._active > a,
  .header-nav > ul > li._hover > a {
    border-bottom: none;
    margin-bottom: 0;
  }

  span.header-nav_arrow {
    content: '';
    // width: 8px;
    // height: 12px;
    width: 35px;
    height: 14px;
    background-image: url(@/assets/img/nav-arrow-mob.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: all 0.2s ease;
    position: absolute;
    // top: 8px;
    // right: -20px;
    top: 6px;
    right: -36px;
  }

  span.header-nav_arrow._active {
    transform: rotate(90deg);
  }

  .header-nav li.has-children > a::after {
    display: none;
  }

  .header-nav li.has-children > ul {
    position: relative;
    top: 0;
    transform: none;
    box-shadow: none;
    border-bottom: none;
    padding-bottom: 0;
    padding-top: 5px;
    padding-right: 0;
  }

  .header-nav > ul > li > a:hover {
    opacity: 1;
    color: #373435;
  }

  .header-nav_mob_btn {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 33px;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    background-color: #fff;
    padding: 22px 10px 18px;
  }

  a.header__logo {
    position: fixed;
    top: 22px;
    left: 12px;
    z-index: 999;
  }

  .header-nav_mob_btn span {
    width: 33px;
    height: 3px;
    background-color: #989898;
    margin-left: auto;
    border-radius: 10px;
  }

  nav.header-nav,
  .header-nav_mob_layer {
    transform: translateX(100%);
    transition: all 0.2s ease;
  }

  nav.header-nav._active,
  .header-nav_mob_layer._active {
    transform: translateX(0);
  }

  .header-search-form {
    padding: 2px;
  }

  .header-search-form input {
    font-size: 12px;
    padding-left: 18px;
    padding-right: 10px;
  }

  .i-catalog {
    width: 19px;
    height: 19px;
  }

  .header-main {
    padding-top: 4px;
  }

  .header-nav_mob_btn {
    transition: all 1s ease;
  }

  .header-nav_mob_btn._scroll {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1019607843);
  }

  .header-btns {
    font-size: 14px;
    gap: 43px;
  }

  .header-btns__item:first-child,
  .header-btns__item:nth-child(2),
  .header-btns__item:nth-child(3) {
    margin-right: 0;
  }

  .header-nav ul {
    font-size: 18px;
    color: #373435;
  }
}
</style>
