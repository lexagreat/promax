<template>
  <main class="main">
    <div class="contacts">
      <div class="contacts__inner">
        <h1 class="contacts__title">КОНТАКТЫ</h1>
        <div class="contacts-info">
          <div class="contacts-info__body">
            <div class="contacts-info__left">
              <div class="contacts-info__logo">
                <img
                  src="@/assets/img/logo.svg"
                  alt="Логотип"
                />
              </div>
              <div class="contacts-info__left-text">
                <p class="contacts-info__left-title">ООО «Паркет Промакс»</p>
                <p class="contacts-info__left-subtitle">ИНН 7805568529, КПП 780501001</p>
              </div>
            </div>
            <div class="contacts-info__right">
              <div class="contacts-info__contacts">
                <div class="contacts-info__header">
                  <p class="contacts-info__header-item">Адрес</p>
                  <p class="contacts-info__header-item">Электронная почта</p>
                  <p class="contacts-info__header-item">Телефон</p>
                </div>
                <div class="divider"></div>
                <div class="contacts-info__content">
                  <div class="contacts-info__contacts-item">
                    <p class="contacts-info__contacts-text">Санкт-Петербург, 198095</p>
                    <p class="contacts-info__contacts-text">ул. Балтийская д. 56</p>
                  </div>
                  <div class="contacts-info__contacts-item">
                    <p class="contacts-info__contacts-text">info@parket-promax.ru</p>
                  </div>
                  <div class="contacts-info__contacts-item">
                    <p class="contacts-info__contacts-text">+7 (812) 409-93-20</p>
                    <p class="contacts-info__contacts-text">+7 (812) 924-45-04</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="contacts-info__right--mobile">
              <div class="contacts-info__row">
                <p class="contacts-info__row-title">
                  Адрес
                </p>
                <div class="contacts-info__row-content">
                  <p class="contacts-info__row-subtitle">Санкт-Петербург, 198095</p>
                  <p class="contacts-info__row-subtitle">ул. Балтийская д. 56</p>
                </div>
              </div>
              <div class="contacts-info__row">
                <p class="contacts-info__row-title">
                  Электронная почта
                </p>
                <div class="contacts-info__row-content">
                  <p class="contacts-info__row-subtitle">
                    info@parket-promax.ru
                  </p>
                </div>
              </div>
              <div class="contacts-info__row">
                <p class="contacts-info__row-title">
                  Телефон
                </p>
                <div class="contacts-info__row-content">
                  <p class="contacts-info__row-subtitle">+7 (812) 409-93-20</p>
                  <p class="contacts-info__row-subtitle">+7 (812) 924-45-04</p>
                </div>
              </div>
            </div>
          </div>
          <div class="contacts-btn-wrapper">
            <button
              @click="openWriteUsPopup = true"
              class="contacts-btn _btn"
            >
              НАПИСАТЬ НАМ
            </button>
          </div>
        </div>
        <div class="contacts-map">
          <div class="container">
            <YandexMap
              v-model="map"
              :settings="{
                location: {
                  center: [30.291838, 59.900953],
                  zoom: 18
                }
              }"
              width="100%"
              height="880px"
            >
              <YandexMapDefaultMarker
                :settings="{
                  coordinates: [30.291838, 59.900953]
                }"
              />
              <YandexMapDefaultFeaturesLayer />
              <YandexMapDefaultSchemeLayer />
            </YandexMap>
          </div>
        </div>
      </div>
    </div>
    <PopupsQuestion
      :isOpen="openWriteUsPopup"
      @closePopup="openWriteUsPopup = false"
      @success="openSuccessPopup = true"
    />
    <PopupsSuccess
      :isOpen="openSuccessPopup"
      @closePopup="openSuccessPopup = false"
    />
  </main>
</template>
<script setup>
import { useTemplateRef } from 'vue'
import { useAccountStore } from '~/store/accountStore'
import { useProductsStore } from '~/store/productsStore'
import { vMaska } from 'maska/vue'
import startImg from '@/assets/img/acc-photo-def.svg'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker
} from 'vue-yandex-maps'

const accountStore = useAccountStore()
const productsStore = useProductsStore()

const router = useRouter()

const map = shallowRef(null)

const openWriteUsPopup = ref(false)
const openSuccessPopup = ref(false)

const email = ref('')
const phone = ref('')
const name = ref('')
const avatar = ref(startImg)

const inputImg = useTemplateRef('input-img')
const imgPath = ref(startImg)
const isEditable = ref(false)

const tabs = reactive([
  {
    id: 1,
    name: 'Реферальная программа',
    class: 'tab-referral',
    active: false
  },
  {
    id: 2,
    name: 'Избранное',
    class: 'tab-wishlist',
    active: true
  },
  {
    id: 3,
    name: 'Мои заказы',
    class: 'tab-orders',
    active: false
  }
])

