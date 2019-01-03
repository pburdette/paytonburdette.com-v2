<template>
  <div class="projects">
    <h1>Projects</h1>
    <div 
      v-for="(project, index) in projects" 
      :key="index"
      class="project"
    >
      <h2>{{ project.fields.projectName }}</h2>
      <p>{{ project.fields.projectDescription }}</p>
      <a :href="project.fields.projectLink">{{ project.fields.projectLink }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    projects: Array
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 30px;
  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 5px;
  }
}
</style>
