<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
    class="form3"
  >
    <!-- START PopUp Услуги 4 (При клике на пункт услуг) -->
    <div class="popup-main">
      <div class="popup-main__inner">
        <div class="popup-title">Экспресс-расчет</div>
        <div class="popup-subtitle">
          Загрузите фото паркета, укажите площадь и получите быстрый расчёт.
        </div>
        <form class="popup-form">
          <div class="popup-form__inputs">
            <label for="name_3">
              <input
                id="name_3"
                name="name"
                type="text"
                placeholder="Ваше имя"
                class="_required"
              />
            </label>

            <div class="popup-form__split">
              <label for="square_3">
                <input
                  id="square_3"
                  name="square"
                  type="text"
                  placeholder="Площадь помещения, м²"
                />
              </label>
              <label for="age_3">
                <input
                  id="age_3"
                  name="age"
                  type="text"
                  placeholder="Выберите возраст паркета"
                />
                <div class="singleserv__price-table-icon">
                  <span class="i-singleserv-arrow"></span>
                </div>
              </label>
            </div>

            <label for="phone_3">
              <input
                type="tel"
                id="phone_3"
                name="phone"
                class="phoneNum _required"
                placeholder="+7 (999) 999-99-99"
              />
            </label>

            <label
              for="download_3"
              class="download-file-label"
            >
              <input
                type="file"
                name="download"
                id="download_3"
                class="download-file-input"
              />
              <span class="file-icon"></span>
              <span class="file-text">Загрузить фото</span>
              <div class="download-info__btn">
                <span>Загрузить новое</span>
              </div>
            </label>

            <div class="download-info">
              <div class="download-info__done">
                <span class="i-download-done"></span>
                <span>Загружено</span>
              </div>
            </div>
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
    <div class="popup__layer form3__layer"></div>
    <!-- START PopUp Услуги 4 (При клике на пункт услуг) -->
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