const startInfo = {
  name: '',
  email: '',
  phone: '',
  avatar: ''
}

function chooseImg(event) {
  const files = event.target.files

  if (files.length) {
    avatar.value = files[0]
    imgPath.value = URL.createObjectURL(files[0])
  }
}

function reChooseImg() {
  if (isEditable.value) {
    inputImg.value.click()
  }
}

function toggleEdit() {
  isEditable.value = !isEditable.value
}

function changeTab(id) {
  for (let tab of tabs) {
    if (tab.id === id) {
      tab.active = !tab.active
    } else {
      if (tab.active === true) {
        tab.active = !tab.active
      }
    }
  }
}

async function editProfile() {
  const form = new FormData()

  if (startInfo.name !== name.value) {
    form.append('name', name.value)

    await accountStore.updateProfile(form)

    name.value = accountStore.infoAboutMe.name
    startInfo.name = accountStore.infoAboutMe.name
  }

  if (startInfo.email !== email.value) {
    form.append('email', email.value)

    await accountStore.updateProfile(form)

    email.value = accountStore.infoAboutMe.email
    startInfo.email = accountStore.infoAboutMe.email
  }

  if (startInfo.phone !== phone.value) {
    form.append('phone', phone.value)

    await accountStore.updateProfile(form)

    phone.value = accountStore.infoAboutMe.phone
    startInfo.phone = accountStore.infoAboutMe.phone
  }

  if (startInfo.avatar !== avatar.value) {
    form.append('avatar', avatar.value)

    await accountStore.updateProfile(form)

    avatar.value = accountStore.infoAboutMe.avatar
    startInfo.avatar = accountStore.infoAboutMe.avatar
  }

  toggleEdit()
}
</script>
<style lang="scss" scoped>
p {
  margin: 0 !important;
}
.contacts {
  width: 100%;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  &__title {
    margin-top: 60px;
    font-size: 30px;
    font-weight: 700;
    line-height: 43.35px;
    color: #373435;
  }

  &-info {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;

    &__body {
      display: flex;
      gap: 100px;
      padding: 40px 83px 40px 60px;
      box-shadow: 0px 15px 50px 0px #0000001a;
      border-radius: 10px;
      background-color: #fff;
    }

    .contacts-btn-wrapper {
      padding: 0 10px 10px 10px;
      display: flex;
      background-color: #fff;
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
      box-shadow: 0px 15px 50px 0px #0000001a;
    }

    .contacts-btn {
      max-width: 265px;
      font-family: Jost;
      font-size: 23px;
      font-weight: 700;
      line-height: 33.24px;
    }

    &__left {
      display: flex;
      gap: 25px;
    }

    &__logo {
      width: 70px;
      height: 80px;

      & img,
      svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__left-text {
      display: flex;
      flex-direction: column;
    }

    &__left-title {
      font-size: 30px;
      font-weight: 700;
      line-height: 48px;
      color: #000000;
    }

    &__left-subtitle {
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      color: #000000;
    }

    &__right {
      display: flex;
      flex-direction: column;
    }

    &__right--mobile {
      display: none;
    }

    .divider {
      margin: 10px 0;
      display: block;
      width: 100%;
      height: 1px;
      background-color: #d5d5d5;
    }

    &__header {
      display: flex;
      gap: 62px;
    }

    &__header-item {
      font-size: 20px;
      font-weight: 400;
      line-height: 22px;
      color: #989898;
      flex: 1;
    }

    &__content {
      display: flex;
      gap: 62px;
    }

    &__contacts-item {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    &__contacts-text {
      font-size: 20px;
      font-weight: 600;
      line-height: 24px;
      color: #000000;
    }
  }
  .contacts-map {
    margin-top: -160px;
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;
  }
}

@media (max-width: 1470px) {
  .container {
    max-width: 100%;
  }
  .contacts {
    &-info {
      &__body {
        flex-direction: column;
        align-items: center;
      }
    }
  }
}

@media (max-width: 968px) {
  .contacts {
    &-info {
      &__body {
        gap: 20px;
      }

      &__right {
        display: none;

        &--mobile {
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: 30px;
        }
      }

      &__row {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &__row-title {
        font-size: 20px;
        font-weight: 400;
        line-height: 22px;
        color: #989898;
      }

      &__row-content {
        display: flex;
        flex-direction: column;
      }

      &__row-subtitle {
        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        color: #000000;
      }
    }
  }
}

@media (max-width: 768px) {
  .contacts {
    &-info {
      &__header {
        gap: 10px;
      }

      &__content {
        gap: 10px;
      }

      &__left {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

      &__left-title {
        font-size: 20px;
      }

      &__left-subtitle {
        font-size: 16px;
      }
    }
  }
}
</style>
