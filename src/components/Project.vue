<template>
  <div class="project-container">
    <div class="project-preview">
      <h3 class="title">{{ title }}</h3>
      <button :class="isDropdown && 'arrow-open'" class="dropdown-button" @click="handleClick">
        <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
          <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
            c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
            C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
            C255,161.018,253.42,157.202,250.606,154.389z"/>
        </svg>
      </button>
    </div>
    <div class='dropdown' :class="isDropdown && 'open'">
      <p class="caption">{{ selectedCaption }}</p>
      <MasonryGrid :images="images" @image-click="handleImageClick" />
      <Carousel v-if="isModal" :is-modal="true" @set-scroll-index="setScrollIndex" @close-modal="() => isModal = false" :start-index="scrollIndex" :images="images"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import { compileScript } from 'vue/compiler-sfc';
import Carousel from './Carousel.vue'
import MasonryGrid from './MasonryGrid.vue'
import { ref, computed } from 'vue'
const props = defineProps<{
  project: any
}>()
const isDropdown = ref(false)
const isModal = ref(false)
const handleClick = () => {
  isDropdown.value = !isDropdown.value
}
const handleImageClick = (n: number) => {
  isModal.value = !isModal.value
  setScrollIndex(n)  
}
const title = computed(() => props.project?.title)
const scrollIndex = ref(0)
const setScrollIndex = (n : any) => {
  scrollIndex.value = n
}
const selectedCaption = computed(() => props.project?.photos?.[scrollIndex.value]?.caption)
const images = computed(() => props.project?.photos)

</script>

<style lang="scss">
.project-container {
  border-top: solid 1px;
  &:last-child {
    border-bottom: solid 1px;
  }
}
.image {
  height: 200px;
  width:370px;
}
.project-preview {
  display: flex;
  justify-content: space-between;
  height: 100px;
  .title {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
}
.dropdown {
  max-height: 0;
  opacity: 0;
  transition: opacity .25s ease-in-out, max-height .5s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 0 60px;
  /* justify-content: space-evenly; */
}
.open {
  max-height: 3000px;
  opacity: 100;
  transition: opacity 2s ease-in-out, max-height 0.5s ease-in-out;
}
.dropdown-button {
  transform: rotate(0deg);
  transition: transform .25s linear;
  margin-right: 20px;
}
.arrow-open {
  transform: rotate(90deg);
  transition: transform .25s linear;
}
.caption {
  width: 100%;
}
</style>