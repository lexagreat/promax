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
                {{ name }}
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
                  <div class="accountb-main__second-item-val">
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
                  <div class="accountb-main__second-item-val">
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
                  <div class="accountb-main__second-item-val">
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
                  <div
                    :class="{ _active: !isEditable }"
                    class="accountb-main__second-item-val"
                  >
                    <input
                      @click="editProfile"
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
              <div class="accountb-tabs-header__item tab-referral">Реферальная программа</div>
              <div class="accountb-tabs-header__item tab-wishlist _active">Избранное</div>
              <div class="accountb-tabs-header__item tab-orders">Мои заказы</div>
            </div>
            <div class="accountb-tabs-body">
              <div class="accountb-tabs-body__item body-referral">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </div>
              <div class="accountb-tabs-body__item body-wishlist _active">
                <div class="prodtabs__main products products_ld_4">
                  <CardsProduct
                    v-for="(item, index) in productsStore.favoriteProducts"
                    :key="index"
                    :product="item"
                    :id="'accountpageitem' + index"
                  />
                </div>
              </div>
              <div class="accountb-tabs-body__item body-orders">
                <div class="body-orders__list">
                  <div class="body-orders__item">
                    <div class="body-orders__item-header">
                      <div class="body-orders__item-date">Заказ от 1 июля</div>
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
                  <div class="body-orders__item">
                    <div class="body-orders__item-header">
                      <div class="body-orders__item-date">Заказ от 1 июля</div>
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
                  <div class="body-orders__item">
                    <div class="body-orders__item-header">
                      <div class="body-orders__item-date">Заказ от 1 июля</div>
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
                  <div class="body-orders__item">
                    <div class="body-orders__item-header">
                      <div class="body-orders__item-date">Заказ от 1 июля</div>
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

const startInfo = {
  name: '',
  email: '',
  phone: '',
  avatar: ''
}

onMounted(async () => {
  if (!accountStore.isLogin) {
    router.push('/')
  } else {
    await productsStore.getFavoriteProducts()

    let infoAboutMe = await accountStore.getInfoAboutMe()
    name.value = infoAboutMe.name
    email.value = infoAboutMe.email
    phone.value = infoAboutMe.phone_number

    if (infoAboutMe.avatar && infoAboutMe.avatar.length) {
      avatar.value = infoAboutMe.avatar
      imgPath.value = infoAboutMe.avatar
      startInfo.avatar = infoAboutMe.avatar
    }

    startInfo.name = infoAboutMe.name
    startInfo.email = infoAboutMe.email
    startInfo.phone = infoAboutMe.phone_number
  }
})

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

async function editProfile() {
  const form = new FormData()

  if (startInfo.name !== name.value) {
    form.append('name', name.value)

    const res = await useBaseFetch('/cabinet/update/', {
      method: 'PATCH',
      body: form,
      headers: {
        Authorization: `Token ${accountStore.token}`
      }
    })

    name.value = res.name
    startInfo.name = res.name
  }

  if (startInfo.email !== email.value) {
    form.append('email', email.value)

    const res = await useBaseFetch('/cabinet/update/', {
      method: 'PATCH',
      body: form,
      headers: {
        Authorization: `Token ${accountStore.token}`
      }
    })

    email.value = res.email
    startInfo.email = res.email
  }

  if (startInfo.phone !== phone.value) {
    form.append('phone', phone.value)

    const res = await useBaseFetch('/cabinet/update/', {
      method: 'PATCH',
      body: form,
      headers: {
        Authorization: `Token ${accountStore.token}`
      }
    })

    phone.value = res.phone
    startInfo.phone = res.phone
  }

  if (startInfo.avatar !== avatar.value) {
    form.append('avatar', avatar.value)

    const res = await useBaseFetch('/cabinet/update/', {
      method: 'PATCH',
      body: form,
      headers: {
        Authorization: `Token ${accountStore.token}`
      }
    })

    avatar.value = res.avatar
    startInfo.avatar = res.avatar
  }

  // const editProfileRes = await useBaseFetch('/cabinet/update/', {
  //   method: 'PATCH',
  //   body: form,
  //   headers: {
  //     Authorization: `Token ${accountStore.token}`
  //   }
  // })

  // name.value = editProfileRes.name
  // email.value = editProfileRes.email
  // phone.value = editProfileRes.phone_number
  // avatar.value = editProfileRes.avatar
  // imgPath.value = editProfileRes.avatar

  toggleEdit()
}

const onLogout = () => {
  accountStore.logout()
  router.push('/')
}
</script>
