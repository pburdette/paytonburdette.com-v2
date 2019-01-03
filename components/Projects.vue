<template>
  <div v-html="content" class="projects"></div>
</template>

<script>
import ProjectsContent from '../static/projects.md'

export default {
  name: 'Projects',
  data() {
    return {
      content: ProjectsContent
    }
  }
}
</script>

<style lang="scss">
.projects {
  h1 {
    margin-bottom: 0;
  }
  
  h2 {
    margin-top: 30px;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  p a {
    margin-bottom: 30px;
  }
}
</style>
