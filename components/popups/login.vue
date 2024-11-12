<template>
   <AppPopup class="login_form" :isOpen="isOpen" @closePopup="onClose">
      <div class="popup-main">
         <div class="popup-main__inner">
            <div class="popup-title">Войти</div>
            <form class="popup-form">
               <div class="popup-form__inputs">
                  <label for="email_5">
                     <input type="text" id="email_5" name="name" class="_required"
                        placeholder="E-mail или номер телефона:" v-model="email">
                  </label>

                  <label for="password_5">
                     <input type="password" id="password_5" name="password" class=" _required" placeholder="Пароль:"
                        v-model="password">
                  </label>

                  <!-- <label for="checkbox_5">
                     <input v-model="" type="checkbox" class="inpcheckbox" id="checkbox_5" name="checkbox" checked>
                     <div class="i-checkbox-wrp">
                        <span class="i-checkbox"></span>
                     </div>
                     <span>Оставаться в системе</span>
                  </label> -->

                  <div class="popup-form__forget-password forget_password_btn">
                     Я забыл/а свой пароль
                  </div>

               </div>
               <div class="popup-form__btns">
                  <input class="popup-form-reset _btn" type="reset" readonly value="Сброс" @click.prevent="reset">
                  <input class="popup-form-submit _btn" type="submit" readonly value="Войти" @click.prevent="onLog"
                     style="pointer-events: all;">
               </div>
               <div class="popup-form__bottom">
                  У вас нет учетной записи? <span class="registration_btn" @click="onReg">Зарегистрироваться</span>
               </div>
            </form>
         </div>
      </div>
      <div class="popup__layer login__layer"></div>
   </AppPopup>
</template>
<script setup>
import { useAccountStore } from '~/store/accountStore';
let store = useAccountStore()
const props = defineProps({
   isOpen: Boolean,
})
const emit = defineEmits(["closePopup", "openRegModal", "success"])
const onClose = () => {
   emit('closePopup')
}
const onReg = () => {
   emit('closePopup')
   emit('openRegModal')
}

const email = ref("")
const password = ref("")



const onLog = async () => {
   let errors = 0
   if (!email.value) {
      document.querySelector('#email_5').classList.add("error")
      errors++
   }

   if (!password.value.length) {
      document.querySelector('#password_5').classList.add("error")
      errors++
   }
   if (errors > 0) return
   let object = {
      email: email.value,
      password: password.value,
   }
   let res = await store.login(object)
   if (res) {
      emit('success')
      emit('closePopup')
   }
}
const reset = () => {
   if (email.value) {
      email.value = ""
   }

   if (password.value) {
      password.value = ""
   }
}
watch(email, (value) => {
   if (value) {
      document.querySelector('#email_5').classList.remove("error")
   }
})
watch(password, (value) => {
   if (value) {
      document.querySelector('#password_5').classList.remove("error")
   }
})

</script>