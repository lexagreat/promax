<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
    class="form2"
  >
    <div class="popup-main">
      <div class="popup-main__inner">
        <div class="popup-title">Введите ваши данные:</div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <label for="name_2">
              <input
                id="name_2"
                name="name"
                type="text"
                placeholder="Ваше имя"
                class="_required"
              />
            </label>
            <label for="email_2">
              <input
                id="email_2"
                name="email"
                type="email"
                placeholder="E-mail"
              />
            </label>
            <label for="phone_2">
              <input
                type="tel"
                id="phone_2"
                name="phone"
                class="phoneNum _required"
                placeholder="+7 (999) 999-99-99"
              />
            </label>
            <label for="address_2">
              <textarea
                name="address"
                id="address_2"
                placeholder="Доставка по адресу:"
              ></textarea>
            </label>
            <label for="order-comment_2">
              <textarea
                name="order-comment"
                id="order-comment_2"
                placeholder="Комментарии к заказу:"
              ></textarea>
            </label>
          </div>
          <div class="popup-form__btns">
            <input
              class="popup-form-reset _btn"
              type="reset"
              value="Сброс"
            />
            <input
              class="popup-form-submit _btn"
              type="submit"
              value="Оформить"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="popup__layer form2__layer"></div>
  </AppPopup>
</template>
<script setup>
const props = defineProps({
  isOpen: Boolean
})
const emit = defineEmits(['closePopup'])
const onClose = () => {
  emit('closePopup')
}
</script>
