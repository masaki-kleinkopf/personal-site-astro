<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__container">
      {{ emblaNode }}
      <div class="embla__slide">slide</div>
      <div class="embla__slide">slide</div>
      <div class="embla__slide">slide</div>
    </div>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
const [emblaNode] = emblaCarouselVue()
</script>