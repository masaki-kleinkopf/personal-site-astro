<template>
  <div class="project-container">
    <div class="project-preview">
      <h3 class="title">{{ title }}</h3>
      <button class="dropdown-button" @click="handleClick">open dropdown</button>
    </div>
    <div class='dropdown' :class="isDropdown && 'open'">
      <p class="caption">{{ selectedCaption }}</p>
      <Carousel @set-scroll-index="setScrollIndex" :images="images"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import Carousel from './Carousel.vue'
import { ref, computed } from 'vue'
const props = defineProps<{
  project: any
}>()
const isDropdown = ref(false)
const handleClick = () => {
  isDropdown.value = !isDropdown.value
}
const title = computed(() => props.project?.title)
const scrollIndex = ref(0)
const setScrollIndex = (n : any) => {
  scrollIndex.value = n
}
const selectedCaption = computed(() => props.project?.photos?.[scrollIndex.value]?.caption)
const images = computed(() => props.project?.photos)

</script>

<style>
.project-container {
  border: solid 1px;
  border-radius: 50px;
  padding: 0 40px;
}
.image {
  height: 200px;
  width:370px;
}
.project-preview {
  display: flex;
  justify-content: space-between;
  height: 70px;
}
.dropdown {
  height: 0;
  opacity: 0;
  transition: opacity .25s ease-in-out, height .5s ease-in-out;
  display: flex;
  justify-content: space-evenly;
}
.open {
  height: 300px;
  opacity: 100;
  transition: opacity 2s ease-in-out, height 0.5s ease-in-out;
}
.caption {
  width: 100%;
}
</style>