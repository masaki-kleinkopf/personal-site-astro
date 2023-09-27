
<template>
  <section class="work-container">
    <a class="anchor" id="work"></a>
    <h2>Work</h2>      
    <Project v-for="project in projectData" :project="project"/>
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