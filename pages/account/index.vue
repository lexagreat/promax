<template>
  <main class="main">
    <div class="accountb">
      <div class="container">
        <div class="accountb__inner">
          <h1 class="accountb__title">Личный кабинет</h1>
          <div class="accountb-main">
            <div class="accountb-main__first">
              <div class="accountb-main__photo">
                <input
                  @change="chooseImg"
                  ref="input-img"
                  type="file"
                  style="display: none"
                />
                <img
                  @click="reChooseImg"
                  :src="imgPath"
                  :alt="name"
                />
              </div>
              <div class="accountb-main__name">
                {{ accountStore.infoAboutMe.name }}
              </div>
            </div>
            <div class="accountb-main__second">
              <div class="accountb-main__second-header">
                <div class="accountb-main__second-title">Учётные данные</div>
                <div class="accountb-main__second-edit">Изменить профиль</div>
                <button
                  @click.prevent="onLogout"
                  class="accountb-main__second-exit"
                >
                  Выйти
                </button>
              </div>
              <form class="accountb-main__second-body">
                <div class="accountb-main__second-item">
                  <div class="accountb-main__second-item-lbl">ФИО</div>
                  <div
                    class="accountb-main__second-item-val"
                    :class="{ _active: isEditable }"
                  >
                    <input
                      type="text"
                      name="prof-name"
                      id="prof-name"
                      v-model="name"
                      :readonly="!isEditable"
                    />
                  </div>
                </div>
                <div class="accountb-main__second-item">
                  <div class="accountb-main__second-item-lbl">Телефон</div>
                  <div
                    class="accountb-main__second-item-val"
                    :class="{ _active: isEditable }"
                  >
                    <input
                      type="text"
                      name="prof-phone"
                      id="prof-phone"
                      v-model="phone"
                      v-maska="'+7 (###) ###-##-##'"
                      :readonly="!isEditable"
                    />
                  </div>
                </div>
                <div class="accountb-main__second-item">
                  <div class="accountb-main__second-item-lbl">Почта</div>
                  <div
                    class="accountb-main__second-item-val"
                    :class="{ _active: isEditable }"
                  >
                    <input
                      type="text"
                      name="prof-mail"
                      id="prof-mail"
                      v-model="email"
                      :readonly="!isEditable"
                    />
                  </div>
                </div>
                <div class="accountb-main__second-item">
                  <!-- <div class="accountb-main__second-item-lbl">Почта</div> -->
                  <div class="accountb-main__second-item-val">
                    <input
                      :class="{ _active: isEditable }"
                      @click.prevent="editProfile"
                      type="submit"
                      name="prof-save"
                      id="prof-save"
                      class="_btn"
                      value="Сохранить"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="accountb-main__second-mob">
              <div
                @click="toggleEdit"
                :class="{ _active: isEditable }"
                class="accountb-main__second-edit"
              >
                Изменить профиль
              </div>
              <button
                @click.prevent="onLogout"
                class="accountb-main__second-exit"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="accountb-tabs-wrap">
        <div class="container">
          <div class="accountb-tabs">
            <div class="accountb-tabs-header">
              <div
                v-for="tab of tabs"
                :key="tab.id"
                class="accountb-tabs-header__item"
                :class="{ _active: tab.active }"
                @click="changeTab(tab.id)"
              >
                {{ tab.name }}
              </div>
            </div>
            <div class="accountb-tabs-body">
              <div
                class="accountb-tabs-body__item body-referral"
                :class="{ _active: tabs[0].active }"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <div
                class="accountb-tabs-body__item body-wishlist"
                :class="{ _active: tabs[1].active }"
              >
                <div class="prodtabs__main products products_ld_4">
                  <CardsProduct
                    v-for="(item, index) in productsStore.favoriteProducts"
                    :key="index"
                    :product="item"
                    :id="'accountpageitem' + index"
                  />
                </div>
              </div>
              <div
                v-if="accountStore.orders.length"
                class="accountb-tabs-body__item body-orders"
                :class="{ _active: tabs[2].active }"
              >
                <div
                  v-for="order of accountStore.orders"
                  :key="order.id"
                  class="body-orders__list"
                >
                  <div class="body-orders__item">
                    <div class="body-orders__item-header">
                      <div class="body-orders__item-date">
                        Заказ от {{ formatDate(order.date) }}
                      </div>
                      <div class="body-orders__item-params">
                        
                        <span>6 уп.</span><span>10 м²</span>
                      </div>
                      <div class="body-orders__item-price"><span>120 000</span> <span>₽</span></div>
                    </div>
                    <div class="body-orders__item-body">
                      <div class="body-orders__item-img">
                        <img
                          src="@/assets/img/orders-img.png"
                          alt="Рисунки карандашом «Print»"
                        />
                      </div>
                      <div class="body-orders__item-title">
                        <div class="body-orders__item-title-first">Дизайнерский паркет</div>
                        <h2 class="body-orders__item-title-second">Рисунки карандашом «Print»</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { useTemplateRef } from 'vue'
import { useAccountStore } from '~/store/accountStore'
import { useProductsStore } from '~/store/productsStore'
import { vMaska } from 'maska/vue'
import startImg from '@/assets/img/acc-photo-def.svg'
import { clearCart } from '~/assets/js/cart'

const accountStore = useAccountStore()
const productsStore = useProductsStore()

const router = useRouter()

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
  // const index = tabs.findIndex((tab) => tab.id === id)
  // tabs[index].active = true
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

const onLogout = async () => {
  await accountStore.logout()
  await router.push('/')
  clearCart()
}

onMounted(async () => {
  if (!accountStore.isLogin) {
    router.push('/')
  } else {
    await productsStore.getFavoriteProducts()
    await accountStore.getInfoAboutMe()
    await accountStore.getOrders()

    name.value = accountStore.infoAboutMe.name
    email.value = accountStore.infoAboutMe.email
    phone.value = accountStore.infoAboutMe.phone_number

    if (accountStore.infoAboutMe.avatar && accountStore.infoAboutMe.avatar.length) {
      avatar.value = accountStore.infoAboutMe.avatar
      imgPath.value = accountStore.infoAboutMe.avatar
      startInfo.avatar = accountStore.infoAboutMe.avatar
    }

    startInfo.name = accountStore.infoAboutMe.name
    startInfo.email = accountStore.infoAboutMe.email
    startInfo.phone = accountStore.infoAboutMe.phone_number
  }
})

function formatDate(date) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]

  const newDate = new Date(date)
  const day = newDate.getDate()
  console.log('date', date)
  console.log('newDate', newDate)
  console.log('day', day)
  const month = months[newDate.getMonth()]

  return `${day} ${month}`
}
</script>
