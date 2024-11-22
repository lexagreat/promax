<template>
  <AppPopup
    class="login_form"
    :isOpen="isOpen"
    @closePopup="onClose"
  >
    <div class="popup-main">
      <div class="popup-main__inner">
        <div class="popup-title">Восстановить пароль</div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <label
              for="password_5"
              v-if="!passwordChanged"
            >
              <input
                type="password"
                id="password_5"
                name="password"
                :class="{
                  error: vPassword$.password.$dirty && vPassword$.password.required.$invalid
                }"
                placeholder="Новый пароль:"
                v-model="vPassword.password"
              />
            </label>
            <p v-if="vPassword$.password.$dirty && vPassword$.password.required.$invalid">
              Поле Пароль должно быть заполнено
            </p>
            <label
              for="password_5"
              v-if="!passwordChanged"
            >
              <input
                type="password"
                id="password_5"
                name="password"
                :class="{
                  error:
                    vPassword$.passwordConfirm.$dirty &&
                    vPassword$.passwordConfirm.required.$invalid
                }"
                placeholder="Подтвердить пароль:"
                v-model="vPassword.passwordConfirm"
              />
            </label>
            <p
              v-if="
                vPassword$.passwordConfirm.$dirty && vPassword$.passwordConfirm.required.$invalid
              "
            >
              Поле Подтвердить пароль должно быть заполнено
            </p>
            <p v-if="passwordsNotMatch">Пароли не совпадают</p>
            <p v-if="submitMessage.length">{{ submitMessage }}</p>
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
              v-if="!passwordChanged"
              :class="{ active: isValidPassword }"
              class="popup-form-submit _btn"
              type="submit"
              readonly
              value="Отправить"
              @click.prevent="sendPassword"
            />
          </div>
          <!-- <div class="popup-form__bottom">
            У вас нет учетной записи?
            <span
              class="registration_btn"
              @click="onReg"
              >Зарегистрироваться</span
            >
          </div> -->
        </form>
      </div>
    </div>
    <div class="popup__layer login__layer"></div>
  </AppPopup>
</template>
<script setup>
import { useAccountStore } from '~/store/accountStore'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const route = useRoute()
const router = useRouter()

let store = useAccountStore()

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['closePopup', 'openRegModal', 'openLoginModal', 'success'])

const onClose = () => {
  emit('closePopup')
}

const onReg = () => {
  router.replace({ query: {} })
  emit('closePopup')
  emit('openRegModal')
}

const passwordChanged = ref(false)
const submitMessage = ref('')
const passwordsNotMatch = ref(false)

const vPassword = reactive({
  password: '',
  passwordConfirm: ''
})

const rulePassword = {
  password: {
    required
  },
  passwordConfirm: {
    required
  }
}

const vPassword$ = useVuelidate(rulePassword, vPassword)

const isValidPassword = computed(() => {
  return vPassword$.value.$errors.length === 0
})

function clear() {
  vPassword.password = ''
  vPassword.passwordConfirm = ''
}

async function sendPassword() {
  const isCorrect = await vPassword$.value.$validate()

  if (!isCorrect) {
    return
  }

  let { id, key } = route.query

  if (id && key) {
    if (key[key.length - 1] === '/') {
      key = key.slice(0, -1)
    }

    if (vPassword.password !== vPassword.passwordConfirm) {
      return
    }

    const res = await useBaseFetch(`/cabinet/password-reset-confirm/${id}/${key}/`, {
      method: 'POST',
      body: JSON.stringify({
        new_password: vPassword.password,
        confirm_password: vPassword.passwordConfirm
      })
    })

    if (res.name && res.name === 'FetchError') {
      submitMessage.value = 'Ошибка смены пароля'
      return
    }

    router.replace({ query: {} })
    emit('closePopup')
    emit('openLoginModal')
  }
}
</script>
