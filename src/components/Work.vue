
<template>
  <section id="work" class="work-container">
    <h2>Work</h2>
    <!-- <div v-for="project in projectData"  class="project-container"> -->
      <Project v-for="project in projectData" :project="project"/>
    <!-- </div> -->
  </section>

</template>

<script setup>
import { projectData } from "../project-data.js"
import Project from './Project.vue';
</script>
<style>
.work-container {
  height: 100vh;
  padding: 0 10vw;
}
</style>