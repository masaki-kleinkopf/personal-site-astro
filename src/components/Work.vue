
<template>
  <section class="work-container">
    <a class="anchor" id="work"></a>
    <h2 class="work-heading">Work</h2>      
    <Project v-for="project in projectData" :project="project"/>
  </section>

</template>

<script setup>
import { projectData } from "../project-data.js"
import Project from './Project.vue';
</script>
<style lang="scss">
.work-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .work-heading {
    font-size: 48px;
    padding-left: 30px;
  }
}


</style>