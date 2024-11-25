<template>
  <AppPopup
    :isOpen="isOpen"
    @closePopup="onClose"
  >
    <div class="submitted_form">
      <div class="popup-main">
        <div class="i-rocket"></div>
        <div class="submitted-text">
          <div class="submitted-text__first">Заявка оформлена</div>
          <div class="submitted-text__second">Ожидайте звонок от менеджера</div>
        </div>
      </div>
      <div class="popup__layer submitted__layer"></div>
    </div>
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

<style lang="scss" scoped></style>
