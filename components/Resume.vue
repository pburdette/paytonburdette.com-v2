<template>
  <div class="resume-wrapper">
    <div v-html="content" class="resume">
    </div>
    <div class="skills">
      <h2>Skills</h2>
      <div 
        v-for="skill in skills"
        :key="skill" 
        class="skill"
      >
      <span>{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeContent from '../static/resume.md'

export default {
  name: 'Resume',
  data() {
    return {
      content: ResumeContent,
      skills: [
        'HTML',
        'CSS',
        'SCSS',
        'JavaScript',
        'Vue',
        'Vuex',
        'Nuxt',
        'Node',
        'Express',
        'Sequelize'
      ]
    }
  }
}
</script>

<style lang="scss">
.resume {
  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 0;
  }

  h3 {
    margin-top: 30px;
    margin-bottom: 0;
  }
  
  p {
    margin: 0;
  }
}

.skills {
  h2 {
    margin-top: 30px;
    margin-bottom: 0;
  }
}

.skill {
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #e3e5e7;
  border-radius: 5px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
