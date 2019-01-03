<template>
  <div class="sidebar">
    <ul>
      <li @click="changeComponent(item)" v-for="item in navItems" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    navItems: Array
  },
  methods: {
    changeComponent(componentName) {
      this.$emit('changeComponent', componentName)
    }
  }
}
</script>

<style scoped>

</style>
