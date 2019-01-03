<template>
  <div class="resume">
    <h1>Resume</h1>
    <div 
      v-for="(job, index) in jobs" 
      :key="index"
      class="job"
    >
    <h4>{{ job.fields.jobTitle }}</h4>
    <p>{{ job.fields.jobLength }}</p>
    <span v-html="parse(job.fields.jobHighlights)"></span>
    </div>
    <div class="education">
      <h2>Education</h2>
      <h4>{{ education[0].fields.schoolName }}</h4>
      <p>{{ education[0].fields.degree }}</p>
      <p>{{ education[0].fields.schoolLength }}</p>
      <p>{{ education[0].fields.activities}}</p>
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
import markedMixin from '../mixins/markedMixin.js'

export default {
  name: 'Resume',
  props: {
    jobs: Array,
    education: Array
  },
  mixins: [markedMixin],
  data() {
    return {
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

<style lang="scss" scoped>
.job {
  margin-bottom: 30px;
  h4 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
}

.education {
  h4 {
    margin-bottom: 0;
  }
  p {
    margin: 5px 0;
  }
}

.skills {
  h2 {
    margin-top: 30px;
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
