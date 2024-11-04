<template lang="">
   <div class="popup" :class="{ _active: isOpen }" @click="detectWhere">
         <slot></slot>
   </div>
</template>
<script>
export default {
   name: "app-popup",
   props: {
      isOpen: {
         type: Boolean,
         default: false,
      },
   },
   data() {
      return {};
   },
   methods: {
      detectWhere(e) {
         if (e.target.closest(".popup__layer")) {
            this.$emit("closePopup");
         }
      },
      bodyLock() {
         const lockPaddingValue =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
         if (lockPaddingValue !== "0px") {
            document.querySelectorAll(".lock-padding").forEach((item) => {
               item.style.paddingRight = lockPaddingValue;
            });
         }
         document.querySelector("body").classList.add("lock");
      },
      bodyUnlock() {
         document.querySelectorAll(".lock-padding").forEach((item) => {
            item.style.paddingRight = "";
         });
         document.querySelector("body").classList.remove("lock");
      },
   },
   watch: {
      isOpen(value) {
         if (value) {
            this.bodyLock();
         } else {
            this.bodyUnlock();
         }
      },
   },
};
</script>
<style lang=""></style>
