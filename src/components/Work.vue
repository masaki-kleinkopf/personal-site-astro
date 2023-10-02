
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
  padding: 0 10vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


</style>