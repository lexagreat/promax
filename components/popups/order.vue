<template>
   <AppPopup :isOpen="isOpen" @closePopup="onClose" class="form1">
      <div class="popup-main">
         <div class="popup-main__inner">
            <div class="popup-title">Введите ваши данные:</div>
            <form class="popup-form">
               <div class="popup-form__inputs">
                  <label for="name_1">
                     <input id="name_1" name="name" type="text" placeholder="Ваше имя" class="_required">
                  </label>
                  <label for="email_1">
                     <input id="email_1" name="email" type="email" placeholder="E-mail">
                  </label>
                  <label for="phone_1">
                     <input type="tel" id="phone_1" name="phone" class="phoneNum _required"
                        placeholder="+7 (999) 999-99-99">
                  </label>
                  <label for="address_1">
                     <textarea name="address" id="address_1" placeholder="Доставка по адресу:"></textarea>
                  </label>
                  <label for="lift_1">
                     <input type="text" id="lift_1" name="lift" placeholder="Подъём (пронос в метрах, этаж, лифт):">
                  </label>
                  <label for="order-comment_1">
                     <textarea name="order-comment" id="order-comment_1" placeholder="Комментарии к заказу:"></textarea>
                  </label>
               </div>
               <div class="popup-form__btns">
                  <input class="popup-form-reset _btn" type="reset" value="Сброс">
                  <input class="popup-form-submit _btn" type="submit" value="Оформить">
               </div>
            </form>
         </div>
      </div>
      <div class="popup__layer form1__layer"></div>
   </AppPopup>
</template>
<script setup>
const props = defineProps({
   isOpen: Boolean
})
const emit = defineEmits(["closePopup"])
const onClose = () => {
   emit('closePopup')
}
</script>
