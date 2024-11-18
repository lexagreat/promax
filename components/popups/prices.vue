<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
    class="form3"
  >
    <!-- START PopUp Услуги 4 (При клике на пункт услуг) -->
    <div
      class="popup-main"
      :class="{ '_with-errors': v$.$errors.length }"
    >
      <div class="popup-main__inner">
        <div class="popup-title">Экспресс-расчет</div>
        <div class="popup-subtitle">
          Загрузите фото паркета, укажите площадь и получите быстрый расчёт.
        </div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <p v-if="v$.name.$dirty && v$.name.required.$invalid">Поле Имя должно быть заполнено</p>
            <label for="name_3">
              <input
                @blur="vForms.name.$touch"
                v-model="vForms.name"
                id="name_3"
                name="name"
                type="text"
                placeholder="Ваше имя"
              />
            </label>
            <p v-if="v$.square.$dirty && v$.square.$invalid">
              Поле Площадь помещения должно быть заполнено
            </p>
            <p v-if="v$.age.$dirty && v$.age.$invalid">
              Поле Возраст паркета должно быть заполнено
            </p>
            <div class="popup-form__split">
              <label for="square_3">
                <input
                  @blur="vForms.square.$touch"
                  v-model="vForms.square"
                  id="square_3"
                  name="square"
                  type="number"
                  placeholder="Площадь помещения, м²"
                />
              </label>
              <label for="age_3">
                <input
                  @blur="vForms.age.$touch"
                  v-model="vForms.age"
                  id="age_3"
                  name="age"
                  type="number"
                  placeholder="Выберите возраст паркета"
                />
                <div class="singleserv__price-table-icon">
                  <span class="i-singleserv-arrow"></span>
                </div>
              </label>
            </div>
            <p v-if="v$.phone.$dirty && v$.phone.required.$invalid">
              Поле Телефон должно быть заполнено
            </p>
            <p v-if="v$.phone.$dirty && v$.phone.minLength.$invalid">Должно быть 11 цифр</p>
            <label for="phone_3">
              <input
                @blur="vForms.phone.$touch"
                v-model="vForms.phone"
                v-maska="'+7 (###) ###-##-##'"
                type="tel"
                id="phone_3"
                name="phone"
                class="phoneNum"
                placeholder="+7 (999) 999-99-99"
              />
            </label>

            <label
              for="download_3"
              class="download-file-label"
              v-show="!vForms.photo.name"
            >
              <input
                @blur="vForms.photo.$touch"
                @change="chooseImg"
                type="file"
                name="download"
                ref="photo-input"
                id="download_3"
                class="download-file-input"
              />
              <span class="file-icon"></span>
              <span class="file-text">Загрузить фото</span>
            </label>

            <div
              v-if="vForms.photo"
              class="download-info"
            >
              <div class="download-info__done">
                <span class="i-download-done"></span>
                <span>Загружено</span>
              </div>
              <div
                v-if="vForms.photo"
                @click="reChooseImg"
                class="download-info__btn"
              >
                <span>Загрузить новое</span>
              </div>
            </div>
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
              :class="{ active: isValid }"
              class="popup-form-submit _btn"
              value="Оформить"
              @click="submit"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="popup__layer form3__layer"></div>
    <!-- START PopUp Услуги 4 (При клике на пункт услуг) -->
  </AppPopup>
</template>
<script setup>
import { reactive, computed, useTemplateRef } from 'vue'
import { vMaska } from 'maska/vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, maxLength, email, required } from '@vuelidate/validators'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['closePopup'])

const photoInput = useTemplateRef('photo-input')

const vForms = reactive({
  name: '',
  square: '',
  age: '',
  phone: '',
  photo: ''
})

const rules = computed(() => ({
  name: {
    required
  },
  square: {
    required
  },
  age: {
    required
  },
  phone: {
    required,
    minLength: minLength(18)
  }
}))

const v$ = useVuelidate(rules, vForms)

const isValid = computed(() => {
  return v$.value.$errors.length === 0
})

function chooseImg(event) {
  const files = event.target.files

  if (files.length) {
    vForms.photo = files[0]
  }
  console.log(event)
  console.log('vForms', vForms)
}

function reChooseImg() {
  photoInput.value.click()
}

function clear() {
  vForms.name = ''
  vForms.square = ''
  vForms.age = ''
  vForms.phone = ''
  vForms.photo = ''
}

async function submit() {
  console.log('submit')
  const isCorrect = await v$.value.$validate()

  if (!isCorrect) {
    console.log('not valid form')
    return
  }

  const form = new FormData()

  form.append('name', vForms.name)
  form.append('squared_metres', vForms.square)
  form.append('parquet_age', vForms.age)
  form.append('phone_number', vForms.phone)
  form.append('photo', vForms.photo)

  const pricesRes = useBaseFetch('/order/express_calc/', {
    method: 'POST',
    body: form
  })

  onClose()
}

const onClose = () => {
  emit('closePopup')
}
</script>

<style lang="scss" scoped>
#age_3 {
  padding-right: 60px;
}
</style>
