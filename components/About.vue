<template>
  <section>
    <div v-html="content"></div>
  </section>
</template>

<script>
import AboutContent from '../static/about.md'

export default {
  name: 'About',
  data() {
    return {
      content: AboutContent
    }
  }
}
</script>

<style scoped>

</style>
