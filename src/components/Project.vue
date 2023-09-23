<template>
  <div class="project-container">
    <h3 class="title">{{ isDropdown }}</h3>
    <button @click="handleClick">open dropdown</button>
    <div v-if="isDropdown" class='dropdown'>
      <Carousel />
    </div>
  </div>
</template>

<script setup>
import Carousel from './Carousel.vue'
import { ref } from 'vue'
const isDropdown = ref(false)
const handleClick = () => {
  isDropdown.value = !isDropdown.value
}
</script>

<style>
.image {
  height: 200px;
  width:370px;
}
</style>