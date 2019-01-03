<template>
<main>
  <toggle />
  <div class="layout">
    <sidebar @changeComponent="changeComponent($event)" :navItems="navItems" />
    <div class="content">
      <component :is="currentComponent" />
    </div>
  </div>
</main>
</template>

<script>
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
  }
}
</script>
