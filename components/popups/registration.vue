<template>
   <AppPopup class="registration_form" :isOpen="isOpen" @closePopup="onClose">
      <div class="popup-main">
         <div class="popup-main__inner">
            <div class="popup-title">Зарегистрируйтесь<br> для продолжения оформления</div>
            <form class="popup-form">
               <div class="popup-form__inputs">
                  <label for="name_4">
                     <input type="text" id="name_4" name="name" placeholder="Имя:" v-model="name">
                  </label>

                  <label for="email_4">
                     <input type="email" id="email_4" name="email" placeholder="E-mail:" v-model="email">
                  </label>

                  <label for="phone_4">
                     <input id="phone_4" name="phone" placeholder="Телефон:" v-maska="'+7 (###) ###-##-##'"
                        v-model="phone">
                  </label>
                  <label for="password_4">
                     <input id="password_4" type="password" name="password" placeholder="Пароль:" v-model="password">
                  </label>

                  <label for="checkbox_4">
                     <input type="checkbox" class="inpcheckbox" id="checkbox_4" name="checkbox" v-model="check">
                     <div class="i-checkbox-wrp">
                        <span class="i-checkbox"></span>
                     </div>
                     <span>Я предпочитаю не получать уведомления по электронной почте о рекламных акциях</span>
                  </label>

                  <div class="popup-form__info-policy">
                     Продолжая, вы соглашаетесь<br> с Условиями использования<br> и Политикой конфиденциальности
                  </div>
               </div>
               <div class="popup-form__btns">
                  <input class="popup-form-reset _btn" type="reset" value="Сброс" readonly @click.prevent="reset">
                  <input class="popup-form-submit _btn" value="Зарегистрироваться" readonly @click.prevent="onReg"
                     style="pointer-events: all;">
               </div>
               <div class="popup-form__bottom">
                  У вас уже есть учетная запись? <span class="login_btn">Войти</span>
               </div>
            </form>
         </div>
      </div>
      <div class="popup__layer registration__layer"></div>
   </AppPopup>
</template>
<script setup>
import isValidEmail from '~/utils/isValidEmail';
import { vMaska } from "maska/vue"
import { useAccountStore } from '~/store/accountStore';
let store = useAccountStore()
const props = defineProps({
   isOpen: Boolean,
})
const emit = defineEmits(["closePopup", "success"])
const onClose = () => {
   emit('closePopup')
}


const name = ref("")
const email = ref("")
const password = ref("")
const phone = ref("")
const check = ref(false)


const onReg = async () => {
   console.log('onReg');
   if (!check.value) {
      console.log('no check.value');
      return
   }
   let errors = 0
   if (!isValidEmail(email.value)) {
      document.querySelector('#email_4').classList.add("error")
      errors++
   }
   if (!name.value.length) {
      document.querySelector('#name_4').classList.add("error")
      errors++
   }
   if (!phone.value.length) {
      document.querySelector('#phone_4').classList.add("error")
      errors++
   }
   if (!password.value.length) {
      document.querySelector('#password_4').classList.add("error")
      errors++
   }
   if (errors > 0) return
   let object = {
      name: name.value,
      email: email.value,
      phone_number: phone.value,
      password: password.value,
   }
   let res = await store.registr(object)
   if (res) {
      emit('success')
      emit('closePopup')
   }
}
const reset = () => {
   name.value = ""
   email.value = ""
   phone.value = ""
}


watch(email, (value) => {
   if (isValidEmail(value)) {
      document.querySelector('#email_4').classList.remove("error")
   }
})
watch(name, (value) => {
   if (value) {
      document.querySelector('#name_4').classList.remove("error")
   }
})
watch(phone, (value) => {
   if (value) {
      document.querySelector('#phone_4').classList.remove("error")
   }
})
watch(password, (value) => {
   if (value) {
      document.querySelector('#password_4').classList.remove("error")
   }
})
</script>



<style lang="scss">
.error {
   border-color: red !important;
}
</style>