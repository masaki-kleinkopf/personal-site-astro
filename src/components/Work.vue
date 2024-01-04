
<template>
  <section class="work-container">
    <a class="anchor" id="work"></a>
    <h2 class="section-heading">Work</h2>
    <div>
      <Project v-for="project in projectData" :project="project" />
    </div>      
    <p class="pdf-info">Download a pdf of my resume <a href="/masaki-kleinkopf-resume.pdf" target="_blank">here</a></p>
  </section>

</template>

<script setup>
import { projectData } from "../project-data.js"
import Project from './Project.vue';
</script>
<style lang="scss" scoped>
.work-container {
  display: flex;
  flex-direction: column;
  .work-heading {
    font-size: 48px;
    padding-left: 30px;
  }
  .pdf-info {
    padding: .5rem 0 0 3rem;
    font-size: 1rem;
    font-style: italic;
    a {
      text-decoration: underline;
    }
  }
}


</style>