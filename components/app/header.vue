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
                to="#"
                class="header-btns__item"
              >
                <span class="i-clock"></span>
                <span class="header-btns__lbl">Статус заказа</span>
              </NuxtLink>

              <NuxtLink
                to="/account"
                class="header-btns__item"
                v-if="store.isLogin"
              >
                <span class="i-log-in__logged"
                  ><img
                    :src="infoAboutMe?.avatar"
                    :alt="infoAboutMe?.name"
                /></span>
                <span class="header-btns__lbl"
                  ><b>{{ infoAboutMe?.name }}</b></span
                >
              </NuxtLink>
              <button
                @click="openLogin = true"
                class="header-btns__item"
                v-else
              >
                <span class="i-log-in"></span>
                <span class="header-btns__lbl">Войти</span>
              </button>

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

let store = useAccountStore()

const router = useRouter()
const route = useRoute()

const openLogin = ref(false)
const openReg = ref(false)
const openResetPassword = ref(false)
const openResetPasswordConfirm = ref(false)

console.log('params', route.query);

const infoAboutMe = ref(null)

if (store.isLogin) {
  infoAboutMe.value = await store.getInfoAboutMe()
}

let services = await useBaseFetch('/blog/services')

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
    console.log(id, key);

    openResetPasswordConfirm.value = true
    console.log('openResetPasswordConfirm.value', openResetPasswordConfirm.value);

    // const res = await useBaseFetch(`/cabinet/password-reset-confirm/{${id}}/{${key}}/`, {
    //   method: "POST"
    // })

    // console.log('res', res);
  }
}

onBeforeMount(() => {
  store.initStore()
})

onMounted(async () => {
  const resetPassword = await confirmResetPassword()

})

watch(
  () => store.isLogin,
  async () => {
    if (store.isLogin) {
      infoAboutMe.value = await store.getInfoAboutMe()
    }
  }
)
</script>
<style lang="scss" scoped>
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
</style>
