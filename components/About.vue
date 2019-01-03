<template>
  <section>
    <div id="content"></div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  name: 'About',
  props: {
    content: Object
  },
  mounted() {
    const el = document.getElementById('content')
    el.innerHTML = marked(this.content.items[0].fields.aboutMe)
  }
}
</script>

<style scoped>

</style>
