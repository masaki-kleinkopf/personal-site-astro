<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      <div class="embla__slide"><img src="../images/livenation-1.webp"></div>
      <div class="embla__slide">slide</div>
      <div class="embla__slide">slide</div>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
const [emblaNode] = emblaCarouselVue({loop: true})
</script>

<style>
.embla {
    overflow: hidden;
  }
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

img {
  width:600px;
  height:400px;
}
</style>