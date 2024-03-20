<template>
  <div class="project-container" @click="handleClick">
    <div class="project-preview">
      <h3 class="title">{{ title }}<span v-if="subTitle">({{ subTitle }})</span></h3>
      <button :class="isDropdown && 'arrow-open'" class="dropdown-button" aria-label="toggle-accordion">
        <svg fill="#000000" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve">
          <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
            c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
            C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
            C255,161.018,253.42,157.202,250.606,154.389z"/>
        </svg>
      </button>
    </div>
    <div class='dropdown' :class="isDropdown && 'open'">
      <span class="description" v-html="description"></span>
      <p class="tech-stack">Tech Stack: {{ techStack }}</p>
      <MasonryGrid :images="images" />
    </div>
  </div>
</template>

<script setup>
import MasonryGrid from './MasonryGrid.vue'
import { ref, computed } from 'vue'

const props = defineProps({
  project: Object
})

const title = computed(() => props.project?.title)
const images = computed(() => props.project?.photos)
const description = computed(() => props.project?.description)
const subTitle = computed(() => props.project?.subTitle)
const techStack = computed(() => props.project?.techStack)

const isDropdown = ref(false)

const handleClick = (e) => {
  if (e.target.className !== "close-button" && e.target.tagName !== "IMG") {
    isDropdown.value = !isDropdown.value
  }
}

</script>

<style lang="scss" scoped>
.project-container {
  border-top: solid 1px;
  &:last-child {
    border-bottom: solid 1px;
  }
}
.image {
  height: 200px;
  width: 370px;
}
.project-preview {
  display: flex;
  justify-content: space-between;
  height: 5rem;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    height: 6.2rem;
	}
  .title {
    display: flex;
    align-items: center;
    padding-left: 1.25rem;
    font-size: 1.1rem;
    @media only screen and (min-width: 600px) {
      font-size: 1.4rem;
	  }
    span {
      font-size: 1rem;
      padding-left: 1rem;
      font-style: italic;
      padding-right: 0.1rem;
      @media only screen and (min-width: 600px) {
        font-size: 1.2rem;
	    }
    }
  }
}
.dropdown {
  max-height: 0;
  opacity: 0;
  // transition: opacity .25s ease-in-out, max-height .5s ease-in-out;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  overflow: hidden;
  @media only screen and (min-width: 600px) {
    padding: 0 3rem;
	}
}
.open {
  max-height: 8000px;
  opacity: 100;
  transition: opacity 1.5s ease-in-out;
}
.dropdown-button {
  transform: rotate(0deg);
  transition: transform .25s linear;
  margin: auto 1.25rem auto auto;
  height: 80%;
  display: flex;
  align-items: center;
  overflow:hidden;
  svg {
    height: 25px;
    @media only screen and (min-width: 600px) {
      height: 30px;
	  }
  }
}
.arrow-open {
  transform: rotate(90deg);
  transition: transform .25s linear;
  max-height: 70px;
}
.description {
  width: 100%;
  padding-bottom: 1rem;
  font-size: 1rem;
  :deep(a) {
    text-decoration: underline;
  }
}

.tech-stack {
  font-size: 1rem;
  font-style: italic;
  padding-bottom: 2rem;
}
</style>