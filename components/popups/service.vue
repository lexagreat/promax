<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
    class="form"
  >
    <div
      class="popup-main"
      :class="{ '_with-errors': v$.$errors.length }"
    >
      <div class="popup-main__inner">
        <div class="popup-title">Введите ваши данные:</div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <p v-if="v$.name.$dirty && v$.name.required.$invalid">Поле Имя должно быть заполнено</p>
            <label for="name_1">
              <input
                v-model="vForms.name"
                @blur="vForms.name.$touch"
                id="name_1"
                name="name"
                type="text"
                placeholder="Ваше имя"
                class="_required"
              />
            </label>
            <p v-if="v$.email.$dirty && v$.email.required.$invalid">
              Поле Email должно быть заполнено
            </p>
            <p v-if="v$.email.$dirty && v$.email.email.$invalid">Невалидный email</p>
            <label for="email_1">
              <input
                @blur="vForms.email.$touch"
                v-model="vForms.email"
                id="email_1"
                name="email"
                type="email"
                placeholder="E-mail"
              />
            </label>
            <p v-if="v$.phone.$dirty && v$.phone.required.$invalid">
              Поле Телефон должно быть заполнено
            </p>
            <p v-if="v$.phone.$dirty && v$.phone.minLength.$invalid">Должно быть 11 цифр</p>
            <label for="phone_1">
              <input
                @blur="vForms.phone.$touch"
                v-model="vForms.phone"
                type="tel"
                id="phone_1"
                name="phone"
                class="phoneNum"
                v-maska="'+7 (###) ###-##-##'"
                placeholder="Телефон:"
              />
            </label>
            <p v-if="v$.address.$dirty && v$.address.required.$invalid">
              Поле Адрес должно быть заполнено
            </p>
            <label for="address_1">
              <textarea
                @blur="vForms.address.$touch"
                v-model="vForms.address"
                name="address"
                id="address_1"
                placeholder="Доставка по адресу:"
              ></textarea>
            </label>
            <p v-if="v$.lift.$dirty && v$.lift.required.$invalid">
              Поле Лифт должно быть заполнено
            </p>
            <label for="lift_1">
              <input
                @blur="vForms.lift.$touch"
                v-model="vForms.lift"
                type="text"
                id="lift_1"
                name="lift"
                placeholder="Подъём (пронос в метрах, этаж, лифт):"
              />
            </label>
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
import { reactive, computed } from 'vue'
import { vMaska } from 'maska/vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, email, required } from '@vuelidate/validators'

const props = defineProps({
  isOpen: Boolean,
  serviceId: Number,
  priceId: Number
})

const emit = defineEmits(['closePopup'])

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
  vForms.address = ''
  vForms.comment = ''
  vForms.email = ''
  vForms.lift = ''
  vForms.name = ''
  vForms.phone = ''
}

async function submit() {
  const isCorrect = await v$.value.$validate()

  if (!isCorrect) {
    return
  }

  const form = {
    name: vForms.name,
    email: vForms.email,
    phone_number: vForms.phone,
    delivery_on_order: vForms.lift,
    comments_on_order: vForms.comment,
    service: props.serviceId,
    price: props.priceId
  }

  const serviceRes = await useBaseFetch('/order/service/', {
    body: form,
    method: 'POST'
  })

  emit('closePopup')
}
</script>
