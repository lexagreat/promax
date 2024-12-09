<template>
  <AppPopup
    class="registration_form"
    v-if="isOpen"
    :isOpen="isOpen"
    @closePopup="onClose"
  >
    <div
      class="popup-main"
      :class="{ '_with-errors': v$.$errors.length }"
    >
      <div class="popup-main__inner">
        <div class="popup-title">
          Зарегистрируйтесь<br />
          для продолжения оформления
        </div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <label for="name_4">
              <input
                type="text"
                id="name_4"
                name="name"
                placeholder="Имя:"
                v-model="vForms.name"
                @blur="vForms.name.$touch"
                :class="{ error: v$.name.$dirty && v$.name.required.$invalid }"
              />
            </label>
            <p v-if="v$.name.$dirty && v$.name.required.$invalid">Поле Имя должно быть заполнено</p>
            <label for="email_4">
              <input
                :class="{
                  error: v$.email.$dirty && (v$.email.required.$invalid || v$.email.email.$invalid)
                }"
                type="email"
                id="email_4"
                name="email"
                placeholder="E-mail:"
                @blur="vForms.email.$touch"
                v-model="vForms.email"
              />
            </label>
            <p v-if="v$.email.$dirty && v$.email.required.$invalid">
              Поле Email должно быть заполнено
            </p>
            <p v-if="v$.email.$dirty && v$.email.email.$invalid">Невалидный email</p>
            <label for="phone_4">
              <input
                id="phone_4"
                name="phone"
                placeholder="Телефон:"
                v-maska="'+7 (###) ###-##-##'"
                v-model="vForms.phone"
                @blur="vForms.phone.$touch"
                :class="{
                  error:
                    v$.phone.$dirty && (v$.phone.required.$invalid || v$.phone.minLength.$invalid)
                }"
              />
            </label>
            <p v-if="v$.phone.$dirty && v$.phone.required.$invalid">
              Поле Телефон должно быть заполнено
            </p>
            <p v-if="v$.phone.$dirty && v$.phone.minLength.$invalid">Должно быть 11 цифр</p>
            <label for="password_4">
              <input
                id="password_4"
                type="password"
                name="password"
                placeholder="Пароль:"
                v-model="vForms.password"
                @blur="vForms.password.$touch"
                :class="{ error: v$.password.$dirty && v$.password.required.$invalid }"
              />
            </label>
            <p v-if="v$.password.$dirty && v$.password.required.$invalid">
              Поле Телефон должно быть заполнено
            </p>
            <label
              for="checkbox_4"
              style="display: none"
            >
              <input
                type="checkbox"
                class="inpcheckbox"
                id="checkbox_4"
                name="checkbox"
              />
              <div class="i-checkbox-wrp">
                <span class="i-checkbox"></span>
              </div>
              <span
                >Я предпочитаю не получать уведомления по электронной почте о рекламных акциях</span
              >
            </label>
            <p v-if="submitMessage.length">{{ submitMessage }}</p>
            <div class="popup-form__info-policy">
              Продолжая, вы соглашаетесь<br />
              с Условиями использования<br />
              и Политикой конфиденциальности
            </div>
          </div>
          <div class="popup-form__btns">
            <input
              class="popup-form-reset _btn"
              type="reset"
              value="Сброс"
              readonly
              @click="clear"
            />
            <input
              class="popup-form-submit _btn"
              value="Зарегистрироваться"
              readonly
              :class="{ active: isValid }"
              @click.prevent="onReg"
            />
          </div>
          <div class="popup-form__bottom">
            У вас уже есть учетная запись?
            <span
              @click="onLogin"
              class="login_btn"
              >Войти</span
            >
          </div>
        </form>
      </div>
    </div>
    <div class="popup__layer registration__layer"></div>
  </AppPopup>
</template>
<script setup>
import isValidEmail from '~/utils/isValidEmail'
import { vMaska } from 'maska/vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, email, required } from '@vuelidate/validators'
import { useAccountStore } from '~/store/accountStore'

let accountStore = useAccountStore()
const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['closePopup', 'success', 'openLoginModal'])

const router = useRouter()

const onClose = () => {
  emit('closePopup')
}

const submitMessage = ref('')

const vForms = reactive({
  name: '',
  email: '',
  phone: '',
  password: ''
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
  password: {
    required
  }
}

const v$ = useVuelidate(rules, vForms)

const isValid = computed(() => {
  return v$.value.$errors.length === 0
})

function clear() {
  vForms.name = ''
  vForms.email = ''
  vForms.phone = ''
  vForms.password = ''
  vForms.check = false

  if (submitMessage.value.length) {
    submitMessage.value = ''
  }
}

const onLogin = () => {
  emit('closePopup')
  emit('openLoginModal')
}

const onReg = async () => {
  const isCorrect = await v$.value.$validate()

  if (!isCorrect) {
    return
  }

  const form = {
    name: vForms.name,
    email: vForms.email,
    phone_number: vForms.phone,
    password: vForms.password
  }

  let res = await accountStore.registr(form)

  if (res && res.length) {
    submitMessage.value = res
    return
  }

  if (submitMessage.value.length) {
    submitMessage.value = ''
  }

  router.push('/')
  emit('closePopup')
  await accountStore.getInfoAboutMe()
}
</script>

<style lang="scss">
.error {
  border-color: red !important;
}
</style>
