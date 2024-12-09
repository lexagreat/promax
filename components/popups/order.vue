<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
    class="form1"
  >
    <div
      class="popup-main"
      :class="{ '_with-errors': v$.$errors.length }"
    >
      <div class="popup-main__inner">
        <div class="popup-title">Введите ваши данные:</div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <label
              v-if="!accountStore.isLogin"
              for="name_1"
            >
              <input
                v-model="vForms.name"
                @blur="vForms.name.$touch"
                id="name_1"
                name="name"
                type="text"
                placeholder="Ваше имя"
                :class="{ error: v$.name.$dirty && v$.name.required.$invalid }"
              />
            </label>
            <p v-if="!accountStore.isLogin && v$.name.$dirty && v$.name.required.$invalid">
              Поле Имя должно быть заполнено
            </p>

            <label
              v-if="!accountStore.isLogin"
              for="email_1"
            >
              <input
                v-model="vForms.email"
                id="email_1"
                name="email"
                type="email"
                placeholder="E-mail"
                :class="{
                  error: v$.email.$dirty && (v$.email.required.$invalid || v$.email.email.$invalid)
                }"
              />
            </label>
            <p v-if="!accountStore.isLogin && v$.email.$dirty && v$.email.required.$invalid">
              Поле Email должно быть заполнено
            </p>
            <p v-if="!accountStore.isLogin && v$.email.$dirty && v$.email.email.$invalid">
              Невалидный email
            </p>

            <label
              v-if="!accountStore.isLogin"
              for="phone_1"
            >
              <input
                @blur="vForms.phone.$touch"
                v-model="vForms.phone"
                type="tel"
                id="phone_1"
                name="phone"
                class="phoneNum"
                v-maska="'+7 (###) ###-##-##'"
                placeholder="Телефон:"
                :class="{
                  error:
                    v$.phone.$dirty && (v$.phone.required.$invalid || v$.phone.minLength.$invalid)
                }"
              />
            </label>
            <p v-if="!accountStore.isLogin && v$.phone.$dirty && v$.phone.required.$invalid">
              Поле Телефон должно быть заполнено
            </p>
            <p v-if="!accountStore.isLogin && v$.phone.$dirty && v$.phone.minLength.$invalid">
              Должно быть 11 цифр
            </p>

            <label for="address_1">
              <textarea
                @blur="vForms.address.$touch"
                v-model="vForms.address"
                name="address"
                id="address_1"
                placeholder="Доставка по адресу:"
                :class="{ error: v$.address.$dirty && v$.address.required.$invalid }"
              ></textarea>
            </label>
            <p v-if="v$.address.$dirty && v$.address.required.$invalid">
              Поле Адрес должно быть заполнено
            </p>

            <label for="lift_1">
              <input
                @blur="vForms.lift.$touch"
                v-model="vForms.lift"
                type="text"
                id="lift_1"
                name="lift"
                placeholder="Подъём (пронос в метрах, этаж, лифт):"
                :class="{ error: v$.lift.$dirty && v$.lift.required.$invalid }"
              />
            </label>
            <p v-if="v$.lift.$dirty && v$.lift.required.$invalid">
              Поле Лифт должно быть заполнено
            </p>
            <label for="order-comment_1">
              <textarea
                @blur="vForms.comment.$touch"
                v-model="vForms.comment"
                name="order-comment"
                id="order-comment_1"
                placeholder="Комментарии к заказу:"
              ></textarea>
            </label>
          </div>
          <div class="popup-form__btns">
            <input
              readonly
              class="popup-form-reset _btn"
              type="reset"
              value="Сброс"
              @click="clear"
            />
            <input
              readonly
              class="popup-form-submit _btn"
              :class="{ active: isValid }"
              value="Оформить"
              @click="submit"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="popup__layer form1__layer"></div>
  </AppPopup>
</template>
<script setup>
import { reactive, computed, ref } from 'vue'
import { vMaska } from 'maska/vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, email, required } from '@vuelidate/validators'
import { clearCart, getCart } from '~/assets/js/cart'
import { useAccountStore } from '~/store/accountStore'
import { useProductsStore } from '~/store/productsStore'

const accountStore = useAccountStore()
const productsStore = useProductsStore()

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['closePopup', 'success'])

const onClose = () => {
  emit('closePopup')
}

const vForms = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  lift: '',
  comment: ''
})

const rules = {
  name: {
    required
  },
  email: {
    required,
    email
  },
  phone: {
    required,
    minLength: minLength(18)
  },
  address: {
    required
  },
  lift: {
    required
  }
}

const v$ = useVuelidate(rules, vForms)

const isValid = computed(() => {
  return v$.value.$errors.length === 0
})

function clear() {
  if (!accountStore.isLogin) {
    vForms.name = ''
    vForms.email = ''
    vForms.phone = ''
  }
  vForms.address = ''
  vForms.lift = ''
  vForms.comment = ''
}

async function submit() {
  if (accountStore.isLogin) {
    vForms.name = accountStore.infoAboutMe.name
    vForms.email = accountStore.infoAboutMe.email
    vForms.phone = accountStore.infoAboutMe.phone_number
  }

  const isCorrect = await v$.value.$validate()

  if (!isCorrect) {
    return
  }

  const cart = getCart()

  const form = {
    name: vForms.name,
    email: vForms.email,
    phone_number: vForms.phone,
    lift: vForms.lift,
    delivery_on_order: vForms.lift,
    comments_on_order: vForms.comment,
    order_items: []
  }

  for (const product of cart) {
    form.order_items.push({
      id: product.id,
      count: product.count
    })
  }

  const orderRes = await productsStore.makeOrder(form)

  if (orderRes) {
    clearCart()
    emit('closePopup')
    emit('success')
  }
}
</script>
