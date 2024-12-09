<template>
  <AppPopup
    class="login_form"
    :isOpen="isOpen"
    @closePopup="onClose"
  >
    <div class="popup-main">
      <div class="popup-main__inner">
        <div class="popup-title">Войти</div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <label for="email_5">
              <input
                type="text"
                id="email_5"
                name="name"
                class="_required"
                placeholder="E-mail или номер телефона:"
                v-model="emailOrPhone"
                :class="{
                  error: emailOrPasswordError
                }"
                @input="emailOrPasswordError = false"
              />
            </label>
            <p v-if="emailOrPasswordError">Невалидный email или номер телефона</p>
            <label for="password_5">
              <input
                type="password"
                id="password_5"
                name="password"
                class="_required"
                placeholder="Пароль:"
                v-model="vForms.password"
                @blur="vForms.password.$touch"
                :class="{ error: v$.password.$dirty && v$.password.required.$invalid }"
              />
            </label>
            <p v-if="v$.password.$dirty && v$.password.required.$invalid">
              Поле Телефон должно быть заполнено
            </p>

            <p v-if="submitMessage.length">{{ submitMessage }}</p>

            <div
              @click="onResetPassword"
              class="popup-form__forget-password forget_password_btn"
            >
              Я забыл/а свой пароль
            </div>
          </div>

          <div class="popup-form__btns">
            <input
              class="popup-form-reset _btn"
              type="reset"
              readonly
              value="Сброс"
              @click.prevent="clear"
            />

            <input
              class="popup-form-submit _btn"
              readonly
              value="Войти"
              :class="{ active: isValid }"
              @click.prevent="onLog"
            />
          </div>

          <div class="popup-form__bottom">
            У вас нет учетной записи?
            <span
              class="registration_btn"
              @click="onReg"
              >Зарегистрироваться</span
            >
          </div>
        </form>
      </div>
    </div>
    <div class="popup__layer login__layer"></div>
  </AppPopup>
</template>
<script setup>
import { useAccountStore } from '~/store/accountStore'
import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, email, required } from '@vuelidate/validators'

let store = useAccountStore()

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['closePopup', 'openRegModal', 'success', 'openResetPassword'])

const onClose = () => {
  emit('closePopup')
}
const onReg = () => {
  emit('closePopup')
  emit('openRegModal')
}

const onResetPassword = () => {
  emit('closePopup')
  emit('openResetPassword')
}

const submitMessage = ref('')
const emailOrPhone = ref('')
const emailOrPasswordError = ref(false)

const isValidEmailOrPhone = computed(() => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const phoneRegex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/

  if (emailOrPhone.value.match(emailRegex)) {
    return true
  } else if (emailOrPhone.value.match(phoneRegex)) {
    return true
  }

  return false
})

const vForms = reactive({
  password: ''
})

const rules = {
  password: {
    required
  }
}

const v$ = useVuelidate(rules, vForms)

const isValid = computed(() => {
  return v$.value.$errors.length === 0
})

function clear() {
  emailOrPhone.value = ''
  vForms.password = ''

  if (submitMessage.value.length) {
    submitMessage.value = ''
  }
}

const onLog = async () => {
  const isCorrect = await v$.value.$validate()

  if (!isCorrect || !isValidEmailOrPhone.value) {
    emailOrPasswordError.value = true
    return
  }

  emailOrPasswordError.value = false

  const form = {
    username: emailOrPhone.value,
    password: vForms.password
  }

  let res = await store.login(form)
  if (res && res.length) {
    submitMessage.value = res
    return
  }
  emit('success')
  emit('closePopup')
}
</script>
