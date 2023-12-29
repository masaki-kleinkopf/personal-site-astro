<template>
  <div :class="classes" >
    <button v-if="isModal" class="close-button" @click="$emit('closeModal')">close</button>
    <div class="embla" ref="emblaNode">
      <div class="embla__container">
        <div class="embla__slide" v-for="imageData in images" >{{ imageData.src }}<img height="600" :src="`${imageData.src}`"></div>
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
  images: any,
  startIndex: any,
  isModal: Boolean,
}>()
const startIndex = computed(() => {
  return props.startIndex})
const [emblaNode, emblaApi] = emblaCarouselVue({loop: true, startIndex: startIndex.value})
const scrollPrev = () => emblaApi.value?.scrollPrev()
const scrollNext = () => emblaApi.value?.scrollNext()
const selectedIndex = ref(emblaApi.value?.selectedScrollSnap())
const emit = defineEmits(['setScrollIndex', 'closeModal'])
const onSelect = () => {
  emit('setScrollIndex', emblaApi.value?.selectedScrollSnap())
}

watch(emblaApi, () => {
  if (emblaApi.value) emblaApi.value.on('select', onSelect)
})
const images = computed(() => props.images)
const isModal = computed(() => props.isModal)

const classes = ['carousel-container', isModal && 'modal']
</script>

<style lang="scss">

.carousel-container {
  
  width: 100%;
  margin: auto auto 50px;
  padding: 10px;

  position: relative;

  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  display: flex;
  flex-direction: column;
}

img {
  object-fit: contain;
  border-radius: 20px;
}

.carousel-buttons {
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 323px;
  button {
    font-size: 18px;
    font-style: italic;
    cursor: pointer;
  }
}

.modal {
  img {
    object-fit: contain;
    border-radius: 20px;
    margin-top: 65px;
  }
}

.close-button {
  position: relative;
  top: 100px;
  z-index: 2;
}
</style>