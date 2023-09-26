<template>
  <div class="carousel-container">
    <div class="embla" ref="emblaNode">
      <div class="embla__container">
        <div class="embla__slide"><img src="../images/livenation-1.webp"></div>
        <div class="embla__slide"><img src="../images/livenation-2.png"></div>
        <div class="embla__slide">slide</div>
      </div>
    </div>
    <button @click="scrollPrev">prev</button>
    <button @click="scrollNext">next</button>
  </div>
</template>

<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import { ref, computed, watchEffect, watch } from 'vue'
const [emblaNode, emblaApi] = emblaCarouselVue({loop: true})
const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()
const selectedIndex = ref(emblaApi.value?.selectedScrollSnap())
const emit = defineEmits(['scrollIndex'])
const onSelect = () => {
  console.log("changed")
  // selectedIndex.value = emblaApi.value?.selectedScrollSnap()
  emit('setScrollIndex', emblaApi.value?.selectedScrollSnap())
}

watch(emblaApi, () => {
  if (emblaApi.value) emblaApi.value.on('select', onSelect)
})
</script>

<style>
.carousel-container {
  width: 50%;
}
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
  max-height:350px;
  max-width:500px;
  aspect-ratio: auto;
  border-radius: 10px;
}
</style>