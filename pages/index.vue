<template>
<main>
  <toggle />
  <div class="layout">
    <sidebar @changeComponent="changeComponent($event)" :navItems="navItems" />
    <div class="content">
      <component :is="currentComponent" v-bind="currentProps" />
    </div>
  </div>
</main>
</template>

<script>
import client from "~/plugins/contentful"
import Toggle from '../components/Toggle'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

export default {
  components: {
    Toggle,
    Sidebar,
    About,
    Projects,
    Resume,
    Contact
  },
  data() {
    return {
      navItems: [
        'About',
        'Projects',
        'Resume',
        'Contact'
      ],
      currentComponent: About
    }
  },
  computed: {
    currentProps() {
      if(this.currentComponent === About) {
        return { content: this.about }
      } else if(this.currentComponent === Resume) {
        return { 
          jobs: this.jobs.items,
          education: this.education.items
        }
      } else if(this.currentComponent === Projects) {
        return { projects: this.projects.items }
      } 
    }
  },
  methods: {
    changeComponent(component) {
      switch(component) {
        case 'About':
          this.currentComponent = About
          break
        case 'Projects':
          this.currentComponent = Projects
          break
        case 'Resume':
          this.currentComponent = Resume
          break
        case 'Contact':
          this.currentComponent = Contact
          break
      }
    }
  },  
  async asyncData() {
    let about = await client.getEntries({
      content_type: 'about'
    })

    let projects = await client.getEntries({
      content_type: 'project'
    })

    let education = await client.getEntries({
      content_type: 'education'
    })

    let jobs = await client.getEntries({
      content_type: 'job'
    })

    return {
      about: about,
      projects: projects,
      education: education,
      jobs: jobs
    }
  }
}
</script>

<style scoped>
</style>
