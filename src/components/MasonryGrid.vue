<template>
  <div class="masonry-grid">
    <div v-for="(imageData, idx) in images" class="item" :key="idx">
      <div class="content" @click="$emit('imageClick', idx)">
        <img :src="`${imageData.src}`" :alt="`${imageData.caption}`">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue"
const props = defineProps<{
  images: any
}>()
const images = computed(() => props.images)

const resizeGridItem = (item:any) => {
   const grid = document.getElementsByClassName("masonry-grid")[0];
   const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
   const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
   const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
   item.style.gridRowEnd = "span "+rowSpan;
   console.log("rowHeight", rowHeight)
   console.log("rowGap", rowGap)
}

const resizeAllGridItems = () => {
   const allItems = document.getElementsByClassName("item");
   console.log(allItems)
   for (let i=0;i<allItems.length;i++){
      resizeGridItem(allItems[i]);
   }
}

const emit = defineEmits(['imageClick'])

onMounted(() => {
    resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);
})
</script>

<style lang="scss">
.masonry-grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-auto-rows: 0px;
  img {
    width: 100%;
  }
}
</style>