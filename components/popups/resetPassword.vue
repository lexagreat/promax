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
              for="email_5"
              v-if="!emailSended"
            >
              <input
                type="text"
                id="email_5"
                name="name"
                class="_required"
                :class="{
                  error:
                    vEmail$.email.$dirty &&
                    (vEmail$.email.required.$invalid || vEmail$.email.email.$invalid)
                }"
                placeholder="E-mail или номер телефона:"
                v-model="vEmail.email"
              />
            </label>
            <p v-if="vEmail$.email.$dirty && vEmail$.email.required.$invalid">
              Поле Email должно быть заполнено
            </p>
            <p v-if="vEmail$.email.$dirty && vEmail$.email.email.$invalid">Невалидный Email</p>
            <p v-if="emailSended">{{ submitMessage }}</p>
          </div>
          <div class="popup-form__btns">
            <input
              v-if="!emailSended"
              class="popup-form-reset _btn"
              type="reset"
              readonly
              value="Сброс"
              @click.prevent="clear"
            />
            <input
              v-if="!emailSended"
              :class="{ active: isValidEmail }"
              class="popup-form-submit _btn"
              type="submit"
              readonly
              value="Отправить"
              @click.prevent="sendLetter"
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

let store = useAccountStore()

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['closePopup', 'openRegModal', 'success'])

const onClose = () => {
  emit('closePopup')
}

const onReg = () => {
  emit('closePopup')
  emit('openRegModal')
}

const emailSended = ref(false)
const submitMessage = ref('')

const vEmail = reactive({
  email: ''
})

const ruleEmail = {
  email: {
    required,
    email
  }
}

const vEmail$ = useVuelidate(ruleEmail, vEmail)

const isValidEmail = computed(() => {
  return vEmail$.value.$errors.length === 0
})

function clear() {
  vEmail.email = ''
}

async function sendLetter() {
  const isCorrect = await vEmail$.value.$validate()

  if (!isCorrect) {
    return
  }

  const res = await useBaseFetch('/cabinet/password-reset/', {
    method: 'POST',
    body: JSON.stringify({ email: vEmail.email })
  })

  if (res.detail) {
    submitMessage.value = res.detail
    emailSended.value = !emailSended.value
  }
}
</script>
