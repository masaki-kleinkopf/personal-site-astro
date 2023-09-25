<template>
  <div class="project-container">
    <div class="project-preview">
      <h3 class="title">{{ title }}</h3>
      <button class="dropdown-button" @click="handleClick">open dropdown</button>
    </div>
    <div v-show="isDropdown" class='dropdown' :class="isDropdown && 'open'">
      <p></p>
      <Carousel/>
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
}
.dropdown {
  height: 0;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: space-evenly;
}
.open {
  height: auto;
}
</style>