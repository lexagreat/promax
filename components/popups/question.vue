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
            <label v-if="!accountStore.isLogin" for="name_1">
              <input
                v-model="vForms.name"
                @blur="vForms.name.$touch"
                id="name_1"
                name="name"
                type="text"
                placeholder="Ваше имя"
                class="_required"
                :class="{ error: v$.name.$dirty && v$.name.required.$invalid }"
              />
            </label>
            <p v-if="!accountStore.isLogin && v$.name.$dirty && v$.name.required.$invalid">Поле Имя должно быть заполнено</p>

            <label v-if="!accountStore.isLogin" for="email_1">
              <input
                @blur="vForms.email.$touch"
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
            <p v-if="!accountStore.isLogin && v$.email.$dirty && v$.email.email.$invalid">Невалидный email</p>

            <label v-if="!accountStore.isLogin" for="phone_1">
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
            <p v-if="!accountStore.isLogin && v$.phone.$dirty && v$.phone.minLength.$invalid">Должно быть 11 цифр</p>

            <label for="question_1">
              <textarea
                @blur="vForms.question.$touch"
                v-model="vForms.question"
                name="question"
                id="question_1"
                placeholder="Ваш вопрос:"
                :class="{ error: v$.question.$dirty && v$.question.required.$invalid }"
              ></textarea>
            </label>
            <p v-if="v$.question.$dirty && v$.question.required.$invalid">
              Поле Вопрос должно быть заполнено
            </p>
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
import { useAccountStore } from '~/store/accountStore'

const accountStore = useAccountStore()

const props = defineProps({
  isOpen: Boolean,
  serviceId: Number,
  priceId: Number
})

const emit = defineEmits(['closePopup', 'success'])

const onClose = () => {
  emit('closePopup')
}

const vForms = reactive({
  name: '',
  email: '',
  phone: '',
  question: '',
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
  question: {
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
  vForms.question = ''
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

  const form = {
    name: vForms.name,
    email: vForms.email,
    phone_number: vForms.phone,
    question: vForms.question
  }

  const res = await useBaseFetch('/blog/question/', {
    body: form,
    method: 'POST'
  })

  if (res) {
    emit('success')
    emit('closePopup')
  }
}
</script>
