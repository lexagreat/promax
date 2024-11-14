<template>
  <section class="singleprod-imgs">
    <div class="singleprod-imgs-first">
      <div
        class="singleprod-imgs-first__item"
        v-for="image in images"
        :key="image"
      >
        <img
          :src="image"
          alt="single-prod-min"
        />
      </div>
    </div>
    <div class="singleprod-imgs-second">
      <div
        class="singleprod-imgs-second__item"
        v-for="image in images"
        :key="image"
      >
        <img
          :src="image"
          alt="single-prod-max"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
let slider, slider2
onMounted(() => {
  slider = $('.singleprod-imgs-first').slick({
    infinite: true,
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: '.singleprod-imgs-second',
    focusOnSelect: true
  })
  slider2 = $('.singleprod-imgs-second').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.singleprod-imgs-first'
  })
})
onBeforeRouteLeave(() => {
  $(document).ready(function () {
    slider.slick('unslick')
    slider2.slick('unslick')
  })
})

const props = defineProps({
  images: Array
})
</script>
