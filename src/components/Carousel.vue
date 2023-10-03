<template>
  <div class="carousel-container">
    <div class="embla" ref="emblaNode">
      <div class="embla__container">
        <div class="embla__slide" v-for="imageData in images">{{ imageData.src }}<img :src="`${imageData.src}`"></div>
        <div class="embla__slide">slide</div>
      </div>
    </div>
    <div class="carousel-buttons">
      <button @click="scrollPrev">previous</button>
      <button @click="scrollNext">next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { ref, computed, watchEffect, watch } from 'vue'
const props = defineProps<{
  images: any
}>()
const [emblaNode, emblaApi] = emblaCarouselVue({loop: true})
const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()
const selectedIndex = ref(emblaApi.value?.selectedScrollSnap())
const emit = defineEmits(['scrollIndex'])
const onSelect = () => {
  emit('setScrollIndex', emblaApi.value?.selectedScrollSnap())
}

watch(emblaApi, () => {
  if (emblaApi.value) emblaApi.value.on('select', onSelect)
})
const images = computed(() => props.images)
</script>

<style lang="scss">
.carousel-container {
  width: 100%;
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
  max-height:100%;
  max-width: 100%;
  aspect-ratio: auto;
  border-radius: 10px;
}

.carousel-buttons {
  display: flex;
  justify-content: space-between;
  button {
    font-size: 18px;
    font-style: italic;
    cursor: pointer;
  }
}
</style>